//importamos libreria para peticiones
import axios from 'axios';

//exportamos la primera funcion para pedir todos los juagores
export async function allPlayer(){

    try{
        //guardamos la url en una constante ya que en principio no cambiara
        const url = 'http://node.test.betserver.es:8081/api/players';
        const response = await axios.get(url);
        //hacemos un destructurado de los datos para obtener la data y el satus
        const { data, status } = await response;
        return { data, status }

    }catch(err){
        //obtenemos el codigo de status y la data del error
        const { status, data } = await err.response;
        return  {status, data }
    }

}

//esta funcion es para pedir detalles de un solo jugador
export async function singlePlayer(id){
   
    try{
        //guardamos la url en una constante y le pasamos el id para hacer la peticion segun el usuario que seleccione
        const url = `http://node.test.betserver.es:8081/api/players/${id}`;
        const respsonse = await axios.get(url);
        const { status, data } = await respsonse;
        //retornamos el status code y la data
        return { status, data }
   }catch(err){

        //obtenemos yt retornamos el status code y la data de la respuesta
        const {status, data } = await err.response;
        return {status, data }
   }


}