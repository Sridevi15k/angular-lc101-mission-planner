import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: object = null;

  userEquipment: object[] = [
    {name: 'Habitat dome', isPresent: true},
    {name: 'Drones', isPresent: false},
    {name: 'Food containers', isPresent: false },
    {name: 'Oxygen tanks', isPresent: true}
  ];
 
  constructor() { }

  ngOnInit() {
  }
  
  addEquipment(equipmentName: string, ifPresent: boolean) {
      this.userEquipment.push({name: equipmentName, isPresent: ifPresent});
  }

  editEquipment(equipment: object) {
    this.equipmentBeingEdited = equipment;
  }

  removeEquipment(equipment: object) {
    let index = this.userEquipment.indexOf(equipment);
    this.userEquipment.splice(index, 1);

  }  

  saveEquipment(equipmentName: string, equipment: object) {
      equipment['name'] = equipmentName;
      this.equipmentBeingEdited = null;
  }

}
