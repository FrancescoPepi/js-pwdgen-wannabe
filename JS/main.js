// RICHIESTA DEL NOME
const UserName = prompt(
  "Ciao!\nBenvenuto nel generatore di password più sicuro al mondo!\nInserisci il tuo Nome"
);

// RICHIESTA DEL COGNOME
const Surname = prompt("Ci siamo quasi!\nAdesso inserisci il tuo Cognome");

// RICHIESTA DEL COLORE PREFERITO
const FavoriteColor = prompt(
  "Un ultimo sforzo!\nAdesso inserisci il tuo Colore preferito"
);

// CREAZIONE E COCATENAZIONE DELLA PASSWORD
const Password = UserName + Surname + FavoriteColor + "21";

document.getElementById("password").innerHTML = Password;
