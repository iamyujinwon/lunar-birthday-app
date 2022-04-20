import React, {useState} from 'react';
import './index.css';
import {fromSolarDate} from 'lunar-date-calculator';

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
        const solarToNextLunar = fromSolarDate(inputYear, inputMonth, inputDay, currentYear + 1);

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
            <div class="flex items-center font-Rowdies font-normal w-screen h-screen">
                <div class="text-white leading-title w-1/2 pl-36">
                    <div class="text-title">
                        <div>When is</div>
                        <div>my next</div>
                        <div><span class="text-lunar">lunar</span></div>
                        <div>birthday?</div>
                    </div>
                </div>

                {calculated ? 
                    <div class="w-1/2 pl-16">
                        <div class="w-[41.5rem] py-12 text-white text-result text-center mb-4 space-y-5 bg-result-background/50 rounded-3xl">
                            <div>My solar birthday is <span class="text-lunar">{inputYear}/{inputMonth}/{inputDay}</span></div>
                            <div>This year, my lunar birthday is</div>
                            <div class="text-yellow-highlight">{convertedCurrentYear}/{convertedCurrentMonth}/{convertedCurrentDay}</div>
                            <div>Next year, my lunar birthday is</div>
                            <div class="text-yellow-highlight">{convertedNextYear}/{convertedNextMonth}/{convertedNextDay}</div>
                        </div>
                        <button class="w-[41.5rem] mt-7 py-2.5 text-3xl bg-lunar rounded-full cursor-pointer" onClick={() => window.location.reload()}>
                            Find another birthday
                        </button>
                        <button class="w-[41.5rem] mt-7 py-2.5 text-3xl bg-green-highlight rounded-full cursor-pointer">
                            Add the date in Google Calendar
                        </button>
                    </div>
                    : 
                    <div class="w-1/2 pl-16">
                        <form onSubmit={handleSubmit}>
                            <div class="text-white text-3xl mb-4">Enter my Solar birthday 🎂</div> 
                            <div class="text-2xl flex space-x-5">
                                <span>  
                                    <select class="w-52 text-center py-3 bg-transparent text-lunar border-solid border-3 border-lunar rounded-xl appearance-none cursor-pointer" onChange={e=>(setInputYear(e.target.value))}>
                                        <option value={0} default>YEAR</option>
                                        {years.map(year => {
                                            return (<option key={year.value} value={year.value}>{year.text}</option>);
                                        })}
                                    </select>
                                </span>   
                                <span>
                                    <select class="w-52 text-center py-3 bg-transparent text-lunar border-solid border-3 border-lunar rounded-xl appearance-none cursor-pointer" onChange={e=>(setInputMonth(e.target.value))}>
                                        <option value={0} default>MONTH</option>
                                        {months.map(month => {
                                            return (<option key={month.value} value={month.value}>{month.text}</option>);
                                        })}
                                    </select>
                                </span> 
                                <span>
                                    <select class="w-52 text-center py-3 bg-transparent text-lunar border-solid border-3 border-lunar rounded-xl appearance-none cursor-pointer" onChange={e=>(setInputDay(e.target.value))}>
                                        <option value={0} default>DAY</option>
                                        {days.map(day => {
                                            return (<option key={day.value} value={day.value}>{day.text}</option>);
                                        })}
                                    </select>
                                </span> 
                            </div>
                            <button class="w-[41.5rem] mt-7 py-2.5 text-3xl bg-lunar rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-disabled" type="submit" disabled={submitDisabled()}>
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
