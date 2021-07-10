import { FeedItemProp } from "../utils/types";
import FeedItem from "../components/feedItem";
const getDate = (minutes: number): Date => {
	const hr = Math.floor(minutes / 60);
	const mins = minutes - hr * 60;
	const now = Date.now();
	const date = new Date(now);
	date.setHours(date.getHours() - hr, date.getMinutes() - mins);
	return date;
};
const dummyData: FeedItemProp[] = [
	{
		userName: "Yog",
		desciption: "Making BlueForest Website",
		timeStamp: getDate(7),
	},
	{
		userName: "Mahaprasad",
		desciption: "designing Forest UI",
		timeStamp: getDate(10),
	},
	{
		userName: "Manav",
		desciption: "coding an app for college project",
		timeStamp: getDate(24),
	},
	{
		userName: "Yog",
		desciption: "Making BlueForest Website",
		timeStamp: getDate(48),
	},
	{
		userName: "Mahaprasad",
		desciption: "designing Forest UI",
		timeStamp: getDate(72),
	},
	{
		userName: "Manav",
		desciption: "coding an app for college project",
		timeStamp: getDate(94),
	},
	{
		userName: "Yog",
		desciption: "Making BlueForest Website",
		timeStamp: getDate(122),
	},
	{
		userName: "Mahaprasad",
		desciption: "designing Forest UI",
		timeStamp: getDate(135),
	},
	{
		userName: "Manav",
		desciption: "coding an app for college project",
		timeStamp: getDate(150),
	},
];
export default function Feed() {
	return (
		<div className="flex justify-center p-8">
			<div className="flex flex-col">
				{dummyData.map((d, i) => (
					<FeedItem key={i + " this should work !"} {...d} />
				))}
			</div>
		</div>
	);
}
