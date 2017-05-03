import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './containers/MainContainer'

window.onload = function(){
  ReactDOM.render(
    <MainContainer/>,
    document.getElementById('app')
  )
}
