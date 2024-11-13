export function useMagnifier() {
  function magnify(imgID: string, zoom: number) {
    let img: HTMLElement;
    let glass: HTMLElement;
    let w: number, h: number, bw: number;
    img = document.getElementById(imgID) as HTMLElement;

    if (!img) return;

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement?.insertBefore(glass, img);

    const bgImageUrl = window
      .getComputedStyle(img)
      .backgroundImage.split(" ")
      .slice(-1)[0];

    const bgImageWidth = img.getBoundingClientRect().width;
    const bgImageHeight = img.getBoundingClientRect().height;

    /* Set background properties for the magnifier glass: */
    // glass.style.backgroundImage = bgImageUrl;
    glass.style.backgroundImage = bgImageUrl;
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize =
      bgImageWidth * zoom + "px " + bgImageHeight * zoom + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    const button: HTMLElement = document.getElementById(
      "main-button",
    ) as HTMLElement;
    button.addEventListener("mouseenter", removeMagnifier);
    button.addEventListener("mouseleave", addMagnifier);

    function removeMagnifier() {
      img.parentElement?.removeChild(glass);
    }

    function addMagnifier() {
      img.parentElement?.insertBefore(glass, img);
    }

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    // glass.addEventListener("touchmove", moveMagnifier);
    // img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e: MouseEvent | TouchEvent) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);

      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > bgImageWidth - w / zoom) {
        x = bgImageWidth - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > bgImageHeight - h / zoom) {
        y = bgImageHeight - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /* Set the position of the magnifier glass: */
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }

    function getCursorPos(e: MouseEvent | TouchEvent) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      if (e instanceof MouseEvent) {
        x = e.pageX - a.left;
        y = e.pageY - a.top;
      }
      /* Consider any page scrolling: */
      x = x - window.scrollX;
      y = y - window.scrollY;
      return { x: x, y: y };
    }
  }
  return { magnify };
}
