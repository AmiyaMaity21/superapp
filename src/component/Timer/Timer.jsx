import { useState, useEffect } from "react";
import styles from "./Timer.module.css";
import up from "../../assets/icon/up.png"
import down from "../../assets/icon/down.png";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const incrementHour = () => {
        setHours((prev) => prev + 1);
    }
    const decrementHour = () => {
        if (hours === 0) {
            return;
        }
        setHours((prev) => prev - 1);
    }
    const incrementMinute = () => {
        if (minutes === 59) {
            return;
        }
        setMinutes((prev) => prev + 1);
    }
    const decrementMinute = () => {
        if (minutes === 0) {
            return;
        }
        setMinutes((prev) => prev - 1);
    }
    const incrementSecond = () => {
        if (seconds === 59) {
            return;
        }
        setSeconds((prev) => prev + 1);
    }
    const decrementSecond = () => {
        if (seconds === 0) {
            return;
        }
        setSeconds((prev) => prev - 1);
    }
    useEffect(() => {
        const convertedTime = seconds + minutes * 60 + hours * 60 * 60;
        setTimeInSeconds(convertedTime);
    }, [seconds, minutes, hours]);
    return (
        <div className={styles.timerContainer}>
            <div>
                <CountdownCircleTimer
                    isPlaying={isTimerStarted}
                    duration={timeInSeconds}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <div>
                <div className={styles.rightSide}>
                    <div>
                        <p>Hours</p>
                        <img src={up} alt="" onClick={incrementHour} />
                        <p>{hours}</p>
                        <img src={down} alt="" onClick={decrementHour} />
                    </div>
                    <div className={styles.dot}>:</div>
                    <div>
                        <p>Minutes</p>
                        <img src={up} alt="" onClick={incrementMinute} />
                        <p>{minutes}</p>
                        <img src={down} alt="" onClick={decrementMinute} />
                    </div>
                    <div className={styles.dot}>:</div>
                    <div>
                        <p>Seconds</p>
                        <img src={up} alt="" onClick={incrementSecond} />
                        <p>{seconds}</p>
                        <img src={down} alt="" onClick={decrementSecond} />
                    </div>
                </div>
                <div className={styles.button} onClick={() => setIsTimerStarted(!isTimerStarted)}>
                    {isTimerStarted ? (
                        <p>Pause</p>
                    ) : (
                        <p>Start</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Timer;