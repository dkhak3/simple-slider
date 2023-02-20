window.addEventListener("load", () => {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const docItems = document.querySelectorAll(".slider-dot-item");

  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length - 1;
  let postionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", () => handleChangeSlide(1));
  prevBtn.addEventListener("click", () => handleChangeSlide(-1));
  [...docItems].forEach((item) => {
    item.addEventListener("click", (e) => handleChangeDots(e));
  });

  function handleChangeSlide(direction) {
    if (direction === 1) {
      console.log(index);
      if (index >= slidesLength) {
        index = slidesLength;
        return;
      }
      postionX -= sliderItemWidth;
      console.log(postionX);

      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      postionX += sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }

    [...docItems].forEach((item) => item.classList.remove("active"));
    docItems[index].classList.add("active");
  }

  function handleChangeDots(e) {
    [...docItems].forEach((item) => item.classList.remove("active"));

    e.target.classList.add("active");

    const slideIndex = e.target.dataset.index;
    index = slideIndex;
    postionX = -1 * index * sliderItemWidth;
    console.log(postionX);
    sliderMain.style = `transform: translateX(${postionX}px)`;
  }
});
