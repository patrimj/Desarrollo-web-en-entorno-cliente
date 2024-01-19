import { Component, OnInit} from '@angular/core';
import { RankingInterface } from '../interfaces/interfacesTodas';
@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  ranking: any[] = [];
  rank: RankingInterface[] = [];
  
  resultados () {
    const serializarObj = localStorage.getItem('ranking');

    if (serializarObj) {
      const ranking = JSON.parse(serializarObj);
      return ranking;
    }
  }

  ngOnInit() {
    this.ranking = this.resultados();
  }
}