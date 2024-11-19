import { useCallback, useState } from 'react';
import './experiment.css'

import { observable, autorun } from "mobx"
import { observer } from "mobx-react"

// const todos = observable([
//     { title: "Spoil tea", completed: true },
//     { title: "Make coffee", completed: false }
// ])

// const secondToDo = observable({
//   name: 'areeeeeen'
// })

// autorun(() => {
//     console.log(
//         "Remaining:",
//         todos
//             .filter(todo => !todo.completed)
//             .map(todo => todo.title)
//             .join(", ")
//     )
// })

// autorun(() => {
//   console.log('@@@@@@ i am just doing nothing', secondToDo.name)
// })


const Experiment = () => {
  return (
    <>
      <form>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='email' />
        <select name="pets" id="pet-select" onChange={(e) => {
          console.log('@@@@@', e.target.value)
        }}>
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        {/* <button type="submit">on submit</button> */}
        <input type="submit" value="submit button"/>
      </form>
      <button onClick={(() => {  })}>
        click me
      </button>
    </>
  )
}

export default observer(Experiment);
