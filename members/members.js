$(document).ready(function () {
    $.get("members.json", function (data) {
        addAllLines(data);
    });
});

function addAllLines(members) {
    for (var i = 0; i < members.length; i++) {
        addLine(members[i]);
    }
}


function addLine(member) {
    $("tbody").append("<tr><td>" + member.name + "</td><td>" + member.date + "</td><td>" + member.email + "</td></tr>");
}