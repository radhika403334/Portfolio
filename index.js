let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    // event.currentTarget.classList.add('active-tab');
    document.getElementById(tabname).classList.add('active-tab');
}
let sidemenu = document.getElementById('nav-links');
function openMenu() {
    sidemenu.style.right = "0";
}
function closeMenu() {
    sidemenu.style.right = "-230px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby_W1EFpcZhsyA4y1P_N6DFyYtq6r6qeuCcS95RA4IMqv7rLjmgf932LdVVoC99lxXW/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('submitted'))
      .catch(error => console.error('Error!', error.message))
  })
  let submitMsg = document.getElementById('submit-msg'); 
  let submitBtn = document.getElementById('submit-btn'); 
  submitBtn.addEventListener('click', ()=>{
          submitMsg.innerHTML = "Form Submitted Successfully!";
          setTimeout(()=>{
              form.reset();
            
          }, 1000);
          setTimeout(()=>{
              submitMsg.innerHTML = ""
            }, 4000);
    })