import React from 'react'

const App = () => {

  const [title, settitle] = React.useState("hello world")

  const getInfo = () => {
    settitle("hello world I am clicked") 
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline ml-9 mt-7" >{title}</h1>
      <button onClick={getInfo} className='bg-red-800 mt-4 ml-9 px-5 py-2 rounded' >click me</button>
    </div>
  )
}

export default App
