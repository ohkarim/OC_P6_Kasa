import { useState } from "react";
import collapseStyles from "./Collapse.module.css";

import arrow from "../../assets/images/collapse_dropdown_arrow.png"

function Collapse({ key, title, text, defaultOpen}) {
    const [isExpanded, setIsExpanded] = useState( defaultOpen ); // initialized with props, depending on true/flase value of defaultOpen

    return ( 
        <div key={ key } className={collapseStyles["collapse--container"]}>
            <div className={collapseStyles["collapse--header"]} onClick={() => setIsExpanded(!isExpanded)}>
                <h3 className={collapseStyles["collapse--title"]}>{ title }</h3>
                <img 
                    src={ arrow } 
                    alt="Arrow" 
                    className={collapseStyles["collapse--arrow"]}
                    style={{
                        transform: `rotate(${isExpanded ? 180 : 0}deg)`,
                        transition: 'transform 0.2s'
                    }}
                />
            </div>
            {isExpanded && (<div className={collapseStyles["collapse--text"]}>{ text }</div>)}
        </div>
     );
};

export default Collapse;

