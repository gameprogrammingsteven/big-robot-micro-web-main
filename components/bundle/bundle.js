
import Link from 'next/link'
import { useEffect } from 'react';
import classes from './bundle.module.css'

export default function Bundle(props) {
    const { cost, desc, title, isActive, weeks, onClicked } = props;
    return (
        <div
            onClick={onClicked}
            className={`${classes.bundled} ${isActive ? classes.highlighted : ""}`}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.paragraph}>{desc}</p>
            <p className={classes.paragraphCost}>Cost Est: ${cost}</p>
        </div>
    );
}