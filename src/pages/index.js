import React, {useState} from 'react';
import {fromSolarDate} from 'lunar-date-calculator';
import './index.css';

const currentYear = new Date().getUTCFullYear();

const years = [];
for (let i = currentYear - 1; i > 1899; i--) {
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
        
    const [calculated, setCalculated] = useState(false); 

    const handleSubmit = e => {
        e.preventDefault();

        const solarToCurrentLunar = fromSolarDate(inputYear, inputMonth, inputDay);

        setConvertedCurrentYear(solarToCurrentLunar.year);
        setConvertedCurrentMonth(solarToCurrentLunar.month);
        setConvertedCurrentDay(solarToCurrentLunar.day);
        
        setCalculated(true);
    }

    function submitDisabled() {
        return inputYear === 0 || inputMonth === 0 || inputDay === 0;
    }

    function googleCalendarUrl() {
        let year = String(convertedCurrentYear);
        let month = String(convertedCurrentMonth).padStart(2, '0');
        let day = String(convertedCurrentDay).padStart(2, '0');
        let nextDay = String(convertedCurrentDay + 1).padStart(2, '0');
        
        return "http://www.google.com/calendar/event?action=TEMPLATE&text=My+Lunar+Birthday&dates=" + year + month + day + "/" + year + month + nextDay;
    }

    return (
        <> 
            <div class="font-Rowdies w-screen h-screen grid grid-cols-1 gap-7 content-center lg:flex items-center">
                <div class="lg:pl-36">
                    <div class="hidden lg:block text-title text-white leading-title">
                        <div>When is</div>
                        <div>my next</div>
                        <div><span class="lunar">lunar</span></div>
                        <div>birthday?</div>
                    </div>

                    <div class="text-white text-4xl text-center leading-10 lg:hidden">
                        <div>🎂</div>
                        <div>When is my next</div>
                        <div ><span class="lunar">lunar</span> birthday?</div>
                    </div>
                </div>

                {calculated ? 
                    <div class="w-screen text-center">
                        <div class="block mr-auto ml-auto w-[21rem] text-white text-xl font-light py-7 bg-result-background/50 rounded-2xl lg:text-result text-2xl lg:w-[40rem]">
                            <div >My solar birthday is </div>
                            <div class="text-lunar">{inputYear}/{String(inputMonth).padStart(2, '0')}/{String(inputDay).padStart(2, '0')}</div>
                            <div>My next lunar birthday is</div>
                            <div class="text-yellow-highlight text-4xl lg:text-6xl">{convertedCurrentYear}/{String(convertedCurrentMonth).padStart(2, '0')}/{String(convertedCurrentDay).padStart(2, '0')}</div>
                        </div>
                        <div class="block text-xl mr-auto ml-auto w-[20rem] space-y-4 mt-7 lg:block mr-auto ml-auto w-[20rem] lg:w-[40rem] text-2xl space-y-3">
                            <button class="w-[20rem] py-1.5 bg-lunar rounded-xl cursor-pointer lg:w-[40rem] py-3" onClick={() => window.location.reload()}>
                                Find another birthday
                            </button>
                            <div class="w-[20rem] py-1.5 bg-yellow-highlight rounded-xl cursor-pointer lg:w-[40rem] py-3">
                                <a href={googleCalendarUrl()} target="_blank" rel="noreferrer">
                                    Add in Google Calendar
                                </a>
                            </div>
                        </div>
                    </div>
                    : 
                    <div class="w-screen text-center">
                        <form class="lg:space-y-7" onSubmit={handleSubmit}>
                            <div class="text-center text-white text-2xl text-lunar mb-2 lg:hidden">Enter Solar birthday</div>
                            <div class="hidden lg:inline text-white text-2xl">Enter my Solar birthday 🎂</div> 
                            <div class="text-xl flex flex-col space-y-4 lg:text-3xl">
                                <span>  
                                    <select class="block mr-auto ml-auto w-[20rem] py-2.5 text-center bg-transparent text-lunar border-solid border-2 border-lunar rounded-xl appearance-none cursor-pointer lg:w-[25rem]" onChange={e=>(setInputYear(e.target.value))}>
                                        <option value={0} default>YEAR</option>
                                        {years.map(year => {
                                            return (<option key={year.value} value={year.value}>{year.text}</option>);
                                        })}
                                    </select>
                                </span>   
                                <span>
                                    <select class="block mr-auto ml-auto w-[20rem] py-2.5 text-center bg-transparent text-lunar border-solid border-2 border-lunar rounded-xl appearance-none cursor-pointer lg:w-[25rem]" onChange={e=>(setInputMonth(e.target.value))}>
                                        <option value={0} default>MONTH</option>
                                        {months.map(month => {
                                            return (<option key={month.value} value={month.value}>{month.text}</option>);
                                        })}
                                    </select>
                                </span> 
                                <span>
                                    <select class="block mr-auto ml-auto w-[20rem] py-2.5 text-center bg-transparent text-lunar border-solid border-2 border-lunar rounded-xl appearance-none cursor-pointer lg:w-[25rem]" onChange={e=>(setInputDay(e.target.value))}>
                                        <option value={0} default>DAY</option>
                                        {days.map(day => {
                                            return (<option key={day.value} value={day.value}>{day.text}</option>);
                                        })}
                                    </select>
                                </span> 
                            </div>
                            <button class="block mr-auto ml-auto text-center w-[20rem] py-2 mt-7 text-xl bg-lunar rounded-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-disabled lg:w-[25rem] py-3 text-2xl" type="submit" disabled={submitDisabled()}>
                                Find my lunar birthday
                            </button>
                        </form>
                    </div> 
                }
            </div>
        </>
    );
};

export default Home;
