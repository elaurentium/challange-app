const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const signupError = document.getElementById('signup-error');
const loginError = document.getElementById('login-error');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!validateEmail(email)) {
        signupError.textContent = 'Digite um email válido.';
    } else if (!validatePassword(password)) {
        signupError.textContent = 'A senha deve ter pelo menos 6 caracteres e não pode conter espaços.';
    } else {
        signupError.textContent = '';
        alert('Cadastro realizado com sucesso!');
        signupForm.reset();
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!validateEmail(email) || !validatePassword(password)) {
        loginError.textContent = 'Login ou senha incorretos.';
    } else {
        loginError.textContent = '';
        alert('Login realizado com sucesso!');
        loginForm.reset();
    }
});

function validateEmail(email) {
    return email.includes('@') && !/\s/.test(email);
}

function validatePassword(password) {
    return password.length >= 6 && !/\s/.test(password);
}
