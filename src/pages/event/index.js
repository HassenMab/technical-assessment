
import css from './style.module.css';
import LandingImage from '../../assets/svg/LandingImage.svg';

const Event = () => {

    return (
        <div className={css.splitScreen}>
            <div className={css.leftPane}>
                <div className={css.rightPaneContent}>
                    <p className={css.title}>Birthday Bash</p>
                    <p>Hosted by Elysia</p>
                </div>
                <div className={css.evnetDate}>
                    <div>
                        <p>18 August 6:00PM</p>
                        <p>to 19 August 1:00PM UTC +10</p>
                    </div>
                </div>
            </div>
            <div className={css.rightPane}>
                <img className={css.image} src={LandingImage} alt="React Logo" />
            </div>
        </div>
    )
}

export default Event;