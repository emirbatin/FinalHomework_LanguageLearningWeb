document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.querySelector('.btnLogin');
  
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); // Sayfanın yenilenmesini engeller
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      if (username === 'ebk' && password === '12345') {
        window.location.href = '../pages/chooseLang.html';
      } else {
        // Yanlış kullanıcı adı veya parola
        // İsteğe bağlı olarak hata mesajı gösterilebilir
      }
    });
  });
  