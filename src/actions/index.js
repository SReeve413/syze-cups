export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

/* Action creator for add to cart
* @param {Object} product
* @param {Number} quantity
*
* @returns {{type: 'ADD_TO_CART' , product: {}, quantity: number}}
 */

export const addToCart = (product = {}, quantity =1) => ({
    type: ADD_TO_CART,
    product,
    quantity
})


/**
 * Action Creator for DELETE_FROM_CART
 *
 * @param {String} id
 * @returns {{type: string, id: *}}
 */

export const deleteFromCart = id => ({
    type: DELETE_FROM_CART,
    id
})