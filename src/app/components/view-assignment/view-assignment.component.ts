import { Component, OnInit } from '@angular/core';
import {Evaluator} from '@angular/compiler-cli/src/metadata/evaluator';

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {

  name : string;
  Evaluator : string;
  Deadline : Date;
  Description : string;

  constructor() {
    this.name = "Test";
    this.Evaluator = "Mr Test";
    this.Deadline = new Date();
    this.Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat convallis scelerisque. Nulla quis neque ac nulla porta consectetur ut semper diam. In hac habitasse platea dictumst. Sed tempor facilisis aliquet. Aliquam non lorem in diam cursus viverra. Donec fermentum mollis nulla, eget elementum nunc gravida faucibus. Integer sollicitudin sagittis quam, tempus dictum nunc varius ut. Quisque finibus ligula a ultrices dictum."
  }

  ngOnInit() {
  }




}
