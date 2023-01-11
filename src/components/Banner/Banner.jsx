import "./banner.css";

export default function Banner(props) {
    const style = !props.text ? "banner--container--large-height" : "banner--container"

    return ( 
        <div className={style} style={{backgroundImage: `url(${props.image})`}}>
            <div className="banner--text--container">
                {!props.text ? null : <p className="banner--text--content">{props.text}</p>}
            </div>
        </div>
     );
};
