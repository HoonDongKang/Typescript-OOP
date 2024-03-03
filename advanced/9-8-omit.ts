{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  function getVideo2(id: string): Video{
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data'
    }
  }

  type VideoMetadata = Omit<Video, 'id' | 'title'>;

  function getVideoMetadata2(id: string): VideoMetadata{
    return {
      url: 'https://..',
      data: 'byte-data'
    }
  }
}