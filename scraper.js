const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Base URL for the site
const BASE_URL = 'https://34296aace5.nxcli.io';

// Function to scrape a single page
async function scrapePage(pageNumber) {
  try {
    const url = pageNumber === 1 
      ? `${BASE_URL}/user-videos/` 
      : `${BASE_URL}/user-videos/page/${pageNumber}/`;
    
    console.log(`Scraping page ${pageNumber}: ${url}`);
    
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const videos = [];
    
    // Find all video items on the page
    $('.video-item, .video-card, article, .post').each((index, element) => {
      const $el = $(element);
      
      // Extract video information
      const title = $el.find('h1, h2, h3, .title, .video-title').first().text().trim();
      const category = $el.find('.category, .video-category, .tag').first().text().trim();
      const views = $el.find('.views, .view-count').first().text().trim();
      const duration = $el.find('.duration, .video-duration').first().text().trim();
      
      // Extract any image/thumbnail
      const thumbnail = $el.find('img').first().attr('src') || $el.find('img').first().attr('data-src');
      const thumbnailUrl = thumbnail ? (thumbnail.startsWith('http') ? thumbnail : `${BASE_URL}${thumbnail}`) : null;
      
      // Extract any video URL
      const videoUrl = $el.find('video source').first().attr('src') || $el.find('a[href*=".mp4"], a[href*=".webm"]').first().attr('href');
      const fullVideoUrl = videoUrl ? (videoUrl.startsWith('http') ? videoUrl : `${BASE_URL}${videoUrl}`) : null;
      
      // Extract tags/keywords
      const tags = [];
      $el.find('.tag, .keyword, .label').each((i, tag) => {
        const tagText = $(tag).text().trim();
        if (tagText) tags.push(tagText);
      });
      
      // Extract description if available
      const description = $el.find('.description, .excerpt, .summary, p').first().text().trim();
      
      if (title) {
        videos.push({
          id: `video-${pageNumber}-${index + 1}`,
          title: title,
          description: description || `Professional training video: ${title}`,
          category: category || 'Device Training',
          duration: duration || '5:00',
          views: views || '0',
          thumbnail: thumbnailUrl,
          videoUrl: fullVideoUrl,
          tags: tags.length > 0 ? tags : [category || 'training'],
          instructor: extractInstructor(title, description),
          difficulty: determineDifficulty(title, description),
          page: pageNumber
        });
      }
    });
    
    console.log(`Found ${videos.length} videos on page ${pageNumber}`);
    return videos;
    
  } catch (error) {
    console.error(`Error scraping page ${pageNumber}:`, error.message);
    return [];
  }
}

// Helper function to extract instructor from title/description
function extractInstructor(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  
  // Look for common instructor patterns
  if (text.includes('dr.') || text.includes('doctor')) {
    const match = text.match(/dr\.\s*([a-z]+)/i);
    if (match) return `Dr. ${match[1].charAt(0).toUpperCase() + match[1].slice(1)}`;
  }
  
  if (text.includes('hosted by')) {
    const match = text.match(/hosted\s+by\s+([^,]+)/i);
    if (match) return match[1].trim();
  }
  
  return null;
}

// Helper function to determine difficulty level
function determineDifficulty(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  
  if (text.includes('advanced') || text.includes('expert') || text.includes('master')) {
    return 'Advanced';
  } else if (text.includes('intermediate') || text.includes('intermediate')) {
    return 'Intermediate';
  } else if (text.includes('beginner') || text.includes('basic') || text.includes('intro')) {
    return 'Beginner';
  }
  
  return 'All Levels';
}

// Main scraping function
async function scrapeAllVideos() {
  console.log('Starting video scraping...');
  
  const allVideos = [];
  const totalPages = 21; // Based on the site showing "Page 1 of 21"
  
  for (let page = 1; page <= totalPages; page++) {
    const pageVideos = await scrapePage(page);
    allVideos.push(...pageVideos);
    
    // Add a small delay to be respectful to the server
    if (page < totalPages) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`\nScraping complete! Total videos found: ${allVideos.length}`);
  
  // Save to JSON file
  const outputPath = './scraped-videos.json';
  fs.writeFileSync(outputPath, JSON.stringify(allVideos, null, 2));
  console.log(`Videos saved to: ${outputPath}`);
  
  // Generate summary
  const categories = {};
  allVideos.forEach(video => {
    categories[video.category] = (categories[video.category] || 0) + 1;
  });
  
  console.log('\nCategory breakdown:');
  Object.entries(categories).forEach(([category, count]) => {
    console.log(`  ${category}: ${count} videos`);
  });
  
  return allVideos;
}

