const info = [
  { ID: "10127000", Phylum: "绿藻门", Genus: "水绵属", Species: "" },
  { ID: "09001027", Phylum: "裸藻门", Genus: "裸藻属", Species: "旋纹裸藻" },
  { ID: "01008000", Phylum: "硅藻门", Genus: "舟形藻属", Species: "" },
  { ID: "11002000", Phylum: "隐藻门", Genus: "隐藻属", Species: "" },
  { ID: "10080000", Phylum: "绿藻门", Genus: "鞘藻属", Species: "" },
  { ID: "09001015", Phylum: "裸藻门", Genus: "裸藻属", Species: "静裸藻" },
  { ID: "10044097", Phylum: "绿藻门", Genus: "新月藻属", Species: "" },
  { ID: "02009000", Phylum: "蓝藻门", Genus: "鱼腥藻属", Species: "" },
  { ID: "09001016", Phylum: "裸藻门", Genus: "裸藻属", Species: "易变裸藻" },
  { ID: "10044000", Phylum: "绿藻门", Genus: "新月藻属", Species: "" },
  { ID: "10054000", Phylum: "绿藻门", Genus: "转板藻属", Species: "" },
  { ID: "10122000", Phylum: "绿藻门", Genus: "双星藻属", Species: "" },
  { ID: "10055000", Phylum: "绿藻门", Genus: "梭形鼓藻属", Species: "" },
  { ID: "10044037", Phylum: "绿藻门", Genus: "新月藻属", Species: "喙状新月藻" },
  { ID: "10001000", Phylum: "绿藻门", Genus: "衣藻属", Species: "" },
  { ID: "10042000", Phylum: "绿藻门", Genus: "丝藻属", Species: "" },
  { ID: "10043000", Phylum: "绿藻门", Genus: "角星鼓藻属", Species: "" },
  { ID: "01010000", Phylum: "硅藻门", Genus: "异极藻属（异端藻属）", Species: "" },
  { ID: "02012000", Phylum: "蓝藻门", Genus: "颤藻属", Species: "" },
  { ID: "01011000", Phylum: "硅藻门", Genus: "桥弯藻属", Species: "" },
  { ID: "09001012", Phylum: "裸藻门", Genus: "裸藻属", Species: "纤细裸藻" },
  { ID: "10045000", Phylum: "绿藻门", Genus: "鼓藻属", Species: "" },
  { ID: "09001018", Phylum: "裸藻门", Genus: "裸藻属", Species: "带形裸藻" },
  { ID: "09001000", Phylum: "裸藻门", Genus: "裸藻属", Species: "" },
  { ID: "09001001", Phylum: "裸藻门", Genus: "裸藻属", Species: "绿色裸藻" },
  { ID: "10054001", Phylum: "绿藻门", Genus: "转板藻属", Species: "梯接转板藻" },
  { ID: "01009000", Phylum: "硅藻门", Genus: "羽纹藻属", Species: "" },
  { ID: "02008000", Phylum: "蓝藻门", Genus: "念珠藻属", Species: "" },
  { ID: "10165001", Phylum: "绿藻门", Genus: "独球藻属", Species: "独球藻" },
  { ID: "01004000", Phylum: "硅藻门", Genus: "脆杆藻属", Species: "" },
  { ID: "09001003", Phylum: "裸藻门", Genus: "裸藻属", Species: "三梭裸藻" },
  { ID: "10114001", Phylum: "绿藻门", Genus: "螺带鼓藻属", Species: "螺带鼓藻" },
  { ID: "07002000", Phylum: "金藻门", Genus: "黄群藻属（合尾藻属）", Species: "" },
  { ID: "07001000", Phylum: "金藻门", Genus: "鱼鳞藻属", Species: "" },
  { ID: "09003117", Phylum: "裸藻门", Genus: "囊裸藻属", Species: "" },
  { ID: "01006000", Phylum: "硅藻门", Genus: "卵形藻属", Species: "" },
  { ID: "09001005", Phylum: "裸藻门", Genus: "裸藻属", Species: "尖尾裸藻" },
  { ID: "10181000", Phylum: "绿藻门", Genus: "微孢藻属", Species: "" },
  { ID: "06003000", Phylum: "甲藻门", Genus: "多甲藻属", Species: "" },
  { ID: "10008001", Phylum: "绿藻门", Genus: "实球藻属", Species: "实球藻" },
  { ID: "01026000", Phylum: "硅藻门", Genus: "海链藻属", Species: "" },
  { ID: "01034001", Phylum: "硅藻门", Genus: "双尾藻属", Species: "布氏双尾藻" },
  { ID: "10004000", Phylum: "绿藻门", Genus: "盘藻属", Species: "" },
  { ID: "10079000", Phylum: "绿藻门", Genus: "毛鞘藻属", Species: "" },
  { ID: "10095000", Phylum: "绿藻门", Genus: "圆丝鼓藻属", Species: "" },
  { ID: "01013000", Phylum: "硅藻门", Genus: "双菱藻属", Species: "" },
  { ID: "01018000", Phylum: "硅藻门", Genus: "布纹藻属（双缝藻属）", Species: "" },
  { ID: "06001000", Phylum: "甲藻门", Genus: "裸甲藻属", Species: "" },
  { ID: "09001006", Phylum: "裸藻门", Genus: "裸藻属", Species: "梭形裸藻" },
  { ID: "10037005", Phylum: "绿藻门", Genus: "盘星藻属", Species: "短棘盘星藻" },
  { ID: "10009000", Phylum: "绿藻门", Genus: "空球藻属", Species: "" },
  { ID: "01007002", Phylum: "硅藻门", Genus: "辐节藻属", Species: "紫心辐节藻" },
  { ID: "01023001", Phylum: "硅藻门", Genus: "波缘藻属(波纹藻属)", Species: "草鞋形波缘藻" },
  { ID: "10217016", Phylum: "绿藻门", Genus: "单针藻属", Species: "" },
  { ID: "09001010", Phylum: "裸藻门", Genus: "裸藻属", Species: "血红裸藻" },
  { ID: "10034000", Phylum: "绿藻门", Genus: "胶网藻属（网球藻属）", Species: "" },
  { ID: "10037000", Phylum: "绿藻门", Genus: "盘星藻属", Species: "" },
  { ID: "10045090", Phylum: "绿藻门", Genus: "鼓藻属", Species: "珍珠状鼓藻" },
  { ID: "10083006", Phylum: "绿藻门", Genus: "柱形鼓藻属", Species: "polymorphum藻" },
  { ID: "01039001", Phylum: "硅藻门", Genus: "海线藻属", Species: "菱形海线藻" },
  { ID: "06008001", Phylum: "甲藻门", Genus: "原甲藻属", Species: "海洋原甲藻" },
  { ID: "02002000", Phylum: "蓝藻门", Genus: "微囊藻属", Species: "" },
  { ID: "09002010", Phylum: "裸藻门", Genus: "扁裸藻属", Species: "梨形扁裸藻" },
  { ID: "10037001", Phylum: "绿藻门", Genus: "盘星藻属", Species: "二角盘星藻" },
  { ID: "10176000", Phylum: "绿藻门", Genus: "克里藻属", Species: "" },
  { ID: "06014001", Phylum: "甲藻门", Genus: "鳍藻属(翅甲藻属)", Species: "渐尖鳍藻 " },
  { ID: "10088000", Phylum: "绿藻门", Genus: "多棘鼓藻属", Species: "" },
  { ID: "01005000", Phylum: "硅藻门", Genus: "针杆藻属", Species: "" },
  { ID: "01007000", Phylum: "硅藻门", Genus: "辐节藻属", Species: "" },
  { ID: "07006000", Phylum: "金藻门", Genus: "锥囊藻属（钟罩藻属）", Species: "" },
  { ID: "09025001", Phylum: "裸藻门", Genus: "萼胞藻属", Species: "泡状萼胞藻" },
  { ID: "10038000", Phylum: "绿藻门", Genus: "栅藻属", Species: "" },
  { ID: "01033000", Phylum: "硅藻门", Genus: "盒形藻属", Species: "" },
  { ID: "10053003", Phylum: "绿藻门", Genus: "竹枝藻属", Species: "羽枝竹枝藻" },
  { ID: "10082004", Phylum: "绿藻门", Genus: "棒形鼓藻属", Species: "基纳汉棒形鼓藻" },
  { ID: "10003001", Phylum: "绿藻门", Genus: "绿梭藻属", Species: "长绿梭藻" },
  { ID: "02013000", Phylum: "蓝藻门", Genus: "席藻属", Species: "" },
  { ID: "09028001", Phylum: "裸藻门", Genus: "长梭藻属", Species: "针形长梭藻" },
  { ID: "01024000", Phylum: "硅藻门", Genus: "圆筛藻属", Species: "" },
  { ID: "06002001", Phylum: "甲藻门", Genus: "角藻属(角甲藻属)", Species: "角甲藻(飞燕角藻)" },
  { ID: "01009002", Phylum: "硅藻门", Genus: "羽纹藻属", Species: "大羽纹藻" },
  { ID: "10075000", Phylum: "绿藻门", Genus: "微星鼓藻属(小星藻属)", Species: "" },
  { ID: "01020001", Phylum: "硅藻门", Genus: "平板藻属", Species: "窗格平板藻" },
  { ID: "09002009", Phylum: "裸藻门", Genus: "扁裸藻属", Species: "三棱扁裸藻" },
  { ID: "02001000", Phylum: "蓝藻门", Genus: "色球藻属", Species: "膨胀色球藻" },
  { ID: "02022000", Phylum: "蓝藻门", Genus: "鞘丝藻属", Species: "" },
  { ID: "10057000", Phylum: "绿藻门", Genus: "肾形藻属", Species: "" },
  { ID: "10045209", Phylum: "绿藻门", Genus: "鼓藻属", Species: "" },
  { ID: "10033000", Phylum: "绿藻门", Genus: "月牙藻属", Species: "" },
  { ID: "01015009", Phylum: "硅藻门", Genus: "菱形藻属", Species: "谷皮菱形藻" },
  { ID: "01009008", Phylum: "硅藻门", Genus: "羽纹藻属", Species: "微绿羽纹藻" },
  { ID: "01037001", Phylum: "硅藻门", Genus: "弯角藻属", Species: "浮动弯角藻（短角弯角藻）" },
  { ID: "01010004", Phylum: "硅藻门", Genus: "异极藻属（异端藻属）", Species: "尖异极藻" },
  { ID: "01049001", Phylum: "硅藻门", Genus: "齿状藻属", Species: "长耳齿状藻" },
  { ID: "10039000", Phylum: "绿藻门", Genus: "空星藻属", Species: "" },
  { ID: "10043067", Phylum: "绿藻门", Genus: "角星鼓藻属", Species: "brachiatum藻" },
  { ID: "10045004", Phylum: "绿藻门", Genus: "鼓藻属", Species: "光滑鼓藻" },
  { ID: "10076000", Phylum: "绿藻门", Genus: "凹顶鼓藻属", Species: "" },
  { ID: "10116000", Phylum: "绿藻门", Genus: "红球藻属 ", Species: "" },
  { ID: "01011003", Phylum: "硅藻门", Genus: "桥弯藻属", Species: "粗糙桥弯藻" },
  { ID: "06021000", Phylum: "甲藻门", Genus: "哈卡藻属", Species: "" },
  { ID: "01002000", Phylum: "硅藻门", Genus: "小环藻属", Species: "" },
  { ID: "09002005", Phylum: "裸藻门", Genus: "扁裸藻属", Species: "长尾扁裸藻" },
  { ID: "01069000", Phylum: "硅藻门", Genus: "斜纹藻属", Species: "" },
  { ID: "09004000", Phylum: "裸藻门", Genus: "袋鞭藻属", Species: "" },
  { ID: "10064001", Phylum: "绿藻门", Genus: "双形藻属", Species: "月形双形藻" },
  { ID: "01020000", Phylum: "硅藻门", Genus: "平板藻属", Species: "" },
  { ID: "06016000", Phylum: "甲藻门", Genus: "原多甲藻属", Species: "" },
  { ID: "09017001", Phylum: "裸藻门", Genus: "内管藻属", Species: "内管藻" },
  { ID: "02012012", Phylum: "蓝藻门", Genus: "颤藻属", Species: "泥生颤藻" },
  { ID: "10024002", Phylum: "绿藻门", Genus: "多芒藻属", Species: "多芒藻" },
];

const idFilter = [...new Set(info.map((i) => i.ID))].map((i) => {
  return {
    text: i,
    value: i,
  };
});

const phylumFilter = [...new Set(info.map((i) => i.Phylum))].map((i) => {
  return {
    text: i,
    value: i,
  };
});

const genusFilter = [...new Set(info.map((i) => i.Genus))].map((i) => {
  return {
    text: i,
    value: i,
  };
});

const speciesFilter = [...new Set(info.map((i) => i.Species))].map((i) => {
  return {
    text: i,
    value: i,
  };
});

const id2name = {};
info.forEach((item) => {
  id2name[item.ID] = item.Phylum + item.Genus + item.Species;
});

export { info, idFilter, phylumFilter, genusFilter, speciesFilter, id2name };
