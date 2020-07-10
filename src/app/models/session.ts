
export var session = {
    session: false
}
var strSession = (JSON.stringify(session));

localStorage.setItem('sesion',strSession);