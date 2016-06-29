function validateUser() {
    showLoading();
    var username = login.textBoxNombre.text;
    var password = login.textBoxPassword.text;
    if (username != undefined && password != undefined && username.length > 0 && password.length > 0) {
        var inputparam = {};
        var md5pssw = calcMD5(password);
        password = '';
        login.textBoxPassword.text = '';
        inputparam["serviceID"] = "validarUsuario";
        inputparam["usuario"] = username;
        inputparam["contrasena"] = md5pssw;
        inputparam["dispositivo"] = kony.os.deviceInfo().deviceid;
        peticionServer(function(result) {
            var userObj = {
                nombre: result.nombre,
                codigo: result.codigo,
                idUsuario: result.idUsuario,
                cliente: result.cliente,
                usuario: result.usuario,
                idCliente: result.idCliente,
                rfc: result.rfc,
                correo: result.correo
            }
            if (userObj.cliente != null) {
                userObj.listaContratos = userObj.cliente.map(function(numeroCliente) {
                    var mapAux = {};
                    mapAux.contratos = [];
                    numeroCliente.lstNumeroClientes.forEach(function(contrato) {
                        if (contrato.numeroCliente != null) {
                            mapAux.numCliente = contrato.numeroCliente;
                        } else {
                            mapAux.contratos.push(contrato);
                        }
                    });
                    return mapAux;
                });
            }
            userObj.pssw = result.passwordGenerado ? md5pssw : '';
            userObj.usuario = username;
            kony.store.setItem("user", userObj);
            if (result.passwordGenerado) {
                kony.application.dismissLoadingScreen();
                init_loginCambiarContrasena(userObj);
            } else {
                kony.application.dismissLoadingScreen();
                init_loginBienvenida(userObj);
            }
        }, inputparam);
    } else {
        kony.application.dismissLoadingScreen();
        alert('Por favor, introducir valor para usuario y contraseña.');
    }
}