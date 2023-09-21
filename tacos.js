//if you go to this url it shows the json
let api_base_url = "https://60d23844858b410017b2d60b.mockapi.io/tacos"

//using fetch go print the tacos by id and by all
async function getAllTacos(){
    //not returning data only console.log it
    let response = await fetch(api_base_url)
    console.log("response from api", response)

    let tacos = await response.json()
    console.log(tacos)
}

async function getTacosById(tacoId){
    //not returning data only console.log it

    //might see not found if you type your path/route incorrectly
    try {
        let response = await fetch(api_base_url + "/" + tacoId)
        console.log(response)
    } catch (error) {
        console.error("Could not find taco", tacoId)
    }
    
}

async function createTaco(){
    let response = await fetch(api_base_url,{
        //post creates things
        method: 'POST',
        //things about request that server needs to know
        headers:{
            //the kind of data I'm giving you
            'Content-Type': 'application/json'
        },
        //convert object to a string of the data so http can handle
        body: JSON.stringify({
            url: "https://tornadoughalli.com/wp-content/uploads/2019/05/INSTANT-POT-STREET-TACOS1.jpg",
            name: "Worlds best tacos"
        })
    })
    //was the taco created successfully
    console.log(response)

    //what data in the body?
    let data = await response.json()
    console.log(data)
}

//use get all, to print all tacos
getAllTacos()

//use get by id to print taco 3
getTacosById(3)
//use get by id to print taco 3789
//this taco doesn't exist and throws an error
// getTacosById(3789)

createTaco()