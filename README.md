# pixelRain - jQuery Plugin #


This plugin will make it rain pixels on your screen!
It is designed to make it look like dead pixels are moving around.

## Usage ##

Add the `jquery.pixelrain-1.0.0.min.js` to you page at the bottom before the closing body tag but *after* jquery.

```html
    <script src="/js/jquery.pixelrain-1.0.0.min.js"></script>
```

Next you add this piece of javascript to activate the pixelrain (these are default values):

```js
    $("body").pixelRain({
        pixelColor: "#000000", // The color of the pixels
        interval: 100, // How fast should they rearrange (in ms)
        amount: 100 // How many pixels do you want
    });
```

## Future ##

In the future I want to implement more features:

* Choose between 'rain' and 'random'
* Give an array of colors to randomly choose from

## Collaboration
Feel free to fork this repo and add / improve features.
Any pull requests and / or issues are very welcome!

## The MIT License (MIT)
Copyright (c) 2013 Christian Vermeulen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