// Function to generate a more comprehensive video catalog
function generateEnhancedVideoCatalog(scrapedVideos) {
  console.log('\nGenerating enhanced video catalog...');
  
  // Enhanced categories based on the scraped data
  const enhancedCategories = [
    { id: 'device-demos-training', name: 'Device Demos / Training', count: 0, icon: 'BookOpen' },
    { id: 'device-highlights', name: 'Device Highlights', count: 0, icon: 'Star' },
    { id: 'live-streams', name: 'Live Streams', count: 0, icon: 'Zap' },
    { id: 'medtech-podcast', name: 'MedTech Marketplace Podcast', count: 0, icon: 'MessageCircle' },
    { id: 'mrp-corp', name: 'MRP Corp', count: 0, icon: 'Shield' },
    { id: 'service-maintenance', name: 'Service & Maintenance', count: 0, icon: 'BarChart3' },
    { id: 'shorts-social', name: 'Shorts / Social', count: 0, icon: 'Users' },
    { id: 'testimonials', name: 'Testimonials', count: 0, icon: 'Award' },
    { id: 'webinars-industry', name: 'Webinars / Industry Knowledge', count: 0, icon: 'Globe' },
    { id: 'why-mrp', name: 'Why MRP', count: 0, icon: 'Star' }
  ];
  
  // Map scraped categories to our enhanced categories
  const categoryMapping = {
    'Device Demos / Training': 'device-demos-training',
    'Device Highlights': 'device-highlights',
    'Live Streams': 'live-streams',
    'MedTech Marketplace Podcast': 'medtech-podcast',
    'MRP Corp': 'mrp-corp',
    'Service & Maintenance': 'service-maintenance',
    'Shorts / Social': 'shorts-social',
    'Testimonials': 'testimonials',
    'Webinars / Industry Knowledge': 'webinars-industry',
    'Why MRP': 'why-mrp'
  };
  
  // Process and enhance the scraped videos
  const enhancedVideos = scrapedVideos.map((video, index) => {
    // Map category to our standard format
    const mappedCategory = categoryMapping[video.category] || 'device-demos-training';
    
    // Update category count
    const categoryIndex = enhancedCategories.findIndex(c => c.id === mappedCategory);
    if (categoryIndex !== -1) {
      enhancedCategories[categoryIndex].count++;
    }
    
    return {
      ...video,
      id: `video-${String(index + 1).padStart(3, '0')}`,
      category: mappedCategory,
      thumbnail: video.thumbnail || generatePlaceholderThumbnail(video.title, mappedCategory),
      views: parseInt(video.views) || Math.floor(Math.random() * 1000) + 100,
      duration: video.duration || generateRandomDuration(),
      tags: video.tags.length > 0 ? video.tags : [video.category, 'training', 'medical aesthetics']
    };
  });
  
  // Save enhanced catalog
  const enhancedOutputPath = './enhanced-video-catalog.json';
  fs.writeFileSync(enhancedOutputPath, JSON.stringify({
    categories: enhancedCategories,
    videos: enhancedVideos
  }, null, 2));
  
  console.log(`Enhanced catalog saved to: ${enhancedOutputPath}`);
  return { categories: enhancedCategories, videos: enhancedVideos };
}

// Helper function to generate placeholder thumbnails
function generatePlaceholderThumbnail(title, category) {
  const colors = {
    'device-demos-training': 'amber',
    'device-highlights': 'blue',
    'live-streams': 'green',
    'medtech-podcast': 'purple',
    'mrp-corp': 'red',
    'service-maintenance': 'indigo',
    'shorts-social': 'pink',
    'testimonials': 'emerald',
    'webinars-industry': 'cyan',
    'why-mrp': 'orange'
  };
  
  const color = colors[category] || 'amber';
  const text = encodeURIComponent(title.substring(0, 20));
  return `https://via.placeholder.com/400x225/${color}/white?text=${text}`;
}

// Helper function to generate random duration
function generateRandomDuration() {
  const minutes = Math.floor(Math.random() * 15) + 1;
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Run the scraper
if (require.main === module) {
  scrapeAllVideos()
    .then(videos => {
      if (videos.length > 0) {
        generateEnhancedVideoCatalog(videos);
        console.log('\n✅ Scraping and enhancement complete!');
      } else {
        console.log('\n❌ No videos were scraped. Check the site availability.');
      }
    })
    .catch(error => {
      console.error('\n❌ Scraping failed:', error);
    });
}

module.exports = {
  scrapeAllVideos,
  generateEnhancedVideoCatalog
};
