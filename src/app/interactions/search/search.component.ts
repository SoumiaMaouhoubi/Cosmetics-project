import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // Retreive the users from the parent component
  @Input() list: string[]=[];

  // add the logic of feltring
  searchText : string = '';

  get filteredList(){
    return this.list.filter(item=>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }
}
