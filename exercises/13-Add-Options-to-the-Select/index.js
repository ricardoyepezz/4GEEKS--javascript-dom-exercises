let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
    //obtengo elementos de array countries
countries.forEach(element => {
    //creo elemento option
    let option = document.createElement("option")

    //llamo a elemento mySelect para agregar appendChild
    const select = document.querySelector("#mySelect")
    select.appendChild(option)
    option.innerHTML=element;
    console.log(select);
   select.addEventListener('click', function() {
        console.log('hola');
      });

})
