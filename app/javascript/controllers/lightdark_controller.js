import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="lightdark"
export default class extends Controller {
  // Cette méthode est appelée lorsque le contrôleur est initialisé
  connect() {
    this.loadTheme();
    document.body.style.visibility = "visible";
  }

  // Basculer entre les thèmes et sauvegarder le choix de l'utilisateur
  transform() {
    document.body.classList.toggle('body-dm');
    document.body.classList.toggle('body-lm');

    // Enregistre le choix actuel dans le localStorage
    if (document.body.classList.contains('body-dm')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  // Charger le thème en fonction du choix précédent de l'utilisateur
  loadTheme() {
    const chosenTheme = localStorage.getItem('theme');

    // Si l'utilisateur a précédemment choisi le dark mode
    if (chosenTheme === 'dark') {
      document.body.classList.add('body-dm');
      document.body.classList.remove('body-lm');
    }
    // Si l'utilisateur a précédemment choisi le light mode ou n'a pas encore fait de choix
    else {
      document.body.classList.remove('body-dm');
      document.body.classList.add('body-lm');
    }
  }
}
