import { useState } from "react";
import "./collapse.css";

import arrow from "../../assets/images/collapse_dropdown_arrow.png"

function Collapse(props) {
    const [isExpanded, setIsExpanded] = useState(props.defaultOpen); // initialized with props, depending on true/flase value of defaultOpen

    return ( 
        <div key={props.id} className="collapse--container">
            <div className="collapse--header" onClick={() => setIsExpanded(!isExpanded)}>
                <h3 className="collapse--title">{props.title}</h3>
                <img 
                    src={arrow} 
                    alt="Arrow" 
                    className="collapse--arrow" 
                    style={{
                        transform: `rotate(${isExpanded ? 180 : 0}deg)`,
                        transition: 'transform 0.2s'
                    }}
                />
            </div>
            {isExpanded && (<div className="collapse--text">{props.text}</div>)}
        </div>
     );
}

export default Collapse;

