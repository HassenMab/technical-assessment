
import './Home.css';
import LandingImage from '../../assets/svg/LandingImage.svg';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    const onPressCreate = () => {
        history.push('/create')
    }

    return (
        <div className="container-flex">
        <div className="flex-col image-col">
            <img src={LandingImage} alt="mobile-img" />
        </div>
        <div className="flex-col content-col">
            <h2 className="big-black-text">Imagine if</h2>
            <h2 className="big-purple-text">Snapchat</h2>
            <h2 className="big-black-text">had events.</h2>
            <p>Easily host and share events with your friends across any social media.</p>
            <button onClick={() => onPressCreate()} className="flexColBtn">🎉 Create my event</button>
        </div>
    </div>

    )
}

export default Home;