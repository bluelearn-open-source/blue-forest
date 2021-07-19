import React, { useState } from "react";
import Logo from "../components/logo";
import OnlinePeopleList from "../components/onlinePeopleList";
import { Button } from "./button";
import Feed from "./feedList";
import LeaderBoard from "./leaderboardList";
import firebase from '../utils/firebaseClient'
export default function HomePage() {
	const [leaderBoardVisible, _setLeaderBoardVisible] = useState(true);
	const [feedVisible, _setFeedVisible] = useState(false);
	const setLeaderBoardVisible = (v = true) => {
		_setLeaderBoardVisible(v);
		_setFeedVisible(!v);
	};
	const setFeedVisible = (v = true) => {
		_setFeedVisible(v);
		_setLeaderBoardVisible(!v);
	};
	return (
		<div className="flex flex-row">
			<div className="py-4 px-8 absolute ">
				<Logo mode="medium" />
			</div>
			<div className=" w-full flex flex-row justify-end p-4 ">
				<div className="flex flex-col mr-10 w-80 ">
					<div className="flex flex-row justify-evenly p-2 ">
						<Button
							onPressed={() => setFeedVisible()}
							title="Feed"
							active={feedVisible}
						></Button>
						<Button
							onPressed={() => setLeaderBoardVisible()}
							title="Leaderboard"
							active={leaderBoardVisible}
						></Button>
					</div>
					<div>
						{leaderBoardVisible ? <LeaderBoard /> : null}
						{feedVisible ? <Feed /> : null}
					</div>
				</div>
				<div className="h-full py-2">
                    <button onClick={()=>{
                        firebase.auth().signOut()
                    }}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded outline-none"
                     >
                        Logout
                    </button>
                    <div className="w-16 flex flex-row items-center justify-center mx-auto mt-2">

					<OnlinePeopleList />
                    </div>
				</div>
			</div>
		</div>
	);
}
