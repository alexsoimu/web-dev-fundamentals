function salariuNet (salariuLunar, taxeAnuale) {
    const salariuFinal = (12 * salariuLunar) - (12 * salariuLunar * taxeAnuale) / 100

    return salariuFinal
}

const rezultatFunctie = salariuNet(3500, 25)

const rezultatFunctieAngajat2 = salariuNet(4800, 10)

console.log(rezultatFunctie)
console.log(rezultatFunctieAngajat2)


const arrowExample = (numeUser) => {
    return "Salutare, " + numeUser + ", bine ai venit pe platforma XYZ."
}

console.log(arrowExample("Alex"))
