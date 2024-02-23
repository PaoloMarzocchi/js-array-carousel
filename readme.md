## TRACCIA
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
 Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

## STEPS
- creo il markup per contenere il carosello ed inserisco le immagini all'interno
- creo una classe active da assegnare alla prima immagine 
- creo due bottoni per poter scorrere il carosello
- creo il markup dinamicamente con javascript
    -creo un array contenente le immagini
    -seleziono il tag che contiene le immagini
    -creo una variabile come segnaposto che mi servirà per spostare la classe active tra le immagini
    -ciclo per scorrere nell'array d'immagini e sostituire sequenzialmente la classe active
- aggiungo gli eventi ai click dei due bottoni (avanti e indietro)
    -al click aumento di 1 (o diminuisco di 1) la variabile segnaposto
    -seleziono l'immagine successiva andando a cambiare il percorso tramite l'indice dell'array che sarà uguale alla variabile segnaposto

## TOOLS
- let / const
- array [] 
- for
- querySelector
- classList.add
- addEventListener