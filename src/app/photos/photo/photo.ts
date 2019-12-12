export interface Photo {
    id:number;
    postDate:Date;
    description:string;
    allowComments:boolean;
    like:number;
    comments:number;
    userId:number;
}