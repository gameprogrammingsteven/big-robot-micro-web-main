
import Link from 'next/link'
import { useEffect } from 'react';
import classes from './bundle.module.css'

export default function Bundle(props) {
    const {title, isActive, weeks, onClicked} = props;
    return (
         <div 
         onClick={onClicked}
         className={`${classes.bundled} ${!isActive ? classes.highlighted : ""}`}>
            <h2>{title}</h2>
            <p>graph</p>
        </div>
    );
}