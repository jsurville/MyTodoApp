import {Component, Injectable, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

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

  apiValues: string[] = [];
  public ngOnInit(): void  {
    this.todoDataService
      .get('values')
      .subscribe(values => {
        this.apiValues = values as string[];
      });
  }
}
