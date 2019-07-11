$(document).ready(function () {
    // Sidebar colapse
    $('#menu-icon').addClass('fas fa-angle-double-right');

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        if ($('#menu-icon').hasClass('fas fa-angle-double-left')) {
            $('#menu-icon').removeClass('fas fa-angle-double-left')
                .addClass('fas fa-angle-double-right');
        } else {
            $('#menu-icon').removeClass('fas fa-angle-double-right')
                .addClass('fas fa-angle-double-left');
        }
    });

    // Menu bar functions
    $('#timer').on('click', function () {
        if ($('#to-do-content') || ('#notes').hasClass('active')) {
            $('#to-do-content').removeClass('active');
            $('#notes-content').removeClass('active')
            $('#history-content').removeClass('active');
        }
        $('#pomodoro-content').addClass('active');
    })

    $('#to-do').on('click', function () {
        if ($('#pomodoro-content') || $('#notes-content').hasClass('active')) {
            $('#pomodoro-content').removeClass('active');
            $('#notes-content').removeClass('active');
            $('#history-content').removeClass('active');
        }
        $('#to-do-content').addClass('active');
    })

    $('#notes').on('click', function () {
        if ($('#to-do-content') || $('#pomodoro-content').hasClass('active')) {
            $('#to-do-content').removeClass('active');
            $('#pomodoro-content').removeClass('active');
            $('#history-content').removeClass('active');
        }
        $('#notes-content').addClass('active');
    })

    $('#history').on('click', function () {
        if ($('#pomodoro-content') || $('#to-do-content') || $('#notes-content').hasClass('active')) {
            $('#pomodoro-content').removeClass('active');
            $('#to-do-content').removeClass('active');
            $('#notes-content').removeClass('active');
        }
        $('#history-content').addClass('active');
    })
    // End of menu  bar functions
});