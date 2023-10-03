import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="project"
export default class extends Controller {
  static targets = ['more', 'info']

  connect() {
    console.log('projet connecté');
  }

  toggle() {
    console.log('toggle');
    this.moreTarget.classList.toggle('d-none');
    this.infoTarget.classList.toggle('d-none');
  }
}
