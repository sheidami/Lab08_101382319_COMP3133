import { Component } from "@angular/core";

@Component({
  selector: "students",
  template: ` <h2>{{ getTitles() }}</h2> `,
})
export class StudentsComponent {
  title = "My List of Students";

  getTitles() {
    return this.title;
  }
}
