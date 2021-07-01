import React from 'react'
import PropTypes from 'prop-types'
import LeaderBoardItem from '../components/leaderboardItem';
import { Person } from '../utils/types';
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

LeaderBoard.propTypes = {

}

export default LeaderBoard


export async function getServerSideProps({ params }) {
	const req = await fetch(
		`https://clinifyforest.herokuapp.com/clinifyforest/api/getlb/10`
		,
	);
	let data: Person[] = await req.json();
	console.log(data);
	
	// converting profile pic id to link
	data= data.map((d)=>{
		console.log(d.id,d.avatar);
		
		d.avatar= `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.png`
		
		return d
	})
	// console.log(d/);
	return {
		props: { people: data },
	};
}