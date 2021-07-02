import React from 'react'
import PropTypes from 'prop-types'
import { Person } from '../utils/types'

type Omitted = Omit<Person,"id">
interface thisProps extends Omitted
{
  rank: number;
}
function LeaderBoardItem({level,avatar,discord_tag,coins,rank}:thisProps) {
    function addDefaultSrc(ev){
        ev.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HUdSftvG85fuI66IATbkxbD-cH7NrfGP7p-qX8tUJjgezF6iVjAvWcb5WO7gzCWVeNk&usqp=CAU'
      }
  //removing the discriminator
  discord_tag = discord_tag.slice(0, -5);

    return (
        <div className="inline-flex space-x-5 items-center justify-center" style={{ width: 440, height: 80, }}>
            <div className="relative" style={{ width: 160, height: 80, }}>
                <div className="w-40 h-4 absolute m-auto inset-0 bg-indigo-50 rounded-full" />
                <img className="w-20 h-20 absolute border rounded-full border-indigo-50" style={{ left: 16, top: 0, }} onError={addDefaultSrc} src={avatar} />
                <p className="w-9 absolute text-5xl font-black tracking-widest text-blue-600" style={{ left: 106, top: 10, }}>{rank}</p>
            </div>
            <p className="flex-1 text-2xl tracking-wider text-right text-gray-600">{discord_tag}<br />{coins} Coins</p>
        </div>
    )
}



export default LeaderBoardItem

