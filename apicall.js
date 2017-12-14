function getUserInfo() {
    var array = ["Amrit2", "vietanh16", "DawnPiper"];
    for (var position = 0; position < array.length; position++) {
        var uri = "https://www.codewars.com/api/v1/users/" + array[position];

        var request = new XMLHttpRequest();
        request.open("GET", uri, false); // need it to be synchronous as we don't want to go ahead without getting a callback
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status == 200) {
                    console.log(JSON.parse(request.response));
                    var userName = JSON.parse(request.response).name;
                    var userHonor = JSON.parse(request.response).honor;
                    var userClan = JSON.parse(request.response).clan;
                    var userPosition = JSON.parse(request.response).leaderboardPosition;

                    document.write("<h1>" + "User Name: " + userName + "</h1>");
                    document.write("<h2>" + "User Honor: " + userHonor + "</h2>");
                    document.write("<h2>" + "User Clan: " + userClan + "</h2>");
                    document.write("<h2>" + "Leader Board Position: " + userPosition + "</h2>");

                }
                else {
                    console.log("Error");
                }
            }
        };

        request.send();
    }

}