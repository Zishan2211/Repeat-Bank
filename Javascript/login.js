document.getElementById('m-left-180').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('uesr-password');
    const password = passwordField.value;
    // email and password chack
    if(email === 'zishancc@gmail.com' && password === 'zishan1234'){
        window.location.href = 'Bank.html'
    }
    else{
        alert('invalide password');
    }
})