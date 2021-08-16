

document.getElementById('submit_btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == 'sontan@baap.com' && password == 'secret') {
        window.location.href = 'bank.html';
    }
});


