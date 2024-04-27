function jadwal(latitude, longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude=-'+longitude+'&method=2&month=9&year=2024')
    .then(response => response.json())
    .then(function(response){
        let date = new Date();
        let today = date.getDate() - 1 ;

       // console.log(response.data[today]);
    });
}

function success(position){
    jadwal(position.coords.latitude, position.coords.longitude);
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