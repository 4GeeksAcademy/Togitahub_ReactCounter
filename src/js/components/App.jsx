import React from "react";
import Countdown from "./Countdown";
import StopButton from "./controllers/StopButton";
import ResumeButton from "./controllers/ResumeButton";
import RestartButton from "./controllers/RestartButton";
import RegresiveInput from "./controllers/RegresiveInput";
import Title from "./Title";

const App = () => {
	return (
		<div className="container">
			<Title />
			<Countdown initialCount={0}>
				<div className="row justify-content-center">
					<StopButton />
					<ResumeButton />
					<RestartButton />
				</div>
				<div className="row justify-content-center">
					<RegresiveInput />
				</div>
			</Countdown>
		</div>
	);
};

export default App;