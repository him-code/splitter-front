import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'splitter-front';
  
  constructor(private socket : WebsocketService){}

  ngOnInit(){
    //lets try to listen here 

    // this.socket.listen('test event').subscribe(data => {
    //   console.log(data) ;
    // })

  }
}
