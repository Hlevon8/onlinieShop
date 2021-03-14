const initialState = {
    phones: [], 
    cartItems: [],
    orderTotal: 0,
};

const updateCartItem = (phone, item = {},quantity) => {
    const {
        id = phone.id, 
        title = phone.title, 
        count = 0, 
        total = 0, 
    } = item;

    return {
        id, 
        title,
        count: count + quantity,
        total: total + phone.price*quantity
    }
};

const updateCartItems = (cartItems, item, index) => {
    if(item.count===0){
        return[
            ...cartItems.slice(0,index),
            ...cartItems.slice(index+1)
        ]
    }
    if(index === -1) {
        return [
            ...cartItems,
            item
        ]
    }else {
        return [
            ...cartItems.slice(0, index),
            item,
            ...cartItems.slice(index + 1),
        ]
    }
}
const updateOrder=(state, productId,quantity)=>{
    const {cartItems,phones}=state;
    const phone = state.phones.find(({id}) => id === productId);
    const itemIndex = cartItems.findIndex(({id}) => productId === id);
    const item =cartItems[itemIndex];
    const newItem = updateCartItem(phone, item,quantity);
    return{
        cartItems:updateCartItems(cartItems,newItem,itemIndex)
    }

}




const reducer = (state = initialState, action) => {
    switch(action.type) {
       case 'PHONES_LOADED': return {
            ...state,
            phones: action.payload
       };

       case 'PHONE_ADDED_TO_CART': 
         
            return {
                ...state,
               ... updateOrder(state,action.payload,1)
            };
            case 'REMOVE_PHONE_TO_CART':
            const item= state.cartItems.find((item)=>item.id===action.payload);
            return{
                ...state,
                ... updateOrder(state,action.payload,-item.count)

            }
            
            case 'DECREMENT_PHONE_TO_CART':return{
                ...state,
                ... updateOrder(state,action.payload,-1)
            }
       
       default: return state;
    }
};

export default reducer;

