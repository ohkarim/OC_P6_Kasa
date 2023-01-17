import tagsStyles from "./Tags.module.css";

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