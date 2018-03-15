import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'
import {Link} from 'react-router-dom'

const CenterCenter = glamorous.div({
    display: 'Flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80vh'
})
const H1 = glamorous.h1({
    align: 'center',
    fontSize: '72px',
    margin: '0px'

})


export default () => (
    <div>
        <HeaderBar/>
        <CenterCenter>
            <H1>Thank You!! </H1>
            <br />
            <H1>For Your Purchase</H1>
            <h3>Your mug will be arriving shortly!</h3>
            <br />
            <button><Link to="/">Continue Shopping</Link></button>
        </CenterCenter>
    </div>
)
