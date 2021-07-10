import React, { useEffect, useState } from 'react'
import LeaderBoardItem from '../components/leaderboardItem';
import { Person } from '../utils/types';
function LeaderBoard( ) {
	const [people, setPeople] = useState<Person[]>([])
	useEffect(() => {
		fetch('/api/leaderboard')
			.then(response => response.json())
			.then(json => {
				setPeople(json.data)
			})
	}, [])
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

