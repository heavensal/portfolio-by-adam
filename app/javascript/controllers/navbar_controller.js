import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ['menu', 'btn']

  connect() {
  }

  display() {
    this.btnTargets.forEach((btn) => {
      btn.classList.toggle('d-none');
    });
    this.menuTargets.forEach((div) => {
      div.classList.toggle('responsive');
    });

  }
}
