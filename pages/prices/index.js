import Bundle from '../../components/bundle/bundle'
import {useState} from 'react';

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
        if( filteredTitles.includes(e.title)) {
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

    return <>
        <h2>Design Aspect</h2>
        <div> {
            desSectionArray.map((e) => {
                return (
                    <Bundle title={e.title} weeks={e.weeks} isActive={hasTitle(e.title)} 
                     onClicked={ () =>{clickedUX(e)}} key={e.title}/>
                );
            })
        }
        
        </div>
        <hr />
        <h2>Design Aspect</h2>
        <div> {
            appSectionArray.map((e) => {
                return (
                    <Bundle title={e.title} weeks={e.weeks} isActive={hasTitle(e.title)} 
                     onClicked={ () =>{clickedUX(e)}} key={e.title}/>
                );
            })
        }
        
        </div>
        <hr />
        <h2>Design Aspect</h2>
        <div> {
            maintainingSectionArray.map((e) => {
                return (
                    <Bundle title={e.title} weeks={e.weeks} isActive={hasTitle(e.title)}
                     onClicked={ () =>{clickedUX(e)}} key={e.title}/>
                );
            })
        }
        
        </div>
    </>
}

export default Prices;