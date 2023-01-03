import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";

import aboutBannerImg from "../assets/images/banner_about_img.png"

// TODO: for Data of each Collapse component, should I use map with a JSON file that includes each data for each element or hardcode it ?
// Best with JSON, or with array in const 

function About() {
    const collapseData = [
        {
            id: 1,
            title: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            id: 2,
            title: "Respect",
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 3,
            title: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: 4,
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }  
    ]
    return (
        <>
            <main>
                <Banner image={aboutBannerImg} alt="Paysage montagneux et arboré" text={null}/>
                <section className="collapse--section">{collapseData.map(collapse => (
                    <Collapse key={collapse.id} title={collapse.title} text={collapse.text}/>
                ))}</section>
            </main>
        </>
    )
}


export default About