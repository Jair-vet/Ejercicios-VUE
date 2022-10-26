
const app = Vue.createApp({
    // Options Api
    // template: `
    //     <h1>Hola Mundo desde Vue</h1>
    //     <p> Desde  App </p>
    // `

    data() {
        return {
            // message: 'Hola Mundo'
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },

    methods: {
        changeQuote(  ) {
            console.log( 'Hola Mundo' )
            this.author = 'Carlos Jair'

            this.capitalize()
        }, 
        capitalize() {
            this.quote = this.quote.toUpperCase()
        },


        // changeQuote( event ) {
        //     console.log('Hola Mundo', event);
        // }
    },
    

})

app.mount('#myApp')

