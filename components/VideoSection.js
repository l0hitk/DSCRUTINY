showReview();
function showReview() {
  videoSection.innerHTML = "";
  const videoSectionEl = document.createElement("div");
  videoSectionEl.classList.add("container");
  videoSectionEl.classList.add("light-bg");
  videoSectionEl.innerHTML = `
    <div class="row align-items-center">
            <div class="col-12 col-md-6 py-5">
              <h2>Quote by you - Arjun </h2>
              <p class="my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur sit amet eros blandit, hendrerit elit et, mattis
                      purus. Vivamus commodo suscipit tellus et pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur sit amet eros blandit, hendrerit elit et, mattis
                      purus. Vivamus commodo suscipit tellus et pellentesque..
              </p>

              <figcaption class="reviewer-info d-flex align-items-center mt-5">
                <img
                  class="rounded-circle"
                  src="./images/person-img.png"
                  alt=""
                  srcset=""
                  style="width: 50px; height: 50px"
                />
                <div class="px-3">
                  <div class="fs-6 cl-blue-700 fw-bold">Arjun TK</div>
                  <span class="mt-1 cl-primary">CEO at Dscrutiny</span>
                </div>
              </figcaption>
            </div>
            <div
              class="col-12 col-md-6 video-wrapper overflow-hidden b-6 position-relative"
            >
              <div
                class="action-wrapper position-absolute d-flex align-items-center text-white"
                style="bottom: 10%; left: 6%"
              >
                <i class="bi bi-play-circle-fill fs-1"></i>
                <a href="" class="mx-3 text-decoration-none text-white"
                  >Play Video</a
                >
              </div>
              <a href="#">
                <img
                  class="img-fit-cover"
                  src="./images/Videosection-Img.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
    `;
  videoSection.appendChild(videoSectionEl);
}
