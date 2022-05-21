document.querySelector("form").addEventListener("submit", () => {
    const error = [];

    if(document.getElementById("username").value == "") {
        error.push("Please enter your username");
    }

    if(document.getElementById("password").value.length <=6){
        error.push("Password must be greater than 6 characters.");
    }

    if(error.length > 0) {
        event.preventDefault();
        document.querySelector("h3").textContent = error.join(""+ ", and " + "");
        document.querySelector("h3").style.color = "red";
        document.querySelector("h3").style.fontSize = "20px";
    }
}) 