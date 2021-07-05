interface Person {
    id: number;
    discord_tag: string;
    avatar: string | null;
    trees: number;
    deadtrees: number;
    coins: number;
    level: number; 
}
type FeedItemProp={
    userName:string,
    desciption:string,
    timeStamp:Date
}
export type { Person,FeedItemProp}