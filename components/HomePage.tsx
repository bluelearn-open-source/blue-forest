import React, { useState } from 'react'
import Logo from '../components/logo'
import OnlinePeopleList from '../components/onlinePeopleList'
import { Button } from './button'
import Feed from './feedList'
import LeaderBoard from './leaderboardList'



export default function Home() {
    const [leaderBoardVisible, _setLeaderBoardVisible] = useState(true);
    const [feedVisible, _setFeedVisible] = useState(false);
    const setLeaderBoardVisible = (v=true)=>{
        _setLeaderBoardVisible(v);
        _setFeedVisible(!v);
    }
    const setFeedVisible = (v=true)=>{
        _setFeedVisible(v);
        _setLeaderBoardVisible(!v);
    }
    return (
        <div className='flex flex-row'>
            <div className='p-2 '>

<Logo mode='medium'/>
</div>
        <div className=" w-full flex flex-row justify-end p-4 ">
            
            <div className='flex flex-col mr-10 w-80 '>

                <div className='flex flex-row justify-evenly p-2 '>

                <Button onPressed={()=>setFeedVisible()} title="Feed" active={feedVisible}></Button>
                <Button onPressed={()=>setLeaderBoardVisible()} title="Leaderboard" active={leaderBoardVisible}></Button>
                </div>
                <div>
            {leaderBoardVisible?<LeaderBoard/>:null}
            {feedVisible?<Feed/>:null}
                </div>
            </div>
            <div className='h-full py-2'>

            <OnlinePeopleList />
            </div>
        </div>
        </div>
    )
}
