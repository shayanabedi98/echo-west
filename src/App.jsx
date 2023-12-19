import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Mission from './components/Mission'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => {
        return item.id === product.id
      })
      if (isProductInCart) {
        return prevCart.map((item) => {
          return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        })
      } else {
        return [...prevCart, {...product, quantity: 1}]
      }
    })
  }

  return (
    <div className='app'>
      <Navbar cart={cart} />
      <Banner />
      <About />
      <Mission />
      <Products onAddToCart={handleAddToCart} />
      <Cart />
    </div>
  )
}

export default App
