document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("result").innerHTML =
        "Success!<br>Name: " + name +
        "<br>Email: " + email;
};

document.getElementById("form").onreset = function() {
    document.getElementById("result").innerHTML = "";
};
