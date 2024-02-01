function pegarTexto(){
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

} 
function descri(){
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
