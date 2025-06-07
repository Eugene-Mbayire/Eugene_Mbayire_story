
<!-- auth.js -->
if (!sessionStorage.getItem('loggedIn')) {
  window.location.href = 'login.html';
}
