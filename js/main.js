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



// EVENTLISTINER HODISAGA QULOQ SOLISH
// Biz biror elementga uning holatini o'zgartirish matnini yoki boshqa holatlarini o'zgartisrish uchun qandaydur hodisa ro'y berganda o'zgarishi uchun eventlistinerdan foydalanamiz
// Masalan htmlda Event listiner uchun yozildan matn va ikkita button knopkasi berilgan. Bu knopkalar bittasi orqa fonni o'zgartirsin bittasi esa matinni o'zgartirsin
// Buning uchun biz berilgan elementlarni ularni klaslari orqali quyidagicha topib olamiz
// const elText = document.querySelector(".text");
// const elChangeBacground = document.querySelector('.change-bacground');
// const elchangeText = document.querySelector(".change-text");


// Fonni o'zgartirish knopkasi bosilganda orqa fon rangi va matn rangini o'zgarishi uchun css da qo'shimcha darc klasini kiritib olamiz va event listinerni quyidagicha qo'llaymiz
// elChangeBacground.addEventListener('click', function() {
//   document.body.classList.toggle('darc');
// })

// Fonni o'zgartirish knopkasi bosilganda forrangi va matn rangi o'zgaradi

// Matinni o'zini o'zgartirish uchun matinni o'zgartirish knopkasi bosilganda matin o'zgarishi uchun eventlistinerni quyidagicha qo'llaymiz
// elchangeText.addEventListener('click', function() {
//   elText.textContent = 'Xayr'
// })

// Matinni o'zgartirish knopkasi bosilganda Salom matni Xayr matniga o'zgaradi
