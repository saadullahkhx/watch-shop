import React from 'react';
import BillingDetails from '../../components/billing-details/billing-details.component';

import { Checkout } from './checkout.styles';

const CheckoutPage = () => {
  return (
    <Checkout>
      <BillingDetails />
    </Checkout>
  );
};

export default CheckoutPage;
