import {Component, Injectable, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

class Price {
  id: number;
  value: string;
}

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
  providers: [ApiService]
})

@Injectable({
  providedIn: 'root'
})
export class ValueComponent implements OnInit{

  constructor(
    private todoDataService: ApiService  ) {  }

  apiValues: Price[] = [];
  public ngOnInit(): void  {
    this.todoDataService
      .get('values')
      .subscribe(values => {
        console.log(values);
        this.apiValues = values as Price[];
      });
  }
}
