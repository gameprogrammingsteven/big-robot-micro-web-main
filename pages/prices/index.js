import Bundle from '../../components/bundle/bundle'
import {useState} from 'react';

function Prices() {
    let hoursPerWeek = 40
    let pricePerHour = 122

    const firstSectionArray = [
        {
            title: "UXDesign",
            weeks: 1,
            isActive: false,
        },
        
    ]
    const clickedUX = (e) => {
        e.isActive = !e.isActive;
        setiSUXDesignAdded(!isUXDesignAdded)
        console.log("thingy")
    }

    const [isUXDesignAdded, setiSUXDesignAdded] = useState(false);

    return <>
        <h2>Design Aspect</h2>
        <div> {
            firstSectionArray.map((e) => {
                return (
                    <Bundle title={e.title} weeks={e.weeks} isActive={isUXDesignAdded} 
                     onClicked={ () =>{clickedUX(e)}} key={e.title}/>
                );
            })
        }
        
        </div>
        <hr />
    </>
}

export default Prices;