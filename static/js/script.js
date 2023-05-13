$(document).ready(function () {
    $('#chatForm').on('submit', function (e) {
        e.preventDefault();
        var user_input = $('#userInput').val();
        $.post('/chat', { user_input: user_input }, function (data) {
            $('#chatbox').append('<p><strong>You:</strong> ' + user_input + '</p>');
            $('#chatbox').append('<p><strong>Hermes:</strong> ' + data + '</p>');
            $('#userInput').val('');
            $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);  // Scroll to the bottom
        });
    });
});

$(document).ready(function () {
    var darkMode = false;
    $('#modeSwitcher').html('<i class="fas fa-sun"></i>');
    $('#modeSwitcher').addClass('text-light').removeClass('text-dark');
     
    $('#modeSwitcher').on('click', function () {
        darkMode = !darkMode;
        $('body').toggleClass('dark-mode');
        $('#chatbox').toggleClass('dark-mode');
        if (darkMode) {
            $('#modeSwitcher').html('<i class="fas fa-sun"></i>');
            $('#modeSwitcher').addClass('text-light').removeClass('text-dark');
        } else {
            $('#modeSwitcher').html('<i class="fas fa-moon"></i>');
            $('#modeSwitcher').addClass('text-dark').removeClass('text-light');
        }
    }); 
});