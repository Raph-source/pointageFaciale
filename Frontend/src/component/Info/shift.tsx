export const Shift = ({shift}) => {
    return (
        <div className={"d-another-info"}>
            <p>Shilt du jour <span className={shift && shift.jour ? "oui" : "non"}>{shift && shift.jour ? "Oui" : "Non"}</span></p>
            <p>Shilt de nuit <span className={shift && shift.jour ? "oui" : "non"}>{shift && shift.jour ? "Oui" : "Non"}</span></p>
        </div>
    );
};
