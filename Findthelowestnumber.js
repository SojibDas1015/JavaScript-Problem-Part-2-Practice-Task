const heights2 = [167, 190, 120, 165, 137];

function minNum(num){
    let minN = num[0];
    for(const n of num)
    {
        if(minN > n)
        {
            minN = n;
        }
    }
    return minN;
}
const result = minNum(heights2);
console.log(result);