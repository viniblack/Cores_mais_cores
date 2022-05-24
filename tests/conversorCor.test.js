const { assert, expect } = require('chai')
const conversor = require('../conversorCor')

describe("converter RGB para Hexadecimal", () => {
  it("Vermelho em Hexadecimal", () => {
    const valorEsperado = '#ff0000';
    const resultado = conversor.rgbtoHex(255, 0, 0)

    assert.equal(resultado, valorEsperado)
  })

  it("Verde em Hexadecimal", () => {
    const valorEsperado = '#00ff00';
    const resultado = conversor.rgbtoHex(0, 255, 0)

    assert.equal(resultado, valorEsperado)
  })

  it("Azul em Hexadecimal", () => {
    const valorEsperado = '#0000ff';
    const resultado = conversor.rgbtoHex(0, 0, 255)

    assert.equal(resultado, valorEsperado)
  })
})

describe("converter Hexadecimal para RGB", () => {
  it("Vermelho em RGB", () => {
    const valorEsperado = '255, 0, 0';
    const resultado = conversor.hexToRGB('#ff0000')

    assert.equal(resultado, valorEsperado)
  })

  it("Verde em RGB", () => {
    const valorEsperado = '0, 255, 0';
    const resultado = conversor.hexToRGB('#00ff00')

    assert.equal(resultado, valorEsperado)
  })

  it("Azul em RGB", () => {
    const valorEsperado = '0, 0, 255';
    const resultado = conversor.hexToRGB('#0000ff')

    assert.equal(resultado, valorEsperado)
  })

})