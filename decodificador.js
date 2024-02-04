let select = true;  
let ativo= document.querySelector('h2');
ativo.innerHTML="A opção ativa é a criptografia"
function pegarTexto(){ 
    let ativo= document.querySelector('h2');
    ativo.innerHTML="A opção ativa é a criptografia"
    return select=true; 
}
function descri(){
    let ativo= document.querySelector('h2');
    ativo.innerHTML="A opção ativa é a descriptografia"; 
    return select=false; 
}
function text_auto(){ 
    trocarElementos()
    if(select==true){ 
        let caixa = document.getElementById("texto_inicial").value;  
        let lista=[]; 
        for (var i=0; i<caixa.length;i++){
            lista.push(caixa[i])
        }  
        let lista_total=[];
        let alfabeto=['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
        for(var i=0;i<lista.length;i++){
            for(var j=0; j<alfabeto.length;j++){
                if (lista[i]==alfabeto[j]){
                    if (j+3 < alfabeto.length){
                        lista_total.push(alfabeto[j+3]);
                    }else{
                        lista_total.push(alfabeto[j+3-alfabeto.length]);
                    }
                }else if(lista[i]==" "){
                    lista_total.push(lista[i])
                }
                
            }
        }
        let letras_juntas=lista_total.join('')
        let resposta=document.querySelector('p1'); 
        resposta.innerHTML=letras_juntas;
    }else{ 
        let texto=document.getElementById('texto_inicial').value; 
        let lista=[]; 
        for (var i=0; i<texto.length;i++){
            lista.push(texto[i])
        } 
        let lista_total=[];
        let alfabeto=['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']; 
        for(var i=0;i<lista.length;i++){
            for(var j=0; j<alfabeto.length;j++){
                if (lista[i]==alfabeto[j]){
                    if (j-3>=0){
                        lista_total.push(alfabeto[j-3]);
                    }else{
                        lista_total.push(alfabeto[j-3+alfabeto.length]);
                    }
                }else if(lista[i]==" "){
                    lista_total.push(lista[i])
                }
                
            }
        } 
        let letras_juntas=lista_total.join('')
        let resposta=document.querySelector('p1'); 
        resposta.innerHTML=letras_juntas; 

        

    }    
}

function trocarElementos(){
    var titu =document.getElementById("titulo"); 
    var img =document.getElementById("img");
    var ideia =document.getElementById("ideia");  
    var bto =document.getElementById("botao"); 
    titu.style.display= "none"; 
    img.style.display="none";
    ideia.style.display="none"; 
    botao.style.display="block" 

} 
function copiarTexto(){
        var selecionado=document.querySelector("p1").innerText;
        navigator.clipboard.writeText(selecionado).then(function(){
            console.log("Texto copiado com sucesso!");
            alert("Texto copiado com sucesso!")
        }).catch(function(err){
            console.error('Erro ao copiar texto : ',err);
            alert('Erro ao copiar texto')
        });

}
