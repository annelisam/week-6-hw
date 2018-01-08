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

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + queen + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL, 
            method: 'GET'})

        .done(function(response) {

            var results = response.data;

            $('#divaGifs').empty();

            for (var j=0; j < results.length; j++) {
                var gifDiv = $('<div>');
                var gifView = results[j].images.fixed_height.url;
                var still = results[j].images.fixed_height_still.url;

                console.log(gifView);

                // Displays gif results
                var divaImg = $('<img>').attr("src", still).attr('data-animate', gifView).attr('data-still', still);
                divaImg.attr('data-state', 'still');

                $('#divaGifs').prepend(divaImg);
                divaImg.on('click', playGif);

                // pulls rating
                var rating = results[j].rating;
                console.log(rating);

                var showRating = $('<p>').text("Rating: " + rating);
                $('#divaGifs').prepend(showRating);
            }

    });


//play and pause Gifs
    function playGif() { 
        var state = $(this).attr('data-state');
        console.log(state);
     if ( state == 'still'){
         $(this).attr('src', $(this).data('animate'));
          $(this).attr('data-state', 'animate');
     } else{
         $(this).attr('src', $(this).data('still'));
         $(this).attr('data-state', 'still');
        }

    }

    //Add diva to array + button 
    function searchAPI() {

        var newDiva = $("#newDiva").val();
        console.log(newDiva);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + newDiva + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);


		$.ajax({
			url: queryURL,
			method: 'GET'
		})
		.done(function(response) {
			console.log(response);

			var result = response.data;
			for (i = 0; i <= results.length; i++) {
			var a = $('<button>');
            a.addClass('diva-name btn btn-primary');
            a.attr('data-name', newDiva[i]);
            a.text(newDiva[i]);
            $('#divaButtons').append(a);
			}
		})
}



$("#search-button").on("click", searchAPI);

// doc on click closing tag
})

});