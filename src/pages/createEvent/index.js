
import './Create.css';
import { useHistory } from 'react-router-dom';

const CreateEvent = () => {

    const history = useHistory();

    const onPressNext = () => {
        history.push('/event')
    }

    return (
        <div className="container">
            <div>
            <>
                <label for="ename">Event Name : </label>
                <input type="text" id="ename" name="Event Name" placeholder="Event Name.." />

                <label for="hname">Host Name : </label>
                <input type="text" id="hname" name="hname" placeholder="Host Name.." />
                <div class="dates">
                    <div class="dateitem">
                        <label for="sdate">Start Date : </label>
                        <input type="date" id="sdate" name="sdate" class="datepick" />
                    </div>
                    <div class="dateitem">
                        <label for="edate">End Date : </label>
                        <input type="date" id="edate" name="edate" class="datepick" />
                    </div>
                </div>
                <label for="location">Your Location : </label>
                <input type="text" id="location" name="location" placeholder="Your Location.." />

                <label for="photo">Your Photo : </label>
                <input type="file" id="photo" name="photo" />
                <button className='btn' onClick={() => onPressNext()}>Next</button>
            </>
    
            </div>
        </div>
    )
}

export default CreateEvent;