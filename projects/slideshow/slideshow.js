(function (global) {
    'use strict';

    var SlideShow = function (domId) {
        this.container = document.getElementById(domId);
        this.pictures = [];
        this.currentPicture = 0;
        this.timer = null;

        if (this.container === null) {
            throw {
                name: 'BadID',
                message: 'An element with the ID of "' + domId
                    + '" does not exist'
            };
        }
    };

    SlideShow.prototype.addPicture = function (pic) {
        this.pictures.push(pic);
    };

    SlideShow.prototype.addPictures = function (pics) {
        this.pictures = this.pictures.concat(pics);
    };

    SlideShow.prototype.play = function () {
        var that = this;

        this.render();
        this.timer = window.setInterval(function () {
            that.cycle();
        }, 5000);
    };

    SlideShow.prototype.pause = function () {
        window.clearInterval(this.timer);
        this.timer = null;
    };

    SlideShow.prototype.isPlaying = function () {
        return this.timer !== null;
    };

    SlideShow.prototype.cycle = function () {
        if (this.currentPicture + 1 === this.pictures.length) {
            this.currentPicture = 0;
        } else {
            this.currentPicture += 1;
        }

        this.render();
    };

    SlideShow.prototype.render = function () {
        var html = '',
            currentPic = this.pictures[this.currentPicture];

        html = '<div id=pictureFrame>';
        html += '<img src=' + currentPic.src + ' alt="' + currentPic.caption + '">';
        if (currentPic.caption !== undefined) {
            html += '<div id=pictureCaption>' + currentPic.caption + '</div>';
        }
        html += '</div>';

        this.container.innerHTML = html;
    };

    global.SlideShow = SlideShow;
}(window || this));

