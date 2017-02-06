$(document).ready(function () {
    $.get("http://localhost:9000/api/members", function (data) {
        addAllLines(data);
    });
});

function addAllLines(members) {
    for (var i = 0; i < members.length; i++) {
        addLine(members[i]);
    }
}


function addLine(member) {
    $("tbody").append("<tr><td>" + member.name + "</td><td>" + member.date + "</td><td>" + member.email + "</td><td>" + member.nick + "</td></tr>" );
    }