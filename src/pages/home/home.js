//usando REACT HOOKS
import React, { useEffect, useState, Fragment } from 'react';

//importando componente
import Alerts from '../../components/alerts'

//importando funciones del api
import { allPlayer } from '../../service/api.js';

function Home(props) {
    // esto representa los ciclo de vida del componente, willMount, willUpdate, didMount
    useEffect(
        async () => {

            const listPlayers = await allPlayer();

            if (listPlayers) {
                const status = listPlayers.status;
                const data = listPlayers.data;
                setState(data)
                setStatus(status)
            }
        }, []
    )

    //esta es la nueva manera de hacer state con react hooks, se puedente tantos state como uno quiera
    const [state, setState] = useState([])
    const [status, setStatus] = useState(0)
    console.log(state)

    const handleClick = (e, id) => {
        e.preventDefault();
        window.location.href = `/${id}`;
    }

    //se hace un map para el recorrido del array
    const listPlayer = state.map(player => {

        const mesText = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let year = new Date(player.registrationDateUTC).getFullYear();
        let dia = new Date(player.registrationDateUTC).getDate();
        let mes = new Date(player.registrationDateUTC).getMonth();

        return (
            <Fragment key={player.playerId} >
                <tr onClick={e => handleClick(e, player.playerId)} id={player.playerId}>
                    <td scope="row">{player.playerId}</td>
                    <td>{player.fullName}</td>
                    <td>{`${dia} de ${mesText[ mes ]} del ${year}`}</td>
                    <td>{player.userName}</td>
                </tr>
            </Fragment>
        )
    })

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID:</th>
                        <th scope="col">Name:</th>
                        <th scope="col">Date to Register:</th>
                        <th scope="col">User Name:</th>
                    </tr>
                </thead>
                <tbody style={{ cursor:'pointer' }}>
                    {state.length != 0 ? listPlayer : null}
                </tbody>
                { status == 200 ? null : <Alerts status={status} /> }
            </table>
        </div>
    )

}

export default Home;