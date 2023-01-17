// getting the cities
var city;
var cities;

// function to load cities
function loadRecent() {
    var lastSearch = localStorage.getItem("recent");
    if (lastSearch) {
        city = lastSearch
        search();
    }else {
        city = "London";
        search();
    
    }
function saveToLocalStorage() {
    localStorage.setItem("recent", city);
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));

}

function search()  {
    $("#city").html(moment().format("ddd, MMMM Do YYYY"));
    var apiKey ="0cfc185378dcffb452e30f92458364f4";
    var city =$(this).attr("data-name");
    var apiIdURL = '&appid';
    

    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat + "&lon=" + lon + '&appid=' + apiKey + '&units=imperial';
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    renderWeather(city, response);
});
}      
var cityName = city;
var unitsURL = '&units=imperial';
var apiIdUrl = '&appid';
var apiKey = "0cfc185378dcffb452e30f92458364f4";
var URLWeather = 'https://http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid' + apiKey + '&units=imperial'; 
+ city + apiKey + '&units=imperial';
function displayForecast() {
    var city = $(this).attr("data-name");
    var queryURL = 'https://http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid' + apiKey + '&units=imperial'; 
+ city + apiKey + '&units=imperial';



$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (data) {
    $('#today').empty();
    $('#today').append('<h2>').text(data.name + ' ' + getFormatedData()).addclass('card-title');
   // renderForecast(city, response);

   var iconURL = 'https://openweathermap.org/img/wn' +  data.weather[0].icon + '@2x.png';

   var iconEl = $('<img>').attr('src, iconURL').css('display', 'inline');
   iconEl.attr('alt',data.weather[0].description);
   $('#today').append(iconEl);

   $('#today').append($('<p>').text('Temperature: ' + data.main.temp + 'F').addClass('card-text'));
   $('#today').append($('<p>').text('Humidity: ' + data.main.temp + '%').addClass('card-text'));
   $('#today').append($('<p>').text('Wind-speed: ' + data.main.temp + 'MPH').addClass('card-text'));
   
   displayForecast()
});
}

//get five day forecast

$.ajax ({
    url: URLForecast,
    method: "GET",
})
.then(function (response) {
    var dayOne = moment(response.list[0].dt_text).format("ddd, MMM, D");
    $("#date1").html("<h4>" + dayOne + "<h4>");
    $("#temp1").text("Temp: "  + response.list[0].main.temp + " F");
    $("#weatherIcon1").html("<img src='https://openweathermap.org/img/w/" +
    response.list[0].weather[0].icon + ".png' alt='weather Icon'>");
    $("humitity1").text("Humidity: " + response.list[0].main.humidity + " %");

    var dayTwo = moment(response.list[8].dt_text).format("ddd, MMM, D");
    $("#date2").html("<h4>" + dayTwo + "<h4>");
    $("#temp2").text("Temp: "  + response.list[8].main.temp + " F");
    $("#weatherIcon2").html("<img src='https://openweathermap.org/img/w/" +
    response.list[8].weather[8].icon + ".png' alt='weather Icon'>");
    $("humitity2").text("Humidity: " + response.list[8].main.humidity + " %");

    var dayThree = moment(response.list[16].dt_text).format("ddd, MMM, D");
    $("#date3").html("<h4>" + dayThree + "<h4>");
    $("#temp3").text("Temp: "  + response.list[16].main.temp + " F");
    $("#weatherIcon3").html("<img src='https://openweathermap.org/img/w/" +
    response.list[16].weather[16].icon + ".png' alt='weather Icon'>");
    $("humitity3").text("Humidity: " + response.list[16].main.humidity + " %");

    var dayFour = moment(response.list[24].dt_text).format("ddd, MMM, D");
    $("#date$").html("<h4>" + dayFour + "<h4>");
    $("#temp4").text("Temp: "  + response.list[24].main.temp + " F");
    $("#weatherIcon4").html("<img src='https://openweathermap.org/img/w/" +
    response.list[24].weather[24].icon + ".png' alt='weather Icon'>");
    $("humitity4").text("Humidity: " + response.list[24].main.humidity + " %");

    var dayFive = moment(response.list[32].dt_text).format("ddd, MMM, D");
    $("#date5").html("<h4>" + dayFive + "<h4>");
    $("#temp5").text("Temp: "  + response.list[32].main.temp + " F");
    $("#weatherIcon5").html("<img src='https://openweathermap.org/img/w/" +
    response.list[32].weather[32].icon + ".png' alt='weather Icon'>");
    $("humitity5").text("Humidity: " + response.list[32].main.humidity + " %");
})


    

$('#btn-search').click(function () {
    var city = $("#input-city").val()
    getCurrent(city);
});

}
