

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
        colorsKeys.map((key) => { 
          return renderColorVariants(key)
        })
      }
    </div>
  )
}