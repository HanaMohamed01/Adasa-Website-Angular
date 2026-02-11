import { Component } from '@angular/core';
import { Blogmain } from "../blogmain/blogmain";
import { Blogcontent } from "../blogcontent/blogcontent";

@Component({
  selector: 'app-bloghome',
  imports: [Blogmain, Blogcontent],
  templateUrl: './bloghome.html',
  styleUrl: './bloghome.css',
})
export class Bloghome {
}
