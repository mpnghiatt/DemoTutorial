define(['jquery'], function ($) {
    'use strict';

    return function (Widget) {
        $.widget('mageplaza.instagram', Widget, {
            showPopup: function (id) {
                $(id).magnificPopup({
                    delegate: '.mpinstagramfeed-photo a',
                    callbacks: {
                        elementParse: function (item) {
                            if (item.el[0].className === 'mpinstagramfeed-post-url video') {
                                item.type = 'iframe';
                            } else {
                                item.type = 'image';
                            }
                        }
                    },
                    type: 'image',
                    gallery: { enabled: true },
                    closeOnContentClick: true,
                    closeOnBgClick: false,
                    closeBtnInside: false,
                    fixedContentPos: true,
                    mainClass: 'mfp-no-margins mfp-with-zoom',
                    image: { verticalFit: true },
                    zoom: { enabled: true, duration: 300 }
                });
            }
        });

        return $.mageplaza.instagram;
    };
});
