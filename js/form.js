function Mudarestado() {
        var display = document.getElementById("minhaDiv").style.display;
        if(display == "block"){
            document.getElementById("minhaDiv").style.display = 'none';
            var pegaBotao = document.getElementById("botao1");
            pegaBotao.innerHTML = "Editar detalhes adicionais";
        }
        else{
            document.getElementById("minhaDiv").style.display = 'block';
            var pegaBotao = document.getElementById("botao1");
            pegaBotao.innerHTML = "Ocultar detalhes adicionais";
        }
    }