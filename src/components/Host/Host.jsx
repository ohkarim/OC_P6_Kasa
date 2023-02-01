import hostStyles from "./Host.module.css";

/**
 * @function Host - The functional component that renders a host.
 * @param {Object} props - The properties of the component.
 * @param {Object} props.host - The host object.
 * @return {JSX.Element} The rendered component.
*/

function Host({ host }) {
    return (
        <div className={hostStyles["host--container"]}>
            <p className={hostStyles["host--name"]}>{host.name}</p>
            <img src={host.picture} alt={`Portrait de ${host.name}`} className={hostStyles["host--picture"]} />
        </div>
    );
};

export default Host;