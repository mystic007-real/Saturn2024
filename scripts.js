function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'SaturnMembers2024') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('loading-screen').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-screen').style.display = 'block';
        }, 5000);
    } else {
        alert('Incorrect password!');
    }
}

function showVPN() {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('vpn-page').style.display = 'block';
}

function showExtensionBypass() {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('extension-bypass-page').style.display = 'block';
}

function goBack() {
    document.getElementById('vpn-page').style.display = 'none';
    document.getElementById('extension-bypass-page').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}
