import React, {useState} from 'react';
import './index.css';

const Home = () =>  {
    return (
        <> 
            <div id="container">
                <div id="title-container">
                    <div id="title">
                        When is <br />
                        my <span id="lunar">lunar</span> <br/>
                        birthday <br />
                        in 2022?
                    </div>
                </div>
                <div id ="date-section">
                    <form id="date-containter">
                        <div>Enter my birthday 🎂</div> 
                        <div id="date-selector">
                            <span>  
                                <select name="year" id="year">
                                    <option>YEAR</option>
                                    <option value="years">1999</option>
                                </select>
                            </span>   
                            <span>
                                <select name="month" id="month">
                                    <option>MONTH</option>
                                    <option value="months">MAY</option>
                                </select>
                            </span> 
                            <span>
                                <select name="day" id="day">
                                    <option>DAY</option>
                                    <option value="days">17</option>
                                </select>
                            </span> 
                        </div>
                    </form>
                    <button type="button">
                        Find my lunar birthday
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
