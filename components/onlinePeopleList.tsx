import { useEffect, useState } from "react";
import { Person } from "../utils/types";

const OnlinePerson = ({ image }: { image: string }) => {
	function addDefaultSrc(ev) {
		ev.target.src =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HUdSftvG85fuI66IATbkxbD-cH7NrfGP7p-qX8tUJjgezF6iVjAvWcb5WO7gzCWVeNk&usqp=CAU";
	}
	return (
		<div className="w-12 h-12 ">
			<img
				className="flex-1 h-full  rounded-full border-green-500 border-2 bg-green-500"
				src={image}
				onError={addDefaultSrc}
			/>
			{/* <div className="flex items-end justify-end flex-1 h-full pl-9 pr-0.5 pt-10 pb-0.5 rounded-lg bg-green-500" > */}
			{/* </div> */}
		</div>
	);
};

const More = ({ num }: { num: number }) => {
	return (
		<div className="h-12 w-12 py-2  items-center p-auto rounded-full bg-green-500 border-2 ">
			<p
				className={` text-${
					num > 99 ? "1" : "2"
				}xl tracking-wider text-center text-indigo-50`}
			>
				+{num}
			</p>
		</div>
	);
};
export default function OnlinePeopleList() {
	const [people, setPeople] = useState<Person[]>([]);
	const [length, setLength] = useState(0);
	useEffect(() => {
		fetch("/api/getOnlinePeople")
			.then((response) => response.json())
			.then((json) => {
				setPeople(json.data);
				setLength(json.length);
				console.log(people.length);
			});
	}, []);
	return (
		<div
			className=" flex flex-col  items-center 
		justify-between h-full space-y-3 py-2 
		 p-2  bg-indigo-50 rounded-full"
		>
			{people.slice(0, 9).map((p, i) => (
				<OnlinePerson key={"this will work" + i} image={p.avatar} />
			))}
			{people.length >= 10 ? (
				<More num={people.length - 9} />
			) : (
				<More num={length - 9} />
			)}
		</div>
	);
}
