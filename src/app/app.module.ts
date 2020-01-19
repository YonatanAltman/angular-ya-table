import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { AppComponent } from "./app.component";
import { YaTableComponent } from './ya-table/ya-table.component';
import 'hammerjs';
@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule, FormsModule, MaterialModule],
  declarations: [AppComponent, YaTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
