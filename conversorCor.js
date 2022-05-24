let ConvertToHex = (rgb) => {
  let hexadecimal = rgb.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

let rgbToHex = (red, green, blue) => {
  return "#" + ConvertToHex(red) + ConvertToHex(green) + ConvertToHex(blue);
}

let hexToRgb = (hex) => {
  if(hex.length == 7){
    let red = parseInt(hex[1] + hex[2], 16);
    let green = parseInt(hex[3] + hex[4], 16);
    let blue = parseInt(hex[5] + hex[6], 16);
    return rgb = `${red}, ${green}, ${blue}`

  }else {
    let red = parseInt(hex[0] + hex[1], 16);
    let green = parseInt(hex[2] + hex[3], 16);
    let blue = parseInt(hex[4] + hex[5], 16);
    return rgb = `${red}, ${green}, ${blue}`
  }
}

console.log(hexToRgb('ff0000'));

module.exports = {
  rgbToHex: rgbToHex, hexToRgb: hexToRgb
}