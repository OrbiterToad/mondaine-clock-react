import React from "react";
import {MinuteAnimationType, ONE_SECOND, TickType} from "../constants";

type Props = {
    time: Date;
    fillColor?: string;
    tickType?: TickType
    animation: MinuteAnimationType;
}

export function MinuteHand(props: Props) {

    const {
        tickType = TickType.MECHANICAL,
        time,
        fillColor,
        animation
    } = props;

    const seconds = time.getMilliseconds() / ONE_SECOND + time.getSeconds();
    const minutes = time.getMinutes()
    let rotation: string;

    // make a little bounce animation on second 59.75 to 60
    // bounce for half a degree further then go back to the original position

    if (tickType === TickType.QUARTZ) {
        rotation = `rotate(${(360 / 60) * Number(minutes)}, 50, 50)`;
    } else if (seconds < 1 && animation === MinuteAnimationType.SMOOTH && tickType === TickType.MECHANICAL) {
        const rotationPercentage = seconds * 100;
        rotation = `rotate(${(360 / 60) * (Number(minutes) - 1) + (rotationPercentage / 100) * 6}, 50, 50)`;
    } else if (seconds > 59.95 && animation === MinuteAnimationType.JUMP && tickType === TickType.MECHANICAL) {
        rotation = `rotate(${(360 / 60) * (Number(minutes) + .8)}, 50, 50)`;
    } else if (seconds > 59.75 && animation === MinuteAnimationType.JUMP && tickType === TickType.MECHANICAL) {
        rotation = `rotate(${(360 / 60) * (Number(minutes) + 1.3)}, 50, 50)`;
    } else {
        rotation = `rotate(${(360 / 60) * Number(minutes)}, 50, 50)`;
    }

    return (
        <g>
            <polygon
                points={'48.2,4 51.8,4 52.6,62 47.4,62'}
                transform={rotation}
                fill={fillColor}
            />
        </g>
    );
}