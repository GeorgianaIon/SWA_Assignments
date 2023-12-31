export const API_URI = "http://localhost:8080";
export const API_ROUTE = "data";
export const API_ROUTE_FORECAST = "forecast";

export const HORSENS_ROUTE = `${API_URI}/${API_ROUTE}/Horsens`;
export const AARHUS_ROUTE = `${API_URI}/${API_ROUTE}/Aarhus`;
export const COPENHAGEN_ROUTE = `${API_URI}/${API_ROUTE}/Copenhagen`;

export const HORSENS_ROUTE_FORECAST = `${API_URI}/${API_ROUTE_FORECAST}/Horsens`;
export const AARHUS_ROUTE_FORECAST = `${API_URI}/${API_ROUTE_FORECAST}/Aarhus`;
export const COPENHAGEN_ROUTE_FORECAST = `${API_URI}/${API_ROUTE_FORECAST}/Copenhagen`;

export const icons = {
  temperature: "temperature.png",
  precipitation: "precipitation.png",
  "wind speed": "wind.png",
  "cloud coverage": "cloud-coverage.png",
};

export const WEATHER_TYPES = [
  "temperature",
  "precipitation",
  "cloud coverage",
  "wind speed"
]

export const Cities = {
  Horsens: "Horsens",
  Aarhus: "Aarhus",
  Copenhagen: "Copenhagen"
}

export const MeasurementTypes = {
  temperature: "temperature",
  precipitation: "precipitation", 
  cloudCoverage: "cloud coverage",
  windSpeed: "wind speed"
}

export const weatherDetailsIcons = [
  "maxtemperature.png", 
  "mintemperature.png",
  "wind.png",
  "precipitation.png"
]

export const weatherDetails = [
  "Max temperature",
  "Min temperature",
  "Average wind speed",
  "Total precipitation"
]
