let registerEmail = document.getElementById('registerEmail')
let registerPassword =document.getElementById('registerPassword')
let registerBtn = document.getElementById('registerBtn')
let registermodel = new bootstrap.Modal(document.getElementById('staticBackdrop'));


registerBtn.addEventListener('click',function(e){
e.preventDefault();
firebase.auth().createUserWithEmailAndPassword(registerEmail.value,registerPassword.value).then(()=>{
    alert('註冊成功');
    registerEmail.value="";
    registerPassword.value="";
    registermodel.toggle()
    }).catch((error)=>{alert(error.message); 
        registerEmail.value="";
    registerPassword.value="";
        });


})



