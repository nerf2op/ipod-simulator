import Music from '../utils/Music'
import './secondScreen.css'
const SecondScreen = ({newItems}) => {
   
    return (
        <div className="second-screen">
            
            { //when music is selected it will open music page
            newItems[0]==='Music'?<Music/>:<h1>{newItems}</h1>}
            
        </div>
    )
}

export default SecondScreen
