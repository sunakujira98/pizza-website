import { BrowserRouter as Router } from 'react-router-dom'

import Hero from './components/Hero'
import Products from './components/Products'
import Feature from './components/Feature'
import { productData, productDataTwo } from './components/Products/data'
import { GlobalStyle } from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Choose your favorite' data={productDataTwo} />
    </Router>
  )
}

export default App
