/**
 * A function that converts date object to human readable time ago
 * @param {Date} date
 * @returns {string}
 * @author [YogPanjarale](https://github.com/YogPanjarale)
 */
 export function dateToTimeAgo(date: Date): string {
	const now = new Date(Date.now());
	const difftime = now.getTime() - date.getTime();
	const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000);
	const [sec, min, hr, day, month] = [
		diffDate.getSeconds(),
		diffDate.getMinutes(),
		diffDate.getHours(),
		diffDate.getDate() - 1,
		diffDate.getMonth(),
	];
	const f = (property, end) =>{
		// console.log(property,end)
		return`${property}${end}${property > 1 ? "" : ""} ago`;
	}
	// console.log(diffDate.toLocaleString());
	return month >= 1
		? f(month, "month")
		: day >= 1
		? f(day, "d")
		: hr >= 1
		? f(hr, "h")
		: min >= 1
		? f(min, "m")
		: day >= 1
		? f(sec, "s")
		: "";


	throw new Error("Date To time ago not implmented");
}