








import React, { useState } from 'react';
import './checkoutpage.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkoutpage() {
  const email = localStorage.getItem('email');
  const uid = localStorage.getItem('uid');
  const cartKey = `cart_${email}_${uid}`;
  console.log(cartKey);
  const storedCart = JSON.parse(localStorage.getItem(cartKey));
  console.log(storedCart);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    fromDate: '',
    toDate: '',
    products: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [responseData, setResponseData] = useState(null);
  const [storedCartResponse, setStoredCartResponse] = useState(null);
  const [totalPriceResponse, setTotalPriceResponse] = useState(null);

  console.log('response');
  console.log(responseData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData, email, uid, storedCart };

    fetch('http://192.168.29.9:5000/insert-order-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedFormData }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Order placed successfully!', {
          position: toast.POSITION.TOP_CENTER

        });
        console.log(data);
        console.log(data);
        setResponseData(data);
        setStoredCartResponse(data.storedCart); // Set storedCart response
        setTotalPriceResponse(data.grand_total); // Set total price response
      })
      .catch((error) => {
        console.error(error);
        toast.error('An error occurred. Please try again.', {
          position: toast.POSITION.TOP_CENTER

        });
      });
  };

  const countries = [
    'Select Country',
    'Nepal',
    'India',
    'Bangladesh',
    // Add more countries as needed
  ];

  return (
    <>
      <Header />
      <div className='checkout'>
      <div className='auth-form-container11'>
        <h2>Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group11'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='address'>Address Line:</label>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Enter your address'
              value={formData.address}
              onChange={handleInputChange}
              required
              style={{ width: '300px' }}
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Enter your phone number'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='city'>City:</label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='Enter your city'
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='state'>State:</label>
            <input
              type='text'
              id='state'
              name='state'
              placeholder='Enter your state'
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='country'>Country:</label>
            <select id='country' name='country' value={formData.country} onChange={handleInputChange} required>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group11'>
            <label htmlFor='pincode'>Pincode:</label>
            <input
              type='text'
              id='pincode'
              name='pincode'
              placeholder='Enter your pincode'
              value={formData.pincode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='fromDate'>From Date:</label>
            <input
              type='date'
              id='fromDate'
              name='fromDate'
              value={formData.fromDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group11'>
            <label htmlFor='toDate'>To Date:</label>
            <input type='date' id='toDate' name='toDate' value={formData.toDate} onChange={handleInputChange} required />
          </div>
          <div className='form-group11'>
            <input type='submit' value='Submit' />
          </div>
        </form>
        </div>
        <ToastContainer  position="top-center" />
          <div class="order-summary-container">
                        {storedCartResponse && (
                  <div>
                    <h6>Order Summary</h6>
                    <table class="order-summary-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {storedCartResponse.map((item) => (
                          <tr key={item.productId}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {totalPriceResponse && (
                  <div>
                  
                    <table  class="total-price-table">
                      <thead>
                        <tr>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{totalPriceResponse}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
          </div>
        </div>   
      <Footer />
    </>
  );
}

export default Checkoutpage;






