var xhr = new XMLHttpRequest();
if ('withCredentials' in xhr)
{
    xhr.open('GET', "https://www.codewars.com/api/v1/users/Amrit2", false);

    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
        if (xhr.readyState === 4)
        {
            if (xhr.status >= 200 && xhr.status < 400)
            var response = JSON.parse(xhr.responseText);
            alert(response);
        }

    }
xhr.send();
}
