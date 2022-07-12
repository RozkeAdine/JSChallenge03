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
    console.log("Bernard à un IMC(" + imcBernard.toFixed(1) + ") plus élevé que Marcel(" + imcMarcel.toFixed(0) + ")")
};

console.log("exercice3")

if (imcBernard<20){
        console.log("Bernard : insufisance pondérale")
    }
if(imcMarcel<20){
        console.log("Marcel : insufisance pondérale")
    }
if ((imcBernard>28) && (imcBernard<33)){
        console.log("Bernard : Surpoid")
    }
if ((imcMarcel>28) && (imcMarcel<33)){
        console.log("Marcel : Surpoid")
    };
