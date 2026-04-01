

import {colors} from "./colors";


export const ColorSystem = () => { 

  const renderColorBox = (brightness, hex) => { 
    if (!hex || hex[0] !== '#') return null
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ height: 100, width: 100, backgroundColor: hex }}></div>
        <h6>{brightness}</h6>
      </div>
    )
  }

  const renderColorVariants = (title) => {     
    if (title === 'white' || title === 'black') return null

    const colorsMap = colors[title]
    const colorBrightnesses = Object.keys(colorsMap)
    return (
      <>
        <h1>{title}</h1>
        <div style={{display: 'flex', gap: 40, flexWrap: 'wrap'}}>
        {
          colorBrightnesses.map((brightness) => { 
            return renderColorBox(brightness, colorsMap[brightness].value)
          })
          }
          </div>
      </>
    )

  }

  const colorsKeys = Object.keys(colors)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {
        <div style={{display: 'flex', gap: 40, flexWrap: 'wrap'}}>
          {
            COLOR.map((value, i) => { 
              return renderColorBox(i, value)
            })
          }
        </div>
      }
      {
        colorsKeys.map((key) => { 
          return renderColorVariants(key)
        })
      }
    </div>
  )
}

const COLOR = ["#000000ff","#050400ff","#090700ff","#0e0b00ff","#110e00ff","#141100ff","#171300ff","#1a1600ff","#1c1800ff","#1e1a00ff","#201c00ff","#221e00ff","#252000ff","#272200ff","#292400ff","#2c2600ff","#2e2800ff","#302a00ff","#332c00ff","#352e00ff","#373100ff","#3a3300ff","#3c3500ff","#3f3700ff","#413900ff","#443c00ff","#463e00ff","#494000ff","#4b4200ff","#4e4500ff","#504700ff","#534900ff","#554c00ff","#584e00ff","#5b5000ff","#5d5300ff","#605500ff","#635800ff","#655a00ff","#685c00ff","#6b5f00ff","#6d6100ff","#706400ff","#736600ff","#756900ff","#786b00ff","#7b6e00ff","#7e7000ff","#807300ff","#837500ff","#867800ff","#897a00ff","#8c7d00ff","#8f7f00ff","#918200ff","#948400ff","#978700ff","#9a8a00ff","#9d8c00ff","#a08f00ff","#a39100ff","#a69400ff","#a89700ff","#ab9900ff","#ae9c00ff","#b19f00ff","#b4a100ff","#b7a400ff","#baa705ff","#bda90cff","#c0ac11ff","#c3af16ff","#c5b21aff","#c8b41dff","#cbb721ff","#ceba24ff","#d1bd28ff","#d4bf2bff","#d7c22eff","#dac531ff","#ddc834ff","#dfca36ff","#e2cd39ff","#e5d03cff","#e8d33fff","#ebd641ff","#eed944ff","#f1db47ff","#f4de49ff","#f7e14cff","#fae44fff","#fde751ff","#ffea5eff","#ffed7bff","#ffef94ff","#fff2abff","#fff4c1ff","#fff7d6ff","#fff9eaff","#fffbffff","#ffffffff"]
