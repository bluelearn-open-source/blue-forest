import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../utils/firebaseClient";

// Configure FirebaseUI.
const uiConfig:firebaseui.auth.Config = {
    siteName: "BlueForest",
	// Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: "/home",
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function AuthScreen() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-2xl font-semibold">Blueforest Login</h1>
			<p>Please sign-in:</p>
			<StyledFirebaseAuth
				uiConfig={uiConfig}
				firebaseAuth={firebase.auth()}
			/>
		</div>
	);
}

export default AuthScreen;
