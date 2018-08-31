//Created varaibles and added api link and key code!!
//Limit is 10 gif. 

var person = $(this).attr("data-person");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=SmZVoG9Xompp1YRC4TYmnHnzIP0abLRR&limit=10";


//The next step is creating AJAX in order to get a response from button

$.ajax({
    url: queryURL,
    method: "GET"
})

//Data comes back from API
.then(function(response){

var results=response.data;
}

for (var i=0; i<results.length; i++) {

    var gifDiv=$("<div>");

    var p=$("<p>").text("Rating: " + results[i].rating);

    var personImage=$("<img>");

    personImage.attr("src",results[i].images.fixed_heigt.url);

    gifDiv.append(p);
    gifDiv.append(personImage);

    $("#gifs-appear-here").prepend(gifDiv);
     }
    } 

$(document).on("click", ".person-gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

