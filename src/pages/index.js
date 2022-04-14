import React, {useState} from 'react';
import './index.css';
import ReactDOM from 'react-dom';


const currentYear = new Date().getUTCFullYear();

const years = [{value: "YEAR", text: "YEAR"}];
for (let i = currentYear; i > 1899; i--) {
    years.push({"value": i, "text": i});
}

const months = [
    {value: "MONTH", text: "MONTH"},{value: "JANUARY", text: "JANUARY"},{value: "FEBRUARY", text: "FEBRUARY"},
    {value: "MARCH", text: "MARCH"},{value: "APRIL", text: "APRIL"},
    {value: "MAY", text: "MAY"},{value: "JUNE", text:"JUNE"},
    {value: "JULY", text:"JULY"},{value: "AUGUST", text:"AUGUST"},
    {value: "SEPTEMBER", text:"SEPTEMBER"},{value: "OCTOBER", text:"OCTOBER"},
    {value: "NOVEMBER", text:"NOVEMBER"},{value: "DECEMBER", text:"DECEMBER"}
];

const days = [{value: "DAY", text: "DAY"}];
for (let i = 1; i < 32; i++) {
    days.push({"value": i, "text": i});
}

const Home = () =>  {

    const [year, setYear] = React.useState('YEAR');
    const handleChange = e => setYear(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            year: year
        };

        const json = JSON.stringify(data);
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
                <div id ="date-section">
                    <form id="date-containter" onSubmit={handleSubmit}>
                        <div>Enter my birthday 🎂</div> 
                        <div id="date-selector">
                            <span>  
                                {/* <Select value={year} option={years} onChange={handleChange} /> */}
                            
                                <select value={year} onChange={handleChange}>
                                    {years.map(year => {
                                        return (<option key={year.value} value={year.value}>{year.text}</option>);
                                    })}
                                </select>
                            </span>   
                            <span>
                                <select>
                                    {months.map(month => {
                                        return (<option key={month.value} value={month.value}>{month.text}</option>);
                                    })}
                                </select>
                            </span> 
                            <span>
                                <select>
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
                </div>
            </div>
        </>
    );
};

export default Home;
