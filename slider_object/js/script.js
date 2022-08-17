var sliderObject = {
    createNewSlider: function(){
        var slider = {
            sliderImages: null,
            sliderPrevBtn: null,
            sliderNextBtn: null,
            currentIndex: 0,

            sliderInit: function (el) {
                // this.sliderPrevBtn.addEventListener('click', this.actionPrev.bind(this));
                // this.sliderNextBtn.addEventListener('click', this.actionNext.bind(this));

                // this.sliderPrevBtn.addEventListener('click', this.actionPrev);
                // this.sliderNextBtn.addEventListener('click', this.actionNext);

                var idElem = document.querySelector(el)
                this.sliderImages = idElem.querySelectorAll('.slider_image');
                this.sliderPrevBtn = idElem.querySelector('.prev_btn');
                this.sliderNextBtn = idElem.querySelector('.next_btn');

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
        return slider;
    }
}





