import{c as e,f as t,i as n,r,t as i}from"./lit-DNaDb1T7.js";import{t as a}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{n as o,t as s}from"./decorators-D0-gbKXH.js";import{t as c}from"./query-Df4-SAIv.js";import{a as l,i as u,o as d,r as f,s as p}from"./axios-Mm3N8iqg.js";import{t as m}from"./actionClient-NFMyfrDL-DsDU7tG9.js";var h={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`},g=t`
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
`;function _(e){if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return null}}async function v(e,t={}){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm))return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);typeof n.redirect==`string`&&n.redirect&&y(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:{...e.detail??{},...t.trigger?{trigger:t.trigger}:{},...t.sourceEvent?{sourceEvent:t.sourceEvent}:{}}}));break;case`download`:{if(e.confirm&&!confirm(e.confirm))return;if(e.method&&e.method!==`GET`){let t=await m.request({url:e.url,method:e.method,data:e.body,responseType:`blob`}),n=String(t.headers[`content-disposition`]??``),r=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(n),i=e.filename??(r?.[1]?decodeURIComponent(r[1]):`download`),a=URL.createObjectURL(t.data),o=document.createElement(`a`);o.href=a,o.download=i,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a);break}let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}function y(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var b={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},x=e=>(...t)=>({_$litDirective$:e,values:t}),S=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},C=x(class extends S{constructor(e){if(super(e),e.type!==b.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return n}}),ee=e=>e??r,te=Object.create,ne=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ie=Object.getOwnPropertyNames,ae=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty,se=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),ce=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ie(t),a=0,o=i.length,s;a<o;a++)s=i[a],!oe.call(e,s)&&s!==n&&ne(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=re(t,s))||r.enumerable});return e},le=((e,t,n)=>(n=e==null?{}:te(ae(e)),ce(t||!e||!e.__esModule?ne(n,`default`,{value:e,enumerable:!0}):n,e)))(se(((e,t)=>{(function(){var e=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n],t)g(t,r)&&(e[r]=t[r]);return e},n=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`},r=s([`χρόνος`,`χρόνια`],[`μήνας`,`μήνες`],[`εβδομάδα`,`εβδομάδες`],[`μέρα`,`μέρες`],[`ώρα`,`ώρες`],[`λεπτό`,`λεπτά`],[`δευτερόλεπτο`,`δευτερόλεπτα`],[`χιλιοστό του δευτερολέπτου`,`χιλιοστά του δευτερολέπτου`],`,`),i={af:s([`jaar`,`jaar`],[`maand`,`maande`],[`week`,`weke`],[`dag`,`dae`],[`uur`,`ure`],[`minuut`,`minute`],[`sekonde`,`sekondes`],[`millisekonde`,`millisekondes`],`,`),am:a(`ዓመት`,`ወር`,`ሳምንት`,`ቀን`,`ሰዓት`,`ደቂቃ`,`ሰከንድ`,`ሚሊሰከንድ`),ar:e(a(function(e){return[`سنة`,`سنتان`,`سنوات`][d(e)]},function(e){return[`شهر`,`شهران`,`أشهر`][d(e)]},function(e){return[`أسبوع`,`أسبوعين`,`أسابيع`][d(e)]},function(e){return[`يوم`,`يومين`,`أيام`][d(e)]},function(e){return[`ساعة`,`ساعتين`,`ساعات`][d(e)]},function(e){return[`دقيقة`,`دقيقتان`,`دقائق`][d(e)]},function(e){return[`ثانية`,`ثانيتان`,`ثواني`][d(e)]},function(e){return[`جزء من الثانية`,`جزآن من الثانية`,`أجزاء من الثانية`][d(e)]},`,`),{delimiter:` ﻭ `,_hideCountIf2:!0,_digitReplacements:[`۰`,`١`,`٢`,`٣`,`٤`,`٥`,`٦`,`٧`,`٨`,`٩`]}),bg:u([`години`,`година`,`години`],[`месеца`,`месец`,`месеца`],[`седмици`,`седмица`,`седмици`],[`дни`,`ден`,`дни`],[`часа`,`час`,`часа`],[`минути`,`минута`,`минути`],[`секунди`,`секунда`,`секунди`],[`милисекунди`,`милисекунда`,`милисекунди`]),bn:a(`বছর`,`মাস`,`সপ্তাহ`,`দিন`,`ঘন্টা`,`মিনিট`,`সেকেন্ড`,`মিলিসেকেন্ড`),ca:s([`any`,`anys`],[`mes`,`mesos`],[`setmana`,`setmanes`],[`dia`,`dies`],[`hora`,`hores`],[`minut`,`minuts`],[`segon`,`segons`],[`milisegon`,`milisegons`],`,`),ckb:a(`ساڵ`,`مانگ`,`هەفتە`,`ڕۆژ`,`کاژێر`,`خولەک`,`چرکە`,`میلی چرکە`,`.`),cs:a(function(e){return[`rok`,`roku`,`roky`,`let`][p(e)]},function(e){return[`měsíc`,`měsíce`,`měsíce`,`měsíců`][p(e)]},function(e){return[`týden`,`týdne`,`týdny`,`týdnů`][p(e)]},function(e){return[`den`,`dne`,`dny`,`dní`][p(e)]},function(e){return[`hodina`,`hodiny`,`hodiny`,`hodin`][p(e)]},function(e){return[`minuta`,`minuty`,`minuty`,`minut`][p(e)]},function(e){return[`sekunda`,`sekundy`,`sekundy`,`sekund`][p(e)]},function(e){return[`milisekunda`,`milisekundy`,`milisekundy`,`milisekund`][p(e)]},`,`),cy:a(`flwyddyn`,`mis`,`wythnos`,`diwrnod`,`awr`,`munud`,`eiliad`,`milieiliad`),da:s([`år`,`år`],[`måned`,`måneder`],[`uge`,`uger`],[`dag`,`dage`],[`time`,`timer`],[`minut`,`minutter`],[`sekund`,`sekunder`],[`millisekund`,`millisekunder`],`,`),de:s([`Jahr`,`Jahre`],[`Monat`,`Monate`],[`Woche`,`Wochen`],[`Tag`,`Tage`],[`Stunde`,`Stunden`],[`Minute`,`Minuten`],[`Sekunde`,`Sekunden`],[`Millisekunde`,`Millisekunden`],`,`),el:r,en:s([`year`,`years`],[`month`,`months`],[`week`,`weeks`],[`day`,`days`],[`hour`,`hours`],[`minute`,`minutes`],[`second`,`seconds`],[`millisecond`,`milliseconds`]),eo:s([`jaro`,`jaroj`],[`monato`,`monatoj`],[`semajno`,`semajnoj`],[`tago`,`tagoj`],[`horo`,`horoj`],[`minuto`,`minutoj`],[`sekundo`,`sekundoj`],[`milisekundo`,`milisekundoj`],`,`),es:s([`año`,`años`],[`mes`,`meses`],[`semana`,`semanas`],[`día`,`días`],[`hora`,`horas`],[`minuto`,`minutos`],[`segundo`,`segundos`],[`milisegundo`,`milisegundos`],`,`),et:s([`aasta`,`aastat`],[`kuu`,`kuud`],[`nädal`,`nädalat`],[`päev`,`päeva`],[`tund`,`tundi`],[`minut`,`minutit`],[`sekund`,`sekundit`],[`millisekund`,`millisekundit`],`,`),eu:a(`urte`,`hilabete`,`aste`,`egun`,`ordu`,`minutu`,`segundo`,`milisegundo`,`,`),fa:a(`سال`,`ماه`,`هفته`,`روز`,`ساعت`,`دقیقه`,`ثانیه`,`میلی ثانیه`),fi:s([`vuosi`,`vuotta`],[`kuukausi`,`kuukautta`],[`viikko`,`viikkoa`],[`päivä`,`päivää`],[`tunti`,`tuntia`],[`minuutti`,`minuuttia`],[`sekunti`,`sekuntia`],[`millisekunti`,`millisekuntia`],`,`),fo:s([`ár`,`ár`],[`mánaður`,`mánaðir`],[`vika`,`vikur`],[`dagur`,`dagar`],[`tími`,`tímar`],[`minuttur`,`minuttir`],[`sekund`,`sekund`],[`millisekund`,`millisekund`],`,`),fr:a(function(e){return`an`+(e>=2?`s`:``)},`mois`,function(e){return`semaine`+(e>=2?`s`:``)},function(e){return`jour`+(e>=2?`s`:``)},function(e){return`heure`+(e>=2?`s`:``)},function(e){return`minute`+(e>=2?`s`:``)},function(e){return`seconde`+(e>=2?`s`:``)},function(e){return`milliseconde`+(e>=2?`s`:``)},`,`),gr:r,he:s([`שנה`,`שנים`],[`חודש`,`חודשים`],[`שבוע`,`שבועות`],[`יום`,`ימים`],[`שעה`,`שעות`],[`דקה`,`דקות`],[`שניה`,`שניות`],[`מילישנייה`,`מילישניות`]),hr:a(function(e){return e%10==2||e%10==3||e%10==4?`godine`:`godina`},function(e){return e===1?`mjesec`:e===2||e===3||e===4?`mjeseca`:`mjeseci`},function(e){return e%10==1&&e!==11?`tjedan`:`tjedna`},o([`dan`,`dana`]),function(e){return e===1?`sat`:e===2||e===3||e===4?`sata`:`sati`},function(e){var t=e%10;return(t===2||t===3||t===4)&&(e<10||e>14)?`minute`:`minuta`},function(e){var t=e%10;return t===5||Math.floor(e)===e&&e>=10&&e<=19?`sekundi`:t===1?`sekunda`:t===2||t===3||t===4?`sekunde`:`sekundi`},function(e){return e===1?`milisekunda`:e%10==2||e%10==3||e%10==4?`milisekunde`:`milisekundi`},`,`),hi:a(`साल`,o([`महीना`,`महीने`]),o([`हफ़्ता`,`हफ्ते`]),`दिन`,o([`घंटा`,`घंटे`]),`मिनट`,`सेकंड`,`मिलीसेकंड`),hu:a(`év`,`hónap`,`hét`,`nap`,`óra`,`perc`,`másodperc`,`ezredmásodperc`,`,`),id:a(`tahun`,`bulan`,`minggu`,`hari`,`jam`,`menit`,`detik`,`milidetik`),is:s([`ár`,`ár`],[`mánuður`,`mánuðir`],[`vika`,`vikur`],[`dagur`,`dagar`],[`klukkutími`,`klukkutímar`],[`mínúta`,`mínútur`],[`sekúnda`,`sekúndur`],[`millisekúnda`,`millisekúndur`]),it:s([`anno`,`anni`],[`mese`,`mesi`],[`settimana`,`settimane`],[`giorno`,`giorni`],[`ora`,`ore`],[`minuto`,`minuti`],[`secondo`,`secondi`],[`millisecondo`,`millisecondi`],`,`),ja:a(`年`,`ヶ月`,`週間`,`日`,`時間`,`分`,`秒`,`ミリ秒`),km:a(`ឆ្នាំ`,`ខែ`,`សប្តាហ៍`,`ថ្ងៃ`,`ម៉ោង`,`នាទី`,`វិនាទី`,`មិល្លីវិនាទី`),kn:s([`ವರ್ಷ`,`ವರ್ಷಗಳು`],[`ತಿಂಗಳು`,`ತಿಂಗಳುಗಳು`],[`ವಾರ`,`ವಾರಗಳು`],[`ದಿನ`,`ದಿನಗಳು`],[`ಗಂಟೆ`,`ಗಂಟೆಗಳು`],[`ನಿಮಿಷ`,`ನಿಮಿಷಗಳು`],[`ಸೆಕೆಂಡ್`,`ಸೆಕೆಂಡುಗಳು`],[`ಮಿಲಿಸೆಕೆಂಡ್`,`ಮಿಲಿಸೆಕೆಂಡುಗಳು`]),ko:a(`년`,`개월`,`주일`,`일`,`시간`,`분`,`초`,`밀리 초`),ku:a(`sal`,`meh`,`hefte`,`roj`,`seet`,`deqe`,`saniye`,`mîlîçirk`,`,`),lo:a(`ປີ`,`ເດືອນ`,`ອາທິດ`,`ມື້`,`ຊົ່ວໂມງ`,`ນາທີ`,`ວິນາທີ`,`ມິນລິວິນາທີ`,`,`),lt:a(function(e){return e%10==0||e%100>=10&&e%100<=20?`metų`:`metai`},function(e){return[`mėnuo`,`mėnesiai`,`mėnesių`][m(e)]},function(e){return[`savaitė`,`savaitės`,`savaičių`][m(e)]},function(e){return[`diena`,`dienos`,`dienų`][m(e)]},function(e){return[`valanda`,`valandos`,`valandų`][m(e)]},function(e){return[`minutė`,`minutės`,`minučių`][m(e)]},function(e){return[`sekundė`,`sekundės`,`sekundžių`][m(e)]},function(e){return[`milisekundė`,`milisekundės`,`milisekundžių`][m(e)]},`,`),lv:a(function(e){return h(e)?`gads`:`gadi`},function(e){return h(e)?`mēnesis`:`mēneši`},function(e){return h(e)?`nedēļa`:`nedēļas`},function(e){return h(e)?`diena`:`dienas`},function(e){return h(e)?`stunda`:`stundas`},function(e){return h(e)?`minūte`:`minūtes`},function(e){return h(e)?`sekunde`:`sekundes`},function(e){return h(e)?`milisekunde`:`milisekundes`},`,`),mk:s([`година`,`години`],[`месец`,`месеци`],[`недела`,`недели`],[`ден`,`дена`],[`час`,`часа`],[`минута`,`минути`],[`секунда`,`секунди`],[`милисекунда`,`милисекунди`],`,`),mn:a(`жил`,`сар`,`долоо хоног`,`өдөр`,`цаг`,`минут`,`секунд`,`миллисекунд`),mr:a(o([`वर्ष`,`वर्षे`]),o([`महिना`,`महिने`]),o([`आठवडा`,`आठवडे`]),`दिवस`,`तास`,o([`मिनिट`,`मिनिटे`]),`सेकंद`,`मिलिसेकंद`),ms:a(`tahun`,`bulan`,`minggu`,`hari`,`jam`,`minit`,`saat`,`milisaat`),nl:s([`jaar`,`jaar`],[`maand`,`maanden`],[`week`,`weken`],[`dag`,`dagen`],[`uur`,`uur`],[`minuut`,`minuten`],[`seconde`,`seconden`],[`milliseconde`,`milliseconden`],`,`),no:s([`år`,`år`],[`måned`,`måneder`],[`uke`,`uker`],[`dag`,`dager`],[`time`,`timer`],[`minutt`,`minutter`],[`sekund`,`sekunder`],[`millisekund`,`millisekunder`],`,`),pl:a(function(e){return[`rok`,`roku`,`lata`,`lat`][f(e)]},function(e){return[`miesiąc`,`miesiąca`,`miesiące`,`miesięcy`][f(e)]},function(e){return[`tydzień`,`tygodnia`,`tygodnie`,`tygodni`][f(e)]},function(e){return[`dzień`,`dnia`,`dni`,`dni`][f(e)]},function(e){return[`godzina`,`godziny`,`godziny`,`godzin`][f(e)]},function(e){return[`minuta`,`minuty`,`minuty`,`minut`][f(e)]},function(e){return[`sekunda`,`sekundy`,`sekundy`,`sekund`][f(e)]},function(e){return[`milisekunda`,`milisekundy`,`milisekundy`,`milisekund`][f(e)]},`,`),pt:s([`ano`,`anos`],[`mês`,`meses`],[`semana`,`semanas`],[`dia`,`dias`],[`hora`,`horas`],[`minuto`,`minutos`],[`segundo`,`segundos`],[`milissegundo`,`milissegundos`],`,`),ro:a(c(`an`,`ani`,`de ani`),c(`lună`,`luni`,`de luni`),c(`săptămână`,`săptămâni`,`de săptămâni`),c(`zi`,`zile`,`de zile`),c(`oră`,`ore`,`de ore`),c(`minut`,`minute`,`de minute`),c(`secundă`,`secunde`,`de secunde`),c(`milisecundă`,`milisecunde`,`de milisecunde`),`,`),ru:u([`лет`,`год`,`года`],[`месяцев`,`месяц`,`месяца`],[`недель`,`неделя`,`недели`],[`дней`,`день`,`дня`],[`часов`,`час`,`часа`],[`минут`,`минута`,`минуты`],[`секунд`,`секунда`,`секунды`],[`миллисекунд`,`миллисекунда`,`миллисекунды`]),sq:a(o([`vit`,`vjet`]),`muaj`,`javë`,`ditë`,`orë`,function(e){return`minut`+(e===1?`ë`:`a`)},function(e){return`sekond`+(e===1?`ë`:`a`)},function(e){return`milisekond`+(e===1?`ë`:`a`)},`,`),sr:u([`години`,`година`,`године`],[`месеци`,`месец`,`месеца`],[`недељи`,`недеља`,`недеље`],[`дани`,`дан`,`дана`],[`сати`,`сат`,`сата`],[`минута`,`минут`,`минута`],[`секунди`,`секунда`,`секунде`],[`милисекунди`,`милисекунда`,`милисекунде`]),sr_Latn:u([`godini`,`godina`,`godine`],[`meseci`,`mesec`,`meseca`],[`nedelji`,`nedelja`,`nedelje`],[`dani`,`dan`,`dana`],[`sati`,`sat`,`sata`],[`minuta`,`minut`,`minuta`],[`sekundi`,`sekunda`,`sekunde`],[`milisekundi`,`milisekunda`,`milisekunde`]),ta:s([`வருடம்`,`ஆண்டுகள்`],[`மாதம்`,`மாதங்கள்`],[`வாரம்`,`வாரங்கள்`],[`நாள்`,`நாட்கள்`],[`மணி`,`மணிநேரம்`],[`நிமிடம்`,`நிமிடங்கள்`],[`வினாடி`,`வினாடிகள்`],[`மில்லி விநாடி`,`மில்லி விநாடிகள்`]),te:s([`సంవత్సరం`,`సంవత్సరాల`],[`నెల`,`నెలల`],[`వారం`,`వారాలు`],[`రోజు`,`రోజులు`],[`గంట`,`గంటలు`],[`నిమిషం`,`నిమిషాలు`],[`సెకను`,`సెకన్లు`],[`మిల్లీసెకన్`,`మిల్లీసెకన్లు`]),uk:u([`років`,`рік`,`роки`],[`місяців`,`місяць`,`місяці`],[`тижнів`,`тиждень`,`тижні`],[`днів`,`день`,`дні`],[`годин`,`година`,`години`],[`хвилин`,`хвилина`,`хвилини`],[`секунд`,`секунда`,`секунди`],[`мілісекунд`,`мілісекунда`,`мілісекунди`]),ur:a(`سال`,o([`مہینہ`,`مہینے`]),o([`ہفتہ`,`ہفتے`]),`دن`,o([`گھنٹہ`,`گھنٹے`]),`منٹ`,`سیکنڈ`,`ملی سیکنڈ`),sk:a(function(e){return[`rok`,`roky`,`roky`,`rokov`][p(e)]},function(e){return[`mesiac`,`mesiace`,`mesiace`,`mesiacov`][p(e)]},function(e){return[`týždeň`,`týždne`,`týždne`,`týždňov`][p(e)]},function(e){return[`deň`,`dni`,`dni`,`dní`][p(e)]},function(e){return[`hodina`,`hodiny`,`hodiny`,`hodín`][p(e)]},function(e){return[`minúta`,`minúty`,`minúty`,`minút`][p(e)]},function(e){return[`sekunda`,`sekundy`,`sekundy`,`sekúnd`][p(e)]},function(e){return[`milisekunda`,`milisekundy`,`milisekundy`,`milisekúnd`][p(e)]},`,`),sl:a(function(e){return e%10==1?`leto`:e%100==2?`leti`:e%100==3||e%100==4||Math.floor(e)!==e&&e%100<=5?`leta`:`let`},function(e){return e%10==1?`mesec`:e%100==2||Math.floor(e)!==e&&e%100<=5?`meseca`:e%10==3||e%10==4?`mesece`:`mesecev`},function(e){return e%10==1?`teden`:e%10==2||Math.floor(e)!==e&&e%100<=4?`tedna`:e%10==3||e%10==4?`tedne`:`tednov`},function(e){return e%100==1?`dan`:`dni`},function(e){return e%10==1?`ura`:e%100==2?`uri`:e%10==3||e%10==4||Math.floor(e)!==e?`ure`:`ur`},function(e){return e%10==1?`minuta`:e%10==2?`minuti`:e%10==3||e%10==4||Math.floor(e)!==e&&e%100<=4?`minute`:`minut`},function(e){return e%10==1?`sekunda`:e%100==2?`sekundi`:e%100==3||e%100==4||Math.floor(e)!==e?`sekunde`:`sekund`},function(e){return e%10==1?`milisekunda`:e%100==2?`milisekundi`:e%100==3||e%100==4||Math.floor(e)!==e?`milisekunde`:`milisekund`},`,`),sv:s([`år`,`år`],[`månad`,`månader`],[`vecka`,`veckor`],[`dag`,`dagar`],[`timme`,`timmar`],[`minut`,`minuter`],[`sekund`,`sekunder`],[`millisekund`,`millisekunder`],`,`),sw:e(s([`mwaka`,`miaka`],[`mwezi`,`miezi`],[`wiki`,`wiki`],[`siku`,`masiku`],[`saa`,`masaa`],[`dakika`,`dakika`],[`sekunde`,`sekunde`],[`milisekunde`,`milisekunde`]),{_numberFirst:!0}),tr:a(`yıl`,`ay`,`hafta`,`gün`,`saat`,`dakika`,`saniye`,`milisaniye`,`,`),th:a(`ปี`,`เดือน`,`สัปดาห์`,`วัน`,`ชั่วโมง`,`นาที`,`วินาที`,`มิลลิวินาที`),uz:a(`yil`,`oy`,`hafta`,`kun`,`soat`,`minut`,`sekund`,`millisekund`),uz_CYR:a(`йил`,`ой`,`ҳафта`,`кун`,`соат`,`минут`,`секунд`,`миллисекунд`),vi:a(`năm`,`tháng`,`tuần`,`ngày`,`giờ`,`phút`,`giây`,`mili giây`,`,`),zh_CN:a(`年`,`个月`,`周`,`天`,`小时`,`分钟`,`秒`,`毫秒`),zh_TW:a(`年`,`個月`,`周`,`天`,`小時`,`分鐘`,`秒`,`毫秒`)};function a(e,t,n,r,i,a,o,s,c){var l={y:e,mo:t,w:n,d:r,h:i,m:a,s:o,ms:s};return c&&(l.decimal=c),l}function o(e){return function(t){return t===1?e[0]:e[1]}}function s(e,t,n,r,i,s,c,l,u){return a(o(e),o(t),o(n),o(r),o(i),o(s),o(c),o(l),u)}function c(e,t,n){return function(r){if(r===1)return e;if(Math.floor(r)!==r||r===0)return t;var i=r%100;return i>=1&&i<=19?t:n}}function l(e){return function(t){return Math.floor(t)===t?t%100>=5&&t%100<=20||t%10>=5&&t%10<=9||t%10==0?e[0]:t%10==1?e[1]:t>1?e[2]:e[1]:e[2]}}function u(e,t,n,r,i,o,s,c){return a(l(e),l(t),l(n),l(r),l(i),l(o),l(s),l(c),`,`)}function d(e){return e===2?1:e>2&&e<11?2:0}function f(e){return e===1?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&!(e%100>10&&e%100<20)?2:3:1}function p(e){return e===1?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&e%100<10?2:3:1}function m(e){return e===1||e%10==1&&e%100>20?0:Math.floor(e)!==e||e%10>=2&&e%100>20||e%10>=2&&e%100<10?1:2}function h(e){return e%10==1&&e%100!=11}function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e){var t=[e.language];if(g(e,`fallbacks`))if(n(e.fallbacks)&&e.fallbacks.length)t=t.concat(e.fallbacks);else throw Error(`fallbacks must be an array with at least one element`);for(var r=0;r<t.length;r++){var a=t[r];if(g(e.languages,a))return e.languages[a];if(g(i,a))return i[a]}throw Error(`No language found.`)}function v(e,t,n){var r=e.unitName,i=e.unitCount,a=n.spacer,o=n.maxDecimalPoints,s=g(n,`decimal`)?n.decimal:g(t,`decimal`)?t.decimal:`.`,c;`digitReplacements`in n?c=n.digitReplacements:`_digitReplacements`in t&&(c=t._digitReplacements);var l,u=(o===void 0?i:Math.floor(i*10**o)/10**o).toString();if(t._hideCountIf2&&i===2)l=``,a=``;else if(c){l=``;for(var d=0;d<u.length;d++){var f=u[d];f===`.`?l+=s:l+=c[f]}}else l=u.replace(`.`,s);var p=t[r],m=typeof p==`function`?p(i):p;return t._numberFirst?m+a+l:l+a+m}function y(e,t){var n,r,i,a,o=t.units,s=t.unitMeasures,c=`largest`in t?t.largest:1/0;if(!o.length)return[];var l={};for(a=e,r=0;r<o.length;r++){n=o[r];var u=s[n];i=r===o.length-1?a/u:Math.floor(a/u),l[n]=i,a-=i*u}if(t.round){var d=c;for(r=0;r<o.length;r++)if(n=o[r],i=l[n],i!==0&&(d--,d===0)){for(var f=r+1;f<o.length;f++){var p=o[f],m=l[p];l[n]+=m*s[p]/s[n],l[p]=0}break}for(r=o.length-1;r>=0;r--)if(n=o[r],i=l[n],i!==0){var h=Math.round(i);if(l[n]=h,r===0)break;var g=o[r-1],_=s[g],v=Math.floor(h*s[n]/_);if(v)l[g]+=v,l[n]=0;else break}}var y=[];for(r=0;r<o.length&&y.length<c;r++)n=o[r],i=l[n],i&&y.push({unitName:n,unitCount:i});return y}function b(e,t){var n=_(t);if(!e.length){var r=t.units,i=r[r.length-1];return v({unitName:i,unitCount:0},n,t)}for(var a=t.conjunction,o=t.serialComma,s=g(t,`delimiter`)?t.delimiter:g(n,`delimiter`)?n.delimiter:`, `,c=[],l=0;l<e.length;l++)c.push(v(e[l],n,t));return!a||e.length===1?c.join(s):e.length===2?c.join(a):c.slice(0,-1).join(s)+(o?`,`:``)+a+c.slice(-1)}function x(t){var n=function(t,r){t=Math.abs(t);var i=e({},n,r||{});return b(y(t,i),i)};return e(n,{language:`en`,spacer:` `,conjunction:``,serialComma:!0,units:[`y`,`mo`,`w`,`d`,`h`,`m`,`s`],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},t)}var S=e(x({}),{getSupportedLanguages:function(){var e=[];for(var t in i)g(i,t)&&t!==`gr`&&e.push(t);return e},humanizer:x});typeof define==`function`&&define.amd?define(function(){return S}):t!==void 0&&t.exports?t.exports=S:this.humanizeDuration=S})()}))(),1);function ue(e,t){if(typeof d3<`u`&&typeof d3FormatLocaleDefinition<`u`)return t===void 0&&(t=`,.0f`),d3.formatLocale(d3FormatLocaleDefinition).format(t)(e);let n=typeof e==`string`?parseFloat(e):e;if(isNaN(n))return String(e);if(t){let e=t.includes(`,`),r=t.match(/\.(\d+)/),i=r?parseInt(r[1],10):0;return new Intl.NumberFormat(`en`,{useGrouping:e,minimumFractionDigits:i,maximumFractionDigits:i}).format(n)}return new Intl.NumberFormat(`en`,{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).format(n)}le.default.humanizer({language:`en`,fallbacks:[`en`],largest:2,round:!0});var de={};function fe(e){let t=1,n,r,i=[...e];if((n=r=i.indexOf(`{`))===-1)return[e];let a=[i.slice(0,r).join(``)];for(;;){let e=i.indexOf(`{`,r+1),o=i.indexOf(`}`,r+1);if(e===-1&&o===-1||(e===-1&&(e=i.length),o!==-1&&o>e?(t++,r=e):o!==-1&&(t--,r=o),t===0&&(a.push(i.slice(n+1,r).join(``).split(`,`,3)),n=r+1,a.push(i.slice(n,e===-1?i.length:e).join(``)),n=e===-1?i.length:e),t!==0&&(e===-1||o===-1)))break}return t===0&&a}function pe(e,t={}){let n=e[0]?.trim();if(!n||t[n]===void 0)return`{${e.join(`,`)}}`;let r=t[n],i=e[1]===void 0?`none`:e[1].trim();switch(i){case`number`:return(()=>{let t=e[2]===void 0?null:e[2].trim();if(t!==null&&t!==`integer`)throw`Message format 'number' is only supported for integer values.`;let n=ue(r),i;return t===null&&(i=`${r}`.indexOf(`.`))!==-1&&(n+=`.${r.substring(i+1)}`),n})();case`none`:return r;case`select`:return(()=>{if(e[2]===void 0)return!1;let n=fe(e[2]);if(n===!1)return!1;let i=n.length,a=!1;for(let e=0;e+1<i;e++){if(Array.isArray(n[e])||!Array.isArray(n[e+1]))return!1;let t=n[e++].trim();(a===!1&&t===`other`||t==r)&&(a=n[e].join(`,`))}return a!==!1&&me(a,t)})();case`plural`:return(()=>{if(e[2]===void 0)return!1;let n=fe(e[2]);if(n===!1)return!1;let i=n.length,a=!1,o=0;for(let e=0;e+1<i;e++){if(typeof n[e]==`object`||typeof n[e+1]!=`object`)return!1;let t=n[e++].trim(),i=[...t];if(e===1&&t.substring(0,7)===`offset:`){let e=[...t.replace(/[\n\r\t]/g,` `)].indexOf(` `,7);if(e===-1)throw Error(`Message pattern is invalid.`);o=parseInt(i.slice(7,e).join(``).trim()),t=i.slice(e+1,e+1+i.length).join(``).trim()}if(a===!1&&t===`other`||t[0]===`=`&&parseInt(i.slice(1,1+i.length).join(``))===r||t===`one`&&r-o===1){let t=n[e];a=(typeof t==`string`?[t]:t).map(e=>e.replace(`#`,String(r-o))).join(`,`)}}return a!==!1&&me(a,t)})();default:throw Error(`Message format '${i}' is not supported.`)}}function me(e,t){let n;if((n=fe(e))===!1)throw Error(`Message pattern is invalid.`);for(let e=0;e<n.length;e++){let r=n[e];if(typeof r==`object`){let i=pe(r,t);if(i===!1)throw Error(`Message pattern is invalid.`);n[e]=String(i)}}return n.join(``)}function he(e){de=e}function w(e,t,n=`app`,r=de){if(r&&r[n]!==void 0&&r[n][e]!==void 0){let t=r?.[n]?.[e];t!==void 0&&(e=t)}return t?me(e,t):e}function ge(e){let t=!!e.opened;e.addEventListener(`opened-changed`,()=>{let n=!!e.opened;if(n===t)return;t=n,e.dispatchEvent(new CustomEvent(n?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0}));let r=n;e.updateComplete.then(()=>{!!e.opened===r&&e.dispatchEvent(new CustomEvent(r?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))})})}function _e(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}var ve=new WeakMap;function ye(e,t){let n=t;for(;n;){if(ve.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function be(e){return t=>{if(ye(e,t))return t;let n=e(t);return ve.set(n,e),n}}var xe=be(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}}),Se=be(e=>class extends xe(e){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),e===`tabIndex`&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}});function Ce(e=`google-chrome`){let t=globalThis.navigator,n=!!t.userAgentData&&t.userAgentData.brands.some(e=>e.brand===`Chromium`);if(e===`chromium`)return n;let r=globalThis.navigator?.vendor,i=globalThis.opr!==void 0,a=globalThis.userAgent?.indexOf(`Edge`)>-1,o=globalThis.userAgent?.match(`CriOS`);if(e===`ios`)return o;if(e===`google-chrome`)return n!=null&&r===`Google Inc.`&&i===!1&&a===!1}var we={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:Ce(),isIOSChrome:Ce(`ios`),isChromium:Ce(`chromium`),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1,isMac:globalThis.navigator?.appVersion?.indexOf(`Mac`)!==-1,isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf(`Apple`)>-1&&globalThis.navigator?.userAgent&&globalThis.navigator?.userAgent.indexOf(`CriOS`)===-1&&globalThis.navigator?.userAgent.indexOf(`FxiOS`)===-1&&globalThis.navigator?.appVersion.indexOf(`Mac`)!==-1},Te=t`
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
`,Ee=class e{static __createGlobalStyleNode(){let e=document.createElement(`style`);return e.setAttribute(`data-overlays`,``),e.textContent=Te.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,e.__globalStyleNode||=e.__createGlobalStyleNode()}add(e){if(this.list.find(t=>e===t))throw Error(`controller instance is already added`);return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to remove`);this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to hide`);this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,e.__globalStyleNode&&=(document.head.removeChild(e.__globalStyleNode),void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){let{isIOS:e,isMacSafari:t}=we;document.body.classList.add(`overlays-scroll-lock`),(e||t)&&document.body.classList.add(`overlays-scroll-lock-ios-fix`),e&&document.documentElement.classList.add(`overlays-scroll-lock-ios-fix`)}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>e.preventsScroll===!0))return;let{isIOS:t,isMacSafari:n}=we;document.body.classList.remove(`overlays-scroll-lock`),(t||n)&&document.body.classList.remove(`overlays-scroll-lock-ios-fix`),t&&document.documentElement.classList.remove(`overlays-scroll-lock-ios-fix`)}requestToShowOnly(e){let t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}};Ee.__globalStyleNode=void 0;var De=Symbol.for(`lion::SingletonManagerClassStorage`),Oe=globalThis||window,ke=class{constructor(){this._map=Oe[De]?Oe[De]:Oe[De]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}},Ae=e=>{let t=null,n=()=>(t===null&&(t=e()),t);return new Proxy({},{get(e,t){let r=n();return t===`addEventListener`||t===`removeEventListener`?Reflect.get(r,t).bind(r):t===`__instance_for_testing`?r:Reflect.get(r,t,r)},set(e,t,r){return Reflect.set(n(),t,r)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(n(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(n())}})},T=new ke;function je(){if(!T.has(`@lion/ui::overlays::0.x`)){let e=new Ee;T.set(`@lion/ui::overlays::0.x`,e)}return T.get(`@lion/ui::overlays::0.x`)}var Me=Ae(je);function Ne(e,t,n={}){function r(e){return`getAttribute`in e}function i(e){if(!r(e))return null;let t=e.getAttribute(`slot`),i=null;if(t){let r=n[t];r&&(i=r.filter(t=>t?.element===e)[0]||null)}return i}let a=i(e);if(a)return a.deepContains;function o(t){if(!r(e))return;let i=e.getAttribute(`slot`);i&&(n[i]=n[i]||[],n[i].push({element:e,deepContains:t}))}let s=e.contains(t);if(s)return o(!0),!0;function c(e){return e.tagName===`SLOT`}function l(e){return c(e)?e.assignedElements():[]}function u(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function d(e){let i=!1;for(let a=0;a<e.length;a+=1){let o=e[a];if(o&&(r(o)||u(o))&&Ne(o,t,n)){i=!0;break}}return i}function f(e){for(let t=0;t<e.children.length;t+=1){let n=e.children[t],r=i(n);if(r){s=r.deepContains||s;break}let a=l(n);if(d([n.shadowRoot,...a])){s=!0;break}n.children.length>0&&f(n)}}return e instanceof HTMLElement&&e.shadowRoot&&(s=Ne(e.shadowRoot,t,n),s)?(o(!0),!0):(f(e),o(s),s)}var Pe=t`
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
`,E={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},Fe=new WeakMap;function Ie(e){return Array.from(e.cssRules).map(e=>e.cssText).join(``)}function Le(e,t,{teardown:n=!1}={}){let r=e===document?document.body:e,i=t.cssText||Ie(t);if(n){let e=Array.from(r.querySelectorAll(`style`));for(let t of e)if(t.textContent===i){t.remove();break}}else{let e=document.createElement(`style`),t=window.litNonce;t!==void 0&&e.setAttribute(`nonce`,t),e.textContent=i,r.appendChild(e)}}function Re(e,t,{teardown:n=!1}={}){let r=!1;e&&!Fe.has(e)&&Fe.set(e,[]);let i=Fe.get(e)??[],a=i.find(e=>t===e);return a&&n?i.splice(i.indexOf(t),1):!a&&!n?i.push(t):(a&&!n||!a&&n)&&(r=!0),{haltFurtherExecution:r}}function ze(e,t,{teardown:n=!1}={}){let{haltFurtherExecution:r}=Re(e,t,{teardown:n});if(r)return;if(!E.supportsAdoptingStyleSheets||we.isIOS){Le(e,t,{teardown:n});return}let i=t instanceof CSSStyleSheet?t:t.styleSheet;if(!i)throw Error(`Please provide a CSSResultOrNative style`);n?e.adoptedStyleSheets.includes(i)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(i),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]}function Be(e,t,{teardown:n=!1}={}){for(let r of t)E.adoptStyle(e,r,{teardown:n})}E.adoptStyle=ze,E.adoptStyles=Be;var Ve=({visibility:e,display:t})=>e!==`hidden`&&t!==`none`,He=({display:e})=>e===`contents`;function Ue(e){if(!e||!e.isConnected||!Ve(e.style))return!1;let t=window.getComputedStyle(e);return Ve(t)?He(t)?!0:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!1}function We(e,t){let n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function Ge(e,t){let n=[];for(;e.length>0&&t.length>0;)We(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return[...n,...e,...t]}function Ke(e){let t=e.length;if(t<2)return e;let n=Math.ceil(t/2);return Ge(Ke(e.slice(0,n)),Ke(e.slice(n)))}var qe=`matches`in Element.prototype?`matches`:`msMatchesSelector`;function Je(e){return e[qe](`input, select, textarea, button, object`)?e[qe](`:not([disabled])`):e[qe](`a[href], area[href], iframe, [tabindex], [contentEditable]`)}function Ye(e){return Je(e)?Number(e.getAttribute(`tabindex`)||0):-1}function Xe(e){if(e.localName===`slot`)return e.assignedNodes({flatten:!0});let{children:t}=e.shadowRoot||e;return t||[]}function Ze(e){return e.nodeType===Node.ELEMENT_NODE?e.localName===`slot`||Ue(e):!1}function Qe(e,t){if(!Ze(e))return!1;let n=e,r=Ye(n),i=r>0;r>=0&&t.push(n);let a=Xe(n);for(let e=0;e<a.length;e+=1)i=Qe(a[e],t)||i;return i}function $e(e){let t=[];return Qe(e,t)?Ke(t):t}var et=`modulepreload`,tt=function(e,t){return new URL(e,t).href},nt={},rt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=tt(t,n),t=s(t),t in nt)return;nt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:et,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function it({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:n}){if(!(t.isConnected||n.isConnected))throw Error(`[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.`);let r,i=document.createComment(`tempMarker`);t.isConnected?(r=t.parentElement||t.getRootNode(),r.insertBefore(i,t),e.appendChild(t)):n.assignedSlot?(r=n.assignedSlot.parentElement||n.assignedSlot.getRootNode(),r.insertBefore(i,n.assignedSlot),e.appendChild(t),t.appendChild(n.assignedSlot)):(r=n.parentElement||n.getRootNode(),r.insertBefore(i,n),e.appendChild(t),t.appendChild(n)),r.insertBefore(e,i),r?.removeChild(i)}async function at(){return rt(()=>import(`./popper--LklqrOK.js`),[],import.meta.url)}var ot=new WeakMap,st=class e extends EventTarget{#e=!1;constructor(e={},t=Me){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:`none`,hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:`description`,visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:`top`,strategy:`fixed`,modifiers:[{name:`preventOverflow`,enabled:!0,options:{boundariesElement:`viewport`,padding:8}},{name:`flip`,options:{boundariesElement:`viewport`,padding:16}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},{name:`arrow`,enabled:!1}]},viewportConfig:{placement:`center`},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw Error(`[OverlayController] You need to provide a .placementMode ("global"|"local")`);if(![`global`,`local`].includes(e.placementMode))throw Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw Error(`[OverlayController] You need to provide a .contentNode`);if(e.isTooltip&&!e.handlesAccessibility)throw Error(`[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled`)}_init(){this.__contentHasBeenInitialized||=(this.__initContentDomStructure(),!0),this.contentWrapperNode.removeAttribute(`style`),this.contentWrapperNode.removeAttribute(`class`),this.placementMode===`local`&&(e.popperModule||=at()),this.__handleOverlayStyles({phase:`init`}),this._handleFeatures({phase:`init`})}__handleOverlayStyles({phase:e}){let t=this.contentWrapperNode?.getRootNode();e===`init`?E.adoptStyle(t,Pe):e===`teardown`&&E.adoptStyle(t,Pe,{teardown:!0})}__initContentDomStructure(){let e=document.createElement(`dialog`);e.setAttribute(`role`,`none`),e.setAttribute(`data-overlay-outer-wrapper`,``),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement(`div`)),this.contentWrapperNode.setAttribute(`data-id`,`content-wrapper`),it({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute(`tabindex`,`-1`),this.__wrappingDialogNode.style.display=`none`,this.contentWrapperNode.style.zIndex=`1`,getComputedStyle(this.contentNode).position===`absolute`&&(this.contentNode.style.position=`static`),HTMLDialogElement&&`closedBy`in HTMLDialogElement.prototype?e.closedBy=`none`:(e.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`keyup`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`cancel`,e=>{e.stopPropagation()}),e.addEventListener(`close`,e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode===`local`&&e===`setup`){let e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex=`1`)}}__setupTeardownAccessibility({phase:e}){if(e===`init`){this.__storeOriginalAttrs(this.contentNode,[`role`,`id`]);let e=this.trapsKeyboardFocus;if(this.invokerNode){let t=[`aria-labelledby`,`aria-describedby`];e||t.push(`aria-expanded`),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute(`id`,this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`,this._contentId),this.contentNode.setAttribute(`role`,`tooltip`)):(this.invokerNode&&!e&&this.invokerNode.setAttribute(`aria-expanded`,`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute(`role`,`alertdialog`):this.contentNode.getAttribute(`role`)||this.contentNode.setAttribute(`role`,`dialog`))}else e===`teardown`&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){let n={};t.forEach(t=>{n[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,n)}__restoreOriginalAttrs(){for(let[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,n])=>{n===null?e.removeAttribute(t):e.setAttribute(t,n)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!==`none`}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let t=new CustomEvent(`before-show`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display=``,this._keepBodySize({phase:`before-show`}),await this._handleFeatures({phase:`show`}),this._keepBodySize({phase:`show`}),await this._handlePosition({phase:`show`}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event(`show`)),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode===`global`){let t=`overlays__overlay-container--${this.viewportConfig.placement}`;e===`show`?(this.contentWrapperNode.classList.add(`overlays__overlay-container`),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add(`overlays__overlay`)):e===`hide`&&(this.contentWrapperNode.classList.remove(`overlays__overlay-container`),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove(`overlays__overlay`))}else this.placementMode===`local`&&e===`show`&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case`before-show`:this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case`show`:{if(window.getComputedStyle){let e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue(`margin-right`),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue(`margin-bottom`),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;let e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,n=this.__bodyMarginRight+e,r=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set(`margin-right`,CSS.px(n)),document.body.attributeStyleMap.set(`margin-bottom`,CSS.px(r))):(document.body.style.marginRight=`${n}px`,document.body.style.marginBottom=`${r}px`);break}case`hide`:document.body.style.marginRight=this.__bodyMarginRightInline||``,document.body.style.marginBottom=this.__bodyMarginBottomInline||``;break}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent(`before-hide`,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display=`none`,this._handleFeatures({phase:`hide`}),this._keepBodySize({phase:`hide`}),this.dispatchEvent(new Event(`hide`)),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:`hide`}),e&&e.classList.remove(`overlays__backdrop--animation-in`)}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`overlays__backdrop--animation-in`)}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:`nearest`})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction==`function`&&(e===`init`&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case`show`:this.manager.requestToPreventScroll();break;case`hide`:this.manager.requestToEnableScroll();break;case`teardown`:this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case`show`:this.manager.requestToShowOnly(this);break;case`hide`:this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case`init`:this.__backdropInitialized||=(this.config?.backdropNode||(this.__backdropNode=document.createElement(`div`),this.__backdropNode.classList.add(`overlays__backdrop`)),this.__wrappingDialogNode.prepend(this.backdropNode),!0);break;case`show`:this.config.hasBackdrop&&this.backdropNode.classList.add(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case`hide`:case`teardown`:this.backdropNode.classList.remove(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!1;break}}#n=e=>{e.key===`Shift`&&(this.#e=!0)};#r=e=>{e.key===`Shift`&&(this.#e=!1)};#i=()=>{window.addEventListener(`keydown`,this.#n),window.addEventListener(`keyup`,this.#r)};#a=()=>{window.removeEventListener(`keydown`,this.#n),window.removeEventListener(`keyup`,this.#r)};#o=()=>$e(this.contentNode).find(e=>e.hasAttribute(`autofocus`))||this.contentNode;#s=()=>{this.__wrappingDialogNode?.addEventListener(`focus`,()=>{this.#e||this.#o().focus()})};_handleTrapsKeyboardFocus({phase:e}){e===`init`&&(this.contentNode.style.outline=`none`,this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn(`[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root`)),e===`show`&&(this.#i(),this.#s(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#o().focus()),e===`hide`&&this.#a()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!==`Escape`||ot.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#c(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),ot.set(e,this))}#c=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||Ne(this.contentNode,e.target);#l=e=>{e.key===`Escape`&&(this.#c(e)||this.hide())};_handleHidesOnEsc({phase:e}){e===`init`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.contentNode.addEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener(`keyup`,this.__escKeyHandler)),e===`show`&&(this.__escKeyHandlerCalled=!1),e===`teardown`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener(`keyup`,this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e===`init`?(document.removeEventListener(`keyup`,this.#l),document.addEventListener(`keyup`,this.#l)):e===`teardown`&&document.removeEventListener(`keyup`,this.#l)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode===`global`)return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case`max`:this.contentWrapperNode.style.maxWidth=e;break;case`full`:this.contentWrapperNode.style.width=e;break;case`min`:this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width=`auto`;break}}_handleHidesOnOutsideClick({phase:e}){let t=e===`show`?`addEventListener`:`removeEventListener`;if(e===`show`){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!e&&!t&&this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.contentWrapperNode[t](`mouseup`,this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.invokerNode[t](`mouseup`,this.__onInsideMouseUp,!0)),document.documentElement[t](`mouseup`,this.__onDocumentMouseUp,!0),window[t](`blur`,this.__onWindowBlur)}_handleAccessibility({phase:e}){(e===`init`||e===`teardown`)&&this.__setupTeardownAccessibility({phase:e});let t=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!t&&this.invokerNode.setAttribute(`aria-expanded`,`${e===`show`}`)}teardown(){this.__handleOverlayStyles({phase:`teardown`}),this._handleFeatures({phase:`teardown`}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&=(this._popper.destroy(),void 0),e.popperModule!==void 0){let{createPopper:t}=await e.popperModule;this._popper=t(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute(`aria-disabled`)===`true`:!1}};st.popperModule=void 0;function ct(e,t){if(typeof e!=`object`||typeof t!=`object`||e===null||t===null)return e===t;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>ct(e[n],t[n]))}var lt=be(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){let t=!ct(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`opened`&&this.opened!==t&&this.dispatchEvent(new CustomEvent(`opened-changed`,{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i}){let a=this._defineOverlayConfig()||{};return new st({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i,...a,...this.config,popperConfig:{...a.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...a.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:`local`}}updated(e){super.updated(e),e.has(`opened`)&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||=(this._setupOverlayCtrl(),!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||=Array.from(this.children).find(e=>e.slot===`backdrop`),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||=Array.from(this.children).find(e=>e.slot===`content`)||this.config.contentNode,this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector(`#overlay-content-node-wrapper`)}_setupOverlayCtrl(){if(this.#e)return;let e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{let t=new CustomEvent(`before-opened`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{let t=new CustomEvent(`before-closed`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.addEventListener(`before-hide`,this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.removeEventListener(`before-hide`,this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let e=this._overlayCtrl;e.placementMode===`local`&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}),ut=be(n=>class extends lt(n){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:`has-arrow`}}}static get styles(){return[...super.styles||[],t`
          :host {
            --tooltip-arrow-width: 12px;
            --tooltip-arrow-height: 8px;
          }

          .arrow svg {
            display: block;
          }

          .arrow {
            position: absolute;
            width: var(--tooltip-arrow-width);
            height: var(--tooltip-arrow-height);
          }

          .arrow__graphic {
            display: block;
          }

          [data-popper-placement^='top'] .arrow {
            bottom: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow {
            top: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow__graphic {
            transform: rotate(180deg);
          }

          [data-popper-placement^='left'] .arrow {
            right: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='left'] .arrow__graphic {
            transform: rotate(270deg);
          }

          [data-popper-placement^='right'] .arrow {
            left: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='right'] .arrow__graphic {
            transform: rotate(90deg);
          }

          :host(:not([has-arrow])) .arrow {
            display: none;
          }
        `]}constructor(){super(),this.hasArrow=!0,this.__setupRepositionCompletePromise()}render(){return e`
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
          ${this._arrowNodeTemplate()}
        </div>
      `}_arrowNodeTemplate(){return e`
        <div class="arrow" aria-hidden="true" data-popper-arrow>${this._arrowTemplate()}</div>
      `}_arrowTemplate(){return e`
        <svg viewBox="0 0 12 8" class="arrow__graphic">
          <path d="M 0,0 h 12 L 6,8 z"></path>
        </svg>
      `}_defineOverlayConfig(){let e=super._defineOverlayConfig()||{};return this.hasArrow?{...e,popperConfig:{...this._getPopperArrowConfig(e.popperConfig)}}:e}_getPopperArrowConfig(e){return{...e||{},placement:`top`,modifiers:[{name:`arrow`,enabled:!0,options:{padding:8}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},...e&&e.modifiers||[]],onFirstUpdate:e=>{this.__syncFromPopperState(e)},afterWrite:e=>{this.__syncFromPopperState(e)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(e=>{this.__repositionCompleteResolver=e})}get _arrowNode(){return this.shadowRoot.querySelector(`[data-popper-arrow]`)}__syncFromPopperState(e){e&&this._arrowNode&&e.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(e.placement),this.__setupRepositionCompletePromise())}});function dt(){return{visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener(`click`,t)},teardown:()=>{e.invokerNode?.removeEventListener(`click`,t)}}}}}var ft=()=>({placementMode:`local`,inheritsReferenceWidth:`min`,hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:`bottom-start`,modifiers:[{name:`offset`,enabled:!1}]},handlesAccessibility:!0,...dt()});function pt({delayIn:e=0,delayOut:t=300}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a;function o(){r=!1,i=!1}function s(o){let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`,i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!n._hasDisabledInvoker()?setTimeout(()=>{n.show()},e):setTimeout(()=>{n.hide()},t)}return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var mt=({invokerRelation:e=`description`,delayIn:t=300,delayOut:n=300}={})=>({placementMode:`local`,elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:e,popperConfig:{strategy:`absolute`},...pt({delayIn:t,delayOut:n})}),ht=t`
  :host {
    display: contents;
    position: relative;
  }

  /* The top layer's popover defaults would center it and paint it as a box of
     its own; Lion positions the content, so the wrapper stays invisible. */
  dialog[data-overlay-outer-wrapper][popover] {
    inset: auto;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    overflow: visible;
    width: auto;
    height: auto;
  }

  .popover-pane {
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    color: var(--c-text-default);
    box-shadow: var(--c-shadow-sm);
    min-width: calc(180rem / 16);
    max-width: calc(320rem / 16);
    overflow: auto;
    overscroll-behavior: contain;

    /* 40vh suits a popover that sits near what opened it. One anchored far
       down the screen, or holding a long menu, wants the room it actually has
       — which only the thing that opened it can measure. */
    max-height: var(--popover-max-block-size, 40vh);
  }

  /* The overlay wrapper is the one given the invoker's width, so the pane has
     to stop sizing itself or it stays at its own 320px cap and the match does
     nothing visible. */
  :host([match-invoker-width]) .popover-pane {
    min-width: 0;
    max-width: none;
    width: 100%;
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
`;function gt(){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--c-layer-popover`),10);return Number.isNaN(e)?9999:e}var _t=new WeakMap,D=new WeakMap,vt=new WeakSet,yt=new WeakMap,bt=new WeakMap,O=class extends lt(i){constructor(){super(),d(this,vt),this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,this.withoutInvokerAria=!1,u(this,_t,null),u(this,D,null),u(this,yt,()=>{let e=xt.call(p(vt,this));!e||typeof e.showPopover!=`function`||(e.setAttribute(`popover`,`manual`),e.matches(`:popover-open`)||e.showPopover())}),u(this,bt,()=>{let e=xt.call(p(vt,this));e?.matches?.(`:popover-open`)&&e.hidePopover()}),ge(this)}_setupOverlayCtrl(){super._setupOverlayCtrl(),f(D,this,this._overlayCtrl),l(D,this).addEventListener(`before-show`,l(yt,this)),l(D,this).addEventListener(`hide`,l(bt,this))}_teardownOverlayCtrl(){l(bt,this).call(this),l(D,this)?.removeEventListener(`before-show`,l(yt,this)),l(D,this)?.removeEventListener(`hide`,l(bt,this)),f(D,this,null),super._teardownOverlayCtrl()}_defineOverlayConfig(){return{...ft(),zIndex:gt(),handlesAccessibility:!this.withoutInvokerAria,inheritsReferenceWidth:this.matchInvokerWidth?`min`:`none`,popperConfig:{strategy:`fixed`,placement:this.placement,modifiers:[{name:`offset`,options:{offset:[0,this.distance]}},..._e()]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(`.popover-pane`)}get _overlayInvokerNode(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}get _overlayReferenceNode(){return this.anchor}render(){return e`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div
          class="popover-pane"
          part="popup"
          aria-label="${this.label??r}"
        >
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){p(vt,this,St).call(this),super.connectedCallback()}updated(e){super.updated(e),this._overlayCtrl&&((e.has(`for`)||e.has(`anchor`))&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode}),(e.has(`placement`)||e.has(`distance`)||e.has(`matchInvokerWidth`)||e.has(`withoutInvokerAria`))&&this._overlayCtrl.updateConfig(this._defineOverlayConfig()))}async show(){this.opened=!0,await this.updateComplete,await this.open()}async hide(){this.opened=!1,await this.updateComplete,await this.close()}};function xt(){return this.shadowRoot?.querySelector(`dialog[data-overlay-outer-wrapper]`)??null}function St(){if(l(_t,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:(e.textContent??``).trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),f(_t,this,t)}O.styles=[g,ht],a([o()],O.prototype,`label`,void 0),a([o({reflect:!0})],O.prototype,`for`,void 0),a([o({attribute:!1})],O.prototype,`anchor`,void 0),a([o({reflect:!0})],O.prototype,`placement`,void 0),a([o({type:Number})],O.prototype,`distance`,void 0),a([o({attribute:`match-invoker-width`,type:Boolean,reflect:!0})],O.prototype,`matchInvokerWidth`,void 0),a([o({type:Boolean,attribute:`without-arrow`})],O.prototype,`withoutArrow`,void 0),a([o({type:Boolean,attribute:`without-invoker-aria`,reflect:!0})],O.prototype,`withoutInvokerAria`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,O);var Ct={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values(Ct);var wt=class{constructor(){this.__iconResolvers=new Map}addIconResolver(e,t){if(this.__iconResolvers.has(e))throw Error(`An icon resolver has already been registered for namespace: ${e}`);this.__iconResolvers.set(e,t)}removeIconResolver(e){this.__iconResolvers.delete(e)}resolveIcon(e,t,n){let r=this.__iconResolvers.get(e);if(r)return r(t,n);throw Error(`Could not find any icon resolver for namespace ${e}.`)}resolveIconForId(e){let t=e.split(`:`);if(t.length!==3)throw Error(`Incorrect iconId: ${e}. Format: <namespace>:<iconset>:<icon>`);return this.resolveIcon(t[0],t[1],t[2])}};function Tt(){if(!T.has(`@lion/ui::icons::0.x`)){let e=new wt;T.set(`@lion/ui::icons::0.x`,e)}return T.get(`@lion/ui::icons::0.x`)}var Et=Ae(Tt),Dt=class extends S{constructor(e){if(super(e),this.it=r,e.type!==b.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===r||e==null)return this._t=void 0,this.it=e;if(e===n)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Dt.directiveName=`unsafeHTML`,Dt.resultType=1;var Ot=x(Dt),kt=class extends Dt{};kt.directiveName=`unsafeSVG`,kt.resultType=2;var At=x(kt),jt=`craft`,Mt=new Map;function Nt(e,t){return`${e}/${t}`}function Pt(e){let[t=`classic`,n=`regular`]=e.split(`/`);return{family:t,variant:n}}async function Ft(t){try{let n=await fetch(t,{mode:`cors`});if(!n.ok)return r;let i=document.createElement(`div`);i.innerHTML=await n.text();let a=i.firstElementChild;return a?.tagName?.toLowerCase()===`svg`?(a.setAttribute(`fill`,`currentColor`),a.setAttribute(`part`,`svg`),e`${At(a.outerHTML)}`):r}catch{return r}}function It(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),(t===`brands`||a===`brands`)&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function Lt(e){return(t,n,i)=>{let a=e(t,n,i);if(a===null)return r;let o=Mt.get(a);return o||(o=Ft(a),Mt.set(a,o)),o.then(e=>(e===r&&Mt.delete(a),e))}}var Rt=Lt(It);function zt(e){Et.removeIconResolver(jt),Et.addIconResolver(jt,(t,n)=>{let{family:r,variant:i}=Pt(t);return e(n,r,i)})}function Bt(e,t=`classic`,n=`regular`){return Promise.resolve(Et.resolveIcon(jt,Nt(t,n),e))}zt(Rt);var k=new WeakSet,A=class extends i{constructor(...e){super(...e),d(this,k),this.appearance=`plain`,this._svg=r,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){p(k,this,Ut).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&p(k,this,Ht).call(this),e.has(`label`)&&this.hasUpdated&&p(k,this,Ut).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return e`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?r:this._svg}
    `}static get styles(){return[t`
        :host {
          box-sizing: content-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: -0.125em;
          width: 1.25em;
          height: 1em;
          font-size: 0.8em;
        }

        :host([data-color]) {
          color: var(--c-color-fill-loud);
        }

        svg,
        ::slotted(svg) {
          height: 1em;
          width: auto;
          overflow: visible;
        }

        :host([appearance~='badge']) {
          border: 1px solid var(--c-color-border-quiet);
          color: var(--c-color-on-quiet);
          background-color: var(--c-color-fill-quiet);
          border-radius: var(--c-radius-sm);
          width: 1.6em;
          height: 1.6em;

          svg {
            width: 0.9em;
          }
        }

        :host([appearance~='badge']) ::slotted(svg) {
          width: 0.9em;
        }
      `]}};function Vt(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function Ht(){let e=p(k,this,Vt).call(this);if(e===null){this._svg=r;return}let t;try{t=await Bt(e.name,e.family,e.variant)}catch(e){console.error(e),t=r}let n=p(k,this,Vt).call(this);n!==null&&e.name===n.name&&e.family===n.family&&e.variant===n.variant&&(this._svg=t)}function Ut(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}a([o({reflect:!0})],A.prototype,`name`,void 0),a([o({reflect:!0})],A.prototype,`family`,void 0),a([o({reflect:!0})],A.prototype,`variant`,void 0),a([o()],A.prototype,`label`,void 0),a([o({reflect:!0})],A.prototype,`appearance`,void 0),a([s()],A.prototype,`_svg`,void 0),a([s()],A.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,A);var Wt=t`
  .cp-visually-hidden:not(:focus-within) {
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
`;function Gt({delayIn:e=0,delayOut:t=300}={}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a,o=()=>{r=!1,i=!1},s=o=>{let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`,i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!n._hasDisabledInvoker()?setTimeout(()=>n.show(),e):setTimeout(()=>n.hide(),t)};return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{clearTimeout(a),n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var Kt=class extends ut(lt(i)){static get properties(){return{invokerRelation:{type:String,attribute:`invoker-relation`}}}static get styles(){return[...super.styles,t`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation=`description`}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];_defineOverlayConfig(){let e=super._defineOverlayConfig(),t=mt({invokerRelation:this.invokerRelation});return{...e,...t,popperConfig:{...e.popperConfig||{},...t.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...t.popperConfig?.modifiers||[]]}}}},qt=new WeakMap,Jt=new WeakMap,Yt=new WeakSet,Xt=class extends Kt{constructor(){super(),d(this,Yt),this.placement=`top`,this.trigger=`hover focus`,u(this,qt,null),u(this,Jt,()=>{this.opened=!this.opened}),ge(this)}static get styles(){return[...super.styles,t`
        :host {
          display: contents;
        }

        ::slotted([slot='content']) {
          background-color: var(--c-color-black-fill-loud);
          border: 1px solid var(--c-color-black-border-loud);
          color: var(--c-color-black-on-loud);
          padding: var(--c-tooltip-padding, calc(4rem / 16) calc(8rem / 16));
          font-family: var(--c-font-body);
          font-size: var(--c-text-base);
          font-weight: 400;
          line-height: 1.3;
          border-radius: var(--c-radius-sm);
          box-shadow: var(--c-shadow-md);
          width: max-content;
        }
      `]}connectedCallback(){p(Yt,this,Zt).call(this),super.connectedCallback()}get _overlayInvokerNode(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}_defineOverlayConfig(){let e={...super._defineOverlayConfig()};if(Qt.call(p(Yt,this))||$t.call(p(Yt,this)))delete e.visibilityTriggerFunction;else{let{visibilityTriggerFunction:t}=Gt({delayIn:200,delayOut:0});e.visibilityTriggerFunction=t}return{...e,popperConfig:{...e.popperConfig,strategy:`fixed`,placement:this.placement,modifiers:[...e.popperConfig?.modifiers??[],..._e()]}}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),Qt.call(p(Yt,this))&&this._overlayInvokerNode?.addEventListener(`click`,l(Jt,this))}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode?.removeEventListener(`click`,l(Jt,this))}updated(e){super.updated(e),e.has(`for`)&&e.get(`for`)!==void 0&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode})}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function Zt(){if(l(qt,this)?.isConnected)return;let e=document.createElement(`div`);e.slot=`content`,e.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(e),f(qt,this,e)}function Qt(){return this.trigger.split(` `).includes(`click`)}function $t(){return this.trigger.split(` `).includes(`manual`)}a([o({reflect:!0})],Xt.prototype,`for`,void 0),a([o({reflect:!0})],Xt.prototype,`placement`,void 0),a([o({reflect:!0})],Xt.prototype,`trigger`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,Xt);var en=e=>e.key===` `||e.key===`Enter`,tn=e=>e.key===` `,nn=class extends Se(i){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return e` <div class="button-content"><slot></slot></div> `}static get styles(){return[t`
        :host {
          position: relative;
          display: inline-flex;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: 24px;
          background-color: #eee; /* minimal styling to make it recognizable as btn */
          padding: 8px; /* padding to fix with min-height */
          outline: none; /* focus style handled below */
          cursor: default; /* we should always see the default arrow, never a caret */
          /* TODO: remove, native button also allows selection. Could be usability concern... */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        :host::before {
          content: '';

          /* center vertically and horizontally */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          /* Minimum click area to meet [WCAG Success Criterion 2.5.5 Target Size (Enhanced)](https://www.w3.org/TR/WCAG22/#target-size-enhanced) */
          min-height: 44px;
          min-width: 44px;
          width: 100%;
          height: 100%;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Show focus styles on keyboard focus. */
        :host(:focus:not([disabled])),
        :host(:focus-visible) {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        /* Hide focus styles if they're not needed, for example,
        when an element receives focus via the mouse. */
        :host(:focus:not(:focus-visible)) {
          outline: 0;
        }

        :host(:hover) {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active), /* keep native :active to render quickly where possible */
        :host([active]) /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          pointer-events: none;
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `]}constructor(){super(),this.type=`button`,this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`)}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.getAttribute(`aria-disabled`)!==null&&this.removeAttribute(`aria-disabled`))}__setupEvents(){this.addEventListener(`mousedown`,this.__mousedownHandler),this.addEventListener(`keydown`,this.__keydownHandler),this.addEventListener(`keyup`,this.__keyupHandler)}__mousedownHandler(){this.active=!0;let e=()=>{this.active=!1,document.removeEventListener(`mouseup`,e),this.removeEventListener(`mouseup`,e)};document.addEventListener(`mouseup`,e),this.addEventListener(`mouseup`,e)}__keydownHandler(e){if(this.active||!en(e)){tn(e)&&e.preventDefault();return}tn(e)&&e.preventDefault(),this.active=!0;let t=e=>{en(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}__keyupHandler(e){if(en(e)){if(e.target&&e.target!==this)return;this.click()}}},rn=class extends nn{constructor(){super(),this.type=`reset`,this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement(`button`),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener(`click`,this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener(`click`,this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,(this.type===`submit`||this.type===`reset`)&&e.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener(`click`,this.__clickDelegationHandler,!0)}},j=new WeakMap;function an(){let e=document.createElement(`button`);return e.tabIndex=-1,e.type=`submit`,e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    height: 1px;
    width: 1px;
    padding: 0; /* reset default agent styles */
    border: 0; /* reset default agent styles */
  `,e}var on=class extends rn{get _nativeButtonNode(){return j.get(this._form)?.helper||null}constructor(){super(),this.type=`submit`,this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!==`submit`)return;let e=this._form;if(!j.get(this._form)){let t=an(),n=document.createElement(`div`);n.appendChild(t),j.set(this._form,{lionButtons:new Set,helper:t,observer:new MutationObserver(()=>{e.appendChild(n)})}),e.appendChild(n),j.get(e)?.observer.observe(n,{childList:!0})}j.get(e)?.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){let e=j.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),j.get(this._form)?.observer.disconnect(),j.delete(this._form)))}}},sn=t`
  :host {
    /* Necessary to use variables here to override the default active style specificity */
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud);
    --_active-border-color: var(--c-color-border-loud);
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    --_focus-outline-color: transparent;
    --_padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    --_height: var(--c-button-height, var(--c-size-control-md));
    --_border-width: var(--c-button-border-width, 1px);
    /* How far the content sits from the button's edge, which is what flush
       takes back. */
    --_flush-inline: calc(var(--_padding-inline) + var(--_border-width));
    --_flush-block: max(0px, calc((var(--_height) - 1lh) / 2));
    cursor: pointer;
    font: inherit;
    display: inline-flex;
    justify-content: center;
    gap: var(--c-spacing-sm);
    align-items: center;
    /* Per-corner radius so a parent (e.g. craft-button-group) can square off
       individual corners via inherited custom properties — including on a
       button nested inside a slotted craft-action-menu, which ::slotted()
       cannot reach. Each corner falls back to the single --_button-radius. */
    border-start-start-radius: var(
      --c-button-radius-start-start,
      var(--_button-radius)
    );
    border-start-end-radius: var(
      --c-button-radius-start-end,
      var(--_button-radius)
    );
    border-end-start-radius: var(
      --c-button-radius-end-start,
      var(--_button-radius)
    );
    border-end-end-radius: var(
      --c-button-radius-end-end,
      var(--_button-radius)
    );
    padding-inline: var(--_padding-inline);
    padding-block: 0;
    width: auto;
    min-height: var(--_height);
    min-width: var(--c-button-width, var(--c-size-control-md));
    white-space: nowrap;
    border-width: var(--_border-width);
    border-style: var(--c-button-border-style, solid);

    /* Colorable styles */
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
    border-color: var(
      --c-color-border-loud,
      var(--c-color-neutral-border-loud)
    );
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
  }

  /*
  Color palette per variant.
  The single 'variant' axis picks both a palette and an appearance. Here we map
  the generic --c-color-* props to a palette; 'primary' uses accent, 'danger'
  uses danger, everything else uses neutral, and 'inherit' sets nothing so it
  adopts the parent's theme.
  */
  /*
    Neutral variants use the neutral palette by default. With [inherit] we skip
    this override so the ambient --c-color-* (set by a colorable ancestor) flows
    through instead. primary/danger set their palettes unconditionally below, so
    they are unaffected by [inherit].
  */
  :host([variant~='solid']:not([inherit])),
  :host([variant~='fill']:not([inherit])),
  :host([variant~='outline']:not([inherit])),
  :host([variant~='dashed']:not([inherit])),
  :host([variant~='plain']:not([inherit])),
  :host([variant~='link']:not([inherit])),
  :host([variant~='none']:not([inherit])) {
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
  }

  :host([variant~='primary']) {
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-loud: var(--c-color-accent-on-loud);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
  }

  :host([variant~='danger-plain']),
  :host([variant~='danger']) {
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-loud: var(--c-color-danger-on-loud);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host(:hover) {
      background-color: hsl(
        from var(--c-color-fill-loud, var(--c-button-default-fill)) h s
          calc(l - 5)
      );
      color: var(--c-color-on-loud);
    }
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: var(--c-focus-outline-width) solid var(--_focus-outline-color);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host(:focus-visible) {
    --_focus-outline-color: var(--c-color-focus-outline);
  }

  :host(:not(:disabled):not(.loading):active),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--_active-color);
    background-color: var(--_active-background-color);
    box-shadow: inset 0 1px 3px var(--c-color-mix-active);
  }

  /* Selected state (e.g. inside a radio button-group): show the loud fill. */
  :host(:not(:disabled):not(.loading)[active]),
  :host(.is-active:not(:disabled):not(.loading)) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /*
  Sizes
   */
  :host([size~='zero']) {
    --_padding-inline: 0px;
    --_height: 0px;
    min-width: 0;
  }

  :host([size~='small']) {
    --_padding-inline: var(--c-spacing-sm);
    --_height: var(--c-size-control-sm);
    min-width: var(--c-size-control-sm);
    font-size: 0.9em;
  }

  :host([size~='large']) {
    --_padding-inline: var(--c-spacing-lg);
    --_height: var(--c-size-control-lg);
    min-width: var(--c-size-control-lg);
  }

  /*
  Flush
   */
  :host([variant~='plain'][flush='']),
  :host([variant~='plain'][flush~='inline']),
  :host([variant~='plain'][flush~='inline-start']) {
    margin-inline-start: calc(var(--_flush-inline) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='plain'][flush~='inline']),
  :host([variant~='plain'][flush~='inline-end']) {
    margin-inline-end: calc(var(--_flush-inline) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='plain'][flush~='block']),
  :host([variant~='plain'][flush~='block-start']) {
    margin-block-start: calc(var(--_flush-block) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='plain'][flush~='block']),
  :host([variant~='plain'][flush~='block-end']) {
    margin-block-end: calc(var(--_flush-block) * -1);
  }

  :host([loading]),
  :host([action-state='loading']) {
    position: relative;

    .prefix,
    .label,
    .suffix {
      visibility: hidden;
    }

    craft-spinner {
      --size: 1.25em;
      position: absolute;
      inset-block-start: calc(50% - var(--size) / 2);
      inset-inline-start: calc(50% - var(--size) / 2);
    }
  }

  /*
  Icon
   */
  :host([icon]:empty) {
    /* A square around a 1em × 0.8em icon (see craft-icon). */
    --_padding-inline: 0px;
    --_flush-inline: max(0px, calc((var(--_height) - 1em) / 2));
    --_flush-block: max(0px, calc((var(--_height) - 0.8em) / 2));
    aspect-ratio: 1;
    padding-block: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  :host([icon][size~='small']) {
    font-size: 0.8em;
  }

  /*
  Variants (appearance × palette)
   */

  /* Solid — primary, danger, and solid are filled with the loud color. */
  :host([variant~='primary']),
  :host([variant~='danger']),
  :host([variant~='solid']) {
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
    border-color: transparent;
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([variant~='primary']:hover),
  :host([variant~='danger']:hover),
  :host([variant~='solid']:hover) {
    background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([variant~='primary']:active),
  :host([variant~='primary'][aria-pressed='true']),
  :host([variant~='danger']:active),
  :host([variant~='danger'][aria-pressed='true']),
  :host([variant~='solid']:active),
  :host([variant~='solid'][aria-pressed='true']) {
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  /* Fill (default) — neutral normal fill. */
  :host([variant~='fill']) {
    border-color: transparent;
    background-color: var(
      --c-color-fill-normal,
      var(--c-color-neutral-fill-normal)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([variant~='fill']:hover) {
    background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([variant~='fill']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  /* Outline, Dashed & Plain — transparent fill. */
  :host([variant~='outline']),
  :host([variant~='dashed']),
  :host([variant~='danger-plain']),
  :host([variant~='plain']) {
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([variant~='outline']:not(:disabled):not(.loading):hover),
  :host([variant~='dashed']:not(:disabled):not(.loading):hover),
  :host([variant~='danger-plain']:not(:disabled):not(.loading):hover),
  :host([variant~='plain']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([variant~='outline']:not(:disabled):not(.loading):active),
  :host([variant~='dashed']:not(:disabled):not(.loading):active),
  :host([variant~='danger-plain']:not(:disabled):not(.loading):active),
  :host([variant~='plain']:not(:disabled):not(.loading):active) {
    --_active-background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
    --_active-color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
  }

  /* Outline & Dashed — visible border. */
  :host([variant~='outline']),
  :host([variant~='dashed']) {
    border-color: var(--c-color-border-loud);
  }

  :host([variant~='dashed']) {
    --c-button-border-style: dashed;
  }

  /* Plain — no border. */
  :host([variant~='danger-plain']),
  :host([variant~='plain']) {
    border-color: transparent;

    &::before {
      display: none;
    }
  }

  /* Link — renders as a text hyperlink: no fill or border, underlined. */
  :host([variant~='link']) {
    display: inline-flex;
    appearance: none;
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-fill-loud, var(--c-color-neutral-fill-loud));
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;
    text-decoration: underline;

    &::before {
      /* remove the sizer added by lion */
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([variant~='link']:not(:disabled):not(.loading):hover) {
    background-color: transparent;
    color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    text-decoration: none;
  }

  :host([variant~='link']:not(:disabled):not(.loading):active) {
    background-color: transparent;
  }

  /* None — completely unstyled; provides behavior only. */
  :host([variant~='none']) {
    appearance: none;
    background-color: transparent;
    border-color: transparent;
    border-width: 0;
    color: inherit;
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;

    &::before {
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([variant~='none']:hover),
  :host([variant~='none']:active) {
    background-color: transparent;
    color: inherit;
  }

  .button-content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .prefix,
  .suffix {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-content--spaced-prefix .prefix {
    margin-inline-end: var(--c-spacing-sm);
  }

  .button-content--spaced-suffix .suffix {
    margin-inline-start: var(--c-spacing-sm);
  }

  .button-content--start {
    justify-content: start;
  }

  .button-content--end {
    justify-content: end;
  }

  .a11y-error {
    position: relative;
    outline: 2px solid var(--c-color-danger-border-normal) !important;
    background-color: rgba(255, 0, 0, 0.1) !important;

    &:after {
      content: '!';
      position: absolute;
      display: inline-flex;
      font-size: calc(11rem / 16);
      padding: 0.125em 0.5em 0.25em;
      inset-block-start: -2px;
      inset-inline-start: 0;
      background: var(--c-color-danger-bg-emphasis);
      color: white;
      transform: translateX(-100%);
    }
  }

  /*
  Link mode: the inner <a> is the full interactive surface.
  Move inline padding from :host to the anchor so the whole button is clickable.
   */
  :host([href]:not([disabled])) {
    padding-inline: 0;

    /* Lion's minimum-click-target overlay is positioned, so it paints above
       the (non-positioned) anchor and swallows every pointer click before it
       can activate the link. Recreate the overlay on the anchor instead, so
       the full target navigates. */

    &::before {
      display: none;
    }
  }

  .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: inherit;
    gap: inherit;
    inline-size: 100%;
    /* Stretch to the host's full cross size so the whole button (including
       block padding) is the clickable link. The host's height is indefinite
       (min-height), so a percentage min-block-size would not resolve. */
    align-self: stretch;
    color: inherit;
    font: inherit;
    text-decoration: none;
    padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );

    /* Same minimum click area as Lion's :host::before (WCAG 2.5.5), but as
       part of the anchor so clicks on it follow the link. */

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-height: 44px;
      min-width: 44px;
      width: 100%;
      height: 100%;
    }
  }

  :host([href][size~='small']:not([disabled])) .link {
    padding-inline: var(--c-spacing-sm);
  }

  :host([href][size~='large']:not([disabled])) .link {
    padding-inline: var(--c-spacing-lg);
  }

  :host([href][size~='zero']:not([disabled])) .link,
  :host([href][icon]:not([disabled])) .link {
    padding-inline: 0;
  }
`,cn=t`
  :host {
    --_size: var(--size, 24px);
  }

  .wrapper {
    display: inline-flex;
    justify-content: center;
  }

  .hidden {
    display: none;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(1turn);
    }
  }

  .spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_size);
  }

  .spinner:before {
    display: block;
    content: '';
    font-size: 0;
    animation: rotator 0.7s linear infinite;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-inline-end-color: currentcolor;
    border-block-end-color: currentcolor;
    opacity: 0.8;
  }
`,ln=new WeakMap,M=class extends i{constructor(...e){super(...e),this.label=w(`More Info`),this.icon=`circle-info`,this.disabled=!1,this.status=``,u(this,ln,new AbortController)}connectedCallback(){super.connectedCallback(),l(ln,this).signal.aborted&&f(ln,this,new AbortController),this.id||=`info-icon-${Math.random().toString(36).slice(2,8)}`;let{signal:e}=l(ln,this);this.addEventListener(`craft-show`,()=>{N._&&N._!==this&&N._.renderRoot.querySelector(`craft-tooltip`)?.hide(),N._=this},{signal:e}),this.addEventListener(`craft-after-show`,()=>{this.status=``,setTimeout(()=>{this.status=`Some new status`},200)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{N._===this&&(N._=null),this.status=``},{signal:e})}disconnectedCallback(){N._===this&&(N._=null),l(ln,this).abort(),super.disconnectedCallback()}render(){return e`
      <div class="cp-info-icon">
        <craft-visually-hidden role="status">
          ${this.status}
        </craft-visually-hidden>

        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${this.id}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${this.id}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};M.styles=t`
    :host {
      display: inline-flex;
    }
  `;var N={_:null};a([o()],M.prototype,`label`,void 0),a([o()],M.prototype,`icon`,void 0),a([o({type:Boolean,reflect:!0})],M.prototype,`disabled`,void 0),a([o()],M.prototype,`id`,void 0),a([s()],M.prototype,`status`,void 0),a([c(`craft-tooltip`)],M.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,M);var un=class extends i{constructor(...e){super(...e),this.debug=!1}render(){return e`<slot></slot>`}};un.styles=t`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,a([o({type:Boolean,reflect:!0})],un.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,un);var dn=class extends i{constructor(...e){super(...e),this.visible=!0}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`hide`))}focus(){this.wrapper?.focus()}render(){return e`
      <div
        tabindex="-1"
        class="${C({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot /></span>
      </div>
    `}};dn.styles=[Wt,cn],a([o({reflect:!0,type:Boolean})],dn.prototype,`visible`,void 0),a([c(`.wrapper`)],dn.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,dn);var fn=Object.prototype.toString;function pn(e){return typeof e==`function`||fn.call(e)===`[object Function]`}function mn(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var hn=2**53-1;function gn(e){var t=mn(e);return Math.min(Math.max(t,0),hn)}function P(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!pn(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=gn(r.length),a=pn(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function _n(e){"@babel/helpers - typeof";return _n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_n(e)}function vn(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function yn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Sn(r.key),r)}}function bn(e,t,n){return t&&yn(e.prototype,t),n&&yn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xn(e,t,n){return t=Sn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sn(e){var t=Cn(e,`string`);return _n(t)==`symbol`?t:t+``}function Cn(e,t){if(_n(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(_n(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var wn=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];vn(this,e),xn(this,`items`,void 0),this.items=t}return bn(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function F(e){return e.localName??e.tagName.toLowerCase()}var Tn={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},En={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function Dn(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=En[t])!=null&&r.has(n))})}function On(e,t){return Dn(e,t)}function kn(e){var t=jn(e);if(t===null||Mn.indexOf(t)!==-1){var n=An(e);if(Mn.indexOf(t||``)===-1||On(e,n||``))return n}return t}function An(e){var t=Tn[F(e)];if(t!==void 0)return t;switch(F(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!On(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function jn(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var Mn=[`presentation`,`none`];function I(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function Nn(e){return I(e)&&F(e)===`caption`}function Pn(e){return I(e)&&F(e)===`input`}function Fn(e){return I(e)&&F(e)===`optgroup`}function In(e){return I(e)&&F(e)===`select`}function Ln(e){return I(e)&&F(e)===`table`}function Rn(e){return I(e)&&F(e)===`textarea`}function zn(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function Bn(e){return I(e)&&F(e)===`fieldset`}function Vn(e){return I(e)&&F(e)===`legend`}function Hn(e){return I(e)&&F(e)===`slot`}function Un(e){return I(e)&&e.ownerSVGElement!==void 0}function Wn(e){return I(e)&&F(e)===`svg`}function Gn(e){return Un(e)&&F(e)===`title`}function Kn(e,t){if(I(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function L(e,t){return I(e)?t.indexOf(kn(e))!==-1:!1}function qn(e){return e.trim().replace(/\s\s+/g,` `)}function Jn(e,t){if(!I(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function Yn(e){return L(e,[`button`,`combobox`,`listbox`,`textbox`])||Xn(e,`range`)}function Xn(e,t){if(!I(e))return!1;switch(t){case`range`:return L(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function Zn(e,t){var n=P(e.querySelectorAll(t));return Kn(e,`aria-owns`).forEach(function(e){n.push.apply(n,P(e.querySelectorAll(t)))}),n}function Qn(e){return In(e)?e.selectedOptions||Zn(e,`[selected]`):Zn(e,`[aria-selected="true"]`)}function $n(e){return L(e,Mn)}function er(e){return Nn(e)}function tr(e){return L(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function nr(e){return!1}function rr(e){return Pn(e)||Rn(e)?e.value:e.textContent||``}function ir(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function ar(e){var t=F(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function or(e){if(ar(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&I(e)){var n=or(e);n!==null&&(t=n)}}),t}function sr(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?or(e):e.ownerDocument.getElementById(t)}function cr(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return P(t);if(!ar(e))return null;var n=e.ownerDocument;return P(n.querySelectorAll(`label`)).filter(function(t){return sr(t)===e})}function lr(e){var t=e.assignedNodes();return t.length===0?P(e.childNodes):t}function ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new wn,r=typeof Map>`u`?void 0:new Map,i=zn(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d!==void 0&&d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(I(e)&&c&&(n=`${ir(u(e,`::before`))} ${n}`),(Hn(e)?lr(e):P(e.childNodes).concat(Kn(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(I(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),I(e)&&c){var r=ir(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return I(e)?h(e,`title`):null}function _(e){if(!I(e))return null;if(Bn(e)){n.add(e);for(var t=P(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(Vn(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Ln(e)){n.add(e);for(var a=P(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(Nn(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Wn(e)){n.add(e);for(var c=P(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(Gn(u))return u.textContent}return null}else if(F(e)===`img`||F(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(Fn(e)){var f=h(e,`label`);if(f!==null)return f}if(Pn(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=cr(e);if(g!==null&&g.length!==0)return n.add(e),P(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(Pn(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(L(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&Jn(e,p)&&!t.isReferenced)return n.add(e),``;var r=I(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?Kn(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&Yn(e)&&o===`name`;if(!a){var s=(I(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!$n(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(L(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(L(e,[`combobox`,`listbox`])){n.add(e);var l=Qn(e);return l.length===0?Pn(e)?e.value:``:P(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if(Xn(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(L(e,[`textbox`]))return n.add(e),rr(e)}if(tr(e)||I(e)&&t.isReferenced||er(e)||nr(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return qn(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function dr(e){return L(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return dr(e)?``:ur(e,t)}var pr=e=>{var t=new WeakMap;class n extends e{constructor(...e){super(...e),this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.actionState=h.Idle,this.feedbackMessage=null,u(this,t,e=>{if(this.disabled){e.preventDefault();return}_(this.action)&&(e.preventDefault(),this.triggerAction(e))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,l(t,this))}disconnectedCallback(){this.removeEventListener(`click`,l(t,this)),super.disconnectedCallback()}setActionState(e,t={}){this.actionState=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`action:change-state`,{bubbles:!0,composed:!0,detail:{state:e,actionType:_(this.action)?.type,...t}}))}async triggerAction(e){let t=_(this.action);if(t){t.type===`http`&&this.setActionState(h.Loading,this.feedback?.loading);try{await v(t,{trigger:this,sourceEvent:e}),this.setActionState(h.Success,this.feedback?.success)}catch(e){this.setActionState(h.Error,{message:e instanceof Error?e.message:void 0,...this.feedback?.error??{}})}finally{setTimeout(()=>{this.setActionState(h.Idle)},this.feedbackDuration)}}}}return a([o({type:Object})],n.prototype,`action`,void 0),a([o({type:Object})],n.prototype,`feedback`,void 0),a([o({type:Number,attribute:`feedback-duration`})],n.prototype,`feedbackDuration`,void 0),a([o({reflect:!0,attribute:`action-state`})],n.prototype,`actionState`,void 0),a([s()],n.prototype,`feedbackMessage`,void 0),n},mr={Primary:`primary`,Danger:`danger`,DangerPlain:`danger-plain`,Solid:`solid`,Fill:`fill`,Outline:`outline`,Dashed:`dashed`,Plain:`plain`,Link:`link`,None:`none`},hr=new WeakMap,R=new WeakSet,gr=new WeakMap,z=new WeakMap,B=class extends pr(on){static get styles(){return[...super.styles,Wt,sn]}constructor(){super(),d(this,R),u(this,hr,e=>{!this.toggle||this.disabled||this.loading||this.dispatchEvent(new CustomEvent(`craft-toggle`,{bubbles:!0,composed:!0,cancelable:!0,detail:{active:!this.active,sourceEvent:e}}))}),this.variant=mr.Fill,this.inherit=!1,this.size=`medium`,this.active=!1,this.toggle=!1,this.loading=!1,this.focusableWhenDisabled=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._hasAccessibilityError=!1,this._content={label:!1,prefix:!1,suffix:!1},u(this,gr,null),u(this,z,null),this.linkHostStateApplied=!1,this.originalType=null,this.announcementTimer=null,this.type=`button`}connectedCallback(){this.href&&!this.disabled&&(this.originalType=this.type,this.type=`button`,this.setAttribute(`role`,`presentation`),this.linkHostStateApplied=!0),super.connectedCallback(),this.syncLinkHostState(),this.addEventListener(`click`,l(hr,this)),p(R,this,_r).call(this),f(gr,this,new MutationObserver(()=>p(R,this,_r).call(this))),l(gr,this).observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]}),this.hasUpdated&&!this.accessibleName&&p(R,this,vr).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,l(hr,this)),l(gr,this)?.disconnect(),f(gr,this,null),p(R,this,xr).call(this),this.announcementTimer&&=(clearTimeout(this.announcementTimer),null)}updated(e){super.updated(e),(e.has(`href`)||e.has(`disabled`))&&this.syncLinkHostState(),(e.has(`disabled`)||e.has(`focusableWhenDisabled`))&&(this.disabled?this.tabIndex=this.focusableWhenDisabled?0:-1:this.isLink||(this.tabIndex=0)),e.has(`actionState`)&&e.get(`actionState`)!==void 0&&(this.loading=this.actionState===h.Loading),this.toggle&&(e.has(`active`)||e.has(`toggle`))&&this.setAttribute(`aria-pressed`,String(this.active)),e.has(`loading`)&&this.loading&&this.announceLoading()}announceLoading(){this.liveRegion.textContent=w(`Loading`),this.announcementTimer&&clearTimeout(this.announcementTimer),this.announcementTimer=setTimeout(()=>{this.liveRegion.textContent=``},5e3)}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute(`role`,`presentation`),this.tabIndex=-1,this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=this.originalType??`button`,this.disabled||(this.tabIndex=0),!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll(`craft-icon, craft-spinner`);await Promise.all(Array.from(t).map(e=>e.updateComplete)),p(R,this,vr).call(this)}get isLink(){return!!this.href&&!this.disabled}get computedRel(){if(this.target===`_blank`){let e=new Set((this.rel??``).split(/\s+/).filter(Boolean));return e.add(`noopener`),Array.from(e).join(` `)}return this.rel}render(){let t=this._content.prefix||!!this.icon&&this.iconPosition===`prefix`,n=this._content.suffix||!!this.icon&&this.iconPosition===`suffix`,i=e`
      <div
        class="${C({"button-content":!0,"button-content--spaced-prefix":t&&this._content.label,"button-content--spaced-suffix":n&&this._content.label,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?e`<craft-icon name="${this.icon}"></craft-icon>`:r}
        </slot>
        <slot class="label" part="label"></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?e`<craft-icon name="${this.icon}"></craft-icon>`:r}
        </slot>
      </div>
      ${this.loading?e`<craft-spinner part="spinner"></craft-spinner>`:r}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;return this.isLink?e`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${this.target??r}"
          rel="${this.computedRel??r}"
          download="${this.download??r}"
          >${i}</a
        >
      `:i}};function _r(){let e=e=>Array.from(this.childNodes).some(t=>t instanceof Element?(t.getAttribute(`slot`)||null)===e:e===null&&t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim()),t={label:e(null),prefix:e(`prefix`),suffix:e(`suffix`)};(t.label!==this._content.label||t.prefix!==this._content.prefix||t.suffix!==this._content.suffix)&&(this._content=t)}function vr(){if(!this.accessibleName){let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this.accessibleName=fr(e)}let e=!this.accessibleName||this.accessibleName.trim()===``;if(e&&!p(R,this,yr).call(this)){p(R,this,br).call(this);return}this._hasAccessibilityError=e}function yr(){return typeof this.checkVisibility==`function`?this.checkVisibility({visibilityProperty:!0}):this.getClientRects().length>0}function br(){l(z,this)||typeof ResizeObserver>`u`||(f(z,this,new ResizeObserver(()=>{p(R,this,yr).call(this)&&(p(R,this,xr).call(this),p(R,this,vr).call(this))})),l(z,this).observe(this))}function xr(){l(z,this)?.disconnect(),f(z,this,null)}a([o({attribute:`accessible-name`})],B.prototype,`accessibleName`,void 0),a([o({reflect:!0})],B.prototype,`variant`,void 0),a([o({reflect:!0,type:Boolean})],B.prototype,`inherit`,void 0),a([o({reflect:!0})],B.prototype,`size`,void 0),a([o({reflect:!0})],B.prototype,`value`,void 0),a([o({reflect:!0,type:Boolean})],B.prototype,`active`,void 0),a([o({type:Boolean,reflect:!0})],B.prototype,`toggle`,void 0),a([o({reflect:!0,type:Boolean})],B.prototype,`loading`,void 0),a([o({attribute:`focusable-when-disabled`,type:Boolean})],B.prototype,`focusableWhenDisabled`,void 0),a([o({reflect:!0})],B.prototype,`flush`,void 0),a([o()],B.prototype,`align`,void 0),a([o()],B.prototype,`icon`,void 0),a([o({reflect:!0})],B.prototype,`href`,void 0),a([o()],B.prototype,`target`,void 0),a([o()],B.prototype,`rel`,void 0),a([o()],B.prototype,`download`,void 0),a([o({attribute:`icon-position`})],B.prototype,`iconPosition`,void 0),a([c(`[data-live-region]`)],B.prototype,`liveRegion`,void 0),a([s()],B.prototype,`_hasAccessibilityError`,void 0),a([s()],B.prototype,`_content`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,B);var Sr=`important`,Cr=` !important`,wr=x(class extends S{constructor(e){if(super(e),e.type!==b.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in t){let n=t[e];if(n!=null){this.ft.add(e);let t=typeof n==`string`&&n.endsWith(Cr);e.includes(`-`)||t?r.setProperty(e,t?n.slice(0,-11):n,t?Sr:``):r[e]=n}}return n}}),Tr=t`
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
`,Er=t`
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
`,Dr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,kr=Object.getOwnPropertySymbols,Ar=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable,Mr=e=>{throw TypeError(e)},Nr=(e,t,n)=>t in e?Dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pr=(e,t)=>{for(var n in t||={})Ar.call(t,n)&&Nr(e,n,t[n]);if(kr)for(var n of kr(t))jr.call(t,n)&&Nr(e,n,t[n]);return e},Fr=(e,t,n,r)=>{for(var i=r>1?void 0:r?Or(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Dr(t,n,i),i},Ir=(e,t,n)=>t.has(e)||Mr(`Cannot `+n),Lr=(e,t,n)=>(Ir(e,t,`read from private field`),n?n.call(e):t.get(e)),Rr=(e,t,n)=>t.has(e)?Mr(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),zr=(e,t,n,r)=>(Ir(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Br,Vr=class extends i{constructor(){super(),Rr(this,Br,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,Pr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){Lr(this,Br)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),zr(this,Br,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Br=new WeakMap,Vr.version=`2.20.1`,Vr.dependencies={},Fr([o()],Vr.prototype,`dir`,2),Fr([o()],Vr.prototype,`lang`,2);var Hr=class extends Vr{render(){return e` <slot></slot> `}};Hr.styles=[Er,Tr],Hr.define(`sl-visually-hidden`);var Ur=t`
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
`,V=class extends i{constructor(){super(),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.variant=`primary`,this.id=this.id||`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){if(this.showCount)return this.badgeCount>99?`99+`:this.badgeCount.toString()}getBadgeRole(){return this.altText?`img`:r}getLabelId(){return`${this.id}-label`}renderBadgeContents(){return e`
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
        class="${C({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?this.getLabelId():r}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};V.styles=[Ur],a([o({attribute:`alt-text`})],V.prototype,`altText`,void 0),a([o({attribute:`badge-count`})],V.prototype,`badgeCount`,void 0),a([o({attribute:`badge-count-suffix`})],V.prototype,`badgeCountSuffix`,void 0),a([o()],V.prototype,`variant`,void 0),a([o()],V.prototype,`id`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,V);function Wr(e,t){let n=t.left>e.x?t.left:t.right<e.x?t.right:void 0;if(!(n===void 0||t.height<=0))return[e,{x:n,y:t.top},{x:n,y:t.bottom}]}function Gr(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Kr([e,t,n],r){let i=Gr(r,e,t),a=Gr(r,t,n),o=Gr(r,n,e);return!((i<0||a<0||o<0)&&(i>0||a>0||o>0))}var H=new WeakMap,U=new WeakMap,W=new WeakMap,G=new WeakMap,K=new WeakMap,q=new WeakMap,J=new WeakSet,qr=new WeakMap,Jr=class{constructor(e){d(this,J),u(this,H,new Map),u(this,U,!1),u(this,W,void 0),u(this,G,void 0),u(this,K,void 0),u(this,q,void 0),u(this,qr,e=>{f(G,this,{x:e.clientX,y:e.clientY}),l(K,this)&&p(J,this,ei).call(this)}),this.options=e}get warm(){return l(U,this)}requestOpen(e,{immediate:t=!1}={}){let n=p(J,this,Yr).call(this,e);if(p(J,this,ti).call(this),clearTimeout(n.closeTimer),n.closeTimer=void 0,n.exit=void 0,!t&&p(J,this,Qr).call(this,e)){f(K,this,e);return}if(p(J,this,Xr).call(this,e),!(n.open||n.openTimer!==void 0)){if(t||l(U,this)){p(J,this,ni).call(this,e,n);return}n.openTimer=setTimeout(()=>{n.openTimer=void 0,p(J,this,ni).call(this,e,n)},this.options.warmUpDelay)}}requestClose(e){let t=p(J,this,Yr).call(this,e);clearTimeout(t.openTimer),t.openTimer=void 0,l(K,this)===e&&f(K,this,void 0),!(!t.open||t.closeTimer!==void 0)&&(t.exit=l(G,this)&&{...l(G,this),at:Date.now()},p(J,this,$r).call(this,e,t))}notifyClosed(e){let t=p(J,this,Yr).call(this,e);clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.openTimer=void 0,t.closeTimer=void 0,t.open&&(t.open=!1,p(J,this,ii).call(this))}remove(e){let t=l(H,this).get(e);t&&(clearTimeout(t.openTimer),clearTimeout(t.closeTimer),l(H,this).delete(e),l(K,this)===e&&f(K,this,void 0),p(J,this,ii).call(this))}reset(){for(let[e,t]of l(H,this))clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.open&&e.setOpen(!1);l(H,this).clear(),clearTimeout(l(W,this)),f(W,this,void 0),f(U,this,!1),f(K,this,void 0),f(G,this,void 0),l(q,this)?.abort(),f(q,this,void 0)}};function Yr(e){let t=l(H,this).get(e);return t||(t={open:!1},l(H,this).set(e,t)),t}function Xr(e){for(let[t,n]of l(H,this))t===e||!n.open||t.element.contains(e.element)||(clearTimeout(n.closeTimer),n.closeTimer=void 0,p(J,this,ri).call(this,t,n))}function Zr(e,t){let{exit:n}=t,r=l(G,this);if(!n||!r||Date.now()-n.at>=this.options.graceDelay)return!1;let i=e.overlayRect?.(),a=i&&Wr(n,i);return!!a&&Kr(a,r)}function Qr(e){for(let[t,n]of l(H,this))if(!(t===e||!n.open||t.element.contains(e.element))&&p(J,this,Zr).call(this,t,n))return!0;return!1}function $r(e,t){t.closeTimer=setTimeout(()=>{if(t.closeTimer=void 0,p(J,this,Zr).call(this,e,t)){p(J,this,$r).call(this,e,t);return}p(J,this,ri).call(this,e,t),p(J,this,ei).call(this)},this.options.closeDelay)}function ei(){let e=l(K,this);f(K,this,void 0),e&&this.requestOpen(e)}function ti(){l(q,this)||(f(q,this,new AbortController),document.addEventListener(`pointermove`,l(qr,this),{capture:!0,passive:!0,signal:l(q,this).signal}))}function ni(e,t){t.open=!0,clearTimeout(l(W,this)),f(W,this,void 0),f(U,this,!0),e.setOpen(!0)}function ri(e,t){t.open=!1,t.exit=void 0,e.setOpen(!1),p(J,this,ii).call(this)}function ii(){if(!(!l(U,this)||l(W,this)!==void 0)){for(let e of l(H,this).values())if(e.open||e.openTimer!==void 0)return;f(W,this,setTimeout(()=>{f(W,this,void 0),f(U,this,!1)},this.options.coolDownDelay))}}var Y=new Jr({warmUpDelay:250,closeDelay:150,coolDownDelay:500,graceDelay:300}),ai=Symbol.for(``),oi=e=>{if(e?.r===ai)return e?._$litStatic$},si=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:ai}),ci=new Map,li=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=oi(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=ci.get(e))===void 0&&(o.raw=o,ci.set(e,t=o)),n=s}return e(t,...n)})(e),ui=t`
  :host {
    --_padding-inline: var(--c-spacing-md);
    --_padding-block: var(--c-spacing-sm);
    /* The icon column of a row with a prefix. */
    --_prefix-size: calc(24rem / 16);
    /* The rule down the side of an inline subnav. */
    --_subnav-rule: 2px;
    /* The square a collapsed row reserves for its icon, and the box that
       square actually occupies — the row draws a transparent border to keep
       room for its focus state, so anything covering it has to match the
       outer figure, not the inner one. */
    --_rail-border: 1px;
    --_rail-size: calc(var(--c-size-touch-target) - var(--c-spacing-sm));
    --_rail-box: calc(var(--_rail-size) + var(--_rail-border) * 2);

    border-radius: var(--c-radius-md);
  }

  .nav-item {
    display: grid;
    gap: var(--c-spacing-md);
    /* Two tracks: an item with no icon has no prefix to leave room for. */
    grid-template-columns: 1fr auto;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding-inline: var(--_padding-inline);
    padding-block: var(--_padding-block);
    border: 1px solid transparent;
    border-radius: var(--c-radius-md);
    position: relative;

    /*
     * Expanded, the focusable element is the label inside the row, so the ring
     * is drawn on the row around it. Collapsed, the row *is* the focusable
     * element — without this second selector it fell through to the browser's
     * default outline, which is a different width and offset from the one
     * craft-button draws, so the ring changed size as you tabbed onto the
     * chevron.
     */
    &:focus-visible,
    &:has(.nav-item__action-item:focus-visible) {
      outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
      outline-offset: var(--c-focus-outline-offset);
    }
  }

  .nav-item__action-item {
    text-decoration: none;
    color: inherit;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }

    &:focus-visible {
      outline: none;
    }
  }

  /*
   * An item that only discloses its flyout is a button, so it can be focused.
   * Zero specificity, so the rules that shape the row still win.
   */
  :where(button.nav-item, button.nav-item__action-item) {
    appearance: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    padding: 0;
    text-align: start;
    cursor: pointer;
  }

  craft-badge-indicator {
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .nav-item__prefix craft-button,
  /* Above the label's full-row click target, or a click meant for a control
     would follow the link instead. */
  .nav-item__suffix craft-button,
  ::slotted([slot='actions']) {
    position: relative;
    z-index: 1;
  }

  .nav-item--prefixed {
    padding-inline: var(--c-spacing-sm);
    grid-template-columns: var(--_prefix-size) 1fr auto;
  }

  .nav-item--flush {
    margin-inline-start: calc(var(--_padding-inline) * -1);
  }

  /*
   * A heading names the rows under it rather than being one of them, so it's
   * smaller and heavier than they are. One rule for both kinds — a group
   * row in the list, and the label heading a collapsed item's flyout — so the
   * two can't drift apart again.
   *
   * The type goes on the row, not the host, or the subnav nested inside would
   * inherit it and every child would read as a heading too.
   */
  :host([group]) .nav-item,
  .flyout__label {
    font-size: var(--c-text-sm);
    font-weight: bold;
  }

  /*
   * A group heading sits with the rows it heads: the space above separates it
   * from whatever came before, the space below only sets it off from what it
   * heads. The flyout's label takes its spacing from the flyout grid.
   */
  :host([group]) {
    margin-block-start: var(--c-spacing-sm);
  }

  :host([group]) .nav-item {
    padding-block: var(--_padding-block) var(--c-spacing-xs);
  }

  :host([active]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border: 1px solid var(--c-color-accent-border-normal);
  }

  /*
   * Selected parent: on the trail to the page you're on, but not the page
   * itself. Stub values — a quieter treatment than the child's.
   */
  :host([active]:not([current])) .nav-item {
    background-color: transparent;
    border-color: transparent;

    &:before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block-start: 12%;
      width: calc(3rem / 16);
      height: 76%;
      border-radius: calc(2rem / 16);
      background-color: var(--c-color-accent-fill-loud);
      transform: translateX(-150%);
    }
  }

  /*
   * Selected child: the page you're on. Stub values.
   */
  :host([current]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
    color: var(--c-color-accent-on-quiet);
  }

  /* Not on the page you're on: its selected fill is the state to show. */
  :host(:not([current]))
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
    display: flex;
    align-items: center;
    gap: var(--c-spacing-xs);
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

  /*
   * A child's label lines up with its parent's. The parent's label sits past
   * its padding, its icon column and the gap after it; a child's sits past this
   * margin, the rule, this padding and the child's own padding. The margin is
   * whatever makes the two add up. Both rows carry the same border, so it
   * cancels out.
   */
  :host(:not([group])) .subnav {
    margin-block-start: var(--c-spacing-sm);
    margin-inline-start: calc(
      var(--c-spacing-sm) + var(--_prefix-size) + var(--c-spacing-md) -
        var(--_subnav-rule) - var(--c-spacing-sm) - var(--_padding-inline)
    );
    padding-inline: var(--c-spacing-sm);
    border-left: var(--_subnav-rule) solid transparent;
    /*border-left: 2px solid color-mix(in srgb, currentColor, transparent 90%);*/
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

  /* Quieter than the label it trails, and sized to the toggle chevron it
     stands in for. */
  .flyout-indicator {
    font-size: calc(10rem / 16);
    color: var(--c-color-neutral-on-quiet, currentcolor);
  }

  .flyout__label {
    padding-inline: var(--c-spacing-sm);
  }

  /* Smaller than the row's own icons: it marks the item, it isn't one. */
  .subnav-toggle craft-icon {
    font-size: calc(10rem / 16);
  }

  /*
   * Collapsed to a rail
   *
   * The row is the icon and nothing else, so everything that would sit beside
   * a label has to find somewhere else to be: the subnav loses its indent, the
   * disclosure moves on top of the icon, and a heading gives way to a rule.
   */
  .nav-item--icon {
    width: var(--_rail-size);
    display: block;
    text-decoration: none;
    border: var(--_rail-border) solid transparent;
    aspect-ratio: 1;
    padding: 0;

    .nav-item__suffix {
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }

  :host([icon-only]) {
  }

  :host([icon-only]) li {
    position: relative;
  }

  /*
   * A rail shows one row per branch, so no child row is there to carry the
   * current page's fill. The branch carries it instead, whether the page is the
   * branch itself or somewhere inside it.
   */
  :host([icon-only][active]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
    color: var(--c-color-accent-on-quiet);

    &::before {
      content: none;
    }
  }

  /* No room to indent, so the stand-ins sit directly under their parent. */
  :host([icon-only]) .subnav {
    margin: 0;
    border-left: none;
    padding-inline: 0;
  }

  /*
   * Without that indent nothing says the stand-ins belong to the icon above
   * them, so a rule runs down beside them: the width of the active indicator,
   * and pulled clear of the column the same way, so the icons stay centred on
   * the rail and the two line up when a child is the current page.
   *
   * Not on a group — its children are already inside the branch's own subnav,
   * and a second rule would land on top of the first.
   */
  :host([icon-only]:not([group])) .subnav {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;
      width: calc(3rem / 16);
      border-radius: calc(2rem / 16);
      background-color: color-mix(in srgb, currentcolor, transparent 90%);
      transform: translateX(-150%);
    }
  }

  /*
   * A row has space for one thing, so the disclosure sits over the icon rather
   * than beside or below it — invisible and click-through until it's tabbed
   * to, since a pointer has hover for the flyout and the icon itself to click.
   *
   * Opacity rather than visibility or display: those would take it out of the
   * tab order, and then nothing could ever focus it into view.
   *
   * The button stays 24px square for 2.5.8 Target Size even though the chevron
   * in it is much smaller.
   */
  .rail-toggle {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    /* The row's whole box, so the chevron lands dead on the icon it replaces
       — and the button fills it, so the focus ring appears exactly where the
       row's own would. Well past the 24px 2.5.8 floor either way. */
    width: var(--_rail-box);
    height: var(--_rail-box);

    craft-button {
      width: 100%;
      height: 100%;
    }

    &:not(:focus-within) {
      opacity: 0;
      pointer-events: none;
    }

    /*
     * The chevron stands in for the icon in the same square, so it matches its
     * size. craft-button[icon][size=small] shrinks its contents to 0.8em and
     * craft-icon shrinks again by the same, which would leave the chevron a
     * fifth smaller than the icon it replaces — so cancel the button's share
     * and keep the icon's.
     */
    craft-button {
      font-size: 1em;
    }

    craft-icon {
      font-size: 0.8em;
    }
  }

  /* The chevron stands in for the icon while it's up, so there's nothing
     underneath for it to have to read against. */
  :host([icon-only]) li:has(.rail-toggle:focus-within) .nav-item__prefix {
    opacity: 0;
  }

  /* A heading's stand-in: the rule between one run of icons and the next. The
     space above belongs to the rule itself, not a margin carried over from the
     expanded heading. */
  :host([group][icon-only]) {
    margin-block-start: 0;
    padding-block-start: var(--c-spacing-sm);
  }

  .rail-separator {
    position: relative;
    border: 0;
    width: 60%;
    margin: 0 auto;
    inset-block-start: calc(var(--c-spacing-sm) * -1);
    border-block-start: 1px solid
      color-mix(transparent, var(--c-color-neutral-border-quiet));
  }

  /*
   * A letter standing in for an icon: a filled chip, so it reads as a mark
   * rather than as a word cut short, and sits quieter than the real icons it
   * shares a column with.
   *
   * The fill is mixed from currentcolor rather than a surface token — the nav
   * takes its background from whatever it's placed in, so there's nothing
   * fixed to match.
   */
  .nav-item__initial {
    display: grid;
    place-items: center;
    width: calc(14rem / 16);
    aspect-ratio: 1;
    border-radius: var(--c-radius-full);
    background-color: color-mix(in srgb, currentcolor, transparent 88%);
    font-size: var(--c-text-xs);
    font-weight: bold;
    line-height: 1;
  }
`,X=new WeakMap,di=new WeakMap,Z=new WeakMap,fi=new WeakSet,pi=new WeakMap,mi=new WeakMap,hi=new WeakMap,Q=new WeakMap,gi=new WeakMap,$=class t extends i{get labelNodes(){return Array.from(this.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}get labelText(){return this.labelNodes.map(e=>e.textContent??``).join(` `).replace(/\s+/g,` `).trim()}get hasLabel(){return this.labelNodes.some(e=>e.nodeType!==Node.TEXT_NODE||!!e.textContent?.trim())}get itemId(){return`item-${this.id}`}get subnavId(){return`${this.id}-subnav`}get ariaCurrentState(){return this.current?`page`:this.active?`true`:`false`}constructor(){super(),d(this,fi),this.active=!1,this.current=!1,this.button=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,u(this,X,{element:this,setOpen:e=>{this.flyoutOpen=e},overlayRect:()=>this.shadowRoot?.querySelector(`.flyout`)?.getBoundingClientRect()}),u(this,di,void 0),u(this,Z,void 0),this.fitFlyout=()=>{let e=this.shadowRoot?.querySelector(`craft-popover`),n=this.shadowRoot?.querySelector(`.flyout`);if(!e||!n)return;let{top:r}=n.getBoundingClientRect(),i=window.innerHeight-r-t.flyoutViewportMargin;if(!window.innerHeight||i<=0){e.style.removeProperty(`--popover-max-block-size`);return}e.style.setProperty(`--popover-max-block-size`,`${i}px`)},u(this,pi,()=>{Y.requestOpen(l(X,this))}),u(this,mi,e=>{let t=e.relatedTarget;t instanceof Node&&(t===this||this.contains(t))||Y.requestClose(l(X,this))}),u(this,hi,e=>{let t=e.target.opened===!0;this.flyoutOpen=t,t||Y.notifyClosed(l(X,this))}),u(this,Q,e=>{e instanceof KeyboardEvent&&e.key!==`Enter`&&e.key!==` `||e.stopPropagation()}),u(this,gi,e=>{e.preventDefault(),e.stopPropagation(),this.flyoutOpen?(this.flyoutOpen=!1,Y.notifyClosed(l(X,this))):Y.requestOpen(l(X,this),{immediate:!0})}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=f(di,this,new AbortController);this.addEventListener(`mouseenter`,l(pi,this),{signal:e}),this.addEventListener(`mouseleave`,l(mi,this),{signal:e}),this.addEventListener(`focusout`,l(mi,this),{signal:e})}updated(e){e.has(`flyoutOpen`)&&(this.flyoutOpen?p(fi,this,_i).call(this):p(fi,this,vi).call(this))}willUpdate(e){(e.has(`active`)||e.has(`initialState`))&&(this.subnavState=this.active||this.initialState===`open`?`open`:`closed`)}disconnectedCallback(){l(di,this)?.abort(),l(Z,this)?.abort(),Y.remove(l(X,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}actionTag(e){return this.href?si`a`:e||this.button?si`button`:si`span`}focus(e){let t=this.shadowRoot?.querySelector(`.nav-item__action-item:is(a, button), .nav-item:is(a, button)`);t?t.focus(e):super.focus(e)}buttonType(e){return!this.href&&(e||this.button)?`button`:r}isStatic(e){return!this.href&&!e&&!this.button}renderIconItem(t,n){let i=this.actionTag(n);return li`
      <${i}
        class="${C({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":this.isStatic(n)})}"
        id="${this.itemId}"
        type="${this.buttonType(n)}"
        href="${ee(this.href||void 0)}"
        aria-current="${this.href?this.ariaCurrentState:r}"
        aria-expanded="${n?this.flyoutOpen?`true`:`false`:r}"
        aria-controls="${n?this.subnavId:r}"
        aria-label="${(this.href||t||this.button)&&this.labelText?this.labelText:r}"
        @click="${n&&!this.href?l(gi,this):r}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${i}>
      ${n?e`<div class="rail-toggle">${this.renderFlyoutToggle()}</div>`:r}
      ${n?this.renderFlyout(!0):e`<craft-tooltip for="${this.itemId}" placement="right"
              ><slot></slot
            ></craft-tooltip>`}
    `}renderFlyout(t){return e`
      <craft-popover
        for="${this.itemId}"
        placement="right-start"
        without-invoker-aria
        .opened="${this.flyoutOpen}"
        @opened-changed="${l(hi,this)}"
      >
        <div class="flyout" id="${this.subnavId}">
          ${t?e`<div class="flyout__label"><slot></slot></div>`:r}
          <slot name="subnav"></slot>
        </div>
      </craft-popover>
    `}renderSubnavToggle(){return e`
      <craft-button
        @click="${this.toggleSubnav}"
        variant="${Ct.Plain}"
        icon
        size="small"
        aria-controls="${this.subnavId}"
        aria-expanded="${this.subnavState===`open`?`true`:`false`}"
        class="subnav-toggle"
        aria-labelledby="${this.iconOnly?`${this.id}-toggle-icon`:`${this.id}-toggle-icon ${this.id}-label`}"
      >
        <craft-icon
          id="${this.id}-toggle-icon"
          name="${this.subnavState===`closed`?`chevron-down`:`chevron-up`}"
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
                ></craft-icon>`:this.renderInitial()}
          </slot>
          ${this.indicator?e`<craft-badge-indicator
                altText="${w(`Has Notifications`)}"
              />`:r}
        </slot>
      </span>
    `}renderFlyoutToggle(){return e`
      <craft-button
        class="flyout-toggle"
        @click="${l(gi,this)}"
        variant="${Ct.Plain}"
        icon
        size="small"
        aria-controls="${this.subnavId}"
        aria-expanded="${this.flyoutOpen?`true`:`false`}"
        aria-label="${w(`Show submenu for “{item}”`,{item:this.labelText})}"
      >
        <craft-icon
          class="flyout-indicator"
          name="chevron-right"
          aria-hidden="true"
        ></craft-icon>
      </craft-button>
    `}renderInitial(){let t=this.iconOnly?this.labelText.at(0):null;return t?e`<span class="nav-item__initial" aria-hidden="true"
          >${t.toLocaleUpperCase()}</span
        >`:r}renderSuffix(t=!1,n=!1){return e`
      <div class="nav-item__suffix">
        ${this.iconOnly?r:e`<slot
              name="actions"
              @mousedown="${l(Q,this)}"
              @mouseup="${l(Q,this)}"
              @click="${l(Q,this)}"
              @keydown="${l(Q,this)}"
              @keyup="${l(Q,this)}"
            ></slot>`}
        <slot name="suffix">
          ${t&&this.togglePosition===`suffix`?this.renderSubnavToggle():r}
          ${n?this.renderFlyoutToggle():r}
        </slot>
      </div>
    `}renderItem(e,t,n){return li`
      <div
        class="${C({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":this.isStatic(n)})}"
        id="${this.itemId}"
      >
        ${t?this.renderPrefix(e):r}
        ${this.renderInteractiveItem(n)}
        ${this.renderSuffix(e,n)}
      </div>
    `}renderInteractiveItem(e){let t=this.actionTag(e);return li`
      <${t}
        class="nav-item__action-item"
        type="${this.buttonType(e)}"
        href="${ee(this.href||void 0)}"
        aria-current="${this.href?this.ariaCurrentState:r}"
        aria-expanded="${e?this.flyoutOpen?`true`:`false`:r}"
        aria-controls="${e?this.subnavId:r}"
        @click="${e&&!this.href?l(gi,this):r}"
      >
        <slot
          id="${this.id}-label"
          @slotchange="${()=>this.requestUpdate()}"
        ></slot>
      </${t}>
    `}render(){let t=!!this.querySelector(`[slot="subnav"]`),n=this.subnavDisplay??(this.iconOnly?`flyout`:`inline`),i=t&&n===`flyout`,a=t&&!i&&!this.group&&(this.iconOnly||this.hasLabel),o=a&&this.togglePosition===`prefix`||!!this.icon||this.indicator||!!this.querySelector(`[slot="prefix"]`)||!!this.querySelector(`[slot="icon"]`),s=!a||this.subnavState===`open`;return this.group&&this.iconOnly?e`
        <li>
          <hr
            class="rail-separator"
            aria-label="${this.labelText||r}"
          />
          ${t?e`<div class="subnav" id="${this.subnavId}">
                <slot name="subnav"></slot>
              </div>`:r}
        </li>
      `:e`
      <li>
        ${this.iconOnly?this.renderIconItem(t,i):this.renderItem(a,o,i)}
        ${this.iconOnly&&a?e`<div class="rail-toggle">${this.renderSubnavToggle()}</div>`:r}
        ${!this.iconOnly&&i?this.renderFlyout(!1):r}
        ${t&&!i?e`
              <div
                class="subnav"
                id="${this.subnavId}"
                style="${wr({display:s?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:r}
      </li>
    `}};function _i(){p(fi,this,vi).call(this);let{signal:e}=f(Z,this,new AbortController);window.addEventListener(`resize`,this.fitFlyout,{signal:e}),requestAnimationFrame(this.fitFlyout)}function vi(){l(Z,this)?.abort(),f(Z,this,void 0),this.shadowRoot?.querySelector(`craft-popover`)?.style.removeProperty(`--popover-max-block-size`)}$.styles=ui,$.flyoutViewportMargin=16,a([o()],$.prototype,`icon`,void 0),a([o()],$.prototype,`href`,void 0),a([o({type:Boolean,reflect:!0})],$.prototype,`active`,void 0),a([o({type:Boolean,reflect:!0})],$.prototype,`current`,void 0),a([o({type:Boolean,reflect:!0})],$.prototype,`button`,void 0),a([o({type:Boolean})],$.prototype,`external`,void 0),a([o({type:Boolean})],$.prototype,`indicator`,void 0),a([o()],$.prototype,`id`,void 0),a([o({reflect:!0,type:Boolean,attribute:`icon-only`})],$.prototype,`iconOnly`,void 0),a([o()],$.prototype,`flush`,void 0),a([o({reflect:!0,attribute:`initial-state`})],$.prototype,`initialState`,void 0),a([o({type:Boolean,reflect:!0})],$.prototype,`group`,void 0),a([o({attribute:`toggle-position`})],$.prototype,`togglePosition`,void 0),a([o({attribute:`subnav-display`,reflect:!0})],$.prototype,`subnavDisplay`,void 0),a([s()],$.prototype,`subnavState`,void 0),a([s()],$.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,$);export{g as A,ee as C,b as D,S as E,v as O,w as S,x as T,we as _,Wt as a,be as b,Lt as c,O as d,ft as f,Ae as g,T as h,nn as i,h as j,_ as k,Ot as l,rt as m,wr as n,zt as o,lt as p,mr as r,It as s,$ as t,Ct as u,Se as v,C as w,he as x,xe as y};