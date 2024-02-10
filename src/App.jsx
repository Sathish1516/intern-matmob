import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/homepage'
import Furniturepage from './pages/furniturepage'
import Appliancespage from './pages/appliancespage'
import Kitchenpage from './pages/kitchenpage'
import Packagepage from './pages/packagepage'
import Aboutuspage from './pages/aboutuspage'
import Privacypolicypage from './pages/privacypolicypage'
import Termsandconditionpage from './pages/termsandconditionpage'
import FAQpage from './pages/faqpage'
import Loginpage from './pages/loginpage'
import Searchproductpage from './pages/searchproductpage'
import Product from './components/cartpage/Product'
import Cart from './components/cartpage/Cart'
import Checkoutpage from './pages/checkoutpage'
const App = () => {
return ( 
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route  path="/furniture"element={<Furniturepage />} />
          <Route path="/appliances" element={<Appliancespage/>}/>
          <Route path="/kitchen" element={<Kitchenpage/>}/>
          <Route path="/package" element={<Packagepage/>}/>
          <Route path="/aboutus" element={<Aboutuspage/>}/>
          <Route path="/privacypolicy" element={<Privacypolicypage/>}/>
          <Route path="/termsandcondition" element={<Termsandconditionpage/>}/>
          <Route path="/faq" element={<FAQpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/searchproduct" element={<Searchproductpage/>}/>
          <Route  path="/product/:id" element={<Product/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkoutpage />}/>
        </Routes>
      </BrowserRouter>
    )
}
export default App
