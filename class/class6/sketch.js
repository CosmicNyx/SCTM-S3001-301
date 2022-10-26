/// apply a formula
// scramble pixels
// sort by value
// smear
// inverted color
// shrink 


let img;

function preload(){
    img = loadImage("kitten.jpeg");
}

function setup(){
    createCanvas(720, 480);
    //colorMode(HSB);
    background("grey");
    img.loadPixels();
    /// exploration
    // for(let i = 0; i < img.pixels.length;i++){
    // for(let i = 0; i < img.pixels.length;i+=4){
    //         //img.pixels[i] = i % 256;
    //     // if( i % 4 === 0 ){
    //     //     img.pixels[i] = 255;
    //     // }
    //     // let val = random(255);
    //     // // img.pixels[i] = random(255);
    //     // img.pixels[i] = val;
    //     // img.pixels[i+1] = val;
    //     // img.pixels[i+2] = val;
    //     // img.pixels[i+3] = 120;
    // }
    // invertColours();
    //applyFormula();
    // smearing();
    //scatter2();
    pixelsort();
    img.updatePixels();
    image(img, 0, 0);

    noLoop();
}
// failure for now
// function scatter(){
//     for(let x = 0 ; x < 10; x++){
//         for(let y = 0; y < 10; y++){
//             let rx = random(177);
//             let ry = random(177);
//             rx = rx.toFixed(0);
//             ry = ry.toFixed(0);
//            img.pixels[(y + x*img.height) * 4] = img.pixels[(rx + ry*img.height)*4];
//            img.pixels[(y + x*img.height) * 4 + 1] = img.pixels[(rx + ry*img.height)*4 +1];
//            img.pixels[(y + x*img.height) * 4 + 2] = img.pixels[(rx + ry*img.height)*4 +2];
//            console.log(img.pixels[(x + y*img.height) * 4 + 2] );
//            console.log((y + x*img.height) * 4 + 2);
//         }
//     }
// }

function scatter2(){
    for(let i = 0; i < img.pixels.length; i+=4){
       let r = random(img.pixels.length);
       r = r.toFixed(); 
       r = r % 4; 
       // swap
       let temp = [];

       temp[0] = img.pixels[i];
       temp[1] = img.pixels[i+1];
       temp[2] = img.pixels[i+2];

       img.pixels[i] = img.pixels[r];
       img.pixels[i+1] = img.pixels[r+1];
       img.pixels[i+2] = img.pixels[r+2];

       img.pixels[r] = temp[0];
       img.pixels[r+1] = temp[1];
       img.pixels[r+2] = temp[2];
    }
}

function pixelsort(){
    let temp = [];
    // for every pixel if red value is greater than the next, swap
    for(let i = 0; i < img.pixels.length; i+=4){
        for(let c = i; c < img.pixels.length; c+=4){
            if(img.pixels[c] > img.pixels[c+4]){
                //swappixels
                temp[0] = img.pixels[c];
                temp[1] = img.pixels[c+1];
                temp[2] = img.pixels[c+2];

                img.pixels[c] = img.pixels[c+4];
                img.pixels[c+1] = img.pixels[c+5];
                img.pixels[c+2] = img.pixels[c+6];

                img.pixels[c+4] = temp[0];
                img.pixels[c+5] = temp[1];
                img.pixels[c+6] = temp[2];
            }
        }
    }


}


function invertColours(){
    for(let i = 0 ; i < img.pixels.length; i+=4){
        img.pixels[i] = 255 - img.pixels[i];
        img.pixels[i+1] = 255 - img.pixels[i+1];
        img.pixels[i+2] = 255 - img.pixels[i+2];
    }
}

function applyFormula(){
    for(let i = 0; i < img.pixels.length; i++){
        img.pixels[i] = img.pixels[i] * sin(i/20);
    }
}

function smearing(){
    for(let i = 0; i < img.pixels.length-4; i+=4){
        img.pixels[i] = (img.pixels[i] + img.pixels[i+4] )/2;
        img.pixels[i+1] = (img.pixels[i+1] + img.pixels[i+5] )/2;
        img.pixels[i+2] = (img.pixels[i+2] + img.pixels[i+6] )/2;

    }
}