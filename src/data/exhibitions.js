export function getExhibitions() { 
  return exhibitions; 
}

export function findExhibitionById(id){
  return exhibitions.findIndex((exhibition) => (exhibition.id === id));
}

export function exhibitionExists(id){
  let exhibitionLoc = findExhibitionById(id);
  if (exhibitionLoc === -1) { return false; }
  return true;
}

export function getExhibitionById(id){
  let exhibitionLoc = findExhibitionById(id);
  if (exhibitionLoc === -1) { return null; }
  return exhibitions[exhibitionLoc];
}

const exhibitions = [
  {
    "locationRu": "г. Краснодар",
    "year": 2021,
    "src": "https://kultura.krasnodar.ru/news/common/s/common/e/184336",
    "titleEn": "Regional exhibition «Graphics of Kuban»",
    "id": 1,
    "locationEn": "Krasnodar, Russia",
    "titleRu": "Краевая выставка «Графика Кубани»",
  },
  {
    "src": "https://newkuban.ru/news/290947821/",
    "locationRu": "г. Краснодар",
    "locationEn": "Krasnodar, Russia",
    "titleEn": "\"Annual Regional Fall Exhibition\"",
    "year": 2021,
    "titleRu": "Краевая выставка «Осенняя краевая выставка»",
    "id": 2,
  },
  {
    "year": 2020,
    "locationRu": "г. Ростов на Дону",
    "titleEn": "Art Rostov",
    "src": "http://арт-ростов.рф",
    "id": 3,
    "locationEn": "Rostov on Don, Russia",
    "titleRu": "Арт Ростов",
  },
  {
    "locationRu": "г. Краснодар",
    "titleRu": "В сетях искусства",
    "year": 2020,
    "src": "https://kuban.mk.ru/culture/2020/03/02/v-klubegaleree-nebosova-otkrylas-vystavka-v-setyakh-iskusstva.html",
    "id": 4,
    "titleEn": "In Art Networks",
    "locationEn": "Krasnodar, Russia",
  },
  {
    "id": 5,
    "titleRu": "Старый город",
    "locationEn": "Krasnodar, Russia",
    "titleEn": "Old Town",
    "locationRu": "г. Краснодар",
    "year": 2020,
  },
  {
    "locationEn": "Krasnodar, Russia",
    "titleRu": "Живописные параллели",
    "titleEn": "Picturesque parallels",
    "year": 2020,
    "id": 6,
    "src": "https://afisha.yuga.ru/krasnodar/vystavki/zhivopisnye_paralleli/",
    "locationRu": "г. Краснодар",
  },
  {
    "src": "http://www.kublog.ru/afisha/item/13718/",
    "locationEn": "Krasnodar, Russia",
    "year": 2015,
    "titleEn": "Regional exhibition-competition dedicated to the City Day «Urban Romance»",
    "id": 7,
    "titleRu": "Краевая выставка-конкурс, посвященная Дню города «Городской романс»",
    "locationRu": "г. Краснодар",
  },
  {
    "locationRu": "г. Владикавказ",
    "id": 8,
    "titleEn": "Interregional exhibition of young artists «South Wind»",
    "src": "https://vladikavkaz.bezformata.com/listnews/molodih-hudozhnikov-yuzhnij-veter/38249740/",
    "titleRu": "Межрегиональная выставка молодых художников «Южный ветер»",
    "year": 2015,
    "locationEn": "Vladikavkaz, Russia",
  },
  {
    "id": 9,
    "titleEn": "Regional exhibition of Kuban artists «Drawing and watercolor»",
    "locationRu": "г. Краснодар",
    "locationEn": "Krasnodar, Russia",
    "year": 2015,
    "titleRu": "Краевая выставка кубанских художников «Рисунок и акварель»",
  },
  {
    "titleEn": "Regional exhibition-competition dedicated to the City Day «Urban Romance»",
    "locationEn": "Krasnodar, Russia",
    "src": "https://krd.ru/novosti/glavnye-novosti/news_18092014_162050.html",
    "titleRu": "Краевая выставка-конкурс, посвященная Дню города «Городской романс»",
    "id": 10,
    "year": 2014,
    "locationRu": "г. Краснодар",
  },
  {
    "titleRu": "Художественная выставка «Художники России за чистую воду»",
    "src": "https://www.livekuban.ru/news/zhizn/vystavka-khudozhniki-rossii-za-chistuyu-vodu-zarabotaet-v-sochi",
    "locationEn": "Sochi, Russia",
    "titleEn": "Art exhibition «Artists of Russia for Clean water»",
    "locationRu": "г. Сочи",
    "year": 2014,
    "id": 11,
  },
  {
    "titleRu": "Краевая молодежная выставка «Молодость Кубани»",
    "year": 2014,
    "id": 12,
    "titleEn": "Regional youth exhibition «Youth of Kuban»",
    "locationEn": "Krasnodar, Russia",
    "locationRu": "г. Краснодар",
  },
  {
    "titleRu": "XI Межрегиональная художественная выставка «Юг России»",
    "locationEn": "Grozny, Russia",
    "titleEn": "XI Interregional Art Exhibition «South of Russia»",
    "src": "http://www.museum.ru/N51080",
    "year": 2013,
    "locationRu": "г. Грозный",
    "id": 13,
  },
  {
    "titleEn": "Regional exhibition-competition dedicated to the City Day «Urban Romance»",
    "year": 2013,
    "src": "https://www.yuga.ru/news/308288/",
    "titleRu": "Краевая выставка-конкурс, посвященная Дню города «Городской романс»",
    "locationRu": "г. Краснодар",
    "id": 14,
    "locationEn": "Krasnodar, Russia",
  },
  {
    "titleEn": "Regional exhibition-competition dedicated to the City Day «Urban Romance»",
    "year": 2012,
    "titleRu": "Краевая выставка-конкурс, посвященная Дню города «Городской романс»",
    "locationRu": "г. Краснодар",
    "src": "https://kuban24.tv/item/na-vyistavke-gorodskoy-romans-v-krasnodare-predstavyat-rabotyi-mestnyih-hudojnikov",
    "id": 15,
    "locationEn": "Krasnodar, Russia",
  },
  {
    "titleEn": "Regional exhibition dedicated to the 75th anniversary of the formation of the Krasnodar Territory",
    "locationEn": "Krasnodar, Russia",
    "titleRu": "Краевая выставка, посвященная 75-летию образования Краснодарского края",
    "year": 2012,
    "id": 16,
    "locationRu": "г. Краснодар",
  },
  {
    "locationRu": "г. Краснодар",
    "titleRu": "Краевая молодежная выставка",
    "titleEn": "Regional Youth Exhibition",
    "id": 17,
    "locationEn": "Krasnodar, Russia",
    "year": 2012,
  },
  {
    "titleEn": "Regional exhibition dedicated to the City Day",
    "id": 18,
    "titleRu": "Краевая выставка, посвященная Дню города",
    "locationEn": "Krasnodar, Russia",
    "year": 2011,
    "locationRu": "г. Краснодар",
  },
  {
    "src": "https://www.yugopolis.ru/news/culture/2011/02/08/12725/vystavki-jivopis-vystavochnyi-zal-hudojniki",
    "id": 19,
    "titleEn": "Regional exhibition of sketches «Small Motherland in the sketches of Kuban artists»",
    "titleRu": "Краевая выставка этюдов «Малая Родина в этюдах кубанских художников»",
    "year": 2011,
    "locationRu": "г. Краснодар",
    "locationEn": "Krasnodar, Russia",
  },
  {
    "locationEn": "Krasnodar, Russia",
    "titleRu": "Краевая молодежная выставка",
    "locationRu": "г. Краснодар",
    "year": 2010,
    "id": 20,
    "titleEn": "Regional Youth Exhibition",
  },
  {
    "id": 21,
    "locationRu": "г. Краснодар",
    "titleEn": "Regional art exhibition «Kuban Blessed»",
    "src": "https://www.yugopolis.ru/news/culture/2010/12/08/9910/vystavki-pravoslavie-jivopis-skulptura-grafika",
    "titleRu": "Краевая художественная выставка «Кубань Благословенная»",
    "locationEn": "Krasnodar, Russia",
    "year": 2010,
  },
  {
    "id": 24,
    "year": 2021,
    "titleEn": "Towns of Julia Kudina",
    "src": "https://cityposter.ru/news/v-galeree-nebosova-otkrylas-vystavka-goroda-yulii-kudinoj/",
    "locationEn": "Krasnodar, Russia",
    "locationRu": "г. Краснодар",
    "titleRu": "Города Юлии Кудиной",
  },
  {
    "id": 22,
    "src": "https://www.fanagoria.ru/media/entry/v-krasnodare-proshla-ceremoniya-nagrazhdeniya-pobeditelej-premii-fanagoriya-art-2011",
    "year": 2011,
    "locationEn": "Krasnodar, Russia",
    "titleRu": "Фанагория ART 2011",
    "locationRu": "г. Краснодар",
    "titleEn": "Fanagoria ART 2011",
  },
  {
    "locationEn": "Las Vegas, USA",
    "titleRu": "XVII Международный фестиваль молодых талантов «Хрустальная Магнолия»",
    "locationRu": "г. Лас-Вегас, США",
    "id": 23,
    "year": 2013,
    "src": "https://www.kuban.kp.ru/daily/25988.2/2918938/",
    "titleEn": "XVII International Festival of Young Performers «The Crystal Magnolia»",
  }
]