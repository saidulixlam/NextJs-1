import MeetupList from '../components/meetups/MeetupList';

const dummy = [
    {
        id: 'm1',
        title: 'first meet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg',
        address: 'London',
        description: 'This is a meet up'
    },
    {
        id: 'm2',
        title: 'Second meet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg',
        address: 'London',
        description: 'This is a meet up'
    },
    {
        id: 'm3',
        title: 'Third meet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg',
        address: 'London',
        description: 'This is a meet up'
    }
]
const Home = () => {
    return (
        <MeetupList meetups={dummy} />
    );
}

export default Home;