import tagsStyles from "./Tags.module.css";

/**
 * @function Tags - The functional component that renders a list of tags.
 * @param {Object} props - The properties of the component.
 * @param {Array} props.tags - The array of tags.
 * @return {JSX.Element} The rendered component.
*/

function Tags({ tags }) {
    return (
        <ul className={tagsStyles["tags--container"]}>
            {tags.map((tag, index) => {
                return (
                    <li key={index} className={tagsStyles["tag--item"]}>{tag}</li>
                )
            })}
        </ul>
    );
};

export default Tags;