export const fetchInfo = async (setData) => {
    const response = await fetch("http://localhost:5000/get");
    const data = await response.json();
    setData(data);
};

export const fetchDataLocation = async (inputLocation) => {
    const response = await fetch("http://localhost:5000/location", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            
            location: inputLocation
        })
    })
    const data = await response.json()
    return data
};