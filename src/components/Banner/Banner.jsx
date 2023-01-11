import bannerStyles from "./Banner.module.css";

export default function Banner(props) {
    const style = !props.text ? bannerStyles["banner--container--large-height"] : bannerStyles["banner--container"];

    return ( 
        <div className={style} style={{backgroundImage: `url(${props.image})`}}>
            <div className={bannerStyles["banner--text--container"]}>
                {!props.text ? null : <p className={bannerStyles["banner--text--content"]}>{props.text}</p>}
            </div>
        </div>
     );
};
