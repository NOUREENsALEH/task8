document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('createAccountForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirmPassword-error');

    // Helper function to validate email format
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('invalid');
            emailError.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('invalid');
            emailError.style.display = 'none';
            return true;
        }
    }

    // Helper function to validate password length
    function validatePassword() {
        if (passwordInput.value.length < 6) {
            passwordInput.classList.add('invalid');
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordInput.classList.remove('invalid');
            passwordError.style.display = 'none';
            return true;
        }
    }

    // Helper function to validate confirm password match
    function validateConfirmPassword() {
        if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === '') {
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.style.display = 'block';
            return false;
        } else {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordError.style.display = 'none';
            return true;
        }
    }

    // Enable or disable the submit button based on form validity
    function checkFormValidity() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Listen for input on email, password, and confirm password fields
    emailInput.addEventListener('input', () => {
        validateEmail();
        checkFormValidity();
    });

    passwordInput.addEventListener('input', () => {
        validatePassword();
        checkFormValidity();
    });

    confirmPasswordInput.addEventListener('input', () => {
        validateConfirmPassword();
        checkFormValidity();
    });

    // Trigger validation when the user leaves the field
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent form submission for now
        console.log('Form submitted');
    });
});


