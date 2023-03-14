class WebrtcExampleHeader extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback () {
    const title= this.getAttribute("title")?this.getAttribute("title"):"noname"
    const src= this.getAttribute("src")?this.getAttribute("src"):"nosrc"
    this.innerHTML=`
    <header class="lg:flex lg:items-center pt-5 lg:justify-between">
      <div class="px-5 min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">${title}</h2>
      </div>
      <div class="px-5 mt-5 flex lg:mt-0 lg:ml-4">
        <span class="sm:ml-3 mt-2">
          <a href="${src}" class="underline">Source Code</a>
        </span>
      </div>
    </header>
    `
	}

}
if ('customElements' in window){
  customElements.define('webrtc-example-header', WebrtcExampleHeader);
}