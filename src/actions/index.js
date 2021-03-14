import{phoneAction} from './actionType'

export const phonesLoaded = payload => ({
    type:phoneAction.PHONES_LOADED,
    payload
})

export const phoneAddToCart = payload => ({
    type:phoneAction. PHONE_ADDED_TO_CART,
    payload
})

export const removePhoneToCart=payload=>({
    type:phoneAction.REMOVE_PHONE_TO_CART,
    payload
})

export const decrementPhoneToCart=payload=>({
    type:phoneAction.DECREMENT_PHONE_TO_CART,
    payload
})

