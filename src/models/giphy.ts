export interface GiphyMapResponse { //this is the Promise for the Fetch
    data: Giphy[];
}

export interface Giphy {
        title: string;
        url: string;
        id: string;
        images: Images;
}

export interface Images {
    original: OriginalImage;
}

export interface OriginalImage {
    url: string;
}