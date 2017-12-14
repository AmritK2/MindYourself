function getUserInfo() {
    var uri = "https://www.codewars.com/api/v1/users/Amrit2";
    var request = new XMLHttpRequest();
    request.open("GET", uri, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                console.log(JSON.parse(request.response));
                document.write(JSON.parse(request.response).name);
                document.write(JSON.parse(request.response).honor);
                document.write(JSON.parse(request.response).clan);
                document.write(JSON.parse(request.response).leaderboardPosition);
            }
            else {
                console.log("Error");
            }
        }
    };
    request.send();
}