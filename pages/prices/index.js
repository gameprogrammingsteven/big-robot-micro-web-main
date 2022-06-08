import Bundle from '../../components/bundle/bundle'
import { useState } from 'react';
import classes from './prices.module.css'

function Prices() {
    let hoursPerWeek = 40
    let pricePerHour = 122

    const MULTIPLIER_BASIC_APP = 1;
    const MULTIPLIER_COMPLEX_APP = 3.5;

    //monthly = monthly weeks' worth of hrs like database, maintenance, retainer, blah.

    const desSectionArray = [
        {
            title: "UXDesign",
            weeks: 1,
            isActive: false,
            description: "design",
            monthly: 0
        },
    ]

    const appSectionArray = [
        {
            title: "App Development",
            weeks: 1,
            isActive: false,
            description: "make",
            monthly: 0
        },
        {
            title: "Manual Tests",
            weeks: 2.5,
            isActive: false,
            description: "make",
            monthly: 0
        },
    ]

    const maintainingSectionArray = [
        {
            title: "Maintenance",
            weeks: 3,
            isActive: false,
            description: "bugs",
            monthly: 1
        },
    ]

    const clickedUX = (e) => {
        //  let filteredTitles = activeTitles;
        if (activeTitles.includes(e.title)) {
            setActiveTitles(activeTitles.filter((title) => title !== e.title))
        } else {
            activeTitles.push(e.title) //returns items... which isn't string. causes issue if you try to assign on this line.
            const newTitles = activeTitles.filter((e) => e !== undefined)
            setActiveTitles(newTitles)
        }
        console.log("Total weeks: " + totalWeeks());
    }

    const hasTitle = (title) => {
        return activeTitles.includes(title);
    }

    const [activeTitles, setActiveTitles] = useState([]);


    const totalWeeks = () => {
        let amount = 0;
        const featuresArrayFlattened = [...desSectionArray, ...appSectionArray, ...maintainingSectionArray];
        featuresArrayFlattened.forEach(e => {
            if (hasTitle(e.title)) {
                amount += e.weeks
            }
        });
        //reducer had objects return. Likely due to using array differently than example.
        return amount;
    }

    const getBundleFor = (dataItem) => {
        return (
            <Bundle title={dataItem.title} weeks={dataItem.weeks} isActive={hasTitle(dataItem.title)}
                onClicked={() => { clickedUX(dataItem) }} key={dataItem.title} />
        );
    } //todo find items at other calc
    return <>
        <div className={classes.pageDesignHeading}>
            <h2 className={classes.pageTextHEading}>Design the App</h2>
        </div>

        <div className={classes.calcContainer}>


            <div>
                {desSectionArray.map((e) => getBundleFor(e))}
            </div>
            <div className={classes.divider}></div>
            <h2>Develop</h2>
            <div>
                {appSectionArray.map((e) => getBundleFor(e))}
            </div>
            <div className={classes.divider}></div>
            <h2>After</h2>
            <div>
                {maintainingSectionArray.map((e) => getBundleFor(e))}
            </div>
        </div>
    </>
}

/* monthly added */
/*
Base App/Platform - 5 weeks of time
Public api integration - 3.5 weeks
BLE - 3 weeks
maps - 4 weeks/month (time allotted)
weather - 3 weeks.
social - 4 weeks.
video - 4 weeks.
photo - 2 weeks.
quizzes - 3 weeks.
E-Commerce - 2 weeks
Easy Feature - 2 weeks
Backend - 5 weeks + maintenance.
Logging in - 1.5 weeks. (Firebase). Bigger is own database.
Simple Game - 8 weeks.
AR/MR - 8 weeks
VR - 10 weeks (simple complexity)
Large Game - 50 weeks.
Enterprise - 5 weeks. (integrate)
Maintenance - 2 weeks/month of time.
Simple database - 0.5/month.
*/
export default Prices;