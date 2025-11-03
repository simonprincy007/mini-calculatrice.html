function soustraction(a, b) { return a - b;}
function division(a, b) {
 if (b === 0) { return 'Erreur'; }
 return a / b;
}
// Fonction pour gérer les opérations
function setOperation(op) {
 if (currentInput === '0') return;
 if (operation !== null) calculate();
 previousInput = currentInput;
 operation = op;
 shouldResetScreen = true;
}
