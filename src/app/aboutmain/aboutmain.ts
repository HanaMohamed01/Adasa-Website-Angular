import { Component } from '@angular/core';
import { Aboutheader } from '../aboutheader/aboutheader';
import { Aboutvalues } from '../aboutvalues/aboutvalues';
import { Aboutwriters } from '../aboutwriters/aboutwriters';
import { Aboutcontact } from '../aboutcontact/aboutcontact';

@Component({
  imports: [Aboutheader, Aboutvalues, Aboutwriters, Aboutcontact],
  selector: 'app-aboutmain',
  templateUrl: './aboutmain.html',
  styleUrl: './aboutmain.css',
})
export class Aboutmain {}
