const reporteClima = {ciudad:"Medellín", temp: { actual: 24, max: 28, min: 18 }, humedad: 60 };

let {ciudad, temp:{actual: temperaturaActual}, viento= "10Km/h"} = reporteClima;
temperaturaActual=40;

console.log(`En la ciudad ${ciudad} la temperatura es ${temperaturaActual} con vientos a ${viento}` );