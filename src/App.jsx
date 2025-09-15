import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import './App.css'
import { Layout } from './Components/Layout'
import HomePage from './Components/page/HomePage'

function App({data}) {

  return (
    <>
      <Layout>
        <HomePage data={data}/>
      </Layout>
    </>
  )
}

export default App
