import './CarteRando.css'


function CarteRando(rando) {
	
    const maRando = rando.props;

	return (
		<>
			<div className='carte'>
                <span className='nom'>Nom : {maRando.nom}</span><br/>
                Difficulté : {maRando.difficulte} <br />
                Durée en heures : {maRando.duree_h} <br />
                Dénivelé en mètres : {maRando.denivele_m} <br />
                Région : {maRando.region} <br />
                Balisée : {maRando.balisee ? "Oui" : "Non"} <br />
            </div>
		</>
	)
}

export default CarteRando
