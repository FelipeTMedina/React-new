
import React from "react"
import axios from "axios"


const [cep,setCep] = userStarte(null)

console.log(cep,"cep")

async function handleAddress(){
    try {



    }
}

export default function  GetCep(){

    async function handleAddress(){
        try {
            
            const response = await axios.get()
            console.log (response.data)
        }
            catch(erro){
                console.log(erro)
            }
    
        }
    }



        return(
            <div className="flex flex-col item-center justify-center">

                <h1 className="text-4x1 ">Busque seu cep aqui</h1>

            <input type="number" name="" id="" onChange={(e)  => setCep(e.target.value) } />

            <button  type="button">Buscar</button>

            </div>


        )

}