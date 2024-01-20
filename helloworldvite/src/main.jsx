import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',
  {href:"www.google.com", target:'_blank'},
  'A manually created react element',
);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    ReactElement

)
