//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const [selectColor, setSelectedColor] = useState ("red");
    //first step we need


    return (
        <div className ="text-center">
            <div clasName ="pole"></div>
            <div className ="traffic-light">
            <div onClick ="setColor" className=""></div>
            <div onClick ="setColor" className=""></div>
            <div onClick ="setColor" className=""></div>
            </div>
        </div>
    )
}


export default Home;