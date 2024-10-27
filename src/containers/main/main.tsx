import Topbar from "../topBar/topBar";
import MainBody from "../mainBody/mainBody";
import Footer from "../footer/footer";
import Style from './main.module.css'


function Main() {
    return (
        <div className={Style.container}>
            <div style={{height: '80px', width: '100%'}}>
                <Topbar />
            </div>
            <div style={{flex:1, width: '100%'}}>
                <MainBody />
            </div>
            <div style={{height: '40px', width: '100%'}}>
                <Footer />
            </div>
       </div>
    );
  }
  
  export default Main;