const heightBernard = 1.69;
const weightBernard = 78;
const heightMarcel = 1.95;
const weightMarcel = 92;
const imcBernard = weightBernard / (heightBernard * heightBernard);
const imcMarcel = weightMarcel / (heightMarcel * heightMarcel);
console.log(imcBernard);
console.log(imcMarcel);

console.log("exercice1")
if (imcBernard < imcMarcel) {
    console.log("Bernard à un IMC  plus petit que Marcel") 
} else {
    console.log("Bernard à un IMC plus grand que Marcel")
};

console.log("exercice2")
if (imcBernard < imcMarcel) {
    console.log("Marcel à un IMC(" + imcMarcel.toFixed(2) + ") plus élevé que Bernard (" + imcBernard.toFixed(2) + ")") 
} else {
    console.log("Bernard à un IMC(" + imcBernard.toFixed(2) + ") plus élevé que Marcel(" + imcMarcel.toFixed(2) + ")")
};

console.log("exercice3")
console.log("exercice2")
if (imcBernard < imcMarcel) {
    console.log("Marcel à un IMC(" + imcMarcel.toFixed(2) + ") plus élevé que Bernard (" + imcBernard.toFixed(2) + ")") 
} else {
    console.log("Bernard à un IMC(" + imcBernard.toFixed(2) + ") plus élevé que Marcel(" + imcMarcel.toFixed(2) + ")")
};
