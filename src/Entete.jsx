import { useState } from "react";
import "./Entete.css";

function Entete({ donneesTotales, donneesAffichees, setDonneesAffichees }) {
    const filtreDonnees = (diffchoisie) => {
        setDonneesAffichees(
            donneesTotales.filter((e) => e.difficulte === diffchoisie),
        );
    };

    return (
        <>
            <header>
                <h1>Ada Rando</h1>
                <p>
                    Retrouvez ici, 12 des plus beaux circuits de randonnées de
                    France.
                </p>
                <p>Rando affichées : {donneesAffichees.length}</p>
                <button
                    onClick={() => {
                        filtreDonnees("facile");
                    }}
                >
                    Facile
                </button>
                <button
                    onClick={() => {
                        filtreDonnees("moyen");
                    }}
                >
                    Moyen
                </button>
                <button
                    onClick={() => {
                        filtreDonnees("difficile");
                    }}
                >
                    Difficile
                </button>
                <button
                    onClick={() => {
                        setDonneesAffichees(donneesTotales);
                    }}
                >
                    Tout afficher
                </button>
            </header>
        </>
    );
}

export default Entete;
