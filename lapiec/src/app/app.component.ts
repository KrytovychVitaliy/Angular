import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lapiec';



@ViewChild(FooterComponent, {
  static: false
})
private foterComponent: FooterComponent

showInfo(): void{
  console.log(this.foterComponent.count);
  console.log(this.foterComponent);
}

}
