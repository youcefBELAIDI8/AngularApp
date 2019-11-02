import { CoursesService } from './courses.service';
import {Component} from '@angular/core'
import { EmailService } from './email.service';
@Component({
    selector : 'courses',
    template : `
                <h2>{{"Je suis le component  : "+ myTitle()}}<h2>
                <ul>
                    <li *ngFor="let course of courses">{{ course }}</li>
                </ul>
                
                `
})
export class CoursesComponent{
    title = "Liste of courses";
    courses;
    
    constructor(service : CoursesService){
          this.courses = service.getCourses();
    }
    myTitle(){
        return this.title;
    }  
}

