$(document).ready(function () {

    $("#contact-form").on('submit', function (event) {
        event.preventDefault();
    });

    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: "Your name must consist of at least 2 characters."
            },
            email: "Please enter a valid email address.",
            subject: "Please enter a subject.",
            message: "Please enter your message."
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "#",
                data: $(form).serialize(),
                dataType: "json",
                success: function (response) {
                    if (response.status === 'success') {
                        alert(response.message);
                        form.reset();
                    } else {
                        alert(response.message);
                    }
                },
                error: function () {
                    alert("An error occurred while submitting the form.");
                }
            });
        }

    });
});
