//Array of divas
$(document).ready(function(){
    var divas = ['Mariah Carey', 'Beyoncé', 'Britney Spears', 'Christina Aguilera', 'Rihanna', 'Whitney Houston', 'Janet Jackson'];

    //Creates buttons from divas array

    function buttonsArray(){
        $('#divaButtons').empty();

        for (var i=0; i < divas.length; i++) {
            var a = $('<button>');
            a.addClass('diva-name btn btn-primary');
            a.attr('data-name', divas[i]);
            a.text(divas[i]);
            $('#divaButtons').append(a);
        }
    }
    buttonsArray();

    // click button function
    $(document).on('click', '.diva-name', function() {

        var queen = $(this).html();
        console.log(queen);
    })
});