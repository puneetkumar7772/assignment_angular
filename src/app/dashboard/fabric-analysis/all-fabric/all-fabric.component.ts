import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

interface FabricData {
  Fabric: string;
  Composition: string;
  '2023 Supplier': string;
  '2022 Supplier': string;
  'Diff %': string;
}

@Component({
  selector: 'app-all-fabric',
  templateUrl: './all-fabric.component.html',
  styleUrls: ['./all-fabric.component.css']
})
export class AllFabricComponent {
  constructor(private dataservice:DataService){}

  supplierWorkingData: FabricData[] | undefined;
  volumeData: FabricData[] | undefined;
  displayedColumns: string[] = ['Fabric', 'Composition', '2023 Supplier', '2022 Supplier', 'Diff %'];

  ngOnInit(): void {
    this.dataservice.getfabricsData().subscribe(data => {
      this.supplierWorkingData = data["Fabric Analysis"]["All Fabric"]["Supplier Working on Top 10 Fabrics (unique count for each fabric)"]["Fabrics"];
      this.volumeData = data["Fabric Analysis"]["All Fabric"]["Volume on Top 10 Fabrics"]["Fabrics"];
    });
  }
}
