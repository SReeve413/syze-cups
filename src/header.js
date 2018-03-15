import React, {Component} from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'


const HeaderBar = glamorous.div({
    width: '100%',
    backgroundColor: '#E0E0E0',
    display: 'Flex',
    flexDirection: 'column',
    justifyItems: 'center'
})
const CenterBox = glamorous.div({
    display: 'Flex',
    margin: '0',
    fontSize: '65px',
    fontWeight: 'Bold',
    padding: '16px',
    paddingTop: '0px',
    alignSelf: 'center'
})
const Login = glamorous.div({
    display: 'Flex',
    fontSize: '18px',
    margin: '20px',
    marginTop: '10px',
    marginBottom: '0px',
    justifyContent: 'space-between'
})


export default () => (
    <div>
        <HeaderBar>
            <Login>
                <div>
                    <Link to="/"> Home </Link>
                </div>
                <div>
                    <Link to="/sign-up">Sign up</Link>/<Link to="/login">Login</Link>
                </div>
            </Login>
            <CenterBox>SYZE CUPS</CenterBox>
        </HeaderBar>
    </div>
)
