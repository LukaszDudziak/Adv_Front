$('.interface').on('click', function () {
    // console.log('dziala');
    // console.log(this);
    // console.log($(this).attr('class'));
    if ($(this).hasClass('orange')) {
        // console.log('prawda'); //sprawdzenie działania ifa
        // $('body').toggleClass('orange'); //pierwszy sposób 
        // na dodanie koloru, poprzez dodanie istniejącej 
        // klasy

        // $('body').css('background-color', 'orange'); 
        //drugi, ze zmianą wartości atrybutu css

        // $('body').css({
        //     'background-color': 'orange'
        // }) //trzeci, za pomocą utworzenia obiektu .css

        $('body').attr('class', 'orange'); //czwarty, nadpisanie klasy

    }

    if ($(this).hasClass('green')) {
        // $('body').css({
        //     'background-color': 'green'
        // })
        $('body').attr('class', 'green');
    }

    if ($(this).hasClass('increase')) {
        // $('p').css({
        //     'font-size': '+=1'
        // })

        $('p').animate({
            'font-size': '+=10px'
        }, 500)
    }
    if ($(this).hasClass('move')) {

        $('.text').animate({
            'left': '+=10px',
            'letter-spacing': '+=5px'
        }, 500)
    }

})