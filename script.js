function showHidePass() {
    const pass = document.getElementById('user-pass');
    let visibility_btn = document.getElementById('show-hide-pass-btn');

    pass.type = pass.type === 'password' ? 'text' : 'password';
    visibility_btn.textContent = pass.type === 'text' ? 'Hide' : 'Show';
}


