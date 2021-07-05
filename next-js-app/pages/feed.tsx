import { FeedItemProp } from "../utils/types"
import FeedItem from "../components/feedItem"
const getDate=(minutes:number):Date=>{
    const hr = Math.floor(minutes/60)
    const mins = minutes - (hr*60)
    const now= Date.now()
    const date= new Date(now)
    date.setHours(date.getHours()-hr,date.getMinutes()-mins)
    return date
}
const dummyData:FeedItemProp[]=[
    {
        userName:"Yog",
        desciption:"Making BlueForest Website",
        timeStamp:getDate(60)
    },
    {
        userName:"Mahaprasad",
        desciption:"designing Forest UI",
        timeStamp:getDate(60)
    },
    {
        userName:"Manav",
        desciption:"coding an app for college project",
        timeStamp:getDate(60)
    },
    {
        userName:"Yog",
        desciption:"Making BlueForest Website",
        timeStamp:getDate(60)
    },
    {
        userName:"Mahaprasad",
        desciption:"designing Forest UI",
        timeStamp:getDate(60)
    },
    {
        userName:"Manav",
        desciption:"coding an app for college project",
        timeStamp:getDate(60)
    },
    {
        userName:"Yog",
        desciption:"Making BlueForest Website",
        timeStamp:getDate(60)
    },
    {
        userName:"Mahaprasad",
        desciption:"designing Forest UI",
        timeStamp:getDate(60)
    },
    {
        userName:"Manav",
        desciption:"coding an app for college project",
        timeStamp:getDate(60)
    },
]
export default function Feed() {
    return (
        <div className="flex justify-center p-8">
            <div className="flex flex-col">
                {
                    dummyData.map(d=>(<FeedItem {...d}/>))
                }
            </div>
        </div>
    )
}
