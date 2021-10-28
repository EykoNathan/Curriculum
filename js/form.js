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
function mostraDivEmpregos() {
    var divEmpregos = document.getElementById('divEmpregos');
    var conteudo = divEmpregos.innerHTML + conteudoDivEmpregos();
    divEmpregos.innerHTML =  conteudo;
}
function conteudoDivEmpregos() { 
    return `
    <div class="container-emprego">
        <div class="row linha1">
            <div class="col-md-6 cargo2">
                <label for="cargo"><strong>Cargo:</strong></label>
                <input type="text" name="cargo" id="cargo2" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 emprego2">
                <label for="empregador"><strong>Empregador:</strong></label>
                <input class="form-control" type="text" name="empregador">
            </div>
        </div>
        <div class="row linha2">
            <div class="col-md-6 data1">
                <label for="data"><strong>Data de inicio:</strong></label>
                <input type="date" name="data" id="data" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 data2">
                <label for="data"><strong>Data de termino:</strong></label>
                <input type="date" name="data2" id="data2" class="form-control" tabindex="1">
            </div>
        </div>
        <div class="row linha3">
            <div class="col-md-6 estado2">
                <label for="estado"><strong>Estado:</strong></label>
                <input type="text" name="estado" id="estado" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 cidade2">
                <label for="empregador"><strong>Cidade:</strong></label>
                <input type="text" name="cidade" id="cidade" class="form-control" tabindex="1">
            </div>
        </div>
    </div>
    <div id="dvCentro">
        <textarea id="txtArtigo" name="txtArtigo"></textarea>
    </div>
    script src="ckeditor/ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace('txtArtigo');
    </script>
    `; 
}
function mostraDivLinks() {
    var divLinks = document.getElementById('divLinks');
    var conteudo = divLinks.innerHTML + conteudoDivLinks();
    divLinks.innerHTML =  conteudo;
}
function conteudoDivLinks() { 
    return `
    <div class="container-link">
        <div class="row linha1">
            <div class="col-md-6 rotulo">
                <label for="rotulo"><strong>Rotulo:</strong></label>
                <input type="text" name="rotulo" id="rotulo" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 link">
                <label for="link"><strong>Link:</strong></label>
                <input class="form-control" type="text" name="link">
            </div>
        </div>
    </div>
    `; 
}
function mostraDivEducação() {
    var divEducação = document.getElementById('divEducacao');
    var conteudo = divEducação.innerHTML + conteudoDivEducação();
    divEducação.innerHTML =  conteudo;
}
function conteudoDivEducação() { 
    return `
    <div class="container-educação">
        <div class="row linha1">
            <div class="col-md-6 escola">
                <label for="escola"><strong>Escola:</strong></label>
                <input type="text" name="escola" id="escola" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 grau">
                <label for="grau"><strong>Grau:</strong></label>
                <input class="form-control" type="text" name="grau">
            </div>
        </div>
        <div class="row linha2">
            <div class="col-md-6 data1">
                <label for="data"><strong>Data de inicio:</strong></label>
                <input type="date" name="data" id="data" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 data2">
                <label for="data"><strong>Data de termino:</strong></label>
                <input type="date" name="data2" id="data2" class="form-control" tabindex="1">
            </div>
        </div>
        <div class="row linha3">
            <div class="col-md-6 estado2">
                <label for="estado"><strong>Estado:</strong></label>
                <input type="text" name="estado" id="estado" class="form-control" tabindex="1">
            </div>
            <div class="col-md-6 cidade2">
                <label for="empregador"><strong>Cidade:</strong></label>
                <input type="text" name="cidade" id="cidade" class="form-control" tabindex="1">
            </div>
        </div>
    </div>
    <div id="dvCentro">
        <textarea id="txtArtigo" name="txtArtigo"></textarea>
    </div>
    script src="ckeditor/ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace('txtArtigo');
    </script>
    `; 
}
