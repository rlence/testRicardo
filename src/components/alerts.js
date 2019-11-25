import React, { Fragment } from 'react';

function Alert(props) {

    let messaje = '';
    let type = '';
    console.log(props)
    switch (props.status) {

        case 404:
            messaje = 'No se encontro datos de transacciones para este usuario'
            type = 'warning'
            break;

        case 500:
            messaje = 'Upps tenems un probelma interno intentelo mas tarde, Gracias!'
            type = 'danger'
            break;
        case 400:
            messaje = 'Hay un problema con el navegador y no podemos procesar su solicitud, Disculpe las molestias'
            type = 'warning'

        case 401:
            messaje = 'Usted no posea permisos para ver los datos solicitados'
            type = 'warning'

        case 501:
            messaje = 'No se reconoce el metodo con el cual esta haciendo la solicitud'
            type = 'danger'

        case 505:
            messaje = 'Su solicitud no es compatible'
            type = 'danger'

        case 204:
            messaje = 'No hay datos de transacciones de esta usuario'
            type = 'success'
        default:
            break;
    }


    return (
        <Fragment>
            <div className={`alert alert-${type}`} role="alert">
                {messaje}
            </div>
        </Fragment>
    )

}

export default Alert;