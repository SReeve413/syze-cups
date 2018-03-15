import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'
import {Link} from 'react-router-dom'


const CenterBox = glamorous.div({
    display: 'Flex',
    justifyContent: 'center',
})
const Form = glamorous.form({
    display: 'Flex',
})
const Input = glamorous.input({
    width: '250px',
    margin: '8px',
    height: '24px'
})
const Label = glamorous.label({
    margin: '0px'
})
const Column = glamorous.div({
    display: 'Flex',
    flexDirection: 'column',
    marginTop: '48px'
})
const Button = glamorous.button({
    marginTop: '30px',
    width: '80%',
    height: '24px',
    alignSelf: 'center'
})

export default () => (
    <div>
        <HeaderBar/>

        <CenterBox>
            <Form>
                <Column>
                    <Label>First Name:</Label>
                    <Input type='text' placeholder='First Name'/>
                    <Label>Last Name:</Label>
                    <Input type='text' placeholder='Last Name'/>
                    <Label>Shipping Address Line 1:</Label>
                    <Input type='text' placeholder='12345s main st.'/>
                    <Label>Shipping Address Line 2:</Label>
                    <Input type='text' placeholder='apt 901'/>
                    <Label>City:</Label>
                    <Input type='text' placeholder='City'/>
                    <Label>State:</Label>
                    <Input type='text' placeholder='State'/>
                    <Label>Zip Code:</Label>
                    <Input type='text' placeholder='Zip Code'/>
                    <Label>Country</Label>
                    <Input type='text' placeholder='Country'/>
                </Column>
                <Column>
                    <Label>Nam as it Appears on Card:</Label>
                    <Input type='text' placeholder='First Name Last Name'/>
                    <Label>Credit Card Number:</Label>
                    <Input type='text' placeholder='#############'/>
                    <Label>Payment Type:</Label>
                    <Input type='text' placeholder='Visa'/>
                    <Label>Experation date:</Label>
                    <Input type='text' placeholder='month/year'/>
                    <Label>Email:</Label>
                    <Input type='text' placeholder='username@mail.com'/>
                    <Label>Phone Number:</Label>
                    <Input type='text' placeholder='(801) 555 - 1234'/>
                    <Label>Promo Code:</Label>
                    <Input type='text' placeholder='Promo Code'/>
                    <Button> <Link to="/thank-you">Purchase</Link></Button>
                </Column>
            </Form>
        </CenterBox>
    </div>
)