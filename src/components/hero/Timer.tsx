import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.css";

export default function Timer() {
  return (
    <div className={styles.felx}>
      <TimerUseNowStop />
      <p className={styles.timer__descr}>
        Hurry up! This offer's on the clock - when the timer hits zero, it's
        gone!
      </p>
    </div>
  );
}

function TimerUseNowStop() {
  const [startAt, setStartAt] = useState<number>(
    localStorage.getItem("startAt") || Date.now()
  );
  useEffect(() => {
    localStorage.setItem("startAt", startAt.toString());
  }, [startAt]);

  const now: number = useNow(100, true, () => Date.now());

  const fromStart = now - startAt;

  const countDown = Math.max(0, 400000000 - fromStart);

  const isCountEnd: boolean = countDown === 0;

  //   const displayTime = new Date(countDown).toISOString().substr(11, 8);

  useEffect(() => {
    if (isCountEnd) {
      alert("Count down");
    }
  }, [isCountEnd]);

  return (
    <div className={styles.time__box}>
      <span className={styles.time__num}>
        {String(Math.floor(countDown / 1000 / 60 / 60) % 24).padStart(2, "0")}
      </span>
      <span className={styles.time__dots}>:</span>
      <span className={styles.time__num}>
        {String(Math.floor(countDown / 1000 / 60) % 60).padStart(2, "0")}
      </span>
      <span className={styles.time__dots}>:</span>
      <span className={styles.time__num}>
        {String(Math.floor(countDown / 1000) % 60).padStart(2, "0")}
      </span>
    </div>
  );
}

function useNow(
  updateInterval: number,
  enabled: boolean,
  cb: () => number
): number {
  const cbRef = useRef<(time: number) => void>(cb);
  cbRef.current = cb;
  const [now, setNow] = useState<number>(Date.now());

  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    setNow(Date.now());
    cbRef.current?.(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
      cbRef.current?.(Date.now());
    }, updateInterval);

    return () => {
      clearInterval(interval);
    };
  }, [updateInterval, enabled]);

  return now;
}
