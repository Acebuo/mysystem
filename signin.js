let signinEmail = document.getElementById('signinEmail');
let signinPassword = document.getElementById('signinPassword');
let signinBtn = document.getElementById('signinBtn');
let second = document.getElementById('second');


signinBtn.addEventListener('click', function (e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(signinEmail.value, signinPassword.value).then(() => {
        let user = firebase.auth().currentUser;
        if (user) {
            document.getElementById('digimon').classList.add('none');
            second.classList.remove('none');
            let email = user.email;
            let id = user.uid
            document.getElementById('user-mail').innerHTML = `您的帳號:${email}`
            document.getElementById('user-id').innerHTML = `您的id:${id}`
            document.getElementById('user-name').innerHTML = `您的名稱:${user.displayName}`
            console.log(user)
        }
    }).catch((error) => {
        alert(error.message);
    })
});

