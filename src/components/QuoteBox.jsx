import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newQuote, color}) => {
  return (
    <div className='quoteBox' style={{color: color}}>
      <p>{quote.quote}</p>
      <h3 className='quoteBox_author'>{quote.author}</h3>
      <i className='bx bxs-quote-left quoteBox_icon'></i>
      <QuoteButton newQuote = {newQuote} 
      color = {color}/> 
    </div>
  )
}

export default QuoteBox