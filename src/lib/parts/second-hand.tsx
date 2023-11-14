import React from "react";
import {ONE_SECOND, TickType} from "../constants";

type Props = {
    tickType?: TickType,
    time: Date,
    showCenterDot?: boolean,
    fillColor?: string
}

export function SecondHand(props: Props) {

    const {
        tickType = TickType.MECHANICAL,
        time,
        showCenterDot = false,
        fillColor = '#eb0000'
    } = props;

    let seconds;

    if (tickType === TickType.QUARTZ) {
        seconds = Math.round(time.getMilliseconds() / ONE_SECOND + time.getSeconds());
    } else {
        seconds = time.getMilliseconds() / ONE_SECOND + time.getSeconds()
    }

    const rotationSpeed = tickType === TickType.QUARTZ ? 60 : 59;

    let rotation = ''
    if (seconds < rotationSpeed) {
        rotation = `rotate(${(360 / rotationSpeed) * (seconds)}, 50, 50)`;
    }

    return (
        <g fill={fillColor} transform={rotation}>
            <rect x={49.3} y={18.8} width={1.4} height={47.7}></rect>
            <circle cx={50} cy={18.8} r={5.25} strokeWidth={0}></circle>
            {
                showCenterDot && <>
                    <circle cx={50} cy={50} r={1.5} strokeWidth={0}></circle>
                </>
            }
        </g>
    );

}