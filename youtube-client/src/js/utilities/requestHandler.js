const fetchVideoData = async (query, config) => {
  const response = await fetch(`${config.api_type.search}&key=${config.api_key}&maxResults=${config.max_results}&q=${query}`);
  const responseJSON = await response.json();
  const data = {};

  const formatDate = (date) => {
    const d = new Date(date);
    let month = `${(d.getMonth() + 1)}`;
    let day = `${d.getDate()}`;
    const year = `${d.getFullYear()}`;

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join('-');
  };

  responseJSON.items.forEach((item) => {
    data[item.id.videoId] = {
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.medium.url,
      publishedAt: formatDate(item.snippet.publishedAt),
    };
  });
  return data;
};

const fetchVideoViewCount = async (data, config) => {
  const finalData = JSON.parse(JSON.stringify(data));
  const ids = Object.keys(data).join();
  const response = await fetch(`${config.api_type.videos}?key=${config.api_key}&id=${ids}&part=statistics`);
  const responseJSON = await response.json();

  responseJSON.items.forEach((item) => {
    finalData[item.id].viewCount = item.statistics.viewCount;
  });

  return finalData;
};

export { fetchVideoData, fetchVideoViewCount };
