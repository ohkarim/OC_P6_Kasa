import bannerStyles from "./Banner.module.css";

/**
 * @function Banner - The functional component that renders the banner.
 * @param {object} props - The properties of the component.
 * @param {string} props.image - The image of the banner.
 * @param {string} props.text - The text of the banner.
 * @constant {string} style - The style of the banner. 
 * @return {JSX.Element} The rendered component.
*/

export default function Banner({ image, text }) {
    const style = !text ? bannerStyles["banner--container--large-height"] : bannerStyles["banner--container"];

    return ( 
        <div className={style} style={{backgroundImage: `url(${ image })`}}>
            <div className={bannerStyles["banner--text--container"]}>
                {!text ? null : <p className={bannerStyles["banner--text--content"]}>{ text }</p>}
            </div>
        </div>
     );
};
