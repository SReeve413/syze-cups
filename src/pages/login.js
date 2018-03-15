import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'


const CenterBox = glamorous.div({
    display: 'Flex',
    justifyContent: 'center'
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
                <br/>
                <br/>
                <br/>
                <br/>
                <Label>User Name:</Label>
                <Input type='text' placeholder='User Name:'/>
                <Label>Password</Label>
                <Input type='password' placeholder='Password'/>

                <br/>
                <br/>
                <button>Login</button>
            </Form>
        </CenterBox>
    </div>
)