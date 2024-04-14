const darkModeToggle=document.getElementById('dark-mode-toggle');
const body=document.querySelector('body');

darkModeToggle.addEventListener('click', ()=>{
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')){
    darkModeToggle.innerHTML='<i class="bi bi-sun"></i>'
  }else{
    darkModeToggle.innerHTML='<i class="bi bi-moon"></i>'
  }

})

const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

 

  const modal = document.getElementById('reservas');
  const formulario = document.getElementById('form');

    modal.addEventListener('hidden.bs.modal', function() {
      formulario.reset();
    });
 