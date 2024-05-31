/* Javascriptda matnlar matnlar bittalik yoki ikkitalik qo'shtirnoq yoki quyidagi `` slesh ichiga yoziladi sonlarni esa o'z holicha yozish mumkum
Agar qo'shtirnoq qatnashgan matn berilgan bo'lsa Uni quyidagicha yozish mumkun 'Oga\'ayin'. Consolda Og'ayin matni chiqadi
Matnlarni `` sesh ichiga yozish yangi versiyalarda amal qiladi va eng qulay usul hisoblanadi

O'zgaruvchi qiymatlarini quyidagicha ko'rinishda boshqa o'zgaruvchiga biriktirib qo'yishimiz bizga kod yozish jarayonimizni ancha sodda lashtiradi. masalan biz bitta o'zgaruvchini 50 ta joyda ishlatgan bo'lsak u o'zgaruvchini yana o'zgartirishimizga to'g'ri keladigan bo'lsa 50 ta o'zgaruvchini hammasini emas biriktirilgan o'zgaruvchini o'zgartirib qo'ysak bo'ldi
Masalan:

const Ism = `Faxriddin`

console.log(Ism);
console.log(Ism);
console.log(Ism);
console.log(Ism);
console.log(Ism);
console.log(Ism);
console.log(Ism);
console.log(Ism);

Agar yuqoridagi 8 ta qatorda o'zgaruvchini o'zgartirishimizga to'g'ri keladigan bo'lsa hammasini o'zgartirmasdan ism o'zgaruvchisiga biriktirilgan o'zgaruvchini o'zgartiribqo'ysak bo'ldi */



/* O'ZGARUVCHI VA MANTLARNI BIRIKTIRISH

O'zgaruvchi va matnlarni biriktirish uchun matnni qo'shtirnoq ichuga olib + belgisi orqali o'zgaruvchiga biriktiriladi masalan

const Ism = `Faxriddin`;
const Familya = `Mamadiyev`;
const Yosh = `29`;

Mening ismim Faxriddin, Familyam Mamadiyev, yoshim 29 da demoqchi bo'sak quyidagicha yo'l tutamiz
console.log(`Mening ismim ` + Ism + `, Familyam ` + Familya + `, Yoshim ` + Yosh + ` da`); */


/* MANT UZUNLIGINI ANIQLASH
Matn uzunligini aniqlash uchun .length tegidan foydalanamiz.
Masalan:

console.log(`Faxriddin`.length);

Consolda Faxriddin ismidagi belgilar soni chiqadi. .length tegi probellerni ham sanaydi.
Masalan

console.log(`Men va Sen`.length);

Berilgan matnda 8 ta xarf bor legin consolda 10 chiqayapdi sababi 2 ta probel ham belgi o'rniga o'tib ketayapdi

const Ism = `Faxriddin`;

console.log(Ism + ` ismida ` + Ism.length + ` ta belgi bor`);

consolda Faxriddi ismida 8 ta belgi bor matni chiqadi */



/* TEMPALET LETERAL

Tempalate lateral ya'ni ` ` belgi ichiga matinlarni va o'zgaruvchilarni bitta ` ` belgi ichida birlashtirishimiz mumkun
Masalan:
const Ism = `Faxriddin`;

console.log(`Mening ismim ${Ism}. Mening ismimda ${Ism.length} ta belgi bor`);
consolda Mening ismim Faxriddin. Mening ismimda 9 ta belgi bor matni chiqadi */


/* ELEMENTLARNI TANLASH document.querySelector
Biz htmldagi biror elementni yoki uni clasini document.querySelector tanlovchisi bilan tanlab olishimiz mumkun
Masalan:
document.querySelector('body')
Bu bizga htmlning body qismini topib beradi

document.querySelector('h2')
Bu bizga h2 tegida yozilgan ma'lumotlarni topib beradi

document.querySelector('.container')
Bu bizga container clasli elementni topib beradi */




/* HTML elementlariga elementlariga biriktirilgan elementlarni el bilan boshlash sababi

Javascriptda oddiy o'zgaruvchilar va html elementlariga biriktirilgan 'zgaruvchilarni ajratib olishimiz uchun HTML elementlariga biriktirilgan elementlarni el bilan boshlashimiz o'zimizga qulay bo'ladi
Masalan:

const score = 75;
score oddiy o'zgaruvchi va bu qanaqadur ballni bildirsin

htmlda esa person-score clasli element bo'lsin. Bu html elementini o'zgaruvchiga biriktirish uchun quyidagicha yo'l turganimiz maqul

const elScore = (`.person-score`);
Bu usulda person-score clasli elementni elScore o'zgaruvchisi bilan biriktirib oldik va bu usul oddiy o'zgaruvchi score bilan htm elementini ajratib olishimiz uchun qulay usul hisoblanadi */


