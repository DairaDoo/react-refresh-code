import {MdPostAdd, MdMessage} from 'react-icons/md';
import { Link } from 'react-router-dom'; // prevnets the browser from sending a request.

import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                InspireMe!
            </h1>
            <p>
                <Link to="/create-post" className={classes.button}>
                    <MdPostAdd size={18} />
                    Share Your Favorite Phrase
                </Link>
            </p>
        </header>
    )
}

export default MainHeader;