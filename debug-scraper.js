const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Base URL for the site
const BASE_URL = 'https://34296aace5.nxcli.io';

async function debugPage() {
  try {
    const url = `${BASE_URL}/user-videos/`;
    console.log(`Debugging page: ${url}`);
    
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    console.log('\n=== PAGE TITLE ===');
    console.log($('title').text());
    
    console.log('\n=== ALL H1, H2, H3 TAGS ===');
    $('h1, h2, h3').each((i, el) => {
      console.log(`${i + 1}. ${$(el).text().trim()}`);
    });
    
    console.log('\n=== ALL IMAGES ===');
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt');
      console.log(`${i + 1}. src: ${src}, alt: ${alt}`);
    });
    
    console.log('\n=== ALL LINKS ===');
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().trim();
      if (text && text.length < 100) {
        console.log(`${i + 1}. href: ${href}, text: ${text}`);
      }
    });
    
    console.log('\n=== ALL DIVS WITH CLASS ===');
    $('div[class]').each((i, el) => {
      const className = $(el).attr('class');
      const text = $(el).text().trim().substring(0, 50);
      if (text) {
        console.log(`${i + 1}. class: ${className}, text: ${text}...`);
      }
    });
    
    console.log('\n=== FULL HTML STRUCTURE (first 2000 chars) ===');
    console.log($.html().substring(0, 2000));
    
    // Save the full HTML for inspection
    fs.writeFileSync('./debug-page.html', $.html());
    console.log('\nFull HTML saved to: ./debug-page.html');
    
  } catch (error) {
    console.error('Error debugging page:', error.message);
  }
}

debugPage();
