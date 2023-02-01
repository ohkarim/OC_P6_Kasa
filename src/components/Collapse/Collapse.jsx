import { useState } from "react";
import collapseStyles from "./Collapse.module.css";

import arrow from "../../assets/images/collapse_dropdown_arrow.png"

/** 
 * @function Collapse - The functional component that renders the collapse.
 * @param {object} props - The properties of the component.
 * @param {string} props.id - The id of the collapse.
 * @param {string} props.title - The title of the collapse.
 * @param {string} props.text - The text of the collapse.
 * @param {boolean} props.defaultOpen - The default state of the collapse.
 * @param {boolean} props.isList - The boolean value of the collapse.
 * @param {Array} props.listItems - The array of list items.
 * @constant {boolean} isExpanded - The state of the collapse.
 * @constant {function} setIsExpanded - The function that sets the state of the collapse.
 * @return {JSX.Element} The rendered component.
*/

function Collapse({ id, title, text, defaultOpen, isList, listItems }) {
    const [isExpanded, setIsExpanded] = useState(defaultOpen); // initialized with props, depending on true/false value of defaultOpen

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

