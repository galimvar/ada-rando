import { useState } from "react";
import './ListeRando.css'
import CarteRando from './CarteRando'


function ListeRando({donneesAffichees}) {

	return (
		<>
            <section className='randonnees'>
                {donneesAffichees.map((rando) =>
                    <CarteRando key={rando.id}
                            rando={rando}/>
                )}
            </section>
		</>
	)
}

export default ListeRando
