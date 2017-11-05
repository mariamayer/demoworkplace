import { Component, OnInit } from '@angular/core';
import { MapserverService } from '../../services/mapserver/mapserver.service';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.css'],
  providers: [ MapserverService ]
})
export class ScrapComponent implements OnInit {


  page: number = 1;
  perPage : number = 20;
  total : number = 20294;
  sortBy: String= 'OBJECTID';
  criteria: Boolean= true;
  places=[];
  fields=["OBJECTID","SSL","ASSESSOR_NAME","LAND_USE_CODE","LAND_USE_DESCRIPTION","LANDAREA","PROPERTY_ADDRESS","OTR_NEIGHBORHOOD_CODE","OTR_NEIGHBORHOOD_NAME","OWNER_NAME_PRIMARY","CAREOF_NAME","OWNER_ADDRESS_LINE1","OWNER_ADDRESS_LINE2","OWNER_ADDRESS_CITYSTZIP","APPRAISED_VALUE_BASEYEAR_LAND","APPRAISED_VALUE_BASEYEAR_BLDG","APPRAISED_VALUE_PRIOR_LAND","APPRAISED_VALUE_PRIOR_IMPR","APPRAISED_VALUE_PRIOR_TOTAL","APPRAISED_VALUE_CURRENT_LAND","APPRAISED_VALUE_CURRENT_IMPR","APPRAISED_VALUE_CURRENT_TOTAL","PHASEIN_VALUE_CURRENT_LAND","PHASEIN_VALUE_CURRENT_BLDG","VACANT_USE","HOMESTEAD_DESCRIPTION","TAX_TYPE_DESCRIPTION","TAXRATE","MIXED_USE","OWNER_OCCUPIED_COOP_UNITS","LAST_SALE_PRICE","LAST_SALE_DATE","DEED_DATE","CURRENT_ASSESSMENT_CAP","PROPOSED_ASSESSMENT_CAP","OWNER_NAME_SECONDARY","ADDRESS_ID","LASTMODIFIEDDATE"]

  constructor(private placesService: MapserverService) { }

  ngOnInit() {
    this.getList(1);
  }

  getList(page){
    this.getData(this.perPage,page,this.sortBy,this.criteria);
    this.page=page;
  }

  changeSize(event){
    this.getData(event.target.value,this.page,this.sortBy,this.criteria);
    this.perPage=event.target.value;
  }

  sort(value){
    if(value==this.sortBy){
      this.criteria=!this.criteria
      this.getData(this.perPage,this.page,this.sortBy,this.criteria);
    }else{
      this.criteria=true;
      this.getData(this.perPage,this.page,value,this.criteria);
      this.sortBy=value;
    }
  }

  getData(perPage,page,sortBy,criteria){
    this.placesService.get(perPage,page,sortBy,criteria)
     .subscribe((places) => {
       this.places=places;
     });
  }

  search(string){
    this.placesService.search(string)
     .subscribe((places) => {
       this.places=places;
     });
  }

}
