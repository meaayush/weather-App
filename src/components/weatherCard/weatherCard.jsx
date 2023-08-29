import React from 'react'
import './weathercard.css'

function WeatherCard() {
    return (
        <div className="container">
            <div className="left-panel">
                <div className="bg-gradient"></div>
                <div className="today-details">
                    <h2>Friday</h2>
                    <span>29 August 2023</span>
                    <div>
                        <i class='bx bxs-location-plus'></i>
                        {/* <i class='bx bx-current-location' ></i> */}
                        <span> Dehradun, IN</span>
                    </div>
                </div>
                <div className="today-weather">
                    <i class='bx bx-sun' ></i>
                    <h1 className="weather-temp">
                        25&deg;C
                    </h1>
                    <h3>Sunny</h3>
                </div>
            </div>

            <div className="right-panel">
                <div className="day-other-details">
                    <div>
                        <span className="title">PRECIPITATION</span>
                        <span className="value"> 4 %</span>
                    </div>
                    <div>
                        <span className="title">HUMIDITY</span>
                        <span className="value"> 24 %</span>
                    </div>
                    <div>
                        <span className="title">WIND SPEED</span>
                        <span className="value"> 6 km/h</span>
                    </div>
                </div>

                <ul className="days-list">
                    <li>
                        <i class='bx bx-cloud' ></i>
                        <span>Sat</span>
                        <span className="day-temp">23&deg;C</span>
                    </li>
                    <li>
                        <i class='bx bx-cloud-rain' ></i>
                        <span>Sun</span>
                        <span className="day-temp">18&deg;C</span>
                    </li>
                    <li>
                        <i class='bx bx-cloud' ></i>
                        <span>Mon</span>
                        <span className="day-temp">20&deg;C</span>
                    </li>
                    <li>
                        <i class='bx bx-cloud-drizzle' ></i>
                        <span>Tue</span>
                        <span className="day-temp">16&deg;C</span>
                    </li>
                </ul>

                <div className="btn-container">
                    <button className="loc-button">
                        Search Location
                    </button>
                </div>
            </div>


        </div>
    )
}

export default WeatherCard;