// Javascript VIACEP

function limpa_formulário_cepn() {
    //Limpa valores do formulário de cep.
    document.getElementById('Logradouro').value = ("");
    document.getElementById('Bairro').value = ("");
    document.getElementById('Cidade').value = ("");
    document.getElementById('UF').value = ("");
    //document.getElementById('ibge').value = ("");
};

function meu_callbackn(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('Logradouro').value = (conteudo.logradouro);
        document.getElementById('Bairro').value = (conteudo.bairro);
        document.getElementById('Cidade').value = (conteudo.localidade);
        document.getElementById('UF').value = (conteudo.uf);
        //document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cepn();
        var prom = ezBSAlert({
            headerText: "CEP Não Encontrado",
            messageText: "O CEP digitado não foi encontrado!",
            modalSize: 'modal-sm',
            alertType: "warning"
        });
    }
};

function pesquisacepn(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('Logradouro').value = "...";
            document.getElementById('Bairro').value = "...";
            document.getElementById('Cidade').value = "...";
            document.getElementById('UF').value = "";
            //document.getElementById('ibge').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callbackn';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cepn();
            var prom = ezBSAlert({
                headerText: "CEP inválido",
                messageText: "O Formato do CEP é inválido!",
                modalSize: 'modal-sm',
                alertType: "danger"
            });
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cepn();
    }
};
