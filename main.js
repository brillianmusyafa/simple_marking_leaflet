var map = L.map('map').setView([-4.5094085922347, 104.51042890549], 9);
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


$.get('data_kec.json', function (data) {
    var mark = data['data'];
    mark.forEach(function (dt) {
        if (dt.hasOwnProperty('text')) {
            var text = 'Link : <a target="_blank" href="http://' + dt.text + '">' + dt.text + '</a>';
        } else {
            var text = ''
        }
        var marker = L.marker([dt.lat, dt.lng]).addTo(map)
            .bindPopup('Kecamatan : ' + dt.kecamatan + '</br>' + text);
    });

})