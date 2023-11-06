import { Component, OnInit } from '@angular/core';
import { GameservService } from '../../service/gameserv.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
