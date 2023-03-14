class WebrtcExampleFooter extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback () {
    this.innerHTML=`
    <footer class="relative bg-blueGray-200 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">WebRTC Examples</h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
              본 페이지에 대한 문의가 있으시면 언제든 연락주세요
            </h5>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <ul class="list-unstyled">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.facebook.com/groups/rtc.korea">WebRTC Korea</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://medium.com/@calmglow">Blog</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <ul class="list-unstyled">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/calmglow/webrtc-examples">Github repository</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="mailto:calmglow@gmail.com">Contact Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span><a href="https://github.com/calmglow" class="text-blueGray-500 hover:text-gray-800" target="_blank"> 최진호.
            </div>
          </div>
        </div>
      </div>
    </footer>
    `
	}

}
if ('customElements' in window){
  customElements.define('webrtc-example-footer', WebrtcExampleFooter);
}