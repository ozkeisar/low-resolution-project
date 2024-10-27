import Body from "../body/body";
import SideBar from "../sideBar/sideBar";



function MainBody() {
    return (
        <div style={{height: '100%', width:'100%', backgroundColor: 'green', display: 'flex'}}>
            <div style={{flex:1}}>
                <Body></Body>
            </div>
            <div style={{width: '20%'}}>
                <SideBar></SideBar>
            </div>
       </div>
    );
  }
  
  export default MainBody;