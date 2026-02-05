function calculateElectronicsBudget(laptopN, tabletN, mobileN){

    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;
    const total = laptop * laptopN + tablet * tabletN + mobile * mobileN;
    return total;

}
const result = calculateElectronicsBudget(0, 1, 1);
console.log(result);