console.log("hola");

const d = document,
   $form = d.querySelector(".contact-form"),
   $inputs = d.querySelectorAll(".contact-form [required]"),
   $loader = d.querySelector(".contact-form-loader"),
   $response = d.querySelector(".contact-form-response");

   $inputs.forEach(el => {
      const $span = d.createElement("span");
      $span.id = el.name;
      $span.textContent = el.title;
      $span.classList.add("contact-form-error", "none");
      el.insertAdjacentElement("afterend", $span);
   });

   d.addEventListener("keyup", e =>{
      if(e.target.matches(".contact-form [required]")){
         let input = e.target,
         pattern = input.pattern || input.dataset.pattern;

         if(pattern && input.value != ""){
            let regex = new RegExp(pattern);
            return !regex.exec(input.value)
               ? d.getElementById(input.name).classList.add("is-active")
               : d.getElementById(input.name).classList.remove("is-active")

         }
         
         if(!pattern){
            return input.value == ""
               ? d.getElementById(input.name).classList.add("is-active")
               : d.getElementById(input.name).classList.remove("is-active")
         }
      }
   });
//cabral.manuel@yandex.com
// pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" patron del nombre
   const sendForm = async (e) => {
      try {
         let res = await fetch(`https://formsubmit.co/ajax/${e.target.email.value}`, {
            method: "POST",
            body: new FormData(e.target)
         });

         if(res.ok) {
            console.log(res);
            console.log(e.target.email.value);
            $loader.classList.add("none");
            $response.classList.remove("none");
            //$form.reset();

         }
         else {
            throw {status: res.status, statusText: res.statusText};
         }
      } catch (err) {
         let message = err.statusText || "Ocurrió un error";
         $response.innerHTML = `Error ${err.status}: ${message}`;
      } finally {
         setTimeout(() => {
            $response.classList.add("none");
         }, 3000);
      }
   }

   d.addEventListener("submit", e =>{
      e.preventDefault();
      alert("Enviando");
         
      $loader.classList.remove("none");

      sendForm(e);
   });