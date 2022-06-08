import Bundle from '../../components/bundle/bundle'
import { useState } from 'react';
import classes from './prices.module.css'

function Prices() {
    let hoursPerWeek = 40
    let pricePerHour = 122

    const desSectionArray = [
        {
            title: "UXDesign",
            weeks: 1,
            isActive: false,
            description: "design"
        },
    ]

    const appSectionArray = [
        {
            title: "App Development",
            weeks: 1,
            isActive: false,
            description: "make"
        },
        {
            title: "Manual Tests",
            weeks: 2.5,
            isActive: false,
            description: "make"
        },
    ]

    const maintainingSectionArray = [
        {
            title: "Maintenance",
            weeks: 3,
            isActive: false,
            description: "bugs"
        },
    ]

    const clickedUX = (e) => {
        let filteredTitles = activeTitles.filter((e) => e !== undefined)
        if (filteredTitles.includes(e.title)) {
            setActiveTitles(filteredTitles.filter((title) => title !== e.title))
        } else {
            let newTitles = filteredTitles.push(e.title)
            newTitles = filteredTitles.filter((e) => e !== undefined)
            setActiveTitles(newTitles)
        }
        console.log(activeTitles)
    }

    const hasTitle = (title) => {
        //console.log(activeTitles.length)
        return activeTitles.includes(title);
    }

    const [activeTitles, setActiveTitles] = useState([]);

    const getBundleFor = (dataItem) => {
        return (
            <Bundle title={dataItem.title} weeks={dataItem.weeks} isActive={hasTitle(dataItem.title)}
                onClicked={() => { clickedUX(dataItem) }} key={dataItem.title} />
        );
    }
    return <>
        <h2>Design the App</h2>
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
    </>
}

export default Prices;