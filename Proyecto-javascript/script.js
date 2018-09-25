var nombre;
var cedula;
var telefono; 
var correo; 
var sucursal;
var fechanacimiento;
var fechaactual;
var edad;
var tipo;
var moneda;
var monto;
var plazo;
var tasa;
var cuota;
function funcion( ) {
                    nombre = document.getElementById("nombre").value;
                    cedula = document.getElementById("cedula").value;
                    telefono = document.getElementById("telefono").value;
                    fechanacimiento = document.getElementById("fecha").value;
                    fechanacimiento = new Date(fechanacimiento).getFullYear();
                    fechaactual = new Date().getFullYear();
                    correo = document.getElementById("correo").value;
                    sucursal = document.getElementById("sucursal").value;
                    if(nombre == 0){
                        document.getElementById("nombre").style.borderBottomColor="red";
                        document.getElementById("aviso").style.display="block";
                    }
                    if(cedula == 0){
                        document.getElementById("cedula").style.borderBottomColor="red";
                         document.getElementById("aviso").style.display="block";
                    }
                    if(telefono == 0){
                        document.getElementById("telefono").style.borderBottomColor="red";
                         document.getElementById("aviso").style.display="block";
                    }
                    if(correo == 0){
                        document.getElementById("correo").style.borderBottomColor="red";
                         document.getElementById("aviso").style.display="block";
                    }
                    if( fechanacimiento == NaN){
                        document.getElementById("anacimiento").style.borderBottomColor="red";
                         document.getElementById("aviso").style.display="block";
                    }
                    if( sucursal == 0){
                        document.getElementById("sucursal").style.borderBottomColor="red";
                         document.getElementById("aviso").style.display="block";
                    }
      
                    else{
                        edadrequerida(fechaactual,fechanacimiento);
                        }
}
                    
function edadrequerida(fechaactual, fechanacimiento){
    edad = fechaactual - fechanacimiento;
    if(edad >= 18){
        document.getElementById("datospersonales").style.display="none";
        document.getElementById("calprestamos").style.display="block";
    }
    else{
        alert("Usted no tiene la edad suficiente para solicitar un prestamo");
        document.getElementById("nombre").value = "";
        document.getElementById("cedula").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("sucursal").value = "";
        document.getElementById("calprestamos").style.display="none";
    }
}


function calcular(){
    tipo = document.getElementById("tipo").value;
    moneda = document.getElementById("moneda").value;
    monto = document.getElementById("monto").value;
    monto = parseInt(monto);
    plazo = document.getElementById("plazo").value;
    plazo = parseInt(plazo);
    tasa;
    cuota;

    
    if(tipo=="Personal"){
        tasa = monto * 0.20;
        document.getElementById("tasa").value = "20%";
    }
    if(tipo=="Vivienda"){
        tasa = monto * 0.10;
        document.getElementById("tasa").value = "10%";
    }
    if(tipo=="Vehiculo"){
        tasa = monto * 0.15;
        document.getElementById("tasa").value = "15%";
    }
    
    cuota = (monto + tasa) / plazo;
    cuota = Math.round(cuota);
    document.getElementById("cuota").value = cuota;
    
    
}                


function resumen(){
    document.getElementById("resumen").style.display="block";
    document.getElementById("inicio").style.display="none";
    document.getElementById("rnom").value = nombre;
    document.getElementById("rced").value = cedula;
    document.getElementById("rtel").value = telefono;
    document.getElementById("reda").value = edad;
    document.getElementById("rcor").value = correo;
    document.getElementById("rsuc").value = sucursal;
    document.getElementById("rmon").value = monto;
    document.getElementById("rpla").value = plazo;
    document.getElementById("rtas").value = tasa;
    document.getElementById("rcuo").value = cuota;
}
function solicitar(){
    document.getElementById("resumen").style.display="none";
    document.getElementById("mensajefinal").style.display="block";
}
function reload(){
    location.reload(true)
}
