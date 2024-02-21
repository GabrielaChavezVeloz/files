import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: '<h1>Angular Core Deep Dive</h1><script>alert("Attack")</script>'
  };

  onLogoClicked() {
    alert('Hello Workd');
  }
  
  onKeyUp(newTitle:string) {
    this.data.title = newTitle;
  }
}
