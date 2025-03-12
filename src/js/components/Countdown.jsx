import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter";

const Countdown = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning && count > 0) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
            if (count === 0) {
                setIsRunning(false);
            }
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning, count]);

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    const handleRestart = () => {
        setIsRunning(false);
        setCount(initialCount);
    };

    const handleSetCount = (value) => {
        setCount(value);
        setIsRunning(true);
    };

    return (
        <div>
            <Counter count={count} />
            {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {
                    onStop: handleStop,
                    onResume: handleResume,
                    onRestart: handleRestart,
                    onSetCount: handleSetCount
                });
            })}
        </div>
    );
};

export default Countdown;