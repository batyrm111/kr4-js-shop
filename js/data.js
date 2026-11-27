// Единый массив товаров интернет-магазина. Цены хранятся числами.
const products = [
  {id:1,title:"iPhone 15 128 ГБ",category:"Смартфоны",price:74990,isAvailable:true,icon:"📱",description:"Смартфон с ярким дисплеем, качественной камерой и высокой производительностью.",popular:true},
  {id:2,title:"Samsung Galaxy S24",category:"Смартфоны",price:82990,isAvailable:true,icon:"📲",description:"Компактный флагман с современными функциями и универсальной камерой.",popular:true},
  {id:3,title:"Xiaomi Redmi Note 13",category:"Смартфоны",price:21990,isAvailable:true,icon:"📱",description:"Практичный смартфон для повседневных задач и развлечений.",popular:false},
  {id:4,title:"MacBook Air M2",category:"Ноутбуки",price:114990,isAvailable:true,icon:"💻",description:"Лёгкий ноутбук для учёбы, работы и творческих задач.",popular:true},
  {id:5,title:"ASUS VivoBook 15",category:"Ноутбуки",price:58990,isAvailable:true,icon:"🖥️",description:"Универсальный ноутбук с большим экраном для дома и офиса.",popular:false},
  {id:6,title:"Наушники Sony WH-1000XM5",category:"Аудио",price:32990,isAvailable:true,icon:"🎧",description:"Беспроводные наушники с активным шумоподавлением.",popular:true},
  {id:7,title:"AirPods Pro 2",category:"Аудио",price:24990,isAvailable:true,icon:"🎵",description:"Компактные наушники с удобной посадкой и чистым звучанием.",popular:false},
  {id:8,title:"JBL Flip 6",category:"Аудио",price:9990,isAvailable:true,icon:"🔊",description:"Портативная колонка для музыки дома и на прогулке.",popular:false},
  {id:9,title:"Apple Watch SE",category:"Аксессуары",price:27990,isAvailable:true,icon:"⌚",description:"Умные часы для уведомлений, активности и повседневного использования.",popular:true},
  {id:10,title:"Зарядное устройство  USB-C",category:"Аксессуары",price:2490,isAvailable:false,icon:"🔌",description:"Компактный адаптер питания для совместимых устройств.",popular:false}
];
const formatPrice = value => new Intl.NumberFormat("ru-RU").format(value) + " ₽";