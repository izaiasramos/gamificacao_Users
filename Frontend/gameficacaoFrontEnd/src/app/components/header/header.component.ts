import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Equivalente ao 'data()' do Vue
  searchText: string = '';

  // Equivalente ao 'methods()' do Vue
  doSearch(): void { // 'void' indica que a função não retorna nada
    if (this.searchText.trim() === '') {
      alert('Digite algo para buscar');
      return;
    }
    console.log('Buscando:', this.searchText);
    // Aqui fará a busca real quando o back estiver pronto
  }
}
