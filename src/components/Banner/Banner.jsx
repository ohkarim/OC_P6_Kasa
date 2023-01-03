import homeBannerImg from "../../banner_home_img.png"

// TODO: this component would probably be reused, now hardcoded with this specific Home Banner image

export default function Banner() {
    return ( 
        <div className="banner--container">
            <img src={homeBannerImg} alt="Paysage avec montagne et fôret" className="banner--img" />
            <div className="banner--text--container">
                {/* Chez vous, partout et ailleurs */}
                <p className="banner--text--content">Chez vous, partout et ailleurs</p>
            </div>
        </div>
     );
};
