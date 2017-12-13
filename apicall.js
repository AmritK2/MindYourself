var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.codewars.com/api/v1/users/Amrit2", false);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e) {
    if (xhr.readyState === 4 && xhr.status === 200)
    {
        var response = JSON.parse(xhr.responseText);
        alert(response);
    }
}
