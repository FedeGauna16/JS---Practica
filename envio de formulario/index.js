console.log("hola");

const d = document,
   $form = d.querySelector(".contact-form"),
   $inputs = d.querySelectorAll(".contact-form [required]");

   $inputs.forEach(el => {
      const $span = d.createElement("span");
      $span.id = el.name;
      $span.textContent = el.title;
      $span.classList.add("contact-form-error", "none");
      el.insertAdjacentElement("afterend", $span);
   })

   d.addEventListener("keyup", e =>{
      if(e.target.matches(".contact-form [required]")){
         let input = e.target,
         pattern = input.pattern || input.dataset.pattern;

         if(pattern){
            let regex = new RegExp(pattern);
            return !regex.exec(input.value)
               ? d.getElementById(input.name).classList.add("is-active")
               : d.getElementById(input.name).classList.remove("is-active")

         }
         
         if(!pattern){

         }
      }
   })