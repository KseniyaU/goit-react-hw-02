import { Notification } from "../Notification/Notification";

export const Feedback = ({ clicks: { good, neutral, bad }, total, proc }) => {
    if (total !== 0) {return (
            <div>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
                <p>Positive:{ proc}%</p>
            </div>
        );        
    } else {
        return <Notification/>
    }
}