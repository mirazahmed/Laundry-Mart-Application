// let cottonQuantity = document.querySelector("#cottonQtyChange");


// cottonQuantity.addEventListener("click",()=>{

//     let qtyChangeType = cottonQuantity.Value;
//     let displayCottonQty = document.querySelector("#ctnQty");
//     let cottonQty = 0;

//     if (qtyChangeType == "+"){
//         // cottonQty = 3
//         displayCottonQty.innerHTML = `3`;
//     }

//     if (qtyChangeType == "-"){
//         cottonQty --;
//         displayCottonQty.innerHTML = cottonQty;
//     }
    
// });


//Part 1 and 2

//Cotton totalcost function
let cottonQty = 1;
let ctnWashTotal = 0;
let displayCottonQty = document.querySelector("#ctnQty");

let ctnPriceLb = parseFloat(document.querySelector("#cottonPrice").innerHTML);

//value should be used with input tag only
//when span, must use innerHTML

let ctnWashDisplay = document.querySelector("#ctnWashCost");

let addCtnBut = document.querySelector("#addCottonQty");

addCtnBut.addEventListener("click",()=>{
     
    cottonQty ++;
    displayCottonQty.innerHTML = `${cottonQty}`;
    
    
    ctnWashTotal = (ctnPriceLb * cottonQty).toFixed(2);     
    ctnWashDisplay.innerHTML = `$${ctnWashTotal}`;

});


let delCtnBut = document.querySelector("#delCottonQty");
delCtnBut.addEventListener("click",()=>{
    if(cottonQty !== 0){
        cottonQty --;
    }
   
    displayCottonQty.innerHTML = `${cottonQty}`;

    ctnWashTotal = (ctnPriceLb * cottonQty).toFixed(2); 
    ctnWashDisplay.innerHTML = `$${ctnWashTotal}`;

});



//Denim totalcost function
let denimQty = 1;
let denimWashTotal = 0;
let displayDenimQty = document.querySelector("#denQty");

let denimPriceLb = parseFloat(document.querySelector("#denimPrice").innerHTML);

let denimWashDisplay = document.querySelector("#denimWashCost");

let addDenimBut = document.querySelector("#addDenimQty");

addDenimBut.addEventListener("click",()=>{

    denimQty ++;
    displayDenimQty.innerHTML = `${denimQty}`;

    denimWashTotal = (denimPriceLb * denimQty).toFixed(2); 
    denimWashDisplay.innerHTML = `$${denimWashTotal}`;

});


let delDenimBut = document.querySelector("#delDenimQty");
delDenimBut.addEventListener("click",()=>{
    if(denimQty !== 0){
        denimQty --;
    }
    
    displayDenimQty.innerHTML = `${denimQty}`;

    denimWashTotal = (denimPriceLb * denimQty).toFixed(2);
    denimWashDisplay.innerHTML = `$${denimWashTotal}`;
});




//Other totalcost function
let otherQty = 1;
let displayOtherQty = document.querySelector("#othrQty");
let otherWashTotal = 0;


let otherPriceLb = parseFloat(document.querySelector("#otherPrice").innerHTML);

let otherWashDisplay = document.querySelector("#otherWashCost");

let addOtherBut = document.querySelector("#addOtherQty");

addOtherBut.addEventListener("click",()=>{
    otherQty ++;
    displayOtherQty.innerHTML = `${otherQty}`;

    otherWashTotal = (otherPriceLb * otherQty).toFixed(2); 
    otherWashDisplay.innerHTML = `$${otherWashTotal}`;
});


let delOtherBut = document.querySelector("#delOtherQty");
delOtherBut.addEventListener("click",()=>{
    if(otherQty !== 0){
        otherQty --;
    }
    
    displayOtherQty.innerHTML = `${otherQty}`;

    otherWashTotal = (otherPriceLb * otherQty).toFixed(2); 
    otherWashDisplay.innerHTML = `$${otherWashTotal}`;
});




//Part 3


let calcBut = document.querySelector("#calculate");
let noClothesWashed = 0;


let toalWashingCost = 0;

calcBut.addEventListener("click",()=>{
    
    //Calculate number of clothes
    noClothesWashed =  cottonQty + denimQty + otherQty;
    let totalClothDisplay = document.querySelector("#lbsOfClothes");
    totalClothDisplay.innerHTML = ` ${noClothesWashed}`;

    //Calculate cost of washing all clothes
    let costWashAll = parseFloat(ctnWashTotal) + parseFloat(denimWashTotal) + parseFloat(otherWashTotal);
    let totalWashClothDisplay = document.querySelector("#costOfClothes");
    totalWashClothDisplay.innerHTML = ` ${costWashAll}`;

    //calculate HST
    let hst = parseFloat((costWashAll * 0.13).toFixed(2));
    let hstDisplay = document.querySelector("#hst");
    hstDisplay.innerHTML = ` ${hst}`;

    //calculate Final price
    toalWashingCost = parseFloat(costWashAll + hst).toFixed(2) ;
    let totalCostWithTax = document.querySelector("#finalPrice");
    totalCostWithTax.innerHTML = ` ${toalWashingCost}`;
});


//part4

let showBut = document.querySelector("#wishToDry");

showBut.addEventListener("click",()=>{

    let showElement = document.querySelector("#costForDry");
    showElement.style.display = "block";
});




let reCalcBut = document.querySelector("#recalculate");
reCalcBut.addEventListener("click",()=>{

    let inputVal = document.querySelector("#yesNo").value;
    // alert(`plz show ${inputVal}`);
   //let dryerCharge = parseFloat(1.80);
   
//   let grandTotal = 0;
//   let dryerChargeWithTax = 0;


    if(inputVal === "Y"){

        // let dryerCharge = parseFloat(1.80 * noClothesWashed);
        let clothDryingCharge = parseFloat(noClothesWashed * 1.80);
        
        let dryerChargeWithTax = parseFloat(clothDryingCharge * 1.13).toFixed(2);

      let grandTotal = parseFloat(dryerChargeWithTax + toalWashingCost).toFixed(2);

        alert(`Dryer charge would be 1.80 per lb of clothes washed. Total cost with dryer charge is ${grandTotal}`); 
    }

    else if(inputVal === "N"){
        alert(`No Dryer charge. Total cost would remain ${toalWashingCost}`); 
    }

});

   

