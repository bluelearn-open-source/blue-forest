import React from 'react'
import Feed from './feed'
import LeaderBoard from './leaderboard'

export default function Home() {
    return (
        <div className="flex flex-row ">
            <LeaderBoard/>
            <Feed/>
        </div>
    )
}
