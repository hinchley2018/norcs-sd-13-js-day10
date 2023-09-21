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

//use get all, to print all tacos
getAllTacos()

//use get by id to print taco 3
getTacosById(3)
//use get by id to print taco 3789
//this taco doesn't exist and throws an error
getTacosById(3789)