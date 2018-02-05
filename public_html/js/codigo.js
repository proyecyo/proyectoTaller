$(document).ready(function (){
    
    $("#btnCargar").click(cargarDatos);
    $("#btnPronostico").click(cargarpantalla);
    $("#btnHoy").click(cargarpantalla);
    $("#hoy").show();
    $("#pronostico").hide();
    function cargarpantalla(){
        
       var id= $(this).attr("id");
        switch (id){
            case "hoy":
                
                   $("#hoy").show();
    $("#pronostico").hide(); 
                break;
            case "pronostico":
                  $("#hoy").hide();
    $("#pronostico").show(); 
                
                
        }
      
        
        
    }
    
    
    function cargarDatos(){
           var valor= $("#txtCampo").val();
   var valor2= $("#txt2").val();
        
$.ajax({url: "https://api.openweathermap.org/data/2.5/weather",
    success: mostrarDatos,
           // beforeSend: antesEnvio(),/*antes de que se inicie la funcion asincronica, sirve para aviso si demora mucho*/ 
            dataType:"json",
            data: {q:valor,valor2,appid:"e62b2530fdb5f4ba3559c07c8634e5c7",
            units:"metric",
            lang:"es"},
            type:"get"
        });////mandar informacion, parametros,
  
    }
    
    function mostrarDatos(datos){
        $("#txtCampo").html(datos.main.temp);
        
    }
 
    
});
