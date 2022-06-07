//Math.floor(Math.random() * 10) + 1;


function showMultiplicationTable(x){
   let i = 1;
while (i <= 10){
console.log(x + "*" + i + "=" + (7 * i));
 i++;
}
}
showMultiplicationTable(7);



console.log();

for ( var i = 0; i < 10; i++){
    let o = Math.floor((Math.random() * 180)+20);
    if ( o % 2 === 0){
        console.log( o + " even");
    }
    else {
 //       console.log (o + " odd");
    }
}

function increase (num){
for (let i = 1; i < 10; i++){
    let count = [];
    for ( let j = 1; j <= i; j++ ){
        count.push(i);
    }
    console.log(count.join(""));
    }
}


for ( i = 100; i > 0; i  = i - 5){
console.log(i);

}




