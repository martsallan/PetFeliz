function getCart(){
    return window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : []
}

function addToCart(product, qtt){

    let cart = getCart()
    let p = {
        id : product.id,
        name: product.name,
        price : product.price,
        qtt : qtt
    }

    let isAlreadyInCart = false

    if(cart.length > 0){
        for( let i = 0; i < cart.length ; i++){
            if(cart[i].id === p.id){
                cart[i].qtt += p.qtt
                isAlreadyInCart =  true
                break;
            }
        }
    }
    if((!isAlreadyInCart) || cart.length <= 0){
        cart.push(p)
    }

    window.localStorage.setItem('cart',JSON.stringify(cart))
}

function subtractFromCart(productId, qtt){

    let cart = getCart()

    if(cart.length > 0){
        for( let i = 0; i < cart.length ; i++){
            if(cart[i].id === productId){
                cart[i].qtt -= qtt
                if(cart[i].qtt <= 0){
                    this.removeFromCart(productId)
                    return;
                }
                break;
            }
        }
        window.localStorage.setItem('cart',JSON.stringify(cart))
    }
}

function removeFromCart(productId){
    let cart = getCart()
    let newCart = []

    if(cart.length > 0){
        for( let i = 0; i < cart.length ; i++){
            if(cart[i].id !== productId){
                newCart.push(cart[i])
            }
        }
        window.localStorage.setItem('cart',JSON.stringify(newCart))
    }
}

function destroyCart(){
    window.localStorage.removeItem('cart')
}

export default{
    getCart,
    addToCart,
    subtractFromCart,
    removeFromCart,
    destroyCart
}