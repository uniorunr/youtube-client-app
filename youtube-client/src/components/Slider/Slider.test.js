import sliderComponent from './Slider';

describe('sliderComponent', () => {
  it('should be instance of Function', () => {
    expect(sliderComponent).toBeInstanceOf(Function);
  });

  it('should be rendered correctly if only the first argument passed', () => {
    const main = document.createElement('main');
    main.className = 'main';
    document.body.appendChild(main);
    const data = {
      testVideoId: {
        channelTitle: 'channelTitle',
        description: 'description',
        publishedAt: 'publishedAt',
        thumbnailUrl: 'thumbnailUrl',
        title: 'title',
        viewCount: 'viewCount',
      },
    };
    sliderComponent(data);
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });

  it('should be rendered correctly if two arguments passed', () => {
    const main = document.createElement('main');
    main.className = 'main';
    document.body.appendChild(main);
    const data = {
      testVideoId: {
        channelTitle: 'channelTitle',
        description: 'description',
        publishedAt: 'publishedAt',
        thumbnailUrl: 'thumbnailUrl',
        title: 'title',
        viewCount: 'viewCount',
      },
    };
    sliderComponent(data, 'test-flag');
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });

  it('should be rendered correctly if three arguments passed', () => {
    const main = document.createElement('main');
    main.className = 'main';
    document.body.appendChild(main);
    const data = {
      testVideoId: {
        channelTitle: 'channelTitle',
        description: 'description',
        publishedAt: 'publishedAt',
        thumbnailUrl: 'thumbnailUrl',
        title: 'title',
        viewCount: 'viewCount',
      },
    };
    sliderComponent(data, 'test-flag', 5);
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });

  it('should be rendered correctly if slider already contains items', () => {
    const main = document.createElement('main');
    main.className = 'main';
    document.body.appendChild(main);
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
    sliderComponent(data);
    sliderComponent(data);
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });

  it('should be rendered correctly if slider already contains items and flag is passed', () => {
    const main = document.createElement('main');
    main.className = 'main';
    document.body.appendChild(main);
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
    sliderComponent(data);
    sliderComponent(data, 'test-flag');
    expect(document.body.innerHTML).toMatchSnapshot();
    document.body.innerHTML = '';
  });
});
