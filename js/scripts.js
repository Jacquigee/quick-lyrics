    $ (document).ready(function() {
        $("form").submit (function (event){
            event.preventDefault();
            $("textarea#display").empty();

            var artiste = $("input#artiste").val();
            var title = $("input#title").val(); 

            var url = `https://api.lyrics.ovh/v1/${artiste}/${title}`;

            $.getJSON(url)
            .done(function (data){
                
            console.log(data["lyrics"]);
            
            
                /*<p>${data["lyrics"]}</p>*/




            });


        });


    });