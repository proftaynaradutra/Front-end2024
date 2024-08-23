let form = document.querySelector("#form");
let inputNome = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputSenha = document.querySelector("#senha");
let inputDataNasc = document.querySelector("#dataNasc");
let inputCidade = document.querySelector("#cidade");
let inputEstado = document.querySelector("#estado");

inputNome.onblur = () => {
    
    if(inputNome.value.trim() == ""){       
        inputNome.classList.add("erro");       /// borda em vermelho
        
        let divErroNome = document.querySelector("#item-erro-nome");
        divErroNome.classList.add("item-erro-visible");
    } else {
        inputNome.classList.remove("erro");

        let divErroNome = document.querySelector("#item-erro-nome");
        divErroNome.classList.remove("item-erro-visible");
        divErroNome.classList.add("item-erro-hidden");

    }
    
}

inputEmail.onblur = () => {
    
    if(inputEmail.value.trim() == ""){       
        inputEmail.classList.add("erro");       /// borda em vermelho
        
        let divErroEmail = document.querySelector("#item-erro-email");
        divErroEmail.classList.add("item-erro-visible");
    } else {
        inputEmail.classList.remove("erro");

        let divErroEmail = document.querySelector("#item-erro-email");
        divErroEmail.classList.remove("item-erro-visible");
        divErroEmail.classList.add("item-erro-hidden");
    }    
}

inputDataNasc.onblur = () => {
    
    if(inputDataNasc.value.trim() == ""){       
        inputDataNasc.classList.add("erro");       /// borda em vermelho
        
        let divErroDataNasc = document.querySelector("#item-erro-dataNasc");
        divErroDataNasc.classList.add("item-erro-visible");
    } else {
        inputDataNasc.classList.remove("erro");

        let divErroDataNasc = document.querySelector("#item-erro-dataNasc");
        divErroDataNasc.classList.remove("item-erro-visible");
        divErroDataNasc.classList.add("item-erro-hidden");
    }    
}

inputSenha.onblur = () => {
    
    if(inputSenha.value.trim() == ""){       
        inputSenha.classList.add("erro");       /// borda em vermelho
        
        let divErroSenha = document.querySelector("#item-erro-senha");
        divErroSenha.classList.add("item-erro-visible");
    } else {
        inputSenha.classList.remove("erro");

        let divErroSenha = document.querySelector("#item-erro-senha");
        divErroSenha.classList.remove("item-erro-visible");
        divErroSenha.classList.add("item-erro-hidden");

    }
    
}


inputCidade.onblur = () => {
    
    if(inputCidade.value.trim() == ""){       
        inputCidade.classList.add("erro");       /// borda em vermelho
        
        let divErroCidade = document.querySelector("#item-erro-cidade");
        divErroCidade.classList.add("item-erro-visible");
    } else {
        inputCidade.classList.remove("erro");

        let divErroCidade = document.querySelector("#item-erro-cidade");
        divErroCidade.classList.remove("item-erro-visible");
        divErroCidade.classList.add("item-erro-hidden");

    }
    
}

inputEstado.onblur = () => {
    
    if(inputEstado.value.trim() == "none"){       
        inputEstado.classList.add("erro");       /// borda em vermelho
        
        let divErroEstado = document.querySelector("#item-erro-estado");
        divErroEstado.classList.add("item-erro-visible");
    } else {
        inputEstado.classList.remove("erro");

        let divErroEstado = document.querySelector("#item-erro-estado");
        divErroEstado.classList.remove("item-erro-visible");
        divErroEstado.classList.add("item-erro-hidden");

    }
    
}

const criarUsuario = () => {
    let usuario = [{
        id: 1,
        nome: inputNome.value, 
        email: inputEmail.value, 
        senha: inputSenha.value, 
        dataNascimento: inputDataNasc.value, 
        cidade: inputCidade.value, 
        estado: inputEstado.options[inputEstado.selectedIndex].value,
    }]
    return usuario;
}

const adicionarUsuarioSessao = (idUsuario) => {
    sessionStorage.setItem("usuario", idUsuario);
}


const consultarUsuarioSessao = () => {
    console.log("Usuario logado: " + sessionStorage.getItem("usuario"));
}



form.onsubmit = () => {
    let usuario;

    event.preventDefault();
    usuario = criarUsuario();
    console.log(usuario);
    
    adicionarUsuarioSessao(usuario[0].id);
    consultarUsuarioSessao();


    console.log(usuario[0].nome);
    const usuarioJSON = JSON.stringify(usuario);

    console.log(usuarioJSON);

}
       






       





