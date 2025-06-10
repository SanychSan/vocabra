import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Dictionary } from './pages/dictionary/dictionary';
import { Training } from './pages/training/training';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dictionary', component: Dictionary },
  { path: 'training', component: Training },
];
