import classes from './navigation.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './mainimg.png'
import { Router, useRouter } from 'next/router' //push page. replace?
import Link from 'next/link'
import Image from 'next/image'

// import { Navigation } from 'bootstrap'
//export static
function Navigation() {
    const router = useRouter();
    let home = router.pathname === '/';

    let routes = [
        {
            title: "Home",
            routePath: "/"
        },
        // {
        //     title: "Technical Supp.",
        //     routePath: "/tech_supprices"
        // },
        {
            title: "Dev Svcs",
            routePath: "/prices"
        },
        {
            title: "About",
            routePath: "/about"
        },
    ];

    // const newRoutes = home ? routes.filter((element) => {
    //     return element.title !== 'Main'
    // }) : routes;

    return (

        <nav className={classes.navigation}>
            <div className={classes.navBar}>
                <ul className={classes.unorderedList}>
                    {
                        routes.map((element) => {
                            return <li className={classes.listItem} key={element.title}>
                                <Link href={element.routePath}>{element.title}</Link>
                            </li>
                        })}
                </ul>
            </div>
        </nav>

    );
};

export default Navigation;