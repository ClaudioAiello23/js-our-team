'use strict';

// Creo l'array di oggetti in base alle info fornite
const teamMembers = [
    {
        nome: 'Wayne Barnett', // object 0 position 0
        ruolo: 'Founder & CEO', // object 0 position 1
        foto: 'wayne-barnett-founder-ceo.jpg' // object 0 position 2
    },

    {
        nome: 'Angela Caroll', // object 1 position 0
        ruolo: 'Chief Editor', // object 1 position 1
        foto: 'angela-caroll-chief-editor.jpg' // object 1 position 2
    },

    {
        nome: 'Walter Gordon', // object 2 position 0
        ruolo: 'Office Manager', // object 2 position 1
        foto: 'walter-gordon-office-manager.jpg' // object 2 position 2
    },

    {
        nome: 'Angela Lopez', // object 3 position 0
        ruolo: 'Social Media Manager', // object 3 position 1
        foto: 'angela-lopez-social-media-manager.jpg' // object 3 position 2
    },

    {
        nome: 'Scott Estrada', // object 4 position 0
        ruolo: 'Developer', // object 4 position 1
        foto: 'scott-estrada-developer.jpg' // object 4 position 2
    },

    {
        nome: 'Barbara Ramos', // object 5 position 0
        ruolo: 'Graphic Designer', // object 5 position 1
        foto: 'barbara-ramos-graphic-designer.jpg' // object 5 position 2
    }
];

console.log(teamMembers); //stampa dell'intero Array


/*Eseguo un ciclo FOR per stampare una alla volta le informazioni di ogni membro (con il 
ciclo FOR viene quindi attraversato tutto l'array di objects*/
for (let key in (teamMembers)){
    console.log(teamMembers[key].nome);
    console.log(teamMembers[key].ruolo);
    console.log(teamMembers[key].foto);
}

