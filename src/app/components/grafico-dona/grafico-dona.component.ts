import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {
  // Doughnut
  @Input() chartLabels: string[] = [];
  @Input() chartData: any[] = [];
  @Input('type') chartType: string = '';
  @Input('nombre') leyenda: string = 'Leyenda';


  constructor() {
    console.log('leyenda', this.leyenda);
  }

  ngOnInit(): void {
    console.log('leyenda', this.leyenda);
  }

}
