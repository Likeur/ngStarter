import { DOCUMENT } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  

  isDarkMode: boolean = false;

  private document: Document = inject(DOCUMENT);

  updateTheme() {
    // Ajout du darkmode selon le theme du systeme light ou dark
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
      localStorage.setItem('darkMode', this.isDarkMode.toString());
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
      localStorage.setItem('darkMode', this.isDarkMode.toString());
    }
  }

  ngOnInit() {
    

    // Appeler la fonction une première fois pour définir le thème initial
    this.updateTheme();

    // Écouter les changements de thème
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateTheme);
  }
}
