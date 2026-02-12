import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myname(){
    return (
<h1>Boby nayak!</h1>
  )
}
const reactElement = React.createElement(
   'a',
   {href : 'https://google.com' , target : '-blank'},
   'viste to google'
)
createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
