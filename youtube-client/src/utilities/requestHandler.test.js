import { fetchVideoData, fetchVideoViewCount } from './requestHandler';
import config from '../config';

function mockFetch(data) {
  return jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => data,
  }));
}

describe('fetchVideoData', () => {
  it('should be instance of Function', () => {
    expect(fetchVideoData).toBeInstanceOf(Function);
  });

  it('should return processed object with video data', async () => {
    const mockResponse = {
      items: [
        {
          id: {
            videoId: 'videoId',
          },
          snippet: {
            channelTitle: 'channelTitle',
            description: 'description',
            publishedAt: '2018-10-31T17:00:09.000Z',
            thumbnails: {
              medium: {
                url: 'thumbnailUrl',
              },
            },
            title: 'titleMoreThan60CharstitleMoreThan60CharstitleMoreThan60CharstitleMoreThan60Chars',
          },
        },
      ],
    };
    const mockVideoData = {
      videoId: {
        channelTitle: 'channelTitle',
        description: 'description',
        publishedAt: '2018-10-31',
        thumbnailUrl: 'thumbnailUrl',
        title: 'titleMoreThan60CharstitleMoreThan60CharstitleMoreThan60Charstitle...',
      },
    };
    window.fetch = mockFetch(mockResponse);

    const videoData = await fetchVideoData('test', config);
    expect(videoData).toEqual(mockVideoData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});


describe('fetchVideoViewCount', () => {
  it('should be instance of Function', () => {
    expect(fetchVideoViewCount).toBeInstanceOf(Function);
  });

  it('should return processed final data object with view count', async () => {
    const mockVideoData = {
      videoId: {
        channelTitle: 'channelTitle',
        description: 'description',
        publishedAt: '2018-10-31',
        thumbnailUrl: 'thumbnailUrl',
        title: 'title',
      },
    };
    const mockResponse = {
      items: [
        {
          id: 'videoId',
          statistics: {
            viewCount: '100500',
          },
        },
      ],
    };
    const mockVideoDataWithViewCount = {
      videoId: {
        channelTitle: 'channelTitle',
        description: 'description',
        publishedAt: '2018-10-31',
        thumbnailUrl: 'thumbnailUrl',
        title: 'title',
        viewCount: '100500',
      },
    };
    window.fetch = mockFetch(mockResponse);

    const videoDataWithViewCount = await fetchVideoViewCount(mockVideoData, config);
    expect(videoDataWithViewCount).toEqual(mockVideoDataWithViewCount);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
