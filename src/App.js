import React from 'react';
import Cards from './cards';
import details from './details';
import Navbar from './navbar';
import './App.css'

export default function App() {
  const panels = details.map(item => {
    return (
      < Cards
        key={item.location}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      {panels}
    </div>
  )
}