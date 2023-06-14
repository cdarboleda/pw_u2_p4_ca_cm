const app = Vue.createApp({
    data(){
        return{
            miArreglo : [],
            nombre : '',
            apellido : '',
            edad : '',
            carrera : ''
        }
    },

    methods : {
        agregarEstudiante(){
            const nuevoEstudiante = {
                nombre : this.nombre,
                apellido : this.apellido,
                edad : this.edad,
                carrera : this.carrera
            }
            this.miArreglo.unshift(nuevoEstudiante)

            this.nombre = '',
            this.apellido = '',
            this.edad = '',
            this.carrera = ''
        }
    }
})

app.mount('#formulario')