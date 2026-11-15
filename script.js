document.addEventListener('DOMContentLoaded', () => {

const questions = [
  {
    question: "Чим друкують текст на комп'ютері?",
    answers: [
      { name: "Мишка", image: "https://api.e-server.com.ua/storage/148447/rs/U0763728_big___rs_1200_1200.jpg" },
      { name: "Клавіатура", image: "https://content.secur.ua/goods/images/big/kb-u-103-ua01.webp" },
      { name: "Монітор", image: "https://img-artline.ams3.cdn.digitaloceanspaces.com/images/products/23831/gallery/252296/600_gallery_17143840906557_0.webp" },
      { name: "Колонки", image: "https://www.aks.ua/userfiles/images/unnamed%20(5).jpg" },
    ],
    correct: "Клавіатура",
    info: "Клавіатура потрібна для введення тексту."
  },
  {
    question: "На чому показується зображення комп'ютера?",
    answers: [
      { name: "Принтер", image: "https://dixi.education/wp-content/uploads/epson-l222.jpg" },
      { name: "Монітор", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/LG_L194WT-SF_LCD_monitor.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original" },
      { name: "Мишка", image: "https://portativ.ua/media/cache/images/1/image/750x700/602f0fa2c1f0d1ba5e241f914e856ff9/catalog/product/l/f6e8cd8720f8f2290261f16dce882033.jpg" },
      { name: "Мікрофон", image: "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/126827/c/slideru3oC6t-desktop.webp" },
    ],
    correct: "Монітор",
    info: "Монітор показує зображення та інформацію."
  },
  {
    question: "Чим керують курсором комп'ютера?",
    answers: [
      { name: "Навушники", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
      { name: "Мишка", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400" },
      { name: "Мікрофон", image: "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/126827/c/slideru3oC6t-desktop.webp" },
      { name: "Камера", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNc1NtkDKzPAIgI4M2LoqR0kJ99MXsi7EVHxn1X4mTWvLGyG9hmhpywnQ&s=10" },
    ],
    correct: "Мишка",
    info: "Комп'ютерна мишка допомагає керувати курсором."
  },
  {
    question: "Чим можна слухати музику?",
    answers: [
      { name: "Камера", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNc1NtkDKzPAIgI4M2LoqR0kJ99MXsi7EVHxn1X4mTWvLGyG9hmhpywnQ&s=10" },
      { name: "Навушники", image: "https://my-apple.com.ua/image/catalog/products/airpods/airpods-max/silver-1.png" },
      { name: "Клавіатура", image: "https://battery.net.ua/wm.php?img=product%2F6038%2F6008c99530c43%2F9e0405fd_f2ec_11e6_9154_902b346c038f_1000x1000.jpg&text=PK130AU3004"},
      { name: "Принтер", image: "https://elmir.ua/img/og-p-42000/0/0/elmir.jpg" },
    ],
    correct: "Навушники",
    info: "Навушники допомагають слухати музику та звуки.",
  },
  {
    question: "Який пристрій друкує документи?",
    answers: [
      { name: "Монітор", image: "https://click.ua/content/shop/products/188215/photos/monitor-asgard-gaming-27-as275qm-ips-black-200hz-800-800-f010.jpg" },
      { name: "Мишка", image: "https://defis.ua/image/cache/catalog/2/22/22057-500x500.jpg" },
      { name: "Клавіатура", image: "https://battery.net.ua/wm.php?img=product%2F6038%2F6008c99530c43%2F9e0405fd_f2ec_11e6_9154_902b346c038f_1000x1000.jpg&text=PK130AU3004" },
      { name: "Принтер", image: "https://dixi.education/wp-content/uploads/epson-l222.jpg" },
    ],
    correct: "Принтер",
    info: "Принтер друкує документи та фотографії."
  },
  {
    question: "Який пристрій показує зображення на великому екрані?",
    answers: [
      { name: "Клавіатура", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
      { name: "Принтер", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400" },
      { name: "Проєктор", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400" },
      { name: "Мікрофон", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" },
    ],
    correct: "Проєктор",
    info: "Проєктор виводить зображення на великий екран або стіну."
  },
  {
    question: "Чим записують голос на комп'ютері?",
    answers: [
      { name: "Мікрофон", image: "https://soundmagcdn.fra1.cdn.digitaloceanspaces.com/product/126827/c/slideru3oC6t-desktop.webp" },
      { name: "Монітор", image: "https://ipress.ua/media/gallery/full/a/d/adv_20230802_nitor.jpg" },
      { name: "Мишка", image: "https://api.e-server.com.ua/storage/148447/rs/U0763728_big___rs_1200_1200.jpg" },
      { name: "Принтер", image: "https://dixi.education/wp-content/uploads/epson-l222.jpg" },
    ],
    correct: "Мікрофон",
    info: "Мікрофон записує голос та інші звуки."  
  },
  {
       question: "Для чого використовують JavaScript?",
    answers: [
      { name: "Створення інтерактивності на сайтах", image: "https://avada-media.ua/wp-content/uploads/2024/12/website-headph.png" },
      { name: "Малювання на папері", image: "https://cdn.izhytomyryanyn.com/wp-content/uploads/sites/23/2022/02/17155838/1418-244695826.jpg" },
      { name: "Прослуховування музики", image: "https://s.0532.ua/section/promonewsintext/upload/images/promo/intext/000/055/657/1_6522dcb6e53d8.png" },
      { name: "Друк документів", image: "https://images.prom.ua/2069934934_w640_h640_2069934934.jpg" },
    ],
    correct: "Створення інтерактивності на сайтах",
    info: "JavaScript робить сайти інтерактивними."
  },
  {
        question: "Яка столиця України?",
  answers: [
    { name: "Львів", image: "https://ukr-prokat.com/wp-content/uploads/2020/07/lviv.jpg" },
    { name: "Київ", image: "https://spcdn.shortpixel.ai/spio/ret_img+q_cdnize+to_auto+s_webp:avif/portalhistoryua.com/wp-content/uploads/2024/05/majdan-nezalezhnosti-v-kyyevi-glib-albovskyj-unsplash.jpg" },
    { name: "Одеса", image: "https://inside-ua.com/files/places/pliazh-arkadiia-1.500x625.webp?6a843b26186e636c2310cfe0c2a0e38a" },
    { name: "Харків", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0068.jpg/330px-%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0068.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" }
  ],
  correct: "Київ",
  info: "Київ — столиця України."
},
{
     question: "Хто написав поему «Катерина»?",
  answers: [
    { name: "Іван Франко", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WDP86fScZCb-Cy1JmW30JCrMt_IVabuRB9crr3B4wL2PsWyiCDZsrrM9&s=10" },
    { name: "Тарас Шевченко", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg/500px-Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { name: "Леся Українка", image: "https://cdn4.suspilne.media/images/resize/400x1.78/9e6c7a10606983ef.jpg" },
    { name: "Панас Мирний", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DT2uJPDchJRPLYckiC1yf_LENJbwgMnNH--SzDlqbVbfiIV8RSRYo70w&s=10" }
  ],
  correct: "Тарас Шевченко",
  info: "Тарас Шевченко написав поему «Катерина» у 1838 році."
},
{
     question: "Хто є автором твору «Захар Беркут»?",
  answers: [
    { name: "Іван Франко", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WDP86fScZCb-Cy1JmW30JCrMt_IVabuRB9crr3B4wL2PsWyiCDZsrrM9&s=10" },
    { name: "Михайло Коцюбинський", image: "https://static.nv.ua/shared/system/MediaPhoto/images/000/507/435/original/17818c29497e1e6c8015999b440839cc.png?q=85&stamp=20241016153008&f=webp" },
    { name: "Іван Нечуй-Левицький", image: "https://uinp.gov.ua/storage/app/public/uploads/2019-11-27/11/BEb1574845282dib.jpeg" },
    { name: "Тарас Шевченко", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg/500px-Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
  ],
  correct: "Іван Франко",
  info: "Іван Франко написав історичну повість «Захар Беркут»."
},
{
      question: "Яке справжнє ім'я Лесі Українки?",
  answers: [
    { name: "Ольга Кобилянська", image: "https://harpersbazaar.com.ua/upload/image/kobilyanska.jpg" },
    { name: "Лариса Косач", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse_zG-yVKnKgLAkvstDulOni40N-ZSRbtUHHlqA2MJYGc0brddqlD2k0&s=10" },
    { name: "Марія Вілінська", image: "https://fs02.vseosvita.ua/0201k9om-2af4-450x675.jpg" },
    { name: "Олена Пчілка", image: "https://uinp.gov.ua/storage/app/public/uploads/2019-07-17/11/YLO1563350725GMM.jpeg" },
  ],
  correct: "Лариса Косач",
  info: "Леся Українка — літературний псевдонім Лариси Петрівни Косач."
},
{
question: "Хто написав «Кайдашеву сім'ю»?",
  answers: [
    { name: "Іван Нечуй-Левицький", image: "https://uinp.gov.ua/storage/app/public/uploads/2019-11-27/11/BEb1574845282dib.jpeg" },
    { name: "Іван Франко", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WDP86fScZCb-Cy1JmW30JCrMt_IVabuRB9crr3B4wL2PsWyiCDZsrrM9&s=10" },
    { name: "Панас Мирний", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DT2uJPDchJRPLYckiC1yf_LENJbwgMnNH--SzDlqbVbfiIV8RSRYo70w&s=10" },
    { name: "Григорій Сковорода", image: "https://onlyart.org.ua/wp-content/uploads/2013/09/fullsize.jpg" },
  ],
  correct: "Іван Нечуй-Левицький",
  info: "Повість «Кайдашева сім'я» написав Іван Нечуй-Левицький."
},
{
     question: "Хто написав драму-феєрію «Лісова пісня»?",
  answers: [
    { name: "Ольга Кобилянська", image: "https://uinp.gov.ua/storage/app/public/uploads/2019-11-27/10/FEQ1574842968hkQ.jpeg" },
    { name: "Леся Українка", image: "https://www.tdmu.edu.ua/library/wp-content/uploads/sites/25/2026/02/portret.jpg" },
    { name: "Олена Пчілка", image: "https://uinp.gov.ua/storage/app/public/uploads/2019-07-17/11/YLO1563350725GMM.jpeg" },
    { name: "Марко Вовчок", image: "https://dovidka.biz.ua/wp-content/uploads/2015/11/marko-vovchok-biohrafiya.jpeg" },
  ],
  correct: "Леся Українка",
  info: "«Лісова пісня» — відомий твір Лесі Українки."
},
{
    question: "Хто написав роман «Хіба ревуть воли, як ясла повні?»?",
  answers: [
    { name: "Панас Мирний", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DT2uJPDchJRPLYckiC1yf_LENJbwgMnNH--SzDlqbVbfiIV8RSRYo70w&s=10" },
    { name: "Іван Франко", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WDP86fScZCb-Cy1JmW30JCrMt_IVabuRB9crr3B4wL2PsWyiCDZsrrM9&s=10" },
    { name: "Тарас Шевченко", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg/500px-Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { name: "Михайло Коцюбинський", image: "https://static.nv.ua/shared/system/MediaPhoto/images/000/507/435/original/17818c29497e1e6c8015999b440839cc.png?q=85&stamp=20241016153008&f=webp" },
  ],
  correct: "Панас Мирний",
  info: "Роман написаний Панасом Мирним у співавторстві з Іваном Біликом."
},
{
      question: "Хто є автором збірки «Кобзар»?",
  answers: [
    { name: "Іван Франко", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WDP86fScZCb-Cy1JmW30JCrMt_IVabuRB9crr3B4wL2PsWyiCDZsrrM9&s=10" },
    { name: "Тарас Шевченко", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg/500px-Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { name: "Григорій Сковорода", image: "https://mam-poltava.org.ua/ckeditor/photos/1/62825dffd3e38.jpg" },
    { name: "Павло Тичина", image: "https://man.rv.ua/wp-content/uploads/2021/01/111-3.jpg" },
  ],
  correct: "Тарас Шевченко",
  info: "Перше видання збірки «Кобзар» вийшло у 1840 році."
},
{
     question: "Хто написав твір «Тіні забутих предків»?",
  answers: [
    { name: "Михайло Коцюбинський", image: "https://static.nv.ua/shared/system/MediaPhoto/images/000/507/435/original/17818c29497e1e6c8015999b440839cc.png?q=85&stamp=20241016153008&f=webp" },
    { name: "Іван Франко", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WDP86fScZCb-Cy1JmW30JCrMt_IVabuRB9crr3B4wL2PsWyiCDZsrrM9&s=10" },
    { name: "Олександр Довженко", image: "https://www.vilni.school/wp-content/uploads/2025/09/oleksandr-dovzhenko-biohrafiya.jpg" },
    { name: "Панас Мирний", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DT2uJPDchJRPLYckiC1yf_LENJbwgMnNH--SzDlqbVbfiIV8RSRYo70w&s=10" },
  ],
  correct: "Михайло Коцюбинський",
  info: "Повість «Тіні забутих предків» написав Михайло Коцюбинський."
},
{
      question: "У якому році Наполеон став імператором Франції?",
  answers: [
    { name: "1799", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Elongated_circle_1799.svg/3840px-Elongated_circle_1799.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
    { name: "1804", image: "https://www.shutterstock.com/image-illustration/red-1804-number-3d-effect-260nw-2027041787.jpg" },
    { name: "1812", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6pNNRi1R93dyX0n74M9fl2yKJt194eflxLWqs-pcrX4CTM24cpxl868&s=10" },
    { name: "1815", image: "https://cdn2.penguin.com.au/covers/original/9781448103294.jpg" },
  ],
  correct: "1804",
  info: "Наполеон Бонапарт став імператором Франції у 1804 році."
},
{
     question: "У якій битві Наполеон зазнав остаточної поразки?",
  answers: [
    { name: "Битва під Аустерліцом", image: "https://www.jnsm.com.ua/ures/img/Austerlitz.jpg" },
    { name: "Битва під Ватерлоо", image: "https://vue.gov.ua/images/6/68/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%BF%D1%96%D0%B4_%D0%92%D0%B0%D1%82%D0%B5%D1%80%D0%BB%D0%BE%D0%BE_2.jpg" },
    { name: "Битва під Бородіно", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIukx1lw0xE5ViT5Bv15NTee561xE0e8YklBRrcfWr6Q&s=10" },
    { name: "Битва під Єною", image: "https://www.jnsm.com.ua/ures/img/Berlin_Napoleon.jpg" },
  ],
  correct: "Битва під Ватерлоо",
  info: "У битві під Ватерлоо в 1815 році Наполеон зазнав остаточної поразки."
},
{
  question: "У якому році Наполеон вторгся в Російську імперію?",
  answers: [
    { name: "1805", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Attaque_et_prise_du_pont_du_vieux_ch%C3%A2teau_de_V%C3%A9rone%2C_le_18_octobre_1805.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    { name: "1809", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Raszyn_1809.JPG/330px-Raszyn_1809.JPG?utm_source=ru.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { name: "1812", image: "https://upload.wikimedia.org/wikipedia/ru/9/91/1812_documentary.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original" },
    { name: "1815", image: "https://miro.medium.com/0*fd28lYhGDMt3prIl" },
  ],
  correct: "1812",
  info: "У 1812 році Наполеон розпочав похід на Російську імперію."
},
{
      question: "У якому році почалася Друга світова війна?",
  answers: [
    { name: "1938", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQf1RmvRTn2-1LsrMoQc5w6bT2djhJEQWkTO5jHCjC08pj6vGoxMt-5ed&s=10" },
    { name: "1939", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIa08MJEqifRuQgeIjUq3YSDO1SKE3N1DCBXDMVA8td4K63L4lG6D2h8pb&s=10" },
    { name: "1941", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/22june1941.jpg/250px-22june1941.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { name: "1945", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsAmTCxEFBpD77HJkcCTXURHHADt-L9Ei2ECKn8N7Ck5W0DbXuwXvRU_o&s=10" },
  ],
  correct: "1939",
  info: "Друга світова війна почалася 1 вересня 1939 року."
},
{  
     question: "У якому році закінчилася Друга світова війна?",
  answers: [
    { name: "1943", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrhml2ljhuOwCJIMyuEEOzyBEldRVt6YVAoPDZsROUA&s=10" },
    { name: "1944", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfOfpCFa9r4OnGCDq_C29_hpQ08O-5OGb5n3oeFwU8L-esbwM6QdIamBD&s=10" },
    { name: "1945", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu45dAghgnExCFIexdXNzCtQJqne5hZQghy8OKdNEeubzAN_bS4ftG220&s=10" },
    { name: "1946", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN86wS4ifoZ_PzlUdHdHnINUL_9ejQSyc9HR2UCrYSbJ3LgoPURqm2zVM&s=10" },
  ],
  correct: "1945",
  info: "Друга світова війна завершилася у 1945 році."
},
{  
     question: "На які японські міста скинули атомні бомби у 1945 році?",
  answers: [
    { name: "Токіо і Кіото", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP0XwkL5mOlYbUDyv5eec8TEF1bRAWj4iGDOBJGHJlH4TKaSFF_oLtth9&s=10" },
    { name: "Хіросіма і Нагасакі", image: "https://assets.nationbuilder.com/ican/pages/12845/meta_images/original/hiroshima.jpg?1783394215" },
    { name: "Осака і Кобе", image: "https://cruguide.com/images/blog/115-451.jpg" },
    { name: "Йокогама і Токіо", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJnfjvUNaXJBaGxB8ULcN2eTowb5uiY-RwwVwQ0PuUuRGTfBJWpjkTHPr&s=10" },
  ],
  correct: "Хіросіма і Нагасакі",
  info: "У серпні 1945 року атомні бомби були скинуті на Хіросіму та Нагасакі."
},
{  
     question: "У якому році почалася Перша світова війна?",
  answers: [
    { name: "1912", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/St%C3%B6wer_Titanic.jpg/1280px-St%C3%B6wer_Titanic.jpg?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=thumbnail" },
    { name: "1914", image: "https://play-lh.googleusercontent.com/s1cR_UANWzkdivsct4Fa-9vrhzijltFTRaIl-PA4Hfxy3hdgb_lKdRm_uEj-RdPCXac" },
    { name: "1916", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_Iz38GSgRsgaNpbKVO230IP2le4XMqTTRQhgYv6LJQ&s=10" },
    { name: "1918", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Emergency_hospital_during_Influenza_epidemic%2C_Camp_Funston%2C_Kansas_-_NCP_1603.jpg?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original" },
  ],
  correct: "1914",
  info: "Перша світова війна почалася у 1914 році."
},
{  
    question: "Хто був лідером нацистської Німеччини під час Другої світової війни?",
  answers: [
    { name: "Наполеон", image: "https://static.wikia.nocookie.net/nobility/images/5/54/David_-_Napoleon_crossing_the_Alps.jpg/revision/latest?cb=20210606092431&path-prefix=ru" },
    { name: "Адольф Гітлер", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fjxFRv71yX-94JbfFpmdTd_tjeUyepkJPC18c-TxrrlMKZTDlueSzOQn&s=10" },
    { name: "Вінстон Черчилль", image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/c5c8/live/9f5f3d10-a8c4-11ef-8ab9-9192db313061.jpg.webp" },
    { name: "Йосип Сталін", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Joseph_Stalin%2C_1912.jpg/250px-Joseph_Stalin%2C_1912.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
  ],
  correct: "Адольф Гітлер",
  info: "Адольф Гітлер очолював нацистську Німеччину."
},
{  
      question: "У якому році Україна проголосила незалежність?",
  answers: [
    { name: "1989", image: "https://cdn.theatlantic.com/media/img/photo/2019/10/30-years-ago-a-look-back-at-1989/n01_AP890605094/main_1500.jpg" },
    { name: "1990", image: "https://gdb.rferl.org/cbc06d47-f099-4167-b866-ec1e1157571a_w1080_r0_s.jpg" },
    { name: "1991", image: "https://forbes.ua/static/storage/thumbs/1200x900/9/b4/klka7w---c1875x1405x40sx0s-wt--8b36fbc4af13bddeae1e76e6f2b98b49.jpg" },
    { name: "1992", image: "https://images.kinorium.com/movie/poster/10434506/w1500_52447639.jpg" },
  ],
  correct: "1991",
  info: "24 серпня 1991 року Україна проголосила незалежність."
},
{  
     question: "Яка подія стала приводом до початку Першої світової війни?",
  answers: [
    { name: "Вбивство Франца Фердинанда", image: "https://gdb.rferl.org/42b0659c-1169-45ec-af41-cce6630133c7_w1080_r0_s.jpg" },
    { name: "Напад на Польщу", image: "https://zbruc.eu/sites/default/files/pictures/07_1939_09_niemiecka_kolumna_pancerna_w_marszu.jpg" },
    { name: "Падіння Берлінської стіни", image: "https://glavcom.ua/img/article/6388/26_main-v1573282232.jpg" },
    { name: "Битва під Ватерлоо", image: "https://hromadske.radio/_next/image?url=https%3A%2F%2Fstatic.hromadske.radio%2F2022%2F07%2Fvaterlo.jpg&w=1366&q=75" },
  ],
  correct: "Вбивство Франца Фердинанда",
  info: "Убивство ерцгерцога Франца Фердинанда в Сараєві у 1914 році стало приводом до війни."
},
{  
    question: "У якому році впала Берлінська стіна?",
  answers: [
    { name: "1985", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipa-q1nDTwGUqEkvnrN6b5YEs5aJ_O-adI2_CAqJFKlVaVgcKZdhZ4wQ&s=10" },
    { name: "1987", image: "https://t3.ftcdn.net/jpg/17/52/38/08/360_F_1752380866_LkrojD5EOAySHwhjRJA3pPX5zYinLFAF.jpg" },
    { name: "1989", image: "https://cdn.theatlantic.com/media/img/photo/2019/10/30-years-ago-a-look-back-at-1989/n01_AP890605094/main_1500.jpg" },
    { name: "1991", image: "https://www.shutterstock.com/image-vector/1991-birthday-celebration-logo-icon-260nw-2458516525.jpg" },
  ],
  correct: "1989",
  info: "Берлінська стіна впала 9 листопада 1989 року."
},
{
   question: "За правління якої династії почали об'єднувати окремі ділянки Великої китайської стіни?",
  answers: [
    { name: "Цінь", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrDNx4-DRBAQuB4vaTB6fulNLFr29yNk2UuUYo7RVfw&s=10" },
    { name: "Хань", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpWhBE7q2FV5LU5p1sFWtzwXQshFKYsE8pFPrM6axrC-BT8xfksPA9m8&s=10" },
    { name: "Мін", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkURWnzmAfI-dEgGYuM724n-1NqyMe6QBkdolB1FT2g&s=10" },
    { name: "Тан", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjxwCCyyYjxqLWy2XJIvwkcnzYVpg2ck7HVKtYVGA1g&s=10" }
  ],
   correct: "Хань",
    info: "Супер."
},
{
question: "Яка головна мета об'єднання оборонних стін за правління династії Цінь?",
answers: [
  { name: "Захист від кочових племен із півночі", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d" },
  { name: "Захоплення нових територій на півдні", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455" },
  { name: "Створення торговельного шляху", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
  { name: "Захист морських кордонів", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b" }
],
correct: "Захист від кочових племен із півночі",
info: "Об'єднання оборонних стін мало захищати територію Китаю від нападів кочових племен, які жили на півночі."
},
];


  let current = 0;
  let score = 0;
  let answered = false;

  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next");
  const gameEl = document.getElementById("game");
  const resultEl = document.getElementById("result");
  const numberEl = document.getElementById("number");
  const scoreEl = document.getElementById("score");
  const progressBar = document.getElementById("progress-bar");
  const finalScoreEl = document.getElementById("final-score");
  const messageEl = document.getElementById("message");
  const restartBtn = document.getElementById("restart");

  const requiredElements = [
    questionEl, answersEl, feedbackEl, nextBtn, gameEl, resultEl,
    numberEl, scoreEl, progressBar, finalScoreEl, messageEl, restartBtn
  ];

  if (requiredElements.some(element => !element)) {
    console.error("Не знайдено один або кілька HTML-елементів вікторини. Перевір index.html.");
    return;
  }

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function updateScore() {
    scoreEl.textContent = `⭐ ${score} балів`;
  }

  function showQuestion() {
    answered = false;
    const q = questions[current];

    numberEl.textContent = `Раунд ${current + 1} із ${questions.length}`;
    updateScore();
    progressBar.style.width = `${(current / questions.length) * 100}%`;

    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.textContent = "";
    feedbackEl.style.color = "";
    nextBtn.hidden = true;

    shuffle(q.answers).forEach(answer => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer";

      const img = document.createElement("img");
      img.src = answer.image;
      img.alt = answer.name;
      img.loading = "lazy";
      img.onerror = () => {
        img.onerror = null;
        img.src = "https://placehold.co/400x250/211d3b/ffffff?text=Image";
      };

      const label = document.createElement("div");
      label.className = "label";
      label.textContent = answer.name;

      button.append(img, label);
      button.addEventListener("click", () => checkAnswer(button, answer));
      answersEl.appendChild(button);
    });
  }

  function checkAnswer(selectedButton, answer) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const isCorrect = answer.name === q.correct;

    answersEl.querySelectorAll(".answer").forEach(button => {
      button.disabled = true;
      const label = button.querySelector(".label").textContent;
      if (label === q.correct) button.classList.add("correct");
    });

    if (isCorrect) {
      score++;
      feedbackEl.textContent = `✅ Правильно! ${q.info}`;
      feedbackEl.style.color = "#4ade80";
    } else {
      selectedButton.classList.add("wrong");
      feedbackEl.textContent = `❌ Правильна відповідь: ${q.correct}. ${q.info}`;
      feedbackEl.style.color = "#f87171";
    }

    updateScore();
    progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;
    nextBtn.textContent = current === questions.length - 1
      ? "Побачити результат 🏆"
      : "Наступне запитання ➜";
    nextBtn.hidden = false;
  }

  function showResult() {
    gameEl.hidden = true;
    resultEl.hidden = false;
    progressBar.style.width = "100%";
    finalScoreEl.textContent = `${score} із ${questions.length} балів`;

    const percentage = score / questions.length;
    if (score === questions.length) {
      messageEl.textContent = "🔥 Неймовірно! Ти справжній IT-експерт!";
    } else if (percentage >= 0.7) {
      messageEl.textContent = "🎉 Чудовий результат! Ти добре знаєш IT!";
    } else if (percentage >= 0.4) {
      messageEl.textContent = "👏 Гарна робота! Ще трохи практики — і буде ще краще!";
    } else {
      messageEl.textContent = "💻 Гарна спроба! Спробуй ще раз!";
    }
  }

  nextBtn.addEventListener("click", () => {
    if (!answered) return;
    if (current < questions.length - 1) {
      current++;
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    current = 0;
    score = 0;
    gameEl.hidden = false;
    resultEl.hidden = true;
    showQuestion();
  });

  showQuestion();
});
