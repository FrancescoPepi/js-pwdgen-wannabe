// RICHIESTA DEL NOME
const UserName = prompt(
  `
  Ciao! Benvenuto nel generatore di password più sicuro al mondo!

    Inserisci il tuo Nome
`
);

// RICHIESTA DEL COGNOME
const Surname = prompt(
  `
    Ci siamo quasi!
  
      Adesso inserisci il tuo Cognome
  `
);

// RICHIESTA DEL COLORE PREFERITO
const FavoriteColor = prompt(
  `
      Un ultimo sforzo!
    
        Adesso inserisci il tuo Colore preferito
    `
);

// CREAZIONE E COCATENAZIONE DELLA PASSWORD
const Password = UserName + Surname + FavoriteColor + 21;

document.getElementById("password").innerHTML = Password;
console.log(Password);
