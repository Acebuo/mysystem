let signinEmail = document.getElementById('signinEmail')
let signinPassword = document.getElementById('signinPassword')
let signinBtn = document.getElementById('signinBtn')


signinBtn.addEventListener('click', function (e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(signinEmail.value, signinPassword.value).then(() => {
        let user = firebase.auth().currentUser;
        if (user) {
            alert('登入成功');
        }
    }).catch((error) => {
        alert(error.message);
    })
});
