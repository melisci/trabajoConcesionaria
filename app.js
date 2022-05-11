const autos = require('./autos');


const concesionaria = {
    /* completar */
   autos:  autos,
   buscarAuto: function (patente) {
        for (let i = 0; i < autos.length; i++) {
        if (autos[i].patente === patente) {
        return autos[i]
        }else{
        return null
        }
        }
    },
    venderAuto: function (patente) {
        const auto = this.buscarAuto(patente);
        if (auto) {
        return auto.vendido = true
        } else{
        return auto.vendido = false
        }
    },
    autosParaLaVenta: function(){
        let paraVender = autos.filter (auto=> auto.vendido==false)
        return paraVender
    },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter(auto=>auto.km<= 100)
          
    },
    listaDeVentas: function (){
        let autosVendidos = autos.filter (auto => auto.vendido == true)
        let precios =autosVendidos.map (vendido => vendido.precio)
        return precios
     },
     
     totalDeVentas: function () {
        return ventas = this.listaDeVentas ().reduce ((num, precio)=> num + precio,0)
      },
     puedeComprar: function (auto, persona) {
            if (auto.precio < persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)){
                return true;
            }else{  
                return false } 
     },
     autosQuePuedeComprar:  function (persona){
        return this.autosParaLaVenta (autos).filter (auto=>this.puedeComprar (auto, persona));
     }
     
        
} 


console.log (concesionaria)