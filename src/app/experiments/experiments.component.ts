import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  ifVotedFor: boolean = false;
  votedFor: string[] = [];

   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }

   addExperiment(project: string) {
        if(this.votedFor.includes(project)) {
             this.ifVotedFor = true;
        } else {
          this.ifVotedFor = false;
        } 
        if (this.votedFor.length < 3 && !this.ifVotedFor) {
           this.votedFor.push(project); 
        }  else if (this.ifVotedFor) {
            let index = this.votedFor.indexOf(project);
            this.votedFor.splice(index, 1);
        }
   }

}
