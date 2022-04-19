import React, {useState} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { fromSolarDate } from 'lunar-date-calculator';

const currentYear = new Date().getUTCFullYear();

const years = [];
for (let i = currentYear; i > 1899; i--) {
    years.push({"value": i, "text": i});
}

const months = [
    {value: 1, text: "JANUARY"},{value: 2, text: "FEBRUARY"},
    {value: 3, text: "MARCH"},{value: 4, text: "APRIL"},
    {value: 5, text: "MAY"},{value: 6, text:"JUNE"},
    {value: 7, text:"JULY"},{value: 8, text:"AUGUST"},
    {value: 9, text:"SEPTEMBER"},{value: 10, text:"OCTOBER"},
    {value: 11, text:"NOVEMBER"},{value: 12, text:"DECEMBER"}
];

const days = [];
for (let i = 1; i < 32; i++) {
    days.push({"value": i, "text": i});
}

const Home = () =>  {
    const [inputYear, setInputYear] = useState(0);
    const [inputMonth, setInputMonth] = useState(0);
    const [inputDay, setInputDay] = useState(0);

    const [convertedCurrentYear, setConvertedCurrentYear] = useState();
    const [convertedCurrentMonth, setConvertedCurrentMonth] = useState();
    const [convertedCurrentDay, setConvertedCurrentDay] = useState();    

    const [convertedNextYear, setConvertedNextYear] = useState();
    const [convertedNextMonth, setConvertedNextMonth] = useState();
    const [convertedNextDay, setConvertedNextDay] = useState();  
    
    
    const [calculated, setCalculated] = useState(false); 

    const handleSubmit = e => {
        e.preventDefault();

        const solarToCurrentLunar = fromSolarDate(inputYear, inputMonth, inputDay);
        const solarToNextLunar = fromSolarDate(currentYear + 1, inputMonth, inputDay);

        setConvertedCurrentYear(solarToCurrentLunar.year);
        setConvertedCurrentMonth(solarToCurrentLunar.month);
        setConvertedCurrentDay(solarToCurrentLunar.day);

        setConvertedNextYear(solarToNextLunar.year);
        setConvertedNextMonth(solarToNextLunar.month);
        setConvertedNextDay(solarToNextLunar.day);


        setCalculated(true);
    }

    function submitDisabled() {
        return inputYear == 0 || inputMonth == 0 || inputDay == 0;
    }

    return (
        <> 
            <div id="container">
                <div id="title-container">
                    <div id="title">
                        When is <br />
                        my <span id="lunar">lunar</span> <br/>
                        birthday <br />
                        in {currentYear}?
                    </div>
                </div>


                {calculated ? 
                    <div id="result-container">
                        <div id="result-section">
                            <div>My solar birthday is <span id="solar-birthday">{inputYear}/{inputMonth}/{inputDay}</span></div>
                            <div>This year, my lunar birthday is</div>
                            <div className="date-result">{convertedCurrentYear}/{convertedCurrentMonth}/{convertedCurrentDay}</div>
                            <div>Next year, my lunar birthday is</div>
                            <div className="date-result">{convertedNextYear}/{convertedNextMonth}/{convertedNextDay}</div>
                        </div>
                        <button id="google-calendar">
                            Add the date in Google Calendar
                        </button>
                    </div>
                    : 
                    <div id ="date-section">
                    <form id="date-containter" onSubmit={handleSubmit}>
                        <div>Enter the Solar birthday 🎂</div> 
                        <div id="date-selector">
                            <span>  
                                <select onChange={e=>(setInputYear(e.target.value))}>
                                    <option value={0} default>YEAR</option>
                                    {years.map(year => {
                                        return (<option key={year.value} value={year.value}>{year.text}</option>);
                                    })}
                                </select>
                            </span>   
                            <span>
                                <select onChange={e=>(setInputMonth(e.target.value))}>
                                    <option value={0} default>MONTH</option>
                                    {months.map(month => {
                                        return (<option key={month.value} value={month.value}>{month.text}</option>);
                                    })}
                                </select>
                            </span> 
                            <span>
                                <select onChange={e=>(setInputDay(e.target.value))}>
                                    <option value={0} default>DAY</option>
                                    {days.map(day => {
                                        return (<option key={day.value} value={day.value}>{day.text}</option>);
                                    })}
                                </select>
                            </span> 
                        </div>
                        <button type="submit" disabled={submitDisabled()}>
                            Find my lunar birthday
                        </button>
                    </form>
                </div> 
                }

                {/* <div id ="date-section">
                    <form id="date-containter" onSubmit={handleSubmit}>
                        <div>Enter the Solar birthday 🎂</div> 
                        <div id="date-selector">
                            <span>  
                                <select value={year} onChange={e=>(setYear(e.target.value))}>
                                    {years.map(year => {
                                        return (<option key={year.value} value={year.value}>{year.text}</option>);
                                    })}
                                </select>
                            </span>   
                            <span>
                                <select onChange={e=>(setMonth(e.target.value))}>
                                    {months.map(month => {
                                        return (<option key={month.value} value={month.value}>{month.text}</option>);
                                    })}
                                </select>
                            </span> 
                            <span>
                                <select onChange={e=>(setDay(e.target.value))}>
                                    {days.map(day => {
                                        return (<option key={day.value} value={day.value}>{day.text}</option>);
                                    })}
                                </select>
                            </span> 
                        </div>
                        <button type="submit">
                            Find my lunar birthday
                        </button>
                    </form>
                </div> */}

                {/* <div id="result-container">
                    <div id="result-section">
                        <div>My lunar birthday is <span id="solar-birthday">{birthday.year}/{birthday.month}/{birthday.day}</span></div>
                        <div>This year, my lunar birthday is</div>
                        <div className="date-result">2022/06/18</div>
                        <div>Next year, my lunar birthday is</div>
                        <div className="date-result">2023/06/05</div>
                    </div>
                    <button id="google-calendar">
                        Add the date in Google Calendar
                    </button>
                </div> */}
            </div>
        </>
    );
};

export default Home;
