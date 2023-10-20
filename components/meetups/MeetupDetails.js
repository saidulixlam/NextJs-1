import { Fragment } from "react";
import classes from './MeetupDetails.module.css';
const MeetupDetails = (props) => {
    return ( 
        <Fragment>
            <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <h1>{props.address}</h1>
            <p>{props.description}</p>
            </section>
        </Fragment>
     );
}
 
export default MeetupDetails;
