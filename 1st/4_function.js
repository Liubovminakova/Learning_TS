function add(a, b) {
    return a + b;
}
function toUppercase(str) {
    return str.trim().toUppercase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: underfined, y: underfined };
    }
    if (a && !b) {
        return { x: a, y: underfined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One param: ', position(42));
console.log('Two param: ', position(10, 15));