/* BIR NECHTA ELEMENTLARNI TANLASH document.querySelectorAll
Biz bitta elementni topish uchun document.querySelector tegidan foytalanayotgan edik. Agar bitta nomga yoki bitta klasga to'g'ri keladigan bir nechta elementni tanlamoqchi bo'lsak document.querySelectorAll tegidan foydalanamiz va o'zgaruvchi nomi oldiga el emes els qo'ysak birlik va ko'plikni oson ajrata olamiz
Masalan html da 4 ta galery-img clasli rasmimiz bo'lsa ularni hammasini tanlab olishimiz uchun quyidagicha yo'l tutamiz

const elsGaleryImg = document.querySelectorAll(`.galery-img`);

Shunda html da galery-img clasli 4 ta elementni hammasini tanlagan bo'lamiz */



/* BIR NECHTA ELEMENT TANLANGANDA UNING SONINI TOPISH
Biz

const elsGaleryImg = document.querySelectorAll(`.galery-img`);

orqali birxil clasli bir nechta elemenini topib oldik. Endi unda nechta element borligini qniqlash uchun quyidagicha yo'l tutamiz
const elsGaleryImg = document.querySelectorAll(`.galery-img`);

console.log(elsGaleryImg.length);

Consolda 4 chiqadi chunki galery-img klasli 4 ta element mavjud */





/* Element matnini olish, o'zgartirish. DevToolsda elementga $0 nomi bilan murojaat qilish

Biz biror bir sayt yoki sahifadagi elementni, uni matnini tanlashimiz va o'zgartirishimiz mumkun
Sahifadagi elementni tanlashimiz uchun uni inspect qilib olamiz ya'ni kodini ochib olamiz. Kerakli elementni tanlaganimizda uni oxirisida ==$0 belgisi chiqadi
Elamantni tanlaganimizdan keyin consolga o'tamiz va $0 ni bosib tabni bossak bizga tanlagan elementimizni topib beradi
$0.textContentni yozib tabni bossak element matnini topib beradi
$0.textContent = 'Birnima'; deb yozib tabni bossak tanlangan elementimizni matnini Birnima matniga o'zgartiriberadi

Endi htmlda quyidagi kod yozilgan bo'lsa

<p>Foydalanuvchi nomi: <strong class="usernamr"></strong></p>
<p>Foydalanuvchi bali: <strong class="score"></strong></p>

va biz quyidagi o'garuvcgilarni kiritib olgan bo'lsak
const username = `Faxriddin`;
const score = 75;

usernamr va score clasli elementlarni quyidagicha topib olaiz
const elUsername = document.querySelector(".usernamr");
const elScore = document.querySelector(".score");

Topib olingan elementlarga quyidaggi yo'l bilam matn qo'shib olamiz
elUsername.textContent = username;
elScore.textContent = score;

Avval matn
Foydalanuvchi nomi:
Foydalanuvchi bali:

bo'lib turgandi unga matn qo'shganimizdan keyin

Foydalanuvchi nomi: Faxriddin

Foydalanuvchi bali: 75

ko'rinishga keldi */



/* ELEMENTGA CLASS QO'SHISH, OLIB TASHLASH, QO'SHISH VA OLIN TASHLASH, CLAS BOR YO'QLIGINI TEKSHIRISH
Bizga username clasli element berilgan bo'lsin
Bu elementga qo'shimcha klas qo'shish uchun avval bu elementni topib olishimiz kerak
const elUsername = document.querySelector(`.username`);

Bu elementga oshqa klas masalan light--username klasini qoshish uchun quyidagi amalni majaramiz
elUsername.classList.add('light--username');

elUsername elementidan light--username klasini olib tashlash uchun esa quyidagi amalni bajaramiz
elUsername.classList.remove('light--username');


elUsername elementiga light--username clasini qo'shish va olib tashlash uchun Quyidagi amalni bajaramiz
elUsername.classList.toggle('light--username');

elUsername elementida light--username clasi bor yoki yo'qligini tekshirish uchun quyidagi amalni bajaramiz
elUsername.classList.contains('light--username') */



