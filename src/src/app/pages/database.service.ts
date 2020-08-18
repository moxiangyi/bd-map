export class DatabaseService {
  pointDataInfo = [
    {
      id: 111,
      x: 114.06,
      y: 22.54,
      companyName: '莲花街道办',
      warehouseName: '莲花街道仓库',
      location: '莲花街道',
      contacts: '张三',
      phone: '18706431658',
      // firstType: '自然灾害类',
      // SecondType: '防汛抗旱类',
      typeName: '应急通讯类',
      materialNameList: [
        '防爆对讲机'
      ],
      type: [{
        name: '应急通讯类',
        childType: [
          {
            parentTypeName: '应急通讯类',
            name: '防爆对讲机',
            brand: '摩托罗拉',
            number: 6,
            unitPrice: 3500,
            totalPrice: 21000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          }
        ]
      }]
    },
    {
      id: 222,
      x: 114.065,
      y: 22.545,
      companyName: '莲花街道办',
      warehouseName: '莲花街道仓库',
      location: '莲花街道',
      contacts: '张三',
      phone: '18706431658',
      // firstType: '自然灾害类',
      // SecondType: '防汛抗旱类',
      typeName: '堵涌',
      materialNameList: [
        '柔性防爆带压堵漏装备'
      ],
      type: [{
        name: '堵涌',
        childType: [
          {
            parentTypeName: '堵涌',
            name: '柔性防爆带压堵漏装备',
            brand: '安固',
            number: 1,
            unitPrice: 130000,
            totalPrice: 130000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          }
        ]
      }]
    },
    {
      id: 333,
      x: 114.055,
      y: 22.495,
      companyName: '莲花街道办',
      warehouseName: '莲花街道仓库',
      location: '莲花街道',
      contacts: '张三',
      phone: '18706431658',
      // firstType: '自然灾害类',
      // SecondType: '防汛抗旱类',
      typeName: '自然灾害类_防汛抗旱类_抽水机组',
      materialNameList: [
        '化油剂',
        '吸油棉',
        '无火花吊带'
      ],
      type: [{
        name: '其它',
        childType: [
          {
            parentTypeName: '其它',
            name: '化油剂',
            brand: '/',
            number: 50,
            unitPrice: 500,
            totalPrice: 25000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '其它',
            name: '吸油棉',
            brand: '3M',
            number: 50,
            unitPrice: 500,
            totalPrice: 25000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '其它',
            name: '无火花吊带',
            brand: '/',
            number: 2,
            unitPrice: 20000,
            totalPrice: 40000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          }
        ]
      }]
    },
    {
      id: 444,
      x: 114.08,
      y: 22.51,
      companyName: '杨林街道办',
      warehouseName: '杨林街道仓库',
      location: '杨林',
      contacts: '张三',
      phone: '18706431658',
      typeName: '自然灾害类11_防汛抗旱类11_抽水机组11',
      materialNameList: [
        '空气呼吸器',
        '消防头盔',
        '阻燃A级防护服',
        '阻燃C级防护服',
        '灭火战斗服',
        '车载式移动供气装置'
      ],
      type: [{
        name: '个人防护类',
        childType: [
          {
            parentTypeName: '个人防护类',
            name: '空气呼吸器',
            brand: 'PSS 3600',
            number: 6,
            unitPrice: 19200,
            totalPrice: 115200,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '个人防护类',
            name: '消防头盔',
            brand: 'HPS 7000',
            number: 6,
            unitPrice: 5000,
            totalPrice: 30000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '个人防护类',
            name: '阻燃A级防护服',
            brand: '杜邦Tyche mTK',
            number: 6,
            unitPrice: 40000,
            totalPrice: 240000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '个人防护类',
            name: '阻燃C级防护服',
            brand: '杜邦tp198',
            number: 12,
            unitPrice: 5000,
            totalPrice: 60000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '个人防护类',
            name: '灭火战斗服',
            brand: '优普泰',
            number: 6,
            unitPrice: 13000,
            totalPrice: 78000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '个人防护类',
            name: '车载式移动供气装置',
            brand: '梅思安',
            number: 1,
            unitPrice: 60000,
            totalPrice: 60000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
        ]
      }]
    },
    {
      id: 555,
      x: 114.09,
      y: 22.53,
      companyName: '汤头街道办',
      warehouseName: '汤头街道仓库',
      location: '汤头',
      contacts: '张三',
      phone: '18706431658',
      typeName: '自然灾害类22_防汛抗旱类22_抽水机组22',
      materialNameList: [
        '便携式多种气体检测仪',
        '德尔格多种气体检测区域报警系统',
        '便携式有毒有害气体及化学战剂检测仪'
      ],
      type: [{
        name: '应急检测类',
        childType: [
          {
            parentTypeName: '应急检测类',
            name: '便携式多种气体检测仪',
            brand: '天鹰5X蓝牙版多气体检测仪',
            number: 3,
            unitPrice: 31600,
            totalPrice: 94800,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '应急检测类',
            name: '德尔格多种气体检测区域报警系统',
            brand: 'X-zone 5500',
            number: 4,
            unitPrice: 60000,
            totalPrice: 240000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          },
          {
            parentTypeName: '应急检测类',
            name: '便携式有毒有害气体及化学战剂检测仪',
            brand: 'AIRSENSE',
            number: 1,
            unitPrice: 400000,
            totalPrice: 400000,
            unit: '个', // 单位
            warehousingTime: '2020-03-04', // 入库时间
            serviceLife: '3个月', // 使用期限
            contacts: '张三', // 负责人
            phone: '13234567898',
            description: ''
          }
        ]
      }]
    }
  ];
  firstTypeList = [
    {
      name: '自然灾害类'
    },
    {
      name: '公共卫生类'
    },
    {
      name: '公共安全类'
    },
    {
      name: '事故安全类'
    },
  ];
  constructor() {
    console.log('data111', this.pointDataInfo);
    // if (!this.pointDataInfo) {
    //   this.initPointDataInfo();
    // }
  }

  // 初始化标注点信息
  // initPointDataInfo() {
  //   this.pointDataInfo = [
  //     {
  //       id: 111,
  //       x: 114.06,
  //       y: 22.54,
  //       warehouseName: '莲花街道仓库',
  //       location: '莲花街道',
  //       contacts: '张三',
  //       phone: '18706431658',
  //       // firstType: '自然灾害类',
  //       // SecondType: '防汛抗旱类',
  //       typeName: '应急通讯类',
  //       type: [{
  //         name: '应急通讯类',
  //         childType: [
  //           {
  //             parentTypeName: '应急检测类',
  //             name: '防爆对讲机',
  //             brand: '摩托罗拉',
  //             number: 6,
  //             unitPrice: 3500,
  //             totalPrice: 21000,
  //             description: ''
  //           }
  //         ]
  //       }]
  //     },
  //     {
  //       id: 222,
  //       x: 114.065,
  //       y: 22.545,
  //       warehouseName: '莲花街道仓库',
  //       location: '莲花街道',
  //       contacts: '张三',
  //       phone: '18706431658',
  //       // firstType: '自然灾害类',
  //       // SecondType: '防汛抗旱类',
  //       typeName: '堵涌',
  //       type: [{
  //         name: '堵涌',
  //         childType: [
  //           {
  //             parentTypeName: '堵涌',
  //             name: '柔性防爆带压堵漏装备',
  //             brand: '安固',
  //             number: 1,
  //             unitPrice: 130000,
  //             totalPrice: 130000,
  //             description: ''
  //           }
  //         ]
  //       }]
  //     },
  //     {
  //       id: 333,
  //       x: 114.055,
  //       y: 22.495,
  //       warehouseName: '莲花街道仓库',
  //       location: '莲花街道',
  //       contacts: '张三',
  //       phone: '18706431658',
  //       // firstType: '自然灾害类',
  //       // SecondType: '防汛抗旱类',
  //       typeName: '自然灾害类_防汛抗旱类_抽水机组',
  //       type: [{
  //         name: '其它',
  //         childType: [
  //           {
  //             parentTypeName: '其它',
  //             name: '化油剂',
  //             brand: '/',
  //             number: 50,
  //             unitPrice: 500,
  //             totalPrice: 25000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '其它',
  //             name: '吸油棉',
  //             brand: '3M',
  //             number: 50,
  //             unitPrice: 500,
  //             totalPrice: 25000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '其它',
  //             name: '无火花吊带',
  //             brand: '/',
  //             number: 2,
  //             unitPrice: 20000,
  //             totalPrice: 40000,
  //             description: ''
  //           }
  //         ]
  //       }]
  //     },
  //     {
  //       id: 444,
  //       x: 114.08,
  //       y: 22.51,
  //       warehouseName: '杨林街道仓库',
  //       location: '杨林',
  //       contacts: '张三',
  //       phone: '18706431658',
  //       typeName: '自然灾害类11_防汛抗旱类11_抽水机组11',
  //       type: [{
  //         name: '个人防护类',
  //         childType: [
  //           {
  //             parentTypeName: '个人防护类',
  //             name: '空气呼吸器',
  //             brand: 'PSS 3600',
  //             number: 6,
  //             unitPrice: 19200,
  //             totalPrice: 115200,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '个人防护类',
  //             name: '消防头盔',
  //             brand: 'HPS 7000',
  //             number: 6,
  //             unitPrice: 5000,
  //             totalPrice: 30000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '个人防护类',
  //             name: '阻燃A级防护服',
  //             brand: '杜邦Tyche mTK',
  //             number: 6,
  //             unitPrice: 40000,
  //             totalPrice: 240000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '个人防护类',
  //             name: '阻燃C级防护服',
  //             brand: '杜邦tp198',
  //             number: 12,
  //             unitPrice: 5000,
  //             totalPrice: 60000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '个人防护类',
  //             name: '灭火战斗服',
  //             brand: '优普泰',
  //             number: 6,
  //             unitPrice: 13000,
  //             totalPrice: 78000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '个人防护类',
  //             name: '车载式移动供气装置',
  //             brand: '梅思安',
  //             number: 1,
  //             unitPrice: 60000,
  //             totalPrice: 60000,
  //             description: ''
  //           },
  //         ]
  //       }]
  //     },
  //     {
  //       id: 555,
  //       x: 114.09,
  //       y: 22.53,
  //       warehouseName: '汤头街道仓库',
  //       location: '汤头',
  //       contacts: '张三',
  //       phone: '18706431658',
  //       typeName: '自然灾害类22_防汛抗旱类22_抽水机组22',
  //       type: [{
  //         name: '应急检测类',
  //         childType: [
  //           {
  //             parentTypeName: '应急检测类',
  //             name: '便携式多种气体检测仪',
  //             brand: '天鹰5X蓝牙版多气体检测仪',
  //             number: 3,
  //             unitPrice: 31600,
  //             totalPrice: 94800,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '应急检测类',
  //             name: '德尔格多种气体检测区域报警系统',
  //             brand: 'X-zone 5500',
  //             number: 4,
  //             unitPrice: 60000,
  //             totalPrice: 240000,
  //             description: ''
  //           },
  //           {
  //             parentTypeName: '应急检测类',
  //             name: '便携式有毒有害气体及化学战剂检测仪',
  //             brand: 'AIRSENSE',
  //             number: 1,
  //             unitPrice: 400000,
  //             totalPrice: 400000,
  //             description: ''
  //           }
  //         ]
  //       }]
  //     }
  //   ];
  // }

  getPointDataInfo() {
    return this.pointDataInfo;
  }

  // 修改标注点信息
  updatePointDataInfo(value) {
    // let updateItem;
    let updateIndex;
    let err = '';
    this.pointDataInfo.forEach((item, index) => {
      if (item.x === value.x && item.y === value.y) {
        err = '该位置已经存在，请重新输入';
      }
      if (item.id == value.id) {
        // updateItem = item;
        updateIndex = index;
      }
    });
    if (err) {
      alert(err);
    } else {
      this.pointDataInfo[updateIndex] = Object.assign(this.pointDataInfo[updateIndex], value);
    }
  }

  // 删除
  deletePointDataInfo(value) {
    let updateIndex;
    this.pointDataInfo.forEach((item, index) => {
      if (item.id == value.id) {
        updateIndex = index;
      }
    });
    if (typeof value.id === 'number' && !isNaN(value.id)) {
      this.pointDataInfo.splice(updateIndex, 1);
    } else {
      alert('该位置不存在');
    }
  }

  clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
      let copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      let copy = [];
      for (let i = 0; i < obj.length; ++i) {
        copy[i] = this.clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      let copy = {};
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.clone(obj[attr]);
        }
      }
      return copy;
    }

    throw new Error('Unable to copy obj! Its type not supported.');
  }
}
