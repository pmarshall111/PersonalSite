import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ProjectdisplayComponent } from './projectpage/projectdisplay/projectdisplay.component';
import { ProjectinfoComponent } from './projectpage/projectinfo/projectinfo.component';
import { ArrowComponent } from './arrow/arrow.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideshowComponent } from './homepage/slideshow/slideshow.component';
import { SelectedImageDirective } from './homepage/slideshow/selected-image.directive';
import { ProjectcardComponent } from './projectpage/projectcard/projectcard.component';
import { ImgcarouselComponent } from './projectpage/imgcarousel/imgcarousel.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ContactformComponent } from './contactpage/contactform/contactform.component';
import { CorrectEmail } from './contactpage/contactform/correct-email.directive';
import { FooterComponent } from './footer/footer.component';
import {DateSuffixPipe} from './footer/dateSuffix.pipe';
import {SocialbuttonComponent} from './shared/socialbutton/socialbutton.component';
import { SolvingpageComponent } from './solvingpage/solvingpage.component';
import { ProblemdisplayComponent } from './solvingpage/problemdisplay/problemdisplay.component';
import { SkyscrapersDisplayComponent } from './solvingpage/skyscrapersDisplay/skyscrapersDisplay.component';
import { SkyscrapersComponent } from './solvingpage/skyscrapers/skyscrapers.component';
import { MinMaxLimiterDirective } from './shared/min-max-limiter.directive';
import { MinesweeperDisplayComponent } from './solvingpage/minesweeper-display/minesweeper-display.component';
import { ColourkeyComponent } from './solvingpage/minesweeper-display/colourkey/colourkey.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectpageComponent,
    ProjectdisplayComponent,
    ProjectinfoComponent,
    ArrowComponent,
    HomepageComponent,
    SlideshowComponent,
    SelectedImageDirective,
    ProjectcardComponent,
    ImgcarouselComponent,
    ContactpageComponent,
    ContactformComponent,
    CorrectEmail,
    FooterComponent,
    DateSuffixPipe,
    SocialbuttonComponent,
    SolvingpageComponent,
    ProblemdisplayComponent,
    SkyscrapersDisplayComponent,
    SkyscrapersComponent,
    MinMaxLimiterDirective,
    MinesweeperDisplayComponent,
    ColourkeyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
