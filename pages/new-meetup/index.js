import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetUpForm = () => {
    function addMeetUpHandler(){
        console.log('1');
    }
    return ( 
        <NewMeetupForm onAddmeetUp={addMeetUpHandler}/>
     );
}
 
export default NewMeetUpForm;