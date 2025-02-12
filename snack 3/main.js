const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplica = (a, b) => a * b;
const divisione = (a, b) => a / b

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 2, sottrazione));
