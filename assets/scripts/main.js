$( document ).ready( function(){


  ;(function(){
    var $body  = $( 'body' ),
        height = $body.height(),
        colors = [ '#34495e', '#8e44ad', '#2980b9', '#27ae60', '#f39c12', '#d35400', '#c0392b' ],
        colorCount    = colors.length,
        sectionHeight = ~~( height / colorCount );


    $( document ).on( 'scroll', function() {
      var st         = $( window ).scrollTop(),
          colorIndex = ~~ ( ( height - st ) / sectionHeight );

      if ( colorIndex !== colorCount ) {
        colorCount = colorIndex;
        $body.css( 'backgroundColor', colors[ colorIndex ] );
      }

    });
  })();


});