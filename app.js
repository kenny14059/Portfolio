//to close sidebar on clicking outside it

const checkbox = document.querySelector('#check');
const nav = document.querySelector('nav');
document.addEventListener('click',(e)=>{
    if(checkbox.checked){
        window.addEventListener('scroll',()=>{
                const nav = document.querySelector('nav');
                nav.classList.toggle('sticky',window.scrollY > 0);
              
            })
    }
    if(checkbox.checked && e.target.closest('nav') == null){
       checkbox.checked = false;
    }
})