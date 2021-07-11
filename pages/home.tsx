import React from 'react'
import OnlinePeopleList from '../components/onlinePeopleList'
import Feed from './feed'
import LeaderBoard from './leaderboard'

export default function Home() {
    return (
        <div className="flex flex-row ">
            <LeaderBoard/>
            <Feed/>
            <OnlinePeopleList/>
        </div>
    )
}
