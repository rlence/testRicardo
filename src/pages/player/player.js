import React, { useEffect, useState } from 'react';
import { singlePlayer } from '../../service/api';
import Alerts from '../../components/alerts.js';

function Player(props){

    const [player, setPlayer ] = useState({})
    const [ data, setData ]=useState([]);
    const [ status, setStatus] = useState(0);

    //ciclo de vida del componente
    useEffect(
        async ()=>{
            //obtenemos la url y hacemos un split para quitar el /
            const idPLayer = window.location.pathname.split('/');
            //hacemos la peticion y pasamos el id del jugador
            const dataPlayer = await singlePlayer(idPLayer[1]);
            //si la respuesta esta correcta seteamos los tados
            if(dataPlayer.status == 200 ){
                setPlayer(dataPlayer.data)
                setData(dataPlayer.data.transactions);
                
                if(dataPlayer.data.transactions.length === 0){
                    setStatus(204)
                }else{

                    setStatus(dataPlayer.status);
                }

            }else{
                //si hay problemas solo seteamos el status code para enviar mensajes de errro
                setStatus(dataPlayer.status)
            }
        },[]
    )
    
    const detailPlayer = data.map( transaction => {

        const mesText = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let year = new Date(transaction.transactionDateUTC).getFullYear();
        let dia = new Date(transaction.transactionDateUTC).getDate();
        let mes = new Date(transaction.transactionDateUTC).getMonth();
        
        const types = ['Authorize', 'Capture', 'Bet', 'Win', 'Deposit', 'Withdraw', 'Unknow']
        return (
            <tr key={ transaction.transactionId }>
                <td>{ transaction.transactionId }</td>
                <td>{ types[transaction.transactionType]}</td>
                <td>{ `${dia} de ${mesText[ mes ]} del ${year}`}</td>
                <td>{ transaction.amount == null ? 0 : transaction.amount }</td>
            </tr>
        )
    })

    console.log(status)
    return(
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Transaction Id:</th>
                        <th scope="col">Type of Transaction:</th>
                        <th scope="col">Date:</th>
                        <th scope="col">Amount:</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length != 0 ? detailPlayer : null}
                </tbody>
            </table>

            { status == 200 ? null : <Alerts status={status} /> }
        </div>
    )
}

export default Player;