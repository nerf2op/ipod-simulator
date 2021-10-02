import Menu from '../utils/Menu';
import './screen.css';
import SecondScreen from './SecondScreen';
import SideTwo from './SideTwo';
const Screen = ({index,items,newItems}) => {        
    return (
        <div id="screen">
            <div className="side1">
            <h3>Ipod React</h3>
            {/* when item is selected it whill open second screen */}
           { newItems.length>0? <SecondScreen 
           newItems={newItems}/> :
           //this will display menu items
            items.map((value,idx)=>{
              return( <Menu 
               idx={idx}
               index={index}
               value={value} />)
           })}
            </div>
            {
            /* this will hide side screen */
            newItems.length<=0? <SideTwo/>: null
            }
            
        </div>
    )
}

export default Screen
