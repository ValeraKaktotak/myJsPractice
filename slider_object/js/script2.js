var slider2 = {
    sliderImages: document.querySelectorAll('#slider2.my_slider .slider_image'),
    sliderPrevBtn: document.getElementById('prev_btn2'),
    sliderNextBtn: document.getElementById('next_btn2'),
    currentIndex: 0,

    sliderInit: function () {
        // this.sliderPrevBtn.addEventListener('click', this.actionPrev.bind(this));
        // this.sliderNextBtn.addEventListener('click', this.actionNext.bind(this));

        // this.sliderPrevBtn.addEventListener('click', this.actionPrev);
        // this.sliderNextBtn.addEventListener('click', this.actionNext);

        var that = this;

        this.sliderPrevBtn.addEventListener('click', function (e) {
            that.actionPrev(e);
        });

        this.sliderNextBtn.addEventListener('click', function (e) {
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
