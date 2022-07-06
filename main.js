turno = 'X'

toggle = function () {
    this.className = this.className + " ficha-" + turno;

    quienGana()

    if (turno === 'X') {
        turno = 'O'
    } else {
        turno = 'X'
    }
}

escucharClick = function (elem) {
    elem.addEventListener("click", toggle)
}

Array.from(document.getElementsByClassName("checkbox")).map(escucharClick)

quienGana = function () {
    if (
        validarLinea(document.getElementsByClassName("checkbox"), 0, 1, 2) ||
        validarLinea(document.getElementsByClassName("checkbox"), 3, 4, 5) ||
        validarLinea(document.getElementsByClassName("checkbox"), 6, 7, 8) ||
        validarLinea(document.getElementsByClassName("checkbox"), 0, 3, 6) ||
        validarLinea(document.getElementsByClassName("checkbox"), 1, 4, 7) ||
        validarLinea(document.getElementsByClassName("checkbox"), 2, 5, 8) ||
        validarLinea(document.getElementsByClassName("checkbox"), 0, 4, 8) ||
        validarLinea(document.getElementsByClassName("checkbox"), 2, 4, 6)
    ) {
        return turno
    }
    return false
}


validarLinea = function (elementos, index0, index1, index2,) {
    if (elementos[index0].className === elementos[index1].className && elementos[index1].className === elementos[index2].className) {
        return true
    }
    return false
}
