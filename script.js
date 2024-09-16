function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'SaturnMembers2024') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('loading-screen').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('under-construction-screen').style.display = 'block';
        }, 5000);
    } else {
        alert('Incorrect password!');
    }
}
