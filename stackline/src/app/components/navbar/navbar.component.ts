import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabsContent = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabsContent.forEach(tabContent => {
          tabContent.classList.remove('active');
        });
        tabs.forEach((s) => {
          s.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
      });
    });
  }

  public toggle() {
    document.getElementById('sidebar').classList.toggle('active');
  }
}
