// Convert Fahrenheit to Celsius
// temperature.js
export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(1);
}

// 也可以順便加個華氏轉攝氏的四捨五入

// Convert Celsius to Fahrenheit
export function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}