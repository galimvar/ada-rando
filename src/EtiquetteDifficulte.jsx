import './EtiquetteDifficulte.css'


function EtiquetteDifficulte({difficulte}) {
    console.log(difficulte)
    let color ='';
    if (difficulte === 'moyen'){
        color = ' diffOrange';
    } else if (difficulte === 'facile'){
        color = ' diffGreen';
    } else if(difficulte === 'difficile'){
        color = ' diffRed';
    }
	return (
		<>
            <div className="etiquette">
                <div className={"texteEtiquette" + color}>{difficulte}</div>
            </div>
		</>
	)
}

export default EtiquetteDifficulte
