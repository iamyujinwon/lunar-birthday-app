import React, {useState} from 'react';
import './index.css';
import ReactDOM from 'react-dom';

const currentYear = new Date().getUTCFullYear();

const years = [{value: "YEAR", text: "YEAR"}];
for (let i = currentYear; i > 1899; i--) {
    years.push({"value": i, "text": i});
}

const months = [
    {value: "MONTH", text: "MONTH"},{value: 1, text: "JANUARY"},{value: 2, text: "FEBRUARY"},
    {value: 3, text: "MARCH"},{value: 4, text: "APRIL"},
    {value: 5, text: "MAY"},{value: 6, text:"JUNE"},
    {value: 7, text:"JULY"},{value: 8, text:"AUGUST"},
    {value: 9, text:"SEPTEMBER"},{value: 10, text:"OCTOBER"},
    {value: 11, text:"NOVEMBER"},{value: 12, text:"DECEMBER"}
];

const days = [{value: "DAY", text: "DAY"}];
for (let i = 1; i < 32; i++) {
    days.push({"value": i, "text": i});
}

const Home = () =>  {
    const [year, setYear] = React.useState('YEAR');
    const [month, setMonth] = React.useState('MONTH');
    const [day, setDay] = React.useState('DAY');

    const birthday = {year, month, day};

    const handleSubmit = e => {
        e.preventDefault();

        const date = {
            year: year,
            month: month,
            day: day
        };

        birthday.year = date.year;
        birthday.month = date.month;
        birthday.day = date.day;

        const json = JSON.stringify(date);
        console.clear();
        console.log(json);
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

                <div id="result-container">
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
                </div>
            </div>
        </>
    );
};

export default Home;
