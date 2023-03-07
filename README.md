ESERCIZIO
esercizio di oggi: Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
-----------------------------------------------------------------

SVOLGIMENTO - IPOTESI

Milestone 0
- ho a disposizione l'elenco dei membri del team, che costituiscono i miei oggetti; ogni oggetto ha 3 chiavi (nome, ruolo, link foto); inserisco i membri (oggetti) in una lista Array. Creo quindi un Array di objects.

Milestone 1
- una volta creato l'array di objects contenente i membri del Team, stampo su console, per ogni oggetto, le informazioni di NOME, RUOLO, STRINGA-IMMAGINE. Per stampare il contenuto di ogni object (in particolare il relativo valore) membro per membro, utilizzo un ciclo FOR che attraversa tutto l'array di oggetti e mi permette di raggiungere le informazioni richieste; per stampare solo il valore, ho individuato l'array di riferimento, più la combinazione [key].chiave per stampare solo il valore della proprietà dell'oggetto (senza stampare la chiave); in quanto successivamente mi servirà soltanto il valore da utilizzare nel DOM.

Milestone 2
- le informazioni reperite nella console, dovrei salvarle in variabili per poterle in qualche modo gestire e stampare nel DOM. Pertanto oltre al file JS devo iniziare a creare un id/classe su HTML per poter agganciarmi alle informazioni ottenute dal file JS relativamente ai membri del team.
- creare 3 array vuoti (ognuno dei quali corrisponde ad una chiave: nome, lavoro, foto), e riempirli all'interno del precedente ciclo FOR, pushando le 3 variabili singole nel
relativo Array; fuori dal ciclo FOR, agganciare il contenuto degli Array (nome, lavoro, foto) ai div creati nell'html, tramite ID. In questa maniera dovrei riuscire a stampare nel DOM le informazioni (valori) riguardanti i membri del Team.
