import { FeedItemProp } from "../utils/types";


export default function FeedItem({userName,desciption,timeStamp}:FeedItemProp) {
    return (
        <div className="inline-flex space-x-5 mb-3 max-w-xs h-20 items-center justify-center" >
    <div className="inline-flex flex-col space-y-3 items-start justify-start flex-1 h-full">
        <p className="w-full text-xl tracking-wider text-gray-600">
            <span className="font-black">{userName}</span> is {desciption}</p>
        <div className="w-32 h-0.5 border border-indigo-50 bg-indigo-50"/>
    </div>
    <p className="w-1/5 text-lg font-semibold tracking-wider text-right text-indigo-900 text-opacity-25">1h ago</p>
</div>
    )
}
