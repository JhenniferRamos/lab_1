//desafio 1 mostratlo que dice la funcion
//const numero =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//function numerosPareselevadosalCuadradoMayoresQue10(numero) {
    //const resultado = [];
    //for (let i = 0; i < numero.length; i++) {
      //if (numero[i] % 2 === 0 && numero[i] ** 2 > 10) {
        //resultado.push(numero[i] ** 2);
      //}
    //}
    //return resultado;
    
  //}
  //console.log(numerosPareselevadosalCuadradoMayoresQue10(numero));

  //desafio 2 mostrar persona mas menor
  //const personas = [
    //{ nombre: 'Juan', edad: 30 },
    //{ nombre: 'Ana', edad: 25 },
    //{ nombre: 'Pedro', edad: 27 },
    //{ nombre: 'María', edad: 22 },
    //];
    //function personaMasJoven(personas) {
      //  let masJoven = personas[0];
        //for (let i = 1; i < personas.length; i++) {
          //if (personas[i].edad < masJoven.edad) {
            //masJoven = personas[i];
          //}
        //}
        //return masJoven;
      //}
      //console.log(personaMasJoven(personas));


      const texto = 'hola, mundo!';
      function contarCaracteres(texto) {
        const contador = {};
        for (let i = 0; i < texto.length; i++) {
          const caracter = texto[i];
          if (contador[caracter]) {
            contador[caracter]++;
          } else {
            contador[caracter] = 1;
          }
        }
        return contador;
      }
      console.log(contarCaracteres(texto));