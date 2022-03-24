const d = document,
$div = d.querySelector("resultados"),
$fragment = d.createDocumentFragment();

const getAll = async () => {
   try {
      let res = await fetch("http://127.0.0.1:21337/static-decklist"),
      json = res.json();
      console.log(res);
      
   } catch (err) {
      
   }
}

d.addEventListener("DOMContentLoaded", getAll);