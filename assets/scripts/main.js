// ( function( Snap ) {
//   function drawBarChart() {
//     var svg       = Snap( '#promoSvg' ),
//         rectIndex = 0,
//         height;
//     // delay everything a bit
//     setTimeout( function() {

//       for( ; rectIndex < 7; ++rectIndex ) {
//         height = Math.random() * 200;
//         height = ( height > 100 ) ? height : height + 100;

//         svg.rect( rectIndex * 35, 350, 30, 0 )
//             .attr( 'fill', '#3498DB' )
//             .attr( 'stroke', '#2980B9' )
//             .attr( 'stroke-width', 2 )
//             .animate(
//               {
//                 height : height,
//                 y      : 350 - height
//               },
//               500
//             )
//             .hover(
//               function() {
//                 var height = +this.attr( 'height' ),
//                     y      = +this.attr( 'y' );

//                 this.data( 'height', height );
//                 this.data( 'y', y );

//                 this.animate( {
//                   height : height + 25,
//                   y      : y - 25
//                 }, 500 );
//               },
//               function() {
//                 this.animate( {
//                   height : this.data( 'height' ),
//                   y      : this.data( 'y' )
//                 }, 500 );
//               }
//             );
//       }
//     }, 750 );

//     var line1 = svg.path( 'M23.2539063,134.074147 L70.1875,131.944067 L94.3007813,153.195942 L119.832031,132.458777 L182.238281,96.5838416 L229.042969,108.330961 L270.304688,88.7195416 L323.683594,89.5341635' )
//                     .attr( 'stroke', '#E74C3C' )
//                     .attr( 'stroke-width', 3 )
//                     .attr( 'fill', 'none' );

//     var length1 = line1.node.getTotalLength();

//     line1.node.style.strokeDasharray = length1 + ' ' + length1;
//     line1.node.style.strokeDashoffset = length1;
//     line1.node.getBoundingClientRect();

//     setTimeout( function() {
//       line1.node.style.strokeDashoffset = '0';
//     }, 250 );

//     var line2 = svg.path( 'M24.171875,113.003906 L78.078125,105 L154.75,132.832031 L178.773437,112.554688 L251.894531,86.046875 L322.703125,105' )
//                     .attr( 'stroke', '#27ae60' )
//                     .attr( 'stroke-width', 3 )
//                     .attr( 'fill', 'none' );

//     var length2 = line2.node.getTotalLength();

//     line2.node.style.strokeDasharray = length2 + ' ' + length2;
//     line2.node.style.strokeDashoffset = length2;
//     line2.node.getBoundingClientRect();

//     setTimeout( function() {
//       line2.node.style.strokeDashoffset = '0';
//     }, 500 );

//     var line3 = svg.path( 'M23.1328125,177.183594 L94.4375,130.652344 L146.207031,157.589844 L205.457031,117.257812 L212.546875,132.53125 L230.46875,88 L279.273438,149.25 L327.046875,118.785156' )
//                     .attr( 'stroke', '#8e44ad' )
//                     .attr( 'stroke-width', 3 )
//                     .attr( 'fill', 'none' );

//     var length3 = line3.node.getTotalLength();

//     line3.node.style.strokeDasharray = length3 + ' ' + length3;
//     line3.node.style.strokeDashoffset = length3;
//     line3.node.getBoundingClientRect();

//     setTimeout( function() {
//       line3.node.style.strokeDashoffset = '0';
//     }, 750 );

//     var lines = svg.g( line1, line2, line3 )
//                     .attr( 'transform', 'translate( 300, 100 ), scale( 1.5, 1.5 )' );
//   }

//   drawBarChart();

// } )( Snap );
