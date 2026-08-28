## Qu'est-ce qu'une prop ? D'où vient-elle, et qui décide de sa valeur ?
c'est un paramètre qu'on peut passer à un composant react. On décide de sa valeur lorsqu'on appelle le composant.
## Pourquoi React a besoin d'une key sur les éléments d'une liste ?
Pour que react puisse repérer l'élément et modifier son affichage en fonction de ce qu'on lui demande, dynamiquement, et sans recharger la page.
## EtiquetteDifficulte est tout petit. Qu'est-ce qu'on gagne à en faire un composant ?
Pas grand chose si on veut mon avis... Peut-être que ça permet quand même de meixu segmenter le code, et du coup de modifier uniquement cet élément (surtout si beaucoup de lignes de code dans CarteRando par exemple)
## Pourquoi className et pas class ?
class est utilisé dans JS (POO) et dans CSS, ClassName évite les confusions pour le navigateur
## En une phrase : qu'est-ce qui te revient facilement, et qu'est-ce que tu avais oublié ?
Tout revient facilement, mais j'ai oublié les {} dans mes props pour destructurer... du coup je me retrouvé avec des rando.difficulte, ou pire rando.rando.nom... ça m'a paru étrange, j'ai été revoir Adataviz pour voir ce que j'avais raté.