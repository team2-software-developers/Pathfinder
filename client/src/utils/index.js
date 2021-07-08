const locationDataFetch = async () => {
    const response = await fetch("http://localhost:5000/get/location", {
        method : "POST",
        headers : {"content-type": "application/json"},
        body: JSON.stringify({
            name : phenomenonName,
            location: location
        })
    })
    const data = await response.json();
    return data;
}


const fetchInfo = async () => {
    const response = await fetch ("http://localhost:5000/get");
    const data = await response.json();
    return data;
}