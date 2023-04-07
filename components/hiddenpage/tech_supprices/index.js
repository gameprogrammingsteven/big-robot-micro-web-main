import Bundle from '../../bundle/bundle'
import { useState } from 'react';
import classes from './tech_supprice.module.css'

export default function TechSupPrice() {
    let hoursPerWeek = 40
    let hoursPerDay = 8
    let pricePerHour = 60

    const MULTIPLIER_BASIC_APP = 1;
    const MULTIPLIER_COMPLEX_APP = 3.5;

    const [total, setTotal] = useState(0);


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

    //monthly = monthly weeks' worth of hrs like database, maintenance, retainer, blah.

    const desSectionArray = [
        {
            title: "Hour of Computer Tutoring or related",
            weeks: 2,
            days: 0.125,
            isActive: false,
            alwaysOn: true,
            description: "Any work involving tutoring, or removing viruses, or other basic PC tasks.",
            monthly: 0
        },
        {
            title: "Docs Ready",
            weeks: 2,
            days: 0.375,
            isActive: false,
            alwaysOn: true,
            description: "Get Microsoft/Google suite. Enable documents. Show you some accounting options.",
            monthly: 0
        },
        {
            title: "Advanced Docs",
            weeks: 2,
            days: 0.375,
            isActive: false,
            alwaysOn: true,
            description: "Get your email for your website working, point your DNS so people see your site.",
            monthly: 0
        },
    ]

    const appSectionArray = [
        {
            title: "",
            weeks: 2.5,
            days: 1,
            isActive: false,
            description: "Adds one dedicated manual tester",
            monthly: 1
        },
        {
            title: "Mapping",
            weeks: 4,
            isActive: false,
            description: "Standard Maps/GPS integration.",
            monthly: 0
        },
    ]

    const maintainingSectionArray = [
        {
            title: "Retainer",
            weeks: 3,
            days: 1,
            isActive: false,
            description: "A retainer for keeping us around to fix things",
            monthly: 1
        },
    ]

    const clickedUX = (e) => {
        //  let filteredTitles = activeTitles;
        let workingArray = null;  //React's render cycle and my function order. It waits until all states updated. Active isn't updated until later
        //looping. So I need a workaround for now.
        if (activeTitles.includes(e.title)) {
            const newTitles = activeTitles.filter((title) => title !== e.title)
            setActiveTitles(newTitles)
            workingArray = newTitles
        } else {
            activeTitles.push(e.title) //returns items... which isn't string. causes issue if you try to assign on this line.
            // const newTitles = activeTitles.filter((e) => e !== undefined)
            setActiveTitles(activeTitles)
            workingArray = activeTitles
        }
        totalWeeks(workingArray);
        //console.log("Total weeks: " + totalWeeks());
    }

    const hasTitle = (title) => {
        return activeTitles.includes(title);
    }

    const [activeTitles, setActiveTitles] = useState([]);


    const totalWeeks = (workingArray) => {
        let amount = 0;
        const featuresArrayFlattened = [...desSectionArray, ...appSectionArray, ...maintainingSectionArray];
        featuresArrayFlattened.forEach(e => {
            if (workingArray.includes(e.title)) {
                amount += e.days
            }
        });
        setTotal(amount);
        console.log("total arr: " + activeTitles);
        console.log("Amount: " + amount);
        //reducer had objects return. Likely due to using array differently than example.
        return amount;
    }

    const getBundleFor = (dataItem) => {
        return (
            <Bundle title={dataItem.title} weeks={dataItem.days} isActive={hasTitle(dataItem.title)}
                onClicked={() => { clickedUX(dataItem) }} desc={dataItem.description} key={dataItem.title}
                cost={dataItem.days * hoursPerDay * pricePerHour} />
        );
    } //todo find items at other calc

    // total = totalWeeks;
    return <>
        <div className={classes.pageDesignHeading}>
            <h2 className={classes.pageTextHeading}>Estimated Initial Costs: ${Math.ceil(total * hoursPerDay * pricePerHour)}</h2>
        </div>

        <div className={classes.calcContainer}>
            <div className={classes.packageSection}>
                <div className={classes.packageHeading}>
                    Develop
                </div>
                <div className={classes.packageList}>
                    {desSectionArray.map((e) => getBundleFor(e))}
                </div>
                <div className={classes.divider}></div>
            </div>
            <div className={classes.packageSection}>
                <div className={classes.packageHeading}>
                    Develop
                </div>
                <div className={classes.packageList}>
                    {appSectionArray.map((e) => getBundleFor(e))}
                </div>
                <div className={classes.divider}></div>
            </div>
            <div className={classes.packageSection}>
                <div className={classes.packageHeading}>
                    After</div>
                <div className={classes.packageList}>
                    {maintainingSectionArray.map((e) => getBundleFor(e))}
                </div>
            </div>
        </div>
    </>
}

// export default Prices;