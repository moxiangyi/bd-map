import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from '../../database.service';
declare var BMap: any;
@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id;
  form;
  firstTypeList;
  childTypeList;
  typeName;
  filterItem;
  filteredOptions;
  map;
  constructor(
    private databaseService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.firstTypeList = this.databaseService.firstTypeList;
    this.activatedRoute.params.subscribe(resp => {
      if (resp) {
        this.id = resp.id;
      }
    });
    if (this.id) {
      this.filterItem = this.databaseService.pointDataInfo.find(item => {
        return item.id == this.id;
      });
      this.filterItem = this.databaseService.clone(this.filterItem);
      // const filterItem = this.databaseService.pointDataInfo.filter(item => {
      //   return item.id === this.id;
      // });
      this.childTypeList = this.filterItem.type[0].childType;
      this.typeName = this.filterItem.type[0].name;
      console.log(this.childTypeList);
    } else {
      this.childTypeList = [{}];
    }
  }
  ngOnInit() {
    this.map = new BMap.Map('map'); // 创建地图实例
    this.form = this.formBuilder.group({
      companyName: [''],
      warehouseName: [''],
      location: [''], // 地点
      // firstType: [''], //
      // SecondType: [''],
      // thirdType: [],
      contacts: [''],
      phone: [''],
      x: [''],
      y: ['']
    });
    if (this.id) {
      this.form.reset(this.filterItem);
      let data = {
        address_title: this.filterItem.location
      }
      this.form.get('location').setValue(data);
    }
  }

  displayFn(opi) {
    return opi && opi.address_title ? opi.address_title : '';
  }

  selected(e) {
    console.log('###########', this.form.value.location);
    this.form.get('x').setValue(this.form.value.location.point.lng);
    this.form.get('y').setValue(this.form.value.location.point.lat);
  }

  onSelectDataSet(e) {

  }

  searchLocation() {
    let location = this.form.value.location;
    let options = {
      onSearchComplete: (results) => {
        // 判断状态是否正确
        console.log('getStatue', local.getStatus());
			if (local.getStatus() === 0){
				this.filteredOptions = [];
				for (var i = 0; i < results.getCurrentNumPois(); i ++){
          let poi = results.getPoi(i);
          poi['address_title'] = results.getPoi(i).address + '  ' + results.getPoi(i).title; 
					this.filteredOptions.push(poi);
        }
        console.log('results********', this.filteredOptions);
				// document.getElementById("r-result").innerHTML = s.join("<br/>");
			}
      }
    }
    // let local = new BMap.LocalSearch(this.map, { renderOptions: { map: this.map, autoViewport: false } });
    let local = new BMap.LocalSearch('深圳市', options);
    let a = local.search(location);
    console.log('aaaaaaaaaaa', local.getResults());
  }

  deleteRow(row, index) {
    this.childTypeList.splice(index, 1);
  }

  addRow() {
    this.childTypeList.push({});
  }

  save() {
    if (this.id) {
      this.databaseService.pointDataInfo.forEach(item => {
        if (item.id == this.id) {
          item.companyName = this.form.getRawValue().companyName;
          item.warehouseName = this.form.getRawValue().warehouseName;
          item.location = this.form.getRawValue().location.address_title;
          item.contacts = this.form.getRawValue().contacts;
          item.phone = this.form.getRawValue().phone;
          item.type[0].childType = this.childTypeList;
          // item = Object.assign(item, this.filterItem);
        }
      });
    } else {
      const id = this.databaseService.pointDataInfo[this.databaseService.pointDataInfo.length - 1].id;
      let materialNameList = this.childTypeList.map(item => {
        return item.name
      })
      const data = {
        id: Number(id) + 1,
        x: this.form.value.x,
        y: this.form.value.y,
        companyName: this.form.getRawValue().companyName,
        warehouseName: this.form.value.warehouseName,
        location: this.form.value.location.address_title,
        contacts: this.form.value.contacts,
        phone: this.form.value.phone,
        typeName: '',
        materialNameList: materialNameList,
        type: [{
          name: this.childTypeList[0].name,
          childType: this.childTypeList
        }]
      };
      this.databaseService.pointDataInfo.push(data);
    }
    this.cancel();
  }

  cancel() {
    // history.go(-1);
    this.router.navigate(['/pages']);
  }

  delete() {
    this.databaseService.deletePointDataInfo(this.filterItem);
    this.cancel();
  }
}
