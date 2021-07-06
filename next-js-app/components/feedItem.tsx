import { dateToTimeAgo } from "../utils/converters";
import { FeedItemProp } from "../utils/types";

export default function FeedItem({
	userName,
	desciption,
	timeStamp,
}: FeedItemProp) {
	const timeString = dateToTimeAgo(timeStamp);
	return (
		<div className="h-11 inline-flex space-x-5  max-w-xs mb-4 items-center justify-center">
			<div className="inline-flex flex-col space-y-1.5 items-start justify-start flex-1 h-full">
				<p className="w-full h-full text-base leading-tight tracking-normal text-gray-600">
					<div className="w-52 font-Mulish">
						<span className="font-black">{userName}</span> is{" "}
						{desciption.toLowerCase()}
					</div>
				</p>
				<div className="w-32 h-0.5 border border-indigo-50 bg-indigo-50" />
			</div>
			<p className="self-start pt-0.5 text-xs  font-semibold tracking-wider text-right text-indigo-900 text-opacity-25">
				{timeString}
			</p>
		</div>
	);
}
