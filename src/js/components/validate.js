document.getElementById("form").addEventListener("submit", function(event) {
    debugger
    event.preventDefault(); // Prevent form submission

    // Get input values
    const phoneInput = document.querySelector(".form__input-phone").value;
    const emailInput = document.querySelector(".form__input-email").value;
    const checkbox = document.getElementById("checkbox").checked;

    // Perform validation
    if (phoneInput.trim() === "" || !phoneInput.match(/^\+380 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) {
        alert("Please enter a valid phone number in the format '+380 (___) ___-__-__'");
        return;
    }
    if (emailInput.trim() === "" || !emailInput.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
        alert("Please enter a valid email address");
        return;
    }

    if (!checkbox) {
        alert("Please agree to the terms of processing personal data");
        return;
    }

    // Form is valid, submit it
    preventDefault()
    alert("Невдовзі ми з вами звяжемся")
    event.target.submit();
});