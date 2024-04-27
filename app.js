function success(position){
    console.log(position);
}

function error(){
    alert('Posisi tidak dapat diakses lagi');
}

function userLocation(){
    if(!navigator.geolocation){
    alert('Lokasi tidak di dukung didalam browser kamu, silahkan gunakan browser lain');
}else{
    navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Jadwal Sholat';

    app.appendChild(h3);

    userLocation();
}

index();