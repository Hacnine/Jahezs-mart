/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      }
    },
    screens:{
      xl:'1200px',
       md:'768px', sm:'576px',
       lg:'992px',
    },
    container:{
      center:true,
      padding: '1rem'
    },
    // colors:{
    //   'primary': '#FF5733',
    //   'secondary': '#ff0000',
    //   'white': '#f3e8ff'
    // }
  },
  plugins: [ 
    require('@tailwindcss/forms'),
],
}

