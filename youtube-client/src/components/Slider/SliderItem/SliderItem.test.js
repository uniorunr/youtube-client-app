import sliderItemComponent from './SliderItem';

describe('sliderItemComponent', () => {
  it('should be instance of Function', () => {
    expect(sliderItemComponent).toBeInstanceOf(Function);
  });

  it('should be rendered correctly if two arguments passed', () => {
    const data = {
      testVideoId1: {
        channelTitle: 'channelTitle1',
        description: 'description1',
        publishedAt: 'publishedAt1',
        thumbnailUrl: 'thumbnailUrl1',
        title: 'title1',
        viewCount: 'viewCount1',
      },
      testVideoId2: {
        channelTitle: 'channelTitle2',
        description: 'description2',
        publishedAt: 'publishedAt2',
        thumbnailUrl: 'thumbnailUrl2',
        title: 'title2',
        viewCount: 'viewCount2',
      },
    };
    sliderItemComponent('body', data);
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });

  it('should be rendered correctly if three arguments passed', () => {
    const data = {
      testVideoId1: {
        channelTitle: 'channelTitle1',
        description: 'description1',
        publishedAt: 'publishedAt1',
        thumbnailUrl: 'thumbnailUrl1',
        title: 'title1',
        viewCount: 'viewCount1',
      },
      testVideoId2: {
        channelTitle: 'channelTitle2',
        description: 'description2',
        publishedAt: 'publishedAt2',
        thumbnailUrl: 'thumbnailUrl2',
        title: 'title2',
        viewCount: 'viewCount2',
      },
    };
    sliderItemComponent('body', data, 5);
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });
});
