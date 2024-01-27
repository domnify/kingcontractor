new PureCounter();
new PureCounter({
    selector: ".ytsubscribers", 
    start: 0, 
    end: 2240,
    duration: 2,
    delay: 10,
});

new PureCounter({
    selector: ".igfollowers", 
    start: 0, 
    end: 5795,
    duration: 2,
    delay: 10,
});



var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });



  AOS.init();