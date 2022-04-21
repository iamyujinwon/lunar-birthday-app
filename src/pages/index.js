import React, {useState} from 'react';
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

        setConvertedCurrent();
        setConvertedNext();
        
        setCalculated(true);
    }

    function submitDisabled() {
        return inputYear === 0 || inputMonth === 0 || inputDay === 0;
    }

    function setConvertedCurrent() {
        const solarToCurrentLunar = fromSolarDate(inputYear, inputMonth, inputDay);

        setConvertedCurrentYear(solarToCurrentLunar.year);
        setConvertedCurrentMonth(solarToCurrentLunar.month);
        setConvertedCurrentDay(solarToCurrentLunar.day);
    }

    function setConvertedNext() {
        const solarToNextLunar = fromSolarDate(inputYear, inputMonth, inputDay, currentYear + 1);

        setConvertedNextYear(solarToNextLunar.year);
        setConvertedNextMonth(solarToNextLunar.month);
        setConvertedNextDay(solarToNextLunar.day);
    }

    return (
        <> 
            <div class="font-Rowdies w-screen h-screen grid grid-cols-1 gap-7 content-center lg:flex items-center">
                <div class="lg:pl-36">
                    <div class="hidden lg:block text-title text-white leading-title">
                        <div>When is</div>
                        <div>my next</div>
                        <div><span class="text-lunar">lunar</span></div>
                        <div>birthday?</div>
                    </div>

                    <div class="text-white text-4xl text-center leading-10 lg:hidden">
                        <div>🎂</div>
                        <div>When is my next</div>
                        <div><span class="text-lunar">lunar</span> birthday?</div>
                    </div>
                </div>

                {calculated ? 
                    <div class="w-screen text-center">
                        <div class="block mr-auto ml-auto w-[21rem] text-white text-xl font-light py-7 bg-result-background/50 rounded-2xl lg:text-result lg:w-[40rem]">
                            <div class="">My solar birthday is <span class="text-lunar">{inputYear}/{inputMonth}/{inputDay}</span></div>
                            <div>This year, my lunar birthday is</div>
                            <div class="text-yellow-highlight">{convertedCurrentYear}/{convertedCurrentMonth}/{convertedCurrentDay}</div>
                            <div>Next year, my lunar birthday is</div>
                            <div class="text-yellow-highlight">{convertedNextYear}/{convertedNextMonth}/{convertedNextDay}</div>
                        </div>
                        <div class="block text-xl mr-auto ml-auto w-[20rem] space-y-4 mt-7 lg:block mr-auto ml-auto w-[20rem] lg:w-[40rem] text-2xl space-y-6">
                            <button class="w-[20rem] py-2 bg-lunar rounded-full cursor-pointer lg:w-[40rem] py-3" onClick={() => window.location.reload()}>
                                Find another birthday
                            </button>
                            <button class="w-[20rem] py-2 bg-yellow-highlight rounded-full cursor-pointer lg:w-[40rem] py-3">
                                {/* Add the date in Google Calendar */}
                                Add in Google Calendar
                            </button>
                        </div>
                    </div>
                    : 
                    <div class="w-screen text-center">
                        <form class="lg:space-y-7" onSubmit={handleSubmit}>
                            <div class="hidden lg:inline text-white text-2xl">Enter my Solar birthday 🎂</div> 
                            <div class="text-xl flex flex-col space-y-5 lg:text-3xl space-y-6">
                                <span>  
                                    <select class="w-[20rem] pl-7 py-2.5 bg-transparent text-lunar border-solid border-2 border-lunar rounded-xl appearance-none cursor-pointer lg:w-[25rem] pl-9 py-3" onChange={e=>(setInputYear(e.target.value))}>
                                        <option value={0} default>YEAR</option>
                                        {years.map(year => {
                                            return (<option key={year.value} value={year.value}>{year.text}</option>);
                                        })}
                                    </select>
                                </span>   
                                <span>
                                    <select class="w-[20rem] pl-7 py-2.5 bg-transparent text-lunar border-solid border-2 border-lunar rounded-xl appearance-none cursor-pointer lg:w-[25rem] pl-9 py-3" onChange={e=>(setInputMonth(e.target.value))}>
                                        <option value={0} default>MONTH</option>
                                        {months.map(month => {
                                            return (<option key={month.value} value={month.value}>{month.text}</option>);
                                        })}
                                    </select>
                                </span> 
                                <span>
                                    <select class="w-[20rem] pl-7 py-2.5 bg-transparent text-lunar border-solid border-2 border-lunar rounded-xl appearance-none cursor-pointer lg:w-[25rem] pl-9 py-3" onChange={e=>(setInputDay(e.target.value))}>
                                        <option value={0} default>DAY</option>
                                        {days.map(day => {
                                            return (<option key={day.value} value={day.value}>{day.text}</option>);
                                        })}
                                    </select>
                                </span> 
                            </div>
                            <button class="w-[21rem] py-3 mt-7 text-xl bg-lunar rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-disabled lg:w-[27rem] text-2xl" type="submit" disabled={submitDisabled()}>
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
