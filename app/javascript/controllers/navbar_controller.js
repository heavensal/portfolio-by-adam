import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ['menu', 'btn']

  connect() {
  }

  toggle() {
    this.btnTargets.forEach((btn) => {
      btn.classList.toggle('d-none');
    });

    if (this.menuTarget.classList.contains('d-none')) {
      // Si le menu est caché
      this.menuTarget.classList.remove('d-none');
      setTimeout(() => {
        this.menuTarget.classList.add('show');
      }, 10); // Une courte attente pour s'assurer que 'd-none' est bien supprimé avant d'ajouter 'show'.
    } else {
      // Si le menu est visible
      this.menuTarget.classList.remove('show');
      setTimeout(() => {
        this.menuTarget.classList.add('d-none'); // Attend la fin de la transition (0.3s) avant d'ajouter 'd-none'.
      },500);
    }
  }


}
