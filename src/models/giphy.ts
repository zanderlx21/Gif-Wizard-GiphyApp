export interface GiphyMapResponse { //this is the Promise for the Fetch
    data: Data[];
}

export interface Data {
        title: string;
        url: string;
        images: Image[];
}

export interface Image {
    original: {
        url: string; // this is the link to the GIF
    }
}