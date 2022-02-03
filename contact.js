const form=document.getElementById('form');
const fullname=document.getElementById('fullname');
const email=document.getElementById('email');
const subject=document.getElementById('subject');
const message=document.getElementById('message');
const phonenumber=document.getElementById('phonenumber');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput([fullname,email,subject,message,phonenumber]);
      
     if(!validateEmail(email.value.trim())){
        showerror(email,'อีเมลล์ไม่ถูกต้อง');
    }else{
        showsuccess(email);
    }
});

function showerror(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;

}

function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function validateEmail(email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function checkInput(inputArray){
    inputArray.forEach(function(input){
    if(input.value.trim() ===''){
        showerror(input,`กรุณาป้อน ${getInputCase(input)}`);
    }else{
        showsuccess(input);
      }    
  });
}

function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);

}