import { createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";

const initialState = {
    cartState: false,
    addItemState: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const CartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.addItemState.findIndex(item => (item.id === action.payload.id))

            if(itemIndex >= 0) {
                state.addItemState[itemIndex].cartQuantity += 1

                toast.success(`A ${action.payload.title} pair added to cart!`)
            }else{
                const temp = {...action.payload, cartQuantity:1}
                state.addItemState.push(temp)

                toast.success(`${action.payload.title} added to cart!`)
            }

            localStorage.setItem('cart', JSON.stringify(state.addItemState))
        },
        setRemoveItemFromCart: (state, action) => {
            const updatedCart = state.addItemState.filter(item => item.id !== action.payload.id)//will create an updated array of items with the selected items removed

            state.addItemState = updatedCart
            localStorage.setItem('cart', JSON.stringify(state.addItemState))

            toast.success(`${action.payload.title} Removed From Cart`)
        },
        setIncreaseItemQTY:(state, action) => {

            const itemIndex = state.addItemState.findIndex(item => (item.id === action.payload.id))

            if(itemIndex >= 0) {
                state.addItemState[itemIndex].cartQuantity += 1

                toast.success(`A ${action.payload.title} pair added to cart!`)
            }

            localStorage.setItem('cart', JSON.stringify(state.addItemState))
        },
        setDecreaseItemQTY:(state, action) => {
            const itemIndex = state.addItemState.findIndex(item => (item.id === action.payload.id))

            if(itemIndex >= 0 && state.addItemState[itemIndex].cartQuantity > 1) {
                state.addItemState[itemIndex].cartQuantity -= 1

                toast.success(`A ${action.payload.title} pair removed from cart!`)
            }
            else{
                const updatedCart = state.addItemState.filter(item => item.id !== action.payload.id)//will create an updated array of items with the selected items removed

                state.addItemState = updatedCart
                localStorage.setItem('cart', JSON.stringify(state.addItemState))

                toast.success(`${action.payload.title} Removed From Cart`)
            }

            localStorage.setItem('cart', JSON.stringify(state.addItemState))
        },
        setClearCartItems:(state, action) => {
            state.addItemState = []
            toast.success('Cart Cleared')
            localStorage.setItem('cart', JSON.stringify(state.addItemState))
        }
    }
})

export const {setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearCartItems} = CartSlice.actions
export default CartSlice.reducer
export const SelectCartState = (state) => state.Cart.cartState
export const selectAddItemState = (state) => state.Cart.addItemState