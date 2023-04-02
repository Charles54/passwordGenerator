function generatePassword() {
    const length = document.getElementById("password-length").value;
    const uppercaseLetters = document.getElementById("uppercase-letters").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
  
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
  
    if (uppercaseLetters) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  
    if (numbers) {
      charset += "0123456789";
    }
  
    if (symbols) {
      charset += "!@#$%^&*()_-+={}[];:'\"<>,.?/\\|";
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    document.getElementById("password").value = password;
  }
  