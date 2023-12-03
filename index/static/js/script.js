document.addEventListener('DOMContentLoaded', function() {
    var loginModal = document.getElementById('loginModal');
    var loginBtn = document.getElementById('loginBtn');
    var closeBtn = document.getElementById('closeBtn');

    // Display the modal
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // Close the modal
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});