import React, {useEffect, useState} from "react";
import {MondaineClock} from "./lib/mondaine-clock";
import {MinuteAnimationType, TickType} from "./lib";

const date = new Date();

export function Demo() {
    const defaultRed = "#eb0000"; 
    const defaultHand = "#0e0e10";
    let defaultBackground = "#ffffff";

    const [tickType, setTickType] = useState<TickType>(TickType.MECHANICAL);
    const [minuteAnimationType, setMinuteAnimationType] = useState<MinuteAnimationType>(MinuteAnimationType.SMOOTH);
    const [sizeAuto, setSizeAuto] = useState<boolean>(false);
    const [size, setSize] = useState<number>(200);
    const [fixDateEnabled, setFixDateEnabled] = useState<boolean>(false);
    const [fixedDate, setFixedDate] = useState<Date>(date);
    const [showSecondsHand, setShowSecondsHand] = useState<boolean>(true);
    const [showCenterDot, setShowCenterDot] = useState<boolean>(true);

    const [customColors, setCustomColors] = useState<boolean>(false);
    const [secondsHandColor, setSecondsHandColor] = useState<string>(defaultRed);
    const [minutesHandColor, setMinutesHandColor] = useState<string>(defaultHand);
    const [hoursHandColor, setHoursHandColor] = useState<string>(defaultHand);
    const [faceColor, setFaceColor] = useState<string>(defaultHand);
    const [faceBackgroundColor, setFaceBackgroundColor] = useState<string>(defaultBackground);

    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    useEffect(() => {
        if (copySuccess) {
            const timeout = setTimeout(() => {
                setCopySuccess(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [copySuccess]);

    function handleReset() {
        setTickType(TickType.MECHANICAL);
        setMinuteAnimationType(MinuteAnimationType.SMOOTH);
        setSizeAuto(false);
        setSize(200);
        setFixDateEnabled(false);
        setFixedDate(new Date());
        setCustomColors(false);
        setShowSecondsHand(true);
        setShowCenterDot(true);
        setSecondsHandColor(defaultRed);
        setMinutesHandColor(defaultHand);
        setHoursHandColor(defaultHand);
        setFaceColor(defaultHand);
        setFaceBackgroundColor(defaultBackground);
    }

    function handleResetColors() {
        setSecondsHandColor(defaultRed);
        setMinutesHandColor(defaultHand);
        setHoursHandColor(defaultHand);
        setFaceColor(defaultHand);
        setFaceBackgroundColor(defaultBackground);
    }

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    // Event handler for input change
    const handleTimeChange = (e: any) => {
        const inputTime = e.target.value;
        const [hours, minutes, seconds] = inputTime.split(":").map(Number);

        if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
            const newDate = new Date();
            newDate.setHours(hours);
            newDate.setMinutes(minutes);
            newDate.setSeconds(seconds);
            newDate.setMilliseconds(0);
            setFixedDate(newDate);
        }
    };

    return (
        <div
            style={{
                fontFamily: "Helvetica, Arial, sans-serif"
            }}
        >
            <table
                style={{
                    textAlign: "left",
                    background: "whitesmoke",
                    width: "100%"
                }}
            >
                <tbody>
                <tr>
                    <th style={{width: "200px"}}>Clock Type</th>
                    <td style={{width: "200px"}}>
                        <select
                            style={{width: "200px"}}
                            value={tickType}
                            onChange={(e) => setTickType(parseInt(e.target.value))}
                        >
                            <option value={TickType.MECHANICAL}>Mechanical</option>
                            <option value={TickType.QUARTZ}>Quartz</option>
                        </select>
                    </td>
                    <td>
                        {tickType === TickType.MECHANICAL &&
                            fixDateEnabled &&
                            "Using Quartz Clock is recommended when using a fixed date."}
                    </td>
                </tr>
                <tr>
                    <th style={{width: "200px"}}>Animation Type</th>
                    <td style={{width: "200px"}}>
                        <select
                            style={{width: "200px"}}
                            value={minuteAnimationType}
                            onChange={(e) => setMinuteAnimationType(parseInt(e.target.value))}
                        >
                            <option value={MinuteAnimationType.NONE}>None</option>
                            <option value={MinuteAnimationType.SMOOTH}>Smooth</option>
                            <option value={MinuteAnimationType.JUMP}>Jump</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Size Auto</th>
                    <td>
                        <input
                            type="checkbox"
                            checked={sizeAuto}
                            onChange={(e) => setSizeAuto(e.target.checked)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>
                        <input
                            style={{width: "200px"}}
                            type="range"
                            min={100}
                            max={800}
                            value={size}
                            onChange={(e) => setSize(parseInt(e.target.value))}
                            disabled={sizeAuto}
                        />
                    </td>
                    <td>{size}px</td>
                </tr>
                <tr>
                    <th>Fixed Date enabled</th>
                    <td>
                        <input
                            type="checkbox"
                            checked={fixDateEnabled}
                            onChange={(e) => setFixDateEnabled(e.target.checked)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Date</th>
                    <td>
                        <input
                            style={{width: "200px"}}
                            type="time"
                            step="1"
                            value={formatTime(fixedDate)}
                            onChange={handleTimeChange}
                            disabled={!fixDateEnabled}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Show Seconds Hand</th>
                    <td>
                        <input
                            type="checkbox"
                            checked={showSecondsHand}
                            onChange={(e) => setShowSecondsHand(e.target.checked)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Show Center Dot</th>
                    <td>
                        <input
                            type="checkbox"
                            checked={showCenterDot}
                            onChange={(e) => setShowCenterDot(e.target.checked)}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Custom Colors</th>
                    <td>
                        <input
                            type="checkbox"
                            checked={customColors}
                            onChange={(e) => {
                                let checked: boolean = e.target.checked;
                                if (!checked) {
                                    handleResetColors();
                                }
                                setCustomColors(checked);
                            }}
                        />
                    </td>
                    <td>
                        {customColors && (
                            <a
                                href="https://www.figma.com/file/MN4unbOECrOGJ2bKxgYZI1/SBB-Colors?type=design&node-id=0-1&mode=design"
                                target="_blank"
                            >
                                Lyne Color Guide
                            </a>
                        )}
                    </td>
                </tr>
                {customColors && (
                    <>
                        <tr>
                            <th>Seconds Hand Color</th>
                            <td>
                                <input
                                    style={{width: "200px"}}
                                    type="color"
                                    value={secondsHandColor}
                                    onChange={(e) => setSecondsHandColor(e.target.value)}
                                />
                            </td>
                            <td>{secondsHandColor}</td>
                        </tr>
                        <tr>
                            <th>Minutes Hand Color</th>
                            <td>
                                <input
                                    style={{width: "200px"}}
                                    type="color"
                                    value={minutesHandColor}
                                    onChange={(e) => setMinutesHandColor(e.target.value)}
                                />
                            </td>
                            <td>{minutesHandColor}</td>
                        </tr>
                        <tr>
                            <th>Hours Hand Color</th>
                            <td>
                                <input
                                    style={{width: "200px"}}
                                    type="color"
                                    value={hoursHandColor}
                                    onChange={(e) => setHoursHandColor(e.target.value)}
                                />
                            </td>
                            <td>{hoursHandColor}</td>
                        </tr>
                        <tr>
                            <th>Face Color</th>
                            <td>
                                <input
                                    style={{width: "200px"}}
                                    type="color"
                                    value={faceColor}
                                    onChange={(e) => setFaceColor(e.target.value)}
                                />
                            </td>
                            <td>{faceColor}</td>
                        </tr>
                        <tr>
                            <th>Face Background Color</th>
                            <td>
                                <input
                                    style={{width: "200px"}}
                                    type="color"
                                    value={faceBackgroundColor}
                                    onChange={(e) => setFaceBackgroundColor(e.target.value)}
                                />
                            </td>
                            <td>{faceBackgroundColor}</td>
                        </tr>
                    </>
                )}
                <tr>
                    <th>
                        <button onClick={handleReset}>Reset</button>
                    </th>
                </tr>
                </tbody>
            </table>

            <div>
                <MondaineClock
                    tickType={tickType}
                    minuteAnimationType={minuteAnimationType}
                    width={sizeAuto ? undefined : `${size}px`}
                    fixedDate={fixDateEnabled ? fixedDate : undefined}
                    showSecondsHand={showSecondsHand}
                    showCenterDot={showCenterDot}
                    secondsHandColor={secondsHandColor}
                    minutesHandColor={minutesHandColor}
                    hoursHandColor={hoursHandColor}
                    faceColor={faceColor}
                    faceBackgroundColor={faceBackgroundColor}
                />
            </div>

            <pre
                id="code"
                style={{
                    background: "whitesmoke",
                    fontFamily: "consolas, monospace",
                    fontSize: "12px",
                    padding: "10px"
                }}
                onClick={() => {
                    const code = document.getElementById("code");
                    if (code) {
                        const range = document.createRange();
                        range.selectNode(code);
                        window.getSelection()?.removeAllRanges();
                        window.getSelection()?.addRange(range);
                        setCopySuccess(true);
                    }
                }}
            >
        {"<MondaineClock"}
                <br/>
                {`    tickType={TickType.${TickType[tickType]}}`}
                <br/>
                {minuteAnimationType ? null : `    minuteAnimationType={MinuteAnimationType.${MinuteAnimationType[minuteAnimationType]}}`}
                {minuteAnimationType ? null : <br/>}
                {sizeAuto ? null : `    width={'${size}px'}`}
                {sizeAuto ? null : <br/>}
                {fixDateEnabled
                    ? `    fixedDate={new Date('${fixedDate.toISOString()}')}`
                    : null}
                {fixDateEnabled ? <br/> : null}
                {showSecondsHand ? null : `    showSecondsHand={false}`}
                {showSecondsHand ? null : <br/>}
                {secondsHandColor === defaultRed
                    ? null
                    : `    secondsHandColor={'${secondsHandColor}'}`}
                {secondsHandColor === defaultRed ? null : <br/>}
                {showCenterDot ? null : `    showCenterDot={false}`}
                {showCenterDot ? null : <br/>}
                {minutesHandColor === defaultHand
                    ? null
                    : `    minutesHandColor={'${minutesHandColor}'}`}
                {minutesHandColor === defaultHand ? null : <br/>}
                {hoursHandColor === defaultHand
                    ? null
                    : `    hoursHandColor={'${hoursHandColor}'}`}
                {hoursHandColor === defaultHand ? null : <br/>}
                {faceColor === defaultHand ? null : `    faceColor={'${faceColor}'}`}
                {faceColor === defaultHand ? null : <br/>}
                {faceBackgroundColor === defaultBackground
                    ? null
                    : `    faceBackgroundColor={'${faceBackgroundColor}'}`}
                {faceBackgroundColor === defaultBackground ? null : <br/>}
                {"/>"}
      </pre>
            {copySuccess ? <span style={{color: "green"}}>Copied!</span> : null}

            <p>
                <small>
                    GH{" "}
                    <a
                        href="https://github.com/orbitertoad"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        OrbiterToad
                    </a>
                </small>
            </p>
        </div>
    );
}
