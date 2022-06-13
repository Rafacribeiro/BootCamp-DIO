// Resolução 1
function verificarString(string) {
    if (!string) return "string inexistente";
    
    return string.split("").reverse().join("") === string;
}

console.log(verificarString("ovo"));

// Resolução2

function verificarString2(string) {
    if (!string) return "string inexistente";

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 - i]) {
            return false
        }
        return true;
    }
}
console.log(verificarString2("gato"));

