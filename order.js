let api_base_url = "https://60d23844858b410017b2d60b.mockapi.io/orders"
async function createOrder(){
    let response = await fetch(api_base_url, {
        //post creates things
        method: 'POST',
        //things about request that server needs to know
        headers:{
            //the kind of data I'm giving you
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Intelligent Plastic Computer",
            price: "254",
            quantity: 6541,
            customerId: 15,//assume jonathon
        })
    })

    console.log(response)
    let data = await response.json()
    console.log(data)
}

createOrder()