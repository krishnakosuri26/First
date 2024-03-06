import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './header/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CutomeDirvDirective } from './cutome-dirv.directive';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'header', component: HeaderComponent},
{path: 'sidebar', component: SidebarComponent},
{path: 'menu', component: MenuComponent},
{path: 'footer', component: FooterComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    CutomeDirvDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
