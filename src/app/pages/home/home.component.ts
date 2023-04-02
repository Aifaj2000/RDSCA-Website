import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Header carousel
    $(".header-carousel").owlCarousel({
       autoplay: true,
       smartSpeed: 1500,
       items: 1,
       dots: false,
       loop: true,
       nav : true,
       navText : [
           '<i class="bi bi-chevron-left"></i>',
           '<i class="bi bi-chevron-right"></i>'
       ]
   });
 }


}
