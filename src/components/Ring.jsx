import {ArrowDropDownCircle, Forward } from "@material-ui/icons"


const Ring = ({mouseInHandle,mouseOutHandle,index,setnewItems}) => {
   //backbutton checker
    const backHandle=()=>{
        setnewItems([]);
      }
      const styles={
         'font-size' : '2rem',
      }

    return (
        <>
        <div id="interaction" 
        onMouseEnter={mouseInHandle}
         onMouseLeave={mouseOutHandle}>
            <div className="back" onClick={backHandle}>
            <ArrowDropDownCircle style={styles}/>    
           </div>
        <div className="backward">
            <Forward style={styles}/>
        </div>
          <div className="forward">
            <Forward style={styles}/>
            </div> 
          </div>
      
          </>
    )
}

export default Ring
