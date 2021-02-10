import React from 'react'
import { Link } from 'react-router-dom';
import { TermsAndConditions } from './terms-and-conditions.styles';

const TermsAndConditionsPage = () => (
    <TermsAndConditions>
        <h2 style={{textAlign: 'center'}}><b>TERMS AND CONDITIONS</b></h2>

        <div className='section'>
            <h4>Introduction</h4>
            <p>The content of the website is for your general information / use only.</p>
            <p>This website allows you to browse, select and purchase watches for both mens and womens.</p>
            <p>The content of this website is subject to change without any notice.</p>
            <p>Please read terms and conditions listed below as they may contain important information regarding this website.</p>
        </div>

        <div className='section'>
            <h4>Customer Protection</h4>
            <p>Watch It collects personal information by legal and fair means only.</p>
            <p>When we directly collect personal information from you in writing, we will specify how we intend to use the information provide contact information, and ask for your consent. When we collect personal information by other means, we will announce on our website how we intend to use it along with contact details.</p>
            <p>Whether or not you provide personal information to Watch It is up to you. Please note, however, that there are some services we may be unable to provide without your personal information.</p>
            <p>When you provide personal information to Watch It, you agree to the terms and conditions described in this section concerning this <Link to='/privacy'>privacy policy</Link>. If you do not agree to the terms and conditions herein, please note that some services we offer (including responses to your inquiries) may not be available to you.</p>
        </div>

        <div className='section'>
            <h4>Shipping Time</h4>
            <p>Orders in Pakistan will be delivered within 3-5 working days.</p>
        </div>

        <div className='section'>
            <h4>Copyrights and Trademarks</h4>
            <p>All intellectual property rights, whether registered or unregistered, on the website, information content on the website and all the website design, including, but not limited to text, graphics, software, and their selection and arrangement, and all software compilations, underlying source code, and software shall remain our property. The entire contents of the website also are protected by copyright as a collective work under Pakistani copyright laws and international conventions. All rights are reserved.</p>
        </div>
    </TermsAndConditions>
)

export default TermsAndConditionsPage;