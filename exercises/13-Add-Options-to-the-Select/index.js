const countries = ['USA', 'France', 'Italy', 'Brazil', 'Colombia', 'Belize', 'Venezuela'];

window.addEventListener("load", () => {
    //traigo elemento mySelect
  const sel = document.getElementById("mySelect");
    //addlistener a elemento sel
  sel.addEventListener("change", e => alert(e.currentTarget.value));
  sel.innerHTML += countries.map(country => new Option(country, country).outerHTML)
})
