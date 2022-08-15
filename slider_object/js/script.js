var slider = {
    sliderImages: document.querySelectorAll('.my_slider .slider_image'),
    sliderPrevBtn: document.getElementById('prev_btn'),
    sliderNextBtn: document.getElementById('next_btn'),
    currentIndex: 0,

    sliderInit: function () {
        var that = this;
        this.sliderPrevBtn.addEventListener('click', function(e){
            that.actionPrev(e);
        });
        this.sliderNextBtn.addEventListener('click', function(e){
            that.actionNext(e);
        });
    },

    actionPrev: function (event) {
        var currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.remove('active');
        if (this.currentIndex === 0) {
            this.currentIndex = this.sliderImages.length - 1;
        } else {
            this.currentIndex--;
        }
        currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.add('active');

    },
    actionNext: function (event) {
        var currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.remove('active');
        if (this.currentIndex === this.sliderImages.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        currentItem = this.sliderImages[this.currentIndex];
        currentItem.classList.add('active');
    },
}
