import React from "react";

type Props = {
    time: Date,
    fillColor?: string
}

export function HourHand(props: Props) {

    const {
        time,
        fillColor = '#0e0e10'
    } = props;

    const hours = time.getHours() + (time.getMinutes() / 60);

    const rotation = `rotate(${(360 / 12) * Number(hours)}, 50, 50)`;

    return (
        <g>
            <polygon
                points={'47.4,18 52.6,18 53.2,62 46.8,62'}
                transform={rotation}
                fill={fillColor}
            />
        </g>
    );

}