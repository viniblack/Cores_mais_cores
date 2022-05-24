let ConvertToHex = (rgb) => {
  let hexadecimal = rgb.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

let rgbtoHex = (red, green, blue) => {
  return "#" + ConvertToHex(red) + ConvertToHex(green) + ConvertToHex(blue);
}

let hexToRGB = (hex) => {
  let red = parseInt(hex[1] + hex[2], 16);
  let green = parseInt(hex[3] + hex[4], 16);
  let blue = parseInt(hex[5] + hex[6], 16);
  return rgb = `${red}, ${green}, ${blue}`
}

module.exports = {
  rgbtoHex, hexToRGB
}