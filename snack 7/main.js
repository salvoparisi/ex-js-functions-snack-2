function eseguiEferma(mex, avvio, stop) {
    setTimeout(() => {
        const messaggio = setInterval(() => console.log(mex), 500)
        setTimeout(() => clearInterval(messaggio), stop)
    }, avvio)
}

eseguiEferma("ciao", 5000, 3000)