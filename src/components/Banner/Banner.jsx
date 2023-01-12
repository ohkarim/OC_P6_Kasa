import bannerStyles from "./Banner.module.css";

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
