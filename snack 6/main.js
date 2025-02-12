function creaContatoreAutomatico(ms) {
    let i = 0
    setInterval(() => {
        console.log(i);
        i++
    }, ms)
}

creaContatoreAutomatico(1000)