$(document).ready(function () {
    $(".button").on("click", function () {
        var anime = {
            name: $("#names").val(),
            episodes: $("#ep").val(),
            genre: $("#genre").val()
        }
        console.log(anime);

        $.ajax({
            data: JSON.stringify(anime),
            contentType: 'application/json',
            type: 'POST',
            url: "http://localhost:9000/api/anime",
            success: function (data) {
                console.log("pavyko");
                window.location.href = "http://localhost/animetrends/";
            }
        });
    });
});