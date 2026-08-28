import{c as e,f as t,i as n,r,t as i}from"./lit-DNaDb1T7.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./classPrivateFieldSet2-BrH7O_C6-D9n3SuTl.js";import{n as d,t as f}from"./decorators-D0-gbKXH.js";var p={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},m=e=>(...t)=>({_$litDirective$:e,values:t}),h=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},g=m(class extends h{constructor(e){if(super(e),e.type!==p.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return n}}),_=Object.create,v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,b=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,te=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),ne=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ee(t),a=0,o=i.length,s;a<o;a++)s=i[a],!x.call(e,s)&&s!==n&&v(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=y(t,s))||r.enumerable});return e},re=(e,t,n)=>(n=e==null?{}:_(b(e)),ne(t||!e||!e.__esModule?v(n,`default`,{value:e,enumerable:!0}):n,e)),ie=re(te(((e,t)=>{(function(){var e=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n],t)g(t,r)&&(e[r]=t[r]);return e},n=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`},r=s([`χρόνος`,`χρόνια`],[`μήνας`,`μήνες`],[`εβδομάδα`,`εβδομάδες`],[`μέρα`,`μέρες`],[`ώρα`,`ώρες`],[`λεπτό`,`λεπτά`],[`δευτερόλεπτο`,`δευτερόλεπτα`],[`χιλιοστό του δευτερολέπτου`,`χιλιοστά του δευτερολέπτου`],`,`),i={af:s([`jaar`,`jaar`],[`maand`,`maande`],[`week`,`weke`],[`dag`,`dae`],[`uur`,`ure`],[`minuut`,`minute`],[`sekonde`,`sekondes`],[`millisekonde`,`millisekondes`],`,`),am:a(`ዓመት`,`ወር`,`ሳምንት`,`ቀን`,`ሰዓት`,`ደቂቃ`,`ሰከንድ`,`ሚሊሰከንድ`),ar:e(a(function(e){return[`سنة`,`سنتان`,`سنوات`][d(e)]},function(e){return[`شهر`,`شهران`,`أشهر`][d(e)]},function(e){return[`أسبوع`,`أسبوعين`,`أسابيع`][d(e)]},function(e){return[`يوم`,`يومين`,`أيام`][d(e)]},function(e){return[`ساعة`,`ساعتين`,`ساعات`][d(e)]},function(e){return[`دقيقة`,`دقيقتان`,`دقائق`][d(e)]},function(e){return[`ثانية`,`ثانيتان`,`ثواني`][d(e)]},function(e){return[`جزء من الثانية`,`جزآن من الثانية`,`أجزاء من الثانية`][d(e)]},`,`),{delimiter:` ﻭ `,_hideCountIf2:!0,_digitReplacements:[`۰`,`١`,`٢`,`٣`,`٤`,`٥`,`٦`,`٧`,`٨`,`٩`]}),bg:u([`години`,`година`,`години`],[`месеца`,`месец`,`месеца`],[`седмици`,`седмица`,`седмици`],[`дни`,`ден`,`дни`],[`часа`,`час`,`часа`],[`минути`,`минута`,`минути`],[`секунди`,`секунда`,`секунди`],[`милисекунди`,`милисекунда`,`милисекунди`]),bn:a(`বছর`,`মাস`,`সপ্তাহ`,`দিন`,`ঘন্টা`,`মিনিট`,`সেকেন্ড`,`মিলিসেকেন্ড`),ca:s([`any`,`anys`],[`mes`,`mesos`],[`setmana`,`setmanes`],[`dia`,`dies`],[`hora`,`hores`],[`minut`,`minuts`],[`segon`,`segons`],[`milisegon`,`milisegons`],`,`),ckb:a(`ساڵ`,`مانگ`,`هەفتە`,`ڕۆژ`,`کاژێر`,`خولەک`,`چرکە`,`میلی چرکە`,`.`),cs:a(function(e){return[`rok`,`roku`,`roky`,`let`][p(e)]},function(e){return[`měsíc`,`měsíce`,`měsíce`,`měsíců`][p(e)]},function(e){return[`týden`,`týdne`,`týdny`,`týdnů`][p(e)]},function(e){return[`den`,`dne`,`dny`,`dní`][p(e)]},function(e){return[`hodina`,`hodiny`,`hodiny`,`hodin`][p(e)]},function(e){return[`minuta`,`minuty`,`minuty`,`minut`][p(e)]},function(e){return[`sekunda`,`sekundy`,`sekundy`,`sekund`][p(e)]},function(e){return[`milisekunda`,`milisekundy`,`milisekundy`,`milisekund`][p(e)]},`,`),cy:a(`flwyddyn`,`mis`,`wythnos`,`diwrnod`,`awr`,`munud`,`eiliad`,`milieiliad`),da:s([`år`,`år`],[`måned`,`måneder`],[`uge`,`uger`],[`dag`,`dage`],[`time`,`timer`],[`minut`,`minutter`],[`sekund`,`sekunder`],[`millisekund`,`millisekunder`],`,`),de:s([`Jahr`,`Jahre`],[`Monat`,`Monate`],[`Woche`,`Wochen`],[`Tag`,`Tage`],[`Stunde`,`Stunden`],[`Minute`,`Minuten`],[`Sekunde`,`Sekunden`],[`Millisekunde`,`Millisekunden`],`,`),el:r,en:s([`year`,`years`],[`month`,`months`],[`week`,`weeks`],[`day`,`days`],[`hour`,`hours`],[`minute`,`minutes`],[`second`,`seconds`],[`millisecond`,`milliseconds`]),eo:s([`jaro`,`jaroj`],[`monato`,`monatoj`],[`semajno`,`semajnoj`],[`tago`,`tagoj`],[`horo`,`horoj`],[`minuto`,`minutoj`],[`sekundo`,`sekundoj`],[`milisekundo`,`milisekundoj`],`,`),es:s([`año`,`años`],[`mes`,`meses`],[`semana`,`semanas`],[`día`,`días`],[`hora`,`horas`],[`minuto`,`minutos`],[`segundo`,`segundos`],[`milisegundo`,`milisegundos`],`,`),et:s([`aasta`,`aastat`],[`kuu`,`kuud`],[`nädal`,`nädalat`],[`päev`,`päeva`],[`tund`,`tundi`],[`minut`,`minutit`],[`sekund`,`sekundit`],[`millisekund`,`millisekundit`],`,`),eu:a(`urte`,`hilabete`,`aste`,`egun`,`ordu`,`minutu`,`segundo`,`milisegundo`,`,`),fa:a(`سال`,`ماه`,`هفته`,`روز`,`ساعت`,`دقیقه`,`ثانیه`,`میلی ثانیه`),fi:s([`vuosi`,`vuotta`],[`kuukausi`,`kuukautta`],[`viikko`,`viikkoa`],[`päivä`,`päivää`],[`tunti`,`tuntia`],[`minuutti`,`minuuttia`],[`sekunti`,`sekuntia`],[`millisekunti`,`millisekuntia`],`,`),fo:s([`ár`,`ár`],[`mánaður`,`mánaðir`],[`vika`,`vikur`],[`dagur`,`dagar`],[`tími`,`tímar`],[`minuttur`,`minuttir`],[`sekund`,`sekund`],[`millisekund`,`millisekund`],`,`),fr:a(function(e){return`an`+(e>=2?`s`:``)},`mois`,function(e){return`semaine`+(e>=2?`s`:``)},function(e){return`jour`+(e>=2?`s`:``)},function(e){return`heure`+(e>=2?`s`:``)},function(e){return`minute`+(e>=2?`s`:``)},function(e){return`seconde`+(e>=2?`s`:``)},function(e){return`milliseconde`+(e>=2?`s`:``)},`,`),gr:r,he:s([`שנה`,`שנים`],[`חודש`,`חודשים`],[`שבוע`,`שבועות`],[`יום`,`ימים`],[`שעה`,`שעות`],[`דקה`,`דקות`],[`שניה`,`שניות`],[`מילישנייה`,`מילישניות`]),hr:a(function(e){return e%10==2||e%10==3||e%10==4?`godine`:`godina`},function(e){return e===1?`mjesec`:e===2||e===3||e===4?`mjeseca`:`mjeseci`},function(e){return e%10==1&&e!==11?`tjedan`:`tjedna`},o([`dan`,`dana`]),function(e){return e===1?`sat`:e===2||e===3||e===4?`sata`:`sati`},function(e){var t=e%10;return(t===2||t===3||t===4)&&(e<10||e>14)?`minute`:`minuta`},function(e){var t=e%10;return t===5||Math.floor(e)===e&&e>=10&&e<=19?`sekundi`:t===1?`sekunda`:t===2||t===3||t===4?`sekunde`:`sekundi`},function(e){return e===1?`milisekunda`:e%10==2||e%10==3||e%10==4?`milisekunde`:`milisekundi`},`,`),hi:a(`साल`,o([`महीना`,`महीने`]),o([`हफ़्ता`,`हफ्ते`]),`दिन`,o([`घंटा`,`घंटे`]),`मिनट`,`सेकंड`,`मिलीसेकंड`),hu:a(`év`,`hónap`,`hét`,`nap`,`óra`,`perc`,`másodperc`,`ezredmásodperc`,`,`),id:a(`tahun`,`bulan`,`minggu`,`hari`,`jam`,`menit`,`detik`,`milidetik`),is:s([`ár`,`ár`],[`mánuður`,`mánuðir`],[`vika`,`vikur`],[`dagur`,`dagar`],[`klukkutími`,`klukkutímar`],[`mínúta`,`mínútur`],[`sekúnda`,`sekúndur`],[`millisekúnda`,`millisekúndur`]),it:s([`anno`,`anni`],[`mese`,`mesi`],[`settimana`,`settimane`],[`giorno`,`giorni`],[`ora`,`ore`],[`minuto`,`minuti`],[`secondo`,`secondi`],[`millisecondo`,`millisecondi`],`,`),ja:a(`年`,`ヶ月`,`週間`,`日`,`時間`,`分`,`秒`,`ミリ秒`),km:a(`ឆ្នាំ`,`ខែ`,`សប្តាហ៍`,`ថ្ងៃ`,`ម៉ោង`,`នាទី`,`វិនាទី`,`មិល្លីវិនាទី`),kn:s([`ವರ್ಷ`,`ವರ್ಷಗಳು`],[`ತಿಂಗಳು`,`ತಿಂಗಳುಗಳು`],[`ವಾರ`,`ವಾರಗಳು`],[`ದಿನ`,`ದಿನಗಳು`],[`ಗಂಟೆ`,`ಗಂಟೆಗಳು`],[`ನಿಮಿಷ`,`ನಿಮಿಷಗಳು`],[`ಸೆಕೆಂಡ್`,`ಸೆಕೆಂಡುಗಳು`],[`ಮಿಲಿಸೆಕೆಂಡ್`,`ಮಿಲಿಸೆಕೆಂಡುಗಳು`]),ko:a(`년`,`개월`,`주일`,`일`,`시간`,`분`,`초`,`밀리 초`),ku:a(`sal`,`meh`,`hefte`,`roj`,`seet`,`deqe`,`saniye`,`mîlîçirk`,`,`),lo:a(`ປີ`,`ເດືອນ`,`ອາທິດ`,`ມື້`,`ຊົ່ວໂມງ`,`ນາທີ`,`ວິນາທີ`,`ມິນລິວິນາທີ`,`,`),lt:a(function(e){return e%10==0||e%100>=10&&e%100<=20?`metų`:`metai`},function(e){return[`mėnuo`,`mėnesiai`,`mėnesių`][m(e)]},function(e){return[`savaitė`,`savaitės`,`savaičių`][m(e)]},function(e){return[`diena`,`dienos`,`dienų`][m(e)]},function(e){return[`valanda`,`valandos`,`valandų`][m(e)]},function(e){return[`minutė`,`minutės`,`minučių`][m(e)]},function(e){return[`sekundė`,`sekundės`,`sekundžių`][m(e)]},function(e){return[`milisekundė`,`milisekundės`,`milisekundžių`][m(e)]},`,`),lv:a(function(e){return h(e)?`gads`:`gadi`},function(e){return h(e)?`mēnesis`:`mēneši`},function(e){return h(e)?`nedēļa`:`nedēļas`},function(e){return h(e)?`diena`:`dienas`},function(e){return h(e)?`stunda`:`stundas`},function(e){return h(e)?`minūte`:`minūtes`},function(e){return h(e)?`sekunde`:`sekundes`},function(e){return h(e)?`milisekunde`:`milisekundes`},`,`),mk:s([`година`,`години`],[`месец`,`месеци`],[`недела`,`недели`],[`ден`,`дена`],[`час`,`часа`],[`минута`,`минути`],[`секунда`,`секунди`],[`милисекунда`,`милисекунди`],`,`),mn:a(`жил`,`сар`,`долоо хоног`,`өдөр`,`цаг`,`минут`,`секунд`,`миллисекунд`),mr:a(o([`वर्ष`,`वर्षे`]),o([`महिना`,`महिने`]),o([`आठवडा`,`आठवडे`]),`दिवस`,`तास`,o([`मिनिट`,`मिनिटे`]),`सेकंद`,`मिलिसेकंद`),ms:a(`tahun`,`bulan`,`minggu`,`hari`,`jam`,`minit`,`saat`,`milisaat`),nl:s([`jaar`,`jaar`],[`maand`,`maanden`],[`week`,`weken`],[`dag`,`dagen`],[`uur`,`uur`],[`minuut`,`minuten`],[`seconde`,`seconden`],[`milliseconde`,`milliseconden`],`,`),no:s([`år`,`år`],[`måned`,`måneder`],[`uke`,`uker`],[`dag`,`dager`],[`time`,`timer`],[`minutt`,`minutter`],[`sekund`,`sekunder`],[`millisekund`,`millisekunder`],`,`),pl:a(function(e){return[`rok`,`roku`,`lata`,`lat`][f(e)]},function(e){return[`miesiąc`,`miesiąca`,`miesiące`,`miesięcy`][f(e)]},function(e){return[`tydzień`,`tygodnia`,`tygodnie`,`tygodni`][f(e)]},function(e){return[`dzień`,`dnia`,`dni`,`dni`][f(e)]},function(e){return[`godzina`,`godziny`,`godziny`,`godzin`][f(e)]},function(e){return[`minuta`,`minuty`,`minuty`,`minut`][f(e)]},function(e){return[`sekunda`,`sekundy`,`sekundy`,`sekund`][f(e)]},function(e){return[`milisekunda`,`milisekundy`,`milisekundy`,`milisekund`][f(e)]},`,`),pt:s([`ano`,`anos`],[`mês`,`meses`],[`semana`,`semanas`],[`dia`,`dias`],[`hora`,`horas`],[`minuto`,`minutos`],[`segundo`,`segundos`],[`milissegundo`,`milissegundos`],`,`),ro:a(c(`an`,`ani`,`de ani`),c(`lună`,`luni`,`de luni`),c(`săptămână`,`săptămâni`,`de săptămâni`),c(`zi`,`zile`,`de zile`),c(`oră`,`ore`,`de ore`),c(`minut`,`minute`,`de minute`),c(`secundă`,`secunde`,`de secunde`),c(`milisecundă`,`milisecunde`,`de milisecunde`),`,`),ru:u([`лет`,`год`,`года`],[`месяцев`,`месяц`,`месяца`],[`недель`,`неделя`,`недели`],[`дней`,`день`,`дня`],[`часов`,`час`,`часа`],[`минут`,`минута`,`минуты`],[`секунд`,`секунда`,`секунды`],[`миллисекунд`,`миллисекунда`,`миллисекунды`]),sq:a(o([`vit`,`vjet`]),`muaj`,`javë`,`ditë`,`orë`,function(e){return`minut`+(e===1?`ë`:`a`)},function(e){return`sekond`+(e===1?`ë`:`a`)},function(e){return`milisekond`+(e===1?`ë`:`a`)},`,`),sr:u([`години`,`година`,`године`],[`месеци`,`месец`,`месеца`],[`недељи`,`недеља`,`недеље`],[`дани`,`дан`,`дана`],[`сати`,`сат`,`сата`],[`минута`,`минут`,`минута`],[`секунди`,`секунда`,`секунде`],[`милисекунди`,`милисекунда`,`милисекунде`]),sr_Latn:u([`godini`,`godina`,`godine`],[`meseci`,`mesec`,`meseca`],[`nedelji`,`nedelja`,`nedelje`],[`dani`,`dan`,`dana`],[`sati`,`sat`,`sata`],[`minuta`,`minut`,`minuta`],[`sekundi`,`sekunda`,`sekunde`],[`milisekundi`,`milisekunda`,`milisekunde`]),ta:s([`வருடம்`,`ஆண்டுகள்`],[`மாதம்`,`மாதங்கள்`],[`வாரம்`,`வாரங்கள்`],[`நாள்`,`நாட்கள்`],[`மணி`,`மணிநேரம்`],[`நிமிடம்`,`நிமிடங்கள்`],[`வினாடி`,`வினாடிகள்`],[`மில்லி விநாடி`,`மில்லி விநாடிகள்`]),te:s([`సంవత్సరం`,`సంవత్సరాల`],[`నెల`,`నెలల`],[`వారం`,`వారాలు`],[`రోజు`,`రోజులు`],[`గంట`,`గంటలు`],[`నిమిషం`,`నిమిషాలు`],[`సెకను`,`సెకన్లు`],[`మిల్లీసెకన్`,`మిల్లీసెకన్లు`]),uk:u([`років`,`рік`,`роки`],[`місяців`,`місяць`,`місяці`],[`тижнів`,`тиждень`,`тижні`],[`днів`,`день`,`дні`],[`годин`,`година`,`години`],[`хвилин`,`хвилина`,`хвилини`],[`секунд`,`секунда`,`секунди`],[`мілісекунд`,`мілісекунда`,`мілісекунди`]),ur:a(`سال`,o([`مہینہ`,`مہینے`]),o([`ہفتہ`,`ہفتے`]),`دن`,o([`گھنٹہ`,`گھنٹے`]),`منٹ`,`سیکنڈ`,`ملی سیکنڈ`),sk:a(function(e){return[`rok`,`roky`,`roky`,`rokov`][p(e)]},function(e){return[`mesiac`,`mesiace`,`mesiace`,`mesiacov`][p(e)]},function(e){return[`týždeň`,`týždne`,`týždne`,`týždňov`][p(e)]},function(e){return[`deň`,`dni`,`dni`,`dní`][p(e)]},function(e){return[`hodina`,`hodiny`,`hodiny`,`hodín`][p(e)]},function(e){return[`minúta`,`minúty`,`minúty`,`minút`][p(e)]},function(e){return[`sekunda`,`sekundy`,`sekundy`,`sekúnd`][p(e)]},function(e){return[`milisekunda`,`milisekundy`,`milisekundy`,`milisekúnd`][p(e)]},`,`),sl:a(function(e){return e%10==1?`leto`:e%100==2?`leti`:e%100==3||e%100==4||Math.floor(e)!==e&&e%100<=5?`leta`:`let`},function(e){return e%10==1?`mesec`:e%100==2||Math.floor(e)!==e&&e%100<=5?`meseca`:e%10==3||e%10==4?`mesece`:`mesecev`},function(e){return e%10==1?`teden`:e%10==2||Math.floor(e)!==e&&e%100<=4?`tedna`:e%10==3||e%10==4?`tedne`:`tednov`},function(e){return e%100==1?`dan`:`dni`},function(e){return e%10==1?`ura`:e%100==2?`uri`:e%10==3||e%10==4||Math.floor(e)!==e?`ure`:`ur`},function(e){return e%10==1?`minuta`:e%10==2?`minuti`:e%10==3||e%10==4||Math.floor(e)!==e&&e%100<=4?`minute`:`minut`},function(e){return e%10==1?`sekunda`:e%100==2?`sekundi`:e%100==3||e%100==4||Math.floor(e)!==e?`sekunde`:`sekund`},function(e){return e%10==1?`milisekunda`:e%100==2?`milisekundi`:e%100==3||e%100==4||Math.floor(e)!==e?`milisekunde`:`milisekund`},`,`),sv:s([`år`,`år`],[`månad`,`månader`],[`vecka`,`veckor`],[`dag`,`dagar`],[`timme`,`timmar`],[`minut`,`minuter`],[`sekund`,`sekunder`],[`millisekund`,`millisekunder`],`,`),sw:e(s([`mwaka`,`miaka`],[`mwezi`,`miezi`],[`wiki`,`wiki`],[`siku`,`masiku`],[`saa`,`masaa`],[`dakika`,`dakika`],[`sekunde`,`sekunde`],[`milisekunde`,`milisekunde`]),{_numberFirst:!0}),tr:a(`yıl`,`ay`,`hafta`,`gün`,`saat`,`dakika`,`saniye`,`milisaniye`,`,`),th:a(`ปี`,`เดือน`,`สัปดาห์`,`วัน`,`ชั่วโมง`,`นาที`,`วินาที`,`มิลลิวินาที`),uz:a(`yil`,`oy`,`hafta`,`kun`,`soat`,`minut`,`sekund`,`millisekund`),uz_CYR:a(`йил`,`ой`,`ҳафта`,`кун`,`соат`,`минут`,`секунд`,`миллисекунд`),vi:a(`năm`,`tháng`,`tuần`,`ngày`,`giờ`,`phút`,`giây`,`mili giây`,`,`),zh_CN:a(`年`,`个月`,`周`,`天`,`小时`,`分钟`,`秒`,`毫秒`),zh_TW:a(`年`,`個月`,`周`,`天`,`小時`,`分鐘`,`秒`,`毫秒`)};function a(e,t,n,r,i,a,o,s,c){var l={y:e,mo:t,w:n,d:r,h:i,m:a,s:o,ms:s};return c&&(l.decimal=c),l}function o(e){return function(t){return t===1?e[0]:e[1]}}function s(e,t,n,r,i,s,c,l,u){return a(o(e),o(t),o(n),o(r),o(i),o(s),o(c),o(l),u)}function c(e,t,n){return function(r){if(r===1)return e;if(Math.floor(r)!==r||r===0)return t;var i=r%100;return i>=1&&i<=19?t:n}}function l(e){return function(t){return Math.floor(t)===t?t%100>=5&&t%100<=20||t%10>=5&&t%10<=9||t%10==0?e[0]:t%10==1?e[1]:t>1?e[2]:e[1]:e[2]}}function u(e,t,n,r,i,o,s,c){return a(l(e),l(t),l(n),l(r),l(i),l(o),l(s),l(c),`,`)}function d(e){return e===2?1:e>2&&e<11?2:0}function f(e){return e===1?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&!(e%100>10&&e%100<20)?2:3:1}function p(e){return e===1?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&e%100<10?2:3:1}function m(e){return e===1||e%10==1&&e%100>20?0:Math.floor(e)!==e||e%10>=2&&e%100>20||e%10>=2&&e%100<10?1:2}function h(e){return e%10==1&&e%100!=11}function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e){var t=[e.language];if(g(e,`fallbacks`))if(n(e.fallbacks)&&e.fallbacks.length)t=t.concat(e.fallbacks);else throw Error(`fallbacks must be an array with at least one element`);for(var r=0;r<t.length;r++){var a=t[r];if(g(e.languages,a))return e.languages[a];if(g(i,a))return i[a]}throw Error(`No language found.`)}function v(e,t,n){var r=e.unitName,i=e.unitCount,a=n.spacer,o=n.maxDecimalPoints,s=g(n,`decimal`)?n.decimal:g(t,`decimal`)?t.decimal:`.`,c;`digitReplacements`in n?c=n.digitReplacements:`_digitReplacements`in t&&(c=t._digitReplacements);var l,u=(o===void 0?i:Math.floor(i*10**o)/10**o).toString();if(t._hideCountIf2&&i===2)l=``,a=``;else if(c){l=``;for(var d=0;d<u.length;d++){var f=u[d];f===`.`?l+=s:l+=c[f]}}else l=u.replace(`.`,s);var p=t[r],m=typeof p==`function`?p(i):p;return t._numberFirst?m+a+l:l+a+m}function y(e,t){var n,r,i,a,o=t.units,s=t.unitMeasures,c=`largest`in t?t.largest:1/0;if(!o.length)return[];var l={};for(a=e,r=0;r<o.length;r++){n=o[r];var u=s[n];i=r===o.length-1?a/u:Math.floor(a/u),l[n]=i,a-=i*u}if(t.round){var d=c;for(r=0;r<o.length;r++)if(n=o[r],i=l[n],i!==0&&(d--,d===0)){for(var f=r+1;f<o.length;f++){var p=o[f],m=l[p];l[n]+=m*s[p]/s[n],l[p]=0}break}for(r=o.length-1;r>=0;r--)if(n=o[r],i=l[n],i!==0){var h=Math.round(i);if(l[n]=h,r===0)break;var g=o[r-1],_=s[g],v=Math.floor(h*s[n]/_);if(v)l[g]+=v,l[n]=0;else break}}var y=[];for(r=0;r<o.length&&y.length<c;r++)n=o[r],i=l[n],i&&y.push({unitName:n,unitCount:i});return y}function ee(e,t){var n=_(t);if(!e.length){var r=t.units,i=r[r.length-1];return v({unitName:i,unitCount:0},n,t)}for(var a=t.conjunction,o=t.serialComma,s=g(t,`delimiter`)?t.delimiter:g(n,`delimiter`)?n.delimiter:`, `,c=[],l=0;l<e.length;l++)c.push(v(e[l],n,t));return!a||e.length===1?c.join(s):e.length===2?c.join(a):c.slice(0,-1).join(s)+(o?`,`:``)+a+c.slice(-1)}function b(t){var n=function(t,r){t=Math.abs(t);var i=e({},n,r||{});return ee(y(t,i),i)};return e(n,{language:`en`,spacer:` `,conjunction:``,serialComma:!0,units:[`y`,`mo`,`w`,`d`,`h`,`m`,`s`],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},t)}var x=e(b({}),{getSupportedLanguages:function(){var e=[];for(var t in i)g(i,t)&&t!==`gr`&&e.push(t);return e},humanizer:b});typeof define==`function`&&define.amd?define(function(){return x}):t!==void 0&&t.exports?t.exports=x:this.humanizeDuration=x})()}))(),1);function ae(e,t){if(typeof d3<`u`&&typeof d3FormatLocaleDefinition<`u`)return t===void 0&&(t=`,.0f`),d3.formatLocale(d3FormatLocaleDefinition).format(t)(e);let n=typeof e==`string`?parseFloat(e):e;if(isNaN(n))return String(e);if(t){let e=t.includes(`,`),r=t.match(/\.(\d+)/),i=r?parseInt(r[1],10):0;return new Intl.NumberFormat(`en`,{useGrouping:e,minimumFractionDigits:i,maximumFractionDigits:i}).format(n)}return new Intl.NumberFormat(`en`,{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).format(n)}ie.default.humanizer({language:`en`,fallbacks:[`en`],largest:2,round:!0});var oe={};function S(e){let t=1,n,r,i=[...e];if((n=r=i.indexOf(`{`))===-1)return[e];let a=[i.slice(0,r).join(``)];for(;;){let e=i.indexOf(`{`,r+1),o=i.indexOf(`}`,r+1);if(e===-1&&o===-1||(e===-1&&(e=i.length),o!==-1&&o>e?(t++,r=e):o!==-1&&(t--,r=o),t===0&&(a.push(i.slice(n+1,r).join(``).split(`,`,3)),n=r+1,a.push(i.slice(n,e===-1?i.length:e).join(``)),n=e===-1?i.length:e),t!==0&&(e===-1||o===-1)))break}return t===0&&a}function se(e,t={}){let n=e[0]?.trim();if(!n||t[n]===void 0)return`{${e.join(`,`)}}`;let r=t[n],i=e[1]===void 0?`none`:e[1].trim();switch(i){case`number`:return(()=>{let t=e[2]===void 0?null:e[2].trim();if(t!==null&&t!==`integer`)throw`Message format 'number' is only supported for integer values.`;let n=ae(r),i;return t===null&&(i=`${r}`.indexOf(`.`))!==-1&&(n+=`.${r.substring(i+1)}`),n})();case`none`:return r;case`select`:return(()=>{if(e[2]===void 0)return!1;let n=S(e[2]);if(n===!1)return!1;let i=n.length,a=!1;for(let e=0;e+1<i;e++){if(Array.isArray(n[e])||!Array.isArray(n[e+1]))return!1;let t=n[e++].trim();(a===!1&&t===`other`||t==r)&&(a=n[e].join(`,`))}return a!==!1&&C(a,t)})();case`plural`:return(()=>{if(e[2]===void 0)return!1;let n=S(e[2]);if(n===!1)return!1;let i=n.length,a=!1,o=0;for(let e=0;e+1<i;e++){if(typeof n[e]==`object`||typeof n[e+1]!=`object`)return!1;let t=n[e++].trim(),i=[...t];if(e===1&&t.substring(0,7)===`offset:`){let e=[...t.replace(/[\n\r\t]/g,` `)].indexOf(` `,7);if(e===-1)throw Error(`Message pattern is invalid.`);o=parseInt(i.slice(7,e).join(``).trim()),t=i.slice(e+1,e+1+i.length).join(``).trim()}if(a===!1&&t===`other`||t[0]===`=`&&parseInt(i.slice(1,1+i.length).join(``))===r||t===`one`&&r-o===1){let t=n[e];a=(typeof t==`string`?[t]:t).map(e=>e.replace(`#`,String(r-o))).join(`,`)}}return a!==!1&&C(a,t)})();default:throw Error(`Message format '${i}' is not supported.`)}}function C(e,t){let n;if((n=S(e))===!1)throw Error(`Message pattern is invalid.`);for(let e=0;e<n.length;e++){let r=n[e];if(typeof r==`object`){let i=se(r,t);if(i===!1)throw Error(`Message pattern is invalid.`);n[e]=String(i)}}return n.join(``)}function ce(e){oe=e}function w(e,t,n=`app`,r=oe){if(r&&r[n]!==void 0&&r[n][e]!==void 0){let t=r?.[n]?.[e];t!==void 0&&(e=t)}return t?C(e,t):e}function le(e){let t=!!e.opened;e.addEventListener(`opened-changed`,()=>{let n=!!e.opened;if(n===t)return;t=n,e.dispatchEvent(new CustomEvent(n?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0}));let r=n;e.updateComplete.then(()=>{!!e.opened===r&&e.dispatchEvent(new CustomEvent(r?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))})})}function ue(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}var de=new WeakMap;function fe(e,t){let n=t;for(;n;){if(de.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function pe(e){return t=>{if(fe(e,t))return t;let n=e(t);return de.set(n,e),n}}function T(e=`google-chrome`){let t=globalThis.navigator,n=!!t.userAgentData&&t.userAgentData.brands.some(e=>e.brand===`Chromium`);if(e===`chromium`)return n;let r=globalThis.navigator?.vendor,i=globalThis.opr!==void 0,a=globalThis.userAgent?.indexOf(`Edge`)>-1,o=globalThis.userAgent?.match(`CriOS`);if(e===`ios`)return o;if(e===`google-chrome`)return n!=null&&r===`Google Inc.`&&i===!1&&a===!1}var E={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:T(),isIOSChrome:T(`ios`),isChromium:T(`chromium`),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1,isMac:globalThis.navigator?.appVersion?.indexOf(`Mac`)!==-1,isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf(`Apple`)>-1&&globalThis.navigator?.userAgent&&globalThis.navigator?.userAgent.indexOf(`CriOS`)===-1&&globalThis.navigator?.userAgent.indexOf(`FxiOS`)===-1&&globalThis.navigator?.appVersion.indexOf(`Mac`)!==-1},me=t`
  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.overlays-scroll-lock {
    overflow: hidden;
  }

  body.overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }

  html.overlays-scroll-lock-ios-fix {
    height: 100vh;
  }
`,he=class e{static __createGlobalStyleNode(){let e=document.createElement(`style`);return e.setAttribute(`data-overlays`,``),e.textContent=me.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,e.__globalStyleNode||=e.__createGlobalStyleNode()}add(e){if(this.list.find(t=>e===t))throw Error(`controller instance is already added`);return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to remove`);this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to hide`);this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,e.__globalStyleNode&&=(document.head.removeChild(e.__globalStyleNode),void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){let{isIOS:e,isMacSafari:t}=E;document.body.classList.add(`overlays-scroll-lock`),(e||t)&&document.body.classList.add(`overlays-scroll-lock-ios-fix`),e&&document.documentElement.classList.add(`overlays-scroll-lock-ios-fix`)}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>e.preventsScroll===!0))return;let{isIOS:t,isMacSafari:n}=E;document.body.classList.remove(`overlays-scroll-lock`),(t||n)&&document.body.classList.remove(`overlays-scroll-lock-ios-fix`),t&&document.documentElement.classList.remove(`overlays-scroll-lock-ios-fix`)}requestToShowOnly(e){let t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}};he.__globalStyleNode=void 0;var D=Symbol.for(`lion::SingletonManagerClassStorage`),O=globalThis||window,ge=class{constructor(){this._map=O[D]?O[D]:O[D]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}},_e=e=>{let t=null,n=()=>(t===null&&(t=e()),t);return new Proxy({},{get(e,t){let r=n();return t===`addEventListener`||t===`removeEventListener`?Reflect.get(r,t).bind(r):t===`__instance_for_testing`?r:Reflect.get(r,t,r)},set(e,t,r){return Reflect.set(n(),t,r)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(n(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(n())}})},k=new ge;function ve(){if(!k.has(`@lion/ui::overlays::0.x`)){let e=new he;k.set(`@lion/ui::overlays::0.x`,e)}return k.get(`@lion/ui::overlays::0.x`)}var ye=_e(ve);function A(e,t,n={}){function r(e){return`getAttribute`in e}function i(e){if(!r(e))return null;let t=e.getAttribute(`slot`),i=null;if(t){let r=n[t];r&&(i=r.filter(t=>t?.element===e)[0]||null)}return i}let a=i(e);if(a)return a.deepContains;function o(t){if(!r(e))return;let i=e.getAttribute(`slot`);i&&(n[i]=n[i]||[],n[i].push({element:e,deepContains:t}))}let s=e.contains(t);if(s)return o(!0),!0;function c(e){return e.tagName===`SLOT`}function l(e){return c(e)?e.assignedElements():[]}function u(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function d(e){let i=!1;for(let a=0;a<e.length;a+=1){let o=e[a];if(o&&(r(o)||u(o))&&A(o,t,n)){i=!0;break}}return i}function f(e){for(let t=0;t<e.children.length;t+=1){let n=e.children[t],r=i(n);if(r){s=r.deepContains||s;break}let a=l(n);if(d([n.shadowRoot,...a])){s=!0;break}n.children.length>0&&f(n)}}return e instanceof HTMLElement&&e.shadowRoot&&(s=A(e.shadowRoot,t,n),s)?(o(!0),!0):(f(e),o(s),s)}var be=t`
  .overlays {
    position: fixed;
    z-index: 200;
  }

  .overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .overlays__overlay-container::backdrop {
    display: none;
  }

  .overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .overlays__overlay--bottom-sheet {
    width: 100%;
  }

  ::slotted(.overlays__overlay),
  .overlays__overlay {
    pointer-events: auto;
  }

  .overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    display: none;
  }

  .overlays__backdrop--visible {
    display: block;
  }

  .overlays__backdrop--animation-in {
    animation: overlays-backdrop-fade-in 300ms;
    opacity: 0.3;
  }

  .overlays__backdrop--animation-out {
    animation: overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .overlays .overlays__backdrop--animation-in {
      animation: overlays-backdrop-fade-in 1ms;
    }

    .overlays .overlays__backdrop--animation-out {
      animation: overlays-backdrop-fade-out 1ms;
    }
  }

  dialog[data-overlay-outer-wrapper] {
    background-image: none;
    border-style: none;
    padding: 0px;
  }

  /** 
   * We don't want to use pseudo el ::backdrop.  
   * We have our own, that creates more flexibility wrt scrolling etc.
   */
  dialog[data-overlay-outer-wrapper]::backdrop {
    display: none;
  }
`,j={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},M=new WeakMap;function xe(e){return Array.from(e.cssRules).map(e=>e.cssText).join(``)}function Se(e,t,{teardown:n=!1}={}){let r=e===document?document.body:e,i=t.cssText||xe(t);if(n){let e=Array.from(r.querySelectorAll(`style`));for(let t of e)if(t.textContent===i){t.remove();break}}else{let e=document.createElement(`style`),t=window.litNonce;t!==void 0&&e.setAttribute(`nonce`,t),e.textContent=i,r.appendChild(e)}}function Ce(e,t,{teardown:n=!1}={}){let r=!1;e&&!M.has(e)&&M.set(e,[]);let i=M.get(e)??[],a=i.find(e=>t===e);return a&&n?i.splice(i.indexOf(t),1):!a&&!n?i.push(t):(a&&!n||!a&&n)&&(r=!0),{haltFurtherExecution:r}}function we(e,t,{teardown:n=!1}={}){let{haltFurtherExecution:r}=Ce(e,t,{teardown:n});if(r)return;if(!j.supportsAdoptingStyleSheets||E.isIOS){Se(e,t,{teardown:n});return}let i=t instanceof CSSStyleSheet?t:t.styleSheet;if(!i)throw Error(`Please provide a CSSResultOrNative style`);n?e.adoptedStyleSheets.includes(i)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(i),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]}function Te(e,t,{teardown:n=!1}={}){for(let r of t)j.adoptStyle(e,r,{teardown:n})}j.adoptStyle=we,j.adoptStyles=Te;var Ee=({visibility:e,display:t})=>e!==`hidden`&&t!==`none`,De=({display:e})=>e===`contents`;function Oe(e){if(!e||!e.isConnected||!Ee(e.style))return!1;let t=window.getComputedStyle(e);return Ee(t)?De(t)?!0:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!1}function ke(e,t){let n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function Ae(e,t){let n=[];for(;e.length>0&&t.length>0;)ke(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return[...n,...e,...t]}function N(e){let t=e.length;if(t<2)return e;let n=Math.ceil(t/2);return Ae(N(e.slice(0,n)),N(e.slice(n)))}var P=`matches`in Element.prototype?`matches`:`msMatchesSelector`;function je(e){return e[P](`input, select, textarea, button, object`)?e[P](`:not([disabled])`):e[P](`a[href], area[href], iframe, [tabindex], [contentEditable]`)}function Me(e){return je(e)?Number(e.getAttribute(`tabindex`)||0):-1}function Ne(e){if(e.localName===`slot`)return e.assignedNodes({flatten:!0});let{children:t}=e.shadowRoot||e;return t||[]}function Pe(e){return e.nodeType===Node.ELEMENT_NODE?e.localName===`slot`||Oe(e):!1}function Fe(e,t){if(!Pe(e))return!1;let n=e,r=Me(n),i=r>0;r>=0&&t.push(n);let a=Ne(n);for(let e=0;e<a.length;e+=1)i=Fe(a[e],t)||i;return i}function Ie(e){let t=[];return Fe(e,t)?N(t):t}var Le=`modulepreload`,Re=function(e,t){return new URL(e,t).href},ze={},Be=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Re(t,n),t=s(t),t in ze)return;ze[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Le,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Ve({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:n}){if(!(t.isConnected||n.isConnected))throw Error(`[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.`);let r,i=document.createComment(`tempMarker`);t.isConnected?(r=t.parentElement||t.getRootNode(),r.insertBefore(i,t),e.appendChild(t)):n.assignedSlot?(r=n.assignedSlot.parentElement||n.assignedSlot.getRootNode(),r.insertBefore(i,n.assignedSlot),e.appendChild(t),t.appendChild(n.assignedSlot)):(r=n.parentElement||n.getRootNode(),r.insertBefore(i,n),e.appendChild(t),t.appendChild(n)),r.insertBefore(e,i),r?.removeChild(i)}async function He(){return Be(()=>import(`./popper--LklqrOK.js`),[],import.meta.url)}var F=new WeakMap,I=class e extends EventTarget{#e=!1;constructor(e={},t=ye){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:`none`,hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:`description`,visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:`top`,strategy:`fixed`,modifiers:[{name:`preventOverflow`,enabled:!0,options:{boundariesElement:`viewport`,padding:8}},{name:`flip`,options:{boundariesElement:`viewport`,padding:16}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},{name:`arrow`,enabled:!1}]},viewportConfig:{placement:`center`},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw Error(`[OverlayController] You need to provide a .placementMode ("global"|"local")`);if(![`global`,`local`].includes(e.placementMode))throw Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw Error(`[OverlayController] You need to provide a .contentNode`);if(e.isTooltip&&!e.handlesAccessibility)throw Error(`[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled`)}_init(){this.__contentHasBeenInitialized||=(this.__initContentDomStructure(),!0),this.contentWrapperNode.removeAttribute(`style`),this.contentWrapperNode.removeAttribute(`class`),this.placementMode===`local`&&(e.popperModule||=He()),this.__handleOverlayStyles({phase:`init`}),this._handleFeatures({phase:`init`})}__handleOverlayStyles({phase:e}){let t=this.contentWrapperNode?.getRootNode();e===`init`?j.adoptStyle(t,be):e===`teardown`&&j.adoptStyle(t,be,{teardown:!0})}__initContentDomStructure(){let e=document.createElement(`dialog`);e.setAttribute(`role`,`none`),e.setAttribute(`data-overlay-outer-wrapper`,``),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement(`div`)),this.contentWrapperNode.setAttribute(`data-id`,`content-wrapper`),Ve({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute(`tabindex`,`-1`),this.__wrappingDialogNode.style.display=`none`,this.contentWrapperNode.style.zIndex=`1`,getComputedStyle(this.contentNode).position===`absolute`&&(this.contentNode.style.position=`static`),HTMLDialogElement&&`closedBy`in HTMLDialogElement.prototype?e.closedBy=`none`:(e.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`keyup`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`cancel`,e=>{e.stopPropagation()}),e.addEventListener(`close`,e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode===`local`&&e===`setup`){let e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex=`1`)}}__setupTeardownAccessibility({phase:e}){if(e===`init`){this.__storeOriginalAttrs(this.contentNode,[`role`,`id`]);let e=this.trapsKeyboardFocus;if(this.invokerNode){let t=[`aria-labelledby`,`aria-describedby`];e||t.push(`aria-expanded`),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute(`id`,this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`,this._contentId),this.contentNode.setAttribute(`role`,`tooltip`)):(this.invokerNode&&!e&&this.invokerNode.setAttribute(`aria-expanded`,`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute(`role`,`alertdialog`):this.contentNode.getAttribute(`role`)||this.contentNode.setAttribute(`role`,`dialog`))}else e===`teardown`&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){let n={};t.forEach(t=>{n[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,n)}__restoreOriginalAttrs(){for(let[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,n])=>{n===null?e.removeAttribute(t):e.setAttribute(t,n)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!==`none`}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let t=new CustomEvent(`before-show`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display=``,this._keepBodySize({phase:`before-show`}),await this._handleFeatures({phase:`show`}),this._keepBodySize({phase:`show`}),await this._handlePosition({phase:`show`}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event(`show`)),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode===`global`){let t=`overlays__overlay-container--${this.viewportConfig.placement}`;e===`show`?(this.contentWrapperNode.classList.add(`overlays__overlay-container`),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add(`overlays__overlay`)):e===`hide`&&(this.contentWrapperNode.classList.remove(`overlays__overlay-container`),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove(`overlays__overlay`))}else this.placementMode===`local`&&e===`show`&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case`before-show`:this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case`show`:{if(window.getComputedStyle){let e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue(`margin-right`),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue(`margin-bottom`),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;let e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,n=this.__bodyMarginRight+e,r=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set(`margin-right`,CSS.px(n)),document.body.attributeStyleMap.set(`margin-bottom`,CSS.px(r))):(document.body.style.marginRight=`${n}px`,document.body.style.marginBottom=`${r}px`);break}case`hide`:document.body.style.marginRight=this.__bodyMarginRightInline||``,document.body.style.marginBottom=this.__bodyMarginBottomInline||``;break}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent(`before-hide`,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display=`none`,this._handleFeatures({phase:`hide`}),this._keepBodySize({phase:`hide`}),this.dispatchEvent(new Event(`hide`)),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:`hide`}),e&&e.classList.remove(`overlays__backdrop--animation-in`)}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`overlays__backdrop--animation-in`)}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:`nearest`})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction==`function`&&(e===`init`&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case`show`:this.manager.requestToPreventScroll();break;case`hide`:this.manager.requestToEnableScroll();break;case`teardown`:this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case`show`:this.manager.requestToShowOnly(this);break;case`hide`:this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case`init`:this.__backdropInitialized||=(this.config?.backdropNode||(this.__backdropNode=document.createElement(`div`),this.__backdropNode.classList.add(`overlays__backdrop`)),this.__wrappingDialogNode.prepend(this.backdropNode),!0);break;case`show`:this.config.hasBackdrop&&this.backdropNode.classList.add(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case`hide`:case`teardown`:this.backdropNode.classList.remove(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!1;break}}#n=e=>{e.key===`Shift`&&(this.#e=!0)};#r=e=>{e.key===`Shift`&&(this.#e=!1)};#i=()=>{window.addEventListener(`keydown`,this.#n),window.addEventListener(`keyup`,this.#r)};#a=()=>{window.removeEventListener(`keydown`,this.#n),window.removeEventListener(`keyup`,this.#r)};#o=()=>Ie(this.contentNode).find(e=>e.hasAttribute(`autofocus`))||this.contentNode;#s=()=>{this.__wrappingDialogNode?.addEventListener(`focus`,()=>{this.#e||this.#o().focus()})};_handleTrapsKeyboardFocus({phase:e}){e===`init`&&(this.contentNode.style.outline=`none`,this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn(`[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root`)),e===`show`&&(this.#i(),this.#s(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#o().focus()),e===`hide`&&this.#a()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!==`Escape`||F.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#c(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),F.set(e,this))}#c=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||A(this.contentNode,e.target);#l=e=>{e.key===`Escape`&&(this.#c(e)||this.hide())};_handleHidesOnEsc({phase:e}){e===`init`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.contentNode.addEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener(`keyup`,this.__escKeyHandler)),e===`show`&&(this.__escKeyHandlerCalled=!1),e===`teardown`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener(`keyup`,this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e===`init`?(document.removeEventListener(`keyup`,this.#l),document.addEventListener(`keyup`,this.#l)):e===`teardown`&&document.removeEventListener(`keyup`,this.#l)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode===`global`)return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case`max`:this.contentWrapperNode.style.maxWidth=e;break;case`full`:this.contentWrapperNode.style.width=e;break;case`min`:this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width=`auto`;break}}_handleHidesOnOutsideClick({phase:e}){let t=e===`show`?`addEventListener`:`removeEventListener`;if(e===`show`){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!e&&!t&&this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.contentWrapperNode[t](`mouseup`,this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.invokerNode[t](`mouseup`,this.__onInsideMouseUp,!0)),document.documentElement[t](`mouseup`,this.__onDocumentMouseUp,!0),window[t](`blur`,this.__onWindowBlur)}_handleAccessibility({phase:e}){(e===`init`||e===`teardown`)&&this.__setupTeardownAccessibility({phase:e});let t=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!t&&this.invokerNode.setAttribute(`aria-expanded`,`${e===`show`}`)}teardown(){this.__handleOverlayStyles({phase:`teardown`}),this._handleFeatures({phase:`teardown`}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&=(this._popper.destroy(),void 0),e.popperModule!==void 0){let{createPopper:t}=await e.popperModule;this._popper=t(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute(`aria-disabled`)===`true`:!1}};I.popperModule=void 0;function L(e,t){if(typeof e!=`object`||typeof t!=`object`||e===null||t===null)return e===t;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>L(e[n],t[n]))}var R=pe(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){let t=!L(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`opened`&&this.opened!==t&&this.dispatchEvent(new CustomEvent(`opened-changed`,{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i}){let a=this._defineOverlayConfig()||{};return new I({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i,...a,...this.config,popperConfig:{...a.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...a.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:`local`}}updated(e){super.updated(e),e.has(`opened`)&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||=(this._setupOverlayCtrl(),!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||=Array.from(this.children).find(e=>e.slot===`backdrop`),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||=Array.from(this.children).find(e=>e.slot===`content`)||this.config.contentNode,this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector(`#overlay-content-node-wrapper`)}_setupOverlayCtrl(){if(this.#e)return;let e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{let t=new CustomEvent(`before-opened`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{let t=new CustomEvent(`before-closed`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.addEventListener(`before-hide`,this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.removeEventListener(`before-hide`,this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let e=this._overlayCtrl;e.placementMode===`local`&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}});function Ue(){return{visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener(`click`,t)},teardown:()=>{e.invokerNode?.removeEventListener(`click`,t)}}}}}var z=()=>({placementMode:`local`,inheritsReferenceWidth:`min`,hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:`bottom-start`,modifiers:[{name:`offset`,enabled:!1}]},handlesAccessibility:!0,...Ue()}),We=t`
  :host {
    display: contents;
    position: relative;
  }

  .popover-pane {
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    min-width: calc(180rem / 16);
    max-width: calc(320rem / 16);
    overflow: auto;
    max-height: 40vh;
  }

  ::slotted([slot='content-body']) {
    padding: var(--c-spacing-md);
    display: grid;
    font-size: var(--c-text-base);
    font-weight: 400;
  }

  ::slotted([slot='content-footer']) {
    background-color: var(--c-color-neutral-fill-quiet);
    padding: var(--c-spacing-md);
    position: sticky;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
  }
`,B=new WeakMap,V=new WeakSet,H=class extends R(i){constructor(){super(),o(this,V),this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,s(this,B,null),le(this)}_defineOverlayConfig(){return{...z(),inheritsReferenceWidth:this.matchInvokerWidth?`min`:`none`,popperConfig:{strategy:`fixed`,placement:this.placement,modifiers:[{name:`offset`,options:{offset:[0,this.distance]}},...ue()]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(`.popover-pane`)}get _overlayInvokerNode(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}get _overlayReferenceNode(){return this.anchor}render(){return e`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div class="popover-pane" part="popup">
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){a(V,this,Ge).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has(`for`)||e.has(`anchor`))&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode})}async show(){this.opened=!0,await this.updateComplete,await this.open()}async hide(){this.opened=!1,await this.updateComplete,await this.close()}};function Ge(){if(l(B,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:(e.textContent??``).trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),u(B,this,t)}H.styles=[We],c([d({reflect:!0})],H.prototype,`for`,void 0),c([d({attribute:!1})],H.prototype,`anchor`,void 0),c([d({reflect:!0})],H.prototype,`placement`,void 0),c([d({type:Number})],H.prototype,`distance`,void 0),c([d({attribute:`match-invoker-width`,type:Boolean})],H.prototype,`matchInvokerWidth`,void 0),c([d({type:Boolean,attribute:`without-arrow`})],H.prototype,`withoutArrow`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,H);var U={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values(U);var Ke=`important`,qe=` !important`,Je=m(class extends h{constructor(e){if(super(e),e.type!==p.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in t){let n=t[e];if(n!=null){this.ft.add(e);let t=typeof n==`string`&&n.endsWith(qe);e.includes(`-`)||t?r.setProperty(e,t?n.slice(0,-11):n,t?Ke:``):r[e]=n}}return n}}),Ye=t`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Xe=t`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ze=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,nt=e=>{throw TypeError(e)},rt=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,it=(e,t)=>{for(var n in t||={})et.call(t,n)&&rt(e,n,t[n]);if($e)for(var n of $e(t))tt.call(t,n)&&rt(e,n,t[n]);return e},at=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qe(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ze(t,n,i),i},ot=(e,t,n)=>t.has(e)||nt(`Cannot `+n),st=(e,t,n)=>(ot(e,t,`read from private field`),n?n.call(e):t.get(e)),ct=(e,t,n)=>t.has(e)?nt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),lt=(e,t,n,r)=>(ot(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),W,G=class extends i{constructor(){super(),ct(this,W,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,it({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){st(this,W)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),lt(this,W,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};W=new WeakMap,G.version=`2.20.1`,G.dependencies={},at([d()],G.prototype,`dir`,2),at([d()],G.prototype,`lang`,2);var ut=class extends G{render(){return e` <slot></slot> `}};ut.styles=[Xe,Ye],ut.define(`sl-visually-hidden`);var K=e=>e??r,dt=t`
  .badge-indicator {
    --_badge-color: var(--c-color-info-fill-loud);
    --_text-color: var(--c-color-info-on-loud);
    --badge-size: calc(8rem / 16);
    display: inline-flex;
    min-width: var(--badge-size);
    min-height: var(--badge-size);
    justify-content: center;
    align-items: center;
    background-color: var(--_badge-color);
    color: var(--_text-color);
    border-radius: var(--c-radius-full);
    border: 2px solid Canvas;
  }

  .badge-indicator--secondary {
    --_badge-color: var(--c-color-warning-fill-loud);
  }

  .badge-indicator--inverse {
    --_badge-color: var(--c-color-neutral-fill-normal);
    --_text-color: var(--c-color-neutral-on-normal);
  }

  .badge-indicator--with-number {
    --badge-size: var(--c-size-icon-md);
    padding: calc(2rem / 16);
  }

  .number {
    display: inline-flex;
    font-size: var(--c-text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }
`,q=class extends i{constructor(){super(),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.variant=`primary`,this.id=this.id||`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){if(this.showCount)return this.badgeCount>99?`99+`:this.badgeCount.toString()}getBadgeRole(){return this.altText?`img`:r}getLabelId(){return`${this.id}-label`}renderBadgeContents(){return e`
      ${this.showCount()?e`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:r}
      ${this.altText?e`
            <sl-visually-hidden id=${this.getLabelId()}
              >${this.altText}</sl-visually-hidden
            >
          `:r}
    `}render(){return e`
      <div
        part="badge"
        id=${this.id}
        class="${g({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?this.getLabelId():r}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};q.styles=[dt],c([d({attribute:`alt-text`})],q.prototype,`altText`,void 0),c([d({attribute:`badge-count`})],q.prototype,`badgeCount`,void 0),c([d({attribute:`badge-count-suffix`})],q.prototype,`badgeCountSuffix`,void 0),c([d()],q.prototype,`variant`,void 0),c([d()],q.prototype,`id`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,q);var ft=Symbol.for(``),pt=e=>{if(e?.r===ft)return e?._$litStatic$},J=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:ft}),mt=new Map,ht=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=pt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=mt.get(e))===void 0&&(o.raw=o,mt.set(e,t=o)),n=s}return e(t,...n)})(e),gt=t`
  :host {
    --_padding-inline: var(--c-spacing-md);
    --_padding-block: var(--c-spacing-sm);
  }

  .nav-item {
    display: grid;
    gap: var(--c-spacing-md);
    grid-template-columns: auto 1fr auto;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding-inline: var(--_padding-inline);
    padding-block: var(--_padding-block);
    border-radius: var(--c-radius-md);
    position: relative;
  }

  craft-badge-indicator {
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .nav-item--prefixed {
    padding-inline: var(--c-spacing-sm);
    grid-template-columns: calc(24rem / 16) 1fr auto;
  }

  .nav-item--flush {
    margin-inline-start: calc(var(--_padding-inline) * -1);
  }

  :host([group]) {
    margin-block-start: var(--c-spacing-sm);
  }

  :host([active]) .nav-item {
    &:before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block-start: 12%;
      width: calc(3rem / 16);
      height: 76%;
      border-radius: calc(2rem / 16);
      background-color: currentColor;
      transform: translateX(-150%);
    }
  }

  .nav-item:not(.nav-item--static):hover:not(:has(craft-button:hover)) {
    background-color: color-mix(in srgb, currentColor, transparent 95%);
  }

  /* No href: render as a plain label, not an interactive item. */
  .nav-item--static {
    cursor: default;
  }

  .nav-item__prefix {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    width: 100%;
  }

  .nav-item__suffix {
    justify-self: end;
  }

  .active-indicator {
    display: inline-block;
    aspect-ratio: 1;
    width: calc(4rem / 16);
    border-radius: var(--c-radius-full);
    background-color: currentColor;

    :host([active]) & {
      width: calc(6rem / 16);
    }
  }

  :host(:not([group])) .subnav {
    margin-block-start: var(--c-spacing-sm);
    margin-inline-start: calc(
      (var(--c-size-icon-md) / 2) + var(--c-spacing-sm) + 1px
    );
    padding-inline: var(--c-spacing-sm);
    border-left: 2px solid color-mix(in srgb, currentColor, transparent 90%);
  }

  /*
   * Collapsed to a rail there's nowhere to indent a subnav, so it moves into a
   * popover. The label leads it as the group's heading, standing in for the
   * tooltip a childless item would get.
   */
  .flyout {
    display: grid;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-sm);
  }

  .flyout__label {
    padding-inline: var(--c-spacing-sm);
    font-size: var(--c-text-sm);
    font-weight: 600;
    color: var(--c-text-quiet);
  }

  .nav-item--icon {
    width: calc(var(--c-size-touch-target) - var(--c-spacing-sm));
    display: block;
    border: 1px solid transparent;
    aspect-ratio: 1;
    padding: 0;

    .nav-item__suffix {
      display: grid;
      justify-content: center;
      align-items: center;
    }

    .subnav {
      margin: 0;
      border-left: none;
      padding-inline: 0;
    }
  }
`,Y=new WeakMap,X=new WeakMap,Z=new WeakMap,Q=new WeakMap,_t=new WeakMap,$=class t extends i{get hasLabel(){return Array.from(this.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}constructor(){super(),this.active=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,s(this,Y,void 0),s(this,X,void 0),s(this,Z,()=>{clearTimeout(l(Y,this)),this.flyoutOpen=!0}),s(this,Q,()=>{clearTimeout(l(Y,this)),u(Y,this,setTimeout(()=>{this.flyoutOpen=!1},t.flyoutCloseDelay))}),s(this,_t,e=>{this.flyoutOpen=e.target.opened===!0}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=u(X,this,new AbortController);this.addEventListener(`mouseenter`,l(Z,this),{signal:e}),this.addEventListener(`mouseleave`,l(Q,this),{signal:e}),this.addEventListener(`focusin`,l(Z,this),{signal:e}),this.addEventListener(`focusout`,l(Q,this),{signal:e})}disconnectedCallback(){l(X,this)?.abort(),clearTimeout(l(Y,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}renderIconItem(t){let n=`item-${this.id}`,i=this.href?J`a`:J`span`;return ht`
      <${i}
        class="${g({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":!this.href})}"
        id="${n}"
        href="${K(this.href||void 0)}"
        aria-current="${this.href?this.active?`page`:`false`:r}"
        aria-expanded="${t?this.flyoutOpen?`true`:`false`:r}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${i}>
      ${t?e`
              <craft-popover
                for="${n}"
                placement="right-start"
                .opened="${this.flyoutOpen}"
                @opened-changed="${l(_t,this)}"
              >
                <div class="flyout">
                  <div class="flyout__label"><slot></slot></div>
                  <slot name="subnav"></slot>
                </div>
              </craft-popover>
            `:e`<craft-tooltip for="${n}" placement="right-start"
              ><slot></slot
            ></craft-tooltip>`}
    `}renderSubnavToggle(){return e`
      <craft-button
        @click="${this.toggleSubnav}"
        variant="${U.Plain}"
        icon
        size="small"
        aria-controls="${this.id}-subnav"
        aria-expanded="${this.subnavState===`open`?`true`:`false`}"
        aria-labelledby="${this.id}-toggle-icon ${this.id}-label"
      >
        <craft-icon
          id="${this.id}-toggle-icon"
          name="${this.subnavState===`closed`?`chevron-down`:`chevron-up`}"
          style="font-size: calc(10rem / 16)"
          label="${w(`Toggle subnavigation`)}"
        ></craft-icon>
      </craft-button>
    `}renderPrefix(t=!1){return t&&this.togglePosition===`prefix`?e`
        <span class="nav-item__prefix">${this.renderSubnavToggle()}</span>
      `:e`
      <span class="nav-item__prefix">
        <slot name="prefix">
          <slot name="icon">
            ${this.icon?e` <craft-icon
                  name="${this.icon}"
                  class="nav-icon"
                ></craft-icon>`:r}
          </slot>
          ${this.indicator?e`<craft-badge-indicator
                altText="${w(`Has Notifications`)}"
              />`:r}
        </slot>
      </span>
    `}renderSuffix(t=!1){return e`
      <div class="nav-item__suffix">
        <slot name="suffix">
          ${t&&this.togglePosition===`suffix`?this.renderSubnavToggle():r}
        </slot>
      </div>
    `}renderItem(e,t=!1){let n=this.href?J`a`:J`span`;return ht`
      <${n}
        class="${g({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":!this.href})}"
        href="${K(this.href||void 0)}"
        aria-current="${this.href?this.active?`page`:`false`:r}"
      >
        ${t?this.renderPrefix(e):r}
        <slot
          id="${this.id}-label"
          @slotchange="${()=>this.requestUpdate()}"
        ></slot>
        ${this.renderSuffix(e)}
      </${n}>
    `}render(){let t=!!this.querySelector(`[slot="subnav"]`),n=t&&this.hasLabel&&!this.group,i=n&&this.togglePosition===`prefix`||!!this.icon||!!this.querySelector(`[slot="prefix"]`)||!!this.querySelector(`[slot="icon"]`),a=!n||this.subnavState===`open`,o=t&&!this.iconOnly;return e`
      <li>
        ${this.iconOnly?this.renderIconItem(t):this.renderItem(n,i)}
        ${o?e`
              <div
                class="subnav"
                id="${this.id}-subnav"
                style="${Je({display:a?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:r}
      </li>
    `}};$.styles=gt,$.flyoutCloseDelay=150,c([d()],$.prototype,`icon`,void 0),c([d()],$.prototype,`href`,void 0),c([d({type:Boolean,reflect:!0})],$.prototype,`active`,void 0),c([d({type:Boolean})],$.prototype,`external`,void 0),c([d({type:Boolean})],$.prototype,`indicator`,void 0),c([d()],$.prototype,`id`,void 0),c([d({reflect:!0,type:Boolean,attribute:`icon-only`})],$.prototype,`iconOnly`,void 0),c([d()],$.prototype,`flush`,void 0),c([d({reflect:!0,attribute:`initial-state`})],$.prototype,`initialState`,void 0),c([d({type:Boolean,reflect:!0})],$.prototype,`group`,void 0),c([d({attribute:`toggle-position`})],$.prototype,`togglePosition`,void 0),c([f()],$.prototype,`subnavState`,void 0),c([f()],$.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,$);export{p as S,re as _,H as a,m as b,Be as c,E as d,pe as f,w as g,ce as h,U as i,k as l,le as m,K as n,z as o,ue as p,Je as r,R as s,$ as t,_e as u,te as v,h as x,g as y};