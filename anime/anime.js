$(document).ready(function () {
    $.get("http://localhost:9000/api/anime", function (data) {
        addAllLines(data);
    });
});

function addAllLines(anime) {
    for (var i = 0; i < anime.length; i++) {
        addLine(anime[i]);
    }
}


function addLine(anime) {
    $("tbody").append(`
        <tr>
            <td>
                <h4 class ="ui image header">
                    <img src="${anime.picture}" class ="ui mini rounded image">
                </h4>
            </td>
            <td>
                ${anime.name}
            </td>
            <td>
                ${anime.genre}
            </td>
            <td>
                ${anime.episodes}
            </td>
        </tr>`
     );
}