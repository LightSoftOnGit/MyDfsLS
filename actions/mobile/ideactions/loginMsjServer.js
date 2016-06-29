function obtenerMensaje(codigo) {
    codigo = +codigo;
    switch (codigo) {
    case 201:
        return "Se presento un error al ejecutar la operación";
    case 202:
        return "Su usuario ha sido bloqueado, póngase en contacto con el administrador del Sitio de Clientes.";
    case 203:
        return "Usuario o contraseña invalida.";
    case 204:
        return "La dirección de correo electrónico no corresponde a un usuario registrado.";
    case 205:
        return "Proporcione una dirección de correo electrónico válida.";
    case 206:
        return "Su contraseña ya ha sido utilizada anteriormente.";
    case 207:
        return "El usuario no cuenta con un password generado automaticamente.";
    case 208:
        return "Perfil no disponible para cambio de contraseña.";
    case 209:
        return "El nombre del cliente ya se encuentra registrado actualmente.";
    case 210:
        return "El RFC o el nombre no es válido";
    case 213:
        return "Datos del registro incompletos";
    case 214:
        return "Favor de verificar su empresa.";
    case 219:
        return "Favor de verificar su número de contrato o empresa.";
    case 218:
        return "Ya existe un usuario registrado con este correo electrónico, indique otro por favor.";
    case 222:
        return "No se encontraron facturas en los últimos 3 meses"

    default:
        return codigo + "";
    }


}