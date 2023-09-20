import { useState } from 'react'
import styles from './toggleButtons.css'

export const ToggleButtons = () => {

  const BTN_LABELS = ['First', 'Second', 'Third']

  const [activeBtn, setActiveBtn] = useState(BTN_LABELS[0])

  const BTN_VS_CONTENT = {
    [BTN_LABELS[0]]: 'this is first button',
    [BTN_LABELS[1]]: 'this is second button',
    [BTN_LABELS[2]]: 'this is third button',
  }

  const renderContent = () => {
    return (
      <h1 className='text-xl'>{BTN_VS_CONTENT[activeBtn]}</h1>
    )
  }

  const renderButtons = () => {
    const activeBtnClasses = 'border-double border-[1px] border-white scale-x-[1.07]'

    return (
      <div className='flex w-full'>
        {
          BTN_LABELS.map((label) => {
            return (
              <button
                className={`flex-1 bg-slate-500 rounded-md ${activeBtn === label ? activeBtnClasses : ''}`}
                key={label}
                onClick={() => setActiveBtn(label)}
              >
                {label}
              </button>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center h-[20rem] justify-around bg-[#00ff00] p-4'>
      {renderButtons()}
      {renderContent()}
    </div>
  )
}
