'use strict';

// Creo l'array di oggetti in base alle info fornite
const teamMembers = [
    {
        nome: 'Wayne Barnett', 
        ruolo: 'Founder & CEO', 
        foto: 'wayne-barnett-founder-ceo.jpg' 
    },

    {
        nome: 'Angela Caroll', 
        ruolo: 'Chief Editor', 
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon', 
        ruolo: 'Office Manager', 
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager', 
        foto: 'angela-lopez-social-media-manager.jpg' 
    },

    {
        nome: 'Scott Estrada', 
        ruolo: 'Developer', 
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos', 
        ruolo: 'Graphic Designer', 
        foto: 'barbara-ramos-graphic-designer.jpg' 
    }
];

console.log(teamMembers); //stampa dell'intero Array

// Creo 3 Array vuoti corrispondenti alle chiavi degli objects (nome, ruolo, foto)
const nameArray = [];
const jobArray = [];
const photoArray = [];

// Inizializzo 3 variabili corrispondenti alle chiavi degli objects (nome, ruolo, foto)
let memberName;
let memberJob;
let memberPhoto;

/*Eseguo un ciclo FOR per stampare una alla volta le informazioni di ogni membro (con il 
ciclo FOR viene quindi attraversato tutto l'array di objects; in più chiedo di aggiungere
al relativo Array l'informazione nome, ruolo, foto*/
for (let key in (teamMembers)){

    console.log(teamMembers[key].nome);
    console.log(teamMembers[key].ruolo);
    console.log(teamMembers[key].foto);

    memberName = (teamMembers[key].nome);
    memberJob = (teamMembers[key].ruolo);
    memberPhoto = (teamMembers[key].foto);

    nameArray.push(memberName);
    jobArray.push(memberJob);
    photoArray.push(memberPhoto);

}

console.log(nameArray);
console.log(jobArray);
console.log(photoArray);





document.getElementById('member_name').innerHTML = nameArray;
document.getElementById('member_job').innerHTML = jobArray;
document.getElementById('member_photo').innerHTML = photoArray;



  



