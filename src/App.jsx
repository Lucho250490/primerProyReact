import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import db from "./db/quotes.json"
import QuoteBox from './components/QuoteBox'

const arrayColors = ["#00c6ab", "#c8ad8d", "#f86f6f", "#6aa3b4", "#15ab92", "#1e91ed"];

function App() {

  const getRandom = (arrayElements) =>{
    const quantityValues = arrayElements.length
    const randomIndex = Math.floor(Math.random()*quantityValues)
    return arrayElements[randomIndex];
  }

  const [quote, setQuote]=useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  return (
    <div className="App" style={{backgroundColor:color}}>
      <QuoteBox quote = {quote} newQuote = {newQuote} 
      color ={color} />
    </div>
  )
}

export default App