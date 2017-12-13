var xhr = new XMLHttpRequest();
xhr.onreadystatechange = processRequest();
function processRequest() {
    if (xhr.readyState === 4)
    {
        if (xhr.status >= 200 && xhr.status < 400)
        {
            var response = JSON.parse(xhr.responseText);
            //document.write(response);
            alert(response);
        }
        else
            document.write("Error!")
    }

}
xhr.open("GET", "https://www.codewars.com/api/v1/users/Amrit2");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send({'request': 'authentication token'});

/*var xhr = new XMLHttpRequest();
if ('withCredentials' in xhr)
{
    xhr.open('GET', "https://www.codewars.com/api/v1/users/Amrit2", true);

    xhr.onreadystatechange = processRequest;

    function processRequest() {
        if (xhr.readyState === 4)
        {
            if (xhr.status >= 200 && xhr.status < 400)
            {
                var response = JSON.parse(xhr.responseText);
                document.write(response);
                //alert(response);
            }
            else
                document.write("Error!")
        }

    }
xhr.send();
}*/
/*
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr)
    {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest !== "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        document.write("Error!")
    }
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url = 'https://www.codewars.com/api/v1/users/Amrit2';
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    xhr.send();
}
*/