(async function(){
    const button = document.querySelector(".button");
    const inputValue = document.querySelector(".inputValue");
    const name = document.querySelectorAll(".name");
    const desc = document.querySelectorAll(".description");
    const temp = document.querySelectorAll(".temp");
    let longitude = 2.177432;
    let latitude = 41.382894;
    const weatherAPI = MY_OPEN_WEATHER_KEY;
    mapboxgl.accessToken = MY_MAPBOX_KEY;
    function getLatLngFromAddress(address, token = MY_MAPBOX_KEY) {
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
        return fetch(`${url}${encodeURIComponent(address)}.json?access_token=${token}`)
            .then(async function(res) {
                const data = await res.json();
                console.log(data.features);
                longitude = data.features[0].center[0];
                latitude = data.features[0].center[1]
                // const center = [longitude, latitude];
                // return center;
            });
    }
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [ longitude , latitude],
    });
    inputValue.addEventListener("input", () =>{getLatLngFromAddress(inputValue.value);});
    button.addEventListener('click', function (){
        renderWeather();
        renderMap();
    })
    function renderMap() {
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 5,
            center: [ longitude , latitude],
        });
    }
    function renderWeather(){
        const url = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lon=${longitude}&lat=${latitude}&APPID=${weatherAPI}`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
            .then(data => {
                console.log(data);
                for (let i = 0; i < 5; i++) {
                    let nameValue = inputValue.value;
                    let tempValue = data.daily[i].temp.day + '°f'  ;
                    let descValue = data.daily[i].weather[0].description;
                    name[i].innerHTML = nameValue;
                    temp[i].innerHTML = tempValue;
                    desc[i].innerHTML = descValue;
                }
                renderMap();
            });
        }

})();
//figure out the key problem