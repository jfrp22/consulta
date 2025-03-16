// URL del endpoint en el ESP8266 (reemplaza con la IP de tu ESP8266)
const url = 'http://192.168.1.107/get-data';

// Función para obtener y mostrar los datos
async function fetchData() {
  try {
    const response = await fetch(url); // Hace la solicitud HTTP
    const data = await response.json(); // Convierte la respuesta a JSON
    document.getElementById('data').innerText = `Temperatura: ${data.temperatura}°C, Humedad: ${data.humedad}%`;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    document.getElementById('data').innerText = 'Error al cargar los datos';
  }
}

// Llama a la función cada 5 segundos para actualizar los datos
setInterval(fetchData, 5000);
fetchData(); // Llama a la función al cargar la página
