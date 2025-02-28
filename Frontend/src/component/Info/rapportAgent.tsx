export const RapportAgent = ({rapport}) => {
    console.log(rapport)
    return (
        <div className={"d-another-info"}>
            {
                rapport && rapport.length > 0 ? (
                    rapport.map((rp, index) => (
                        <p key={index}>
                            <span key={index}>{rp.HeureArrivee}</span> <span>{rp.HeureSortie}</span>
                        </p>
                    ))
                ) : (
                    <p>Aucune donnée pour l'instant</p>
                )
            }
        </div>
    );
};
