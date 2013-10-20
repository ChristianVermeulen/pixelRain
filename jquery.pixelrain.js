/*************************************************
* Pixel Rain
*
* Versionv1.0.5
* Date: 2013-10-20
* URL: https://github.com/ChristianVermeulen/pixelRain
*
* Copyright (c) 2013 Christian Vermeulen
**************************************************/

(function ( $ ) {

    $.fn.pixelRain = function( options ) {

        // Set some vars to start of with
        // We use a slightly smaller body
        var pixels = [],
            bodyWidth = this.width() - 30,
            bodyHeight = this.height() - 30,
            body = this;

        //Set some deafult options
        var settings = $.extend({
            // These are the defaults.
            amount: 100,
            interval: 100,
            pixelColor: "#000000",
            pixelSize: 1
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
                .css('width', settings.pixelSize+'px')
                .css('height', settings.pixelSize+'px')
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
                //update body sizes in case of resize
                bodyWidth = body.width() - 30;
                bodyHeight = body.height() - 30;

                var randL = Math.floor((Math.random()*bodyWidth)+1),
                    randT = Math.floor((Math.random()*bodyHeight)+1);

                $(pixels[ i ]).css('left', randL).css('top', randT);
            }

        };

        // Make sure the pixels are moved
        setInterval(movePixels, settings.interval);

    };

}( jQuery ));
