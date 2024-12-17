export class Beat {
    author: string;
    bpm: number;
    genre: string;
    high_quality_url : string;
    id: string;
    image: string;
    low_quality_url: string;
    name: string;
    owner_id:  string;
    price: number;
    tune: string;
    upload_status: number;

    constructor(author: string, bpm: number, genre: string, high_quality_url : string, id: string, image: string, low_quality_url: string, name: string, owner_id:  string, price: number, tune: string, upload_status: number){
        this.author = author;
        this.bpm = bpm;
        this.genre = genre;
        this.high_quality_url = high_quality_url;
        this.id = id;
        this.image = image;
        this.low_quality_url = low_quality_url;
        this.name = name;
        this.owner_id = owner_id;
        this.price = price;
        this.tune = tune;
        this.upload_status = upload_status;
    }
}
