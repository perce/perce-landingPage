( function( document ) {
  var delay = 50;

  function animate( elements ) {
    elements.forEach( function( element, index ) {
      var length = element.getTotalLength();

      // Set up the starting positions
      element.style.strokeDasharray = length + ' ' + length;
      element.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      element.getBoundingClientRect();

      setTimeout( function() {
        element.style.strokeDashoffset = '0';
        element.classList.add( 'fillIt' );
      }, delay * index );
    } );
  }

  var paths = Array.prototype.slice.call( document.getElementsByTagName( 'path' ), 0);

  animate( paths );
} )( document );
