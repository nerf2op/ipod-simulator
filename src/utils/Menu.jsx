
const Menu = ({idx,index,value}) => {
   var style=null;
   //if selected it will highlight that
   if(idx===index){
       console.log(`${idx} selected`);
    style={
        backgroundColor: 'black',
        color: 'white'
    }
   }
    return (
        <div className="menu" style={style} >
           {value} 
          
        </div>
    )
}

export default Menu
