import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message: string;
customeMessage: string;
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.message='Welcome to the home page '+ this.route.snapshot.params['name'];
  }

  getCustomizedMessage(){
    console.log(this.service.externalCallForMessage());
    this.service.externalCallForMessage().subscribe(
      response => this.handleSuccessResponse(response)
    );
  }
  handleSuccessResponse(response){
    this.customeMessage=response.message;
  }
  
}
