import React, { useState} from "react";


const TrafficLight = () => {
    const [selected, setSelected] = useState("rojo");

    return (
        <div className="semaforo">
            <div 
                className={`luz rojo ${selected === "rojo" ? "light-on" : ""}`} 
                onClick={() => setSelected("rojo")}
            ></div>
            <div 
                className={`luz amarillo ${selected === "amarillo" ? "light-on" : ""}`} 
                onClick={() => setSelected("amarillo")}
            ></div>
            <div 
                className={`luz verde ${selected === "verde" ? "light-on" : ""}`} 
                onClick={() => setSelected("verde")}
            ></div>
        </div>
    );
};

export default TrafficLight;