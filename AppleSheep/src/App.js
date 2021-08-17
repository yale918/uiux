
import './App.css';
import logo from './images/logo.png';
import menu from './images/menu.png';
import arrow from './images/arrow.png';
import controller from './images/controller.png';
import add from './images/add.png';
import fb from './images/fb.png';
import tw from './images/tw.png';
import ig from './images/ig.png';



function App() {
  const test = (e) => {
    
    const menuList = document.getElementById("menuList");
    if(menuList.style.maxHeight == '0px'){
      menuList.style.maxHeight = '130px'
    }
    else{
      menuList.style.maxHeight = '0px'
    }
  }

  return (

    <div className="container">
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul id="menuList">
            <li><a href="">CV</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Refs</a></li>
            <li><a href="">Settings</a></li>
          </ul>
        </nav>
        <img 
        src={menu} 
        className="menu-icon" 
        alt="menu" 
        onClick={test} 
        />
      </div>
      <div className="row">
        <div className="col-1">
          <h2>PS4 V2<br />Dualshock 4</h2>
          <h3>Wireless Controller for PlayStation 4</h3>
          <p>(Compatible/Generic)</p>
          <h4>$32.50</h4>
          <button type="button">Buy Now <img src={arrow} /></button>
        </div>
        <div className="col-2">
          <img src={controller} alt="controller" className="controller" />
          <div className="color-box"></div>
          <div className="add-btn">
            <img src={add} alt="add" />
            <p><small>Add to Cart</small></p>
          </div>
        </div>
      </div>
      <div className="social-links">
        <img src={fb} alt="fb" />
        <img src={tw} alt="tw" />
        <img src={ig} alt="ig" />
      </div>
    </div>
  );
}

export default App;

