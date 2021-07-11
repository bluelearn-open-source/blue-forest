import React from "react";
import PropTypes from "prop-types";
import { Person } from "../utils/types";

type Omitted = Omit<Person, "id">;
interface thisProps extends Omitted {
	rank: number;
}
function LeaderBoardItem({
	level,
	avatar,
	discord_tag,
	coins,
	rank,
}: thisProps) {
	function addDefaultSrc(ev) {
		ev.target.src =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HUdSftvG85fuI66IATbkxbD-cH7NrfGP7p-qX8tUJjgezF6iVjAvWcb5WO7gzCWVeNk&usqp=CAU";
	}
	//removing the discriminator
	discord_tag = discord_tag.slice(0, -5);

	return (
		<div className="inline-flex space-x-5 max-w-xs h-14 items-center justify-center mb-0.5">
			<div className="relative w-32 h-14">
				<div className={`w-${rank>=10?'28':'24'} h-3 bottom-1 left-3 absolute m-auto 
				 inset-0 bg-indigo-100 rounded-full`} />
				<img
					className="w-12 h-12 left-5 absolute 
					border rounded-full border-indigo-50"
					onError={addDefaultSrc}
					src={avatar}
				/>
				<p
					className="w-5 absolute top-1.5 my-auto left-20 text-3xl font-black tracking-widest text-blue-600"
					// style={{ left: 106, top: 10, }}
				>
					{rank}
				</p>
			</div>
			<div className="inline-flex flex-col space-y-0.5 items-center justify-end w-64 h-8">
				<p className="w-full h-full text-base font-black tracking-wider text-right text-gray-600">
					{discord_tag}
				</p>
				<p className="w-full h-full text-sm font-semibold tracking-wider text-right text-gray-600">
					{coins} Coin{coins !== 1 ? "s" : ""}
				</p>
			</div>
		</div>
	);
}

export default LeaderBoardItem;
