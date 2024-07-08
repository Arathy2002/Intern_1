// let has local scope...it cant be reinitialised
let b= 2;
console.log(b);
{
    let b=20;
    console.log(b);
}
console.log(b);


