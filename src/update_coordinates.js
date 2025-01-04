nst fs = require('fs');
const convertUTMToLatLon = require('./convert_utm_to_latlon');

const filePath = './fiscalizacao_eletronica_2024.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

data.forEach(entry => {
  const [easting, northing] = entry.GEOMETRIA.match(/\d+\.\d+/g).map(Number);
  const { latitude, longitude } = convertUTMToLatLon(easting, northing, 23, 'K'); // Ajuste a zona conforme necessário
  entry.LATITUDE = latitude;
  entry.LONGITUDE = longitude;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
