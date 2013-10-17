(function ( $ ) {

    $.fn.pixelRain = function( options ) {

        // Set some vars to start of with
        // We use a slightly smaller body
        var pixels = [],
            bodyWidth = this.width() - 30,
            bodyHeight = this.height() - 30;

        //Set some deafult options
        var settings = $.extend({
            // These are the defaults.
            amount: 100,
            interval: 100,
            pixelColor: "#000000"
        }, options );

        // Create a container element
        var elContainer = document.createElement('div'),
            container = $(elContainer);

        container
            .css('width', bodyWidth+'px')
            .css('height', bodyHeight+'px')
            .css('position', 'absolute')
            .css('top', '15px')
            .css('left', '15px')
            .css('z-index', '-1000');
        this.append(container);

        // Create the pixels
        while(settings.amount--)
        {
            var randL = Math.floor((Math.random()*bodyWidth)+1),
                randT = Math.floor((Math.random()*bodyHeight)+1),
                elPixel = document.createElement('div'),
                pixel = $(elPixel);

            pixel
                .css('width', '2px')
                .css('height', '2px')
                .css('background-color', settings.pixelColor)
                .css('position', 'absolute')
                .css('left', randL)
                .css('top', randT);

            pixels.push(pixel);
            container.append(pixel);
        }

        // Move all the pixels
        var movePixels = function(){

            for(var i = 0; i<pixels.length; i++)
            {
                var randL = Math.floor((Math.random()*bodyWidth)+1),
                    randT = Math.floor((Math.random()*bodyHeight)+1);

                $(pixels[ i ]).css('left', randL).css('top', randT);
            }

        };

        // Make sure the pixels are moved
        setInterval(movePixels, settings.interval);

    };

}( jQuery ));
