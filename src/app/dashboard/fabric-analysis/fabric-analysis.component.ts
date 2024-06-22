import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Chart } from 'chart.js';

interface FabricData {
  Fabric: string;
  Composition: string;
  '2023 Supplier': string;
  '2022 Supplier': string;
  'Diff %': string;
}

@Component({
  selector: 'app-fabric-analysis',
  templateUrl: './fabric-analysis.component.html',
  styleUrls: ['./fabric-analysis.component.css']
})
export class FabricAnalysisComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private dataservice: DataService) { }


  ngOnInit(): void {
    
  }

}
