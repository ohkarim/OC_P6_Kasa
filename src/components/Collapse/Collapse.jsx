import { useState } from "react";
import collapseStyles from "./Collapse.module.css";

import arrow from "../../assets/images/collapse_dropdown_arrow.png"

function Collapse({ id, title, text, defaultOpen, isList, listItems }) {
    const [isExpanded, setIsExpanded] = useState(defaultOpen); // initialized with props, depending on true/flase value of defaultOpen

    return (
        <div key={id} className={collapseStyles["collapse--container"]}>
            <div className={collapseStyles["collapse--header"]} onClick={() => setIsExpanded(!isExpanded)}>
                <h3 className={collapseStyles["collapse--title"]}>{title}</h3>
                <img
                    src={arrow}
                    alt="Arrow"
                    className={collapseStyles["collapse--arrow"]}
                    style={{
                        transform: `rotate(${isExpanded ? 180 : 0}deg)`,
                        transition: 'transform 0.2s'
                    }}
                />
            </div>
            {!isList ?
                isExpanded && <div className={collapseStyles["collapse--text"]}>{text}</div>
                :
                isExpanded && <div className={collapseStyles["collapse--list--container"]}>
                    {listItems.map((item, index) => (<li key={index} className={collapseStyles["collapse--list--item"]}>{item}</li>))}
                </div>
            }
        </div>
    );
};

export default Collapse;

