const config = {
  api_key: '', // Youtube API key
  api_type: {
    search: 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet',
    videos: 'https://www.googleapis.com/youtube/v3/videos',
  },
  max_results: 15,
};

export default config;
