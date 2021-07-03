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
        <div className="inline-flex space-x-5 max-w-md h-20 items-center justify-center">
            <div className="relative w-40 h-20" >
                <div className="w-40 h-4 absolute m-auto inset-0 bg-indigo-50 rounded-full" />
                <img className="w-20 h-20 left-4 absolute border rounded-full border-indigo-50" onError={addDefaultSrc} src={avatar} />
                <p className="w-9 absolute top-4 left-28 text-4xl font-black tracking-widest text-blue-600" 
                // style={{ left: 106, top: 10, }}
                >{rank}</p>
            </div>
            <div className="inline-flex flex-col space-y-0.5 items-center justify-end w-64 h-14">
    <p className="w-full h-8 text-2xl font-black tracking-wider text-right text-gray-600">{discord_tag}</p>
    <p className="w-full h-7 text-2xl font-semibold tracking-wider text-right text-gray-600">{coins} Coins</p>
</div>
        </div>
    )
}



export default LeaderBoardItem