/* EVENTLISTINER HODISAGA QULOQ SOLISH
Biz biror elementga uning holatini o'zgartirish matnini yoki boshqa holatlarini o'zgartisrish uchun qandaydur hodisa ro'y berganda o'zgarishi uchun eventlistinerdan foydalanamiz
Masalan htmlda Event listiner uchun yozildan matn va ikkita button knopkasi berilgan. Bu knopkalar bittasi orqa fonni o'zgartirsin bittasi esa matinni o'zgartirsin
Buning uchun biz berilgan elementlarni ularni klaslari orqali quyidagicha topib olamiz
const elText = document.querySelector(".text");
const elChangeBacground = document.querySelector('.change-bacground');
const elchangeText = document.querySelector(".change-text");


Fonni o'zgartirish knopkasi bosilganda orqa fon rangi va matn rangini o'zgarishi uchun css da qo'shimcha darc klasini kiritib olamiz va event listinerni quyidagicha qo'llaymiz
elChangeBacground.addEventListener('click', function() {
  document.body.classList.toggle('darc');
})

Fonni o'zgartirish knopkasi bosilganda forrangi va matn rangi o'zgaradi

Matinni o'zini o'zgartirish uchun matinni o'zgartirish knopkasi bosilganda matin o'zgarishi uchun eventlistinerni quyidagicha qo'llaymiz
elchangeText.addEventListener('click', function() {
  elText.textContent = 'Xayr'
})

Matinni o'zgartirish knopkasi bosilganda Salom matni Xayr matniga o'zgaradi


Eventlistiner bilan ishlayotganimizda elementni clasini css ga bog'liq bo'lmagan js prefiksli klasdan foydalanishimiz kerak
Masalan: js-dark, ja-birnima,... kabi klas biriktirib uni faqat eventlistinerda ishlatishimiz kerak*/



/* EVENT HODISA TURLARI
java scripda event hodisa turlarni uchun sodda bisol ko'raylik. Htmlda button joylaymiz va unga js-type-button klasini berib olamiz. querySelector orqali button elementini quyidagicha topib olamiz
const elJsbuttontext = document.querySelector(".js-type-button");

Topilgan element clik xodisasiga quloq solsin deymiz va funksiya kiritib olamiz
elJsbuttontext.addEventListener('click', function() {
  console.dir(elJsbuttontext);
})
console.dir(elJsbuttontext) funksiya consolda elJsbuttontext nomi bilan biriktirilgan button haqidagi hamma ma'lumotlarni chiqarish uchun ishlatiladi
Test tugmasini bosganimizda button ma'lumoti chiqadi chiqqan ma'lumotni ochsak button haqida hamma ma'lumotlarni chiqarib beradi
Ma'lumotlar ichida on bilan boshlanadigan hamma teglar hodisalar hisoblanadi kod yozayotganimizda bu xodisalarni on qo'shimchaliz yozib ishlatishimiz mumkun */


/* Mash quchun. Itputga malumot kiritganda Ismingiz nima degan matindan keyin kiritilayotganda ma'lumotni aftomatik chiqarib brish va ms'lumot uzunligini chiqarish
Har bir elementning klaslarini topib olayapmiz
const elInput = document.querySelector(".input-text");
const elUsername = document.querySelector(".username");
const elNamelength = document.querySelector(".js-name-length");

elInput.addEventListener('input', function() {
  elUsername.textContent = elInput.value;
  elNamelength.textContent = elInput.value.length

  har qandam melumotning valuesi uni ishidagi matinn uchun ishlatiladi
}) */


/* HODISALARGA NISBATAN AMAL BAJARISHNI SUG'URTALASH
Agar biz js da 1000 qator kod yozgan bo'lsak tahminan 200-qatordagi hodisa kodi hato bo'lsa amal bajarish keyingi kodga o'ta olmaydi. Buni oldini olish uchun hodisani sug'urtalashimiz kerak. Shunda js amal bajarish hatosiz keyingi kodga o'tib ishlayveradi
Masalan:
Quyidagi selektrlar berilgan
const elInput = document.querySelector(".input-text");
const elUsername = document.querySelector(".username");
const elNamelength = document.querySelector(".js-name-length");

Bunda biz elInputga evenlistiner biriktirayapmiz. Agar elInput o'zgaruvchi yo'q bo'lsa kodimizda amal bajarish shu qadamda to'xtab qoladi. Buni o'dini olish uchun honisani quyidagicha sug'urtalab qo'yamiz

Agar elInput o'zgaruvchisi bor bo'lsa amallar bajarilishini aks holda keyingi amalga o'tib ketishni bildiradi
if (elInput) {
  elInput.addEventListener('input', function() {
    elUsername.textContent = elInput.value;
    elNamelength.textContent = elInput.value.length
  })
} */


