import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingComponent } from './components/landing/landing.component';
import { RepoHoverDirective } from './repo-hover.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    SearchFormComponent,
    NotFoundComponent,
    LandingComponent,
    RepoHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
