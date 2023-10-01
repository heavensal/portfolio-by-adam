import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="lightdark"
export default class extends Controller {
  connect() {
    console.log('light and dark');
  }

  transform() {
    console.log('dark');
    document.body.classList.toggle('body-dm');
    document.body.classList.toggle('body-lm');
  }
}
