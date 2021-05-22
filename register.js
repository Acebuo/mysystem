let registerEmail = document.getElementById('registerEmail')
let registerPassword =document.getElementById('registerPassword')
let registerBtn = document.getElementById('registerBtn')
let registermodel = new bootstrap.Modal(document.getElementById('staticBackdrop'));
let registername =document.getElementById('registername')
let userid;


registerBtn.addEventListener('click',function(e){
e.preventDefault();
userid = registername.value;
firebase.auth().createUserWithEmailAndPassword(registerEmail.value,registerPassword.value).then(()=>{
    let user = firebase.auth().currentUser;
    user.updateProfile({
        displayName:userid
    });
    registerEmail.value="";
    registerPassword.value="";
    registername.value="";
    registermodel.toggle()
    }).catch((error)=>{alert(error.message); 
        registerEmail.value="";
    registerPassword.value="";
        });


})



