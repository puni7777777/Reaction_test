import React, { useEffect, useState } from 'react'
import "./reaction.css"

export default function Reaction() {

    const [light_change1, setLight_change1] = useState("no_light")
    const [light_change2, setLight_change2] = useState("no_light")
    const [light_change3, setLight_change3] = useState("no_light")
    const [light_change4, setLight_change4] = useState("no_light")
    const [light_change5, setLight_change5] = useState("no_light")
    const [best, setBest] = useState("00:000")
    const [time, setTime] = useState(0)
    const [isrunning, setIsrunning] = useState(false)
    const [lights_off, setLights_off] = useState(false)

    useEffect(() => {
        let start;
        if (isrunning && lights_off) {
            start = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(start)
    }, [isrunning, time, lights_off])

    const clock_start_stop = () => {
        setIsrunning(!isrunning)
        console.log(isrunning)
        if (isrunning == false) {
            light_start()
        }
        else { }
    }

    const light_start = () => {
        setTimeout(() => {
            setLight_change1("red_light")
        }, 1000);
        setTimeout(() => {
            setLight_change2("red_light")
        }, 2000);
        setTimeout(() => {
            setLight_change3("red_light")
        }, 3000);
        setTimeout(() => {
            setLight_change4("red_light")
        }, 4000);
        setTimeout(() => {
            setLight_change5("red_light")
        }, 5000);
        setTimeout(() => {
            light_stop()
            setLights_off(true)
        }, 7000);
    }

    const light_stop = () => {
        setLight_change1("no_light")
        setLight_change2("no_light")
        setLight_change3("no_light")
        setLight_change4("no_light")
        setLight_change5("no_light")
    }

    const seconds = Math.floor((time % 6000) / 100)
    const milliseconds = Math.floor((time % 100))
    console.log(seconds)
    console.log(milliseconds)

    return (
        <button className='click_to_start' onClick={clock_start_stop}>
            <div className='back'>
                <div className="whole">
                    <div className='container'>
                        <div className="lights">
                            <div className="no_light"></div>
                            <div className="no_light"></div>
                            <div className={light_change1}></div>
                            <div className={light_change1}></div>
                        </div>
                        <div className="lights">
                            <div className="no_light"></div>
                            <div className="no_light"></div>
                            <div className={light_change2}></div>
                            <div className={light_change2}></div>
                        </div>
                        <div className="lights">
                            <div className="no_light"></div>
                            <div className="no_light"></div>
                            <div className={light_change3}></div>
                            <div className={light_change3}></div>
                        </div>
                        <div className="lights">
                            <div className="no_light"></div>
                            <div className="no_light"></div>
                            <div className={light_change4}></div>
                            <div className={light_change4}></div>
                        </div>
                        <div className="lights">
                            <div className="no_light"></div>
                            <div className="no_light"></div>
                            <div className={light_change5}></div>
                            <div className={light_change5}></div>
                        </div>
                        <div className="border_2"></div>
                    </div>
                    <div className="text">
                        <p>Tap/Click when you are ready for the race, then tap again when lights go out.</p>
                    </div>
                    <div className="timer">
                        <h3><p>{seconds.toString().padStart(2, '0')}:{milliseconds.toString().padStart(3, '0')}</p></h3>
                    </div>
                    <div className="your_best">
                        <h3>Your best {best}</h3>
                    </div>
                    <div className="creator">
                        <p>Created by</p>
                        <a href="">@PUNITH</a>
                    </div>
                </div>
            </div>
        </button>
    )
}
