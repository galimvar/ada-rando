import { useState } from "react";
import "./App.css";
import Entete from "./Entete";
import ListeRando from "./ListeRando";
import randonnees from './randonnees.json';


function App() {
    const [donneesAffichees, setDonneesAffichees] = useState(randonnees);


    return (
        <>
            <Entete donneesTotales={randonnees} donneesAffichees={donneesAffichees} setDonneesAffichees={setDonneesAffichees}/>
            <ListeRando donneesAffichees={donneesAffichees}/>
        </>
    );
}

export default App;
