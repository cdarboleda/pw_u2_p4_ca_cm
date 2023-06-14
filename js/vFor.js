const arreglo = [{ nombre: "nombre1", apellido: "apellido1" },
{ nombre: "nombre2", apellido: "apellido2" },
{ nombre: "nombre3", apellido: "apellido3" },
{ nombre: "nombre4", apellido: "apellido4" },
{ nombre: "nombre5", apellido: "apellido5" },
{ nombre: "nombre6", apellido: "apellido6" },
{ nombre: "nombre7", apellido: "apellido7" },
{ nombre: "nombre8", apellido: "apellido8" },
{ nombre: "nombre9", apellido: "apellido9" },
{ nombre: "nombre10", apellido: "apellido10" }]

console.log(arreglo)

const app = Vue.createApp({
    data() {
        return {
            miArreglo: arreglo,
            nombre: ''
        }
    },
    methods:{
        agregarEstudiante(event) {
            console.log('Vamos a agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if(event.charCode=='13'){
                console.log('presionó enter')
                const nuevoEstudiante = {
                    nombre : this.nombre
                }

                this.miArreglo.unshift(nuevoEstudiante)
            }else{
                console.log('No es enter')
            }
        },

        agregarEstudiante2(){
            console.log('Vamos a agregar')
            const nuevoEstudiante = {
                nombre : this.nombre
            }
            this.miArreglo.unshift(nuevoEstudiante)
        }
    }

})




app.mount('#myApp2')//Un identificador
