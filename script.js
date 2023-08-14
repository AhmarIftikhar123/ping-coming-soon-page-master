window.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('form');
    form.addEventListener('submit',(eve)=>{
        let user_input  = document.querySelector('.user_input_box input');

        let isvalid= true;
        if(user_input.value.trim() === ""){
            showerror("Email required");
            isvalid = false;
        }else if (!isvalidemail(user_input.value.trim())){
            showerror("Please provide a valid Email")
            isvalid = false;
        }else{
            hideerror();
        }

        if(!isvalid){
            eve.preventDefault();
        }

      
    });
    let showerror = (err)=>{
        let errormsg = document.getElementById('output');

        errormsg.style.display = 'inline';
        errormsg.textContent = err;
    }
    
    let hideerror = ()=>{
        let errormsg = document.getElementById('output');

        errormsg.style.display = 'none';
        errormsg.textContent = "";
    }
    let isvalidemail = (email)=>{
        let validEmailpatter =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return validEmailpatter.test(email);
    }
})