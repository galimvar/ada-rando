import { useEffect, useState } from 'react';
import './CarteRando.css'
import EtiquetteDifficulte from './EtiquetteDifficulte';

function CarteRando({rando}) {
	
    let className = 'carte';
    let color ='';
    console.log(rando.difficulte)
    if (rando.difficulte === 'moyen'){
        className += ' orange';
        color = ' nomOrange';
    } else if (rando.difficulte === 'facile'){
        className += ' green';
        color = ' nomGreen';
    } else if(rando.difficulte === 'difficile'){
        className += ' red';
        color = ' nomRed';
    } else {
        className = 'carte';
    }


	return (
		<>
			<div className={className}>
                <EtiquetteDifficulte difficulte={rando.difficulte}/>
                <ul>
                    <li className={'nom' + color}>Nom : {rando.nom}</li>
                    <li>Durée en heures : {rando.duree_h}</li> 
                    <li>Dénivelé en mètres : {rando.denivele_m}</li>
                    <li>Région : {rando.region}</li> 
                    {rando.balisee ? <li>Balisée</li> : ""}
                </ul>
                
            </div>
		</>
	)
}

export default CarteRando
