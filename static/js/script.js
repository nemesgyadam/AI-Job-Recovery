$(document).ready(function () {
    var speed = 25; // Speed of typing in milliseconds
    var stop = false;
    function typeMessage(element, message, i = 0) {
        if (i < message.length) {
            if (!stop) {
                element.append(message.charAt(i));
                setTimeout(typeMessage, speed, element, message, i + 1);
            }
        }
    }

    function appendAndTypeMessage(sender, message) {
        stop = false;
        // Create the message element and add the sender
        var messageElement = $('<p><strong>' + sender + ':</strong> </p>');
        $('#chatbox').append(messageElement);

        // Start typing the message
        typeMessage(messageElement, message);
    }


    $('#chatForm').on('submit', function (e) {
        e.preventDefault();

        var userInput = $('#userInput').val();
        stop = true;
        $('#userInput').val(''); // clear the input field

        // disable the send button
        $('input[type="submit"]').prop('disabled', true);

        // append user's message to chatbox
        $('#chatbox').append('<p><strong>' + str_you + ':</strong> ' + userInput + '</p>');

        // make ajax request to your flask server
        $.ajax({
            url: '/chat', // replace with your endpoint
            method: 'POST',
            data: {
                'user_input': userInput
            },
            success: function (data) {

                //$('#chatbox').append('<p><strong>' + str_hermes + ':</strong> ' + data + '</p>');
                appendAndTypeMessage(str_hermes, data);

                $('#userInput').val('');
                $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);  // Scroll to the bottom

                // enable the send button
                $('input[type="submit"]').prop('disabled', false);
            },
            error: function (error) {
                console.log(error);

                // enable the send button
                $('input[type="submit"]').prop('disabled', false);
            }
        });
    });

    var darkMode = true;
    toggleDarkMode(darkMode);

    $('#modeSwitcher').on('click', function () {
        darkMode = !darkMode;
        toggleDarkMode(darkMode);
    });

    function toggleDarkMode(isDarkMode) {
        $('body').toggleClass('dark-mode', isDarkMode);
        $('#chatbox').toggleClass('dark-mode', isDarkMode);
        $('.highlight-message').toggleClass('dark-mode', isDarkMode);
        $('#modeSwitcher').toggleClass('text-light', isDarkMode);
        $('#modeSwitcher').toggleClass('text-dark', !isDarkMode);
        $('#modeSwitcher').html(isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>');
    }

    appendAndTypeMessage(str_hermes, welcome_msg);

});
