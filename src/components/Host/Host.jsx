import hostStyles from "./Host.module.css";

function Host({ host }) {
    return (
        <div className={hostStyles["host--container"]}>
            <p className={hostStyles["host--name"]}>{host.name}</p>
            <img src={host.picture} alt={`Portrait de ${host.name}`} className={hostStyles["host--picture"]} />
        </div>
    );
};

export default Host;