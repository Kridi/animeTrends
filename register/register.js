$(document).ready(function () {
    $(".button").on("click", function () {
        var member = {
            name: $("#name").val(),
            email: $("#email").val(),
            nick: $("#nick").val(),
            password: $("#password").val()
        }

        var retype = $("#repassword").val();
        if (retype === member.password) {
            console.log(member);

            $.ajax({
                data: JSON.stringify(member),
                contentType: 'application/json',
                type: 'POST',
                url: "http://localhost:9000/api/members",
                success: function(data) {
                    console.log("pavyko");
                    window.location.href = "http://localhost/animetrends/";
                }
            });
        } else {
            alert("Password does not match");
        }

        
    });
});
