import './ListeRando.css'
import CarteRando from './CarteRando'
import randonnees from './randonnees.json';

function ListeRando() {
	
	return (
		<>
            <section className='randonnees'>
                {randonnees.map((rando) =>
                    <CarteRando key={rando.id}
                            props={rando} />
                )}
            </section>
		</>
	)
}

export default ListeRando
