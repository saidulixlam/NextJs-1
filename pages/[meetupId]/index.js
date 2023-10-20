// import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetUpDetails = () => {
    return (
        <MeetupDetails
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg'
            title='Meet up for the first' address='some where only we know' description='first meet up' />
    );
}
export async function getStaticPaths(){
    return {
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                }
            },{
                params:{
                    meetupId:'m2',
                }
            },{
                params:{
                    meetupId:'m3',
                }
            }
        ]
    }
}
export async function getStaticProps() {
    // const meetupId = context.params.meetupId;
    // console.log(meetupId);
    return {
        props: {
            meetupdata: {
                // id: 'm1',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg',
                title: 'Meet up for the first',
                address: 'some where only we know',
                description: 'first meet up'
            }
        }
    }
}


export default MeetUpDetails;