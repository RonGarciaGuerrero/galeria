window.addEventListener("DOMContentLoaded", function () {//todo lo que debe esperar a que se cargue la pagina se mete en esta función
    
    //document.getElementById('originalSize').style.backgroundImage = 'url("./img/")';
    let miniaturas = document.querySelectorAll('#preview img');//todas las miniaturas
    for(let i=0;i<miniaturas.length;i++){
        let img=miniaturas[i];
        img.addEventListener('mouseover', function(event){
            console.log(event.target.src);//objeto que escuchó el evento
            let rutaImagen = event.target.src;
            //document.getElementById('originalSize').style.backgroundImage = 'url("'+rutaImagen+'")';//se construye el url
            document.getElementById('originalSize').innerHTML='<img src="'+rutaImagen+'">';
        });
        
    }
    //aqui muestro al inicio siempre la primera imagen de todas, al no iterar solo coge la primera  
    let ruta = document.querySelector('#preview img').src;
    
    document.getElementById('originalSize').innerHTML='<img src="'+ruta+'">';
    
    
    //alert('hola');


});