import Bundle from '../../components/bundle/bundle'
import { useState } from 'react';
import classes from './prices.module.css'

function Prices() {
    let hoursPerWeek = 40
    let pricePerHour = 122

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
            title: "Small Base App",
            weeks: 2,
            isActive: false,
            alwaysOn: true,
            description: "Setup of a small application.",
            monthly: 0
        },
        {
            title: "Medium Base App",
            weeks: 5,
            isActive: false,
            alwaysOn: true,
            description: "You have a bunch of features but they're grouped together in one general idea.",
            monthly: 0
        },
        {
            title: "Large Base App",
            weeks: 10,
            isActive: false,
            alwaysOn: true,
            description: "I suggest consulting with us. You probably don't need something this big.",
            monthly: 0
        },
        {
            title: "Consulting - Weekly",
            weeks: 1,
            isActive: false,
            description: "Discuss technical requirements with team.",
            monthly: 0
        },
        {
            title: "Consulting - One Day (In person)",
            weeks: 0.5,
            isActive: false,
            description: "We come out and talk about your initial problem you want solving.",
            monthly: 0
        },
        {
            title: "Initial Consult (On telephone)",
            weeks: 0.025,
            isActive: false,
            description: "One hour of time after our free consult about your problem.",
            monthly: 0
        },
        {
            title: "Discovery",
            weeks: 3,
            isActive: false,
            description: "Design and Research for medium-size apps.",
            monthly: 0
        },
        {
            title: "UXDesign",
            weeks: 1.4,
            isActive: false,
            description: "Hires a designer to create a prototype for a simple app.",
            monthly: 0
        },
    ]

    const appSectionArray = [
        {
            title: "Manual Tests",
            weeks: 2.5,
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
        {
            title: "Weather",
            weeks: 3,
            isActive: false,
            description: "Weather data from a standard resource integrated. Monthly API fees may apply",
            monthly: 0
        },
        {
            title: "Social setup",
            weeks: 4,
            isActive: false,
            description: "Integrate the 'gram or Twitter",
            monthly: 0
        },
        {
            title: "Bluetooth",
            weeks: 3,
            isActive: false,
            description: "Initial setup for getting devices to speak to one-another",
            monthly: 0
        },
        {
            title: "Video",
            weeks: 4,
            isActive: false,
            description: "Video playback and recording.",
            monthly: 0
        },
        {
            title: "Photos/Image",
            weeks: 2,
            isActive: false,
            description: "Camera, photo editing, and related features such as image altering",
            monthly: 0
        },
        {
            title: "Quizzing",
            weeks: 2,
            isActive: false,
            description: "Basic addition of quiz app, base questions.",
            monthly: 0
        },
        {
            title: "Back-end",
            weeks: 5,
            isActive: false,
            description: "If you need to store basic data. Fees vary based on CoPPA and other regulations such as GDPR",
            monthly: 0
        },
        {
            title: "External API integration",
            weeks: 3.5,
            isActive: false,
            description: "Get data from someone's server and setup a visual representation.",
            monthly: 0
        },
        {
            title: "Augmented/Mixed",
            weeks: 8,
            isActive: false,
            description: "A short, simple, mixed reality app for the phone. Magic Leap available, may add to estimate.",
            monthly: 0
        },
        {
            title: "Users and logging in - external database",
            weeks: 1.5,
            isActive: false,
            description: "Login for pre-existing database, or sign-in-with FB/Goog or your own servers.",
            monthly: 0
        },
        {
            title: "Users and logging in - internal/complexity",
            weeks: 9,
            isActive: false,
            description: "We make the user database.",
            monthly: 0
        },
        {
            title: "Large Game (no art included)",
            weeks: 50,
            isActive: false,
            description: "You wanna make something fun with characters and AI and things that go splat. These can become large very fast. Or small. Talk with us to see if we should raise, or lower, time and costs.",
            monthly: 0
        },
    ]

    const maintainingSectionArray = [
        {
            title: "Retainer",
            weeks: 3,
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
                amount += e.weeks
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
            <Bundle title={dataItem.title} weeks={dataItem.weeks} isActive={hasTitle(dataItem.title)}
                onClicked={() => { clickedUX(dataItem) }} desc={dataItem.description} key={dataItem.title}
                cost={dataItem.weeks * hoursPerWeek * pricePerHour} />
        );
    } //todo find items at other calc

    // total = totalWeeks;
    return <>
        <div className={classes.pageDesignHeading}>
            <h2 className={classes.pageTextHeading}>Estimated Initial Costs: ${Math.ceil(total * hoursPerWeek * pricePerHour)}</h2>
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

export default Prices;