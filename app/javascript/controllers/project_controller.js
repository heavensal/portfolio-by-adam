import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="project"
export default class extends Controller {
  static targets = ['more', 'info']

  connect() {
  }

  toggle() {
    this.moreTarget.classList.toggle('d-none');
    this.infoTarget.classList.toggle('d-none');
  }
}
