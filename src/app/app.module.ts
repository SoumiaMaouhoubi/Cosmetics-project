import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ParentComponent } from './interactions/parent/parent.component';
import { ChildComponent } from './interactions/child/child.component';
import { BindingComponent } from './interactions/binding/binding.component';
import { UsersComponent } from './interactions/users/users.component';
import { SearchComponent } from './interactions/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    BindingComponent,
    UsersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
