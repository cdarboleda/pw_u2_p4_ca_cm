console.log('Componente Vue')
console.log(Vue)

const app = Vue.createApp({
    //Options API
    //template para html
    template: `
    
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS</p>
    `
})

app.mount('#miAplicacion')//Un identificador
