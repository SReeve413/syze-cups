import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'
import bigblack from '../images/blackbig.jpg'
import blackcup from '../images/blackcup.jpg'
import goldcup from '../images/goldcup.jpg'
import silvercup from '../images/silvercup.jpg'
import whiteblue from '../images/whiteblue.jpg'
import whitepink from '../images/whitepink.jpg'
import {
    Link
} from 'react-router-dom'

const Container = glamorous.div({
    display: 'Flex',
    justifyContent: 'center',
    marginTop: '50px',
})
const Image = glamorous.img({
    position: 'relative',
    height: '250px',
    width: 'auto'
})

export default () => (
    <div>
        <HeaderBar/>
        <Container>
            <Link to="/product"><Image src={bigblack}/></Link>
            <Link to="/product"><Image src={blackcup}/></Link>
            <Link to="/product"><Image src={silvercup}/></Link>
        </Container>
        <Container>
            <Link to="/product"><Image src={whiteblue}/></Link>
            <Link to="/product"><Image src={whitepink}/></Link>
            <Link to="/product"><Image src={goldcup}/></Link>
        </Container>
    </div>
)
