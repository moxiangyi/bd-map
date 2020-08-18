import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ComfirmDialogComponent } from './components/dialog/comfirm-dialog/comfirm-dialog.component';
// room from './room';
declare var BMap: any;

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})

export class PagesComponent implements OnInit {
  title = 'map';
  map;
  centerPoint;
  form;
  opts;
  firstTypeList;
  pointDataInfo;
  currentIndex = 0;
  // lastEvent;
  infoWindow;
  lastItem;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      warehouseName: [''],
      cityName: [''],
      materialName: [''],
      radius: ['1000']
    });
    this.form.get('radius').valueChanges.subscribe(resp => {
      // this.lastEvent && this.lastEvent.target.click();
      // this.infoWindow && this.infoWindow.redraw();
      if (this.lastItem) {
        this.remove_overlay(this.lastItem);
        setTimeout(() => {
          this.add_overlay(this.lastItem);
        }, 10);
      }
    });
    this.map = new BMap.Map('map'); // 创建地图实例
    this.centerPoint = new BMap.Point(114.05571, 22.52245); // 创建点坐标(深圳福田)
    this.map.centerAndZoom(this.centerPoint, 15); // 初始化地图，设置中心点坐标和地图级别
    this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    this.setInfoModal('', false);
  }

  initIcon(item) {
    // 创建仓库图标
    const pt = new BMap.Point(item.x, item.y);
    const myIcon = new BMap.Icon('/room.png', new BMap.Size(52, 26));
    const marker = new BMap.Marker(pt, {
      icon: myIcon
    });  // 创建标注
    this.map.addOverlay(marker);
  }

  initLabel(item) {
    const opts = {
      position: new BMap.Point(item.x, item.y),    // 指定文本标注所在的地理位置
      offset: new BMap.Size(-30, 0)    //设置文本偏移量
    };
    const label = new BMap.Label(item.warehouseName, opts);  // 创建文本标注对象
    label.setStyle({
      color: 'red',
      fontSize: '12px',
      height: '20px',
      lineHeight: '20px',
      fontFamily: '微软雅黑'
    });
    this.map.addOverlay(label);
  }

  // 添加覆盖物
  add_overlay(item) {
    let x = item.x + 0.000000001;
    let y = item.y + 0.000000001;
    let _centerPoint = new BMap.Point(x, y);
    // 创建圆
    let circle = new BMap.Circle(
      _centerPoint,
      this.form.value.radius,
      {
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.3
      }
    );
    // 增加圆
    this.map.addOverlay(circle);
    // 检索
    // let local = new BMap.LocalSearch(this.map, { renderOptions: { map: this.map, autoViewport: false } });
    // local.searchNearby('餐馆', this.centerPoint, 1000);
  }

  // 清楚覆盖物
  remove_overlay(item) {
    // this.map.clearOverlays();
    // this.map.removeoverlay();
    var allOverlay = this.map.getOverlays();
    allOverlay.forEach(element => {
      if (element.point && (element.point.lng == item.x + 0.000000001) && (element.point.lat == item.y + 0.000000001)) {
        this.map.removeOverlay(element);
      }
    });
    // const allOverlay = this.map.getOverlays();
    // for (let i = 0; i < allOverlay.length; i++) {
    //   if (allOverlay[i].getPosition().lng == value.x && allOverlay[i].getPosition().lat == value.y) {
    //     this.map.removeOverlay(allOverlay[i]);
    //     return false;
    //   }
    // }
    // allOverlay.forEach(item => {
    //   if (value.id == item.id) {
    //     this.map.removeOverlay(allOverlay[i]);
    //   }
    // });
  }

  // 根据物品名定位查询
  theLocation() {
    let materialName = this.form.getRawValue().materialName;

    // let local = new BMap.LocalSearch(this.map, { renderOptions: { map: this.map, autoViewport: false } });
    // local.search(city);
    // var local = new BMap.LocalSearch(this.map, {
    //   renderOptions: {map: this.map, panel: "r-result"}
    // });
    // local.search("莲花");
    this.setInfoModal(materialName, true);
  }

  // 重置
  reset() {
    this.setInfoModal('', false);
  }

  // 应急物资品类封装
  categoryType(typeName, typeObj) {
    typeObj.forEach(item1 => {
      typeName = typeName + '_' + item1.name;
      if (item1.childType) {
        this.categoryType(typeName, item1.childType);
      }
    });
    // typeName = typeName + '_' + typeObj.name;
    // if (typeObj.childType) {
    //   this.categoryType(typeName, typeObj.childType);
    // }
    return typeName;
  }

  setInfoModal(keyword?, isFilter?) {
    const pointDataInfo = JSON.parse(localStorage.getItem('pointDataInfo'));
    this.pointDataInfo = pointDataInfo || this.databaseService.getPointDataInfo();
    // function gotoDetail() {
    //   this.router.navigate(['/detail']);
    // }
    let url = '../../assets/images/111.png';
    this.pointDataInfo.forEach(item => {
      if (item.materialNameList.includes(keyword) || !isFilter) {
        let marker = new BMap.Marker(new BMap.Point(item.x, item.y));  // 创建标注
        this.map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(); // 跳动的动画
        // 创建仓库图标
        // const pt = new BMap.Point(item.x, item.y);
        // const myIcon = new BMap.Icon('http://lbsyun.baidu.com/jsdemo/img/car.png', new BMap.Size(52, 26));
        // const marker = new BMap.Marker(pt, {
        //   icon: myIcon
        // });  // 创建标注
        // this.map.addOverlay(marker);
        let content = `
        <div>${item.warehouseName}</div>
        <img id="imgDemo" width="70%" height="50%" src="${url}" />
        <div>联系人：${item.contacts}</div>
        <div>电话：${item.phone}</div>
        <div>地址：${item.location}</div>

        <br/>
        <a id="gotoDetail" onclick="gotoDetail()" href="javascript:void(0);">详情</a>
        `;
        this.initLabel(item);
        this.addClickHandler(content, marker, item);
      } else {
        this.map.clearOverlays();
      }

    });
    // let infoWindow = new BMap.InfoWindow('', this.opts);  // 创建信息窗口对象
    // marker.addEventListener("click", function () {
    //   this.map.openInfoWindow(infoWindow, point); //开启信息窗口
    // });
  }

  gotoDetail(item) {
    this.router.navigate(['/detail/' + item.id]);
  }


  // 点击标注点方法
  addClickHandler(content, marker, item) {
    marker.addEventListener('click', (e) => {
      // this.lastEvent = e;
      this.lastItem = item;
      let centerPoint = new BMap.Point(item.x, item.y);
      this.map.panTo(centerPoint);
      this.openInfo(content, e, item);
      this.add_overlay(item);
    });
  }

  openInfo(content, e, item) {
    // this.remove_overlay(item);
    let p = e.target;
    let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    let infoWindow = new BMap.InfoWindow(content, this.opts);  // 创建信息窗口对象
    // this.infoWindow = infoWindow;
    this.map.openInfoWindow(infoWindow, point); // 开启信息窗口
    infoWindow.addEventListener('close', (a) => {
      this.remove_overlay(item);
      // var allOverlay = this.map.getOverlays();
      // allOverlay.forEach(element => {
      //   if (element.point && (element.point.lng == item.x + 0.000000001) && (element.point.lat == item.y + 0.000000001)) {
      //     this.map.removeOverlay(element);
      //   }
      // });
    })
    // infoWindow.redraw();
    // document.getElementById('imgDemo').onload = function (){
    //   infoWindow.redraw(); }
    setTimeout(() => {
      document.getElementById('gotoDetail') && document.getElementById('gotoDetail').addEventListener('click', e => {
        this.gotoDetail(item);
      });
    }, 0);
  }

  onSelectDataSet(e) {

  }
  create() {
    this.router.navigate(['/detail']);
  }

  selectedIndexChange(index) {
    console.log('index', index);
    this.currentIndex = index;
  }

  logout() {
    let dialogRef = this.openDialog();
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/login']);
      }
    });
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
      data: {
        title: '确认退出登录吗？'
      }
    });

    return dialogRef;
  }
}