/* SETTIMEAUT YORDAMIDA AMALLARNI BIR MUDDAT KEYIN BAJARISH
Bizga button knopkasi berilgan bo'lsin Assalomaleykum matnini kamida 3 sekunddan keyin Valeykum assalom matniga o'zgartirishni ko'raylik
Button va matinni claslarini topib olamiz

const elChangebutton = document.querySelector(".js-change-bacground");
const elText = document.querySelector(".text");


Hodisada hatolik bo'lganda keyingi qadamga o'tib ketishi uchun sug'urtalab qp'yamiz. Agar elChangebutton o'zgaruvchi bor bo'lsa hodisa bajariladi aks holda keyingi qadamga o'tib ketadi
if (elChangebutton) {
  elChangebutton.addEventListener('click', function () {
    setTimeout(function () {
      elText.textContent = 'Valeykum assalom'
    }, 3000)
  })
}
Button knopkasi bosilganda kamida 3 sekund o'tib matin o'zgaradi */



/* HODISANI BAJARILISHINI TO'XTATIB QO'YISH
Sahifamizda birorbir linkni ustiga bosganda shu linkni ichiga kirishni yoki boshqa hodisalarni to'ztatib qo'yishimiz mumkun
Masalan kun.uz saytini linki berilgan bo'lsin. Bu link ustiga bosganimizda linkka kirish to'xtatilsin

linkninf klasi topib olinayapdi
const elJslink = document.querySelector(".js-link");


if (elJslink) {//O'zgaruvchi sug'urtalanayapdi
  elJslink.addEventListener('click', function(evt) {//O'zgaruvchi click hodisasiga quloq solayapdi funksiyaning event qisqartma evt argumenti
    evt.preventDefault();//Argumentga hodisani to'xtatish funksiyafi biriktirilayapdi
    console.log("Sayt ochilmadi");//Linkni ustiga bosganda consolda Sayt ochilmadi degan habar chiqadi buning o'rniga boshqa hodisa ham kiritish mumkun
  })
} */


/* BIR NECHTA ELEMENTGA EVENTLISTINER BIRIKTIRISH
Biz eventlistinerni faqat bitta element uchun hodisa bajarilishini ko'rdik. Aga bir xil elementdan bittadan ko'p bo'lsa biz o'rgangan eventlistiner faqat biyttasiga ishlaydi qolganlariga ishlamay qoladi. Hodisa hamma elementga ishlashi uchun querySelector va foreach lardan foydalanishimiz kerak
Buning uchun elementlarning klasini quyidagicha topib olamiz
const elsJscale = document.querySelectorAll(".js-scale-button");//ammaelementlarni umumiy klasini topib olish uchun

elsJscale.forEach(function(elJscale) {//Elementlarni har biriga nima dem murojat qilishni nomlab olayapmiz va har bir nomlangan element click hodisasiga quloq solsin deyapmiz
  elJscale.addEventListener('click', function() {
    elJscale.classList.toggle('scale-button--bg')//button bosilganda buttonlarni har biriga klas qo'shishni va olib tashlashni buyurayapmiz
  })
}) */


/* // EVENT DELEGATION, SAHIFAGA KEYINROQ QO'SHILGAN ELEMENTLAR BILAN AMAL BAJARISH
const elMovieslist = document.querySelector('.list');//Elementlarni urab turuvchi ul korobkani klasini tobib olayapmiz

if (elMovieslist) {//Elementni sug'urtalayapmiz
  elMovieslist.addEventListener('click', function (evt) {//elementlarni o'rab turuvchi list click hodisasiga quloq solayapdi
    if (evt.target.matches('.js-like-button')) {//Agar eventni targeti js-like-button clasga to'g'ri kelsa. Agar bu ish qilinmasa listning ixtiyoriy joyiga bossak event ishlab ketadi bizga faqat button bosilganda ishlashi kerak edi
      evt.target.classList.toggle('button-liked')//eventni targetining klaslistiga button-liked klasini qo'shib qo'yayapmiz
    }
  })
} */
