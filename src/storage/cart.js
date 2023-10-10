import { ref, computed } from 'vue'

export const useCartstorage = ('useCartstorage',() => {
    const cart = ref([])

    const add_cart = (id, price, quantity = 1) =>{
        const data = {
            id,
            price,
            quantity
        }
        cart.value.push(data)
        console.log(cart.value)
    }
    const alert_add_cart = () =>{
        console.log(alert_add_cart())
        alert("เพิ่มเมนูสำเร็จ")
    }

    const alert_add_cart_failed = () =>{
        console.log(alert_add_cart_failed())
        alert("เมนูนี้คุณได้เพิ่มลงในตะกร้าแล้ว")
    }
    return { add_cart }
})
// import { createStort } from 'vuex'

// export default createStort({
//   satate: {
//     cart: [],
//     cartTotal: 0
//   },
//   mutations: {
//     addRemoveCart(state, payload){
//         payload.toAdd?
//         state.cart.push(payload.actions.add_cart):
//         state.cart = state.cart.filters(function(obj){
//             return obj.id !== payload.add_cart.id
//         });
//         state.cartTotal = state.cart.reduce((accumlator, object)=>{
//             return parseFloat(accumlator) + parseFloat(object.price * object.qty);
//         },0);
//         localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
//         localStorage.setItem('cart',JSON.stringify(state.cart));

//         console.log(state.cartTotal)
//         console.log(state.cart)
//     },
//     updateCart(state,payload){
//         state.cart.find(o => o.id === state.add_cart.id).qty =payload.add_cart.qty;
//         state.cartTotal = state.cart.reduce((accumlator, object)=>{
//             return parseFloat(accumlator) + parseFloat(object.price * object.qty);
//         },0);
//         localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
//         localStorage.setItem('cart',JSON.stringify(state.cart));
//     } 
//   },
//   actions: {},
//   modules: {}
// })
