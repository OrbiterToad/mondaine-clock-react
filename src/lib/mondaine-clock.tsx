import React, {useEffect, useState} from "react";
import {SecondHand} from "./parts/second-hand";
import {HourHand} from "./parts/hour-hand";
import {WatchFace} from "./parts/watch-face";
import {MinuteHand} from "./parts/minute-hand";
import {MinuteAnimationType, ONE_SECOND, TEN_MILLISECONDS, TickType} from "./constants";

type MondaineClockProps = {
    width?: string;
    tickType?: TickType;
    minuteAnimationType?: MinuteAnimationType;
    fixedDate?: Date | undefined;
    showSecondsHand?: boolean;
    showCenterDot?: boolean;
    faceColor?: string;
    faceBackgroundColor?: string;
    secondsHandColor?: string;
    minutesHandColor?: string;
    hoursHandColor?: string;
}

export const MondaineClock = (props: MondaineClockProps) => {

    const {
        width = '100%',
        tickType = TickType.MECHANICAL,
        minuteAnimationType = MinuteAnimationType.SMOOTH,
        fixedDate = undefined,
        showSecondsHand = true,
        showCenterDot = true,
        faceColor = '#0e0e10',
        faceBackgroundColor = '#ffffff',
        secondsHandColor = '#eb0000',
        minutesHandColor = '#0e0e10',
        hoursHandColor = '#0e0e10',
    } = props;

    const [time, setTime] = useState<Date>(fixedDate ? fixedDate : new Date());

    useEffect(() => {
        if (fixedDate) {
            setTime(fixedDate);
        } else {
            const interval = setInterval(() => {
                setTime(new Date());
            }, tickType === TickType.QUARTZ ? ONE_SECOND : TEN_MILLISECONDS);
            return () => clearInterval(interval);
        }
    }, [fixedDate, tickType,]);

    return (
        <svg viewBox={'0 0 100 100'} width={width}>
            <WatchFace
                fillColor={faceBackgroundColor}
                strokeColor={faceColor}
            />
            <HourHand
                time={time}
                fillColor={hoursHandColor}
            />
            <MinuteHand
                tickType={tickType}
                time={time}
                fillColor={minutesHandColor}
                animation={minuteAnimationType}
            />
            {showSecondsHand
                && <SecondHand
                    time={time}
                    tickType={tickType}
                    fillColor={secondsHandColor}
                    showCenterDot={showCenterDot}
                />}
        </svg>
    );

}