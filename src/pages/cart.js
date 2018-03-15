import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'
import {Link} from 'react-router-dom'
//
import bigblack from '../images/blackbig.jpg'
import blackcup from '../images/blackcup.jpg'
import goldcup from '../images/goldcup.jpg'
import silvercup from '../images/silvercup.jpg'
import whiteblue from '../images/whiteblue.jpg'
import whitepink from '../images/whitepink.jpg'
import login from "./login";

const cart = [
    {
        id: 1,
        name: 'Hydro Flask Double Wall Vacuum Insulated Stainless Steel Water Bottle / Travel Coffee Mug, Wide Mouth with BPA Free Hydro Flip Cap',
        price: 24.95,
        description: [
            'Large (Wide Mouth) opening, Double Wall Vacuum Insulated',
            'Keeps Hot up to 6 Hours, Keeps Cold up to 24 Hours',
            'BPA-Free, 18/8 Stainless Steel',
            'Signature Powder Coat Finish',
            'Same size as coffee shop sizes for less paper cup waste',
        ],
        picture: bigblack,
        quantity: 1
    },
    {
        id: 1,
        name: 'Hydro Flask Double Wall Vacuum Insulated Stainless Steel Water Bottle / Travel Coffee Mug, Wide Mouth with BPA Free Hydro Flip Cap',
        price: 24.95,
        description: [
            'Large (Wide Mouth) opening, Double Wall Vacuum Insulated',
            'Keeps Hot up to 6 Hours, Keeps Cold up to 24 Hours',
            'BPA-Free, 18/8 Stainless Steel',
            'Signature Powder Coat Finish',
            'Same size as coffee shop sizes for less paper cup waste',
        ],
        picture: bigblack,
        quantity: 1
    },
    {
        id: 3,
        name: 'Copco Acadia Travel Mug, 16-Ounce, Silver',
        price: 8.25,
        description: [
            'Durable, BPA-free plastic construction; double walled insulation keeps drinks hot or cold',
            'Quarter-turn lid sealing design helps prevent leaks and spills',
            'Textured, non-slip sleeve; will fit standard cup holders',
            'Holds 16-ounces',
            'Microwave and dishwasher safe'
        ],
        picture: silvercup,
        quantity: 1
    }
]
const ProductBox = glamorous.div({
    display: 'flex',
    justifyContent:'center'
})

const LargeBox = glamorous.div({
    width: '50%',
    margin: '3px',
    display:'Flex',
    alignItems: 'center',
})
const SmallBox = glamorous.div({
    width: '10%',
    margin: '3px',
    display:'Flex',
    alignItems: 'center',
    justifyContent:'center'

})
const MedBox = glamorous.div({
    width: '30%',
    margin: '3px',
    display:'Flex',
    alignItems: 'center',
    justifyContent:'center'

})
const ProductImg = glamorous.img({
    position: 'center',
    width: '50%',
    height: 'auto',

})


export default () => (
    <div>
        <HeaderBar/>
        <ProductBox>
            <SmallBox/>
            <LargeBox><h2>Products</h2></LargeBox>
            <SmallBox><h2>Price</h2></SmallBox>
            <SmallBox><h2>Quantity</h2></SmallBox>
            <SmallBox><h2>Total Price</h2></SmallBox>
        </ProductBox>

        {cart.map((item) =>
            <ProductBox>
                <SmallBox><ProductImg src={item.picture}/></SmallBox>
                <LargeBox>{item.name}</LargeBox>
                <SmallBox>${item.price}</SmallBox>
                <SmallBox>x{item.quantity}</SmallBox>
                <SmallBox>${item.quantity * item.price}</SmallBox>
            </ProductBox>)}
        <ProductBox>
            <SmallBox/>
            <LargeBox><Link to="/"><button>Continue Shopping</button></Link></LargeBox>
            <MedBox><Link to="/payment"><button>Pay<br/>${cart.map(item => (
                [parseFloat(item.price)]
            )).reduce((prev, curr) => (parseFloat(prev) + parseFloat(curr)), 0)
            }
            </button></Link></MedBox>
        </ProductBox>
    </div>
)
