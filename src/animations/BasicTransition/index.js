import './style.scss'

export const BasicTransition = () => {
  const onClickContainer = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    const animatingBall = document.querySelector('.container .animating-ball')
    animatingBall.style.setProperty('background', randomColor)
  }

  return (
    <div className='container' onClick={onClickContainer}>
      <div className='animating-ball'></div>
    </div>
  )
}
