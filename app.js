function jadwal(latitude, longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=4')
    .then(response => response.json())
    .then(function(response){
        let date = new Date();
        let today = date.getDate() - 1 ;
        let data = response.data[0].timings;

        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');

        for(i in data){
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            name.innerHTML = i;
            time.innerHTML = data[i];
            tableTbody.appendChild(row);
        }
        table.appendChild(tableTbody);
       app.appendChild(table);
    });
}

function success(position){
    jadwal(position.coords.latitude, position.coords.longitude);
}

function error(){
    // jakarta jadwal('-6.200000', '106.816666');
    // default menggunakan longitude, latitude BALI / DPS 
    jadwal (' -8.409518', '115.188919');
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