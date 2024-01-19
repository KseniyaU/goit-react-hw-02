import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Description } from '../Description/Description'
// import { Feedback } from '../Feedback/Feedback'
import { Options} from '../Options/Options'
import { Feedback } from '../Feedback/Feedback'

function App() {
    
    const [clicks, setClicks] = useState({
        good: 0,
	    neutral: 0,
	    bad: 0
    })
    const updateGood = () => {
        setClicks({
            ...clicks,
            good: clicks.good + 1
        })
    }
    const updateNeutral = () => {
        setClicks({
            ...clicks,
            neutral: clicks.neutral +1
    })
    }
    const updateBad = () => {
        setClicks({
            ...clicks,
            bad: clicks.bad +1
        })
    }
    return (
        <div>
            <Description></Description>  
            <Options></Options>
            <Feedback clicks={ setClicks}></Feedback>
        </div>
       
    );
    
 
}

export default App
