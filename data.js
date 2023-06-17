const nama='luthfi zufar';
let umur= 21;

const biodata= document.getElementById('biodata');

function biodatagenerate(){
    let golongan;

    if(umur>0 && umur<=5){
        golongan ='Saya Balita';
    }else if (umur > 5 && umur<=12) {
        golongan = 'Saya Anak-anak';
    }else if (umur > 12 && umur<=20) {
        golongan= 'Saya Remaja';
    }else if (umur > 20 && umur <= 40) {
        golongan = 'Saya Dewasa';
    }else if( umur > 40 && umur <= 60){
        golongan = 'Saya Tua';
    }else{
        golongan = 'Saya Sepuh';
    }
    return biodata.innerHTML = golongan;
}
biodatagenerate();
console.log(`Nama saya ${nama}, sudah ${golongan} berumur ${umur}`);
