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
