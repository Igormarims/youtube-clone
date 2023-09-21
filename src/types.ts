export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recomemmededVideos: RecommendedVideos[];
}


export interface HomePageVideos {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
    }
}

export interface CurrentPlaying {

}

export interface RecommendedVideos {
    
}

export interface Item {
    snippet: {
        title: string;
        thumbnails: { medium: { url: string } };
        publishedAt: Date;
        channelTitle: string;
        channelId: string;
      };
      contentDetails: { upload: { videoId: string } };
}