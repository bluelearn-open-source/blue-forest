import React, { useState } from 'react'
import Logo from '../components/logo'
import OnlinePeopleList from '../components/onlinePeopleList'
import Feed from './feed'
import LeaderBoard from './leaderboard'

// a blue button that takes onPressed and title
const Button = ({onPressed,title,active})=>{
  return <button onClick={onPressed} className={`${active?'bg-blue-600':'bg-indigo-50'} p-2  px-3 rounded-full text-indigo-50 `}>
      <p className={`h-full text-lg tracking-wider ${!active?'text-blue-600':'text-indigo-50'} font-Mulish`}>{title}</p></button>
}

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
