function initMap(points) {
    let mapElement = document.getElementById("map");
    if (!mapElement) {
        console.error("Map element not found");
        return;
    }

    let myMap = new ymaps.Map("map", {
        center: points[0],
        zoom: 7
    });


    points.forEach((point, index) => {
        let placemark = new ymaps.Placemark(point, {balloonContent: 'Точка ' + (index === 0 ? 'А' : 'Б')});
        myMap.geoObjects.add(placemark);
    });

    ymaps.route(points)
        .then(route => {
            myMap.geoObjects.add(route);
            let routeLength = route.getLength() / 1000;

            // Создание и отправка события
            const event = new CustomEvent('routeLengthCalculated', { detail: routeLength });
            document.dispatchEvent(event);
        })
}

function geocodeAddress(address) {
    let geocodeUrl = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=e1e172e2-6d5d-429d-aadb-250ef0d6c339&geocode=${address}`;
    return $.ajax({
        url: geocodeUrl,
        type: "GET",
        dataType: "json"
    }).then(data => {
        let coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ");
        return [parseFloat(coordinates[1]), parseFloat(coordinates[0])];
    }).catch(error => console.error("Ошибка при геокодировании:", error));
}

function calculateCost() {
    let pointA = $("#pointA").val();
    let pointB = $("#pointB").val();

    Promise.all([geocodeAddress(pointA), geocodeAddress(pointB)])
        .then(points => {

            // let resultHtml = `
            // <strong>Введенные адреса:</strong>
            // <br>Точка А: ${pointA}<br>
            // Точка Б: ${pointB}<br>
            // `;
            // $("#result_points").html(resultHtml);
            let test = `<div id='map' style='width: 1100px; height: 400px'></div>`
            $("#result_map").html(test)
            initMap(points);
        });
}

$("#calculateButton").click(function (event) {
    event.preventDefault();
    calculateCost();
});
