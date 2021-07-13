import React, {useState} from 'react'

const BoxGenerator = props => {
  const [color, setColor] = useState({color})

  const handleChange = e => {
    setColor({
      ...color,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const box = [color.color]

    setColor({
      color: ""
    })
  }

  return(
    <>
    <form>
      <label htmlFor="color">
        Color:
        <input type="text" name="color" value={color.color} onChange= {handleChange}/>
      </label>
      <button type="submit">Add</button>
    </form>
    </>
  )
}








export default BoxGenerator