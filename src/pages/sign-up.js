import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'

const CenterBox = glamorous.div({
    display: 'Flex',
    justifyContent: 'center',
})
const Form = glamorous.form({
    display: 'Flex',
    flexDirection: 'column'
})
const Input = glamorous.input({
    width:'250px',
    margin: '8px',
    height: '24px'
})
const Label = glamorous.label({
margin: '0px'
})

export default () => (
    <div>
        <HeaderBar/>

        <CenterBox>
            <Form>
            <h3>Join the Club</h3>
            <Label>User Name:</Label>
                <Input type='text' placeholder='User Name'/>
            <Label>First Name:</Label>
                <Input type='text' placeholder='First Name'/>
            <Label>Last Name:</Label>
                <Input type='text' placeholder='Last Name'/>
            <Label>Email:</Label>
                <Input type='text' placeholder='Someone@mail.com'/>
            <Label>Confirm Email:</Label>
                <Input type='text' placeholder='someone@mail.com'/>
            <Label>Password</Label>
                <Input type='password' placeholder='Password'/>
            <Label>Confirm Password</Label>
                <Input type='password' placeholder='Password'/>
                <br/>
                <br/>
            <button>SIGN ME UP!</button>
            </Form>
        </CenterBox>
    </div>
)
