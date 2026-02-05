 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
function totalSalary(employees){
    let totalS = 0;
    for(const employee of employees)
    {
        const total = employee.starting + employee.increment * employee.experience;
        totalS = totalS + total;
    }
    return totalS;

}
const result = totalSalary(employees);
console.log(result);