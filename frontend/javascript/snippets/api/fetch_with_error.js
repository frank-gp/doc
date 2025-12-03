var authToken = localStorage.getItem("authToken");


async function createShortenUrl(event) {
  event.preventDefault();

  const originalUrl = document.getElementById("originalUrl").value;
  const shortUrl = document.getElementById("shortUrl").value;

  try {
    const response = await fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ originalUrl, shortUrl }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Shortened URL: ${data.shortUrl}`);
      getAllUrls();
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error("Request failed", error);
    alert("Hubo un error al procesar tu solicitud.");
  }
}
