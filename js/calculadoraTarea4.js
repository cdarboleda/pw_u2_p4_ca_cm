
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
            this.resultado = ''
            //document.getElementById('labelResultado').innerHTML = "Resultado: ";
            this.resultado = "Resultado: ";
        },

        calcRes() {
            try {
              const resNumerico = parseFloat(eval(this.resultado));
              this.resultado = "Resultado: " + this.resNumerico;
              console.log(resNumerico);
              this.resultado = this.resNumerico;
            } catch (error) {
              this.calcClear();
            }
          }

    }
})

app.mount('#myAplicacion')
