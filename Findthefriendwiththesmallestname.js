const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smolF(str){
    let sname = str[0];
    for(const name of str)
    {
        if(sname.length > name.length)
        {
            sname = name;
        }
    }
    return sname;
}
const result = smolF(heights2);
console.log(result);