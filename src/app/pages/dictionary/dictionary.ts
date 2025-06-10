import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { Header } from '../../components/header/header'

@Component({
  selector: 'vc-dictionary',
  imports: [ScrollingModule, Header],
  templateUrl: './dictionary.html',
  styleUrl: './dictionary.scss'
})
export class Dictionary {
  items = Array.from({ length: 1000 }).map((_, i) => `Item #${i + 1}`);
}
