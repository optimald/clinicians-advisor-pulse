#!/bin/bash

# CliniciansAdvisor Development Script
# This script ensures the port is clear and starts the development server

PORT=3000
PROJECT_NAME="CliniciansAdvisor"

echo "🚀 Starting $PROJECT_NAME Development Server..."

# Function to check if port is in use
check_port() {
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port $PORT is already in use. Attempting to clear it..."
        
        # Get PID of process using the port
        PID=$(lsof -ti :$PORT)
        if [ ! -z "$PID" ]; then
            echo "🔄 Killing process $PID using port $PORT..."
            kill -9 $PID
            sleep 2
            
            # Check if port is now free
            if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
                echo "❌ Failed to clear port $PORT. Please manually stop the process using this port."
                exit 1
            else
                echo "✅ Port $PORT cleared successfully!"
            fi
        fi
    else
        echo "✅ Port $PORT is available"
    fi
}

# Function to install dependencies if needed
install_deps() {
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
        if [ $? -ne 0 ]; then
            echo "❌ Failed to install dependencies"
            exit 1
        fi
        echo "✅ Dependencies installed successfully!"
    else
        echo "✅ Dependencies already installed"
    fi
}

# Function to start development server
start_dev() {
    echo "🔥 Starting development server on port $PORT..."
    echo "🌐 Open your browser to: http://localhost:$PORT"
    echo "⏹️  Press Ctrl+C to stop the server"
    echo ""
    
    npm run dev
}

# Main execution
echo "=========================================="
echo "  $PROJECT_NAME Development Environment"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install dependencies if needed
install_deps

# Check and clear port if needed
check_port

# Start development server
start_dev
