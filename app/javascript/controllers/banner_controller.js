import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="banner"
export default class extends Controller {
  static targets = ['title']

  connect() {
    setTimeout(() => {
      this.element.classList.add('delayed-opacity');
    }, 1000);
    setTimeout(() => {
      this.titleTarget.classList.add('delayed-opacity');
    }, 2000);
  }
}
