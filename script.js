async function downloadSong() {
    const songUrl = document.getElementById("spotifyUrl").value;
    const statusText = document.getElementById("status");

    if (!songUrl.trim()) {
        statusText.innerText = "Please enter a valid Spotify URL!";
        return;
    }

    const apiKey = "YOUR_RAPIDAPI_KEY"; 
    const apiHost = "YOUR_API_HOST"; 
    const apiEndpoint = "https://YOUR_API_ENDPOINT"; 
    const options = {
        method: "GET",
        headers:{
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost
        }
    };

    try{
        const response = await fetch(`${apiEndpoint}?url=${encodeURIComponent(songUrl)}`,options);
        const data = await response.json();

        if (data.download_link) {
            window.location.href = data.download_link; 
        } else{
            statusText.innerText = "Error: Could not fetch the song!" ;
        }

    }catch (error) {
        console.error("API Error:", error);
        statusText.innerText = "API Error! Try again later.";
    }
}
