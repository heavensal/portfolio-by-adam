import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll"
export default class extends Controller {
  connect() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const halfwayPoint = document.body.scrollHeight / 4;
    if (window.scrollY > halfwayPoint) {
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  }
}
