let api_base_url = "https://60d23844858b410017b2d60b.mockapi.io/orders"
async function createOrder(p){
    let response = await fetch(api_base_url, {
        //post creates things
        method: 'POST',
        //things about request that server needs to know
        headers:{
            //the kind of data I'm giving you
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: p.name,
            price: p.price,
            quantity: p.quantity,
            customerId: 15,//assume jonathon
        })
    })

    console.log(response)
    let data = await response.json()
    console.log(data)
}

//how to get my button??
let submitButton = document.querySelector("#submit-button")
submitButton.addEventListener("click", function(e){
    //what to do with default event?
    e.preventDefault()
    
    //go get this from somewhere
    let productsToBuy = [
        {
            name: "Intelligent Plastic Computer",
            price: "254",
            quantity: 6541,
            
        },
        {
            name: "Incredible Concrete Tuna",
            price: "487",
            quantity: 194,
            
        }
    ]

    productsToBuy.forEach(p => createOrder(p))
})