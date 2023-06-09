console.log('Componente Vue')
console.log(Vue)

const app = Vue.createApp({
    //Options API (se separan con ,)

    //opcion template para html
    // template: `
    // <h1>Hola mundo</h1>
    // <p>Desde Vue.JS</p>
    // <p>{{1+1}}</p>
    // `,

    //opcion data para modelos
    data() {
        return {
            nombre:'Cristian',
            apellido:'Arboleda',
            mensaje:'Hola mundo 2 Desde Vue.JS'
        }
    },

    //opcion methods para declarar metodos JS
    methods:{
        cambiarNombre(){
            console.log('Boton cambiar nombre')
            this.nombre = 'Christian'
        },
        cambiarApellido(){
            console.log('Boton cambiar apellido')
            this.apellido='Moya'
        }
    }
})

app.mount('#miAplicacion')//Un identificador
