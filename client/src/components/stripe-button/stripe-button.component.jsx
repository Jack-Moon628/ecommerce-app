import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pulishablekey = 'pk_test_51HyJiQI7B86wTwcFdx33hHbKvldPixQyym2R8eRGKhxf8sk0AaMnpuLWncvmmUXvvX0gA0D1aW1ycqm2bsxYRwPe00UEbuCTFd';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful!');
    }).catch(error => {
      console.log('payment error: ', error);
      alert(
        'there was an issue with your payment. please sure you use the provided credit card: ', error
      );
    })
    
  }

  return (
    <StripeCheckout
      label = 'Pay Now'
      name = 'CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUs.svg'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel='Pay Now'
      token = {onToken}
      stripeKey = {pulishablekey}
    />
  );
};

export default StripeCheckoutButton;