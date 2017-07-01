import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
  providers: [ VehicleService ]
})
export class VehicleFormComponent implements OnInit {
  makes : any[];
  models : any[];
  features: any[];
  vehicle: any = {};

  constructor(
    private _vehicleService: VehicleService) { }

  ngOnInit() {
    this._vehicleService.getMakes().subscribe(makes =>
      this.makes = makes);

    this._vehicleService.getFeatures().subscribe(features =>
      this.features = features);
  }

  onMakeChange(){
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
