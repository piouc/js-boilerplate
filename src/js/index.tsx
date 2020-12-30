import React from 'react'
import { render } from 'react-dom'
import { App } from './app'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  if(rootElement){
    render(<App />, rootElement)
  }
})