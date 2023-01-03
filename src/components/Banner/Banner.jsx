

// TODO: this component would probably be reused, now hardcoded with this specific Home Banner image

export default function Banner(props) {
    return ( 
        <div className="banner--container">
            <img src={props.image} alt={props.alt} className="banner--img" />
            <div className="banner--text--container">
                <p className="banner--text--content">{props.text}</p>
            </div>
        </div>
     );
};
