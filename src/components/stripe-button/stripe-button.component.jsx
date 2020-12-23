import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pulishablekey = 'pk_test_51HyJiQI7B86wTwcFdx33hHbKvldPixQyym2R8eRGKhxf8sk0AaMnpuLWncvmmUXvvX0gA0D1aW1ycqm2bsxYRwPe00UEbuCTFd';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
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