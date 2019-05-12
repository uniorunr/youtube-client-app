const formatDate = (date) => {
  const d = new Date(date);
  let month = `${(d.getMonth() + 1)}`;
  let day = `${d.getDate()}`;
  const year = `${d.getFullYear()}`;

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

const encodeStringAndSetLength = (initText, maxLength) => {
  let text = initText;
  if (text.length > maxLength) {
    text = `${text.split('').splice(0, 65).join('')}...`;
  }
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

const fetchVideoData = async (query, config, nextPageToken) => {
  let response = null;
  if (!nextPageToken) {
    response = await fetch(`${config.api_type.search}&key=${config.api_key}&maxResults=${config.max_results}&q=${query}`);
  } else {
    response = await fetch(`${config.api_type.search}&key=${config.api_key}&maxResults=${config.max_results}&q=${query}&pageToken=${nextPageToken}`);
  }
  const responseJSON = await response.json();
  const data = {};

  responseJSON.items.forEach((item) => {
    data[item.id.videoId] = {
      title: encodeStringAndSetLength(item.snippet.title, 60),
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.medium.url,
      publishedAt: formatDate(item.snippet.publishedAt),
    };
  });

  const pageToken = sessionStorage.getItem('pageToken');
  if (pageToken === responseJSON.nextPageToken) {
    return false;
  }
  sessionStorage.setItem('pageToken', responseJSON.nextPageToken);

  return data;
};

const fetchVideoViewCount = async (data, config) => {
  if (!data) return false;

  const finalData = JSON.parse(JSON.stringify(data));
  const ids = Object.keys(data).join();
  const response = await fetch(`${config.api_type.videos}?key=${config.api_key}&id=${ids}&part=statistics`);
  const responseJSON = await response.json();

  responseJSON.items.forEach((item) => {
    finalData[item.id].viewCount = item.statistics.viewCount;
  });

  sessionStorage.setItem('data', JSON.stringify(finalData));

  return finalData;
};

export { fetchVideoData, fetchVideoViewCount };
