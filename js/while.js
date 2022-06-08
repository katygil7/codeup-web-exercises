function output(){
    let i = 1;

    while (i < 65536) {
        i = i * 2
        console.log(i);
    }
} output();
//---------------------

let  allCones = Math.floor(Math.random() * 50) + 50;
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones >= conesSold){
        allCones = allCones - conesSold;
        console.log ( conesSold + "cones sold! I have " + allCones)
    }else{
        console.log("Oops - I only have " + allCones + "left. sorry, I cant sell you " +conesSold)

    }
}while (allCones !== 0)
console.log(" all cones are SOLD")
