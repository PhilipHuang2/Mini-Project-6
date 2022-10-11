var searchCityForm = document.getElementById("search");
 
 function geoCodeApi (search){
    console.log("Here is the GEOcode")
    console.log(search)
    var geocodeKey = 'f4ac9ae98ce232f81e1a8c7e3fd76a5a';
    var url = 'https://api.openweathermap.org/geo/1.0/direct?q='+search+'&limit=5&appid='+geocodeKey
    console.log(url)
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data);
        var lat = data[0].lat;
        var lon = data[0].lon;
        getWeatherAPI (lat, lon)
    })
}

function getWeatherAPI(lat, lon){
    var apiKey = "aa3ac1aee36fc947283c79786b233621";
    var url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        return
        })
    }
function getValue(event){
    event.preventDefault()
    // console.log(event.target)
    if(event.target.id === "search"){
        var city = document.getElementById('city').value
        currentlySearchedCity = city
        geoCodeApi(city)
        //add it to local storage
        return
    }}
    searchCityForm.addEventListener('submit', getValue)