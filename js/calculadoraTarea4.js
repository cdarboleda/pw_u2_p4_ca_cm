
const app = Vue.createApp({
    data() {
        return {
            resultado: ''
        }
    },

    methods:{

        calc(num) {
            this.resultado += num;
            //document.getElementById('labelResultado').innerHTML = "Resultado: " + resultado;
            this.resultado = this.resultado;
            console.log(this.resultado)
        },

        calcClear() {
            this.resultado = '';
            //document.getElementById('labelResultado').innerHTML = "Resultado: ";
        },

        calcRes() {
            try {
              let resNumerico = parseFloat(eval(this.resultado));
              console.log(resNumerico);
              this.resultado = resNumerico;
            } catch (error) {
              this.calcClear();
            }
          }

    }
})

app.mount('#myAplicacion')
