import React from 'react'
import glamorous from 'glamorous'
import HeaderBar from '../header'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart} from "../actions";
//break
import bigblack from '../images/blackbig.jpg'
import blackcup from '../images/blackcup.jpg'
import goldcup from '../images/goldcup.jpg'
import silvercup from '../images/silvercup.jpg'
import whiteblue from '../images/whiteblue.jpg'
import whitepink from '../images/whitepink.jpg'


const cups =
    [
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
            picture: bigblack
        },
        {
            id: 2,
            name: 'Copco Acadia Travel Mug, 16-Ounce, Black',
            price: 8.25,
            description: [
                'Durable, BPA-free plastic construction; double walled insulation keeps drinks hot or cold',
                'Quarter-turn lid sealing design helps prevent leaks and spills',
                'Textured, non-slip sleeve; will fit standard cup holders',
                'Holds 16-ounces',
                'Microwave and dishwasher safe'
            ],
            picture: blackcup
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
            picture: silvercup
        },
        {
            id: 4,
            name: 'Copco Acadia Travel Mug, 16-Ounce, Blue',
            price: 8.25,
            description: [
                'Durable, BPA-free plastic construction; double walled insulation keeps drinks hot or cold',
                'Quarter-turn lid sealing design helps prevent leaks and spills',
                'Textured, non-slip sleeve; will fit standard cup holders',
                'Holds 16-ounces',
                'Microwave and dishwasher safe'
            ],
            picture: whiteblue
        },
        {
            id: 5,
            name: 'Copco Acadia Travel Mug, 16-Ounce, Pink',
            price: 8.25,
            description: [
                'Durable, BPA-free plastic construction; double walled insulation keeps drinks hot or cold',
                'Quarter-turn lid sealing design helps prevent leaks and spills',
                'Textured, non-slip sleeve; will fit standard cup holders',
                'Holds 16-ounces',
                'Microwave and dishwasher safe'
            ],
            picture: whitepink
        },
        {
            id: 6,
            name: 'Copco Acadia Travel Mug, 16-Ounce, Gold',
            price: 8.25,
            description: [
                'Durable, BPA-free plastic construction; double walled insulation keeps drinks hot or cold',
                'Quarter-turn lid sealing design helps prevent leaks and spills',
                'Textured, non-slip sleeve; will fit standard cup holders',
                'Holds 16-ounces',
                'Microwave and dishwasher safe'
            ],
            picture: goldcup
        },
    ]
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
        picture: bigblack
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
        picture: bigblack
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
        picture: silvercup
    }
]


const Main = glamorous.main({
    display: 'Flex',
    justifyContent: 'flex-start',
    paddingTop: '48px',
    paddingLeft: '24px',
    paddingRight: '30px'
})
const LeftDiv = glamorous.div({
    width: '75%',
    display: 'Flex',

})
const RightDiv = glamorous.div({
    width: '25%'
})
const ProductImg = glamorous.img({
    position: 'relative',
    height: '500px',
    width: 'auto',

})
const ProductDetails = glamorous.div({
    paddingLeft: '40px',
    display: 'Flex',
    flexDirection:'column',
})
const SecLine = glamorous.div({
    display: 'Flex'
})
const Button = glamorous.button({
    marginLeft: '180px',
    marginTop: '1em',
    marginBottom: '1em',
    height: '24px',
})
const H2 = glamorous.h2({
    marginLeft: '24px'

})
const DivTest = glamorous.div({
    alignSelf: 'center'
})
const Button2 = glamorous.button({
    height: '50px',
})


const TheCart = ({ products, onAddToCart }) => (
    <div>
        <HeaderBar/>
        <Main>
            <LeftDiv>
                <ProductImg src={cups[0].picture}/>
                <ProductDetails>
                    <h2>{cups[0].name}</h2>
                    <SecLine>
                        <h3>${cups[0].price}</h3><Button>Add to Cart</Button>
                    </SecLine>
                    <ul>
                        {cups[0].description.map((des) => (<li>{des}</li>))}
                    </ul>
                    <br/>
                    <DivTest>
                    <Link to="/"><Button2 onClick={e=>onAddToCart(products, 1)}>Continue Shopping</Button2></Link>
                    </DivTest>
                </ProductDetails>

            </LeftDiv>
            <RightDiv>
                <H2>Your Cart:</H2>
                <ul>
                    {cart.map((item) => (<li>{item.name} <br/> ${item.price}
                    </li>))}
                </ul>
                <H2>
                    Total $
                    {cart.map(item => (
                        [parseFloat(item.price)]
                    )).reduce((prev, curr) => (parseFloat(prev) + parseFloat(curr)), 0)
                    }
                </H2>

                <Link to="/cart">
                    <button>Checkout</button>
                </Link>



            </RightDiv>
        </Main>

    </div>
);

const mapStateToProps = ({ products = [] }) => ({
    products
});



const mapDispatchToProps = dispatch => ({
    onAddToCart(product = {}, quantity = 1) {
        return dispatch(addToCart(product, quantity))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(TheCart)