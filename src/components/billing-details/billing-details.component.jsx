import React from 'react';
import { BillingDetailsContainer } from './billing-details.styles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutDetails from '../../components/checkout-details/checkout-details.component';
import { placeOrderStart } from '../../redux/billing-details/billing-details.actions';
import PaymentMethods from '../../components/payment-methods/payment-methods.component';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BillingDetails = (props) => {
  const [state, setState] = React.useState({
    fullName: '',
    instagramOrFacebook: '',
    contactNumber: '',
    address: '',
    optionalAddress: '',
    city: '',
    email: '',
    orderNotes: '',
    items: props.cartItems,
    totalAmount: props.cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0),
  });

  const {
    fullName,
    instagramOrFacebook,
    contactNumber,
    address,
    optionalAddress,
    city,
    email,
    orderNotes,
  } = state;

  const handleSubmit = (e) => {
    const { placeOrderStart } = props;
    e.preventDefault();
    placeOrderStart({ ...state });
    setState({
      fullName: '',
      instagramOrFacebook: '',
      contactNumber: '',
      address: '',
      optionalAddress: '',
      city: '',
      email: '',
      orderNotes: '',
      items: props.cartItems,
      totalAmount: props.cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <BillingDetailsContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <h4>BILLING DETAILS</h4>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Full Name*</Form.Label>
            <Form.Control
              name='fullName'
              type='text'
              onChange={(event) => handleChange(event)}
              placeholder='Enter your full name'
              value={fullName}
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicSocialIds'>
            <Form.Label>Instagram/Facebook ID (optional)</Form.Label>
            <Form.Control
              name='instagramOrFacebook'
              type='text'
              placeholder=''
              onChange={(event) => handleChange(event)}
              value={instagramOrFacebook}
            />
          </Form.Group>
          <Form.Group controlId='formBasicContact'>
            <Form.Label>Contact Number*</Form.Label>
            <Form.Control
              name='contactNumber'
              type='number'
              placeholder=''
              required
              value={contactNumber}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicAddress'>
            <Form.Label>Address*</Form.Label>
            <Form.Control
              name='address'
              type='text'
              placeholder='House number and street name'
              value={address}
              onChange={(event) => handleChange(event)}
              minLength='6'
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicAddress'>
            <Form.Label>Street (Optional)</Form.Label>
            <Form.Control
              name='optionalAddress'
              type='text'
              placeholder='Apartment, suite, unit etc (optional)'
              value={optionalAddress}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicCity'>
            <Form.Label>Town / City*</Form.Label>
            <Form.Control
              name='city'
              type='text'
              placeholder=''
              value={city}
              required
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email*</Form.Label>
            <Form.Control
              name='email'
              type='email'
              placeholder=''
              value={email}
              required
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Order notes (optional):</Form.Label>
            <Form.Control
              name='orderNotes'
              as='textarea'
              rows={6}
              value={orderNotes}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
        </div>
        <div className='checkout-and-payments'>
          <CheckoutDetails />
          <PaymentMethods />
          <Form.Group
            controlId='formBasicCheckbox'
            className='terms-and-conditions'
          >
            <Form.Check name='agreeToTerms' type='checkbox' required />
            <Form.Label>
              I have read and agree to the website{' '}
              <Link to='/terms'>terms and conditions.</Link>*
            </Form.Label>
          </Form.Group>
          <Button variant='primary' type='submit'>
            PLACE ORDER
          </Button>
        </div>
      </Form>
    </BillingDetailsContainer>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  placeOrderStart: (orderDetails) => dispatch(placeOrderStart(orderDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails);
