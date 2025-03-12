import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter";
import StopButton from "./controllers/StopButton";
import ResumeButton from "./controllers/ResumeButton";
import RestartButton from "./controllers/RestartButton";
import RegresiveInput from "./controllers/RegresiveInput";
import Title from "./Title";

const App = () => {
	const [count, setCount] = useState(0);
	const [targetCount, setTargetCount] = useState(null);
	const [isCountingDown, setIsCountingDown] = useState(false);
	const [isRunning, setIsRunning] = useState(true);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (isRunning) {
			if (isCountingDown && count > 0) {
				intervalRef.current = setInterval(() => {
					setCount((prevCount) => prevCount - 1);
				}, 1000);
			} else if (!isCountingDown && targetCount !== null && count >= targetCount) {
				setIsCountingDown(true);
				setCount(targetCount);
			} else if (!isCountingDown) {
				intervalRef.current = setInterval(() => {
					setCount((prevCount) => prevCount + 1);
				}, 1000);
			} else if (isCountingDown && count === 0) {
				clearInterval(intervalRef.current);
				setIsRunning(false);
				setIsCountingDown(false);
				setTargetCount(null);
			}
		} else {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [isRunning, count, isCountingDown, targetCount]);

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleResume = () => {
		setIsRunning(true);
	};

	const handleRestart = () => {
		setCount(0);
		setIsCountingDown(false);
		setIsRunning(true);
	};

	const handleSetCount = (value) => {
		setTargetCount(value);
	};

	return (
		<div className="container-fluid">
			<Title />
			<Counter count={count} />
			<div className="row justify-content-center my-5">
				<StopButton onStop={handleStop} />
				<ResumeButton onResume={handleResume} />
				<RestartButton onRestart={handleRestart} />
				<RegresiveInput onSetCount={handleSetCount} />
			</div>
		</div>
	);
};

export default App;