import { Component } from '@angular/core';
import { Header } from './../../../shared/components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
