import React from 'react'
import LeaderBoardItem from '../components/leaderboardItem';
import { Person } from '../utils/types';
import JSONb from 'json-bigint';
function LeaderBoard({ people }: { people: Person[] }) {
    return (
        <div className="flex flex-col ">
			{people.map((p,i)=>
		
				(

           <LeaderBoardItem key={"this will work"+i} rank={i+1} {...p}/> 
				))}
        </div>
    )
}


export default LeaderBoard


export async function getServerSideProps({ params }) {
	const req = await fetch(
		`https://clinifyforest.herokuapp.com/clinifyforest/api/getlb/10`
		,
	);
	const text = await req.text();
	let data: Person[] = JSONb.parse(text);
	// console.log(data);
	// converting profile pic id to link
	data = data.map((d)=>{
		console.log(d.id,d.avatar);
		let t:any = d.id;
		let bi:BigInt  = BigInt(d.id)
		d.id=bi.toString() as unknown as number
		d.avatar= `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.png`
		
		return d
	})
	// console.log(d/);
	return {
		props: { people: data },
	};
}