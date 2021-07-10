import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Blue Forest</title>
				<link rel="icon" href="/favicon.svg" />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="description"
					content="blueforest is a study pomodoro app made for study buddies of bluelearn community"
				/>
				<meta name="robots" content="index, follow" />
				<meta name="twitter:title" content="blueforest" />
				<meta
					name="google-site-verification"
					content="csoI53o6KYExBmUUJm52ae-G-NVYVeu3rvJui54sbvo"
				/>
				<meta
					name="twitter:description"
					content="blueforest is a study pomodoro app made for study buddies of bluelearn community"
				/>

				<link
					rel="canonical"
					href="https://clinifyforest.herokuapp.com/"
				/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mulish"></link>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Mulish"
				></link>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
