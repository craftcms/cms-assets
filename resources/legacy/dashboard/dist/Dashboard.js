/*! For license information please see Dashboard.js.LICENSE.txt */
(function(){var __webpack_modules__={2054:function(){},3516:function(e,t,i){"use strict";var s,n,r,o,a=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(s=(r=(e,t)=>{!function(){var e=Object.assign||function(e){for(var t,i=1;i<arguments.length;i++)for(var s in t=arguments[i])_(t,s)&&(e[s]=t[s]);return e},i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=a(["χρόνος","χρόνια"],["μήνας","μήνες"],["εβδομάδα","εβδομάδες"],["μέρα","μέρες"],["ώρα","ώρες"],["λεπτό","λεπτά"],["δευτερόλεπτο","δευτερόλεπτα"],["χιλιοστό του δευτερολέπτου","χιλιοστά του δευτερολέπτου"],","),n={af:a(["jaar","jaar"],["maand","maande"],["week","weke"],["dag","dae"],["uur","ure"],["minuut","minute"],["sekonde","sekondes"],["millisekonde","millisekondes"],","),am:r("ዓመት","ወር","ሳምንት","ቀን","ሰዓት","ደቂቃ","ሰከንድ","ሚሊሰከንድ"),ar:e(r(function(e){return["سنة","سنتان","سنوات"][h(e)]},function(e){return["شهر","شهران","أشهر"][h(e)]},function(e){return["أسبوع","أسبوعين","أسابيع"][h(e)]},function(e){return["يوم","يومين","أيام"][h(e)]},function(e){return["ساعة","ساعتين","ساعات"][h(e)]},function(e){return["دقيقة","دقيقتان","دقائق"][h(e)]},function(e){return["ثانية","ثانيتان","ثواني"][h(e)]},function(e){return["جزء من الثانية","جزآن من الثانية","أجزاء من الثانية"][h(e)]},","),{delimiter:" ﻭ ",_hideCountIf2:!0,_digitReplacements:["۰","١","٢","٣","٤","٥","٦","٧","٨","٩"]}),bg:c(["години","година","години"],["месеца","месец","месеца"],["седмици","седмица","седмици"],["дни","ден","дни"],["часа","час","часа"],["минути","минута","минути"],["секунди","секунда","секунди"],["милисекунди","милисекунда","милисекунди"]),bn:r("বছর","মাস","সপ্তাহ","দিন","ঘন্টা","মিনিট","সেকেন্ড","মিলিসেকেন্ড"),ca:a(["any","anys"],["mes","mesos"],["setmana","setmanes"],["dia","dies"],["hora","hores"],["minut","minuts"],["segon","segons"],["milisegon","milisegons"],","),ckb:r("ساڵ","مانگ","هەفتە","ڕۆژ","کاژێر","خولەک","چرکە","میلی چرکە","."),cs:r(function(e){return["rok","roku","roky","let"][p(e)]},function(e){return["měsíc","měsíce","měsíce","měsíců"][p(e)]},function(e){return["týden","týdne","týdny","týdnů"][p(e)]},function(e){return["den","dne","dny","dní"][p(e)]},function(e){return["hodina","hodiny","hodiny","hodin"][p(e)]},function(e){return["minuta","minuty","minuty","minut"][p(e)]},function(e){return["sekunda","sekundy","sekundy","sekund"][p(e)]},function(e){return["milisekunda","milisekundy","milisekundy","milisekund"][p(e)]},","),cy:r("flwyddyn","mis","wythnos","diwrnod","awr","munud","eiliad","milieiliad"),da:a(["år","år"],["måned","måneder"],["uge","uger"],["dag","dage"],["time","timer"],["minut","minutter"],["sekund","sekunder"],["millisekund","millisekunder"],","),de:a(["Jahr","Jahre"],["Monat","Monate"],["Woche","Wochen"],["Tag","Tage"],["Stunde","Stunden"],["Minute","Minuten"],["Sekunde","Sekunden"],["Millisekunde","Millisekunden"],","),el:s,en:a(["year","years"],["month","months"],["week","weeks"],["day","days"],["hour","hours"],["minute","minutes"],["second","seconds"],["millisecond","milliseconds"]),eo:a(["jaro","jaroj"],["monato","monatoj"],["semajno","semajnoj"],["tago","tagoj"],["horo","horoj"],["minuto","minutoj"],["sekundo","sekundoj"],["milisekundo","milisekundoj"],","),es:a(["año","años"],["mes","meses"],["semana","semanas"],["día","días"],["hora","horas"],["minuto","minutos"],["segundo","segundos"],["milisegundo","milisegundos"],","),et:a(["aasta","aastat"],["kuu","kuud"],["nädal","nädalat"],["päev","päeva"],["tund","tundi"],["minut","minutit"],["sekund","sekundit"],["millisekund","millisekundit"],","),eu:r("urte","hilabete","aste","egun","ordu","minutu","segundo","milisegundo",","),fa:r("سال","ماه","هفته","روز","ساعت","دقیقه","ثانیه","میلی ثانیه"),fi:a(["vuosi","vuotta"],["kuukausi","kuukautta"],["viikko","viikkoa"],["päivä","päivää"],["tunti","tuntia"],["minuutti","minuuttia"],["sekunti","sekuntia"],["millisekunti","millisekuntia"],","),fo:a(["ár","ár"],["mánaður","mánaðir"],["vika","vikur"],["dagur","dagar"],["tími","tímar"],["minuttur","minuttir"],["sekund","sekund"],["millisekund","millisekund"],","),fr:r(function(e){return"an"+(e>=2?"s":"")},"mois",function(e){return"semaine"+(e>=2?"s":"")},function(e){return"jour"+(e>=2?"s":"")},function(e){return"heure"+(e>=2?"s":"")},function(e){return"minute"+(e>=2?"s":"")},function(e){return"seconde"+(e>=2?"s":"")},function(e){return"milliseconde"+(e>=2?"s":"")},","),gr:s,he:a(["שנה","שנים"],["חודש","חודשים"],["שבוע","שבועות"],["יום","ימים"],["שעה","שעות"],["דקה","דקות"],["שניה","שניות"],["מילישנייה","מילישניות"]),hr:r(function(e){return e%10==2||e%10==3||e%10==4?"godine":"godina"},function(e){return 1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci"},function(e){return e%10==1&&11!==e?"tjedan":"tjedna"},o(["dan","dana"]),function(e){return 1===e?"sat":2===e||3===e||4===e?"sata":"sati"},function(e){var t=e%10;return 2!==t&&3!==t&&4!==t||!(e<10||e>14)?"minuta":"minute"},function(e){var t=e%10;return 5===t||Math.floor(e)===e&&e>=10&&e<=19?"sekundi":1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi"},function(e){return 1===e?"milisekunda":e%10==2||e%10==3||e%10==4?"milisekunde":"milisekundi"},","),hi:r("साल",o(["महीना","महीने"]),o(["हफ़्ता","हफ्ते"]),"दिन",o(["घंटा","घंटे"]),"मिनट","सेकंड","मिलीसेकंड"),hu:r("év","hónap","hét","nap","óra","perc","másodperc","ezredmásodperc",","),id:r("tahun","bulan","minggu","hari","jam","menit","detik","milidetik"),is:a(["ár","ár"],["mánuður","mánuðir"],["vika","vikur"],["dagur","dagar"],["klukkutími","klukkutímar"],["mínúta","mínútur"],["sekúnda","sekúndur"],["millisekúnda","millisekúndur"]),it:a(["anno","anni"],["mese","mesi"],["settimana","settimane"],["giorno","giorni"],["ora","ore"],["minuto","minuti"],["secondo","secondi"],["millisecondo","millisecondi"],","),ja:r("年","ヶ月","週間","日","時間","分","秒","ミリ秒"),km:r("ឆ្នាំ","ខែ","សប្តាហ៍","ថ្ងៃ","ម៉ោង","នាទី","វិនាទី","មិល្លីវិនាទី"),kn:a(["ವರ್ಷ","ವರ್ಷಗಳು"],["ತಿಂಗಳು","ತಿಂಗಳುಗಳು"],["ವಾರ","ವಾರಗಳು"],["ದಿನ","ದಿನಗಳು"],["ಗಂಟೆ","ಗಂಟೆಗಳು"],["ನಿಮಿಷ","ನಿಮಿಷಗಳು"],["ಸೆಕೆಂಡ್","ಸೆಕೆಂಡುಗಳು"],["ಮಿಲಿಸೆಕೆಂಡ್","ಮಿಲಿಸೆಕೆಂಡುಗಳು"]),ko:r("년","개월","주일","일","시간","분","초","밀리 초"),ku:r("sal","meh","hefte","roj","seet","deqe","saniye","mîlîçirk",","),lo:r("ປີ","ເດືອນ","ອາທິດ","ມື້","ຊົ່ວໂມງ","ນາທີ","ວິນາທີ","ມິນລິວິນາທີ",","),lt:r(function(e){return e%10==0||e%100>=10&&e%100<=20?"metų":"metai"},function(e){return["mėnuo","mėnesiai","mėnesių"][m(e)]},function(e){return["savaitė","savaitės","savaičių"][m(e)]},function(e){return["diena","dienos","dienų"][m(e)]},function(e){return["valanda","valandos","valandų"][m(e)]},function(e){return["minutė","minutės","minučių"][m(e)]},function(e){return["sekundė","sekundės","sekundžių"][m(e)]},function(e){return["milisekundė","milisekundės","milisekundžių"][m(e)]},","),lv:r(function(e){return f(e)?"gads":"gadi"},function(e){return f(e)?"mēnesis":"mēneši"},function(e){return f(e)?"nedēļa":"nedēļas"},function(e){return f(e)?"diena":"dienas"},function(e){return f(e)?"stunda":"stundas"},function(e){return f(e)?"minūte":"minūtes"},function(e){return f(e)?"sekunde":"sekundes"},function(e){return f(e)?"milisekunde":"milisekundes"},","),mk:a(["година","години"],["месец","месеци"],["недела","недели"],["ден","дена"],["час","часа"],["минута","минути"],["секунда","секунди"],["милисекунда","милисекунди"],","),mn:r("жил","сар","долоо хоног","өдөр","цаг","минут","секунд","миллисекунд"),mr:r(o(["वर्ष","वर्षे"]),o(["महिना","महिने"]),o(["आठवडा","आठवडे"]),"दिवस","तास",o(["मिनिट","मिनिटे"]),"सेकंद","मिलिसेकंद"),ms:r("tahun","bulan","minggu","hari","jam","minit","saat","milisaat"),nl:a(["jaar","jaar"],["maand","maanden"],["week","weken"],["dag","dagen"],["uur","uur"],["minuut","minuten"],["seconde","seconden"],["milliseconde","milliseconden"],","),no:a(["år","år"],["måned","måneder"],["uke","uker"],["dag","dager"],["time","timer"],["minutt","minutter"],["sekund","sekunder"],["millisekund","millisekunder"],","),pl:r(function(e){return["rok","roku","lata","lat"][u(e)]},function(e){return["miesiąc","miesiąca","miesiące","miesięcy"][u(e)]},function(e){return["tydzień","tygodnia","tygodnie","tygodni"][u(e)]},function(e){return["dzień","dnia","dni","dni"][u(e)]},function(e){return["godzina","godziny","godziny","godzin"][u(e)]},function(e){return["minuta","minuty","minuty","minut"][u(e)]},function(e){return["sekunda","sekundy","sekundy","sekund"][u(e)]},function(e){return["milisekunda","milisekundy","milisekundy","milisekund"][u(e)]},","),pt:a(["ano","anos"],["mês","meses"],["semana","semanas"],["dia","dias"],["hora","horas"],["minuto","minutos"],["segundo","segundos"],["milissegundo","milissegundos"],","),ro:r(l("an","ani","de ani"),l("lună","luni","de luni"),l("săptămână","săptămâni","de săptămâni"),l("zi","zile","de zile"),l("oră","ore","de ore"),l("minut","minute","de minute"),l("secundă","secunde","de secunde"),l("milisecundă","milisecunde","de milisecunde"),","),ru:c(["лет","год","года"],["месяцев","месяц","месяца"],["недель","неделя","недели"],["дней","день","дня"],["часов","час","часа"],["минут","минута","минуты"],["секунд","секунда","секунды"],["миллисекунд","миллисекунда","миллисекунды"]),sq:r(o(["vit","vjet"]),"muaj","javë","ditë","orë",function(e){return"minut"+(1===e?"ë":"a")},function(e){return"sekond"+(1===e?"ë":"a")},function(e){return"milisekond"+(1===e?"ë":"a")},","),sr:c(["години","година","године"],["месеци","месец","месеца"],["недељи","недеља","недеље"],["дани","дан","дана"],["сати","сат","сата"],["минута","минут","минута"],["секунди","секунда","секунде"],["милисекунди","милисекунда","милисекунде"]),sr_Latn:c(["godini","godina","godine"],["meseci","mesec","meseca"],["nedelji","nedelja","nedelje"],["dani","dan","dana"],["sati","sat","sata"],["minuta","minut","minuta"],["sekundi","sekunda","sekunde"],["milisekundi","milisekunda","milisekunde"]),ta:a(["வருடம்","ஆண்டுகள்"],["மாதம்","மாதங்கள்"],["வாரம்","வாரங்கள்"],["நாள்","நாட்கள்"],["மணி","மணிநேரம்"],["நிமிடம்","நிமிடங்கள்"],["வினாடி","வினாடிகள்"],["மில்லி விநாடி","மில்லி விநாடிகள்"]),te:a(["సంవత్సరం","సంవత్సరాల"],["నెల","నెలల"],["వారం","వారాలు"],["రోజు","రోజులు"],["గంట","గంటలు"],["నిమిషం","నిమిషాలు"],["సెకను","సెకన్లు"],["మిల్లీసెకన్","మిల్లీసెకన్లు"]),uk:c(["років","рік","роки"],["місяців","місяць","місяці"],["тижнів","тиждень","тижні"],["днів","день","дні"],["годин","година","години"],["хвилин","хвилина","хвилини"],["секунд","секунда","секунди"],["мілісекунд","мілісекунда","мілісекунди"]),ur:r("سال",o(["مہینہ","مہینے"]),o(["ہفتہ","ہفتے"]),"دن",o(["گھنٹہ","گھنٹے"]),"منٹ","سیکنڈ","ملی سیکنڈ"),sk:r(function(e){return["rok","roky","roky","rokov"][p(e)]},function(e){return["mesiac","mesiace","mesiace","mesiacov"][p(e)]},function(e){return["týždeň","týždne","týždne","týždňov"][p(e)]},function(e){return["deň","dni","dni","dní"][p(e)]},function(e){return["hodina","hodiny","hodiny","hodín"][p(e)]},function(e){return["minúta","minúty","minúty","minút"][p(e)]},function(e){return["sekunda","sekundy","sekundy","sekúnd"][p(e)]},function(e){return["milisekunda","milisekundy","milisekundy","milisekúnd"][p(e)]},","),sl:r(function(e){return e%10==1?"leto":e%100==2?"leti":e%100==3||e%100==4||Math.floor(e)!==e&&e%100<=5?"leta":"let"},function(e){return e%10==1?"mesec":e%100==2||Math.floor(e)!==e&&e%100<=5?"meseca":e%10==3||e%10==4?"mesece":"mesecev"},function(e){return e%10==1?"teden":e%10==2||Math.floor(e)!==e&&e%100<=4?"tedna":e%10==3||e%10==4?"tedne":"tednov"},function(e){return e%100==1?"dan":"dni"},function(e){return e%10==1?"ura":e%100==2?"uri":e%10==3||e%10==4||Math.floor(e)!==e?"ure":"ur"},function(e){return e%10==1?"minuta":e%10==2?"minuti":e%10==3||e%10==4||Math.floor(e)!==e&&e%100<=4?"minute":"minut"},function(e){return e%10==1?"sekunda":e%100==2?"sekundi":e%100==3||e%100==4||Math.floor(e)!==e?"sekunde":"sekund"},function(e){return e%10==1?"milisekunda":e%100==2?"milisekundi":e%100==3||e%100==4||Math.floor(e)!==e?"milisekunde":"milisekund"},","),sv:a(["år","år"],["månad","månader"],["vecka","veckor"],["dag","dagar"],["timme","timmar"],["minut","minuter"],["sekund","sekunder"],["millisekund","millisekunder"],","),sw:e(a(["mwaka","miaka"],["mwezi","miezi"],["wiki","wiki"],["siku","masiku"],["saa","masaa"],["dakika","dakika"],["sekunde","sekunde"],["milisekunde","milisekunde"]),{_numberFirst:!0}),tr:r("yıl","ay","hafta","gün","saat","dakika","saniye","milisaniye",","),th:r("ปี","เดือน","สัปดาห์","วัน","ชั่วโมง","นาที","วินาที","มิลลิวินาที"),uz:r("yil","oy","hafta","kun","soat","minut","sekund","millisekund"),uz_CYR:r("йил","ой","ҳафта","кун","соат","минут","секунд","миллисекунд"),vi:r("năm","tháng","tuần","ngày","giờ","phút","giây","mili giây",","),zh_CN:r("年","个月","周","天","小时","分钟","秒","毫秒"),zh_TW:r("年","個月","周","天","小時","分鐘","秒","毫秒")};function r(e,t,i,s,n,r,o,a,l){var d={y:e,mo:t,w:i,d:s,h:n,m:r,s:o,ms:a};return l&&(d.decimal=l),d}function o(e){return function(t){return 1===t?e[0]:e[1]}}function a(e,t,i,s,n,a,l,d,c){return r(o(e),o(t),o(i),o(s),o(n),o(a),o(l),o(d),c)}function l(e,t,i){return function(s){if(1===s)return e;if(Math.floor(s)!==s||0===s)return t;var n=s%100;return n>=1&&n<=19?t:i}}function d(e){return function(t){return Math.floor(t)===t?t%100>=5&&t%100<=20||t%10>=5&&t%10<=9||t%10==0?e[0]:t%10==1?e[1]:t>1?e[2]:e[1]:e[2]}}function c(e,t,i,s,n,o,a,l){return r(d(e),d(t),d(i),d(s),d(n),d(o),d(a),d(l),",")}function h(e){return 2===e?1:e>2&&e<11?2:0}function u(e){return 1===e?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&!(e%100>10&&e%100<20)?2:3:1}function p(e){return 1===e?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&e%100<10?2:3:1}function m(e){return 1===e||e%10==1&&e%100>20?0:Math.floor(e)!==e||e%10>=2&&e%100>20||e%10>=2&&e%100<10?1:2}function f(e){return e%10==1&&e%100!=11}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function b(e){var t=[e.language];if(_(e,"fallbacks")){if(!i(e.fallbacks)||!e.fallbacks.length)throw Error("fallbacks must be an array with at least one element");t=t.concat(e.fallbacks)}for(var s=0;s<t.length;s++){var r=t[s];if(_(e.languages,r))return e.languages[r];if(_(n,r))return n[r]}throw Error("No language found.")}function g(e,t,i){var s,n=e.unitName,r=e.unitCount,o=i.spacer,a=i.maxDecimalPoints,l=_(i,"decimal")?i.decimal:_(t,"decimal")?t.decimal:".";"digitReplacements"in i?s=i.digitReplacements:"_digitReplacements"in t&&(s=t._digitReplacements);var d,c=(void 0===a?r:Math.floor(r*10**a)/10**a).toString();if(t._hideCountIf2&&2===r)d="",o="";else if(s){d="";for(var h=0;h<c.length;h++){var u=c[h];d+="."===u?l:s[u]}}else d=c.replace(".",l);var p=t[n],m="function"==typeof p?p(r):p;return t._numberFirst?m+o+d:d+o+m}function v(t){var i=function(t,s){t=Math.abs(t);var n=e({},i,s||{});return function(e,t){var i=b(t);if(!e.length){var s=t.units;return g({unitName:s[s.length-1],unitCount:0},i,t)}for(var n=t.conjunction,r=t.serialComma,o=_(t,"delimiter")?t.delimiter:_(i,"delimiter")?i.delimiter:", ",a=[],l=0;l<e.length;l++)a.push(g(e[l],i,t));return n&&1!==e.length?2===e.length?a.join(n):a.slice(0,-1).join(o)+(r?",":"")+n+a.slice(-1):a.join(o)}(function(e,t){var i,s,n,r,o=t.units,a=t.unitMeasures,l="largest"in t?t.largest:1/0;if(!o.length)return[];var d={};for(r=e,s=0;s<o.length;s++){var c=a[i=o[s]];n=s===o.length-1?r/c:Math.floor(r/c),d[i]=n,r-=n*c}if(t.round){var h=l;for(s=0;s<o.length;s++)if(0!==(n=d[i=o[s]])&&0===--h){for(var u=s+1;u<o.length;u++){var p=o[u],m=d[p];d[i]+=m*a[p]/a[i],d[p]=0}break}for(s=o.length-1;s>=0;s--)if(0!==(n=d[i=o[s]])){var f=Math.round(n);if(d[i]=f,0===s)break;var _=o[s-1],b=a[_],g=Math.floor(f*a[i]/b);if(!g)break;d[_]+=g,d[i]=0}}var v=[];for(s=0;s<o.length&&v.length<l;s++)(n=d[i=o[s]])&&v.push({unitName:i,unitCount:n});return v}(t,n),n)};return e(i,{language:"en",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},t)}var y=e(v({}),{getSupportedLanguages:function(){var e=[];for(var t in n)_(n,t)&&"gr"!==t&&e.push(t);return e},humanizer:v});"function"==typeof define&&define.amd?define(function(){return y}):void 0!==t&&t.exports?t.exports=y:this.humanizeDuration=y}()},()=>(o||(r((o={exports:{}}).exports,o),r=null),o.exports))(),n=null==s?{}:a(h(s)),((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(var n,r=c(t),o=0,a=r.length;o<a;o++)n=r[o],!u.call(e,n)&&void 0!==n&&l(e,n,{get:(e=>t[e]).bind(null,n),enumerable:!(s=d(t,n))||s.enumerable});return e})(l(n,"default",{value:s,enumerable:!0}),s));p.default.humanizer({language:"en",fallbacks:["en"],largest:2,round:!0});const m=globalThis,f=m.ShadowRoot&&(void 0===m.ShadyCSS||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),b=new WeakMap;class g{constructor(e,t,i){if(this._$cssResult$=!0,i!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(f&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=b.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&b.set(t,e))}return e}toString(){return this.cssText}}const v=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new g(i,e,_)},y=(e,t)=>{if(f)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),s=m.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}},w=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new g("string"==typeof e?e:e+"",void 0,_))(t)})(e):e,{is:k,defineProperty:x,getOwnPropertyDescriptor:C,getOwnPropertyNames:E,getOwnPropertySymbols:N,getPrototypeOf:A}=Object,S=globalThis,$=S.trustedTypes,T=$?$.emptyScript:"",L=S.reactiveElementPolyfillSupport,O=(e,t)=>e,F={toAttribute(e,t){switch(t){case Boolean:e=e?T:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},I=(e,t)=>!k(e,t),M={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:I};Symbol.metadata??=Symbol("metadata"),S.litPropertyMetadata??=new WeakMap;class D extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=M){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&x(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=C(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const r=s?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??M}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=A(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,t=[...E(e),...N(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(w(e))}else void 0!==e&&t.push(w(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:F).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:F;this._$Em=s;const r=n.fromAttribute(t,e.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const s=this.constructor,n=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??I)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[O("elementProperties")]=new Map,D[O("finalized")]=new Map,L?.({ReactiveElement:D}),(S.reactiveElementVersions??=[]).push("2.1.1");const V=globalThis,R=V.trustedTypes,P=R?R.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+B,q=`<${U}>`,H=document,W=()=>H.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,K=Array.isArray,G=e=>K(e)||"function"==typeof e?.[Symbol.iterator],Z="[ \t\n\f\r]",Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,X=/>/g,Q=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,ie=/^(?:script|style|textarea|title)$/i,se=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ne=se(1),re=(se(2),se(3),Symbol.for("lit-noChange")),oe=Symbol.for("lit-nothing"),ae=new WeakMap,le=H.createTreeWalker(H,129);function de(e,t){if(!K(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}const ce=(e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=Y;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===Y?"!--"===l[1]?o=J:void 0!==l[1]?o=X:void 0!==l[2]?(ie.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=Q):void 0!==l[3]&&(o=Q):o===Q?">"===l[0]?(o=n??Y,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?Q:'"'===l[3]?te:ee):o===te||o===ee?o=Q:o===J||o===X?o=Y:(o=Q,n=void 0);const h=o===Q&&e[t+1].startsWith("/>")?" ":"";r+=o===Y?i+q:d>=0?(s.push(a),i.slice(0,d)+z+i.slice(d)+B+h):i+B+(-2===d?t:h)}return[de(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class he{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,d]=ce(e,t);if(this.el=he.createElement(l,i),le.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=le.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(z)){const t=d[r++],i=s.getAttribute(e).split(B),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?_e:"?"===o[1]?be:"@"===o[1]?ge:fe}),s.removeAttribute(e)}else e.startsWith(B)&&(a.push({type:6,index:n}),s.removeAttribute(e));if(ie.test(s.tagName)){const e=s.textContent.split(B),t=e.length-1;if(t>0){s.textContent=R?R.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],W()),le.nextNode(),a.push({type:2,index:++n});s.append(e[t],W())}}}else if(8===s.nodeType)if(s.data===U)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(B,e+1));)a.push({type:7,index:n}),e+=B.length-1}n++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function ue(e,t,i=e,s){if(t===re)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=j(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=ue(e,n._$AS(e,t.values),n,s)),t}class pe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??H).importNode(t,!0);le.currentNode=s;let n=le.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new me(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new ve(n,this,e)),this._$AV.push(t),a=i[++o]}r!==a?.index&&(n=le.nextNode(),r++)}return le.currentNode=H,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class me{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ue(this,e,t),j(e)?e===oe||null==e||""===e?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==re&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):G(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==oe&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=he.createElement(de(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new pe(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ae.get(e.strings);return void 0===t&&ae.set(e.strings,t=new he(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new me(this.O(W()),this.O(W()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=oe}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=ue(this,e,t,0),r=!j(e)||e!==this._$AH&&e!==re,r&&(this._$AH=e);else{const s=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=ue(this,s[i+o],t,o),a===re&&(a=this._$AH[o]),r||=!j(a)||a!==this._$AH[o],a===oe?e=oe:e!==oe&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _e extends fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}}class be extends fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==oe)}}class ge extends fe{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=ue(this,e,t,0)??oe)===re)return;const i=this._$AH,s=e===oe&&i!==oe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==oe&&(i===oe||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ve{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ue(this,e)}}const ye={M:z,P:B,A:U,C:1,L:ce,R:pe,D:G,V:ue,I:me,H:fe,N:be,U:ge,B:_e,F:ve},we=V.litHtmlPolyfillSupport;we?.(he,me),(V.litHtmlVersions??=[]).push("3.3.1");const ke=(e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new me(t.insertBefore(W(),e),e,void 0,i??{})}return n._$AI(e),n},xe=globalThis;class Ce extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return re}}Ce._$litElement$=!0,Ce.finalized=!0,xe.litElementHydrateSupport?.({LitElement:Ce});const Ee=xe.litElementPolyfillSupport;Ee?.({LitElement:Ce}),(xe.litElementVersions??=[]).push("4.2.1");var Ne=v`
  :host([variant~='default']) {
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

  :host([variant~='accent']) {
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

  :host([variant~='info']) {
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-loud: var(--c-color-info-on-loud);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
  }

  :host([variant~='warning']) {
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-loud: var(--c-color-warning-on-loud);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
  }

  :host([variant~='success']) {
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-loud: var(--c-color-success-on-loud);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
  }
`;function Ae(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}const Se={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:I},$e=(e=Se,t,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};function Te(e){return(t,i)=>"object"==typeof i?$e(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function Le(e){return Te({...e,state:!0,attribute:!1})}const Oe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function Fe(e,t){return(i,s,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Oe(i,s,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return Oe(i,s,{get(){return r(this)}})}}function Ie(e){return(t,i)=>{const{slot:s,selector:n}=e??{},r="slot"+(s?`[name=${s}]`:":not([name])");return Oe(t,i,{get(){const t=this.renderRoot?.querySelector(r),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter(e=>e.matches(n))}})}}var Me=class extends Ce{constructor(){super(),this.alt=!1,this.shift=!1,this.os="Unknown",this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),"Unknown"===this.os&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes("mac")||/iphone|ipad|ipod/.test(e)?"Mac":e.includes("win")?"Windows":e.includes("linux")?"Linux":"Unknown"}renderShortcutPrefix(){switch(this.os){case"Mac":return`${this.alt?"⌥":""}${this.shift?"⇧":""}⌘`;case"Linux":return`Super+${this.alt?"Alt+":""}${this.shift?"Shift+":""}`;default:return`Ctrl+${this.alt?"Alt+":""}${this.shift?"Shift+":""}`}}render(){return ne`<span class="shortcut"
      >${this.renderShortcutPrefix()}<slot></slot
    ></span>`}};function De(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch{return null}}async function Ve(e,t={}){switch(e.type){case"clipboard":await navigator.clipboard.writeText(e.value);break;case"http":{if(e.confirm&&!confirm(e.confirm))return;let t=await fetch(e.url,{method:e.method||"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:e.body?JSON.stringify(e.body):void 0}),i=await t.json().catch(()=>({}));if(!t.ok)throw Error(i.message??"Request failed");"string"==typeof i.redirect&&i.redirect&&function(e){window.dispatchEvent(new CustomEvent("action:redirect",{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}(i.redirect);break}case"event":if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:{...e.detail??{},...t.trigger?{trigger:t.trigger}:{},...t.sourceEvent?{sourceEvent:t.sourceEvent}:{}}}));break;case"download":{let t=document.createElement("a");t.href=e.url,t.download=e.filename??"",t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}Me.styles=v`
    :host {
      display: inline-flex;
    }

    .shortcut {
      font-size: 0.9em;
      padding: 0 var(--c-spacing-sm);
      background-color: var(--c-color-neutral-fill-quiet);
      border: 1px solid var(--c-color-neutral-border-quiet);
      border-radius: var(--c-radius-sm);
      box-shadow: var(--c-shadow-sm);
    }
  `,Ae([Te({type:Boolean})],Me.prototype,"alt",void 0),Ae([Te({type:Boolean})],Me.prototype,"shift",void 0),Ae([Te()],Me.prototype,"os",void 0),customElements.get("craft-shortcut")||customElements.define("craft-shortcut",Me);const Re={Neutral:"neutral",Success:"success",Warning:"warning",Danger:"danger",Info:"info"},Pe=Object.values(Re),ze=e=>(...t)=>({_$litDirective$:e,values:t});class Be{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ue=ze(class extends Be{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const s=!!t[e];s===this.st.has(e)||this.nt?.has(e)||(s?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return re}}),qe="idle",He="loading",We="success",je="error";var Ke=v`
  :host {
    display: contents;
  }

  :host([hidden]) {
    display: none;
  }

  .action-item {
    border-color: var(--c-color-border-quiet, transparent);
    color: var(--c-color-on-quiet, inherit);
    background-color: transparent;

    font: inherit;
    text-align: left;
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    padding-inline: var(--c-spacing-sm);
    padding-block: var(--c-spacing-sm);
    border-radius: var(--c-radius-md);
    position: relative;
    border-width: 0;
    border-style: solid;
  }

  @media (hover: hover) {
    :host(:hover) .action-item:not(:disabled) {
      background-color: var(
        --c-color-fill-quiet,
        var(--c-color-neutral-fill-quiet)
      );
      color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    }
  }

  :host([active]) .action-item {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
  }

  .action-item:disabled {
    opacity: 0.5;
  }

  .action-item:not(:disabled) {
    cursor: pointer;
  }

  .action-item__check,
  .action-item__icon,
  .action-item__suffix {
    min-height: 1lh;
  }

  .action-item__check,
  .action-item__icon {
    min-width: 1lh;
    display: inline-grid;
    place-items: center;
    align-self: start;
  }

  .action-item__check {
    aspect-ratio: 1;
  }

  .action-item__suffix {
    align-self: center;
  }

  craft-shortcut {
    margin-inline-start: var(--c-spacing-sm);
  }

  .action-item__label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-inline: var(--c-spacing-sm);
  }

  :host([variant='danger']) .action-item {
    color: var(--c-color-on-quiet);
  }

  @media (hover: hover) {
    :host(:hover[variant='danger']) .action-item:not(:disabled) {
      background-color: var(--c-color-fill-quiet);
      color: var(--c-color-on-quiet);
    }
  }
`,Ge=class extends Ce{constructor(...e){super(...e),this.icon=null,this.iconColor=null,this.href=null,this.disabled=!1,this.variant=Re.Neutral,this.checked=!1,this.active=!1,this.type="button",this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.confirm=null,this.state=qe,this.feedbackMessage=null,this.shortcut=null}renderShortcut(){return"string"==typeof this.shortcut?ne`<craft-shortcut>${this.shortcut}</craft-shortcut>`:null===this.shortcut?oe:ne`<craft-shortcut
        ?alt="${this.shortcut.alt??!1}"
        ?shift="${this.shortcut.shift??!1}"
        >${this.shortcut.key}</craft-shortcut
      >`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent("action:change-state",{bubbles:!0,composed:!0,detail:{state:e,actionType:De(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled)return void e.preventDefault();let t=De(this.action);if("click"===e.type&&t){"http"===t.type&&this.setState(He);try{await Ve(t,{trigger:this,sourceEvent:e}),this.setState(We,this.feedback?.success)}catch(e){this.setState(je,{message:e.message,...this.feedback?.error||{}})}finally{setTimeout(()=>{this.setState(qe)},this.feedbackDuration)}}}renderCheckbox(){return ne`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?ne`<craft-icon name="check"></craft-icon>`:oe}
      </slot>
    </span>`}renderIcon(){switch(this.state){case He:return ne`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case We:return ne`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case je:return ne`<craft-icon
          name="xmark"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return ne`
          <slot name="icon">
            ${this.icon?ne`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: var(--c-color-${this.iconColor}-on-normal, currentColor)`:oe}"
                ></craft-icon>`:oe}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector('[slot="icon"]')||!!this.icon;return ne`
      ${"checkbox"===this.type?this.renderCheckbox():oe}
      ${e?ne`<div class="action-item__icon">${this.renderIcon()}</div>`:oe}
    `}renderBody(){return ne`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:ne`<slot></slot>`}
      </span>

      <span class="action-item__suffix">
        <slot name="suffix"></slot>
        ${this.shortcut?this.renderShortcut():oe}
      </span>
    `}render(){return this.href?ne`
          <a
            class="${Ue({"action-item":!0,"action-item--checkbox":"checkbox"===this.type})}"
            href="${this.href}"
          >
            ${this.renderBody()}
          </a>
        `:ne`
          <button
            type="button"
            class="${Ue({"action-item":!0,"action-item--checkbox":"checkbox"===this.type})}"
            ?disabled="${this.disabled}"
          >
            ${this.renderBody()}
          </button>
        `}};Ge.styles=[Ne,Ke],Ge.shadowRootOptions={...Ce.shadowRootOptions,delegatesFocus:!0},Ae([Te()],Ge.prototype,"icon",void 0),Ae([Te({attribute:"icon-color"})],Ge.prototype,"iconColor",void 0),Ae([Te()],Ge.prototype,"href",void 0),Ae([Te({type:Boolean})],Ge.prototype,"disabled",void 0),Ae([Te({reflect:!0})],Ge.prototype,"variant",void 0),Ae([Te({type:Boolean})],Ge.prototype,"checked",void 0),Ae([Te({type:Boolean})],Ge.prototype,"active",void 0),Ae([Te()],Ge.prototype,"type",void 0),Ae([Te({type:Object})],Ge.prototype,"action",void 0),Ae([Te({type:Object})],Ge.prototype,"feedback",void 0),Ae([Te({type:Number,attribute:"feedback-duration"})],Ge.prototype,"feedbackDuration",void 0),Ae([Te()],Ge.prototype,"confirm",void 0),Ae([Le()],Ge.prototype,"state",void 0),Ae([Le()],Ge.prototype,"feedbackMessage",void 0),Ae([Te({converter:{fromAttribute(e){if(null===e)return null;try{let t=JSON.parse(e);if("object"==typeof t&&t)return t}catch{}return e},toAttribute(e){return null===e?null:"string"==typeof e?e:JSON.stringify(e)}}})],Ge.prototype,"shortcut",void 0),customElements.get("craft-action-item")||customElements.define("craft-action-item",Ge);let Ze={};function Ye(e){let t,i,s=1,n=[...e];if(-1===(t=i=n.indexOf("{")))return[e];let r=[n.slice(0,i).join("")];for(;;){let e=n.indexOf("{",i+1),o=n.indexOf("}",i+1);if(-1===e&&-1===o||(-1===e&&(e=n.length),-1!==o&&o>e?(s++,i=e):-1!==o&&(s--,i=o),0===s&&(r.push(n.slice(t+1,i).join("").split(",",3)),t=i+1,r.push(n.slice(t,-1===e?n.length:e).join("")),t=-1===e?n.length:e),0!==s&&(-1===e||-1===o)))break}return 0===s&&r}function Je(e,t={}){let i=e[0]?.trim();if(!i||void 0===t[i])return`{${e.join(",")}}`;let s=t[i],n=void 0===e[1]?"none":e[1].trim();switch(n){case"number":return(()=>{let t=void 0===e[2]?null:e[2].trim();if(null!==t&&"integer"!==t)throw"Message format 'number' is only supported for integer values.";let i,n=function(e,t){if(typeof d3<"u"&&typeof d3FormatLocaleDefinition<"u")return void 0===t&&(t=",.0f"),d3.formatLocale(d3FormatLocaleDefinition).format(t)(e);let i="string"==typeof e?parseFloat(e):e;if(isNaN(i))return String(e);if(t){let e=t.includes(","),s=t.match(/\.(\d+)/),n=s?parseInt(s[1],10):0;return new Intl.NumberFormat("en",{useGrouping:e,minimumFractionDigits:n,maximumFractionDigits:n}).format(i)}return new Intl.NumberFormat("en",{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).format(i)}(s);return null===t&&-1!==(i=`${s}`.indexOf("."))&&(n+=`.${s.substring(i+1)}`),n})();case"none":return s;case"select":return(()=>{if(void 0===e[2])return!1;let i=Ye(e[2]);if(!1===i)return!1;let n=i.length,r=!1;for(let e=0;e+1<n;e++){if(Array.isArray(i[e])||!Array.isArray(i[e+1]))return!1;let t=i[e++].trim();(!1===r&&"other"===t||t==s)&&(r=i[e].join(","))}return!1!==r&&Xe(r,t)})();case"plural":return(()=>{if(void 0===e[2])return!1;let i=Ye(e[2]);if(!1===i)return!1;let n=i.length,r=!1,o=0;for(let e=0;e+1<n;e++){if("object"==typeof i[e]||"object"!=typeof i[e+1])return!1;let t=i[e++].trim(),n=[...t];if(1===e&&"offset:"===t.substring(0,7)){let e=[...t.replace(/[\n\r\t]/g," ")].indexOf(" ",7);if(-1===e)throw Error("Message pattern is invalid.");o=parseInt(n.slice(7,e).join("").trim()),t=n.slice(e+1,e+1+n.length).join("").trim()}if(!1===r&&"other"===t||"="===t[0]&&parseInt(n.slice(1,1+n.length).join(""))===s||"one"===t&&s-o===1){let t=i[e];r=("string"==typeof t?[t]:t).map(e=>e.replace("#",String(s-o))).join(",")}}return!1!==r&&Xe(r,t)})();default:throw Error(`Message format '${n}' is not supported.`)}}function Xe(e,t){let i;if(!1===(i=Ye(e)))throw Error("Message pattern is invalid.");for(let e=0;e<i.length;e++){let s=i[e];if("object"==typeof s){let n=Je(s,t);if(!1===n)throw Error("Message pattern is invalid.");i[e]=String(n)}}return i.join("")}function Qe(e,t,i="app",s=Ze){if(s&&void 0!==s[i]&&void 0!==s[i][e]){let t=s?.[i]?.[e];void 0!==t&&(e=t)}return t?Xe(e,t):e}function et(e){let t=!!e.opened;e.addEventListener("opened-changed",()=>{let i=!!e.opened;if(i===t)return;t=i,e.dispatchEvent(new CustomEvent(i?"craft-show":"craft-hide",{bubbles:!0,composed:!0}));let s=i;e.updateComplete.then(()=>{!!e.opened===s&&e.dispatchEvent(new CustomEvent(s?"craft-after-show":"craft-after-hide",{bubbles:!0,composed:!0}))})})}function tt(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function it(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i;throw TypeError("Private element is not present on this object")}function st(e,t){tt(e,t),t.add(e)}function nt(e,t,i){tt(e,t),t.set(e,i)}function rt(e,t){return e.get(it(e,t))}function ot(e,t,i){return e.set(it(e,t),i),i}const at=new WeakMap;function lt(e){return t=>{if(function(e,t){let i=t;for(;i;){if(at.get(i)===e)return!0;i=Object.getPrototypeOf(i)}return!1}(e,t))return t;const i=e(t);return at.set(i,e),i}}const dt=Symbol.for("lion::SingletonManagerClassStorage"),ct=globalThis||window,ht=e=>{let t=null;const i=()=>(null===t&&(t=e()),t);return new Proxy({},{get(e,t){const s=i();return"addEventListener"===t||"removeEventListener"===t?Reflect.get(s,t).bind(s):"__instance_for_testing"===t?s:Reflect.get(s,t,s)},set(e,t,s){return Reflect.set(i(),t,s)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(i(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(i())}})},ut=new class{constructor(){this._map=ct[dt]?ct[dt]:ct[dt]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}};function pt(e="google-chrome"){const t=globalThis.navigator,i=!!t.userAgentData&&t.userAgentData.brands.some(e=>"Chromium"===e.brand);if("chromium"===e)return i;const s=globalThis.navigator,n=s?.vendor,r=void 0!==globalThis.opr,o=globalThis.userAgent?.indexOf("Edge")>-1,a=globalThis.userAgent?.match("CriOS");return"ios"===e?a:"google-chrome"===e?null!=i&&"Google Inc."===n&&!1===r&&!1===o:void 0}const mt={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:pt(),isIOSChrome:pt("ios"),isChromium:pt("chromium"),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf("firefox")>-1,isMac:-1!==globalThis.navigator?.appVersion?.indexOf("Mac"),isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf("Apple")>-1&&globalThis.navigator?.userAgent&&-1===globalThis.navigator?.userAgent.indexOf("CriOS")&&-1===globalThis.navigator?.userAgent.indexOf("FxiOS")&&-1!==globalThis.navigator?.appVersion.indexOf("Mac")},ft=v`
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
`;class _t{static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-overlays",""),e.textContent=ft.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,_t.__globalStyleNode||(_t.__globalStyleNode=_t.__createGlobalStyleNode())}add(e){if(this.list.find(t=>e===t))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to remove");this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,_t.__globalStyleNode&&(document.head.removeChild(_t.__globalStyleNode),_t.__globalStyleNode=void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){const{isIOS:e,isMacSafari:t}=mt;document.body.classList.add("overlays-scroll-lock"),(e||t)&&document.body.classList.add("overlays-scroll-lock-ios-fix"),e&&document.documentElement.classList.add("overlays-scroll-lock-ios-fix")}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>!0===e.preventsScroll))return;const{isIOS:t,isMacSafari:i}=mt;document.body.classList.remove("overlays-scroll-lock"),(t||i)&&document.body.classList.remove("overlays-scroll-lock-ios-fix"),t&&document.documentElement.classList.remove("overlays-scroll-lock-ios-fix")}requestToShowOnly(e){const t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}}_t.__globalStyleNode=void 0;const bt=ht(function(){if(!ut.has("@lion/ui::overlays::0.x")){const e=new _t;ut.set("@lion/ui::overlays::0.x",e)}return ut.get("@lion/ui::overlays::0.x")});function gt(e,t,i={}){function s(e){return"getAttribute"in e}function n(e){if(!s(e))return null;const t=e.getAttribute("slot");let n=null;if(t){const s=i[t];s&&(n=s.filter(t=>t?.element===e)[0]||null)}return n}const r=n(e);if(r)return r.deepContains;function o(t){if(!s(e))return;const n=e.getAttribute("slot");n&&(i[n]=i[n]||[],i[n].push({element:e,deepContains:t}))}let a=e.contains(t);if(a)return o(!0),!0;function l(e){return function(e){return"SLOT"===e.tagName}(e)?e.assignedElements():[]}function d(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function c(e){let n=!1;for(let r=0;r<e.length;r+=1){const o=e[r];if(o&&(s(o)||d(o))&&gt(o,t,i)){n=!0;break}}return n}return e instanceof HTMLElement&&e.shadowRoot&&(a=gt(e.shadowRoot,t,i),a)?(o(!0),!0):(function e(t){for(let i=0;i<t.children.length;i+=1){const s=t.children[i],r=n(s);if(r){a=r.deepContains||a;break}const o=l(s);if(c([s.shadowRoot,...o])){a=!0;break}s.children.length>0&&e(s)}}(e),o(a),a)}const vt=v`
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
`,yt={supportsAdoptingStyleSheets:window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},wt=new WeakMap;yt.adoptStyle=function(e,t,{teardown:i=!1}={}){const{haltFurtherExecution:s}=function(e,t,{teardown:i=!1}={}){let s=!1;e&&!wt.has(e)&&wt.set(e,[]);const n=wt.get(e)??[],r=n.find(e=>t===e);return r&&i?n.splice(n.indexOf(t),1):r||i?(r&&!i||!r&&i)&&(s=!0):n.push(t),{haltFurtherExecution:s}}(e,t,{teardown:i});if(s)return;if(!yt.supportsAdoptingStyleSheets||mt.isIOS)return void function(e,t,{teardown:i=!1}={}){const s=e===document?document.body:e,n=t.cssText||(r=t,Array.from(r.cssRules).map(e=>e.cssText).join(""));var r;if(i){const e=Array.from(s.querySelectorAll("style"));for(const t of e)if(t.textContent===n){t.remove();break}}else{const e=document.createElement("style"),t=window.litNonce;void 0!==t&&e.setAttribute("nonce",t),e.textContent=n,s.appendChild(e)}}(e,t,{teardown:i});const n=t instanceof CSSStyleSheet?t:t.styleSheet;if(!n)throw new Error("Please provide a CSSResultOrNative style");i?e.adoptedStyleSheets.includes(n)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(n),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]},yt.adoptStyles=function(e,t,{teardown:i=!1}={}){for(const s of t)yt.adoptStyle(e,s,{teardown:i})};const kt=({visibility:e,display:t})=>"hidden"!==e&&"none"!==t;function xt(e,t){const i=Math.max(e.tabIndex,0),s=Math.max(t.tabIndex,0);return 0===i||0===s?s>i:i>s}function Ct(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2);return function(e,t){const i=[];for(;e.length>0&&t.length>0;)xt(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return[...i,...e,...t]}(Ct(e.slice(0,i)),Ct(e.slice(i)))}const Et="matches"in Element.prototype?"matches":"msMatchesSelector";function Nt(e,t){if(!function(e){return e.nodeType===Node.ELEMENT_NODE&&("slot"===e.localName||function(e){if(!e)return!1;if(!e.isConnected)return!1;if(!kt(e.style))return!1;const t=window.getComputedStyle(e);return!(!kt(t)||!(({display:e})=>"contents"===e)(t)&&!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))}(e))}(e))return!1;const i=e,s=function(e){return function(e){return e[Et]("input, select, textarea, button, object")?e[Et](":not([disabled])"):e[Et]("a[href], area[href], iframe, [tabindex], [contentEditable]")}(e)?Number(e.getAttribute("tabindex")||0):-1}(i);let n=s>0;s>=0&&t.push(i);const r=function(e){if("slot"===e.localName)return e.assignedNodes({flatten:!0});const{children:t}=e.shadowRoot||e;return t||[]}(i);for(let e=0;e<r.length;e+=1)n=Nt(r[e],t)||n;return n}function At(e){const t=[];return Nt(e,t)?Ct(t):t}const St=new WeakMap;class $t extends EventTarget{#e=!1;constructor(e={},t=bt){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return Boolean(this.manager.list.find(e=>this===e))}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),"local"===this.placementMode&&($t.popperModule||($t.popperModule=async function(){return i.e(2277).then(i.bind(i,2277))}())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:e}){const t=this.contentWrapperNode?.getRootNode();"init"===e?yt.adoptStyle(t,vt):"teardown"===e&&yt.adoptStyle(t,vt,{teardown:!0})}__initContentDomStructure(){const e=document.createElement("dialog");e.setAttribute("role","none"),e.setAttribute("data-overlay-outer-wrapper",""),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),function({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:i}){if(!t.isConnected&&!i.isConnected)throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let s;const n=document.createComment("tempMarker");t.isConnected?(s=t.parentElement||t.getRootNode(),s.insertBefore(n,t),e.appendChild(t)):i.assignedSlot?(s=i.assignedSlot.parentElement||i.assignedSlot.getRootNode(),s.insertBefore(n,i.assignedSlot),e.appendChild(t),t.appendChild(i.assignedSlot)):(s=i.parentElement||i.getRootNode(),s.insertBefore(n,i),e.appendChild(t),t.appendChild(i)),s.insertBefore(e,n),s?.removeChild(n)}({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1","absolute"===getComputedStyle(this.contentNode).position&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?e.closedBy="none":(e.addEventListener("keydown",e=>{"Escape"===e.key&&e.preventDefault()}),e.addEventListener("keyup",e=>{"Escape"===e.key&&e.preventDefault()}),e.addEventListener("cancel",e=>{e.stopPropagation()}),e.addEventListener("close",e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if("local"===this.placementMode&&"setup"===e){const e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){if("init"===e){this.__storeOriginalAttrs(this.contentNode,["role","id"]);const e=this.trapsKeyboardFocus;if(this.invokerNode){const t=["aria-labelledby","aria-describedby"];e||t.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute("label"===this.invokerRelation?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!e&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else"teardown"===e&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){const i={};t.forEach(t=>{i[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,i)}__restoreOriginalAttrs(){for(const[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,i])=>{null!==i?e.setAttribute(t,i):e.removeAttribute(t)});this.__originalAttrs.clear()}get isShown(){return Boolean("none"!==this.__wrappingDialogNode?.style.display)}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown)return void this._showResolve();const t=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if("global"===this.placementMode){const t=`overlays__overlay-container--${this.viewportConfig.placement}`;"show"===e?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add("overlays__overlay")):"hide"===e&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove("overlays__overlay"))}else"local"===this.placementMode&&"show"===e&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case"show":{if(window.getComputedStyle){const e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue("margin-bottom"),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;const e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,i=this.__bodyMarginRight+e,s=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set("margin-right",CSS.px(i)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(s))):(document.body.style.marginRight=`${i}px`,document.body.style.marginBottom=`${s}px`);break}case"hide":document.body.style.marginRight=this.__bodyMarginRightInline||"",document.body.style.marginBottom=this.__bodyMarginBottomInline||""}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown)return void this._hideResolve();const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:"hide"}),e&&e.classList.remove("overlays__backdrop--animation-in")}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){"function"==typeof this.visibilityTriggerFunction&&("init"===e&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this)}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this)}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case"init":this.__backdropInitialized||(this.config?.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break;case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1}}#i=e=>{"Shift"===e.key&&(this.#e=!0)};#s=e=>{"Shift"===e.key&&(this.#e=!1)};#n=()=>{window.addEventListener("keydown",this.#i),window.addEventListener("keyup",this.#s)};#r=()=>{window.removeEventListener("keydown",this.#i),window.removeEventListener("keyup",this.#s)};#o=()=>At(this.contentNode).find(e=>e.hasAttribute("autofocus"))||this.contentNode;#a=()=>{this.__wrappingDialogNode?.addEventListener("focus",()=>{this.#e||this.#o().focus()})};_handleTrapsKeyboardFocus({phase:e}){"init"===e&&(this.contentNode.style.outline="none",this.contentNode.tabIndex=-1,Boolean(this.contentNode.shadowRoot)&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root")),"show"===e&&(this.#n(),this.#a(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#o().focus()),"hide"===e&&this.#r()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){"Escape"!==e.key||St.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#l(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),St.set(e,this))}#l=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||gt(this.contentNode,e.target);#d=e=>{"Escape"===e.key&&(this.#l(e)||this.hide())};_handleHidesOnEsc({phase:e}){"init"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),"show"===e&&(this.__escKeyHandlerCalled=!1),"teardown"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){"init"===e?(document.removeEventListener("keyup",this.#d),document.addEventListener("keyup",this.#d)):"teardown"===e&&document.removeEventListener("keyup",this.#d)}_handleInheritsReferenceWidth(){if(!this._referenceNode||"global"===this.placementMode)return;const e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto"}}_handleHidesOnOutsideClick({phase:e}){const t="show"===e?"addEventListener":"removeEventListener";if("show"===e){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{e||t||this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[t]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[t]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[t]("mouseup",this.__onDocumentMouseUp,!0),window[t]("blur",this.__onWindowBlur)}_handleAccessibility({phase:e}){"init"!==e&&"teardown"!==e||this.__setupTeardownAccessibility({phase:e});const t=this.trapsKeyboardFocus;!this.invokerNode||this.isTooltip||t||this.invokerNode.setAttribute("aria-expanded",`${"show"===e}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&(this._popper.destroy(),this._popper=void 0),void 0!==$t.popperModule){const{createPopper:e}=await $t.popperModule;this._popper=e(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return!!this.invokerNode&&(this.invokerNode.disabled||"true"===this.invokerNode.getAttribute("aria-disabled"))}}function Tt(e,t){if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return e===t;const i=Object.keys(e),s=Object.keys(t);return i.length===s.length&&i.every(i=>Tt(e[i],t[i]))}$t.popperModule=void 0;const Lt=lt(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#c=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){const t=!Tt(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"opened"===e&&this.opened!==t&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:i,backdropNode:s,contentWrapperNode:n}){const r=this._defineOverlayConfig()||{};return new $t({contentNode:e,invokerNode:t,referenceNode:i,backdropNode:s,contentWrapperNode:n,...r,...this.config,popperConfig:{...r.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...r.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(e){super.updated(e),e.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#c||(this._setupOverlayCtrl(),this.#c=!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#c=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(e=>"backdrop"===e.slot)),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(e=>"content"===e.slot)||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(this.#c)return;const e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{const t=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{const t=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){const e=this._overlayCtrl;"local"===e.placementMode&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}),Ot=lt(e=>class extends(Lt(e)){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:"has-arrow"}}}static get styles(){return[...super.styles||[],v`
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
        `]}constructor(){super(),this.hasArrow=!0,this.__setupRepositionCompletePromise()}render(){return ne`
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
          ${this._arrowNodeTemplate()}
        </div>
      `}_arrowNodeTemplate(){return ne`
        <div class="arrow" aria-hidden="true" data-popper-arrow>${this._arrowTemplate()}</div>
      `}_arrowTemplate(){return ne`
        <svg viewBox="0 0 12 8" class="arrow__graphic">
          <path d="M 0,0 h 12 L 6,8 z"></path>
        </svg>
      `}_defineOverlayConfig(){const e=super._defineOverlayConfig()||{};return this.hasArrow?{...e,popperConfig:{...this._getPopperArrowConfig(e.popperConfig)}}:e}_getPopperArrowConfig(e){return{...e||{},placement:"top",modifiers:[{name:"arrow",enabled:!0,options:{padding:8}},{name:"offset",enabled:!0,options:{offset:[0,8]}},...e&&e.modifiers||[]],onFirstUpdate:e=>{this.__syncFromPopperState(e)},afterWrite:e=>{this.__syncFromPopperState(e)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(e=>{this.__repositionCompleteResolver=e})}get _arrowNode(){return this.shadowRoot.querySelector("[data-popper-arrow]")}__syncFromPopperState(e){e&&this._arrowNode&&e.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(e.placement),this.__setupRepositionCompletePromise())}});function Ft({delayIn:e=0,delayOut:t=300}){return{visibilityTriggerFunction:({controller:i})=>{let s,n=!1,r=!1;function o(){n=!1,r=!1}function a(o){const{type:a}=o;clearTimeout(s),n="focusout"!==a&&(n||"focusin"===a),r="mouseleave"!==a&&(r||"mouseenter"===a),s=!n&&!r||i._hasDisabledInvoker()?setTimeout(()=>{i.hide()},t):setTimeout(()=>{i.show()},e)}return{init:()=>{i.addEventListener("hide",o),i.contentNode?.addEventListener("mouseenter",a),i.contentNode?.addEventListener("mouseleave",a),i.invokerNode?.addEventListener("mouseenter",a),i.invokerNode?.addEventListener("mouseleave",a),i.invokerNode?.addEventListener("focusin",a),i.invokerNode?.addEventListener("focusout",a)},teardown:()=>{i.removeEventListener("hide",o),i.contentNode?.removeEventListener("mouseenter",a),i.contentNode?.removeEventListener("mouseleave",a),i.invokerNode?.removeEventListener("mouseenter",a),i.invokerNode?.removeEventListener("mouseleave",a),i.invokerNode?.removeEventListener("focusin",a),i.invokerNode?.removeEventListener("focusout",a)}}}}}var It=v`
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
`,Mt=new WeakMap,Dt=new WeakSet,Vt=class extends(Lt(Ce)){constructor(){super(),st(this,Dt),this.placement="bottom-start",this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,nt(this,Mt,null),et(this)}_defineOverlayConfig(){return{placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},inheritsReferenceWidth:this.matchInvokerWidth?"min":"none",popperConfig:{strategy:"fixed",placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,this.distance]}},{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"containingBlockCorrection",enabled:!0,phase:"afterWrite",fn:({state:e})=>{let t=e.elements.popper,i=parseFloat(t.style.left),s=parseFloat(t.style.top);if(Number.isNaN(i)||Number.isNaN(s))return;let n=t.getBoundingClientRect(),r=n.x-i,o=n.y-s;(0!==r||0!==o)&&(t.style.left=i-r+"px",t.style.top=s-o+"px")}}]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(".popover-pane")}get _overlayInvokerNode(){if(this.anchor)return this.anchor;if(this.for){let e=this.getRootNode();return"function"==typeof e.getElementById?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}render(){return ne`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div class="popover-pane">
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){it(Dt,this,Rt).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has("for")||e.has("anchor"))&&(void 0!==e.get("for")||void 0!==e.get("anchor"))&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode})}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function Rt(){if(rt(Mt,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?""===e.slot:""!==(e.textContent??"").trim());if(!e.length)return;let t=document.createElement("div");t.slot="content",t.append(...e),this.append(t),ot(Mt,this,t)}function Pt(e=""){return`${e.length>0?`${e}-`:""}${Math.random().toString(36).substr(2,10)}`}Vt.styles=[It],Ae([Te({reflect:!0})],Vt.prototype,"for",void 0),Ae([Te({attribute:!1})],Vt.prototype,"anchor",void 0),Ae([Te({reflect:!0})],Vt.prototype,"placement",void 0),Ae([Te({type:Number})],Vt.prototype,"distance",void 0),Ae([Te({attribute:"match-invoker-width",type:Boolean})],Vt.prototype,"matchInvokerWidth",void 0),Ae([Te({type:Boolean,attribute:"without-arrow"})],Vt.prototype,"withoutArrow",void 0),customElements.get("craft-popover")||customElements.define("craft-popover",Vt);var zt=class e extends Vt{constructor(...e){super(...e),this.label=Qe("Actions"),this.icon="ellipsis",this.disabled=!1,this.searchable=!1,this.uid=Pt(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._swallowNextEscUp=!1,this._onSearchKeydown=e=>{if("ArrowDown"===e.key||"ArrowUp"===e.key){let t=this._getNavigableItems();return void(t.length&&(e.preventDefault(),("ArrowDown"===e.key?t[0]:t[t.length-1])?.focus()))}"Escape"===e.key&&this._searchInput?.value?(e.stopPropagation(),this._swallowNextEscUp=!0,this._searchInput.value="",this._applySearchFilter("")):"Enter"===e.key&&e.preventDefault()},this._onSearchKeyup=e=>{"Escape"===e.key&&this._swallowNextEscUp&&(e.stopPropagation(),this._swallowNextEscUp=!1)},this._onOverlayShow=()=>{this.opened&&(this.searchable?this._searchInput?.focus():this._getNavigableItems()[0]?.focus())},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),i=e.target?.closest?.("craft-action-item")??null,s=i?t.indexOf(i):-1;if("ArrowDown"===e.key||"ArrowUp"===e.key){if(!t.length)return;let i;return e.preventDefault(),i="ArrowDown"===e.key?-1===s?0:(s+1)%t.length:-1===s?t.length-1:(s-1+t.length)%t.length,void t[i]?.focus()}if("Home"===e.key||"End"===e.key){if(!t.length)return;return e.preventDefault(),void("Home"===e.key?t[0]:t[t.length-1])?.focus()}if(" "===e.key&&!this.searchable&&i?.href)return e.preventDefault(),void i.click();i&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput()},this._onInvokerSlotChange=()=>{if(void 0===this.actions)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&this._overlayCtrl&&(this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode}),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&e.querySelectorAll("craft-action-item").forEach(e=>{e.addEventListener("click",()=>{this.opened=!1,void 0===this.actions&&this._dispatchChange(e)})})}_dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute("id",`invoker-${this.uid}`),e.setAttribute("aria-controls",`content-${this.uid}`),e.setAttribute("aria-haspopup","true")),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];e&&(this.disabled?e.setAttribute("aria-disabled","true"):e.removeAttribute("aria-disabled"))}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute("id",`content-${this.uid}`),e.setAttribute("role","none")),this._wireContentKeydown()}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._overlayCtrl.addEventListener("show",this._onOverlayShow),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlayCtrl(){this._overlayCtrl?.removeEventListener("show",this._onOverlayShow),super._teardownOverlayCtrl()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector('slot[name="invoker"]')?.addEventListener("slotchange",this._onInvokerSlotChange),this.shadowRoot?.querySelector('slot[name="content"]')?.addEventListener("slotchange",this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has("opened")&&this.opened&&this.disabled)return void(this.opened=!1);if(void 0===this.actions)return void this._removeGeneratedNodes();let t=e.has("opened")&&this.opened&&this._hasActionsProvider();(e.has("actions")||e.has("label")||e.has("icon")||e.has("disabled")||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has("disabled")&&this._syncInvokerDisabled(),e.has("opened")&&!this.opened&&e.get("opened")&&this._resetSearchFilter(),e.has("searchable")&&this._syncSearchInput(),void 0!==this.actions&&(e.has("opened")&&this.opened&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has("actions")||e.has("label")||e.has("icon"))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._overlayCtrl&&this._overlayCtrl.updateConfig({contentNode:this._overlayContentNode,invokerNode:this._overlayInvokerNode}),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>"invoker"===e.slot&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>"hr"===e.type||"display"===e.type?e:"href"in e&&e.href?{...e,type:"link",label:e.label??""}:{...e,type:e.type??"button",label:e.label??""})}_sortActions(e){return[...e].sort((e,t)=>("variant"in e&&e.variant===Re.Danger)-+("variant"in t&&t.variant===Re.Danger))}_applyItemProps(e,t){let i=new Set(["type","label","onClick","href","keywords"]);for(let[s,n]of Object.entries(t))i.has(s)||void 0===n||(e[s]=n)}_renderItem(e){if("hr"===e.type){let e=document.createElement("hr");return e.className="action-menu__separator",Object.assign(e.style,{margin:"0",border:"0",borderBlockStart:"1px solid var(--c-color-neutral-border-quiet)"}),e}if("display"===e.type)return"function"==typeof e.node?e.node():e.node;let t=document.createElement("craft-action-item");if("link"===e.type&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute("data-keywords",e.keywords),e.label&&(t.textContent=e.label),"function"==typeof e.onClick){let i=e.onClick;t.addEventListener("click",e=>i(e))}return t.addEventListener("click",()=>this._dispatchChange(e)),t}_resolveActions(){return"function"==typeof this.actions?this.actions():this.actions??[]}_hasActionsProvider(){return"function"==typeof this.actions}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement("craft-button");e.setAttribute("slot","invoker"),e.setAttribute("type","button"),e.setAttribute("icon",""),e.setAttribute("size","small"),e.setAttribute("variant","inherit"),e.setAttribute("appearance","plain"),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute("disabled",this.disabled),ke(ne`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement("div");e.setAttribute("slot","content"),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let i of e){let e=this._renderItem(i);e&&t.appendChild(e)}this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:this._cachedOverlayContentNode?this._cachedOverlayContentNode:Array.from(this.children).find(e=>"content"===e.slot)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e)return this._searchContainer?.isConnected&&this._searchContainer.remove(),void(e&&this._clearFilterAttributes(e));this._searchContainer||(this._searchContainer=this._buildSearchContainer()),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let e=document.createElement("div");e.className="action-menu__search";let t=document.createElement("style");t.textContent="\n      craft-action-menu [data-search-hidden] {\n        display: none !important;\n      }\n      craft-action-menu .action-menu__search input {\n        box-sizing: border-box;\n        width: 100%;\n        padding: var(--c-spacing-xs);\n        border: 1px solid var(--c-border-form);\n        border-radius: var(--c-radius-sm);\n        background-color: var(--c-surface-form);\n        font: inherit;\n      }\n    ",e.appendChild(t);let i=document.createElement("input");return i.type="text",i.setAttribute("inputmode","search"),i.autocomplete="off",i.placeholder=Qe("Search"),i.setAttribute("aria-label",Qe("Search")),i.addEventListener("input",()=>{this._applySearchFilter(i.value)}),i.addEventListener("keydown",this._onSearchKeydown),i.addEventListener("keyup",this._onSearchKeyup),e.appendChild(i),this._searchInput=i,e}_getFilterableItems(t){return Array.from(t.querySelectorAll(e._filterableItemsSelector)).filter(i=>{if(this._searchContainer?.contains(i))return!1;let s=i.parentElement?.closest(e._filterableItemsSelector);return!s||!t.contains(s)})}_itemMatchesSearch(e,t){return`${e.textContent??""} ${e.getAttribute("data-keywords")??""}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let i=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!i||this._itemMatchesSearch(e,i)?e.removeAttribute("data-search-hidden"):e.setAttribute("data-search-hidden","")}_clearFilterAttributes(e){e.querySelectorAll("[data-search-hidden]").forEach(e=>e.removeAttribute("data-search-hidden"))}_resetSearchFilter(){this._searchInput&&(this._searchInput.value="");let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll("craft-action-item")).filter(e=>!e.hasAttribute("hidden")&&!e.hasAttribute("data-search-hidden")&&!(e.disabled||e.hasAttribute("disabled"))):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener("keydown",this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||(1!==e.key.length||e.ctrlKey||e.metaKey||e.altKey)&&"Backspace"!==e.key)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value="Backspace"===e.key?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};zt.styles=[...Vt.styles,v`
      ::slotted([slot='content']) {
        display: grid;
        gap: var(--c-spacing-xs);
        padding: var(--c-spacing-sm);
        font-size: var(--c-text-base);
        font-weight: 400;
      }

      ::slotted([slot='content']) hr {
        margin: 0;
      }

      :host([disabled]) ::slotted([slot='invoker']) {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    `],zt._filterableItemsSelector="craft-action-item, li, button",Ae([Te({attribute:!1})],zt.prototype,"actions",void 0),Ae([Te()],zt.prototype,"label",void 0),Ae([Te()],zt.prototype,"icon",void 0),Ae([Te({type:Boolean,reflect:!0})],zt.prototype,"disabled",void 0),Ae([Te({type:Boolean,reflect:!0})],zt.prototype,"searchable",void 0),Ae([Ie({slot:"invoker"})],zt.prototype,"invokerNodes",void 0),Ae([Ie({slot:"content"})],zt.prototype,"contentNodes",void 0),customElements.get("craft-action-menu")||customElements.define("craft-action-menu",zt);var Bt=v`
  :host {
    --color-start: red;
    --color-end: blue;
    --color-text: inherit;

    --size: calc(30rem / 16);
    display: contents;
  }

  .avatar {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    background-color: white;
    border-radius: var(--c-radius-full);
  }

  .avatar__text {
    line-height: 1;
    font-weight: 500;
    font-family: var(--c-font-body, sans-serif);
    text-anchor: middle;
    fill: currentColor;
    user-select: none;
    pointer-events: none;
  }
`,Ut=class extends Ce{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(" ").map(e=>e.charAt(0).toUpperCase()).join(""):"?"}render(){return ne`
      <span class="avatar">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          ${this.label?ne`<title>${this.label}</title>`:""}
          <defs>
            <linearGradient
              id="${this._gradientId}"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0%" style="stop-color:var(--color-start)"></stop>
              <stop offset="100%" style="stop-color:var(--color-end)"></stop>
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="url(#${this._gradientId})"
            opacity="0.25"
          ></circle>
          <text class="avatar__text" x="50" y="64" font-size="44">
            ${this.text()}
          </text>
        </svg>
      </span>
    `}};Ut.styles=[Bt],Ae([Te()],Ut.prototype,"label",void 0),Ae([Le()],Ut.prototype,"_gradientId",void 0),customElements.get("craft-avatar")||customElements.define("craft-avatar",Ut);const qt={Red:"red",Orange:"orange",Amber:"amber",Yellow:"yellow",Lime:"lime",Green:"green",Emerald:"emerald",Teal:"teal",Cyan:"cyan",Sky:"sky",Blue:"blue",Indigo:"indigo",Violet:"violet",Purple:"purple",Fuchsia:"fuchsia",Pink:"pink",Rose:"rose",White:"white",Gray:"gray",Black:"black",Neutral:"slate",Accent:"red",Success:"emerald",Warning:"orange",Danger:"red",Info:"blue",Pending:"orange",Off:"red",Suspended:"red",Expired:"red",Disabled:"gray",Inactive:"gray",On:"emerald"},Ht=Object.values(qt),Wt={Solid:"solid",OutlineFill:"outline-fill",Fill:"fill",Outline:"outline",Plain:"plain"};Object.values(Wt);var jt=class extends Ce{constructor(...e){super(...e),this.size="md",this.fill="var(--c-color-fill-loud)",this.label=null,this.appearance=Wt.OutlineFill}getFill(){return Ht.includes(this.fill)||Pe.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case"md":return"0.6em";case"lg":return"1em";default:return this.size}}render(){return ne`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??oe}"
      role="${this.label?"img":oe}"
      class="${Ue({indicator:!0,"indicator--outline":this.appearance===Wt.Outline})}"
    ></span>`}};jt.styles=[Ne,v`
      .indicator {
        --_fill: var(--fill, var(--c-color-fill-loud));
        --_size: var(--size, 0.5em);
        display: inline-flex;
        aspect-ratio: 1;
        width: var(--_size);
        border-radius: var(--c-radius-full);
        background: var(--_fill);
        border: 1px solid var(--_fill);
      }

      /* Appearances */
      :host([appearance~='outline-fill']) .indicator {
        background: var(--_fill);
        border: 1px solid rgba(0, 0, 0, 0.5);
      }

      :host([appearance~='solid']) .indicator {
        background: var(--_fill);
        border-color: transparent;
      }

      :host([appearance~='outline']) .indicator {
        background: transparent;
        border: 2px solid var(--_fill);
      }
    `],Ae([Te()],jt.prototype,"size",void 0),Ae([Te({reflect:!0})],jt.prototype,"fill",void 0),Ae([Te()],jt.prototype,"label",void 0),Ae([Te({reflect:!0})],jt.prototype,"appearance",void 0),customElements.get("craft-indicator")||customElements.define("craft-indicator",jt);var Kt=v`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background-color: var(--c-color-fill-quiet);
    border: 1px solid var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
    border-radius: var(--c-radius-full);
    font-size: 0.9em;
  }

  .badge__prefix {
    padding-inline: calc(var(--c-spacing-md) / 2);
  }

  .badge__suffix {
    padding-inline: calc(var(--c-spacing-md) / 2);
  }
`,Gt=class extends Ce{constructor(...e){super(...e),this.fill=qt.Gray}getFill(){return this.fill}willUpdate(e){e.has("fill")&&(this.dataset.color=this.getFill())}render(){return ne`
      <span
        part="badge"
        class="${Ue({badge:!0})}"
      >
        <span class="badge__prefix">
          <slot name="prefix" part="prefix">
            <craft-indicator
              part="indicator"
              fill=${this.getFill()}
            ></craft-indicator>
          </slot>
        </span>
        <slot></slot>
        <span class="badge__suffix">
          <slot name="suffix" part="suffix"></slot>
        </span>
      </span>
    `}};Gt.styles=[Kt],Ae([Te({reflect:!0})],Gt.prototype,"fill",void 0),customElements.get("craft-badge")||customElements.define("craft-badge",Gt);var Zt=class extends Ce{constructor(...e){super(...e),this.rel="noreferrer noopener"}render(){return ne`
      <slot name="start" part="start"></slot>
      ${this.href?ne`<a
          part="label"
          class="label"
          href=${this.href}
          target=${this.target??oe}
          rel=${this.target?this.rel:oe}
          ><slot></slot
        ></a>`:ne`<span part="label" class="label"><slot></slot></span>`}
      <slot name="end" part="end"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};Zt.styles=v`
    :host {
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      color: inherit;
    }

    .label {
      display: inline-flex;
      align-items: center;
      font-weight: 400;
      color: inherit;
      text-decoration: none;
    }

    a.label:hover {
      text-decoration: underline;
    }

    slot[name='start']::slotted(*) {
      margin-inline-end: var(--c-spacing-sm);
    }

    slot[name='end']::slotted(*) {
      margin-inline-start: var(--c-spacing-sm);
    }

    slot[name='separator']::slotted(*) {
      color: var(--c-text-quiet);
      margin: 0 var(--c-spacing-md);
    }
  `,Ae([Te({reflect:!0})],Zt.prototype,"href",void 0),Ae([Te()],Zt.prototype,"target",void 0),Ae([Te()],Zt.prototype,"rel",void 0),customElements.get("craft-breadcrumb-item")||customElements.define("craft-breadcrumb-item",Zt);class Yt{constructor(){this.__iconResolvers=new Map}addIconResolver(e,t){if(this.__iconResolvers.has(e))throw new Error(`An icon resolver has already been registered for namespace: ${e}`);this.__iconResolvers.set(e,t)}removeIconResolver(e){this.__iconResolvers.delete(e)}resolveIcon(e,t,i){const s=this.__iconResolvers.get(e);if(s)return s(t,i);throw new Error(`Could not find any icon resolver for namespace ${e}.`)}resolveIconForId(e){const t=e.split(":");if(3!==t.length)throw new Error(`Incorrect iconId: ${e}. Format: <namespace>:<iconset>:<icon>`);return this.resolveIcon(t[0],t[1],t[2])}}const Jt=ht(function(){if(!ut.has("@lion/ui::icons::0.x")){const e=new Yt;ut.set("@lion/ui::icons::0.x",e)}return ut.get("@lion/ui::icons::0.x")});class Xt extends Be{constructor(e){if(super(e),this.it=oe,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===oe||null==e)return this._t=void 0,this.it=e;if(e===re)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Xt.directiveName="unsafeHTML",Xt.resultType=1,ze(Xt);class Qt extends Xt{}Qt.directiveName="unsafeSVG",Qt.resultType=2;const ei=ze(Qt),ti="craft",ii=new Map,si=(e,t,i)=>{let s=function(e,t="classic",i="regular",s="/vendor/craft/icons"){let n="solid",r=i,o=e.endsWith(".svg")?e.split(".svg")[0]:e;if(e.includes("/")){let[t,...i]=e.split("/");r=t??r,o=i.join("/")}return"thin"===r?n="thin":"light"===r?n="light":"regular"===r?n="regular":"solid"===r&&(n="solid"),"brands"===t&&(n="brands"),("custom-icons"===t||"custom-icons"===r)&&(n="custom-icons"),`${s}/${n}/${o}.svg`}(e,t,i);if(null===s)return oe;let n=ii.get(s);return n||(n=async function(e){try{let t=await fetch(e,{mode:"cors"});if(!t.ok)return oe;let i=document.createElement("div");i.innerHTML=await t.text();let s=i.firstElementChild;return"svg"===s?.tagName?.toLowerCase()?(s.setAttribute("fill","currentColor"),s.setAttribute("part","svg"),ne`${ei(s.outerHTML)}`):oe}catch{return oe}}(s),ii.set(s,n)),n.then(e=>(e===oe&&ii.delete(s),e))};!function(e){Jt.removeIconResolver(ti),Jt.addIconResolver(ti,(t,i)=>{let{family:s,variant:n}=function(e){let[t="classic",i="regular"]=e.split("/");return{family:t,variant:i}}(t);return e(i,s,n)})}(si);var ni=new WeakSet,ri=class extends Ce{constructor(...e){super(...e),st(this,ni),this.appearance="plain",this._svg=oe,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),"badge"===this.appearance&&!this.getAttribute("data-color")&&this.setAttribute("data-color","warning"),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){it(ni,this,li).call(this)}updated(e){super.updated(e),(e.has("name")||e.has("family")||e.has("variant"))&&it(ni,this,ai).call(this),e.has("label")&&this.hasUpdated&&it(ni,this,li).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return ne`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?oe:this._svg}
    `}static get styles(){return[v`
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
      `]}};function oi(){return this.name?{name:this.name,family:this.family??"classic",variant:this.variant??"solid"}:null}async function ai(){let e,t=it(ni,this,oi).call(this);if(null===t)return void(this._svg=oe);try{e=await function(e,t="classic",i="regular"){return Promise.resolve(Jt.resolveIcon(ti,function(e,t){return`${e}/${t}`}(t,i),e))}(t.name,t.family,t.variant)}catch(t){console.error(t),e=oe}let i=it(ni,this,oi).call(this);null===i||t.name!==i.name||t.family!==i.family||t.variant!==i.variant||(this._svg=e)}function li(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}Ae([Te({reflect:!0})],ri.prototype,"name",void 0),Ae([Te({reflect:!0})],ri.prototype,"family",void 0),Ae([Te({reflect:!0})],ri.prototype,"variant",void 0),Ae([Te()],ri.prototype,"label",void 0),Ae([Te({reflect:!0})],ri.prototype,"appearance",void 0),Ae([Le()],ri.prototype,"_svg",void 0),Ae([Le()],ri.prototype,"_hasSlottedContent",void 0),customElements.get("craft-icon")||customElements.define("craft-icon",ri);var di=v`
  .breadcrumbs {
    display: flex;
    align-items: center;
  }
`,ci=class extends Ce{constructor(...e){super(...e),this.label=Qe("Breadcrumbs"),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let i=e.offsetWidth;return e.hasAttribute("hidden")&&(e.removeAttribute("hidden"),i=e.offsetWidth,e.setAttribute("hidden","")),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:i,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>"craft-breadcrumb-item"===e.tagName.toLowerCase());if(e.forEach((t,i)=>{let s=t.querySelector('[slot="separator"]');null===s?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}),0===this.breadcrumbsElements.length)return this.items=[],void(this.visibleItems=0);await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.firstRender?this.firstRender=!1:this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){let e=this.getBoundingClientRect().width;console.log({availableSpace:e})}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return ne`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};ci.styles=[di],Ae([Fe("slot")],ci.prototype,"defaultSlot",void 0),Ae([Fe('slot[name="separator"]')],ci.prototype,"separatorSlot",void 0),Ae([Ie({selector:"craft-breadcrumb-item"})],ci.prototype,"breadcrumbsElements",void 0),Ae([Te()],ci.prototype,"label",void 0),Ae([Le()],ci.prototype,"items",void 0),Ae([Le()],ci.prototype,"visibleItems",void 0),customElements.get("craft-breadcrumbs")||customElements.define("craft-breadcrumbs",ci);var hi=v`
  :host {
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    display: flex;
    gap: var(--c-spacing-1px);
  }

  ::slotted(craft-button),
  ::slotted(craft-action-menu) {
    --c-button-radius-start-start: 0;
    --c-button-radius-start-end: 0;
    --c-button-radius-end-start: 0;
    --c-button-radius-end-end: 0;
  }

  ::slotted(craft-button:first-child),
  ::slotted(craft-action-menu:first-child) {
    --c-button-radius-start-start: var(--_button-radius);
    --c-button-radius-end-start: var(--_button-radius);
  }

  ::slotted(craft-button:last-child),
  ::slotted(craft-action-menu:last-child) {
    --c-button-radius-start-end: var(--_button-radius);
    --c-button-radius-end-end: var(--_button-radius);
  }
`,ui=class extends Ce{constructor(){super(),this._handleClick=e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.hasAttribute("value")&&e!==this);if(!t)return;let i=t.getAttribute("value")??"";i!==this.value&&(this.value=i,this._syncChildren(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:i}})))},this._internals=this.attachInternals()}firstUpdated(e){super.firstUpdated(e),this.name&&this._setupRadioMode()}updated(e){e.has("name")&&(this.name?this._setupRadioMode():this._teardownRadioMode()),e.has("value")&&this.name&&this._syncChildren()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}_setupRadioMode(){this.setAttribute("role","radiogroup"),this.removeEventListener("click",this._handleClick),this.addEventListener("click",this._handleClick),this._syncChildren()}_teardownRadioMode(){this.removeAttribute("role"),this.removeEventListener("click",this._handleClick)}_syncChildren(){this.querySelectorAll("craft-button").forEach(e=>{"button"!==e.getAttribute("type")&&e.setAttribute("type","button");let t=e.getAttribute("value")===this.value;e.toggleAttribute("active",t),e.setAttribute("aria-pressed",String(t))}),this._internals.setFormValue(this.value??null)}render(){return ne`<slot @slotchange=${this._onSlotChange}></slot>`}_onSlotChange(){this.name&&this._syncChildren()}};ui.styles=[hi],ui.formAssociated=!0,Ae([Te({reflect:!0})],ui.prototype,"name",void 0),Ae([Te({reflect:!0})],ui.prototype,"value",void 0),customElements.get("craft-button-group")||customElements.define("craft-button-group",ui);var pi=v`
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
`;class mi extends(Ot(Lt(Ce))){static get properties(){return{invokerRelation:{type:String,attribute:"invoker-relation"}}}static get styles(){return[...super.styles,v`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation="description"}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];_defineOverlayConfig(){const e=super._defineOverlayConfig(),t=(({invokerRelation:e="description",delayIn:t=300,delayOut:i=300}={})=>({placementMode:"local",elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:e,popperConfig:{strategy:"absolute"},...Ft({delayIn:t,delayOut:i})}))({invokerRelation:this.invokerRelation});return{...e,...t,popperConfig:{...e.popperConfig||{},...t.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...t.popperConfig?.modifiers||[]]}}}}var fi=new WeakMap,_i=new WeakMap,bi=new WeakSet,gi=class extends mi{constructor(){super(),st(this,bi),this.placement="top",this.trigger="hover focus",nt(this,fi,null),nt(this,_i,()=>{this.opened=!this.opened}),et(this)}static get styles(){return[...super.styles,v`
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
      `]}connectedCallback(){it(bi,this,vi).call(this),super.connectedCallback()}get _overlayInvokerNode(){if(this.for){let e=this.getRootNode();return"function"==typeof e.getElementById?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}_defineOverlayConfig(){let e={...super._defineOverlayConfig()};return(yi.call(it(bi,this))||wi.call(it(bi,this)))&&delete e.visibilityTriggerFunction,{...e,popperConfig:{...e.popperConfig,placement:this.placement}}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),yi.call(it(bi,this))&&this._overlayInvokerNode?.addEventListener("click",rt(_i,this))}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode?.removeEventListener("click",rt(_i,this))}updated(e){super.updated(e),e.has("for")&&void 0!==e.get("for")&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode})}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function vi(){if(rt(fi,this)?.isConnected)return;let e=document.createElement("div");e.slot="content",e.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||""===e.slot)),this.append(e),ot(fi,this,e)}function yi(){return this.trigger.split(" ").includes("click")}function wi(){return this.trigger.split(" ").includes("manual")}Ae([Te({reflect:!0})],gi.prototype,"for",void 0),Ae([Te({reflect:!0})],gi.prototype,"placement",void 0),Ae([Te({reflect:!0})],gi.prototype,"trigger",void 0),customElements.get("craft-tooltip")||customElements.define("craft-tooltip",gi);const ki=lt(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){!1===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){!0===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"disabled"===e&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),!1===this.disabled&&!0===this._requestedToBeDisabled&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}}),xi=lt(e=>class extends(ki(e)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),!1===this._requestedToBeDisabled&&null!=this.tabIndex&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),!0===this._requestedToBeDisabled&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"disabled"===e&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),"tabIndex"===e&&(this.__isUserSettingTabIndex&&null!=this.tabIndex&&(this.__restoreTabIndexTo=this.tabIndex),-1!==this.tabIndex&&!0===this._requestedToBeDisabled&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}}),Ci=e=>" "===e.key||"Enter"===e.key,Ei=e=>" "===e.key;class Ni extends(xi(Ce)){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return ne` <div class="button-content"><slot></slot></div> `}static get styles(){return[v`
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
      `]}constructor(){super(),this.type="button",this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button")}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):null!==this.getAttribute("aria-disabled")&&this.removeAttribute("aria-disabled"))}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e),this.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e),this.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!Ci(e))return void(Ei(e)&&e.preventDefault());Ei(e)&&e.preventDefault(),this.active=!0;const t=e=>{Ci(e)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(Ci(e)){if(e.target&&e.target!==this)return;this.click()}}}class Ai extends Ni{constructor(){super(),this.type="reset",this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement("button"),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener("click",this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener("click",this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,"submit"!==this.type&&"reset"!==this.type||e.target!==this||!this._form||(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}}const Si=new WeakMap;class $i extends Ai{get _nativeButtonNode(){return Si.get(this._form)?.helper||null}constructor(){super(),this.type="submit",this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){if(super._setupSubmitAndResetHelperOnConnected(),!this._form||"submit"!==this.type)return;const e=this._form;if(!Si.get(this._form)){const t=function(){const e=document.createElement("button");return e.tabIndex=-1,e.type="submit",e.setAttribute("aria-hidden","true"),e.style.cssText="\n    position: absolute;\n    top: 0;\n    left: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    overflow: hidden;\n    white-space: nowrap;\n    height: 1px;\n    width: 1px;\n    padding: 0; /* reset default agent styles */\n    border: 0; /* reset default agent styles */\n  ",e}(),i=document.createElement("div");i.appendChild(t),Si.set(this._form,{lionButtons:new Set,helper:t,observer:new MutationObserver(()=>{e.appendChild(i)})}),e.appendChild(i),Si.get(e)?.observer.observe(i,{childList:!0})}Si.get(e)?.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){const e=Si.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),Si.get(this._form)?.observer.disconnect(),Si.delete(this._form)))}}}var Ti=v`
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
    padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    padding-block: 0;
    width: auto;
    min-height: var(--c-button-height, var(--c-size-control-md));
    min-width: var(--c-button-width, var(--c-size-control-md));
    white-space: nowrap;
    border-width: var(--c-button-border-width, 1px);
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

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: var(--c-focus-outline-width) solid var(--_focus-outline-color);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host(:focus-visible) {
    --_focus-outline-color: var(--c-color-focus-outline);
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

  :host(:not(:disabled):not(.loading):active),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--_active-color);
    background-color: var(--_active-background-color);
    box-shadow: inset 0 1px 3px var(--c-color-mix-active);
  }

  :host(:not(:disabled):not(.loading)[active]),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--c-color-on-loud);
    background-color: var(--c-color-fill-loud);
    border-color: var(--c-color-border-loud);
  }

  /*
  Sizes
   */
  :host([size~='zero']) {
    min-width: 0;
    min-height: 0;
    padding-inline: 0;
  }

  :host([size~='small']) {
    padding-inline: var(--c-spacing-sm);
    min-width: var(--c-size-control-sm);
    min-height: var(--c-size-control-sm);
    font-size: 0.9em;
  }

  :host([size~='large']) {
    padding-inline: var(--c-spacing-lg);
    min-height: var(--c-size-control-lg);
    min-width: var(--c-size-control-lg);
  }

  :host([loading]) {
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
    aspect-ratio: 1;
    padding-inline: 0;
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
  Appearances
   */

  /* Inline */
  :host([appearance~='inline']) {
    display: inline;
    appearance: none;
    background-color: transparent;
    border-color: currentColor;
    color: inherit;
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;

    &::before {
      /* remove the sizer added by lion */
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([appearance='inline']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-button-default-fill)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([appearance='inline']:not(:disabled):not(.loading):active) {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
  }

  :host([appearance='inline'][active]) {
    background-color: var(
      --c-color-fill-normal,
      var(--c-color-neutral-fill-normal)
    );
    border-color: var(
      --c-color-border-normal,
      var(--c-color-neutral-border-normal)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
    box-shadow: none;
  }

  /* Plain & Outline (Shared) */
  :host([appearance~='plain']),
  :host([appearance~='outline']) {
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']:hover),
  :host([appearance~='outline']:hover) {
    background-color: hsl(
      from var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)) h s
        calc(l - 5)
    );
  }

  :host([appearance~='plain']:active),
  :host([appearance~='outline']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)) h s
        calc(l - 8)
    );
    --_active-color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
  }

  :host([appearance~='plain'][active]),
  :host([appearance~='outline'][active]) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /* Plain */
  :host([appearance~='plain']) {
    border-color: transparent;
    color: inherit;

    &:before {
      display: none;
    }
  }

  :host([appearance='plain']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-button-default-fill)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([appearance='plain']:not(:disabled):not(.loading):active) {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
  }

  :host([appearance='plain'][active]) {
    background-color: var(--c-color-fill-normal);
    border-color: var(--c-color-border-normal);
    color: var(--c-color-on-normal);
    box-shadow: none;
  }

  /* Outline */
  :host([appearance='outline']) {
    border-color: var(--c-color-border-loud);
  }

  /* Solid */
  :host([appearance~='solid']) {
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
    border-color: transparent;
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([appearance='solid']:hover) {
    background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([appearance='solid']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  /* Fill */
  :host([appearance~='fill']) {
    border-color: transparent;
    background-color: var(
      --c-color-fill-normal,
      var(--c-color-neutral-fill-normal)
    );
    border-color: transparent;
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([appearance='fill']:hover) {
    background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([appearance='fill'][active]),
  :host([appearance='fill']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  .button-content {
    display: flex;
    align-items: center;
    gap: 0.25em;
    width: 100%;
  }

  .prefix,
  .suffix {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-content--start {
    justify-content: start;
  }

  .button-content--end {
    justify-content: end;
  }

  craft-button-group craft-button {
    border-radius: 0;
  }

  craft-button-reset,
  craft-button-submit {
    /* Temporarily make it very obvious when these are used */
    outline: 10px solid var(--c-button-danger-border);
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
`,Li=v`
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
`,Oi=new WeakMap,Fi=class extends Ce{constructor(...e){super(...e),this.label=Qe("More Info"),this.icon="circle-info",this.disabled=!1,this.status="",nt(this,Oi,new AbortController)}connectedCallback(){super.connectedCallback(),rt(Oi,this).signal.aborted&&ot(Oi,this,new AbortController),this.id||(this.id=`info-icon-${Math.random().toString(36).slice(2,8)}`);let{signal:e}=rt(Oi,this);this.addEventListener("craft-show",()=>{Ii._&&Ii._!==this&&Ii._.renderRoot.querySelector("craft-tooltip")?.hide(),Ii._=this},{signal:e}),this.addEventListener("craft-after-show",()=>{this.status="",setTimeout(()=>{this.status="Some new status"},200)},{signal:e}),this.addEventListener("craft-after-hide",()=>{Ii._===this&&(Ii._=null),this.status=""},{signal:e})}disconnectedCallback(){Ii._===this&&(Ii._=null),rt(Oi,this).abort(),super.disconnectedCallback()}render(){return ne`
      <div class="cp-info-icon">
        <craft-visually-hidden role="status">
          ${this.status}
        </craft-visually-hidden>

        <craft-button
          type="button"
          icon
          size="zero"
          appearance="plain"
          id="${this.id}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${this.id}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};Fi.styles=v`
    :host {
      display: inline-flex;
    }
  `;var Ii={_:null};Ae([Te()],Fi.prototype,"label",void 0),Ae([Te()],Fi.prototype,"icon",void 0),Ae([Te({type:Boolean,reflect:!0})],Fi.prototype,"disabled",void 0),Ae([Te()],Fi.prototype,"id",void 0),Ae([Le()],Fi.prototype,"status",void 0),Ae([Fe("craft-tooltip")],Fi.prototype,"tooltip",void 0),customElements.get("craft-info-icon")||customElements.define("craft-info-icon",Fi);var Mi=class extends Ce{constructor(...e){super(...e),this.debug=!1}render(){return ne`<slot></slot>`}};Mi.styles=v`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,Ae([Te({type:Boolean,reflect:!0})],Mi.prototype,"debug",void 0),customElements.get("craft-visually-hidden")||customElements.define("craft-visually-hidden",Mi);var Di=class extends Ce{constructor(...e){super(...e),this.visible=!0}show(){this.visible=!0,this.dispatchEvent(new CustomEvent("show"))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent("hide"))}focus(){this.wrapper?.focus()}render(){return ne`
      <div
        tabindex="-1"
        class="${Ue({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot /></span>
      </div>
    `}};Di.styles=[pi,Li],Ae([Te({reflect:!0,type:Boolean})],Di.prototype,"visible",void 0),Ae([Fe(".wrapper")],Di.prototype,"wrapper",void 0),customElements.get("craft-spinner")||customElements.define("craft-spinner",Di);var Vi=Object.prototype.toString;function Ri(e){return"function"==typeof e||"[object Function]"===Vi.call(e)}var Pi=2**53-1;function zi(e,t){var i=Array,s=Object(e);if(null==e)throw TypeError("Array.from requires an array-like object - not null or undefined");if(void 0!==t&&!Ri(t))throw TypeError("Array.from: when provided, the second argument must be a function");for(var n,r=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),Pi)}(s.length),o=Ri(i)?Object(new i(r)):Array(r),a=0;a<r;)n=s[a],o[a]=t?t(n,a):n,a+=1;return o.length=r,o}function Bi(e){return Bi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bi(e)}function Ui(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,qi(s.key),s)}}function qi(e){var t=function(e){if("object"!=Bi(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=Bi(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Bi(t)?t:t+""}var Hi=typeof Set>"u"?Set:function(e,t){return t&&Ui(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),function(e,t,i){(t=qi(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}(this,"items",void 0),this.items=t},[{key:"add",value:function(e){return!1===this.has(e)&&this.items.push(e),this}},{key:"clear",value:function(){this.items=[]}},{key:"delete",value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:"forEach",value:function(e){var t=this;this.items.forEach(function(i){e(i,i,t)})}},{key:"has",value:function(e){return-1!==this.items.indexOf(e)}},{key:"size",get:function(){return this.items.length}}]);function Wi(e){return e.localName??e.tagName.toLowerCase()}var ji={article:"article",aside:"complementary",button:"button",datalist:"listbox",dd:"definition",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",form:"form",footer:"contentinfo",h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:"banner",hr:"separator",html:"document",legend:"legend",li:"listitem",math:"math",main:"main",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:"region",summary:"button",table:"table",tbody:"rowgroup",textarea:"textbox",tfoot:"rowgroup",td:"cell",th:"columnheader",thead:"rowgroup",tr:"row",ul:"list"},Ki={caption:new Set(["aria-label","aria-labelledby"]),code:new Set(["aria-label","aria-labelledby"]),deletion:new Set(["aria-label","aria-labelledby"]),emphasis:new Set(["aria-label","aria-labelledby"]),generic:new Set(["aria-label","aria-labelledby","aria-roledescription"]),insertion:new Set(["aria-label","aria-labelledby"]),none:new Set(["aria-label","aria-labelledby"]),paragraph:new Set(["aria-label","aria-labelledby"]),presentation:new Set(["aria-label","aria-labelledby"]),strong:new Set(["aria-label","aria-labelledby"]),subscript:new Set(["aria-label","aria-labelledby"]),superscript:new Set(["aria-label","aria-labelledby"])};function Gi(e,t){return function(e,t){return["aria-atomic","aria-busy","aria-controls","aria-current","aria-description","aria-describedby","aria-details","aria-dropeffect","aria-flowto","aria-grabbed","aria-hidden","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"].some(function(i){var s;return e.hasAttribute(i)&&!(null!=(s=Ki[t])&&s.has(i))})}(e,t)}var Zi=["presentation","none"];function Yi(e){return null!==e&&e.nodeType===e.ELEMENT_NODE}function Ji(e){return Yi(e)&&"caption"===Wi(e)}function Xi(e){return Yi(e)&&"input"===Wi(e)}function Qi(e){return Yi(e)&&"legend"===Wi(e)}function es(e){return function(e){return Yi(e)&&void 0!==e.ownerSVGElement}(e)&&"title"===Wi(e)}function ts(e,t){if(Yi(e)&&e.hasAttribute(t)){var i=e.getAttribute(t).split(" "),s=e.getRootNode?e.getRootNode():e.ownerDocument;return i.map(function(e){return s.getElementById(e)}).filter(function(e){return null!==e})}return[]}function is(e,t){return!!Yi(e)&&-1!==t.indexOf(function(e){var t=function(e){var t=e.getAttribute("role");if(null!==t){var i=t.trim().split(" ")[0];if(i.length>0)return i}return null}(e);if(null===t||-1!==Zi.indexOf(t)){var i=function(e){var t=ji[Wi(e)];if(void 0!==t)return t;switch(Wi(e)){case"a":case"area":case"link":if(e.hasAttribute("href"))return"link";break;case"img":return""!==e.getAttribute("alt")||Gi(e,"img")?"img":"presentation";case"input":var i=e.type;switch(i){case"button":case"image":case"reset":case"submit":return"button";case"checkbox":case"radio":return i;case"range":return"slider";case"email":case"tel":case"text":case"url":return e.hasAttribute("list")?"combobox":"textbox";case"search":return e.hasAttribute("list")?"combobox":"searchbox";case"number":return"spinbutton";default:return null}case"select":return e.hasAttribute("multiple")||e.size>1?"listbox":"combobox"}return null}(e);if(-1===Zi.indexOf(t||"")||Gi(e,i||""))return i}return t}(e))}function ss(e,t){if(!Yi(e))return!1;if("range"===t)return is(e,["meter","progressbar","scrollbar","slider","spinbutton"]);throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}function ns(e,t){var i=zi(e.querySelectorAll(t));return ts(e,"aria-owns").forEach(function(e){i.push.apply(i,zi(e.querySelectorAll(t)))}),i}function rs(e){var t=e.getPropertyValue("content");return/^["'].*["']$/.test(t)?t.slice(1,-1):""}function os(e){var t=Wi(e);return"button"===t||"input"===t&&"hidden"!==e.getAttribute("type")||"meter"===t||"output"===t||"progress"===t||"select"===t||"textarea"===t}function as(e){if(os(e))return e;var t=null;return e.childNodes.forEach(function(e){if(null===t&&Yi(e)){var i=as(e);null!==i&&(t=i)}}),t}function ls(e){if(void 0!==e.control)return e.control;var t=e.getAttribute("for");return null===t?as(e):e.ownerDocument.getElementById(t)}function ds(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Hi,s=typeof Map>"u"?void 0:new Map,n=function(e){var t=(null===e.ownerDocument?e:e.ownerDocument).defaultView;if(null===t)throw TypeError("no window available");return t}(e),r=t.compute,o=void 0===r?"name":r,a=t.computedStyleSupportsPseudoElements,l=void 0===a?void 0!==t.getComputedStyle:a,d=t.getComputedStyle,c=void 0===d?n.getComputedStyle.bind(n):d,h=t.hidden,u=void 0!==h&&h,p=function(e,t){if(void 0!==t)throw Error("use uncachedGetComputedStyle directly for pseudo elements");if(void 0===s)return c(e);var i=s.get(e);if(i)return i;var n=c(e,t);return s.set(e,n),n};function m(e,t){var i="";if(Yi(e)&&l&&(i=`${rs(c(e,"::before"))} ${i}`),(function(e){return Yi(e)&&"slot"===Wi(e)}(e)?function(e){var t=e.assignedNodes();return 0===t.length?zi(e.childNodes):t}(e):zi(e.childNodes).concat(ts(e,"aria-owns"))).forEach(function(e){var s=_(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),n="inline"===(Yi(e)?p(e).getPropertyValue("display"):"inline")?"":" ";i+=`${n}${s}${n}`}),Yi(e)&&l){var s=rs(c(e,"::after"));i=`${i} ${s}`}return i.trim()}function f(e,t){var s=e.getAttributeNode(t);return null===s||i.has(s)||""===s.value.trim()?null:(i.add(s),s.value)}function _(e,t){if(i.has(e))return"";if(!u&&function(e,t){if(!Yi(e))return!1;if(e.hasAttribute("hidden")||"true"===e.getAttribute("aria-hidden"))return!0;var i=t(e);return"none"===i.getPropertyValue("display")||"hidden"===i.getPropertyValue("visibility")}(e,p)&&!t.isReferenced)return i.add(e),"";var s=Yi(e)?e.getAttributeNode("aria-labelledby"):null,n=null===s||i.has(s)?[]:ts(e,"aria-labelledby");if("name"===o&&!t.isReferenced&&n.length>0)return i.add(s),n.map(function(e){return _(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(" ");var r=t.recursion&&function(e){return is(e,["button","combobox","listbox","textbox"])||ss(e,"range")}(e)&&"name"===o;if(!r){var a=(Yi(e)&&e.getAttribute("aria-label")||"").trim();if(""!==a&&"name"===o)return i.add(e),a;if(!function(e){return is(e,Zi)}(e)){var l=function(e){if(!Yi(e))return null;if(function(e){return Yi(e)&&"fieldset"===Wi(e)}(e)){i.add(e);for(var t=zi(e.childNodes),s=0;s<t.length;s+=1){var n=t[s];if(Qi(n))return _(n,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(function(e){return Yi(e)&&"table"===Wi(e)}(e)){i.add(e);for(var r=zi(e.childNodes),o=0;o<r.length;o+=1){var a=r[o];if(Ji(a))return _(a,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else{if(function(e){return Yi(e)&&"svg"===Wi(e)}(e)){i.add(e);for(var l=zi(e.childNodes),d=0;d<l.length;d+=1){var c=l[d];if(es(c))return c.textContent}return null}if("img"===Wi(e)||"area"===Wi(e)){var h=f(e,"alt");if(null!==h)return h}else if(function(e){return Yi(e)&&"optgroup"===Wi(e)}(e)){var u=f(e,"label");if(null!==u)return u}}if(Xi(e)&&("button"===e.type||"submit"===e.type||"reset"===e.type)){var p=f(e,"value");if(null!==p)return p;if("submit"===e.type)return"Submit";if("reset"===e.type)return"Reset"}var b=function(e){var t=e.labels;return null===t?t:void 0!==t?zi(t):os(e)?zi(e.ownerDocument.querySelectorAll("label")).filter(function(t){return ls(t)===e}):null}(e);if(null!==b&&0!==b.length)return i.add(e),zi(b).map(function(e){return _(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(" ");if(Xi(e)&&"image"===e.type){var g=f(e,"alt");if(null!==g)return g;var v=f(e,"title");return null===v?"Submit Query":v}if(is(e,["button"])){var y=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(""!==y)return y}return null}(e);if(null!==l)return i.add(e),l}}if(is(e,["menu"]))return i.add(e),"";if(r||t.isEmbeddedInLabel||t.isReferenced){if(is(e,["combobox","listbox"])){i.add(e);var d=function(e){return function(e){return Yi(e)&&"select"===Wi(e)}(e)?e.selectedOptions||ns(e,"[selected]"):ns(e,'[aria-selected="true"]')}(e);return 0===d.length?Xi(e)?e.value:"":zi(d).map(function(e){return _(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(" ")}if(ss(e,"range"))return i.add(e),e.hasAttribute("aria-valuetext")?e.getAttribute("aria-valuetext"):e.hasAttribute("aria-valuenow")?e.getAttribute("aria-valuenow"):e.getAttribute("value")||"";if(is(e,["textbox"]))return i.add(e),function(e){return Xi(e)||function(e){return Yi(e)&&"textarea"===Wi(e)}(e)?e.value:e.textContent||""}(e)}if(function(e){return is(e,["button","cell","checkbox","columnheader","gridcell","heading","label","legend","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowheader","switch","tab","tooltip","treeitem"])}(e)||Yi(e)&&t.isReferenced||function(e){return Ji(e)}(e)){var c=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(""!==c)return i.add(e),c}if(e.nodeType===e.TEXT_NODE)return i.add(e),e.textContent||"";if(t.recursion)return i.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var h=function(e){return Yi(e)?f(e,"title"):null}(e);return null===h?(i.add(e),""):(i.add(e),h)}return function(e){return e.trim().replace(/\s\s+/g," ")}(_(e,{isEmbeddedInLabel:!1,isReferenced:"description"===o,recursion:!1}))}var cs=new WeakMap,hs=class extends $i{constructor(...e){super(...e),nt(this,cs,async e=>{let t=De(this.action);if(t&&!this.disabled){e.preventDefault(),"http"===t.type&&(this.loading=!0);try{await Ve(t,{trigger:this,sourceEvent:e})}finally{this.loading=!1}}}),this.appearance="solid",this.variant="neutral",this.size="medium",this.active=!1,this.loading=!1,this.align="center",this.icon=null,this.action=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition="prefix",this._hasAccessibilityError=!1,this.linkHostStateApplied=!1,this.announcementTimer=null}static get styles(){return[...super.styles,pi,Ne,Ti]}connectedCallback(){this.href&&!this.disabled&&(this.type="button",this.setAttribute("role","presentation")),super.connectedCallback(),this.syncLinkHostState(),this.addEventListener("click",rt(cs,this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",rt(cs,this)),this.announcementTimer&&(clearTimeout(this.announcementTimer),this.announcementTimer=null)}updated(e){super.updated(e),(e.has("href")||e.has("disabled"))&&this.syncLinkHostState(),e.has("loading")&&this.loading&&this.announceLoading()}announceLoading(){this.liveRegion.textContent=Qe("Loading"),this.announcementTimer&&clearTimeout(this.announcementTimer),this.announcementTimer=setTimeout(()=>{this.liveRegion.textContent=""},5e3)}syncLinkHostState(){this.isLink?(this.setAttribute("role","presentation"),this.tabIndex=-1,this.type="button",this.linkHostStateApplied=!0):this.linkHostStateApplied&&(this.setAttribute("role","button"),this.type="submit",this.disabled||(this.tabIndex=0),this.linkHostStateApplied=!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll("craft-icon, craft-spinner");if(await Promise.all(Array.from(t).map(e=>e.updateComplete)),!this.accessibleName){let e=this.isLink?this.shadowRoot?.querySelector("a.link")??this:this;this.accessibleName=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(e){return is(e,["caption","code","deletion","emphasis","generic","insertion","none","paragraph","presentation","strong","subscript","superscript"])}(e)?"":ds(e,t)}(e)}this._hasAccessibilityError=!this.accessibleName||""===this.accessibleName.trim()}get isLink(){return!!this.href&&!this.disabled}get computedRel(){if("_blank"===this.target){let e=new Set((this.rel??"").split(/\s+/).filter(Boolean));return e.add("noopener"),Array.from(e).join(" ")}return this.rel}render(){let e=ne`
      <div
        class="${Ue({"button-content":!0,"button-content--start":"start"===this.align,"button-content--end":"end"===this.align,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&"prefix"===this.iconPosition?ne`<craft-icon name="${this.icon}"></craft-icon>`:oe}
        </slot>
        <slot class="label" part="label"></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&"suffix"===this.iconPosition?ne`<craft-icon name="${this.icon}"></craft-icon>`:oe}
        </slot>
      </div>
      ${this.loading?ne`<craft-spinner part="spinner"></craft-spinner>`:oe}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;return this.isLink?ne`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${this.target??oe}"
          rel="${this.computedRel??oe}"
          download="${this.download??oe}"
          >${e}</a
        >
      `:e}};Ae([Te({attribute:"accessible-name"})],hs.prototype,"accessibleName",void 0),Ae([Te({reflect:!0})],hs.prototype,"appearance",void 0),Ae([Te({reflect:!0})],hs.prototype,"variant",void 0),Ae([Te({reflect:!0})],hs.prototype,"size",void 0),Ae([Te({reflect:!0})],hs.prototype,"value",void 0),Ae([Te({reflect:!0,type:Boolean})],hs.prototype,"active",void 0),Ae([Te({reflect:!0,type:Boolean})],hs.prototype,"loading",void 0),Ae([Te()],hs.prototype,"align",void 0),Ae([Te()],hs.prototype,"icon",void 0),Ae([Te({type:Object})],hs.prototype,"action",void 0),Ae([Te({reflect:!0})],hs.prototype,"href",void 0),Ae([Te()],hs.prototype,"target",void 0),Ae([Te()],hs.prototype,"rel",void 0),Ae([Te()],hs.prototype,"download",void 0),Ae([Te({attribute:"icon-position"})],hs.prototype,"iconPosition",void 0),Ae([Fe("[data-live-region]")],hs.prototype,"liveRegion",void 0),Ae([Le()],hs.prototype,"_hasAccessibilityError",void 0),customElements.get("craft-button")||customElements.define("craft-button",hs);var us=v`
  :host {
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --_radius: var(--c-callout-radius, var(--c-radius-md));
    display: flex;
    gap: var(--c-spacing-sm);
    align-items: start;
    padding: var(--c-spacing-sm) var(--c-spacing-md);
    border: 1px solid transparent;
  }

  .callout__body {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .callout__title {
    font-weight: bold;
  }

  .callout__icon {
    width: auto;
    height: 1lh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ::slotted(code) {
    font-size: 0.9em;
    display: inline-flex;
    padding: 0 var(--c-spacing-sm);
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: var(--c-radius-sm);
  }

  :host([inline]) {
    display: inline-flex;
    padding-inline: var(--c-spacing-sm);
    padding-block: 0;
    line-height: 1.25rem;
    font-size: 0.9em;
  }

  :host([rounded~='all']) {
    border-radius: var(--_radius);
  }

  :host([rounded~='none']) {
    border-radius: 0;
  }

  :host([rounded~='start']) {
    border-start-start-radius: var(--_radius);
    border-start-end-radius: var(--_radius);
  }

  :host([rounded~='end']) {
    border-end-start-radius: var(--_radius);
    border-end-end-radius: var(--_radius);
  }

  :host([appearance~='solid']) {
    --c-text-link: var(--c-color-on-loud);
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  :host([appearance~='fill']) {
    --c-text-link: var(--c-color-on-normal);
    border-color: transparent;
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) {
    --c-text-link: var(--c-color-on-normal);
    border-color: var(--c-color-border-normal);
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) {
    --c-text-link: var(--c-color-on-quiet);
    border-color: var(--c-color-border-quiet);
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']) {
    --c-text-link: var(--c-color-on-quiet);
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-on-quiet);
  }
`,ps=class extends Ce{constructor(...e){super(...e),this.variant=Re.Neutral,this.appearance=Wt.OutlineFill,this.title="",this.icon=null,this.hideIcon=!1,this.rounded="all",this.inline=!1}getDefaultIcon(){switch(this.variant){case Re.Info:return"lightbulb";case Re.Success:return"circle-check";case Re.Warning:return"circle-exclamation";case Re.Danger:return"triangle-exclamation";default:return null}}render(){return ne`
      ${this.hideIcon?oe:ne`<slot name="icon" class="callout__icon">
            <craft-icon
              name="${this.getDefaultIcon()}"
              style="font-size: 0.9em"
            ></craft-icon>
          </slot>`}
      <div class="callout__body">
        <slot name="title" class="callout__title">${this.title}</slot>
        <div class="callout__description">
          <slot></slot>
        </div>
      </div>
    `}};ps.styles=[Ne,us],Ae([Te({reflect:!0})],ps.prototype,"variant",void 0),Ae([Te({reflect:!0})],ps.prototype,"appearance",void 0),Ae([Te()],ps.prototype,"title",void 0),Ae([Te()],ps.prototype,"icon",void 0),Ae([Te({type:Boolean,attribute:"hide-icon"})],ps.prototype,"hideIcon",void 0),Ae([Te({reflect:!0})],ps.prototype,"rounded",void 0),Ae([Te({reflect:!0,type:Boolean})],ps.prototype,"inline",void 0),customElements.get("craft-callout")||customElements.define("craft-callout",ps);var ms=v`
  :host {
    display: block;
  }

  :host([active]) .card {
    color: var(--c-color-on-quiet);
    background-color: color-mix(var(--c-color-fill-quiet), transparent 40%);
    border-color: var(--c-color-border-loud);

    .card__header,
    .card__footer {
      background-color: var(--c-color-fill-loud);
      border-color: var(--c-color-border-loud);
      color: var(--c-color-on-loud);
    }
  }

  .card {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      transparent 70%
    );
    border: 1px solid
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    border-radius: var(--c-card-radius, var(--c-radius-md));
    box-shadow: var(--c-card-shadow, var(--c-shadow-sm));
    position: relative;
    height: 100%;
  }

  .card__header,
  .card__footer {
    font-size: 0.875em;
    padding-block: var(--c-card-padding-block, var(--c-spacing-sm));
    padding-inline-start: var(--c-card-padding-inline, var(--c-spacing-md));
    padding-inline-end: var(--c-card-padding-inline, var(--c-spacing-sm));
    background-color: var(--c-color-fill-quiet);
    border-width: 0;
    border-color: var(--c-color-border-quiet);
    border-style: solid;
  }

  .card__footer {
    border-block-start-width: 1px;
    border-end-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-end-end-radius: var(--c-card-radius, var(--c-radius-md));
  }

  .card__header {
    min-height: 1lh;
    border-start-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-start-end-radius: var(--c-card-radius, var(--c-radius-md));
    border-block-end-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__actions {
    display: flex;
    gap: var(--c-spacing-sm);
    align-self: end;
  }

  .card-body {
    gap: var(--c-spacing-md);
    padding-inline: var(--c-card-padding-inline, var(--c-spacing-md));
    padding-block: var(--c-card-padding-block, var(--c-spacing-md));
  }

  .card-body--thumb-start {
    display: grid;
    grid-template-areas: 'thumbnail main';
    grid-template-columns: calc(120rem / 16) minmax(0, 1fr);
  }

  .card-body--thumb-end {
    display: grid;
    grid-template-areas: 'main thumbnail';
    grid-template-columns: minmax(0, 1fr) calc(120rem / 16);
  }

  .card-body__main {
    grid-area: main;
  }

  .card-body__thumbnail {
    grid-area: thumbnail;
  }
`,fs=class extends Ce{constructor(...e){super(...e),this.label="",this.active=!1,this.showThumb=!0,this.thumbAlignment="start",this._hasThumbnail=!1,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["slot"]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasSlottedHeader=!!this.querySelector('[slot="header"]')||!!this.querySelector('[slot="label"]')||!!this.querySelector('[slot="actions"]'),this._hasSlottedFooter=!!this.querySelector('[slot="footer"]'),this._hasThumbnail=!!this.querySelector('[slot="thumbnail"]')}_handleThumbnailSlotChange(e){let t=e.target;this._hasThumbnail=t.assignedElements({flatten:!0}).length>0}render(){let e=!!this.label||this._hasSlottedHeader,t=this._hasSlottedFooter,i=this.showThumb&&this._hasThumbnail;return ne`
      <div
        class="${Ue({card:!0,"card--has-thumbnail":i})}"
      >
        ${e?ne`<div class="card__header">
              <slot name="header">
                <slot name="label" class="card__label" part="label"
                  >${this.label}</slot
                >
                <slot name="actions" class="card__actions"></slot>
              </slot>
            </div>`:oe}

        <div
          class="${Ue({"card-body":!0,"card-body--thumb-start":i&&"start"===this.thumbAlignment,"card-body--thumb-end":i&&"end"===this.thumbAlignment})}"
        >
          <div class="card-body__thumb" ?hidden="${!i}">
            <slot
              name="thumbnail"
              @slotchange="${this._handleThumbnailSlotChange}"
            ></slot>
          </div>

          <div class="card-body__main">
            <slot></slot>
          </div>
        </div>

        ${t?ne`<div class="card__footer"><slot name="footer"></slot></div>`:oe}
      </div>
    `}};fs.styles=[ms],Ae([Te()],fs.prototype,"label",void 0),Ae([Te({type:Boolean,reflect:!0})],fs.prototype,"active",void 0),Ae([Te({attribute:"show-thumb",type:Boolean})],fs.prototype,"showThumb",void 0),Ae([Te({attribute:"thumb-alignment"})],fs.prototype,"thumbAlignment",void 0),Ae([Le()],fs.prototype,"_hasThumbnail",void 0),Ae([Le()],fs.prototype,"_hasSlottedHeader",void 0),Ae([Le()],fs.prototype,"_hasSlottedFooter",void 0),customElements.get("craft-card")||customElements.define("craft-card",fs);const{I:_s}=ye,bs=()=>document.createComment(""),gs=(e,t,i)=>{const s=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(bs(),n),r=s.insertBefore(bs(),n);i=new _s(t,r,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,o=r!==e;if(o){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||o){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,n),e=t}}}return i},vs=(e,t,i=e)=>(e._$AI(t,i),e),ys={},ws=e=>{e._$AR(),e._$AA.remove()};function ks(e,t){let i=!1;Array.from(e.childNodes).forEach(e=>{const s=e.hasAttribute&&e.hasAttribute("slot");e.nodeType===Node.COMMENT_NODE&&!i&&(i=e.textContent.includes("_start_slot_")),i?e.textContent.includes("_end_slot_")&&(i=!1):s||t.appendChild(e)})}function xs(e){return e instanceof Node?"node":(t=e,void 0!==t?._$litType$?"template-result":!Array.isArray(e)&&"object"==typeof e&&"template"in e?"slot-rerender-object":null);var t}const Cs=lt(e=>class extends e{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(e){const t=this.slots[e]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:t.renderAsDirectHostChild,template:t.template,slotName:e}),t.afterRender?.()}update(e){super.update(e);for(const e of this.__slotsThatNeedRerender)this.__rerenderSlot(e)}__renderTemplateInScopedContext({template:e,slotName:t,renderAsDirectHostChild:i}){if(!this.__renderMetaPerSlot.has(t)){const s=!!ShadowRoot.prototype.createElement;Boolean(this.shadowRoot)||console.error("[SlotMixin] No shadowRoot was found");const n=(s?this.shadowRoot:document).createElement("div"),r=document.createComment(`_start_slot_${t}_`),o=document.createComment(`_end_slot_${t}_`);n.appendChild(r),n.appendChild(o);const{creationScope:a,host:l}=this.renderOptions;if(ke(e,n,{renderBefore:o,creationScope:a,host:l}),i){const e=Array.from(n.childNodes);this.__appendNodes({nodes:e,renderParent:this,slotName:t})}else n.slot=t,this.appendChild(n);return void this.__renderMetaPerSlot.set(t,{renderTargetThatRespectsShadowRootScoping:n,renderBefore:o})}const{renderBefore:s,renderTargetThatRespectsShadowRootScoping:n}=this.__renderMetaPerSlot.get(t),r=i?this:n,{creationScope:o,host:a}=this.renderOptions;ke(e,r,{creationScope:o,host:a,renderBefore:s}),i&&s.previousElementSibling&&!s.previousElementSibling.slot&&(s.previousElementSibling.slot=t)}__appendNodes({nodes:e,renderParent:t=this,slotName:i}){for(const s of e)s instanceof Element&&i&&""!==i&&s.setAttribute("slot",i),t.appendChild(s)}__initSlots(e){for(const t of e){if(this.__slotsProvidedByUserOnFirstConnected.has(t))continue;const e=this.slots[t]();if(void 0!==e)switch(this.__isConnectedSlotMixin||this.__privateSlots.add(t),xs(e)){case"template-result":this.__renderTemplateInScopedContext({template:e,renderAsDirectHostChild:!0,slotName:t});break;case"node":this.__appendNodes({nodes:[e],renderParent:this,slotName:t});break;case"slot-rerender-object":this.__slotsThatNeedRerender.add(t),e.firstRenderOnConnected&&this.__rerenderSlot(t);break;default:throw new Error(`Slot "${t}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.\n              You provided: ${e}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const e=Object.keys(this.slots);for(const t of e)(""===t?Array.from(this.children).find(e=>!e.hasAttribute("slot")):Array.from(this.children).find(e=>e.slot===t))&&this.__slotsProvidedByUserOnFirstConnected.add(t);this.__initSlots(e),this.__isConnectedSlotMixin=!0}_isPrivateSlot(e){return this.__privateSlots.has(e)}}),Es=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function Ns(e,{reverse:t}={}){const i=e.filter(e=>e);return i.sort((e,t)=>{const i=e.compareDocumentPosition(t);return Es.includes(i)?1:-1}),t&&i.reverse(),i}class As{constructor(e){this.type="unparseable",this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const Ss=lt(e=>class extends e{constructor(){super(),this.name="",this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||""}set name(e){const t=this.name;this.__name=e.toString(),this.requestUpdate("name",t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:"allow-cross-root-registration"}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0,composed:Boolean(this.allowCrossRootRegistration)}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}}),$s=lt(e=>class extends(Ss(ki(Cs(e)))){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:"label-sr-only",reflect:!0},helpText:{type:String,attribute:"help-text"},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){return this.__label??(this._labelNode?.textContent||"")}set label(e){const t=this.label;this.__label=e,this.requestUpdate("label",t)}get helpText(){return this.__helpText??(this._helpTextNode?.textContent||"")}set helpText(e){const t=this.helpText;this.__helpText=e,this.requestUpdate("helpText",t)}get fieldName(){return this.__fieldName||this.label||this.name||""}set fieldName(e){this.__fieldName=e}get slots(){return{...super.slots,label:()=>{const e=document.createElement("label");return e.textContent=this.label,e},"help-text":()=>{const e=document.createElement("div");return e.textContent=this.helpText,e}}}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=Pt(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this._isRepropagationEndpoint=!1,this.addEventListener("model-value-changed",this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener("click",this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._onLabelClick)}updated(e){super.updated(e),e.has("disabled")&&this._inputNode?.setAttribute("aria-disabled",`${Boolean(this.disabled)}`),e.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),e.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),e.has("label")&&void 0!==this.__label&&this._labelNode&&(this._labelNode.textContent=this.label),e.has("helpText")&&void 0!==this.__helpText&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),e.has("name")&&this.dispatchEvent(new CustomEvent("form-element-name-changed",{detail:{oldName:e.get("name"),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:e,_labelNode:t,_helpTextNode:i,_feedbackNode:s}=this;e&&(e.id=e.id||this._inputId),t&&(t.setAttribute("for",this._inputId),this.addToAriaLabelledBy(t,{idPrefix:"label"})),i&&this.addToAriaDescribedBy(i,{idPrefix:"help-text"}),s&&(this.addEventListener("focusin",()=>{s.setAttribute("aria-live","polite")}),this.addEventListener("focusout",()=>{s.setAttribute("aria-live","assertive")}),this.addToAriaDescribedBy(s,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(e=["prefix","suffix","before","after"]){e.forEach(e=>{const t=this.__getDirectSlotChild(e);t&&(t.hasAttribute("data-label")&&this.addToAriaLabelledBy(t,{idPrefix:e}),t.hasAttribute("data-description")&&this.addToAriaDescribedBy(t,{idPrefix:e}))})}__reflectAriaAttr(e,t,i){if(this._inputNode){if(i){const e=t.filter(e=>this.contains(e)),i=t.filter(e=>!this.contains(e)),s=[...Ns(e.map(e=>e.assignedSlot||e))],n=[];s.forEach(t=>{e.forEach(e=>{t.name===e.slot&&n.push(e)})}),t=[...n,...i]}const s=t.map(e=>e.id).join(" ");this._inputNode.setAttribute(e,s)}}render(){return ne`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return ne` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return ne` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return ne`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return ne`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return ne`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return ne`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>"prefix"===e.slot)?ne`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:oe}_inputGroupInputTemplate(){return ne`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>"suffix"===e.slot)?ne`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:oe}_inputGroupAfterTemplate(){return ne`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return ne`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(e=this.modelValue){let t=e;if(this.modelValue instanceof As&&(t=this.modelValue.viewValue),"object"==typeof t&&null!==t&&!(t instanceof Date))return!Object.keys(t).length;const i="number"==typeof t&&(0===t||Number.isNaN(t));return!(t||i||"boolean"==typeof t&&!1===t)}static get styles(){return[v`
          /**********************
            {block} .form-field
           ********************/

          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            pointer-events: none;
          }

          :host([disabled]) .form-field__label ::slotted(*),
          :host([disabled]) .form-field__help-text ::slotted(*) {
            color: var(--disabled-text-color, #767676);
          }

          :host([label-sr-only]) .form-field__label {
            position: absolute;
            top: 0;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip-path: inset(100%);
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap;
            border: 0;
            margin: 0;
            padding: 0;
          }

          /***********************
            {block} .input-group
           *********************/

          .input-group__container {
            display: flex;
          }

          .input-group__input {
            flex: 1;
            display: flex;
          }

          /***** {state} :disabled *****/
          :host([disabled]) .input-group ::slotted([slot='input']) {
            color: var(--disabled-text-color, #767676);
          }

          /***********************
            {block} .form-control
           **********************/

          .input-group__container > .input-group__input ::slotted(.form-control) {
            flex: 1 1 auto;
            margin: 0; /* remove input margin in Safari */
            font-size: 100%; /* normalize default input font-size */
          }
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(e,{idPrefix:t="",reorder:i=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaLabelledNodes.includes(e)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,e],this.__reorderAriaLabelledNodes=Boolean(i))}removeFromAriaLabelledBy(e){this._ariaLabelledNodes.includes(e)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(e),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(e,{idPrefix:t="",reorder:i=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaDescribedNodes.includes(e)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,e],this.__reorderAriaDescribedNodes=Boolean(i))}removeFromAriaDescribedBy(e){this._ariaDescribedNodes.includes(e)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(e),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(e){return Array.from(this.children).find(t=>t.slot===e)}_dispatchInitialModelValueChangedEvent(){"child"!==this._repropagationRole&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(e){}__repropagateChildrenValues(e){this._onBeforeRepropagateChildrenValues(e);const t=e.detail&&e.detail.element||e.target,i=this._isRepropagationEndpoint||"choice-group"===this._repropagationRole;if(t===this)return;e.stopImmediatePropagation();const s="child"!==this._repropagationRole&&!this.__repropagateChildrenInitialized,n=e.detail&&e.detail.initialize;if(s||n)return;if(!this._repropagationCondition(t))return;let r=[];i||(r=e.detail&&e.detail.formPath||[t]);const o=[...r,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:o,isTriggeredByUser:Boolean(e.detail?.isTriggeredByUser)}}))}_repropagationCondition(e){return Boolean(e)}_onLabelClick(){}}),Ts=lt(e=>class extends($s(e)){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"touched"===e&&this.touched!==t&&this._onTouchedChanged(),"modelValue"===e&&(this.filled=!this._isEmpty()),"dirty"===e&&this.dirty!==t&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event("dirty-changed",{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(e,t){return t.touched&&t.dirty||t.prefilled||t.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}});class Ls extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}}const Os=lt(e=>class extends(Ss(e)){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new Ls,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),!1===this.registrationComplete.done&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){const{name:i}=e;if(i===this.name)throw console.info("Error Node:",e),new TypeError(`You can not have the same name "${i}" as your parent`);if("[]"===i.substr(-2))Array.isArray(this.formElements[i])||(this.formElements[i]=new Ls),t>0?this.formElements[i].splice(t,0,e):this.formElements[i].push(e);else{if(this.formElements[i])throw console.info("Error Node:",e),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`);this.formElements[i]=e}}}removeFormElement(e){const t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){const{name:t}=e;if("[]"===t.substr(-2)&&this.formElements[t]){const i=this.formElements[t].indexOf(e);i>-1&&this.formElements[t].splice(i,1)}else this.formElements[t]&&delete this.formElements[t]}}_onRequestToAddFormElement(e){const t=e.detail.element;if(t===this)return;if(this.isRegisteredFormElement(t))return;e.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements))for(const[e,s]of this.formElements.entries())if(!(s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){i=e;break}this.addFormElement(t,i)}_onRequestToChangeFormElementName(e){const t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){const t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}});function Fs(e,t){return e(t={exports:{}},t.exports),t.exports}var Is="long",Ms="short",Ds="narrow",Vs="numeric",Rs="2-digit",Ps={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:Vs,day:Vs,year:Rs},medium:{month:Ms,day:Vs,year:Vs},long:{month:Is,day:Vs,year:Vs},full:{month:Is,day:Vs,year:Vs,weekday:Is},default:{month:Ms,day:Vs,year:Vs}},time:{short:{hour:Vs,minute:Vs},medium:{hour:Vs,minute:Vs,second:Vs},long:{hour:Vs,minute:Vs,second:Vs,timeZoneName:Ms},full:{hour:Vs,minute:Vs,second:Vs,timeZoneName:Ms},default:{hour:Vs,minute:Vs,second:Vs}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var t={},i=e.match(/\b[A-Z]{3}\b/i),s=e.replace(/[^¤]/g,"").length;if(!s&&i&&(s=1),s?(t.style="currency",t.currencyDisplay=1===s?"symbol":2===s?"code":"name",t.currency=i?i[0].toUpperCase():"USD"):e.indexOf("%")>=0&&(t.style="percent"),!/[@#0]/.test(e))return t.style?t:void 0;if(t.useGrouping=e.indexOf(",")>=0,/E\+?[@#0]+/i.test(e)||e.indexOf("@")>=0){var n=e.replace(/E\+?[@#0]+|[^@#0]/gi,"");t.minimumSignificantDigits=Math.min(Math.max(n.replace(/[^@0]/g,"").length,1),21),t.maximumSignificantDigits=Math.min(Math.max(n.length,1),21)}else{for(var r=e.replace(/[^#0.]/g,"").split("."),o=r[0],a=o.length-1;"0"===o[a];)--a;t.minimumIntegerDigits=Math.min(Math.max(o.length-1-a,1),21);var l=r[1]||"";for(a=0;"0"===l[a];)++a;for(t.minimumFractionDigits=Math.min(Math.max(a,0),20);"#"===l[a];)++a;t.maximumFractionDigits=Math.min(Math.max(a,0),20)}return t}},parseDatePattern:function(e){if(e){for(var t={},i=0;i<e.length;){for(var s=e[i],n=1;e[++i]===s;)++n;switch(s){case"G":t.era=5===n?Ds:4===n?Is:Ms;break;case"y":case"Y":t.year=2===n?Rs:Vs;break;case"M":case"L":n=Math.min(Math.max(n-1,0),4),t.month=[Vs,Rs,Ms,Is,Ds][n];break;case"E":case"e":case"c":t.weekday=5===n?Ds:4===n?Is:Ms;break;case"d":case"D":t.day=2===n?Rs:Vs;break;case"h":case"K":t.hour12=!0,t.hour=2===n?Rs:Vs;break;case"H":case"k":t.hour12=!1,t.hour=2===n?Rs:Vs;break;case"m":t.minute=2===n?Rs:Vs;break;case"s":case"S":t.second=2===n?Rs:Vs;break;case"z":case"Z":case"v":case"V":t.timeZoneName=1===n?Ms:Is}}return Object.keys(t).length?t:void 0}}},zs="zero",Bs="one",Us="two",qs="few",Hs="many",Ws="other",js=[function(e){return 1===+e?Bs:Ws},function(e){var t=+e;return 0<=t&&t<=1?Bs:Ws},function(e){return 0===Math.floor(Math.abs(+e))||1===+e?Bs:Ws},function(e){var t=+e;return 0===t?zs:1===t?Bs:2===t?Us:3<=t%100&&t%100<=10?qs:11<=t%100&&t%100<=99?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 1===t&&0===i?Bs:Ws},function(e){var t=+e;return t%10==1&&t%100!=11?Bs:2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?qs:t%10==0||5<=t%10&&t%10<=9||11<=t%100&&t%100<=14?Hs:Ws},function(e){var t=+e;return t%10==1&&t%100!=11&&t%100!=71&&t%100!=91?Bs:t%10==2&&t%100!=12&&t%100!=72&&t%100!=92?Us:(3<=t%10&&t%10<=4||t%10==9)&&(t%100<10||19<t%100)&&(t%100<70||79<t%100)&&(t%100<90||99<t%100)?qs:0!==t&&t%1e6==0?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&t%10==1&&t%100!=11||s%10==1&&s%100!=11?Bs:0===i&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)||2<=s%10&&s%10<=4&&(s%100<12||14<s%100)?qs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 1===t&&0===i?Bs:2<=t&&t<=4&&0===i?qs:0!==i?Hs:Ws},function(e){var t=+e;return 0===t?zs:1===t?Bs:2===t?Us:3===t?qs:6===t?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 1===+e||0!==i&&(0===t||1===t)?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&t%100==1||s%100==1?Bs:0===i&&t%100==2||s%100==2?Us:0===i&&3<=t%100&&t%100<=4||3<=s%100&&s%100<=4?qs:Ws},function(e){var t=Math.floor(Math.abs(+e));return 0===t||1===t?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&(1===t||2===t||3===t)||0===i&&t%10!=4&&t%10!=6&&t%10!=9||0!==i&&s%10!=4&&s%10!=6&&s%10!=9?Bs:Ws},function(e){var t=+e;return 1===t?Bs:2===t?Us:3<=t&&t<=6?qs:7<=t&&t<=10?Hs:Ws},function(e){var t=+e;return 1===t||11===t?Bs:2===t||12===t?Us:3<=t&&t<=10||13<=t&&t<=19?qs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 0===i&&t%10==1?Bs:0===i&&t%10==2?Us:0!==i||t%100!=0&&t%100!=20&&t%100!=40&&t%100!=60&&t%100!=80?0!==i?Hs:Ws:qs},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+e;return 1===t&&0===i?Bs:2===t&&0===i?Us:0===i&&(s<0||10<s)&&s%10==0?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 0===i&&t%10==1&&t%100!=11||0!==i?Bs:Ws},function(e){var t=+e;return 1===t?Bs:2===t?Us:Ws},function(e){var t=+e;return 0===t?zs:1===t?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=+e;return 0===i?zs:0!==t&&1!==t||0===i?Ws:Bs},function(e){var t=+(e+".").split(".")[1],i=+e;return i%10==1&&(i%100<11||19<i%100)?Bs:2<=i%10&&i%10<=9&&(i%100<11||19<i%100)?qs:0!==t?Hs:Ws},function(e){var t=(e+".").split(".")[1].length,i=+(e+".").split(".")[1],s=+e;return s%10==0||11<=s%100&&s%100<=19||2===t&&11<=i%100&&i%100<=19?zs:s%10==1&&s%100!=11||2===t&&i%10==1&&i%100!=11||2!==t&&i%10==1?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&t%10==1&&t%100!=11||s%10==1&&s%100!=11?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+e;return 1===t&&0===i?Bs:0!==i||0===s||1!==s&&1<=s%100&&s%100<=19?qs:Ws},function(e){var t=+e;return 1===t?Bs:0===t||2<=t%100&&t%100<=10?qs:11<=t%100&&t%100<=19?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 1===t&&0===i?Bs:0===i&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?qs:0===i&&1!==t&&0<=t%10&&t%10<=1||0===i&&5<=t%10&&t%10<=9||0===i&&12<=t%100&&t%100<=14?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e));return 0<=t&&t<=1?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 0===i&&t%10==1&&t%100!=11?Bs:0===i&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?qs:0===i&&t%10==0||0===i&&5<=t%10&&t%10<=9||0===i&&11<=t%100&&t%100<=14?Hs:Ws},function(e){var t=+e;return 0===Math.floor(Math.abs(+e))||1===t?Bs:2<=t&&t<=10?qs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=+(e+".").split(".")[1],s=+e;return 0===s||1===s||0===t&&1===i?Bs:Ws},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 0===i&&t%100==1?Bs:0===i&&t%100==2?Us:0===i&&3<=t%100&&t%100<=4||0!==i?qs:Ws},function(e){var t=+e;return 0<=t&&t<=1||11<=t&&t<=99?Bs:Ws},function(e){var t=+e;return 1===t||5===t||7===t||8===t||9===t||10===t?Bs:2===t||3===t?Us:4===t?qs:6===t?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e));return t%10==1||t%10==2||t%10==5||t%10==7||t%10==8||t%100==20||t%100==50||t%100==70||t%100==80?Bs:t%10==3||t%10==4||t%1e3==100||t%1e3==200||t%1e3==300||t%1e3==400||t%1e3==500||t%1e3==600||t%1e3==700||t%1e3==800||t%1e3==900?qs:0===t||t%10==6||t%100==40||t%100==60||t%100==90?Hs:Ws},function(e){var t=+e;return t%10!=2&&t%10!=3||t%100==12||t%100==13?Ws:qs},function(e){var t=+e;return 1===t||3===t?Bs:2===t?Us:4===t?qs:Ws},function(e){var t=+e;return 0===t||7===t||8===t||9===t?zs:1===t?Bs:2===t?Us:3===t||4===t?qs:5===t||6===t?Hs:Ws},function(e){var t=+e;return t%10==1&&t%100!=11?Bs:t%10==2&&t%100!=12?Us:t%10==3&&t%100!=13?qs:Ws},function(e){var t=+e;return 1===t||11===t?Bs:2===t||12===t?Us:3===t||13===t?qs:Ws},function(e){var t=+e;return 1===t?Bs:2===t||3===t?Us:4===t?qs:6===t?Hs:Ws},function(e){var t=+e;return 1===t||5===t?Bs:Ws},function(e){var t=+e;return 11===t||8===t||80===t||800===t?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e));return 1===t?Bs:0===t||2<=t%100&&t%100<=20||t%100==40||t%100==60||t%100==80?Hs:Ws},function(e){var t=+e;return t%10==6||t%10==9||t%10==0&&0!==t?Hs:Ws},function(e){var t=Math.floor(Math.abs(+e));return t%10==1&&t%100!=11?Bs:t%10==2&&t%100!=12?Us:t%10!=7&&t%10!=8||t%100==17||t%100==18?Ws:Hs},function(e){var t=+e;return 1===t?Bs:2===t||3===t?Us:4===t?qs:Ws},function(e){var t=+e;return 1<=t&&t<=4?Bs:Ws},function(e){var t=+e;return 1===t||5===t||7<=t&&t<=9?Bs:2===t||3===t?Us:4===t?qs:6===t?Hs:Ws},function(e){var t=+e;return 1===t?Bs:t%10==4&&t%100!=14?Hs:Ws},function(e){var t=+e;return t%10!=1&&t%10!=2||t%100==11||t%100==12?Ws:Bs},function(e){var t=+e;return t%10==6||t%10==9||10===t?qs:Ws},function(e){var t=+e;return t%10==3&&t%100!=13?qs:Ws}],Ks={af:{cardinal:js[0]},ak:{cardinal:js[1]},am:{cardinal:js[2]},ar:{cardinal:js[3]},ars:{cardinal:js[3]},as:{cardinal:js[2],ordinal:js[34]},asa:{cardinal:js[0]},ast:{cardinal:js[4]},az:{cardinal:js[0],ordinal:js[35]},be:{cardinal:js[5],ordinal:js[36]},bem:{cardinal:js[0]},bez:{cardinal:js[0]},bg:{cardinal:js[0]},bh:{cardinal:js[1]},bn:{cardinal:js[2],ordinal:js[34]},br:{cardinal:js[6]},brx:{cardinal:js[0]},bs:{cardinal:js[7]},ca:{cardinal:js[4],ordinal:js[37]},ce:{cardinal:js[0]},cgg:{cardinal:js[0]},chr:{cardinal:js[0]},ckb:{cardinal:js[0]},cs:{cardinal:js[8]},cy:{cardinal:js[9],ordinal:js[38]},da:{cardinal:js[10]},de:{cardinal:js[4]},dsb:{cardinal:js[11]},dv:{cardinal:js[0]},ee:{cardinal:js[0]},el:{cardinal:js[0]},en:{cardinal:js[4],ordinal:js[39]},eo:{cardinal:js[0]},es:{cardinal:js[0]},et:{cardinal:js[4]},eu:{cardinal:js[0]},fa:{cardinal:js[2]},ff:{cardinal:js[12]},fi:{cardinal:js[4]},fil:{cardinal:js[13],ordinal:js[0]},fo:{cardinal:js[0]},fr:{cardinal:js[12],ordinal:js[0]},fur:{cardinal:js[0]},fy:{cardinal:js[4]},ga:{cardinal:js[14],ordinal:js[0]},gd:{cardinal:js[15],ordinal:js[40]},gl:{cardinal:js[4]},gsw:{cardinal:js[0]},gu:{cardinal:js[2],ordinal:js[41]},guw:{cardinal:js[1]},gv:{cardinal:js[16]},ha:{cardinal:js[0]},haw:{cardinal:js[0]},he:{cardinal:js[17]},hi:{cardinal:js[2],ordinal:js[41]},hr:{cardinal:js[7]},hsb:{cardinal:js[11]},hu:{cardinal:js[0],ordinal:js[42]},hy:{cardinal:js[12],ordinal:js[0]},ia:{cardinal:js[4]},io:{cardinal:js[4]},is:{cardinal:js[18]},it:{cardinal:js[4],ordinal:js[43]},iu:{cardinal:js[19]},iw:{cardinal:js[17]},jgo:{cardinal:js[0]},ji:{cardinal:js[4]},jmc:{cardinal:js[0]},ka:{cardinal:js[0],ordinal:js[44]},kab:{cardinal:js[12]},kaj:{cardinal:js[0]},kcg:{cardinal:js[0]},kk:{cardinal:js[0],ordinal:js[45]},kkj:{cardinal:js[0]},kl:{cardinal:js[0]},kn:{cardinal:js[2]},ks:{cardinal:js[0]},ksb:{cardinal:js[0]},ksh:{cardinal:js[20]},ku:{cardinal:js[0]},kw:{cardinal:js[19]},ky:{cardinal:js[0]},lag:{cardinal:js[21]},lb:{cardinal:js[0]},lg:{cardinal:js[0]},ln:{cardinal:js[1]},lt:{cardinal:js[22]},lv:{cardinal:js[23]},mas:{cardinal:js[0]},mg:{cardinal:js[1]},mgo:{cardinal:js[0]},mk:{cardinal:js[24],ordinal:js[46]},ml:{cardinal:js[0]},mn:{cardinal:js[0]},mo:{cardinal:js[25],ordinal:js[0]},mr:{cardinal:js[2],ordinal:js[47]},mt:{cardinal:js[26]},nah:{cardinal:js[0]},naq:{cardinal:js[19]},nb:{cardinal:js[0]},nd:{cardinal:js[0]},ne:{cardinal:js[0],ordinal:js[48]},nl:{cardinal:js[4]},nn:{cardinal:js[0]},nnh:{cardinal:js[0]},no:{cardinal:js[0]},nr:{cardinal:js[0]},nso:{cardinal:js[1]},ny:{cardinal:js[0]},nyn:{cardinal:js[0]},om:{cardinal:js[0]},or:{cardinal:js[0],ordinal:js[49]},os:{cardinal:js[0]},pa:{cardinal:js[1]},pap:{cardinal:js[0]},pl:{cardinal:js[27]},prg:{cardinal:js[23]},ps:{cardinal:js[0]},pt:{cardinal:js[28]},"pt-PT":{cardinal:js[4]},rm:{cardinal:js[0]},ro:{cardinal:js[25],ordinal:js[0]},rof:{cardinal:js[0]},ru:{cardinal:js[29]},rwk:{cardinal:js[0]},saq:{cardinal:js[0]},sc:{cardinal:js[4],ordinal:js[43]},scn:{cardinal:js[4],ordinal:js[43]},sd:{cardinal:js[0]},sdh:{cardinal:js[0]},se:{cardinal:js[19]},seh:{cardinal:js[0]},sh:{cardinal:js[7]},shi:{cardinal:js[30]},si:{cardinal:js[31]},sk:{cardinal:js[8]},sl:{cardinal:js[32]},sma:{cardinal:js[19]},smi:{cardinal:js[19]},smj:{cardinal:js[19]},smn:{cardinal:js[19]},sms:{cardinal:js[19]},sn:{cardinal:js[0]},so:{cardinal:js[0]},sq:{cardinal:js[0],ordinal:js[50]},sr:{cardinal:js[7]},ss:{cardinal:js[0]},ssy:{cardinal:js[0]},st:{cardinal:js[0]},sv:{cardinal:js[4],ordinal:js[51]},sw:{cardinal:js[4]},syr:{cardinal:js[0]},ta:{cardinal:js[0]},te:{cardinal:js[0]},teo:{cardinal:js[0]},ti:{cardinal:js[1]},tig:{cardinal:js[0]},tk:{cardinal:js[0],ordinal:js[52]},tl:{cardinal:js[13],ordinal:js[0]},tn:{cardinal:js[0]},tr:{cardinal:js[0]},ts:{cardinal:js[0]},tzm:{cardinal:js[33]},ug:{cardinal:js[0]},uk:{cardinal:js[29],ordinal:js[53]},ur:{cardinal:js[4]},uz:{cardinal:js[0]},ve:{cardinal:js[0]},vo:{cardinal:js[0]},vun:{cardinal:js[0]},wa:{cardinal:js[1]},wae:{cardinal:js[0]},xh:{cardinal:js[0]},xog:{cardinal:js[0]},yi:{cardinal:js[4]},zu:{cardinal:js[2]},lo:{ordinal:js[0]},ms:{ordinal:js[0]},vi:{ordinal:js[0]}},Gs=Fs(function(e,t){function i(e,t,n,r,o){var a=e.map(function(e){return function(e,t,n,r,o){if("string"==typeof e){var a=e;return function(){return a}}var d,c=e[0],h=e[1];if(t&&"#"===e[0]){c=t[0];var u=t[2],p=(r.number||l.number)([c,"number"],n);return function(e){return p(s(c,e)-u,e)}}"plural"===h||"selectordinal"===h?(d={},Object.keys(e[3]).forEach(function(t){d[t]=i(e[3][t],e,n,r,o)}),e=[e[0],e[1],e[2],d]):e[2]&&"object"==typeof e[2]&&(d={},Object.keys(e[2]).forEach(function(t){d[t]=i(e[2][t],e,n,r,o)}),e=[e[0],e[1],d]);var m=h&&(r[h]||l[h]);if(m){var f=m(e,n);return function(e){return f(s(c,e),e)}}return o?function(e){return String(s(c,e))}:function(e){return s(c,e)}}(e,t,n,r,o)});return o?1===a.length?a[0]:function(e){for(var t="",i=0;i<a.length;++i)t+=a[i](e);return t}:function(e){return a.reduce(function(t,i){return t.concat(i(e))},[])}}function s(e,t){if(t&&e in t)return t[e];for(var i=e.split("."),s=t,n=0,r=i.length;s&&n<r;++n)s=s[i[n]];return s}function n(e,t){var i=e[2],s=Ps.number[i]||Ps.parseNumberPattern(i)||Ps.number.default;return new Intl.NumberFormat(t,s).format}function r(e,t){var i=e[1],s=e[2],n=Ps[i][s]||Ps.parseDatePattern(s)||Ps[i].default;return new Intl.DateTimeFormat(t,n).format}function o(e,t){var i,s="selectordinal"===e[1]?"ordinal":"cardinal",n=e[2],r=e[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(t).length>0)i=new Intl.PluralRules(t,{type:s});else{var o=function(e,t){if("string"==typeof e&&t[e])return e;for(var i=[].concat(e||[]),s=0,n=i.length;s<n;++s)for(var r=i[s].split("-");r.length;){var o=r.join("-");if(t[o])return o;r.pop()}}(t,Ks),l=o&&Ks[o][s]||a;i={select:l}}return function(e,t){return(r["="+ +e]||r[i.select(e-n)]||r.other)(t)}}function a(){return"other"}(t=e.exports=function(e,t,s){return i(e,null,t||"en",s||{},!0)}).toParts=function(e,t,s){return i(e,null,t||"en",s||{},!1)};var l={number:n,ordinal:n,spellout:n,duration:function(e,t){var i=e[2],s=Ps.duration[i]||Ps.duration.default,n=new Intl.NumberFormat(t,s.seconds).format,r=new Intl.NumberFormat(t,s.minutes).format,o=new Intl.NumberFormat(t,s.hours).format,a=/^fi$|^fi-|^da/.test(String(t))?".":":";return function(e,t){if(e=+e,!isFinite(e))return n(e);var i=~~(e/60/60),s=~~(e/60%60),l=(i?o(Math.abs(i))+a:"")+r(Math.abs(s))+a+n(Math.abs(e%60));return e<0?o(-1).replace(o(1),l):l}},date:r,time:r,plural:o,selectordinal:o,select:function(e,t){var i=e[2];return function(e,t){return(i[e]||i.other)(t)}}};t.types=l}),Zs=(Gs.toParts,Gs.types,Fs(function(e,t){var i="{",s="}",n=",",r="#",o="<",a=">",l="</",d="'",c=["number","date","time","ordinal","duration","spellout"],h=["plural","select","selectordinal"];function u(e,t){var i=e.pattern,n=i.length,r=[],o=e.index,a=p(e,t);for(a&&r.push(a),a&&e.tokens&&e.tokens.push(["text",i.slice(o,e.index)]);e.index<n;){if(i[e.index]===s){if(!t)throw k(e);break}if(t&&e.tagsType&&i.slice(e.index,e.index+2)===l)break;r.push(_(e)),o=e.index,(a=p(e,t))&&r.push(a),a&&e.tokens&&e.tokens.push(["text",i.slice(o,e.index)])}return r}function p(e,t){for(var n=e.pattern,a=n.length,l="plural"===t||"selectordinal"===t,c=!!e.tagsType,h="{style}"===t,u="";e.index<a;){var p=n[e.index];if(p===i||p===s||l&&p===r||c&&p===o||h&&m(p.charCodeAt(0)))break;if(p===d)if((p=n[++e.index])===d)u+=p,++e.index;else if(p===i||p===s||l&&p===r||c&&p===o||h)for(u+=p;++e.index<a;)if((p=n[e.index])===d&&n[e.index+1]===d)u+=d,++e.index;else{if(p===d){++e.index;break}u+=p}else u+=d;else u+=p,++e.index}return u}function m(e){return e>=9&&e<=13||32===e||133===e||160===e||6158===e||e>=8192&&e<=8205||8232===e||8233===e||8239===e||8287===e||8288===e||12288===e||65279===e}function f(e){for(var t=e.pattern,i=t.length,s=e.index;e.index<i&&m(t.charCodeAt(e.index));)++e.index;s<e.index&&e.tokens&&e.tokens.push(["space",e.pattern.slice(s,e.index)])}function _(e){var t=e.pattern;if(t[e.index]===r)return e.tokens&&e.tokens.push(["syntax",r]),++e.index,[r];var d=function(e){var t=e.tagsType;if(t&&e.pattern[e.index]===o){if(e.pattern.slice(e.index,e.index+2)===l)throw k(e,null,"closing tag without matching opening tag");e.tokens&&e.tokens.push(["syntax",o]),++e.index;var i=b(e,!0);if(!i)throw k(e,"placeholder id");if(e.tokens&&e.tokens.push(["id",i]),f(e),"/>"===e.pattern.slice(e.index,e.index+2))return e.tokens&&e.tokens.push(["syntax","/>"]),e.index+=2,[i,t];if(e.pattern[e.index]!==a)throw k(e,a);e.tokens&&e.tokens.push(["syntax",a]),++e.index;var s=u(e,t),n=e.index;if(e.pattern.slice(e.index,e.index+2)!==l)throw k(e,l+i+a);e.tokens&&e.tokens.push(["syntax",l]),e.index+=2;var r=b(e,!0);if(r&&e.tokens&&e.tokens.push(["id",r]),i!==r)throw e.index=n,k(e,l+i+a,l+r+a);if(f(e),e.pattern[e.index]!==a)throw k(e,a);return e.tokens&&e.tokens.push(["syntax",a]),++e.index,[i,t,{children:s}]}}(e);if(d)return d;if(t[e.index]!==i)throw k(e,i);e.tokens&&e.tokens.push(["syntax",i]),++e.index,f(e);var h=b(e);if(!h)throw k(e,"placeholder id");e.tokens&&e.tokens.push(["id",h]),f(e);var p=t[e.index];if(p===s)return e.tokens&&e.tokens.push(["syntax",s]),++e.index,[h];if(p!==n)throw k(e,", or }");e.tokens&&e.tokens.push(["syntax",n]),++e.index,f(e);var m,_=b(e);if(!_)throw k(e,"placeholder type");if(e.tokens&&e.tokens.push(["type",_]),f(e),(p=t[e.index])===s){if(e.tokens&&e.tokens.push(["syntax",s]),"plural"===_||"selectordinal"===_||"select"===_)throw k(e,_+" sub-messages");return++e.index,[h,_]}if(p!==n)throw k(e,", or }");if(e.tokens&&e.tokens.push(["syntax",n]),++e.index,f(e),"plural"===_||"selectordinal"===_){var w=function(e){var t=e.pattern,i=t.length,s=0;if("offset:"===t.slice(e.index,e.index+7)){e.tokens&&e.tokens.push(["offset","offset"],["syntax",":"]),e.index+=7,f(e);for(var n=e.index;e.index<i&&v(t.charCodeAt(e.index));)++e.index;if(n===e.index)throw k(e,"offset number");e.tokens&&e.tokens.push(["number",t.slice(n,e.index)]),s=+t.slice(n,e.index)}return s}(e);f(e),m=[h,_,w,y(e,_)]}else if("select"===_)m=[h,_,y(e,_)];else if(c.indexOf(_)>=0)m=[h,_,g(e)];else{var x=e.index,C=g(e);f(e),t[e.index]===i&&(e.index=x,C=y(e,_)),m=[h,_,C]}if(f(e),t[e.index]!==s)throw k(e,s);return e.tokens&&e.tokens.push(["syntax",s]),++e.index,m}function b(e,t){for(var l=e.pattern,c=l.length,h="";e.index<c;){var u=l[e.index];if(u===i||u===s||u===n||u===r||u===d||m(u.charCodeAt(0))||t&&(u===o||u===a||"/"===u))break;h+=u,++e.index}return h}function g(e){var t=e.index,i=p(e,"{style}");if(!i)throw k(e,"placeholder style name");return e.tokens&&e.tokens.push(["style",e.pattern.slice(t,e.index)]),i}function v(e){return e>=48&&e<=57}function y(e,t){for(var i=e.pattern,n=i.length,r={};e.index<n&&i[e.index]!==s;){var o=b(e);if(!o)throw k(e,"sub-message selector");e.tokens&&e.tokens.push(["selector",o]),f(e),r[o]=w(e,t),f(e)}if(!r.other&&h.indexOf(t)>=0)throw k(e,null,null,'"other" sub-message must be specified in '+t);return r}function w(e,t){if(e.pattern[e.index]!==i)throw k(e,"{ to start sub-message");e.tokens&&e.tokens.push(["syntax",i]),++e.index;var n=u(e,t);if(e.pattern[e.index]!==s)throw k(e,"} to end sub-message");return e.tokens&&e.tokens.push(["syntax",s]),++e.index,n}function k(e,t,i,s){var n=e.pattern,r=n.slice(0,e.index).split(/\r?\n/),o=e.index,a=r.length,l=r.slice(-1)[0].length;return i=i||(e.index>=n.length?"end of message pattern":b(e)||n[e.index]),s||(s=function(e,t){return e?"Expected "+e+" but found "+t:"Unexpected "+t+" found"}(t,i)),new x(s+=" in "+n.replace(/\r?\n/g,"\n"),t,i,o,a,l)}function x(e,t,i,s,n,r){Error.call(this,e),this.name="SyntaxError",this.message=e,this.expected=t,this.found=i,this.offset=s,this.line=n,this.column=r}t=e.exports=function(e,t){return u({pattern:String(e),index:0,tagsType:t&&t.tagsType||null,tokens:t&&t.tokens||null},"")},x.prototype=Object.create(Error.prototype),t.SyntaxError=x})),Ys=(Zs.SyntaxError,new RegExp("^("+Object.keys(Ks).join("|")+")\\b")),Js=new WeakMap;function Xs(e,t,i){if(!(this instanceof Xs)||Js.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var s=Zs(e);Js.set(this,{ast:s,format:Gs(s,t,i&&i.types),locale:Xs.supportedLocalesOf(t)[0]||"en",locales:t,options:i})}var Qs=Xs;Object.defineProperties(Xs.prototype,{format:{configurable:!0,get:function(){var e=Js.get(this);if(!e)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=Js.get(this);if(!t)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");return(t.toParts||(t.toParts=Gs.toParts(t.ast,t.locales,t.options&&t.options.types)))(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=Js.get(this);if(!e)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:e.locale}}}}),"undefined"!=typeof Symbol&&Object.defineProperty(Xs.prototype,Symbol.toStringTag,{value:"Object"}),Object.defineProperties(Xs,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(e){return Ys.test(e)})).filter(function(e,t,i){return i.indexOf(e)===t})}}});var en=Qs;const tn=globalThis.document?.documentElement;class sn extends EventTarget{formatNumberOptions={returnIfNaN:"",postProcessors:new Map};formatDateOptions={postProcessors:new Map};#h=!1;#u="";#p=null;__storage={};__namespacePatternsMap=new Map;__namespaceLoadersCache={};__namespaceLoaderPromisesCache={};get locale(){return this.#h?this.#u||"":tn.lang||""}set locale(e){if(this.#m(e),!this.#h){const t=tn.lang;return this._setHtmlLangAttribute(e),void this._onLocaleChanged(e,t)}const t=this.#u;this.#u=e,null===this.#p&&this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t)}get loadingComplete(){return"object"==typeof this.__namespaceLoaderPromisesCache[this.locale]?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}constructor({allowOverridesForExistingNamespaces:e=!1,autoLoadOnLocaleChange:t=!1,showKeyAsFallback:i=!1,fallbackLocale:s=""}={}){super(),this.__allowOverridesForExistingNamespaces=e,this._autoLoadOnLocaleChange=!!t,this._showKeyAsFallback=i,this._fallbackLocale=s;const n=tn.getAttribute("data-localize-lang");this.#h=Boolean(n),this.#h&&(this.locale=n,this._setupTranslationToolSupport()),tn.lang||(tn.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}addData(e,t,i){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(e,t))throw new Error(`Namespace "${t}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__allowOverridesForExistingNamespaces?this.__storage[e][t]={...this.__storage[e][t],...i}:this.__storage[e][t]=i}setupNamespaceLoader(e,t){this.__namespacePatternsMap.set(e,t)}loadNamespaces(e,{locale:t}={}){return Promise.all(e.map(e=>this.loadNamespace(e,{locale:t})))}loadNamespace(e,{locale:t=this.locale}={locale:this.locale}){const i="object"==typeof e,s=i?Object.keys(e)[0]:e;if(this._isNamespaceInCache(t,s))return Promise.resolve();return this._getCachedNamespaceLoaderPromise(t,s)||this._loadNamespaceData(t,e,i,s)}msg(e,t,i={}){const s=i.locale?i.locale:this.locale,n=this._getMessageForKeys(e,s);return n?new en(n,s).format(t):""}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:e,postProcessor:t}){this.formatDateOptions?.postProcessors.set(e,t)}setNumberPostProcessorForLocale({locale:e,postProcessor:t}){this.formatNumberOptions?.postProcessors.set(e,t)}_setupTranslationToolSupport(){this.#p=tn.lang||null}_setHtmlLangAttribute(e){this._teardownHtmlLangAttributeObserver(),tn.lang=e,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(e=>{e.forEach(e=>{this.#h?"auto"===tn.lang?(this.#p=null,this._setHtmlLangAttribute(this.locale)):this.#p=document.documentElement.lang:this._onLocaleChanged(document.documentElement.lang,e.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,t){return!(!this.__storage[e]||!this.__storage[e][t])}_getCachedNamespaceLoaderPromise(e,t){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][t]:null}_loadNamespaceData(e,t,i,s){const n=this._getNamespaceLoader(t,i,s),r=this._getNamespaceLoaderPromise(n,e,s);return this._cacheNamespaceLoaderPromise(e,s,r),r.then(t=>{if(this.__namespaceLoaderPromisesCache[e]&&this.__namespaceLoaderPromisesCache[e][s]===r){const i=function(e){return!(!e||!e.default||"object"!=typeof e.default||1!==Object.keys(e).length)}(t)?t.default:t;this.addData(e,s,i)}})}_getNamespaceLoader(e,t,i){let s=this.__namespaceLoadersCache[i];if(s||(t?(s=e[i],this.__namespaceLoadersCache[i]=s):(s=this._lookupNamespaceLoader(i),this.__namespaceLoadersCache[i]=s)),!s)throw new Error(`Namespace "${i}" was not properly setup.`);return this.__namespaceLoadersCache[i]=s,s}_getNamespaceLoaderPromise(e,t,i,s=this._fallbackLocale){return e(t,i).catch(()=>{const n=this._getLangFromLocale(t);return e(n,i).catch(()=>{if(s)return this._getNamespaceLoaderPromise(e,s,i,"").catch(()=>{const e=this._getLangFromLocale(s);throw new Error(`Data for namespace "${i}" and current locale "${t}" or fallback locale "${s}" could not be loaded. Make sure you have data either for locale "${t}" (and/or generic language "${n}") or for fallback "${s}" (and/or "${e}").`)});throw new Error(`Data for namespace "${i}" and locale "${t}" could not be loaded. Make sure you have data for locale "${t}" (and/or generic language "${n}").`)})})}_cacheNamespaceLoaderPromise(e,t,i){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][t]=i}_lookupNamespaceLoader(e){for(const[t,i]of this.__namespacePatternsMap){const s="string"==typeof t&&t===e,n="object"==typeof t&&"RegExp"===t.constructor.name&&t.test(e);if(s||n)return i}return null}_getLangFromLocale(e){return e.substring(0,2)}_onLocaleChanged(e,t){this.dispatchEvent(new CustomEvent("__localeChanging")),e!==t&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(e,t),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:t}}))})):this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:t}})))}_loadAllMissing(e,t){const i=this.__storage[t]||{},s=this.__storage[e]||{};Object.keys(i).forEach(t=>{s[t]||this.loadNamespace(t,{locale:e})})}_getMessageForKeys(e,t){if("string"==typeof e)return this._getMessageForKey(e,t);const i=Array.from(e).reverse();let s,n;for(;i.length;)if(s=i.pop(),n=this._getMessageForKey(s,t),n)return n}_getMessageForKey(e,t){if(!e||-1===e.indexOf(":"))throw new Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);const[i,s]=e.split(":"),n=this.__storage[t],r=n?n[i]:{},o=s.split(".").reduce((e,t)=>"object"==typeof e?e[t]:e,r);return String(o||(this._showKeyAsFallback?e:""))}#m(e){if(!e.includes("-"))throw new Error(`\n      Locale was set to ${e}.\n      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.\n      See https://github.com/ing-bank/lion/issues/187 for more information.\n    `)}get _supportExternalTranslationTools(){return this.#h}set _supportExternalTranslationTools(e){this.#h=e}get _langAttrSetByTranslationTool(){return this.#u}set _langAttrSetByTranslationTool(e){this.#u=e}}function nn(){if(!ut.has("@lion/ui::localize::0.x")){const e=new sn({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});ut.set("@lion/ui::localize::0.x",e)}return ut.get("@lion/ui::localize::0.x")}function rn(){return ht(nn)}const on="3.0.0",an=window.scopedElementsVersions||(window.scopedElementsVersions=[]);an.includes(on)||an.push(on);const ln=lt(e=>class extends e{static scopedElements;static get scopedElementsVersion(){return on}static __registry;get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}attachShadow(e){const{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[e,i]of Object.entries(t??{}))this.registry.define(e,i)}return super.attachShadow({...e,customElements:this.registry,registry:this.registry})}}),dn=lt(e=>class extends(ln(e)){createRenderRoot(){const{shadowRootOptions:e,elementStyles:t}=this.constructor,i=this.attachShadow(e);return this.renderOptions.creationScope=i,y(i,t),this.renderOptions.renderBefore??=i.firstChild,i}});function cn(){return Boolean(globalThis.ShadowRoot?.prototype.createElement&&globalThis.ShadowRoot?.prototype.importNode)}const hn=lt(e=>class extends(dn(e)){constructor(){super()}createScopedElement(e){return(cn()?this.shadowRoot:document).createElement(e)}defineScopedElement(e,t){const i=this.registry.get(e),s=i&&i!==t;return!cn()&&s&&console.error([`You are trying to re-register the "${e}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join("\n")),i?this.registry.get(e):this.registry.define(e,t)}attachShadow(e){const{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=cn()?new CustomElementRegistry:customElements;for(const[e,i]of Object.entries(t??{}))this.defineScopedElement(e,i)}return Element.prototype.attachShadow.call(this,{...e,customElements:this.registry,registry:this.registry})}createRenderRoot(){const{shadowRootOptions:e,elementStyles:t}=this.constructor,i=this.attachShadow(e);return cn()&&(this.renderOptions.creationScope=i),i instanceof ShadowRoot&&(y(i,t),this.renderOptions.renderBefore=this.renderOptions.renderBefore||i.firstChild),i}});class un{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}}const pn=lt(e=>class extends e{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(e){super.firstUpdated(e),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];static __syncUpdatableHasChanged(e,t,i){const s=this.elementProperties;return s.get(e)&&s.get(e).hasChanged?s.get(e).hasChanged(t,i):t!==i}__syncUpdatableInitialize(){const e=this.__SyncUpdatableNamespace,t=this.constructor;e.initialized=!0,e.queue&&Array.from(e.queue).forEach(e=>{t.__syncUpdatableHasChanged(e,this[e],void 0)&&this.updateSync(e,void 0)})}requestUpdate(e,t,i){if(super.requestUpdate(e,t,i),void 0===e)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const s=this.__SyncUpdatableNamespace,n=this.constructor;s.initialized?n.__syncUpdatableHasChanged(e,this[e],t)&&this.updateSync(e,t):(s.queue=s.queue||new Set,s.queue.add(e))}updateSync(e,t){}}),mn=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),mn(e,t);return!0},fn=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},_n=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),vn(t)}};function bn(e){void 0!==this._$AN?(fn(this),this._$AM=e,_n(this)):this._$AM=e}function gn(e,t=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(s))for(let e=i;e<s.length;e++)mn(s[e],!1),fn(s[e]);else null!=s&&(mn(s,!1),fn(s));else mn(this,e)}const vn=e=>{2==e.type&&(e._$AP??=gn,e._$AQ??=bn)};class yn extends Be{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),_n(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(mn(this,e),fn(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class wn{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class kn{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const xn=e=>{return!(t=e,null===t||"object"!=typeof t&&"function"!=typeof t||"function"!=typeof e.then);var t},Cn=1073741823,En=ze(class extends yn{constructor(){super(...arguments),this._$Cwt=Cn,this._$Cbt=[],this._$CK=new wn(this),this._$CX=new kn}render(...e){return e.find(e=>!xn(e))??re}update(e,t){const i=this._$Cbt;let s=i.length;this._$Cbt=t;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!xn(o))return this._$Cwt=e,o;e<s&&o===i[e]||(this._$Cwt=Cn,s=0,Promise.resolve(o).then(async e=>{for(;r.get();)await r.get();const t=n.deref();if(void 0!==t){const i=t._$Cbt.indexOf(o);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return re}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Nn=lt(e=>class extends e{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=rn(),this.__boundLocalizeOnLocaleChanged=(...e)=>{const t=Array.from(e)[0];this.__localizeOnLocaleChanged(t)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}msgLit(e,t,i){return this.__localizeMessageSync?this._localizeManager.msg(e,t,i):this.localizeNamespacesLoaded?En(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(e,t,i)),oe):""}__getUniqueNamespaces(){const e=[],t=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(t.add.bind(t)),t.forEach(t=>{e.push(t)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(e,t){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}}),An=e=>{switch(e){case"bg-BG":return i.e(6952).then(i.bind(i,6952));case"bg":return i.e(2038).then(i.bind(i,2038));case"cs-CZ":return i.e(1645).then(i.bind(i,1645));case"cs":return i.e(167).then(i.bind(i,167));case"de-DE":return i.e(7472).then(i.bind(i,7472));case"de":return i.e(3902).then(i.bind(i,3902));case"en-AU":return i.e(6617).then(i.bind(i,6617));case"en-GB":return i.e(2922).then(i.bind(i,2922));case"en-US":return i.e(3055).then(i.bind(i,3055));case"en-PH":case"en":default:return i.e(3474).then(i.bind(i,3474));case"es-ES":return i.e(8722).then(i.bind(i,8722));case"es":return i.e(2437).then(i.bind(i,2437));case"fr-FR":return i.e(7426).then(i.bind(i,7426));case"fr-BE":return i.e(4487).then(i.bind(i,4487));case"fr":return i.e(2637).then(i.bind(i,2637));case"hu-HU":return i.e(8160).then(i.bind(i,8160));case"hu":return i.e(9770).then(i.bind(i,9770));case"it-IT":return i.e(1144).then(i.bind(i,1144));case"it":return i.e(4332).then(i.bind(i,4332));case"nl-BE":return i.e(3585).then(i.bind(i,3585));case"nl-NL":return i.e(6102).then(i.bind(i,6102));case"nl":return i.e(6559).then(i.bind(i,6559));case"pl-PL":return i.e(5598).then(i.bind(i,5598));case"pl":return i.e(1593).then(i.bind(i,1593));case"ro-RO":return i.e(4504).then(i.bind(i,4504));case"ro":return i.e(3566).then(i.bind(i,3566));case"ru-RU":return i.e(9944).then(i.bind(i,9944));case"ru":return i.e(2028).then(i.bind(i,2028));case"sk-SK":return i.e(8742).then(i.bind(i,8742));case"sk":return i.e(1967).then(i.bind(i,1967));case"tr-TR":return i.e(2722).then(i.bind(i,2722));case"tr":return i.e(767).then(i.bind(i,767));case"uk-UA":return i.e(5600).then(i.bind(i,5600));case"uk":return i.e(7229).then(i.bind(i,7229));case"zh-CN":case"zh":return i.e(7831).then(i.bind(i,7831))}};class Sn extends(Nn(Ce)){static get properties(){return{feedbackData:{attribute:!1}}}static localizeNamespaces=[{"lion-form-core":An},...super.localizeNamespaces];static get styles(){return[v`
        .validation-feedback__type {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):"success"!==this.currentType&&this.removeAttribute("type")}render(){return ne`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:i})=>{return ne`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg("lion-form-core:validation"+(s=t,`${s[0].toUpperCase()}${s.slice(1)}`)):oe}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:i})}
        `;var s})}
    `}}function $n(e=[],t=[]){return e.filter(e=>!t.includes(e)).concat(t.filter(t=>!e.includes(t)))}const Tn=lt(e=>class extends($s(pn(ki(Cs(hn(e)))))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Sn}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:e=>e.split(","),toAttribute:e=>e.join(",")}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return["error"]}get operationMode(){return"enter"}get slots(){return{...super.slots,feedback:()=>{const e=this.createScopedElement("lion-validation-feedback");return e.setAttribute("data-tag-name","lion-validation-feedback"),e}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),rn().addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),rn().removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(e){super.firstUpdated(e),this.__isValidateInitialized=!0,this.validate(),"child"!==this._repropagationRole&&this.addEventListener("model-value-changed",()=>{this.__childModelValueChanged=!0})}updateSync(e,t){if(super.updateSync(e,t),"validators"===e?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):"modelValue"===e&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","focused","submitted","hasFeedbackFor","filled"].includes(e)&&this._updateShouldShowFeedbackFor(),"showsFeedbackFor"===e){this._inputNode&&this._inputNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`);const e=$n(this.showsFeedbackFor,t);e.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),e.forEach(e=>{var t;this.dispatchEvent(new Event(`showsFeedbackFor${t=e,t.charAt(0).toUpperCase()+t.slice(1)}Changed`,{bubbles:!0}))})}"shouldShowFeedbackFor"===e&&$n(this.shouldShowFeedbackFor,t).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}async validate({clearCurrentResult:e=!1}={}){if(this.validateComplete=new Promise(e=>{this.__validateCompleteResolve=e}),this.disabled||this.readOnly)return this.__clearValidationResults(),this.__finishValidationPass(),void this._updateFeedbackComponent();this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,e&&this.__clearValidationResults(),await this.__executeValidators())}#f(e){let t=e;for(;t;){if("Required"===t.constructor.validatorName)return!0;t=Object.getPrototypeOf(t)}return!1}async __executeValidators(){const e=(t=this.modelValue)instanceof As?t.viewValue:t;var t;const i=this.__isEmpty(e);if(this.__syncValidationResult=[],i){const e=!this._isFormOrFieldset,t=this._allValidators.find(e=>"Required"===e.constructor?.validatorName);if(t&&(this.__syncValidationResult=[{validator:t,outcome:!0}]),e)return void this.__finishValidationPass({syncValidationResult:this.__syncValidationResult})}const s=[],n=[],r=[];for(const e of this._allValidators)e?.executeOnResults?s.push(e):this.#f(e)||(e.constructor.async?r.push(e):n.push(e));const o=Boolean(r.length);this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(n,e)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:s}),o?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(r,e),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:s}),this.__validateCompleteResolve?.(!0)):this.__validateCompleteResolve?.(!0)}__executeSyncValidators(e,t){return e.map(e=>({validator:e,outcome:e.execute(t,e.param,{node:this})})).filter(e=>Boolean(e.outcome))}async __executeAsyncValidators(e,t){const i=e.map(e=>e.execute(t,e.param,{node:this})),s=await Promise.all(i);return s.map((t,i)=>({validator:e[i],outcome:s[i]})).filter(e=>Boolean(e.outcome))}__executeMetaValidators(e,t){return t.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):t.map(t=>({validator:t,outcome:t.executeOnResults({regularValidationResult:e.map(e=>e.validator),prevValidationResult:this.__prevValidationResult.map(e=>e.validator),prevShownValidationResult:this.__prevShownValidationResult.map(e=>e.validator)})})).filter(e=>Boolean(e.outcome)):[]}__finishValidationPass({syncValidationResult:e=[],asyncValidationResult:t=[],metaValidators:i=[]}={}){const s=[...e,...t],n=this.__executeMetaValidators(s,i);this.__validationResult=[...n,...s];const r=this.constructor.validationTypes.reduce((e,t)=>({...e,[t]:{}}),{});for(const{validator:e,outcome:t}of this.__validationResult){r[e.type]||(r[e.type]={});const i=e.constructor;r[e.type][i.validatorName]=t}this.validationStates=r,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:e})=>e.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(e){"param-changed"!==e.type&&"config-changed"!==e.type||this.validate()}__setupValidators(){const e=["param-changed","config-changed"];for(const t of this.__prevValidators||[]){for(const i of e)t.removeEventListener?.(i,this._onValidatorUpdated);t.onFormControlDisconnect(this)}for(const t of this._allValidators){if(void 0===t.constructor._$isValidator$){const e=`Validators array only accepts class instances of Validator. Type "${Array.isArray(t)?"array":typeof t}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(e,this),new Error(e)}const i=this.constructor,s=t.constructor;if(-1===i.validationTypes.indexOf(t.type)){const e=`This component does not support the validator type "${t.type}" used in "${s.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(e,this),new Error(e)}for(const i of e)t.addEventListener?.(i,e=>{this._onValidatorUpdated(e,{validator:t})});t.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(e){return"function"==typeof this._isEmpty?this._isEmpty(e):null===this.modelValue||void 0===this.modelValue||""===this.modelValue}async __getFeedbackMessages(e){let t=await this.fieldName;return Promise.all(e.map(async({validator:e,outcome:i})=>(e.config.fieldName&&(t=await e.config.fieldName),{message:await e._getMessage({modelValue:this.modelValue,formControl:this,fieldName:t,outcome:i}),type:e.type,validator:e,visibilityDuration:e.config?.visibilityDuration||3e3})))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);const{_feedbackNode:e}=this;e&&(this.__feedbackQueue||(this.__feedbackQueue=new un),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{const t=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(e=>e.validator)});this.__prioritizedResult=t.map(e=>this.__validationResult.find(t=>e===t.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);const i=await this.__getFeedbackMessages(this.__prioritizedResult);e.feedbackData=i||[],i?.[0]&&"success"===i[0].type&&i[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{e.removeAttribute("type"),e.feedbackData=[]},i[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{e.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(e,t){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(e,t=this._feedbackConditionMeta,i=this._showFeedbackConditionFor.bind(this)){return i(e,t)}_hasFeedbackVisibleFor(e){return this.hasFeedbackFor?.includes(e)&&this.shouldShowFeedbackFor?.includes(e)}updated(e){if(super.updated(e),e.has("shouldShowFeedbackFor")||e.has("hasFeedbackFor")){const e=this.constructor;this.showsFeedbackFor=e.validationTypes.map(e=>this._hasFeedbackVisibleFor(e)?e:void 0).filter(Boolean),this._updateFeedbackComponent()}if(e.has("__childModelValueChanged")&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),e.has("validationStates")){const t=e.get("validationStates");t&&Object.entries(this.validationStates).forEach(([e,i])=>{t[e]&&JSON.stringify(i)!==JSON.stringify(t[e])&&this.dispatchEvent(new CustomEvent(`${e}StateChanged`,{detail:i}))})}}_updateShouldShowFeedbackFor(){const e=this.constructor.validationTypes.map(e=>this.feedbackCondition(e,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?e:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(e)&&(this.shouldShowFeedbackFor=e)}_prioritizeAndFilterFeedback({validationResult:e}){const t=this.constructor.validationTypes,i=e.filter(e=>this.feedbackCondition(e.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((e,i)=>t.indexOf(e.type)-t.indexOf(i.type));return i.slice(0,this._visibleMessagesAmount)}}),Ln=lt(e=>class extends(Os(Tn(Ts(e)))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.choiceValue):e[0]?e[0].choiceValue:""}set modelValue(e){const t=(t,i)=>"object"==typeof t.choiceValue?JSON.stringify(t.choiceValue)===JSON.stringify(e):t.choiceValue===i;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,t),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(e,t),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.serializedValue.value):e[0]?e[0].serializedValue.value:""}set serializedValue(e){const t=(e,t)=>e.serializedValue.value===t;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,t),this.requestUpdate("serializedValue")}):(this._setCheckedElements(e,t),this.requestUpdate("serializedValue"))}get formattedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.formattedValue):e[0]?e[0].formattedValue:""}set formattedValue(e){const t=(e,t)=>e.formattedValue===t;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,t)}):this._setCheckedElements(e,t)}get operationMode(){return"choice-group"===this._repropagationRole?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has("name")&&this.name!==e.get("name")&&this.formElements.forEach(e=>{e.name=this.name})}addFormElement(e,t){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,t)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,t){return!0}_getFromAllFormElements(e,t){const i=t||this._getFromAllFormElementsFilter;if("modelValue"===e||"serializedValue"===e||"formattedValue"===e)return this[e];const s=this.formElements.filter(t=>i(t,e));return"_initialModelValue"===e?this.multipleChoice?s.filter(t=>t[e].checked).map(t=>t[e].value):s.find(t=>t[e].checked)?.value:s.map(t=>t[e])}_throwWhenInvalidChildModelValue(e){if("boolean"!=typeof e.modelValue.checked||!Object.prototype.hasOwnProperty.call(e.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?0===this.modelValue.length:"string"==typeof this.modelValue&&""===this.modelValue||void 0===this.modelValue||null===this.modelValue}_checkSingleChoiceElements(e){const{target:t}=e;if(!1===t.checked)return;const i=t.name;this.formElements.filter(e=>e.name===i).forEach(e=>{e!==t&&(e.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,t){if(null!=e)for(let i=0;i<this.formElements.length;i+=1)if(this.multipleChoice){let t=e.includes(this.formElements[i].modelValue.value);"object"==typeof this.formElements[i].modelValue.value&&(t=e.map(e=>JSON.stringify(e)).includes(JSON.stringify(this.formElements[i].modelValue.value))),this.formElements[i].checked=t}else t(this.formElements[i],e)?this.formElements[i].checked=!0:this.formElements[i].checked=!1;else this.formElements.forEach(e=>e.checked=!1)}__setChoiceGroupTouched(){const e=this.modelValue;null!=e&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){const t=e.detail&&e.detail.element||e.target;!this.multipleChoice&&t.checked&&(this.formElements.forEach(e=>{t.choiceValue!==e.choiceValue&&(e.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!("choice-group"===this._repropagationRole&&!this.multipleChoice&&!e.checked)}});class On extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=t?.type||"error"}static _$isValidator$=!0;static validatorName="";static async=!1;execute(e,t,i){if(!this.constructor.validatorName)throw new Error("A validator needs to have a name! Please set it via \"static get validatorName() { return 'IsCat'; }\"");return!0}set param(e){this.__param=e,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(e){const t=this.constructor,i={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if("function"==typeof this.config.getMessage)return this.config.getMessage(i);throw new Error("You must provide a value for getMessage of type 'function', you provided a value of type: "+typeof this.config.getMessage)}return t.getMessage(i)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}}class Fn extends On{static get validatorName(){return"FormElementsHaveNoError"}execute(e,t,i){const s=i?.node._anyFormElementHasFeedbackFor("error");return s}static async getMessage(){return""}}const In=lt(e=>class extends(Os($s(Tn(ki(Cs(e)))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(e){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("modelValue",e)})):this._setValueMapForAllFormElements("modelValue",e)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(e){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("serializedValue",e)})):this._setValueMapForAllFormElements("serializedValue",e)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(e){this._setValueMapForAllFormElements("formattedValue",e)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.value="",this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new Fn],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(e=>{"function"==typeof e.initInteractionState&&e.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has("focused")&&!0===this.focused&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(e){!this.contains(e.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}_inputGroupTemplate(){return ne`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{"function"==typeof e.submitGroup?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{"function"==typeof e.resetGroup?e.resetGroup():"function"==typeof e.reset&&e.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(e=>{"function"==typeof e.clearGroup?e.clearGroup():"function"==typeof e.clear&&e.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{"function"==typeof e.resetInteractionState&&e.resetInteractionState()})}_getFromAllFormElementsFilter(e,t){return!e.disabled}_getFromAllFormElements(e,t){const i={},s=t||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(t=>{const n=this.formElements[t];n instanceof Ls?i[t]=n.filter(t=>s(t,e)).map(t=>t[e]):s(n,e)&&("function"==typeof n._getFromAllFormElements?i[t]=n._getFromAllFormElements(e):i[t]=n[e])}),i}_setValueForAllFormElements(e,t){this.formElements.forEach(i=>{i[e]=t})}_setValueMapForAllFormElements(e,t){t&&"object"==typeof t&&Object.keys(t).forEach(i=>{Array.isArray(this.formElements[i])&&this.formElements[i].forEach((s,n)=>{s[e]=t[i][n]}),this.formElements[i]?this.formElements[i][e]=t[i]:this.__pendingValues[e][i]=t[i]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t[e]):!!this.formElements[t][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>Boolean(t.hasFeedbackFor&&t.hasFeedbackFor.includes(e))):Boolean(this.formElements[t].hasFeedbackFor&&this.formElements[t].hasFeedbackFor.includes(e)))}_everyFormElementHas(e){return Object.keys(this.formElements).every(t=>Array.isArray(this.formElements[t])?this.formElements[t].every(t=>!!t[e]):!!this.formElements[t][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(e){const t=this.formElements[this.formElements.length-1];e.target===t&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__storeAllDescriptionElementsInParentChain(){let e=this;for(;e;)Ns(e._getAriaDescriptionElements(),{reverse:!0}).forEach(e=>{"feedback"===e.getAttribute("slot")&&this.__descriptionElementsInParentChain.add(e)}),e=e._parentFormGroup}__linkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{"function"==typeof e.addToAriaDescribedBy&&e.addToAriaDescribedBy(t,{reorder:!1})})}__unlinkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{"function"==typeof e.removeFromAriaDescribedBy&&e.removeFromAriaDescribedBy(t)})}addFormElement(e,t){if(super.addFormElement(e,t),this.disabled&&e.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(e),this.validate({clearCurrentResult:!0}),!e.modelValue){const t=this.__pendingValues;t.modelValue&&t.modelValue[e.name]?e.modelValue=t.modelValue[e.name]:t.serializedValue&&t.serializedValue[e.name]&&(e.serializedValue=t.serializedValue[e.name])}}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}removeFormElement(e){super.removeFormElement(e),this.validate({clearCurrentResult:!0}),"function"==typeof e.removeFromAriaLabelledBy&&this._labelNode&&e.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(e)}_isEmpty(){return this.formElements.every(e=>e._isEmpty?.())}});class Mn extends(Ln(In(Ce))){constructor(){super(),this.multipleChoice=!0}}customElements.get("craft-checkbox-group")||customElements.define("craft-checkbox-group",class extends Mn{constructor(...e){super(...e),this.__ssrNameAdopted=!1}connectedCallback(){this.__adoptSlottedName(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedName(),super.willUpdate(e)}__adoptSlottedName(){if(this.__ssrNameAdopted||this.name)return;let e=this.querySelector('input[type="checkbox"][name]');e&&(this.__ssrNameAdopted=!0,this.name=e.name)}static get styles(){return[...Mn.styles,v`
        .input-group {
          display: grid;
          gap: var(--c-spacing-sm);
        }

        .form-field__group-two {
          margin-top: var(--c-spacing-sm);
        }

        ::slotted(label) {
          font-weight: bold;
        }
      `]}});const Dn=window,Vn=new WeakMap,Rn=lt(e=>class extends e{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:"focused-visible"},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(e){super.firstUpdated(e),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(e){super.updated(e),e.has("autofocus")&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute("autofocus")?this._focusableNode.setAttribute("autofocus",""):this._focusableNode.removeAttribute("autofocus"))}focus(){this._focusableNode?.focus()}blur(){this._focusableNode?.blur()}get _focusableNode(){return this._inputNode||document.createElement("input")}__onFocus(){if(this.focused=!0,"function"==typeof Dn.applyFocusVisiblePolyfill)this.focusedVisible=this._focusableNode.hasAttribute("data-focus-visible-added");else try{this.focusedVisible=this._focusableNode.matches(":focus-visible")}catch(e){this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){var e;e=this.getRootNode(),Dn.applyFocusVisiblePolyfill&&!Vn.has(e)&&(Dn.applyFocusVisiblePolyfill(e),Vn.set(e,void 0)),this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._focusableNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._focusableNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){this._focusableNode&&(this._focusableNode?.removeEventListener("focus",this.__redispatchFocus),this._focusableNode?.removeEventListener("blur",this.__redispatchBlur),this._focusableNode?.removeEventListener("focusin",this.__redispatchFocusin),this._focusableNode?.removeEventListener("focusout",this.__redispatchFocusout))}}),Pn=lt(e=>class extends(Tn($s(e))){static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}#_={didFormatterOutputSyncToView:!1,didFormatterRun:!1};requestUpdate(e,t,i){super.requestUpdate(e,t,i),"modelValue"===e&&this.modelValue!==t&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:t}),"serializedValue"===e&&this.serializedValue!==t&&this._calculateValues({source:"serialized"}),"formattedValue"===e&&this.formattedValue!==t&&this._calculateValues({source:"formatted"})}get value(){return this._inputNode?.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}preprocessor(e,t){}parser(e,t){return e}formatter(e,t){return e}serializer(e){return void 0!==e?e:""}deserializer(e){return void 0===e?"":e}_calculateValues({source:e}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,"model"!==e&&("serialized"===e?this.modelValue=this.deserializer(this.serializedValue):"formatted"===e&&(this.modelValue=this._callParser())),"formatted"!==e&&(this.formattedValue=this._callFormatter()),"serialized"!==e&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(e=this.formattedValue){if(""===e)return"";if("string"!=typeof e)return;const t=this.parser(e,{...this.formatOptions,mode:this.#b(),viewValueStates:this.#g()});return void 0!==t?t:new As(e)}_callFormatter(){return this.#_.didFormatterRun=!1,this._isHandlingUserInput&&this.hasFeedbackFor?.includes("error")&&this._inputNode?this.value:this.modelValue instanceof As?this.modelValue.viewValue:(this.#_.didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:this.#b(),viewValueStates:this.#g()}))}_onModelValueChanged(...e){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...e)}_dispatchModelValueChangedEvent(...e){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:Boolean(this._isHandlingUserInput)}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();const e=this.formattedValue;this.modelValue=this._callParser(this.value),e===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){let e=this.value.length;this._inputNode&&"selectionStart"in this._inputNode&&"range"!==this._inputNode?.type&&(e=this._inputNode.selectionStart);const t=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:e,prevViewValue:this.__prevViewValue});if(void 0!==t)if("string"==typeof t)this.value=t;else if("object"==typeof t){const{viewValue:e,caretIndex:i}=t;this.value=e,i&&this._inputNode&&"selectionStart"in this._inputNode&&(this._inputNode.selectionStart=i,this._inputNode.selectionEnd=i)}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=void 0!==this.formattedValue?this.formattedValue:"",this.#_.didFormatterOutputSyncToView=Boolean(this.formattedValue)&&this.#_.didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:e}){"compositionstart"===e?this.__isHandlingComposition=!0:"compositionend"===e&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}constructor(){super(),this.formatOn="change",this.formatOptions={mode:"auto"},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue="",this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener("user-input-changed",this._onUserInputChanged),this.addEventListener("paste",this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),void 0===this.modelValue&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent),this._inputNode.addEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.addEventListener("compositionend",this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.removeEventListener("compositionend",this.__onCompositionEvent))}#b(){return this._isPasting?"pasted":this._isHandlingUserInput&&this.__prevViewValue?"user-edited":"auto"}#g(){const e=[];return this.#_.didFormatterOutputSyncToView&&e.push("formatted"),e}}),zn=lt(e=>class extends(Pn(Rn($s(e)))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){const e=this._inputNode;return e&&e.selectionStart?e.selectionStart:0}set selectionStart(e){const t=this._inputNode;t&&t.selectionStart&&(t.selectionStart=e)}get selectionEnd(){const e=this._inputNode;return e&&e.selectionEnd?e.selectionEnd:0}set selectionEnd(e){const t=this._inputNode;t&&t.selectionEnd&&(t.selectionEnd=e)}get value(){return this._inputNode&&this._inputNode.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value!==e&&this._setValueAndPreserveCaret(e),this.__value=void 0):this.__value=e}_setValueAndPreserveCaret(e){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){const t=this._inputNode.selectionStart;this._inputNode.value=e,this._inputNode.selectionStart=t,this._inputNode.selectionEnd=t}}catch(t){this._inputNode.value=e}else this._inputNode.value=e}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch(e){}}get _focusableNode(){return this._inputNode}});class Bn extends($s(Ts(Rn(Pn(Tn(Cs(Ce))))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){super.disconnectedCallback(),this._inputNode?.removeEventListener("change",this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=""}_onChange(e){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class Un extends(zn(Bn)){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"readOnly"===e&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const qn=(e,t={})=>e.value!==t.value||e.checked!==t.checked,Hn=lt(e=>class extends(Pn(e)){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:qn},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"modelValue"===e?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):"checked"===e&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has("checked")&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has("modelValue")&&this.__syncCheckedToInputElement(),e.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],v`
          :host {
            display: flex;
            flex-wrap: wrap;
          }

          :host([hidden]) {
            display: none;
          }

          .choice-field__graphic-container {
            display: none;
          }
          .choice-field__help-text {
            display: block;
            flex-basis: 100%;
          }
        `]}render(){return ne`
        <slot name="input"></slot>
        <div class="choice-field__graphic-container" aria-hidden="true">
          ${this._choiceGraphicTemplate()}
        </div>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>
        ${this._afterTemplate()}
      `}_choiceGraphicTemplate(){return oe}_afterTemplate(){return oe}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(e){const t=e=>{e.stopImmediatePropagation(),this._inputNode.removeEventListener("click",t)};this._inputNode.addEventListener("click",t)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=this._parentFormGroup?.name||"")}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},t){let i;t&&t.modelValue&&(i=t.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(e,i)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&void 0!==e.value?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}});class Wn extends(Hn(Un)){connectedCallback(){super.connectedCallback(),this.type="checkbox"}}class jn extends Wn{static get styles(){return[...super.styles||[],v`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:"mixed-state"}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState="indeterminate":this._oldState=this.checked?"checked":"unchecked"}_setOwnCheckedState(){const e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;const t=e.filter(e=>e.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;const i=e.filter(e=>e.disabled&&!1===e.checked);this.checked=e.length-t.length-i.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case"checked":this.checked=!1,this.indeterminate=!1;break;case"unchecked":this.checked=!1,this.indeterminate=!0;break;case"indeterminate":this.checked=!0,this.indeterminate=!1}}__onModelValueChanged(e){if(!this.disabled){if(e.detail.formPath[0]!==this||this.__settingOwnChecked)this._setOwnCheckedState(),this.updateComplete.then(()=>{this.__settingOwnSubs||this.__settingOwnChecked||!this.mixedState||this._storeIndeterminateState()});else{const e=e=>e.every(t=>t===e[0]);this.mixedState&&!e(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;const t=this._subCheckboxes,i=t.filter(e=>e.checked),s=t.filter(e=>e.disabled),n=t.length>0&&t.length===i.length;t.length>0&&t.length===s.length&&(this.checked=n),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((e,t)=>{e.checked=this._indeterminateSubStates[t]}):this._subCheckboxes.filter(e=>!e.disabled).forEach(e=>{e.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}this.mixedState&&this._setOldState()}}_afterTemplate(){return ne`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){e.target.hasAttribute("role")||e.target?.setAttribute("role","listitem"),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){"listitem"===e.target.getAttribute("role")&&e.target?.removeAttribute("role"),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){const t=this.__subCheckboxes.indexOf(e);-1!==t&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this.__onModelValueChanged),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this.__onModelValueChanged),this.removeEventListener("form-element-register",this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&(this._inputNode.indeterminate=this.indeterminate)}}customElements.get("craft-checkbox-indeterminate")||customElements.define("craft-checkbox-indeterminate",class extends jn{static get styles(){return[...jn.styles,v`
        :host {
          display: flex;
          align-items: center;
          gap: 0 var(--c-spacing-md);
        }

        ::slotted(label) {
          font-weight: bold;
        }

        ::slotted(*) {
          padding-left: 0;
        }
      `]}});const Kn=e=>class extends e{constructor(...e){super(...e),this.__ssrStateAdopted=!1}set value(e){""===e&&!this.__ssrStateAdopted&&this.__slottedInput()?.hasAttribute("value")||(super.value=e)}get value(){return super.value}connectedCallback(){this.__adoptSlottedInputState(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedInputState(),super.willUpdate(e)}updated(e){super.updated(e);let{_inputNode:t}=this,i=this.choiceValue;"string"==typeof i&&""!==i&&t instanceof HTMLInputElement&&t.value!==i&&(t.value=i)}__slottedInput(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&"input"===e.slot)}__adoptSlottedInputState(){if(this.__ssrStateAdopted)return;let e=this.__slottedInput();if(!e)return;this.__ssrStateAdopted=!0,e.id&&(this._inputId=e.id),!this.name&&e.name&&(this.name=e.name);let t=e.getAttribute("value")??e.value;t&&(this.choiceValue=t,e.value=t),e.checked&&(this.checked=!0),e.disabled&&(this.disabled=!0)}};var Gn=class extends(Kn(Wn)){constructor(...e){super(...e),this.__inputPatched=!1,this.indeterminate=!1}connectedCallback(){super.connectedCallback(),this.__patchSlottedInputProps()}updated(e){super.updated(e),this.__patchSlottedInputProps();let t=this._inputNode;t&&(t.indeterminate=this.indeterminate)}__patchSlottedInputProps(){if(this.__inputPatched)return;let e=this.__slottedInputElement();if(!e)return;this.__inputPatched=!0;let t=this;for(let i of["checked","disabled"]){let s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,i);if(!s?.get||!s.set)continue;let{get:n,set:r}=s;Object.defineProperty(e,i,{configurable:!0,enumerable:s.enumerable,get(){return n.call(this)},set(e){r.call(this,e),t[i]!==e&&(t[i]=e)}})}}__slottedInputElement(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&"input"===e.slot)}static get styles(){return[...Wn.styles,v`
        /* same as radio, potentially consolidate */
        :host(:not([label-sr-only])) {
          --_gap-x: var(--gap-x, var(--c-spacing-md));
          display: grid;
          align-items: center;
          gap: 0 var(--_gap-x);
          grid-template-areas: 'input label' '. help-text';
          grid-template-columns: auto 1fr;
          grid-template-rows: repeat(2, auto);
        }

        /*
         * Choice inputs render their label/help-text in \`.choice-field__*\`, so
         * Lion's built-in \`label-sr-only\` rule (which targets
         * \`.form-field__label\`) never matches. When the label is hidden we also
         * hide the help text, but both stay available to screen readers: Lion
         * associates the help text with the input via \`aria-describedby\`, and we
         * clip rather than use \`display:none\`/\`visibility:hidden\` so the content
         * remains in the accessibility tree (WCAG 1.3.1 / 4.1.2). \`white-space:
         * nowrap\` avoids clipped multi-line text being announced oddly, and the
         * \`:not(:focus-within)\` guard reveals any focusable help-text content
         * (e.g. links) when focused (WCAG 2.4.7).
         */
        :host([label-sr-only]) .choice-field__label,
        :host([label-sr-only]) .choice-field__help-text:not(:focus-within) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }

        ::slotted(label) {
          font: inherit;
          grid-area: label;
        }

        ::slotted([slot='input']) {
          background-color: var(--c-input-fill, var(--c-form-control-fill));
          border-width: var(
            --c-input-border-width,
            var(--c-form-control-border-width)
          );
          border-style: var(
            --c-input-border-style,
            var(--c-form-control-border-style)
          );
          border-color: var(
            --c-input-border-color,
            var(--c-form-control-border-color)
          );
          border-radius: var(--c-input-radius, var(--c-radius-sm));
          width: var(--c-size-control-2xs);
          height: var(--c-size-control-2xs);
        }

        .choice-field__help-text {
          font-size: 1em;
          color: var(--c-text-quiet);
          grid-area: help-text;
        }
      `]}};function Zn(e){return"function"==typeof e.checkVisibility?e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}):e.offsetWidth>0||e.offsetHeight>0}Ae([Te({type:Boolean,reflect:!0})],Gn.prototype,"indeterminate",void 0),customElements.get("craft-checkbox")||customElements.define("craft-checkbox",Gn);var Yn=new WeakMap,Jn=class e{constructor(){this.queue=[],this.workers=[],nt(this,Yn,null),ot(Yn,this,new AbortController);for(let e=0;e<3;e++)this.workers.push(new tr(this))}load(t=document,i="[data-sizes]"){t.querySelectorAll(i).forEach(t=>{if(Zn(t))this.addToQueue(t);else{let i=`thumb${Math.floor(1e6*Math.random())}`;e.invisibleThumbs[i]=[this,t];let s=()=>{e.invisibleThumbs[i]&&Zn(t)&&(delete e.invisibleThumbs[i],this.addToQueue(t))};document.addEventListener("scroll",s,{signal:rt(Yn,this)?.signal}),window.addEventListener("resize",s,{signal:rt(Yn,this)?.signal})}})}addToQueue(e){this.queue.push(e),this.workers.forEach(e=>{e.active||e.loadNext()})}static retryAll(){for(let t in e.invisibleThumbs){let i=e.invisibleThumbs[t];if(!i)continue;let[s,n]=i;delete e.invisibleThumbs[t],s.load(n.parentElement??document)}}destroy(){this.workers.forEach(e=>e.deactivate()),rt(Yn,this)?.abort()}};Jn.invisibleThumbs={};var Xn=new WeakMap,Qn=new WeakMap,er=new WeakMap,tr=class{constructor(e){this.active=!1,this.container=void 0,nt(this,Xn,null),nt(this,Qn,null),nt(this,er,null),ot(Xn,this,e)}activate(){this.active||(this.active=!0,this.clearInterval(),ot(Qn,this,setInterval(()=>{this.loadNextIfRemoved()},500)))}deactivate(){this.active&&(this.active=!1,this.clearInterval(),this.clearTimeout())}clearInterval(){rt(Qn,this)&&(clearInterval(rt(Qn,this)),ot(Qn,this,null))}clearTimeout(){rt(er,this)&&(clearTimeout(rt(er,this)),ot(er,this,null))}loadNext(){if(this.clearTimeout(),this.container=rt(Xn,this)?.queue.shift(),void 0===this.container)return void this.deactivate();if(this.loadNextIfRemoved())return;if(this.container.querySelectorAll("img").length>0)return void this.loadNext();this.activate(),ot(er,this,setTimeout(()=>{this.loadNext()},3e4));let e=document.createElement("img");e.sizes=this.container.getAttribute("data-sizes")??"",e.srcset=this.container.getAttribute("data-srcset")??"",e.alt=this.container.getAttribute("data-alt")??"",e.setAttribute("data-animated",this.container.getAttribute("data-animated")??""),e.src=this.container.getAttribute("data-src")??"",e.onload=()=>this.loadNext(),e.onabort=()=>this.loadNext(),e.onerror=()=>this.loadNext(),this.container.appendChild(e)}loadNextIfRemoved(){return!(!this.container||document.body.contains(this.container)||(this.loadNext(),0))}},ir=v`
  :host {
    display: contents;
  }

  .cp-chip {
    --_min-height: var(--c-chip-height, none);
    --_thumb-size: calc(24rem / 16);
    --_radius: var(--c-chip-radius, var(--c-radius-md));
    --_fill: var(--c-color-fill-quiet, var(--c-surface-raised));
    padding: 0;
    display: inline-flex;
    min-width: auto;
    border-radius: var(--_radius);
    align-items: center;
    box-shadow: var(--c-chip-shadow, var(--c-shadow-sm));

    /* colorable styles */
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    border-width: var(--c-chip-border-width, 1px);
    border-style: var(--c-chip-border-style, solid);
    border-color: var(
      --c-color-border-quiet,
      var(--c-color-neutral-border-quiet)
    );
    background-color: var(--c-color-fill-quiet, var(--c-surface-raised));
    overflow: clip;
  }

  .cp-chip__body ::slotted(a) {
    text-decoration: none;
    font-weight: bold;
    display: flex;
  }

  .cp-chip[appearance='plain'],
  .cp-chip--plain {
    --_min-height: none;
    padding-block: 0;
    padding-inline: 0;
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }

  .cp-chip[size='small'],
  .cp-chip--small {
    padding-block: calc(var(--c-spacing-xs) / 2);
  }

  .cp-chip[size='medium'],
  .cp-chip--medium {
    padding-block: 0;
    min-height: var(--c-size-control-md);
  }

  .cp-chip__prefix,
  .cp-chip__body,
  .cp-chip__suffix {
    display: inline-flex;
    flex-direction: column;
    min-height: var(--_min-height);
  }

  .cp-chip__body {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cp-chip__prefix {
    padding-inline-end: var(--c-spacing-sm);
  }

  .cp-chip__suffix {
    padding-inline-start: var(--c-spacing-md);
  }

  .cp-chip__indicator {
    display: inline-flex;
    padding-inline: var(--c-spacing-sm);
  }

  .cp-chip__thumbnail {
    padding: var(--c-spacing-sm);
    /*border-radius: calc(var(--_radius) - var(--c-spacing-xs));*/
  }
`,sr=new WeakMap,nr=class extends Ce{constructor(...e){super(...e),this.size="",this.variant=Re.Neutral,this.appearance=Wt.OutlineFill,this.icon=null,nt(this,sr,new Jn)}renderPrefix(){let e=!!this.querySelector('[slot="thumbnail"]'),t=!!this.querySelector('[slot="indicator"]');return ne` <div class="cp-chip__prefix" part="prefix">
      <slot name="prefix">
        ${e?ne`<slot class="cp-chip__thumbnail" name="thumbnail"></slot>`:oe}
        ${t?ne`<slot class="cp-chip__indicator" name="indicator"></slot>`:oe}
        <slot class="cp-chip__icon" name="icon">
          ${this.icon?ne` <craft-icon name="${this.icon}"></craft-icon>`:oe}
        </slot>
      </slot>
    </div>`}firstUpdated(e){super.firstUpdated(e),rt(sr,this).load(this)}render(){let e=!!this.querySelector('[slot="prefix"]')||!!this.querySelector('[slot="icon"]')||!!this.querySelector('[slot="thumbnail"]')||!!this.querySelector('[slot="indicator"]')||this.icon,t=!!this.querySelector('[slot="suffix"]');return ne`
      <div
        part="chip"
        class="${Ue({"cp-chip":!0,"cp-chip--small":"small"===this.size,"cp-chip--medium":"medium"===this.size,"cp-chip--large":"large"===this.size,"cp-chip--plain":this.appearance===Wt.Plain})}"
      >
        ${e?this.renderPrefix():oe}
        <div class="cp-chip__body">
          <slot></slot>
        </div>
        ${t?ne` <div class="cp-chip__suffix" part="suffix">
              <slot name="suffix"></slot>
            </div>`:oe}
      </div>
    `}};nr.styles=[ir],Ae([Te()],nr.prototype,"size",void 0),Ae([Te({reflect:!0})],nr.prototype,"variant",void 0),Ae([Te({reflect:!0})],nr.prototype,"appearance",void 0),Ae([Te()],nr.prototype,"icon",void 0),customElements.get("craft-chip")||customElements.define("craft-chip",nr);const rr=v`
  --_border-width: var(
    --c-input-border-width,
    var(--c-form-control-border-width)
  );
  font: inherit;
  color: var(--c-input-text, var(--c-text-default));
  position: relative;
  min-height: calc(
    var(--c-input-height, var(--c-size-control-md)) - 2 * var(--_border-width)
  );
  border-width: var(--_border-width);
  border-style: var(--c-input-border-style, var(--c-form-control-border-style));
  border-color: var(--c-input-border-color, var(--c-form-control-border-color));
  border-radius: var(--c-input-radius, var(--c-radius-sm));
  padding-block: 0;
  width: 100%;
  flex: 1 1 auto;
  background-color: var(--c-input-fill, var(--c-form-control-fill));
  box-shadow: var(--c-input-shadow);
  overflow: clip;

  /* Detect mobile devices and up the font size of inputs to avoid zoom on focus */
  @media (pointer: none), (pointer: coarse) {
    font-size: 1rem;
  }
`,or=v`
  :host(:not([label-sr-only]))
    .form-field__group-one
    .form-field__label
    slot:not(:empty) {
    margin-block-end: var(--c-spacing-sm);
  }

  :host([has-feedback-for='error']) {
    color: var(--c-color-danger-on-normal);

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }
  }

  ::slotted(label) {
    line-height: 1;
    font-weight: bold;
    font-size: var(--text-sm);
  }

  .form-field__help-text {
    font-size: 1em;
    color: var(--c-text-quiet);
  }

  ::slotted([slot='after']) {
    margin-block-start: var(--c-spacing-sm);
  }
`,ar=v`
  ${or}

  :host([monospace]) .input-group__container {
    font-family: var(--c-font-mono);
    font-size: 0.9em;
  }

  ::slotted([slot='input']) {
    font: inherit;
    padding-block: 0;
    border: none;
    appearance: none;
    padding-inline: var(--c-input-spacing-inline);
    background-color: transparent;
    width: 100%;
  }

  .input-group__container {
    ${rr}
  }

  .input-group__prefix,
  .input-group__suffix {
    padding-inline: var(--c-input-spacing-inline);
    display: grid;
    place-items: center;
  }

  .input-group__prefix + .input-group__input {
    border-radius-start-start: 0;
    border-radius-start-end: 0;
  }

  :host([size~='small']) ::slotted([slot='input']) {
    --c-input-height: var(--c-size-control-sm);
    --c-input-spacing-inline: var(--c-spacing-sm);
  }

  :host([center]) ::slotted([slot='input']) {
    text-align: center;
  }

  ::slotted([slot='input']) {
    width: 100%;
  }
`;class lr extends(ki(Hn(Ss(Cs(Ce))))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[v`
        :host {
          display: block;
          background-color: white;
          padding: 4px;
          cursor: default;
        }

        :host([hidden]) {
          display: none;
        }

        :host(:hover) {
          background-color: #eee;
        }
        :host([active]) {
          background-color: #ddd;
        }

        :host([checked]) {
          background-color: #bde4ff;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"active"===e&&this.active!==t&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return ne`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}var dr=v`
  :host([checked]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host {
    --c-option-wide-threshold: 640;
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font: inherit;
    border-radius: var(--c-radius-sm);
  }

  :host(:hover) {
    background-color: var(--c-color-neutral-fill-normal);
    color: var(--c-color-neutral-on-normal);
  }

  :host([active]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host([checked]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host([disabled]) {
    color: var(--c-color-neutral-on-normal);
  }

  .hint {
    color: color-mix(in srgb, currentColor, transparent 25%);
    align-self: end;
    font-size: 0.8em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([active]) .hint {
    color: var(--c-color-neutral-on-loud);
  }

  .choice-field__label {
    display: grid;
    max-width: 100%;
  }

  :host([wide]) .choice-field__label {
    align-items: baseline;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,cr=new WeakMap,hr=new WeakSet,ur=class extends lr{constructor(...e){super(...e),st(this,hr),this.hint=null,nt(this,cr,void 0)}static get styles(){return[...lr.styles,dr]}connectedCallback(){super.connectedCallback(),mr._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),mr._.unobserve(this)}render(){return ne`
      <div class="choice-field__label">
        <slot></slot>
        ${this.hint?ne`<span class="hint">${this.hint}</span>`:oe}
        <slot name="suffix"></slot>
      </div>
    `}};function pr(){return rt(cr,this)??ot(cr,this,parseInt(getComputedStyle(this).getPropertyValue("--c-option-wide-threshold")||"640",10)),rt(cr,this)}var mr={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,i=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute("wide",i>=it(hr,e,pr).call(e))}})};Ae([Te()],ur.prototype,"hint",void 0),customElements.get("craft-option")||customElements.define("craft-option",ur);const fr=lt(e=>class extends e{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:e.detail.element},bubbles:!0}))}});class _r extends(fr(Ce)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const br=lt(e=>class extends($s(hn(Ln(Cs(Os(e)))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],v`
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            color: #adadad;
          }

          :host([orientation='horizontal']) ::slotted([role='listbox']) {
            display: flex;
          }
        `]}_inputGroupInputTemplate(){return ne`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":_r}}get slots(){return{...super.slots,input:()=>{const e=this.createScopedElement("lion-options");return e.setAttribute("data-tag-name","lion-options"),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>!0===e.active)}set activeIndex(e){if(this.formElements[e]){const t=this.formElements[e];this.__setChildActive(t)}else this.__setChildActive(null)}get checkedIndex(){const e=this.formElements;return this.multipleChoice?e.filter(e=>e.checked).map(t=>e.indexOf(t)):e.indexOf(e.find(e=>e.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e))return this._uncheckChildren(this.formElements.filter(t=>t===e)),void e.forEach(e=>{this.formElements[e]&&(this.formElements[e].checked=!this.formElements[e].checked)});"number"==typeof e&&(-1===e&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,t){super.addFormElement(e,t),e.id=e.id||`${this.localName}-option-${Pt()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((e,t)=>{e.setAttribute("aria-posinset",t+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:t}){const{key:i,code:s}=e;if(s.startsWith("Key")||s.startsWith("Digit")||s.startsWith("Numpad")){e.preventDefault(),this.__typedChars.push(i);const s=this.__typedChars.join(""),n=this.formElements.findIndex(e=>e.modelValue.value.toLowerCase().startsWith(s));n>=0&&(t&&this.setCheckedIndex(n),this.activeIndex=n),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(e,t=1){return this.__getEnabledOption(e,t)}_getPreviousEnabledOption(e,t=-1){return this.__getEnabledOption(e,t)}_onChildActiveChanged({target:e}){!0===e.active&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case" ":case"Enter":if(" "===t&&this._listboxReceivesNoFocus)return;if(" "===t&&e.preventDefault(),!this.formElements[this.activeIndex])return;if(this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break;case"ArrowUp":e.preventDefault(),"vertical"===this.orientation&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;e.preventDefault(),"horizontal"===this.orientation&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":e.preventDefault(),"vertical"===this.orientation&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;e.preventDefault(),"horizontal"===this.orientation&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(t)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,t){e.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(e){this.formElements.forEach(t=>{t.active=e===t}),e?(this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",e.id),this._scrollIntoView(e,this._scrollTargetNode)):this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant")}_uncheckChildren(e=[]){const t=Array.isArray(e)?e:[e];this.formElements.forEach(e=>{t.includes(e)||(e.checked=!1)})}__onChildCheckedChanged(e){const{target:t}=e;e.stopPropagation&&e.stopPropagation(),t.checked&&!this.multipleChoice&&this._uncheckChildren(t)}__setAttributeForAllFormElements(e,t){this.formElements.forEach(i=>{i.setAttribute(e,t)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate("modelValue",this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,t){const i=e=>1===t?e<this.formElements.length:e>=0;for(let s=e+t;i(s);s+=t)if(this.formElements[s]&&!this.formElements[s].hasAttribute("aria-hidden"))return s;if(this.rotateKeyboardNavigation)for(let e=-1===t?this.formElements.length-1:0;i(e);e+=t)if(this.formElements[e]&&!this.formElements[e].hasAttribute("aria-hidden"))return e;return e}__moveOptionsToListboxNode(){const e=this.shadowRoot.getElementById("options-outlet");e&&(ks(this,this._listboxNode),e.addEventListener("slotchange",()=>{ks(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;const{key:t}=e;switch(t){case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}});class gr extends(br(Rn(Ts(Tn(Ce))))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}const vr=new WeakMap;function yr(e,t){Array.from(e.childNodes).forEach(i=>{if("#text"===i.nodeName){const s=new RegExp(`^(.*?)(${t})(.*)$`,"i"),n=i.nodeValue.match(s);if(n){const t=document.createTextNode(n[1]);e.appendChild(t);const s=document.createElement("b");s.textContent=n[2],e.appendChild(s);const r=document.createTextNode(n[3]);e.appendChild(r),e.removeChild(i),vr.set(e,()=>{e.appendChild(i),e.contains(t)&&null!==t.parentNode&&t.parentNode.removeChild(t),e.contains(s)&&null!==s.parentNode&&s.parentNode.removeChild(s),e.contains(r)&&null!==r.parentNode&&r.parentNode.removeChild(r)})}}else yr(i,t)})}function wr(e){vr.has(e)&&vr.get(e)(),Array.from(e.childNodes).forEach(e=>{"#text"===e.nodeName?vr.has(e)&&vr.get(e)():wr(e)})}class kr extends On{static get validatorName(){return"MatchesOption"}execute(e,t,i){return i?.node.modelValue instanceof As}}function xr(e){return Array.isArray(e)?e:[e]}const Cr=lt(e=>class extends(Ln(e)){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(e){if(super.modelValue=e,null==e||""===e)this._customChoices=new Set;else if(this.allowCustomChoice){const t=this.modelValue;this._customChoices=new Set(xr(e)),this.requestUpdate("modelValue",t)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(e){if(super.formattedValue=e,null==e)this._customChoices=new Set;else if(this.allowCustomChoice){const t=this.modelValue;this._customChoices=new Set(xr(e).map(e=>this.formElements.find(t=>t.formattedValue===e)?.modelValue||e)),this.requestUpdate("modelValue",t)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(e){if(super.serializedValue=e,null==e)this._customChoices=new Set;else if(this.allowCustomChoice){const t=this.modelValue;this._customChoices=new Set(xr(e).map(e=>this.formElements.find(t=>t.serializedValue===e)?.modelValue||e)),this.requestUpdate("modelValue",t)}}get customChoices(){if(!this.allowCustomChoice)return[];const e=this._getCheckedElements();return Array.from(this._customChoices).filter(t=>!e.some(e=>e.choiceValue===t))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(e){const t=e;return this.allowCustomChoice?this.multipleChoice?[...xr(t),...this.customChoices]:""===t?this._customChoices.values().next().value||"":t:t}_isEmpty(){return super._isEmpty()&&0===this._customChoices.size}clear(){this._customChoices=new Set,super.clear()}parser(e){return this.allowCustomChoice&&Array.isArray(e)?e.filter(e=>""!==e.trim()):e}}),Er=new WeakMap;class Nr extends(Nn(Lt(Cr(gr)))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,v`
        .input-group__input {
          display: flex;
          flex: 1;
        }

        .input-group__container {
          display: flex;
          border-bottom: 1px solid;
        }

        * > ::slotted([slot='input']) {
          outline: none;
          flex: 1;
          box-sizing: border-box;
          border: none;
          width: 100%;
          /* border-bottom: 1px solid; */
        }

        * > ::slotted([role='listbox']) {
          max-height: 200px;
          display: block;
          overflow: auto;
          z-index: 1;
          background: white;
        }
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case"bg-BG":case"bg":return i.e(3759).then(i.bind(i,3759));case"cs-CZ":case"cs":return i.e(2350).then(i.bind(i,2350));case"de-AT":case"de-DE":case"de":return i.e(9627).then(i.bind(i,9627));case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":default:return i.e(6359).then(i.bind(i,6359));case"es-ES":case"es":return i.e(4356).then(i.bind(i,4356));case"fr-FR":case"fr-BE":case"fr":return i.e(4272).then(i.bind(i,4272));case"hu-HU":case"hu":return i.e(5503).then(i.bind(i,5503));case"it-IT":case"it":return i.e(133).then(i.bind(i,133));case"nl-BE":case"nl-NL":case"nl":return i.e(310).then(i.bind(i,310));case"pl-PL":case"pl":return i.e(1496).then(i.bind(i,1496));case"ro-RO":case"ro":return i.e(2548).then(i.bind(i,2548));case"ru-RU":case"ru":return i.e(8657).then(i.bind(i,8657));case"sk-SK":case"sk":return i.e(3830).then(i.bind(i,3830));case"uk-UA":case"uk":return i.e(3804).then(i.bind(i,3804));case"zh-CN":case"zh":return i.e(2801).then(i.bind(i,5182))}}},...super.localizeNamespaces]}get modelValue(){const e=super.modelValue;return""!==e?e:this.parser(this.value)}set modelValue(e){super.modelValue=e}get value(){return this._inputNode?.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),this.showAllOnEmpty&&this.opened?(e.style.display="",e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${this.formElements.length}`),e.removeAttribute("aria-hidden")):e.style.display="none"})}_inputGroupInputTemplate(){return ne`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return ne`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return ne` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if("1.1"===this._ariaVersion){const e=document.createElement("div"),t=document.createElement("input");return t.style.cssText="\n          border: none;\n          outline: none;\n          width: 100%;\n          height: 100%;\n          font: inherit;\n          background: inherit;\n          color: inherit;\n          border-radius: inherit;\n          box-sizing: border-box;\n          padding: 0;",e.appendChild(t),e}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return"1.1"===this._ariaVersion&&this._comboboxNode&&this._comboboxNode.querySelector("input")||this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>"listbox"===e.slot)}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new kr),this._ariaVersion=mt.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,i){if(super.requestUpdate(e,t,i),"disabled"!==e&&"readOnly"!==e||this.__setComboboxDisabledAndReadOnly(),"modelValue"===e&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const e=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(e)}}parser(e){return this.requireOptionMatch&&-1===this.checkedIndex&&""!==e&&!Array.isArray(e)?new As(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){const e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){const e=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(e)||this.setCheckedIndex(-1)}}updated(e){super.updated(e),e.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),e.has("opened")&&(this.opened&&(this.activeIndex=-1),this.opened||void 0===e.get("opened")||(this.__onOverlayClose(),this.activeIndex=-1)),e.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),"function"==typeof this._selectionDisplayNode?.onComboboxElementUpdated&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let i=-1;const s=this._getTextboxValueFromOption(e);return"string"==typeof s&&"string"==typeof t&&(i=s.toLowerCase().indexOf(t.toLowerCase())),"all"===this.matchMode?i>-1:0===i}_showOverlayCondition({lastKey:e}){return!(this.disabled||this.readOnly||e&&(["Tab","Escape"].includes(e)||!this.multipleChoice&&["Enter"].includes(e)))&&(!!(this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected)||this.opened)}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof As?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){"Tab"===e.key&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):-1!==this.checkedIndex&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(e=>!e.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=""}_highlightMatchedOption(e,t){if(yr(e,t),e.textContent){const t=document.createElement("span");t.setAttribute("aria-label",e.textContent.replace(/\s+/g," ")),Array.from(e.childNodes).forEach(e=>{t.appendChild(e)}),e.appendChild(t),Er.set(e,()=>{Array.from(t.childNodes).forEach(t=>{e.appendChild(t)}),e.contains(t)&&e.removeChild(t)})}}_onFilterUnmatch(e,t,i){this._unhighlightMatchedOption(e),e.style.display="none"}_unhighlightMatchedOption(e){wr(e),Er.has(e)&&Er.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){const i=e.length<t.length,s=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return i||s||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const e=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,t=this._inputNode.value,i=this._inputNode.selectionStart,s=e&&i?t.slice(0,i):t,n=e||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,r=!s,o=[];let a=!1;const l=this.__computeUserIntendsAutoFill({prevValue:n,curValue:s}),d="both"===this.autocomplete||"inline"===this.autocomplete,c=this._autoSelectCondition(),h="inline"===this.autocomplete||"none"===this.autocomplete;this.formElements.forEach((e,t)=>{const i=this.matchCondition(e,s);let u=!1;if(u=r?this.showAllOnEmpty:h||i,c&&!a&&i&&!e.disabled){const i=()=>{this.activeIndex=t,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),a=!0};if(l)if(d){const t=this._getTextboxValueFromOption(e);"string"==typeof t&&""!==t&&"string"==typeof s&&""!==s&&0===t.toLowerCase().indexOf(s.toLowerCase())&&(this.__textboxInlineComplete(e),i())}else i()}e.onFilterUnmatch?e.onFilterUnmatch(s,n):this._onFilterUnmatch(e,s,n),e.setAttribute("aria-hidden","true"),e.removeAttribute("aria-posinset"),e.removeAttribute("aria-setsize"),u&&(o.push(e),e.onFilterMatch?e.onFilterMatch(s):this._onFilterMatch(e,s))});const u=o.length;o.forEach((e,t)=>{e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${u}`),e.removeAttribute("aria-hidden")}),!c||a||this.multipleChoice||(this.setCheckedIndex(-1),n!==s&&(this.activeIndex=-1),this.modelValue=this.parser(t)),this.__prevCboxValueNonSelected=s,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=l,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){const t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){const e=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=e,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return"both"===this.autocomplete||"inline"===this.autocomplete}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(e){const{key:t}=e;switch(t){case"Escape":this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case"Enter":this.opened&&e.preventDefault(),this.requireOptionMatch||!this.multipleChoice||this.formElements[this.activeIndex]&&!this.formElements[this.activeIndex].hasAttribute("aria-hidden")&&this.opened?(super._listboxOnKeyDown(e),this._resetListboxOptions()):(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:super._listboxOnKeyDown(e)}}_syncToTextboxCondition(e,t,{phase:i}={}){return"both"===this.autocomplete||"inline"===this.autocomplete||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){const i=e.filter(e=>!t.includes(e)),s=this.formElements.filter(e=>i.includes(e.choiceValue)).map(e=>this._getTextboxValueFromOption(e)).join(" ");this._setTextboxValue(s)}}_enhanceLightDomClasses(){const e=this.querySelector("[slot=input]");e&&e.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),"1.1"===this._ariaVersion?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(e){const t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}var Ar=v`
  ${or}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    min-height: none;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    border-radius: var(--c-input-radius);
  }

  ::slotted([slot='listbox']) {
    display: grid;
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
  }

  .input-group__input {
    ${rr}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
  }

  .input-group__container {
    border: 0;
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }

  .clear {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    transform: translateY(-50%);
  }

  .combobox__option {
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .combobox__optgroup {
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--c-color-neutral-on-normal);
    border-block-end: 1px solid var(--c-color-neutral-border-quiet);
  }

  .combobox__footer {
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font-size: 0.85em;
    color: var(--c-text-quiet);
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
  }
`,Sr=new WeakMap,$r=new WeakMap,Tr=new WeakSet,Lr=new WeakMap,Or=class extends Nr{static get styles(){return[...super.styles,Ar]}constructor(){super(),st(this,Tr),this.options=[],this.limit=150,this.clearable=!1,nt(this,Sr,void 0),nt(this,$r,()=>{it(Tr,this,Vr).call(this),it(Tr,this,Fr).call(this)}),nt(this,Lr,()=>{this.modelValue="",this._inputNode&&(this._inputNode.value=""),it(Tr,this,Vr).call(this),this._inputNode?.focus()}),this.defaultValidators=[],this.autocomplete="list"}firstUpdated(e){super.firstUpdated(e),this._inputNode?.addEventListener("input",rt($r,this)),this.addEventListener("model-value-changed",()=>{ot(Sr,this,this.modelValue)}),ot(Sr,this,this.modelValue),it(Tr,this,Vr).call(this)}updated(e){super.updated(e),(e.has("options")||e.has("limit")||e.has("opened")||e.has("modelValue"))&&it(Tr,this,Vr).call(this)}matchCondition(){return!0}_highlightMatchedOption(){}_unhighlightMatchedOption(){}_showOverlayCondition(e){return!(this.disabled||this.readOnly||"ArrowDown"!==e.lastKey&&"ArrowUp"!==e.lastKey)||super._showOverlayCondition(e)}_inputGroupInputTemplate(){return ne`
      <div class="input-group__input">
        <slot name="input"></slot>
        ${this.clearable&&it(Tr,this,Pr).call(this)?ne`<craft-button
              class="clear"
              type="button"
              appearance="plain"
              size="small"
              icon
              aria-label=${Qe("Clear")}
              @mousedown=${e=>e.preventDefault()}
              @click=${rt(Lr,this)}
            >
              <craft-icon name="xmark" style="font-size: 0.8em"></craft-icon>
            </craft-button>`:oe}
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}parser(e){if("string"==typeof e&&""!==e){let t=it(Tr,this,zr).call(this,e);return t?t.value:e}return super.parser(e)}_syncToTextboxCondition(e,t,i={}){return"overlay-close"===i.phase||super._syncToTextboxCondition(e,t,i)}_getTextboxValueFromOption(e){return e?e.textContent?.trim()||"":super._getTextboxValueFromOption(e)}};function Fr(){let e=this.parser(this._inputNode?.value??"");e!==this.modelValue&&(this.modelValue=e),this.modelValue!==rt(Sr,this)&&(ot(Sr,this,this.modelValue),this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!0}})))}function Ir(e){let t=e.trim().toLowerCase(),i=[];for(let e of this.options)if(it(Tr,this,Mr).call(this,e))for(let s of e.options)(""===t||it(Tr,this,Dr).call(this,t,s))&&i.push({groupLabel:e.label,option:s});else(""===t||it(Tr,this,Dr).call(this,t,e))&&i.push({option:e});return i}function Mr(e){return"optgroup"===e.type}function Dr(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function Vr(){let e=this._listboxNode;if(!e)return;let t,i=this._inputNode?.value??"",s=it(Tr,this,Ir).call(this,i),n=s.slice(0,this.limit);ke(ne`${n.map(e=>{let i=e.groupLabel&&e.groupLabel!==t?ne`<div class="combobox__optgroup" aria-hidden="true">
              ${e.groupLabel}
            </div>`:oe;return t=e.groupLabel,ne`${i}${it(Tr,this,Rr).call(this,e.option)}`})}${s.length>this.limit?ne`<div class="combobox__footer" aria-hidden="true">
            ${Qe("Showing {shown} of {total} — keep typing to narrow results.",{shown:this.limit,total:s.length})}
          </div>`:oe}`,e)}function Rr(e){let t=e.data??{},i=e.label,s=i.startsWith("$")||i.startsWith("@");return ne`
      <craft-option
        .choiceValue=${String(e.value)}
        .hint=${t.hint??null}
      >
        <span class="combobox__option">
          ${t.indicator?ne`<craft-indicator
                variant=${t.indicator.variant??"neutral"}
              ></craft-indicator>`:oe}
          ${s?ne`<code>${i}</code>`:i}
        </span>
      </craft-option>
    `}function Pr(){return""!==this.modelValue&&null!=this.modelValue}function zr(e){let t=e.trim();for(let e of this.options)if(it(Tr,this,Mr).call(this,e)){let i=e.options.find(e=>e.label===t);if(i)return i}else if(e.label===t)return e}Ae([Te({type:Array})],Or.prototype,"options",void 0),Ae([Te({type:Number})],Or.prototype,"limit",void 0),Ae([Te({type:Boolean,reflect:!0})],Or.prototype,"clearable",void 0),customElements.get("craft-combobox")||customElements.define("craft-combobox",Or);var Br=v`
  :host {
    display: inline-block;
  }

  .copy-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    appearance: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
  }

  .icon {
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
  }

  svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
`;const Ur={keyframes:[{scale:.25,opacity:.25},{scale:1,opacity:1}],options:{duration:100}},qr={keyframes:[{scale:1,opacity:1},{scale:.25,opacity:.25}],options:{duration:100}};var Hr=class extends Ce{constructor(...e){super(...e),this.isCopying=!1,this.status="rest",this.value="",this.disabled=!1,this.feedbackDuration=1e3,this.tooltipLabel=null}async copyValue(){if("copying"!==this.status&&!this.disabled){this.status="copying";try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent("craft-copy",{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent("craft-error",{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){let t="success"===e?this.successIconEl:this.errorIconEl;this.tooltipLabel="success"===e?"Copied":"Copy failed",await t.animate(qr.keyframes,qr.options),this.copyIconEl.hidden=!0,t.hidden=!1,await t.animate(Ur.keyframes,Ur.options),this.status=e,setTimeout(async()=>{await t.animate(qr.keyframes,qr.options),t.hidden=!0,this.copyIconEl.hidden=!1,await this.copyIconEl.animate(Ur.keyframes,Ur.options),this.status="rest",this.tooltipLabel="Copy"},this.feedbackDuration)}connectedCallback(){super.connectedCallback(),this.tooltipLabel=this.getAttribute("tooltip-label")||Qe("Copy"),this.id||(this.id=`copy-${Math.floor(1e8*Math.random())}`),this.addEventListener("craft-copy",()=>{this.showStatus("success")}),this.addEventListener("craft-error",()=>{this.showStatus("error")})}render(){return ne`
      <craft-tooltip for="${this.id}">${this.tooltipLabel}</craft-tooltip>
      <button
        type="button"
        id="${this.id}"
        @click="${this.copyValue}"
        ?disabled=${this.disabled}
        class="copy-button"
        part="button"
      >
        <slot></slot>
        <slot name="copy-icon">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M288 448H64V224h64v-64H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-64h-64v64zM160 130h64v92h-64v-92zm288 0h64v92h-64v-92zM290 352v-64h92v64h-92zm0-288V0h92v64h-92zM224 98V64h34V0h-34c-35.3 0-64 28.7-64 64v34M414 64h34v34h64V64c0-35.3-28.7-64-64-64h-34m34 254v34h-34v64h34c35.3 0 64-28.7 64-64v-34M258 288h-34v-34h-64v34c0 35.3 28.7 64 64 64h34"
              />
            </svg>
          </span>
        </slot>

        <slot name="success-icon" part="success-icon" hidden>
          <craft-icon name="check"></craft-icon>
        </slot>

        <slot name="error-icon" part="error-icon" hidden>
          <craft-icon name="x"></craft-icon>
        </slot>

        <craft-visually-hidden>Copy to clipboard</craft-visually-hidden>
      </button>
    `}};Hr.styles=[Br],Ae([Le()],Hr.prototype,"isCopying",void 0),Ae([Le()],Hr.prototype,"status",void 0),Ae([Fe('slot[name="copy-icon"]')],Hr.prototype,"copyIconEl",void 0),Ae([Fe('slot[name="success-icon"]')],Hr.prototype,"successIconEl",void 0),Ae([Fe('slot[name="error-icon"]')],Hr.prototype,"errorIconEl",void 0),Ae([Te({type:String})],Hr.prototype,"value",void 0),Ae([Te({type:Boolean})],Hr.prototype,"disabled",void 0),Ae([Te({attribute:"feedback-duration",type:Number})],Hr.prototype,"feedbackDuration",void 0),Ae([Te({attribute:"tooltip-label"})],Hr.prototype,"tooltipLabel",void 0),customElements.get("craft-copy-button")||customElements.define("craft-copy-button",Hr);var Wr,jr=v`
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
`,Kr=v`
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
`,Gr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Yr=Object.getOwnPropertySymbols,Jr=Object.prototype.hasOwnProperty,Xr=Object.prototype.propertyIsEnumerable,Qr=e=>{throw TypeError(e)},eo=(e,t,i)=>t in e?Gr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,to=(e,t,i,s)=>{for(var n,r=s>1?void 0:s?Zr(t,i):t,o=e.length-1;o>=0;o--)(n=e[o])&&(r=(s?n(t,i,r):n(r))||r);return s&&r&&Gr(t,i,r),r},io=(e,t,i)=>t.has(e)||Qr("Cannot "+i),so=class extends Ce{constructor(){super(),((e,t)=>{t.has(e)?Qr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,!1)})(this,Wr),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,((e,t)=>{for(var i in t||(t={}))Jr.call(t,i)&&eo(e,i,t[i]);if(Yr)for(var i of Yr(t))Xr.call(t,i)&&eo(e,i,t[i]);return e})({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let s=customElements.get(e);if(!s){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in s&&s.version&&(r=" v"+s.version),(!n||!r||n!==r)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,i){((e,t)=>(io(e,t,"read from private field"),t.get(e)))(this,Wr)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),((e,t,i)=>{io(e,t,"write to private field"),t.set(e,i)})(this,Wr,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};Wr=new WeakMap,so.version="2.20.1",so.dependencies={},to([Te()],so.prototype,"dir",2),to([Te()],so.prototype,"lang",2);var no=class extends so{render(){return ne` <slot></slot> `}};no.styles=[Kr,jr],no.define("sl-visually-hidden");var ro=v`
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
`,oo=v`
  :host {
    --craft-tooltip-font-size: calc(12rem / 16);
    display: inline-block;
  }

  slot {
    display: inline-flex;
  }

  .copy-attribute {
    font-family: var(--font-mono);
    font-size: var(--c-copy-attribute-font-size, var(--c-text-sm));
    flex-wrap: nowrap;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .copy-attribute::part(button) {
    --_border: var(
      --c-copy-attribute-border,
      1px solid hsla(209, 20%, 25%, 0.1)
    );
    border-radius: var(--c-copy-attribute-radius, 4px);
    background-color: var(--c-copy-attribute-fill, transparent);
    color: var(--c-copy-attribute-text, inherit);
    border: var(--_border);
    padding-inline: 5px;
    min-height: calc(20rem / 16);
  }

  .copy-attribute::part(button):not(.copy-attribute--success):not(
      .copy-attribute--error
    ):hover,
  .copy-attribute::part(button):not(.copy-attribute--success):not(
      .copy-attribute--error
    ):focus {
    border-color: var(--c-color-neutral-border-quiet);
    color: var(--c-text-default);
  }

  .copy-attribute--success::part(button) {
    background-color: var(
      --c-copy-attribute-success-fill,
      var(--c-copy-attribute-fill)
    );
    color: var(--c-copy-attribute-success-text, var(--c-copy-attribute-text));
    border: var(--c-copy-attribute-success-border, var(--_border));
  }

  .copy-attribute--error::part(button) {
    background-color: var(
      --c-copy-attribute-error-fill,
      var(--c-copy-attribute-fill)
    );
    color: var(--c-copy-attribute-error-text, var(--c-copy-attribute-text));
    border: var(--c-copy-attribute-error-border, var(--_border));
  }
`,ao=class extends Ce{constructor(...e){super(...e),this.value="",this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}`}render(){return ne`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${Ue({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};ao.styles=[ro,oo],Ae([Fe("craft-copy-button")],ao.prototype,"copyButtonEl",void 0),Ae([Te({type:String})],ao.prototype,"value",void 0),Ae([Te({type:Boolean,reflect:!0})],ao.prototype,"disabled",void 0),customElements.get("craft-copy-attribute")||customElements.define("craft-copy-attribute",ao);class lo extends(Lt(Ce)){static get properties(){return{isAlertDialog:{type:Boolean,attribute:"is-alert-dialog"}}}constructor(){super(),this.isAlertDialog=!1}_defineOverlayConfig(){return{placementMode:"global",viewportConfig:{placement:"center"},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},isAlertDialog:this.isAlertDialog}}render(){return ne`
      <slot name="invoker"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `}}const co=typeof CSSStyleSheet<"u"?new CSSStyleSheet:null;co?.replaceSync("\n  .craft-dialog {\n    background-color: var(--c-surface-raised);\n    border-radius: var(--c-radius-md);\n    box-shadow: var(--c-shadow-lg);\n    min-width: min(90vw, 24rem);\n    max-width: min(90vw, 40rem);\n  }\n\n  .craft-dialog__header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: var(--c-spacing-md);\n    padding-inline: var(--c-spacing-lg);\n    padding-block-start: var(--c-spacing-lg);\n    padding-block-end: var(--c-spacing-md);\n  }\n\n  .craft-dialog__title {\n    font-size: 1.25em;\n    margin: 0;\n  }\n\n  .craft-dialog__close {\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: inherit;\n    padding: var(--c-spacing-xs);\n    line-height: 1;\n  }\n\n  .craft-dialog__body {\n    padding-inline: var(--c-spacing-lg);\n    padding-block-end: var(--c-spacing-lg);\n  }\n\n  .craft-dialog__footer {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--c-spacing-sm);\n    padding-inline: var(--c-spacing-lg);\n    padding-block-end: var(--c-spacing-lg);\n  }\n");var ho=new WeakMap,uo=new WeakMap,po=new WeakSet,mo=class extends lo{constructor(){super(),st(this,po),this.openAttribute=!1,this.label="",nt(this,ho,null),nt(this,uo,null),et(this),this.addEventListener("opened-changed",()=>{let e=!!this.opened;this.openAttribute!==e&&(this.openAttribute=e)})}static get styles(){return[v`
        :host {
          display: contents;
        }

        dialog::backdrop {
          background-color: rgb(0 0 0 / 0.25);
        }
      `]}connectedCallback(){it(po,this,fo).call(this),it(po,this,_o).call(this),super.connectedCallback()}updated(e){super.updated(e),e.has("openAttribute")&&this.openAttribute!==this.opened&&(this.opened=this.openAttribute),e.has("label")&&rt(uo,this)&&(rt(uo,this).textContent=this.label)}};function fo(){let e=this.getRootNode();co&&(e instanceof Document||e instanceof ShadowRoot)&&!e.adoptedStyleSheets.includes(co)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,co])}function _o(){if(rt(ho,this)?.isConnected)return;let e=document.createElement("div");e.slot="content",e.classList.add("craft-dialog");let t=document.createElement("div");t.classList.add("craft-dialog__body"),t.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||""===e.slot));let i=Array.from(this.children).filter(e=>"footer"===e.slot);if(e.append(it(po,this,bo).call(this),t),i.length>0){let t=document.createElement("footer");t.classList.add("craft-dialog__footer"),t.append(...i),e.append(t)}e.addEventListener("click",e=>{e.target.closest?.('[data-dialog="close"]')&&(this.opened=!1)}),this.append(e),ot(ho,this,e)}function bo(){let e=document.createElement("header");e.classList.add("craft-dialog__header");let t=document.createElement("h2");t.classList.add("craft-dialog__title"),t.textContent=this.label,ot(uo,this,t);let i=document.createElement("button");i.type="button",i.classList.add("craft-dialog__close"),i.setAttribute("aria-label",Qe("Close")),i.setAttribute("data-dialog","close");let s=document.createElement("craft-icon");return s.setAttribute("name","xmark"),i.append(s),e.append(t,i),e}Ae([Te({type:Boolean,attribute:"open",reflect:!0})],mo.prototype,"openAttribute",void 0),Ae([Te()],mo.prototype,"label",void 0),customElements.get("craft-dialog")||customElements.define("craft-dialog",mo);class go extends Ce{static get styles(){return[v`
        :host {
          display: block;
        }

        :host ::slotted([slot='content']) {
          overflow: hidden;
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0}}}render(){return ne`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
    `}constructor(){super(),this.opened=!1,this.toggle=this.toggle.bind(this)}connectedCallback(){super.connectedCallback();const e=Pt();this._invokerNode&&(this._invokerNode.addEventListener("click",this.toggle),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this._invokerNode.setAttribute("aria-controls",`collapsible-content-${e}`)),this._contentNode&&this._contentNode.setAttribute("id",`collapsible-content-${e}`),this.__setDefaultState()}updated(e){super.updated(e),e.has("opened")&&this.__openedChanged()}disconnectedCallback(){super.disconnectedCallback(),this._invokerNode&&this._invokerNode.removeEventListener("click",this.toggle)}show(){this.opened||(this.opened=!0)}hide(){this.opened&&(this.opened=!1)}toggle(){this.opened=!this.opened,this.requestUpdate()}async _showAnimation(e){}async _hideAnimation(e){}get _invokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _contentNode(){return Array.from(this.children).find(e=>"content"===e.slot)}get _contentHeight(){return`${this._contentNode?.getBoundingClientRect().height||0}px`}__openedChanged(){this.__updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this.dispatchEvent(new CustomEvent("opened-changed"))}async __updateContentSize(){this._contentNode&&(this.opened?(this._contentNode.style.setProperty("display",""),await this._showAnimation({contentNode:this._contentNode})):(await this._hideAnimation({contentNode:this._contentNode}),this._contentNode.style.setProperty("display","none")))}__setDefaultState(){!this.opened&&this._contentNode&&this._contentNode.style.setProperty("display","none")}}var vo=class extends go{constructor(...e){super(...e),this.label="",this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__toggleExternal=()=>{this.state=this.__externalExpanded?"collapsed":"expanded"}}static get styles(){return[...super.styles,v`
        ::slotted([slot='content']) {
          margin-block-start: var(--c-spacing-lg);
        }
      `]}get __externalTarget(){let e=this.__externalTrigger?.getAttribute("aria-controls");return e?document.getElementById(e):null}render(){return ne`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(':scope > button[type="button"][aria-controls]:not([slot])'),this.__externalTrigger||this.__ensureDefaultInvoker(),super.connectedCallback(),this.__externalTrigger&&this.__setupExternalMode()}disconnectedCallback(){super.disconnectedCallback(),this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener("click",this.__toggleExternal))}updated(e){super.updated(e),e.has("label")&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has("state")&&this.__externalTrigger&&("expanded"===this.state?this.__handleExternalOpen():"collapsed"===this.state&&this.__handleExternalClose())}__ensureDefaultInvoker(){if(this._invokerNode)return;let e=document.createElement("craft-button");e.slot="invoker",e.setAttribute("type","button"),e.setAttribute("appearance","plain"),e.setAttribute("icon","chevron-down"),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__setupExternalMode(){let e=this.__externalTrigger;this.__externalTarget?(e.addEventListener("click",this.__toggleExternal),"expanded"!==this.state&&"collapsed"!==this.state&&(this.state="expanded")):console.error(`No target with id ${e.getAttribute("aria-controls")} found for disclosure.`,e)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute("aria-expanded","true"),this.dispatchEvent(new CustomEvent("open"));let e=this.__externalTarget;e&&(e.dataset.state="expanded"),this.__persistExternalState("expanded")}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute("aria-expanded","false"),this.dispatchEvent(new CustomEvent("close"));let e=this.__externalTarget;e&&(e.dataset.state="collapsed"),this.__persistExternalState("collapsed")}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};Ae([Te()],vo.prototype,"label",void 0),Ae([Te({reflect:!0})],vo.prototype,"state",void 0),Ae([Te({attribute:"cookie-name"})],vo.prototype,"cookieName",void 0),customElements.get("craft-disclosure")||customElements.define("craft-disclosure",vo);var yo=class extends Ce{constructor(...e){super(...e),this.label="",this.icon=""}render(){return ne`
      <div class="cp-empty">
        <div class="cp-empty__content">
          <slot name="graphic">
            ${this.icon?ne`
                  <craft-icon
                    class="cp-empty__icon"
                    name="${this.icon}"
                    style="font-size: calc(48rem / 16)"
                  ></craft-icon>
                `:oe}
          </slot>
          <slot name="content">
            <p class="label">${this.label}</p>
          </slot>

          <slot></slot>
        </div>
      </div>
    `}};yo.styles=[v`
      .cp-empty {
        min-height: calc(120rem / 16);
        display: grid;
        place-items: center;
        border-radius: var(--c-radius-md);
        background-color: var(--c-color-neutral-fill-quiet);
        color: var(--c-color-neutral-on-quiet);
        padding-block: var(--c-spacing-lg);
      }

      .cp-empty__content {
        display: grid;
        gap: var(--c-spacing-md);
        justify-items: center;
        max-width: 60ch;
        text-align: center;
      }

      .label {
        margin: 0;
        font-size: 1.25em;
      }
    `],Ae([Te()],yo.prototype,"label",void 0),Ae([Te()],yo.prototype,"icon",void 0),customElements.get("craft-empty")||customElements.define("craft-empty",yo);const wo=e=>e??oe;var ko=v`
  :host {
    position: relative;
    display: block;
  }

  /* A slotted control with a maxlength (reflected as has-maxlength) shrinks
     the field to the control's width instead of spanning the column.
     width="full" spans despite a maxlength; width="auto" shrinks without
     one. */
  :host([has-maxlength]:not([width='full'])),
  :host([width='auto']) {
    width: fit-content;
  }

  /* Stop the input chrome from flexing back out to the available space. */
  :host([has-maxlength]:not([width='full'])) .input-group__input,
  :host([width='auto']) .input-group__input {
    flex: 0 0 auto;
  }

  :host([hidden]) {
    display: none;
  }

  /* Status badge (.field > .status-badge in the CP) */
  .status-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 2px;
    height: 100%;
    cursor: help;
    z-index: 1;
    border-radius: 1px;
  }

  .status-badge.modified {
    background-color: var(--blue-600, #2563eb);
    box-shadow: 0 0 5px hsl(221deg 83% 53% / 15%);
  }

  .status-badge.outdated {
    background-color: var(--bg-pending, #c96a11);
    box-shadow: 0 0 5px hsl(27deg 96% 61% / 15%);
  }

  /* Heading (.field > .heading in the CP) */
  .heading {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    font-weight: bold;
    margin-block-end: var(--c-spacing-xs, 0.25rem);
  }

  .heading .flex-grow {
    flex: 1 0 0;
  }

  ::slotted([slot='label']) {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
  }

  .read-only-badge {
    font-size: calc(11rem / 16);
    font-weight: normal;
    line-height: 1.45;
    padding-block: 0;
    padding-inline: 0.25em;
    background-color: var(--gray-100, #e9ebec);
    color: var(--gray-700, #3f4d5a);
    border: 1px solid var(--border-hairline, hsl(211deg 20% 44% / 25%));
    border-radius: var(--c-radius-sm, 3px);
  }

  /* Instructions (.field > .instructions in the CP) */
  .form-field__help-text {
    display: block;
    margin-block-end: var(--c-spacing-xs, 0.3125rem);
  }

  .form-field__group-two .form-field__help-text {
    margin-block: var(--c-spacing-xs, 0.3125rem) 0;
  }

  /* Input container (.field > .input in the CP) */
  .input-group {
    position: relative;
  }

  .input-group.ltr {
    direction: ltr;
  }

  .input-group.rtl {
    direction: rtl;
  }

  .input-group.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input-group__container {
    display: flex;
  }

  .input-group__input {
    flex: 1;
    display: flex;
    /* Let the chrome shrink below its content's intrinsic width (e.g. a
       slotted input with a large size attribute), instead of blowing out
       of the column. */
    min-width: 0;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    flex: 1 1 auto;
    margin: 0;
    font-size: 100%;
  }

  /* Tip/warning notices (field-notice.blade.php renders these with p-0 mt-1) */
  .field-notice {
    padding: 0;
    margin-block-start: var(--c-spacing-xs, 0.25rem);
  }

  /* Error styling hook, mirroring .field.has-errors / .input.errors */
  :host([has-errors]) ::slotted([slot='input']) {
    border-color: var(--c-color-danger-border-loud);
  }

  :host([has-errors]) .form-field__feedback {
    color: var(--c-color-danger-on-normal);
  }
`,xo=class extends($s(Ce)){constructor(...e){super(...e),this.required=!1,this.translatable=!1,this.translationDescription=Qe("This field is translatable."),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition="before",this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged())}static get styles(){return[pi,or,ko]}connectedCallback(){super.connectedCallback(),this.__lightDomObserver.observe(this,{childList:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth()}__syncHasMaxlength(){this.toggleAttribute("has-maxlength",this.querySelector(':scope > [slot="input"]')?.hasAttribute("maxlength")??!1)}__syncControlWidth(){if(void 0!==this.width)return;let e=this.querySelector(':scope > [slot="input"]')?.getAttribute("width");("full"===e||"auto"===e)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect()}updated(e){super.updated(e),e.has("disabled")&&this._inputNode?.removeAttribute("aria-disabled"),e.has("fieldset")&&this.__syncFieldsetSemantics(),(e.has("label")||e.has("required")||e.has("translatable")||e.has("translationDescription"))&&this.__syncLabelDecorations()}get control(){return this._inputNode??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:"rtl"===(this.closest("[dir]")?.getAttribute("dir")??document.documentElement.getAttribute("dir"))?.toLowerCase()?"rtl":"ltr"}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy()}addToAriaLabelledBy(e,t={}){super.addToAriaLabelledBy(e,{...t,reorder:!1})}addToAriaDescribedBy(e,t={}){super.addToAriaDescribedBy(e,{...t,reorder:!1})}render(){return ne`
      ${this._statusBadgeTemplate()}
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return ne`
      ${this._labelTemplate()}
      ${"before"===this.instructionsPosition?this._helpTextTemplate():oe}
    `}_groupTwoTemplate(){return ne`
      ${this._inputGroupTemplate()}
      ${"after"===this.instructionsPosition?this._helpTextTemplate():oe}
      ${this._noticeTemplate("tip")} ${this._noticeTemplate("warning")}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){return ne`
      <div class="heading form-field__label">
        <slot name="heading-prefix"></slot>
        <slot name="label"></slot>
        ${this.readOnly?ne`<span class="read-only-badge">${Qe("Read Only")}</span>`:oe}
        ${this.__hasLightChild("label-extra")?ne`<div class="flex-grow"></div>`:oe}
        <slot name="label-extra"></slot>
        <slot name="heading-suffix"></slot>
      </div>
    `}_inputGroupTemplate(){return ne`
      <div class=${Ue({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?ne`
      <div
        class="status-badge ${this.status}"
        title=${wo(this.statusLabel)}
        aria-hidden="true"
      >
        <span class="cp-visually-hidden">${this.statusLabel}</span>
      </div>
    `:oe}_noticeTemplate(e){if(!this.__hasLightChild(e))return oe;let t="tip"===e;return ne`
      <craft-callout
        class="field-notice"
        variant=${t?"info":"warning"}
        appearance="plain"
      >
        <craft-visually-hidden>
          ${Qe(t?"Tip:":"Warning:")}
        </craft-visually-hidden>
        <slot name=${e}></slot>
      </craft-callout>
    `}__hasLightChild(e){return void 0!==this.__lightChild(e)}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__wireDescribedBy(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){for(let e of["help-text","feedback","tip","warning"]){let t=this.__lightChild(e);t&&this.addToAriaDescribedBy(t,{idPrefix:e})}}__syncHasErrors(){let e=this.__lightChild("feedback");e&&(this.hasErrors=!(!e.childElementCount&&!e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode;this.fieldset?(this.setAttribute("role","group"),e&&(e.id||(e.id=`label-${this._inputId}`),this.setAttribute("aria-labelledby",e.id),e.removeAttribute("for"))):("group"===this.getAttribute("role")&&this.removeAttribute("role"),this.removeAttribute("aria-labelledby"),e&&this._inputNode&&e.setAttribute("for",this._inputNode.id||this._inputId))}__syncLabelDecorations(){let e=this._labelNode;if(e){for(let t of e.querySelectorAll("[data-craft-field-decoration]"))t.remove();if(this.label){if(this.required){let t=document.createElement("span");t.className="visually-hidden",t.textContent=Qe("Required"),t.setAttribute("data-craft-field-decoration","");let i=document.createElement("span");i.className="required",i.setAttribute("aria-hidden","true"),i.setAttribute("data-craft-field-decoration",""),e.append(t,i)}if(this.translatable){let t=document.createElement("craft-tooltip");t.setAttribute("placement","bottom"),t.setAttribute("max-width","200px"),t.setAttribute("text",this.translationDescription),t.setAttribute("delay","1000"),t.setAttribute("data-craft-field-decoration","");let i=document.createElement("button");i.type="button",i.className="t9n-indicator prevent-autofocus",i.setAttribute("data-icon","language"),i.setAttribute("aria-label",this.translationDescription),t.append(i),e.append(t)}}}}};Ae([Te({type:Boolean,reflect:!0})],xo.prototype,"required",void 0),Ae([Te({type:Boolean,reflect:!0})],xo.prototype,"translatable",void 0),Ae([Te({attribute:"translation-description"})],xo.prototype,"translationDescription",void 0),Ae([Te({type:Boolean,reflect:!0})],xo.prototype,"fieldset",void 0),Ae([Te({reflect:!0})],xo.prototype,"status",void 0),Ae([Te({attribute:"status-label"})],xo.prototype,"statusLabel",void 0),Ae([Te({reflect:!0})],xo.prototype,"orientation",void 0),Ae([Te({type:Boolean,reflect:!0,attribute:"has-errors"})],xo.prototype,"hasErrors",void 0),Ae([Te({attribute:"instructions-position"})],xo.prototype,"instructionsPosition",void 0),Ae([Te({type:String,reflect:!0})],xo.prototype,"width",void 0),customElements.get("craft-field")||customElements.define("craft-field",xo),customElements.get("craft-field-group")||customElements.define("craft-field-group",class extends Ce{render(){return ne`
      <style>
        craft-field-group {
          display: grid;
          gap: var(--gap, var(--c-spacing-lg));
        }
      </style>
      <slot></slot>
    `}createRenderRoot(){return this}});var Co=v`
  ${or}

  :host {
    display: block;
  }

  .input-color {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .input-color__control {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .input-color__swatch {
    position: relative;
    display: block;
    flex: 0 0 auto;
    inline-size: var(--c-input-height, var(--c-size-control-md));
    block-size: var(--c-input-height, var(--c-size-control-md));
    border-radius: 50%;
    overflow: hidden;
    background:
      linear-gradient(
        45deg,
        var(--c-color-neutral-fill-quiet) 25%,
        transparent 25%
      ),
      linear-gradient(
        -45deg,
        var(--c-color-neutral-fill-quiet) 25%,
        transparent 25%
      ),
      linear-gradient(
        45deg,
        transparent 75%,
        var(--c-color-neutral-fill-quiet) 75%
      ),
      linear-gradient(
        -45deg,
        transparent 75%,
        var(--c-color-neutral-fill-quiet) 75%
      );
    background-position:
      0 0,
      0 0.375rem,
      0.375rem -0.375rem,
      -0.375rem 0;
    background-size: 0.75rem 0.75rem;
  }

  :host(:not([disabled])) .input-color__swatch {
    cursor: pointer;
  }

  .input-color__swatch:focus-within {
    box-shadow: var(
      --focus-ring,
      0 0 0 2px var(--c-color-accent-border-normal)
    );
  }

  .input-color__preview {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%);
  }

  .input-color__picker {
    position: absolute;
    inset: 0;
    inline-size: 100%;
    block-size: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  }

  .input-group__container {
    ${rr}
    flex: 0 0 7.25rem;
    inline-size: 7.25rem;
    max-inline-size: 100%;
  }

  .input-group__input {
    display: flex;
    flex: 1 1 auto;
  }

  .input-group__prefix {
    color: var(--c-text-quiet);
    user-select: none;
    font-family: var(--c-font-mono);
    padding-inline: var(--c-input-spacing-inline) 0;
    display: grid;
    place-items: center;
  }

  ::slotted([slot='input']) {
    width: 100%;
    min-inline-size: 0;
    font: inherit;
    font-family: var(--c-font-mono);
    padding-block: 0;
    padding-inline: var(--c-spacing-xs) var(--c-input-spacing-inline);
    border: 0;
    appearance: none;
    background-color: transparent;
  }
`;const Eo=/^[0-9a-f]{6}$/i,No=/^[0-9a-f]{3}$/i,Ao={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function So(e){return String(e??"").trim().replace(/^#/,"")}function $o(e){let t=So(e);return No.test(t)?t.split("").map(e=>e+e).join(""):Eo.test(t)?t:null}var To=class e extends Un{static get styles(){return[...super.styles,ar,Co]}constructor(){super(),this.presets=[],this._pickerListId=`${this._inputId}-presets`,this.type="text"}static doesBrowserSupportColorInputs(){if(null===e._browserSupportsColorInputs){let t=document.createElement("input");t.setAttribute("type","color"),e._browserSupportsColorInputs="color"===t.type}return e._browserSupportsColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement("input"),t=this.getAttribute("value");return e.type="text",e.inputMode="text",e.spellcheck=!1,e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),t&&e.setAttribute("value",So(t)),e}}}parser(e){return So(e)}formatter(e){return So(e)}serializer(e){return So(e)}deserializer(e){return So(e)}preprocessor(e){let t=So(e);if(t!==e)return t}get _expandedHexValue(){return $o(this.modelValue)}get _pickerValue(){return this._expandedHexValue?`#${this._expandedHexValue}`:"#ffffff"}get _validPresets(){return this.presets.map(e=>$o(e)).filter(e=>null!==e).map(e=>`#${e}`)}_handlePickerInput(e){let t=So(e.target.value),i=this._isHandlingUserInput;this._isHandlingUserInput=!0,this.modelValue=t,this.value=t,this._isHandlingUserInput=i}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return oe;let t=this._validPresets;return ne`
      <input
        class="input-color__picker"
        type="color"
        aria-label="${Qe("Color picker")}"
        .value="${this._pickerValue}"
        ?disabled="${this.disabled}"
        list=${t.length?this._pickerListId:oe}
        @input="${this._handlePickerInput}"
      />
      ${t.length?ne`
            <datalist id="${this._pickerListId}">
              ${t.map(e=>ne`<option value="${e}"></option>`)}
            </datalist>
          `:oe}
    `}_swatchTemplate(){return ne`
      <label class="input-color__swatch">
        <span class="input-color__preview" style="${this._expandedHexValue?`background-color: #${this._expandedHexValue}`:""}"></span>
        ${this._pickerTemplate()}
      </label>
    `}_inputGroupTemplate(){return ne`
      <div class="input-color">
        ${this._inputGroupBeforeTemplate()}
        <div class="input-color__control">
          ${this._swatchTemplate()}
          <div class="input-group__container">
            <div class="input-group__prefix" aria-hidden="true">#</div>
            ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}};To._browserSupportsColorInputs=null,Ae([Te({converter:Ao})],To.prototype,"presets",void 0),customElements.get("craft-input-color")||customElements.define("craft-input-color",To);const Lo=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},Oo=ze(class extends Be{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const n=[],r=[];let o=0;for(const t of e)n[o]=s?s(t,o):o,r[o]=i(t,o),o++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=e._$AH,{values:r,keys:o}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let d,c,h=0,u=n.length-1,p=0,m=r.length-1;for(;h<=u&&p<=m;)if(null===n[h])h++;else if(null===n[u])u--;else if(a[h]===o[p])l[p]=vs(n[h],r[p]),h++,p++;else if(a[u]===o[m])l[m]=vs(n[u],r[m]),u--,m--;else if(a[h]===o[m])l[m]=vs(n[h],r[m]),gs(e,l[m+1],n[h]),h++,m--;else if(a[u]===o[p])l[p]=vs(n[u],r[p]),gs(e,n[h],n[u]),u--,p++;else if(void 0===d&&(d=Lo(o,p,m),c=Lo(a,h,u)),d.has(a[h]))if(d.has(a[u])){const t=c.get(o[p]),i=void 0!==t?n[t]:null;if(null===i){const t=gs(e,n[h]);vs(t,r[p]),l[p]=t}else l[p]=vs(i,r[p]),gs(e,n[h],i),n[t]=null;p++}else ws(n[u]),u--;else ws(n[h]),h++;for(;p<=m;){const t=gs(e,l[m+1]);vs(t,r[p]),l[p++]=t}for(;h<=u;){const e=n[h++];null!==e&&ws(e)}return this.ut=o,((e,t=ys)=>{e._$AH=t})(e,l),re}}),Fo=e=>{switch(e){case"bg-BG":return i.e(7089).then(i.bind(i,7089));case"bg":return i.e(7893).then(i.bind(i,7893));case"cs-CZ":return i.e(9884).then(i.bind(i,9884));case"cs":return i.e(8988).then(i.bind(i,8988));case"de-DE":return i.e(7233).then(i.bind(i,7233));case"de":return i.e(9433).then(i.bind(i,9433));case"en-AU":return i.e(7012).then(i.bind(i,7012));case"en-GB":return i.e(5767).then(i.bind(i,5767));case"en-US":return i.e(5862).then(i.bind(i,5862));case"en-PH":case"en":default:return i.e(6993).then(i.bind(i,6993));case"es-ES":return i.e(9755).then(i.bind(i,9755));case"es":return i.e(7702).then(i.bind(i,7702));case"fr-FR":return i.e(6183).then(i.bind(i,6183));case"fr-BE":return i.e(5930).then(i.bind(i,5930));case"fr":return i.e(5182).then(i.bind(i,2801));case"hu-HU":return i.e(7857).then(i.bind(i,7857));case"hu":return i.e(6549).then(i.bind(i,6549));case"id-ID":return i.e(2977).then(i.bind(i,2977));case"id":return i.e(5011).then(i.bind(i,5011));case"it-IT":return i.e(897).then(i.bind(i,897));case"it":return i.e(8723).then(i.bind(i,8723));case"nl-BE":return i.e(5996).then(i.bind(i,5996));case"nl-NL":return i.e(4863).then(i.bind(i,4863));case"nl":return i.e(7960).then(i.bind(i,7960));case"pl-PL":return i.e(8187).then(i.bind(i,8187));case"pl":return i.e(2438).then(i.bind(i,2438));case"ro-RO":return i.e(4017).then(i.bind(i,4017));case"ro":return i.e(8045).then(i.bind(i,8045));case"ru-RU":return i.e(1325).then(i.bind(i,1325));case"ru":return i.e(2419).then(i.bind(i,2419));case"sk-SK":return i.e(2811).then(i.bind(i,2811));case"sk":return i.e(9156).then(i.bind(i,9156));case"uk-UA":return i.e(8309).then(i.bind(i,8309));case"uk":return i.e(174).then(i.bind(i,174));case"zh-CN":case"zh":return i.e(640).then(i.bind(i,640))}};class Io extends(Nn(hn(Ce))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Sn}}static get properties(){return{fileList:{type:Array},multiple:{type:Boolean}}}static localizeNamespaces=[{"lion-input-file":Fo},...super.localizeNamespaces];constructor(){super(),this.fileList=[],this.multiple=!1}updated(e){super.updated(e),e.has("fileList")&&this._enhanceLightDomA11y()}_enhanceLightDomA11y(){const e=this.shadowRoot?.querySelectorAll('[id^="file-feedback"]'),t=this.parentNode?.parentNode;e?.forEach(e=>{t?.addEventListener("focusin",()=>{e.setAttribute("aria-live","polite")}),t?.addEventListener("focusout",()=>{e.setAttribute("aria-live","assertive")})})}_removeFile(e){this.dispatchEvent(new CustomEvent("file-remove-requested",{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_validationFeedbackTemplate(e,t){return ne`
      <lion-validation-feedback
        id="file-feedback-${t}"
        .feedbackData="${e}"
        aria-live="assertive"
      ></lion-validation-feedback>
    `}_listItemBeforeTemplate(e){return oe}_listItemAfterTemplate(e,t){return ne`
      <button
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit("lion-input-file:removeButtonLabel",{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </button>
    `}_removeButtonContentTemplate(){return ne`✖️`}_selectedListItemTemplate(e){const t=Pt();return ne`
      <div class="selected__list__item" status="${e.status?e.status.toLowerCase():""}">
        <div class="selected__list__item__label">
          ${this._listItemBeforeTemplate(e)}
          <span id="selected-list-item-label-${t}" class="selected__list__item__label__text">
            <span class="sr-only">${this.msgLit("lion-input-file:fileNameDescriptionLabel")}</span>
            ${e.downloadUrl&&"LOADING"!==e.status?ne`
                  <a
                    class="selected__list__item__label__link"
                    href="${e.downloadUrl}"
                    target="${e.downloadUrl.startsWith("blob")?"_blank":""}"
                    rel="${wo(e.downloadUrl.startsWith("blob")?"noopener noreferrer":void 0)}"
                    >${e.systemFile?.name}</a
                  >
                `:e.systemFile?.name}
          </span>
          ${this._listItemAfterTemplate(e,t)}
        </div>
        ${"FAIL"===e.status&&e.validationFeedback?ne`
              ${Oo(e.validationFeedback,e=>ne`
                  ${this._validationFeedbackTemplate([e],t)}
                `)}
            `:oe}
      </div>
    `}render(){return this.fileList?.length?ne`
          ${this.multiple?ne`
                <ul class="selected__list">
                  ${this.fileList.map(e=>ne` <li>${this._selectedListItemTemplate(e)}</li> `)}
                </ul>
              `:ne` ${this._selectedListItemTemplate(this.fileList[0])} `}
        `:oe}static get styles(){return[v`
        .selected__list {
          list-style-type: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}}var Mo=class extends Io{static get styles(){return[...super.styles,v`
        ul {
          display: flex;
          flex-direction: column;
          gap: var(--c-spacing-sm);
        }

        li {
          display: flex;
          align-items: center;
          gap: var(--c-spacing-sm);
          padding: var(--c-spacing-sm);
          border: 1px solid var(--c-color-neutral-border-quiet);
          border-radius: var(--c-radius-sm);
          background-color: var(--c-surface-default);
        }

        .file-name {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .remove-button {
          flex-shrink: 0;
        }

        .preview-thumb {
          width: var(--thumbnail-size, calc(120rem / 16));
          height: auto;
        }

        .selected__list__item__label {
          display: flex;
          align-items: center;
          gap: var(--c-spacing-sm);
        }

        .selected__list__item__remove-button {
          margin-inline-start: var(--c-spacing-md);
        }
      `]}_listItemAfterTemplate(e,t){return ne`
      <craft-button
        icon
        size="small"
        variant="plain"
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit("lion-input-file:removeButtonLabel",{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </craft-button>
    `}_removeButtonContentTemplate(){return ne`<craft-icon name="x"></craft-icon>`}_listItemBeforeTemplate(e){return ne`<img src="${e.downloadUrl}" alt="" class="preview-thumb" />`}};class Do extends On{static validatorName="IsAcceptedFile";static checkFileSize(e,t){return e<=t}static getExtension(e){return e?.slice(e.lastIndexOf("."))}static isExtensionAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}static isFileTypeAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}execute(e,t=this.param){let i,s;const n=this.constructor,{allowedFileTypes:r,allowedFileExtensions:o,maxFileSize:a}=t;return r?.length?(i=e.some(e=>!n.isFileTypeAllowed(e.type,r)),i):o?.length?(s=e.some(e=>!n.isExtensionAllowed(n.getExtension(e.name),o)),s):e.findIndex(e=>!n.checkFileSize(e.size,a))>-1}static async getMessage(){return""}}class Vo extends On{static validatorName="DuplicateFileNames";constructor(e,t){super(e,t),this.type="info"}execute(e,t=this.param){return t.show}static async getMessage(){return rn().msg("lion-input-file:uploadTextDuplicateFileName")}}const Ro="FILE_TYPE",Po="FAIL";class zo{constructor(e,t){this.failedProp=[],this.systemFile=e,this._acceptCriteria=t,this.uploadFileStatus(),0===this.failedProp.length&&this.createDownloadUrl(e)}_getFileNameExtension(e){return e.slice(e.lastIndexOf("."))}uploadFileStatus(){if(this._acceptCriteria.allowedFileExtensions.length){const e=this._getFileNameExtension(this.systemFile.name);Do.isExtensionAllowed(e,this._acceptCriteria.allowedFileExtensions)||(this.status=Po,this.failedProp.push(Ro))}else if(this._acceptCriteria.allowedFileTypes.length){const e=this.systemFile.type;Do.isFileTypeAllowed(e,this._acceptCriteria.allowedFileTypes)||(this.status=Po,this.failedProp.push(Ro))}Do.checkFileSize(this.systemFile.size,this._acceptCriteria.maxFileSize)?this.status!==Po&&(this.status="SUCCESS"):(this.status=Po,this.failedProp.push("FILE_SIZE"))}createDownloadUrl(e){this.downloadUrl=window.URL.createObjectURL(e)}}function Bo(e,t=2){if(!+e)return"0 Bytes";const i=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**s).toFixed(i))}${[" bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}`}class Uo extends(hn(Nn(Bn))){static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Io}}static get properties(){return{accept:{type:String},multiple:{type:Boolean,reflect:!0},buttonLabel:{type:String,attribute:"button-label"},maxFileSize:{type:Number,attribute:"max-file-size"},enableDropZone:{type:Boolean,attribute:"enable-drop-zone"},uploadOnSelect:{type:Boolean,attribute:"upload-on-select"},isDragging:{type:Boolean,attribute:"is-dragging",reflect:!0},uploadResponse:{type:Array,state:!1},_selectedFilesMetaData:{type:Array,state:!0}}}static localizeNamespaces=[{"lion-input-file":Fo},...super.localizeNamespaces];static get validationTypes(){return["error","info"]}get slots(){return{...super.slots,input:()=>ne`<input .value="${wo(this.getAttribute("value"))}" />`,"file-select-button":()=>ne`<button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </button>`,after:()=>ne`<div data-description></div>`,"selected-file-list":()=>({template:ne`
          <lion-selected-file-list
            .fileList=${this._selectedFilesMetaData}
            .multiple=${this.multiple}
          ></lion-selected-file-list>
        `,renderAsDirectHostChild:!0})}}get _inputNode(){return super._inputNode}get _buttonNode(){return this.querySelector(`#select-button-${this._inputId}`)}get buttonLabel(){return this.__buttonLabel||this._buttonNode?.textContent?.trim()||""}set buttonLabel(e){const t=this.buttonLabel;this.__buttonLabel=e,this.requestUpdate("buttonLabel",t)}get _focusableNode(){return this._buttonNode}get _isDragAndDropSupported(){return"draggable"in document.createElement("div")}constructor(){super(),this.type="file",this._selectedFilesMetaData=[],this.uploadResponse=[],this.__initialUploadResponse=this.uploadResponse,this.uploadOnSelect=!1,this.multiple=!1,this.enableDropZone=!1,this.maxFileSize=524288e3,this.accept="",this.buttonLabel="",this._initialButtonLabel="",this.modelValue=[],this._onRemoveFile=this._onRemoveFile.bind(this),this.__duplicateFileNamesValidator=new Vo({show:!1}),this.__previouslyParsedFiles=null}get _fileListNode(){return Array.from(this.children).find(e=>"selected-file-list"===e.slot)}connectedCallback(){super.connectedCallback(),this.__initialUploadResponse=this.uploadResponse,this._initialButtonLabel=this.buttonLabel,this._inputNode.addEventListener("change",this._onChange),this._inputNode.addEventListener("click",this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener("change",this._onChange),this._inputNode.removeEventListener("click",this._onClick)}onLocaleUpdated(){super.onLocaleUpdated(),this.multiple?this.buttonLabel=this._initialButtonLabel||this.msgLit("lion-input-file:selectTextMultipleFile"):this.buttonLabel=this._initialButtonLabel||this.msgLit("lion-input-file:selectTextSingleFile")}get operationMode(){return"upload"}get _acceptCriteria(){let e=[],t=[];if(this.accept){const i=this.accept.replace(/\s+/g,"").split(",");e=i.filter(e=>e.includes("/")),t=i.filter(e=>!e.includes("/"))}return{allowedFileTypes:e,allowedFileExtensions:t,maxFileSize:this.maxFileSize}}reset(){super.reset(),this._selectedFilesMetaData=[],this.uploadResponse=this.__initialUploadResponse,this.modelValue=[],this.dirty=!1}clear(){this._selectedFilesMetaData=[],this.uploadResponse=[],this.modelValue=[]}_showFeedbackConditionFor(e,t){return super._showFeedbackConditionFor(e,t)&&!(this.validationStates.error?.FileTypeAllowed||this.validationStates.error?.FileSizeAllowed)}parser(){if(this.__previouslyParsedFiles===this._inputNode.files)return this.modelValue;this.__previouslyParsedFiles=this._inputNode.files;const e=this._inputNode.files?Array.from(this._inputNode.files):[];return this.multiple?[...this.modelValue??[],...e]:e}formatter(e){return this._inputNode?.value||""}__setupDragDropEventListeners(){const e=this.shadowRoot?.querySelector(".input-file__drop-zone");["dragenter","dragover","dragleave"].forEach(t=>{e?.addEventListener(t,e=>{e.preventDefault(),e.stopPropagation(),this.isDragging="dragleave"!==t},!1)}),window.addEventListener("drop",e=>{e.target===this._inputNode&&e.preventDefault(),this.isDragging=!1},!1)}firstUpdated(e){super.firstUpdated(e),this.__setupFileValidators(),this._inputNode&&(this._inputNode.type=this.type,this._inputNode.setAttribute("tabindex","-1"),this._inputNode.multiple=this.multiple,this.accept.length&&(this._inputNode.accept=this.accept)),this.enableDropZone&&this._isDragAndDropSupported&&(this.__setupDragDropEventListeners(),this.setAttribute("drop-zone","")),this._fileListNode.addEventListener("file-remove-requested",this._onRemoveFile)}updated(e){super.updated(e),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("buttonLabel")&&this._buttonNode&&(this._buttonNode.textContent=this.buttonLabel),e.has("name")&&(this._inputNode.name=this.name),e.has("_ariaLabelledNodes")&&this.__syncAriaLabelledByAttributesToButton(),e.has("_ariaDescribedNodes")&&this.__syncAriaDescribedByAttributesToButton(),e.has("uploadResponse")&&(0===this._selectedFilesMetaData.length&&this.uploadResponse.forEach(e=>{const t={systemFile:{name:e.name},response:e,status:e.status,validationFeedback:[{message:e.errorMessage}]};this._selectedFilesMetaData=[...this._selectedFilesMetaData,t]}),this._selectedFilesMetaData.forEach(e=>{!this.uploadResponse.some(t=>t.name===e.systemFile.name)&&this.uploadOnSelect?this.__removeFileFromList(e):(this.uploadResponse.forEach(t=>{t.name===e.systemFile.name&&(e.response=t,e.downloadUrl=t.downloadUrl?t.downloadUrl:e.downloadUrl,e.status=t.status,e.validationFeedback=[{type:"string"==typeof t.errorMessage&&t.errorMessage?.length>0?"error":"success",message:t.errorMessage??""}])}),this._selectedFilesMetaData=[...this._selectedFilesMetaData])}),this._updateUploadButtonDescription())}__computeNewAddedFiles(e){const t=e.filter(e=>-1===this._selectedFilesMetaData.findIndex(t=>t.systemFile.name===e.name));return this.__duplicateFileNamesValidator.param={show:e.length!==t.length},this.validate(),t}_processDroppedFiles(e){if(e.preventDefault(),this.isDragging=!1,(!(e.dataTransfer&&e.dataTransfer.items.length>1)||this.multiple)&&e.dataTransfer?.files){if(this._inputNode.files=e.dataTransfer.files,this.multiple){const t=this.__computeNewAddedFiles(Array.from(e.dataTransfer.files));this.modelValue=[...this.modelValue??[],...t]}else this.modelValue=Array.from(e.dataTransfer.files);this._processFiles(Array.from(e.dataTransfer.files))}}_onChange(e){this.touched=!0,this._onUserInputChanged(),this._processFiles((e?.target)?.files)}_onClick(e){e.target.value=""}__syncAriaLabelledByAttributesToButton(){if(this._inputNode.hasAttribute("aria-labelledby")){const e=this._inputNode.getAttribute("aria-labelledby");this._buttonNode?.setAttribute("aria-labelledby",`select-button-${this._inputId} ${e}`)}}__syncAriaDescribedByAttributesToButton(){if(this._inputNode.hasAttribute("aria-describedby")){const e=this._inputNode.getAttribute("aria-describedby")||"";this._buttonNode?.setAttribute("aria-describedby",e)}}__setupFileValidators(){this.defaultValidators=[new Do(this._acceptCriteria),this.__duplicateFileNamesValidator]}_processFiles(e){const t=this.__computeNewAddedFiles(Array.from(e));let i;!this.multiple&&t.length>0&&(this._selectedFilesMetaData=[],this.uploadResponse=[]);for(const e of t.values())i=new zo(e,this._acceptCriteria),i.failedProp?.length?(this._handleErroredFiles(i),this.uploadResponse=[...this.uploadResponse,{name:i.systemFile.name,status:"FAIL",errorMessage:i.validationFeedback[0].message}]):this.uploadResponse=[...this.uploadResponse,{name:i.systemFile.name,status:"SUCCESS"}],this._selectedFilesMetaData=[...this._selectedFilesMetaData,i],this._handleErrors();const s=this._selectedFilesMetaData.filter(({systemFile:e,status:i})=>t.includes(e)&&"SUCCESS"===i).map(({systemFile:e})=>e);s.length>0&&this._dispatchFileListChangeEvent(s)}_dispatchFileListChangeEvent(e){this.dispatchEvent(new CustomEvent("file-list-changed",{detail:{newFiles:e}}))}_handleErrors(){let e=!1;if(this._selectedFilesMetaData.forEach(t=>{t.failedProp&&t.failedProp.length>0&&(e=!0)}),e)this.hasFeedbackFor?.push("error"),this.shouldShowFeedbackFor.push("error");else if(this._prevHasErrors&&this.hasFeedbackFor.includes("error")){const e=this.hasFeedbackFor.indexOf("error");this.hasFeedbackFor.slice(e,e+1);const t=this.shouldShowFeedbackFor.indexOf("error");this.shouldShowFeedbackFor.slice(t,t+1)}this._prevHasErrors=e}_handleErroredFiles(e){e.validationFeedback=[];const{allowedFileExtensions:t,allowedFileTypes:i}=this._acceptCriteria;let s,n=[],r=0;t.length?(n=t,s=n.pop(),r=n.length):i.length&&(i.forEach(e=>{if(e.endsWith("/*"))n.push(e.slice(0,-2));else if("text/plain"===e)n.push("text");else{const t=e.indexOf("/"),i=e.slice(t+1);if(i.includes("+")){const e=i.split("+");n.push(`.${e[0]}`)}else n.push(`.${i}`)}}),s=n.pop(),r=n.length);let o="";o=s?r?`${this.msgLit("lion-input-file:allowedFileValidatorComplex",{allowedTypesArray:n.join(", "),allowedTypesLastItem:s,maxSize:Bo(this.maxFileSize)})}`:`${this.msgLit("lion-input-file:allowedFileValidatorSimple",{allowedType:s,maxSize:Bo(this.maxFileSize)})}`:`${this.msgLit("lion-input-file:allowedFileSize",{maxSize:Bo(this.maxFileSize)})}`;const a={message:o,type:"error"};e.validationFeedback?.push(a)}_updateUploadButtonDescription(){const e=[];let t;this._selectedFilesMetaData.forEach(i=>{"FAIL"===i.status&&(t=i.validationFeedback?i.validationFeedback[0].message.toString():"",e.push(i.systemFile.name))});const i=this.querySelector('[slot="after"]');if(i)if(this._selectedFilesMetaData&&0!==this._selectedFilesMetaData.length)if(1===this._selectedFilesMetaData.length){const{name:e}=this._selectedFilesMetaData[0].systemFile;this.uploadOnSelect?i.textContent=t||this.msgLit("lion-input-file:fileUploaded")+(e??""):i.textContent=t||this.msgLit("lion-input-file:fileSelected")+(e??"")}else this.uploadOnSelect?i.textContent=`${this.msgLit("lion-input-file:filesUploaded",{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit("lion-input-file:generalValidatorMessage",{validatorMessage:t,listOfErroneousFiles:e.join(", ")}):""}`:i.textContent=`${this.msgLit("lion-input-file:filesSelected",{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit("lion-input-file:generalValidatorMessage",{validatorMessage:t,listOfErroneousFiles:e.join(", ")}):""}`;else this.uploadOnSelect?i.textContent=this.msgLit("lion-input-file:noFilesUploaded"):i.textContent=this.msgLit("lion-input-file:noFilesSelected")}__removeFileFromList(e){this._selectedFilesMetaData=this._selectedFilesMetaData.filter(t=>t.systemFile.name!==e.systemFile.name),this.modelValue&&(this.modelValue=this.modelValue.filter(t=>t.name!==e.systemFile.name)),this._inputNode.value="",this._handleErrors(),this._updateUploadButtonDescription()}_onRemoveFile(e){if(this.disabled)return;const{removedFile:t}=e.detail;!this.uploadOnSelect&&t&&this.__removeFileFromList(t),this._removeFile(t)}_removeFile(e){this.dispatchEvent(new CustomEvent("file-removed",{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_reflectBackOn(){return!1}_isEmpty(){return 0===this.modelValue?.length}_dropZoneTemplate(){return ne`
      <div @drop="${this._processDroppedFiles}" class="input-file__drop-zone">
        <div class="input-file__drop-zone__text">
          ${this.msgLit("lion-input-file:dragAndDropText")}
        </div>
        <slot name="file-select-button"></slot>
      </div>
    `}_inputGroupAfterTemplate(){return ne` <slot name="selected-file-list"></slot> `}_inputGroupInputTemplate(){return ne`
      <slot name="input"> </slot>
      <slot name="after"> </slot>
      ${this.enableDropZone&&this._isDragAndDropSupported?this._dropZoneTemplate():ne`
            <div class="input-group__file-select-button">
              <slot name="file-select-button"></slot>
            </div>
          `}
    `}static get styles(){return[super.styles,v`
        .input-group__container {
          position: relative;
          display: flex;
          flex-direction: column;
          width: fit-content;
        }

        :host([drop-zone]) .input-group__container {
          width: auto;
        }

        .input-group__container ::slotted(input[type='file']) {
          /** Invisible, since means of interaction is button */
          position: absolute;
          opacity: 0;
          /** Full cover positioned, so it will be a drag and drop surface */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .input-file__drop-zone {
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          border: dashed 2px black;
          padding: 24px 0;
        }

        .input-group__container ::slotted([slot='after']) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}__openDialogOnBtnClick(e){e.preventDefault(),e.stopPropagation(),this._inputNode.click()}}var qo=v`
  /* Add any craft-specific styles for input-file here */
  ::slotted([slot='selected-file-list']) {
    margin-block-start: var(--c-spacing-lg);
  }
`;customElements.get("craft-input-file")||customElements.define("craft-input-file",class extends Uo{static get styles(){return[...super.styles,ar,qo]}get slots(){return{...super.slots,"file-select-button":()=>ne`<craft-button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </craft-button>`}}static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Mo}}});var Ho=v`
  craft-input input[type='checkbox'],
  craft-input input[type='radio'] {
    background-color: var(--c-input-fill, var(--c-form-control-fill));
    border-width: var(
      --c-input-border-width,
      var(--c-form-control-border-width)
    );
    border-style: var(
      --c-input-border-style,
      var(--c-form-control-border-style)
    );
    border-color: var(
      --c-input-border-color,
      var(--c-form-control-border-color)
    );
    border-radius: var(--c-input-radius, var(--c-radius-sm));
  }

  [slot='help-text'] {
    font-size: var(--c-text-base);
    color: var(--c-text-quiet);
  }

  :host([hidden-input]) .input-group__container {
    display: none;
  }

  /* A maxlength shrinks the control to the expected character width instead
     of spanning the column. The width attribute decouples the behaviors:
     width="full" spans despite a maxlength; width="auto" shrinks without
     one. */
  :host([maxlength]:not([width='full'])),
  :host([width='auto']) {
    width: fit-content;
  }

  :host([maxlength]:not([width='full'])) ::slotted([slot='input']),
  :host([width='auto']) ::slotted([slot='input']) {
    width: auto;
  }

  /* Stop the input chrome from flexing back out to the available space. */
  :host([maxlength]:not([width='full'])) .input-group__container,
  :host([width='auto']) .input-group__container {
    flex: 0 0 auto;
  }
`,Wo=class extends Un{constructor(...e){super(...e),this.size="medium",this.small=!1,this.center=!1,this.monospace=!1,this.hiddenInput=!1}static get styles(){return[...super.styles,ar,Ho]}connectedCallback(){super.connectedCallback(),this._inputNode&&this.maxlength&&this.maxlength>0&&(this._inputNode.maxLength=this.maxlength,"full"!==this.width&&(this._inputNode.size=this.maxlength))}};Ae([Te({type:Number,reflect:!0})],Wo.prototype,"maxlength",void 0),Ae([Te({type:String,reflect:!0})],Wo.prototype,"size",void 0),Ae([Te({reflect:!0,type:Boolean})],Wo.prototype,"small",void 0),Ae([Te({type:String,reflect:!0})],Wo.prototype,"width",void 0),Ae([Te({reflect:!0,type:Boolean})],Wo.prototype,"center",void 0),Ae([Te({reflect:!0,type:Boolean})],Wo.prototype,"monospace",void 0),Ae([Te({reflect:!0,type:Boolean,attribute:"hidden-input"})],Wo.prototype,"hiddenInput",void 0),customElements.get("craft-input")||customElements.define("craft-input",Wo);var jo=class extends Wo{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize="off"}static get styles(){return[...super.styles,v`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}firstUpdated(e){super.firstUpdated(e),this._inputNode?.setAttribute("autocorrect",this.autocorrect?"on":"off"),this._inputNode?.setAttribute("autocapitalize",this.autocapitalize)}};Ae([Te({reflect:!0})],jo.prototype,"autocorrect",void 0),Ae([Te({reflect:!0,type:String})],jo.prototype,"autocapitalize",void 0),customElements.get("craft-input-handle")||customElements.define("craft-input-handle",jo);var Ko=class extends Un{static get styles(){return[...super.styles,ar,v`
        .input-group__container {
          position: relative;
        }

        .input-group__suffix {
          position: absolute;
          inset-inline-end: var(--c-input-spacing-inline);
          inset-block-start: 50%;
          transform: translateY(calc(-50%));
        }
      `]}constructor(){super(),this._visible=!1,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?"text":"password"},this.renderSuffix=()=>ne`
      <craft-button
        type="button"
        icon
        size="small"
        variant="plain"
        @click="${this.reveal}"
        appearance="plain"
      >
        <span class="icon"
          >${this._visible?ne`<craft-icon
                name="eye-slash"
                label="${Qe("Hide")}"
              ></craft-icon>`:ne`<craft-icon name="eye" label="${Qe("Show")}"></craft-icon>`}
        </span>
      </craft-button>
    `,this.type="password"}get slots(){return{...super.slots,suffix:()=>({template:this.renderSuffix()})}}};Ae([Le()],Ko.prototype,"_visible",void 0),customElements.get("craft-input-password")||customElements.define("craft-input-password",Ko);var Go=v`
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
`,Zo=class extends Ce{constructor(){super(),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.variant="primary",this.id=this.id||`badge-${Math.floor(1e9*Math.random()).toString()}`}showCount(){return null!==this.badgeCount&&this.badgeCount>0}truncatedNumber(){if(this.showCount)return this.badgeCount>99?"99+":this.badgeCount.toString()}getBadgeRole(){return this.altText?"img":oe}getLabelId(){return`${this.id}-label`}renderBadgeContents(){return ne`
      ${this.showCount()?ne`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:oe}
      ${this.altText?ne`
            <sl-visually-hidden id=${this.getLabelId()}
              >${this.altText}</sl-visually-hidden
            >
          `:oe}
    `}render(){return ne`
      <div
        part="badge"
        id=${this.id}
        class="${Ue({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":"secondary"===this.variant,"badge-indicator--inverse":"inverse"===this.variant})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?this.getLabelId():oe}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};Zo.styles=[Go],Ae([Te({attribute:"alt-text"})],Zo.prototype,"altText",void 0),Ae([Te({attribute:"badge-count"})],Zo.prototype,"badgeCount",void 0),Ae([Te({attribute:"badge-count-suffix"})],Zo.prototype,"badgeCountSuffix",void 0),Ae([Te()],Zo.prototype,"variant",void 0),Ae([Te()],Zo.prototype,"id",void 0),customElements.get("craft-badge-indicator")||customElements.define("craft-badge-indicator",Zo);const Yo="important",Jo=" !"+Yo,Xo=ze(class extends Be{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const s=t[e];if(null!=s){this.ft.add(e);const t="string"==typeof s&&s.endsWith(Jo);e.includes("-")||t?i.setProperty(e,t?s.slice(0,-11):s,t?Yo:""):i[e]=s}}return re}});var Qo=v`
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
  }

  .nav-item--prefixed {
    padding-inline: var(--c-spacing-sm);
    grid-template-columns: calc(24rem / 16) 1fr auto;
  }

  .nav-item--flush {
    margin-inline-start: calc(var(--_padding-inline) * -1);
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

  .subnav {
    margin-block-start: var(--c-spacing-sm);
    margin-inline-start: calc(
      (var(--c-size-icon-md) / 2) + var(--c-spacing-sm) + 1px
    );
    padding-inline: var(--c-spacing-sm);
    border-left: 2px solid color-mix(in srgb, currentColor, transparent 90%);
  }

  :host([icon-only]) {
    .nav-item {
      gap: 0;
      grid-template-columns: calc(24rem / 16);
    }

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
`,ea=class extends Ce{get hasLabel(){return Array.from(this.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute("slot"))}constructor(){super(),this.active=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState="closed",this.togglePosition="suffix",this.subnavState="closed",this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.subnavState=this.active||"open"===this.initialState?"open":"closed"}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState="open"===this.subnavState?"closed":"open"}renderIconItem(e){let t=`item-${this.id}`;return ne`
      <a
        class="${Ue({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":!this.href})}"
        id="${t}"
        href="${wo(this.href||void 0)}"
        aria-current="${!!this.active&&"page"}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(e)}
      </a>
      <craft-tooltip for="${t}" placement="right-start"
        ><slot></slot
      ></craft-tooltip>
    `}renderSubnavToggle(){return ne`
      <craft-button
        @click="${this.toggleSubnav}"
        appearance="${Wt.Plain}"
        icon
        size="small"
        aria-controls="${this.id}-subnav"
        aria-expanded="${"open"===this.subnavState?"true":"false"}"
        aria-labelledby="${this.id}-toggle-icon ${this.id}-label"
      >
        <craft-icon
          id="${this.id}-toggle-icon"
          name="${"closed"===this.subnavState?"chevron-down":"chevron-up"}"
          style="font-size: calc(10rem / 16)"
          label="${Qe("Toggle subnavigation")}"
        ></craft-icon>
      </craft-button>
    `}renderPrefix(e=!1){return e&&"prefix"===this.togglePosition?ne`
        <span class="nav-item__prefix">${this.renderSubnavToggle()}</span>
      `:ne`
      <span class="nav-item__prefix">
        <slot name="prefix">
          <slot name="icon">
            ${this.icon?ne` <craft-icon
                  name="${this.icon}"
                  class="nav-icon"
                ></craft-icon>`:oe}
          </slot>
          ${this.indicator?ne`<craft-badge-indicator
                altText="${Qe("Has Notifications")}"
              />`:oe}
        </slot>
      </span>
    `}renderSuffix(e=!1){return ne`
      <div class="nav-item__suffix">
        <slot name="suffix">
          ${e&&"suffix"===this.togglePosition?this.renderSubnavToggle():oe}
        </slot>
      </div>
    `}renderItem(e,t=!1){return ne`
      <a
        class="${Ue({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":!this.href})}"
        href="${wo(this.href||void 0)}"
        aria-current="${!!this.active&&"page"}"
      >
        ${t?this.renderPrefix(e):oe}
        <slot
          id="${this.id}-label"
          @slotchange="${()=>this.requestUpdate()}"
        ></slot>
        ${this.renderSuffix(e)}
      </a>
    `}render(){let e=!!this.querySelector('[slot="subnav"]'),t=e&&this.hasLabel,i=t&&"prefix"===this.togglePosition||!!this.icon||!!this.querySelector('[slot="prefix"]')||!!this.querySelector('[slot="icon"]'),s=!t||"open"===this.subnavState;return ne`
      <li>
        ${this.iconOnly?this.renderIconItem(t):this.renderItem(t,i)}
        ${e?ne`
              <div
                class="subnav"
                id="${this.id}-subnav"
                style="${Xo({display:s?"block":"none"})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:oe}
      </li>
    `}};ea.styles=Qo,Ae([Te()],ea.prototype,"icon",void 0),Ae([Te()],ea.prototype,"href",void 0),Ae([Te({type:Boolean,reflect:!0})],ea.prototype,"active",void 0),Ae([Te({type:Boolean})],ea.prototype,"external",void 0),Ae([Te({type:Boolean})],ea.prototype,"indicator",void 0),Ae([Te()],ea.prototype,"id",void 0),Ae([Te({reflect:!0,type:Boolean,attribute:"icon-only"})],ea.prototype,"iconOnly",void 0),Ae([Te()],ea.prototype,"flush",void 0),Ae([Te({reflect:!0,attribute:"initial-state"})],ea.prototype,"initialState",void 0),Ae([Te({attribute:"toggle-position"})],ea.prototype,"togglePosition",void 0),Ae([Le()],ea.prototype,"subnavState",void 0),customElements.get("craft-nav-item")||customElements.define("craft-nav-item",ea);var ta=class extends Ce{render(){return ne`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};ta.styles=v`
    :host {
      display: block;
    }

    .nav-list {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `,customElements.get("craft-nav-list")||customElements.define("craft-nav-list",ta);var ia=class extends Ce{constructor(...e){super(...e),this.appearance="raised",this.size="lg"}render(){return ne`<div
      class="${Ue({"cp-pane":!0,"cp-pane--raised":"raised"===this.appearance,"cp-pane--sunken":"sunken"===this.appearance,"cp-pane--lg":"lg"===this.size,"cp-pane--md":"md"===this.size,"cp-pane--sm":"sm"===this.size})}"
    >
      <slot></slot>
    </div>`}};ia.styles=[v`
      .cp-pane {
        display: block;
        border: 1px solid var(--c-color-border-quiet);
        border-radius: var(--c-radius-md);
      }

      .cp-pane--lg {
        padding: var(--c-spacing-lg);
      }

      .cp-pane--raised {
        background-color: var(--c-surface-raised);
        box-shadow: var(--c-shadow-raised);
      }
    `],Ae([Te()],ia.prototype,"appearance",void 0),Ae([Te()],ia.prototype,"size",void 0),customElements.get("craft-pane")||customElements.define("craft-pane",ia);var sa=v`
  :host {
    --_height: var(--c-progress-bar-height, 0.375rem);
    --_radius: var(--c-progress-bar-radius, var(--c-radius-full));
    --_track-color: var(
      --c-progress-bar-track-color,
      var(--c-color-neutral-fill-quiet)
    );
    --_fill-color: var(
      --c-progress-bar-fill-color,
      var(--c-color-accent-border-normal)
    );

    display: block;
  }

  :host([show-status]) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5em;
  }

  :host([hidden]) {
    display: none;
  }

  .progress-bar {
    border-radius: var(--_radius);
    border: 2px solid var(--_fill-color);
    padding: 2px;
    max-width: 100%;
    height: var(--_height);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .progress-bar__fill {
    border-radius: calc(var(--_radius) - 4px);
    height: 100%;
    background-color: var(--_fill-color);
  }

  .progress-bar__fill--smooth {
    transition: width 0.2s ease-out;
  }

  .progress-bar--pending .progress-bar__fill {
    width: 100%;
    background: repeating-linear-gradient(
      -45deg,
      var(--_fill-color),
      var(--_fill-color) 10px,
      var(--_track-color) 10px,
      var(--_track-color) 20px
    );
    background-size: 300% 100%;
    background-position: 0 0;
    animation: progress-bar-pending 1s linear infinite;
  }

  @keyframes progress-bar-pending {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 28.28px 0; /* sqrt(2) * 20px for 45deg stripes */
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar--pending .progress-bar__fill {
      animation: none;
    }

    .progress-bar__fill--smooth {
      transition: none;
    }
  }

  .progress-bar__status {
    font-size: 0.9em;
    fon
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,na=new WeakMap,ra=class extends Ce{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label="Progress",nt(this,na,0)}updated(e){if((e.has("total")||e.has("processed"))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&rt(na,this)<100&&this.dispatchEvent(new CustomEvent("complete",{bubbles:!0,composed:!0})),this.progress=e}e.has("progress")&&(this.progress>0&&this.pending&&(this.pending=!1),ot(na,this,this.progress))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,ot(na,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?"100%":`${this.progressPercent}%`};return ne`
      <div
        class=${Ue({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?oe:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${Ue({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${Xo(e)}
        ></div>
      </div>
      ${this.showStatus?ne`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:oe}
      <span class="visually-hidden">
        ${this.pending?"Loading":`${this.progressPercent}%`}
      </span>
    `}};ra.styles=[sa],Ae([Te({type:Number})],ra.prototype,"progress",void 0),Ae([Te({type:Number})],ra.prototype,"total",void 0),Ae([Te({type:Number})],ra.prototype,"processed",void 0),Ae([Te({type:Boolean,attribute:"show-status"})],ra.prototype,"showStatus",void 0),Ae([Te({type:Boolean,reflect:!0})],ra.prototype,"pending",void 0),Ae([Te({type:Boolean})],ra.prototype,"smooth",void 0),Ae([Te({type:String})],ra.prototype,"label",void 0),customElements.get("craft-progress-bar")||customElements.define("craft-progress-bar",ra);var oa=new WeakMap,aa=new WeakMap,la=new WeakMap,da=new WeakMap,ca=new WeakMap,ha=new WeakMap,ua=new WeakMap,pa=new WeakMap,ma=new WeakMap,fa=new WeakMap,_a=new WeakMap,ba=new WeakSet,ga=class extends Ce{constructor(...e){super(...e),st(this,ba),this.progress=0,this.failed=!1,this.color="currentColor",this.bgColor="#a3afbb",this.failColor="#da5a47",this.label="Progress",this.autoComplete=!1,nt(this,oa,null),nt(this,aa,0),nt(this,la,0),nt(this,da,0),nt(this,ca,0),nt(this,ha,0),nt(this,ua,null),nt(this,pa,0),nt(this,ma,null),nt(this,fa,0),nt(this,_a,!1)}connectedCallback(){super.connectedCallback(),ot(_a,this,window.matchMedia("(prefers-reduced-motion: reduce)").matches)}disconnectedCallback(){super.disconnectedCallback(),it(ba,this,Ea).call(this)}firstUpdated(){ot(oa,this,this.renderRoot.querySelector("canvas")),it(ba,this,va).call(this),it(ba,this,ya).call(this)}updated(e){e.has("progress")?it(ba,this,ya).call(this):(e.has("color")||e.has("bgColor")||e.has("failColor")||e.has("failed"))&&it(ba,this,ka).call(this)}get canvas(){return rt(oa,this)}get prefersReducedMotion(){return rt(_a,this)}runCompleteAnimation(){return new Promise(e=>{if(rt(_a,this))return ot(ha,this,1),rt(oa,this)&&(rt(oa,this).style.opacity="0"),it(ba,this,ka).call(this),void e();it(ba,this,Ca).call(this,1,()=>{rt(oa,this)&&(rt(oa,this).style.transition="opacity 0.4s",rt(oa,this).style.opacity="0"),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent("complete",{bubbles:!0,composed:!0}))}render(){return ne`
      <canvas
        part="canvas"
        role="progressbar"
        aria-valuenow=${(this.progress>=0?this.progress:void 0)??""}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      ></canvas>
      <span class="visually-hidden">
        ${this.failed?"Failed":this.progress<0?"Loading":`${this.progress}%`}
      </span>
    `}};function va(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue("--_size")),i=parseFloat(e.getPropertyValue("--_stroke-width")),s=window.devicePixelRatio>1?2:1;ot(aa,this,t*s),ot(la,this,rt(aa,this)/2),ot(ca,this,i*s),ot(da,this,(t/2-i/2)*s),rt(oa,this)&&(rt(oa,this).width=rt(aa,this),rt(oa,this).height=rt(aa,this))}function ya(){if(this.progress>=0&&null!==rt(ma,this)&&(cancelAnimationFrame(rt(ma,this)),ot(ma,this,null),ot(pa,this,0)),this.progress<0)return void(null===rt(ma,this)&&it(ba,this,wa).call(this));let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&rt(fa,this)<100)return ot(fa,this,this.progress),void this.complete();rt(fa,this)>0&&this.progress>rt(fa,this)&&!rt(_a,this)?it(ba,this,Ca).call(this,e):(ot(ha,this,e),it(ba,this,ka).call(this)),ot(fa,this,this.progress)}function wa(){if(rt(_a,this))return ot(ha,this,.25),void it(ba,this,ka).call(this);let e=()=>{ot(pa,this,rt(pa,this)+.05),ot(ha,this,.15+.1*Math.sin(3*rt(pa,this))),it(ba,this,ka).call(this),ot(ma,this,requestAnimationFrame(e))};ot(ma,this,requestAnimationFrame(e))}function ka(){let e=rt(oa,this)?.getContext("2d");if(e){if(e.clearRect(0,0,rt(aa,this),rt(aa,this)),this.failed)return void it(ba,this,xa).call(this,e,this.failColor,1,0);if(it(ba,this,xa).call(this,e,this.bgColor,1,0),rt(ha,this)>0){let t=this.progress<0?rt(pa,this):-Math.PI/2;it(ba,this,xa).call(this,e,this.color,rt(ha,this),t)}}}function xa(e,t,i,s){e.strokeStyle=t,e.lineWidth=rt(ca,this),e.lineCap="round",e.beginPath(),e.arc(rt(la,this),rt(la,this),rt(da,this),s,s+2*i*Math.PI),e.stroke()}function Ca(e,t){it(ba,this,Ea).call(this);let i=performance.now(),s=rt(ha,this),n=r=>{let o=r-i,a=Math.min(o/500,1);ot(ha,this,s+(e-s)*(1-(1-a)**3)),it(ba,this,ka).call(this),a<1?ot(ua,this,requestAnimationFrame(n)):(ot(ua,this,null),t?.())};ot(ua,this,requestAnimationFrame(n))}function Ea(){null!==rt(ua,this)&&(cancelAnimationFrame(rt(ua,this)),ot(ua,this,null)),null!==rt(ma,this)&&(cancelAnimationFrame(rt(ma,this)),ot(ma,this,null))}ga.styles=v`
    :host {
      --_size: var(--c-progress-size, 16px);
      --_stroke-width: var(--c-progress-stroke-width, 3px);

      display: inline-block;
      position: relative;
      width: var(--_size);
      height: var(--_size);
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--_size);
      height: var(--_size);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,Ae([Te({type:Number})],ga.prototype,"progress",void 0),Ae([Te({type:Boolean})],ga.prototype,"failed",void 0),Ae([Te({type:String})],ga.prototype,"color",void 0),Ae([Te({type:String,attribute:"bg-color"})],ga.prototype,"bgColor",void 0),Ae([Te({type:String,attribute:"fail-color"})],ga.prototype,"failColor",void 0),Ae([Te({type:String})],ga.prototype,"label",void 0),Ae([Te({type:Boolean,attribute:"auto-complete"})],ga.prototype,"autoComplete",void 0),customElements.get("craft-progress")||customElements.define("craft-progress",ga);class Na extends(Ln(In(Ce))){connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}resetGroup(){let e;this.formElements.forEach(t=>{"function"==typeof t.resetGroup?t.resetGroup():"function"==typeof t.reset&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}}customElements.get("craft-radio-group")||customElements.define("craft-radio-group",class extends Na{constructor(...e){super(...e),this.__ssrNameAdopted=!1}connectedCallback(){this.__adoptSlottedName(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedName(),super.willUpdate(e)}__adoptSlottedName(){if(this.__ssrNameAdopted||this.name)return;let e=this.querySelector('input[type="radio"][name]');e&&(this.__ssrNameAdopted=!0,this.name=e.name)}static get styles(){return[...super.styles,ar,v`
        .input-group {
          display: grid;
          gap: var(--c-spacing-xs);
        }
      `]}});class Aa extends(Hn(Un)){connectedCallback(){super.connectedCallback(),this.type="radio"}}var Sa=class extends(Kn(Aa)){static get styles(){return[...super.styles,v`
        /* same as checkbox, potentially consolidate */
        :host {
          gap: var(--c-spacing-sm);
        }
      `]}};customElements.get("craft-radio")||customElements.define("craft-radio",Sa);var $a=v`
  craft-button {
    cursor: move;
  }

  :host([disabled]) {
    cursor: default;
    opacity: 0.25;
    pointer-events: none;
  }
`,Ta=class extends Ce{constructor(...e){super(...e),this.label=null,this.position="middle",this.orientation="vertical",this.variant="neutral",this.disabled=!1}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}_reorder(e){this.disabled||"up"===e&&"first"===this.position||"down"===e&&"last"===this.position||this.dispatchEvent(new CustomEvent("reorder",{detail:{direction:e}}))}_isRtl(){return"rtl"===(this.closest("[dir]")?.getAttribute("dir")??document.documentElement.getAttribute("dir"))?.toLowerCase()}render(){let e=this.label??Qe("Reorder"),t="horizontal"===this.orientation,i=t&&this._isRtl(),s=t?i?"arrow-right":"arrow-left":"arrow-up",n=t?i?"arrow-left":"arrow-right":"arrow-down",r=Qe(t?"Move forward":"Move up"),o=Qe(t?"Move backward":"Move down");return ne`
      <craft-action-menu ?disabled="${this.disabled}">
        <craft-button
          slot="invoker"
          type="button"
          icon
          size="small"
          appearance="plain"
          variant="${this.variant}"
          ?disabled="${this.disabled}"
        >
          <craft-icon label="${e}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M71.3 295.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2-57.4 21.9-79.2 0Zm113.1-113.1c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.8-79.2 0Zm0 147c21.9-21.9 57.3-21.9 79.2 0 21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.9-21.8-21.9-57.3 0-79.2Zm113.1-113.1c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2-57.3 21.9-79.2 0c-21.8-21.9-21.8-57.3 0-79.2Z"
              />
            </svg>
          </craft-icon>
        </craft-button>

        <div slot="content">
          <craft-action-item
            icon="${s}"
            ?disabled="${"first"===this.position}"
            @click="${()=>this._reorder("up")}"
            data-action="moveUp"
            command="--move-up"
            >${r}</craft-action-item
          >
          <craft-action-item
            icon="${n}"
            ?disabled="${"last"===this.position}"
            @click="${()=>this._reorder("down")}"
            data-action="moveDown"
            command="--move-down"
            >${o}</craft-action-item
          >
        </div>
      </craft-action-menu>
    `}};Ta.styles=[$a],Ae([Te()],Ta.prototype,"label",void 0),Ae([Te({reflect:!0})],Ta.prototype,"position",void 0),Ae([Te({reflect:!0})],Ta.prototype,"orientation",void 0),Ae([Te({reflect:!0})],Ta.prototype,"variant",void 0),Ae([Te({reflect:!0,type:Boolean})],Ta.prototype,"disabled",void 0),customElements.get("craft-reorder-button")||customElements.define("craft-reorder-button",Ta);class La extends(Cs(Ni)){static get styles(){return[...super.styles,v`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}get slots(){return{...super.slots,after:()=>{const e=document.createElement("span");return e.textContent="▼",e.setAttribute("role","img"),e.setAttribute("aria-hidden","true"),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById("content-wrapper")}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type="button"}__handleKeydown(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){const e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return ne` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return ne``}_beforeTemplate(){return ne` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return ne`${this.singleOption?"":ne`<slot name="after"></slot>`}`}}var Oa=v`
  :host {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-sm);
    width: 100%;
    cursor: pointer;
    padding-block: 0;
    padding-inline: var(--c-input-spacing-inline);
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
    font: inherit;
    overflow: clip;
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  #content-wrapper {
    position: relative;
    pointer-events: none;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .indicator {
    flex: 0 0 auto;
    font-size: 0.8em;
  }
`,Fa=class extends La{static get styles(){return[...super.styles,Oa]}_afterTemplate(){return ne`${this.singleOption?"":ne`<craft-icon class="indicator" name="chevron-down"></craft-icon>`}`}};class Ia extends(Cs(hn(Lt(gr)))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":La}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:"navigate-within-invoker"},interactionMode:{type:String,attribute:"interaction-mode"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}_inputGroupInputTemplate(){return ne`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>ne`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode="auto",this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener("keyup",this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener("keyup",this.__onKeyUp)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"interactionMode"===e&&("auto"===this.interactionMode?this.interactionMode=mt.isMac?"mac":"windows/linux":(this.selectionFollowsFocus=Boolean("windows/linux"===this.interactionMode),this.navigateWithinInvoker=Boolean("windows/linux"===this.interactionMode))),"disabled"!==e&&"readOnly"!==e||this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has("singleOption")&&(this.singleOption?(this._invokerNode.removeAttribute("role"),this._invokerNode.removeAttribute("aria-haspopup"),this._invokerNode.removeAttribute("aria-expanded")):(this._invokerNode.setAttribute("role","button"),this._invokerNode.setAttribute("aria-haspopup","listbox"),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has("_ariaLabelledNodes")&&this._invokerNode.setAttribute("aria-labelledby",`${this._inputNode.getAttribute("aria-labelledby")} ${this._invokerNode.id}`),e.has("_ariaDescribedNodes")&&this._invokerNode.setAttribute("aria-describedby",this._inputNode.getAttribute("aria-describedby")),e.has("showsFeedbackFor")&&this._invokerNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`)),e.has("modelValue")&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),this.hasNoDefaultSelected||this.__hasInitialSelectedFormElement||e.disabled&&!this.disabled||(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=1===this.formElements.length&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate("selectedElement"))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute("aria-haspopup","listbox"),this.__setupInvokerNodeEventListener()}__invokerOnClick(){this.disabled||this.readOnly||this.singleOption||this.__blockListShow||this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event("blur"))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener("click",this.__invokerOnClick),this._invokerNode.addEventListener("blur",this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener("click",this.__invokerOnClick),this._invokerNode.removeEventListener("blur",this.__invokerOnBlur)}_defineOverlayConfig(){return{placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){-1===this.checkedIndex?this._overlayCtrl.updateConfig({inheritsReferenceWidth:"min"}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute("autofocus","")}__overlayOnShow(){null!=this.checkedIndex&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute("autofocus")}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.addEventListener("show",this.__overlayOnShow),this._overlayCtrl.addEventListener("hide",this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener("show",this.__overlayOnShow),this._overlayCtrl.removeEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.removeEventListener("hide",this.__overlayOnHide)}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;const e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";const s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.width=`${s+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=i}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption)return;if(this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case"ArrowUp":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowDown":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowLeft":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case"ArrowRight":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;const{key:t}=e;switch(t){case"Tab":if(!0===this._overlayCtrl.config.trapsKeyboardFocus)return;this.opened=!1;break;case"Escape":case"Enter":case" ":this.opened=!1,this.__blockListShowDuringTransition()}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener("click",this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener("click",this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}}var Ma=v`
  ${or}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: calc(var(--c-size-control-sm) - 2px);
  }

  .input-group__input {
    ${rr}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
    background-color: transparent;
  }

  #overlay-content-node-wrapper {
    position: absolute;
    width: 100%;
  }

  ::slotted([slot='input']) {
    display: grid;
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
    max-height: calc(var(--c-spacing) * 60);
    overflow: auto;
  }
`,Da=class extends Ia{constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,Ma]}static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":Fa}}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";let s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.minWidth=`${s}px`,this._invokerNode.style.width=""),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=i}_inputGroupInputTemplate(){return ne`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}};Ae([Te({reflect:!0,type:Boolean})],Da.prototype,"small",void 0),customElements.get("craft-select-rich")||customElements.define("craft-select-rich",Da);var Va=v`
  :host {
    display: block;
  }
`,Ra=class extends Ce{constructor(...e){super(...e),this.label="",this.name="",this.modelValue=null,this.allowTransparent=!1}_swatchTemplate(e){return ne`<span
      class="select-color__swatch"
      style="${"__blank__"===e?"flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);background:linear-gradient(45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(-45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%),linear-gradient(-45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;":`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);background-color:var(--c-color-${e}-fill-loud);`}"
      aria-hidden="true"
    ></span>`}_optionTemplate(e,t){return ne`<craft-option .choiceValue=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}_handleModelValueChanged(e){e.stopPropagation();let t=e.target;this.modelValue=t?.modelValue??null,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,composed:!0}))}render(){return ne`
      <craft-select-rich
        label=${this.label}
        name=${this.name}
        .modelValue=${this.modelValue}
        @model-value-changed=${this._handleModelValueChanged}
      >
        ${this.allowTransparent?this._optionTemplate("__blank__",Qe("Transparent")):""}
        ${Ht.map(e=>this._optionTemplate(e,Qe(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(e))))}
      </craft-select-rich>
    `}};Ra.styles=[Va],Ae([Te()],Ra.prototype,"label",void 0),Ae([Te()],Ra.prototype,"name",void 0),Ae([Te({attribute:"model-value"})],Ra.prototype,"modelValue",void 0),Ae([Te({type:Boolean,reflect:!0,attribute:"allow-transparent"})],Ra.prototype,"allowTransparent",void 0),customElements.get("craft-select-color")||customElements.define("craft-select-color",Ra);class Pa extends Bn{static get properties(){return{autocomplete:{type:String}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return Array.from(this.children).find(e=>"input"===e.slot)}}class za extends Pa{get operationMode(){return"select"}connectedCallback(){super.connectedCallback(),this._inputNode.addEventListener("change",this._proxyChangeEvent),this.__selectObserver=new MutationObserver(()=>{this._syncValueUpwards(),this._calculateValues({source:"model"})}),this.__selectObserver.observe(this._inputNode,{attributes:!0,childList:!0,subtree:!0})}updated(e){super.updated(e),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener("change",this._proxyChangeEvent),this.__selectObserver?.disconnect()}formatter(e){const t=Array.from(this._inputNode.options).find(t=>t.value===e);return t?t.text:""}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=void 0!==this.modelValue?this.modelValue:"")}_proxyChangeEvent(){this.dispatchEvent(new CustomEvent("user-input-changed",{bubbles:!0,composed:!0}))}}var Ba=v`
  ${or}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: calc(var(--c-size-control-sm) - 2px);
  }

  ::slotted(.form-control) {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    min-height: none;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    border-radius: var(--c-input-radius);
  }

  .input-group__input {
    ${rr}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,Ua=class extends za{constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,Ba]}_inputGroupInputTemplate(){return ne`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};Ae([Te({reflect:!0,type:Boolean})],Ua.prototype,"small",void 0),customElements.get("craft-select")||customElements.define("craft-select",Ua);var qa=v`
  :host {
    display: inline-block;
  }

  .slide-picker {
    --_segment-height: 1rem;
    --_segment-width: calc(8rem / 16);
    --_segment-border: var(--c-color-neutral-border-normal);
    --_segment-active-border: var(--c-color-neutral-border-loud);
    --_segment-fill: var(--c-color-neutral-fill-quiet);
    --_segment-active-fill: var(--c-color-neutral-fill-normal);
    display: inline-flex;
    align-items: stretch;
    min-height: max(var(--_segment-height), var(--touch-target-size));
    outline: none;
  }

  .slide-picker__segment {
    inline-size: var(--_segment-width);
    block-size: calc(var(--_segment-height) * 0.75);

    border: 1px solid var(--_segment-border);
    border-inline-start-width: 0;
    background-color: var(--_segment-fill);
    cursor: pointer;
    margin-block: auto;
  }

  .slide-picker__segment:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: var(--c-radius-sm);
    border-end-start-radius: var(--c-radius-sm);
  }

  .slide-picker__segment:last-child {
    border-start-end-radius: var(--c-radius-sm);
    border-end-end-radius: var(--c-radius-sm);
  }

  .slide-picker__segment.is-active {
    background-color: var(--_segment-active-fill);
    border-block-color: var(--_segment-active-border);
    block-size: var(--_segment-height);
  }

  .slide-picker__segment.is-last-active {
    border-inline-end-color: var(--_segment-active-border);
  }

  .slide-picker:focus-visible .slide-picker__segment.is-last-active {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
    position: relative;
    z-index: 1;
  }

  :host([read-only]) .slide-picker__segment {
    cursor: default;
    opacity: 0.7;
  }

  @media (forced-colors: active) {
    .slide-picker__segment {
      background: Canvas;
      border-color: ButtonBorder;
    }

    .slide-picker__segment.is-active {
      background: Highlight;
      border-color: Highlight;
    }
  }
`,Ha=new WeakSet,Wa=class extends Ce{constructor(...e){super(...e),st(this,Ha),this.min=0,this.max=100,this.step=10,this.value=0,this.label=Qe("Number of columns"),this.valueUnit="",this.readOnly=!1}willUpdate(e){if(super.willUpdate(e),e.has("min")||e.has("max")||e.has("step")||e.has("value")){let e=it(Ha,this,Ka).call(this,this.value);e!==this.value&&(this.value=e)}}render(){let e=it(Ha,this,ja).call(this);return ne`
      <div
        class="slide-picker"
        role="slider"
        tabindex=${this.readOnly?-1:0}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${it(Ha,this,Za).call(this,this.value)}
        aria-readonly=${this.readOnly?"true":"false"}
        aria-describedby=${wo(this.describedBy)}
        @keydown=${it(Ha,this,Xa)}
      >
        ${e.map(e=>ne`
            <span
              class=${Ue({"slide-picker__segment":!0,"is-active":e<=this.value,"is-last-active":e===this.value})}
              role="presentation"
              aria-hidden="true"
              @click=${()=>it(Ha,this,Ja).call(this,e)}
              title=${it(Ha,this,Za).call(this,e)}
              >${oe}</span
            >
          `)}
      </div>
    `}};function ja(){let{min:e,max:t,step:i}=this;if(i<=0||t<e)throw Error("Invalid craft-slide-picker range configuration.");let s=(t-e)/i;if(!Number.isInteger(s))throw Error("Invalid craft-slide-picker step configuration for the provided range.");return Array.from({length:s+1},(t,s)=>e+s*i)}function Ka(e){it(Ha,this,ja).call(this);let{min:t,max:i,step:s}=this,n=t+Math.round((Math.min(Math.max(e,t),i)-t)/s)*s;return Math.min(Math.max(n,t),i)}function Ga(){return"rtl"===(this.closest("[dir]")?.getAttribute("dir")??document.documentElement.getAttribute("dir"))?.toLowerCase()}function Za(e){return this.valueLabel?this.valueLabel(e):this.valueUnit?`${e}${this.valueUnit}`:`${e}`}function Ya(e,t){let i=it(Ha,this,Ka).call(this,e);i!==this.value&&(this.value=i,t&&this.dispatchEvent(new CustomEvent("value-change",{detail:{value:i},bubbles:!0,composed:!0})))}function Ja(e){this.readOnly||it(Ha,this,Ya).call(this,e,!0)}function Xa(e){if(this.readOnly)return;let t=it(Ha,this,Ga).call(this);switch(e.key){case"ArrowUp":it(Ha,this,Ya).call(this,this.value+this.step,!0),e.preventDefault();break;case"ArrowDown":it(Ha,this,Ya).call(this,this.value-this.step,!0),e.preventDefault();break;case"ArrowRight":it(Ha,this,Ya).call(this,this.value+(t?-this.step:this.step),!0),e.preventDefault();break;case"ArrowLeft":it(Ha,this,Ya).call(this,this.value+(t?this.step:-this.step),!0),e.preventDefault();break;case"Home":it(Ha,this,Ya).call(this,this.min,!0),e.preventDefault();break;case"End":it(Ha,this,Ya).call(this,this.max,!0),e.preventDefault()}}Wa.styles=[qa],Ae([Te({type:Number})],Wa.prototype,"min",void 0),Ae([Te({type:Number})],Wa.prototype,"max",void 0),Ae([Te({type:Number})],Wa.prototype,"step",void 0),Ae([Te({type:Number})],Wa.prototype,"value",void 0),Ae([Te()],Wa.prototype,"label",void 0),Ae([Te({attribute:"described-by"})],Wa.prototype,"describedBy",void 0),Ae([Te({attribute:"value-unit"})],Wa.prototype,"valueUnit",void 0),Ae([Te({attribute:!1})],Wa.prototype,"valueLabel",void 0),Ae([Te({type:Boolean,reflect:!0,attribute:"read-only"})],Wa.prototype,"readOnly",void 0),customElements.get("craft-slide-picker")||customElements.define("craft-slide-picker",Wa);var Qa=v`
  :host {
    display: block;
  }

  .slide-rule {
    position: relative;
    padding-block: 10px;
    padding-inline: 0;
    outline: none;
  }

  .slide-rule:focus-visible .cursor::after {
    box-shadow: var(--focus-ring);
  }

  .cursor {
    position: absolute;
    margin-inline-start: calc(-4 / 16 * 1rem);
    margin-block-start: 4px;
    inset-inline-start: 50%;
    z-index: 1;
    width: 0;
    height: 0;
    border-inline-start: calc(5 / 16 * 1rem) solid transparent;
    border-inline-end: calc(5 / 16 * 1rem) solid transparent;
    border-block-start: calc(5 / 16 * 1rem) solid #63a6e1;
  }

  .cursor::after {
    content: '';
    width: calc(20 / 16 * 1rem);
    height: calc(50 / 16 * 1rem);
    position: absolute;
    inset-block-start: -15px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .overlay {
    z-index: 2;
    position: absolute;
    inset-block: 0 1px;
    inset-inline: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to right,
      var(--gray-900) 0%,
      transparent 15%,
      transparent 85%,
      var(--gray-900) 100%
    );
  }

  .graduations {
    white-space: nowrap;
    height: 40px;
    position: relative;
  }

  .graduations ul {
    position: relative;
    float: inline-start;
    height: 40px;
    margin: 0;
    padding: 0;
    list-style: none;

    /* "left" (not a logical property) because that's what the JS sets. */
    transition: 200ms left linear; /* stylelint-disable-line */
  }

  .slide-rule.dragging .graduations ul {
    transition: none;
  }

  .graduations ul li {
    display: inline-block;
    font-size: 8px;
    position: relative;
    width: 10px;
  }

  .graduations ul li:hover {
    cursor: pointer;
  }

  .graduations ul li:hover::before {
    border-inline-start-color: #63a6e1;
  }

  .graduations ul li:not(.main-graduation) {
    inset-inline-start: 1px;
  }

  .graduations ul li.main-graduation::before {
    border-inline-start-width: 4px;
    height: 10px;
  }

  .graduations ul li .label {
    width: 20px;
    position: absolute;
    inset-block-start: 10px;
    inset-inline-start: -9px;
    display: none;
    text-align: center;
  }

  .graduations ul li.main-graduation .label {
    display: block;
    cursor: default;
  }

  .graduations ul li.selected::before {
    border-inline-start-color: #63a6e1;
  }

  .graduations ul li::before {
    content: '';
    position: absolute;
    border-inline-start: 2px solid var(--white);
    height: 6px;
    inset-block-start: 0;
    inset-inline-start: 0;
  }
`,el=new WeakMap,tl=new WeakMap,il=new WeakMap,sl=new WeakMap,nl=new WeakMap,rl=new WeakMap,ol=new WeakSet,al=class extends Ce{constructor(...e){super(...e),st(this,ol),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=Qe("Rotate"),nt(this,el,!1),nt(this,tl,!1),nt(this,il,0),nt(this,sl,0),nt(this,nl,0),nt(this,rl,null)}connectedCallback(){super.connectedCallback(),ot(rl,this,new ResizeObserver(()=>it(ol,this,dl).call(this))),rt(rl,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),rt(rl,this)?.disconnect(),ot(rl,this,null)}firstUpdated(){ot(nl,this,10*(it(ol,this,ll).call(this).length-1)),it(ol,this,dl).call(this)}updated(e){(e.has("value")||e.has("min")||e.has("max")||e.has("graduationMin")||e.has("graduationMax"))&&it(ol,this,dl).call(this)}render(){return ne`
      <div
        class="slide-rule"
        role="slider"
        tabindex="0"
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${it(ol,this,cl).call(this,this.value)}
        @keydown=${it(ol,this,vl)}
        @pointerdown=${it(ol,this,fl)}
        @pointermove=${it(ol,this,_l)}
        @pointerup=${it(ol,this,bl)}
      >
        <div class="overlay"></div>
        <div class="cursor"></div>
        <div class="graduations">
          <ul aria-hidden="true">
            ${it(ol,this,ll).call(this).map(e=>ne`
                <li
                  class=${Ue({graduation:!0,"main-graduation":e%5==0,selected:it(ol,this,yl).call(this,e)})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function ll(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function dl(){this._list&&(this._list.style.left=`${it(ol,this,ul).call(this,this.value)}px`)}function cl(e){return Qe("{num, number} {num, plural, =1{degree} other{degrees}}",{num:Math.round(e)})}function hl(e){let t=-1*this.graduationMin,i=-1*(this.graduationMin-this.graduationMax);return(this._graduations.offsetWidth/2+-1*e)/rt(nl,this)*i-t}function ul(e){let t=-1*this.graduationMin,i=-1*(this.graduationMin-this.graduationMax);return-((e+t)*rt(nl,this)/i-this._graduations.offsetWidth/2)}function pl(e,t=!0){let i=Math.min(Math.max(e,this.min),this.max);this.value=i,t&&it(ol,this,ml).call(this,"change")}function ml(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function fl(e){ot(tl,this,this._graduations.contains(e.target)&&e.target!==this._graduations),rt(tl,this)&&(e.preventDefault(),ot(il,this,e.clientX),ot(sl,this,this._list.offsetLeft),this._root.setPointerCapture(e.pointerId),it(ol,this,ml).call(this,"start"))}function _l(e){rt(tl,this)&&Math.abs(e.clientX-rt(il,this))>3&&(ot(el,this,!0),this._root.classList.add("dragging"),e.preventDefault(),it(ol,this,gl).call(this,e))}function bl(e){rt(tl,this)&&(rt(el,this)?(e.preventDefault(),ot(el,this,!1),this._root.classList.remove("dragging")):it(ol,this,gl).call(this,e),it(ol,this,ml).call(this,"end"),this._root.releasePointerCapture(e.pointerId),ot(il,this,0),ot(tl,this,!1))}function gl(e){let t=rt(el,this)?rt(il,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,i=rt(el,this)?t-e.clientX:e.clientX-t,s=rt(sl,this)-i;it(ol,this,pl).call(this,it(ol,this,hl).call(this,s))}function vl(e){let t=this.value;switch(e.key){case"ArrowUp":case"ArrowRight":it(ol,this,pl).call(this,t+1);break;case"ArrowDown":case"ArrowLeft":it(ol,this,pl).call(this,t-1);break;case"PageUp":it(ol,this,pl).call(this,t+10);break;case"PageDown":it(ol,this,pl).call(this,t-10);break;case"Home":it(ol,this,pl).call(this,this.min);break;case"End":it(ol,this,pl).call(this,this.max);break;default:return}e.preventDefault()}function yl(e){return e>=Math.min(0,this.value)&&e<=Math.max(0,this.value)}al.styles=[Qa],Ae([Te({type:Number})],al.prototype,"min",void 0),Ae([Te({type:Number})],al.prototype,"max",void 0),Ae([Te({type:Number})],al.prototype,"value",void 0),Ae([Te({type:Number,attribute:"graduation-min"})],al.prototype,"graduationMin",void 0),Ae([Te({type:Number,attribute:"graduation-max"})],al.prototype,"graduationMax",void 0),Ae([Te()],al.prototype,"label",void 0),Ae([Fe(".slide-rule")],al.prototype,"_root",void 0),Ae([Fe(".graduations")],al.prototype,"_graduations",void 0),Ae([Fe(".graduations ul")],al.prototype,"_list",void 0),Ae([Fe(".cursor")],al.prototype,"_cursor",void 0),customElements.get("craft-slide-rule")||customElements.define("craft-slide-rule",al);var wl=v`
  :host {
    display: inline-flex;
    --size: var(--c-size-icon-xs);
  }

  .status {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    border-radius: var(--c-radius-full);
    border: 1px solid transparent;
  }

  .status--live {
    background-color: var(--c-status-live-fill);
    border-color: var(--c-status-live-border);
  }

  .status--enabled {
    background-color: var(--c-status-enabled-fill);
    border-color: var(--c-status-enabled-border);
  }

  .status--pending {
    background-color: var(--c-status-pending-fill);
    border-color: var(--c-status-pending-border);
  }

  .status--expired {
    background-color: var(--c-status-expired-fill);
    border-color: var(--c-status-expired-border);
  }

  .status--disabled {
    background-color: var(--c-status-disabled-fill);
    border: 1px solid var(--c-status-disabled-border);
  }
`,kl=class extends Ce{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?`Status: ${this.status}`:this.label}render(){return ne`
      <span
        class="${Ue({status:!0,"status--live":"live"===this.status,"status--enabled":"enabled"===this.status,"status--pending":"pending"===this.status,"status--expired":"expired"===this.status,"status--disabled":"disabled"===this.status})}"
        role="img"
        aria-label="${this.getLabel()}"
      ></span>
    `}};kl.styles=[wl],Ae([Te()],kl.prototype,"label",void 0),Ae([Te()],kl.prototype,"status",void 0),customElements.get("craft-status")||customElements.define("craft-status",kl);class xl extends(xi(Ce)){static get properties(){return{checked:{type:Boolean,reflect:!0}}}static get styles(){return[v`
        :host {
          display: inline-block;
          position: relative;
          width: 36px;
          height: 16px;
          outline: 0;
        }

        :host([hidden]) {
          display: none;
        }

        .btn {
          position: relative;
          height: 100%;
          outline: 0;
        }

        :host(:focus:not([disabled])) .switch-button__thumb {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        .switch-button__track {
          background: #eee;
          width: 100%;
          height: 100%;
        }

        .switch-button__thumb {
          background: #ccc;
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
        }

        :host([checked]) .switch-button__thumb {
          right: 0;
        }
      `]}render(){return ne`
      <div class="btn">
        <div class="switch-button__track"></div>
        <div class="switch-button__thumb"></div>
      </div>
    `}constructor(){super(),this.value="",this.checked=!1,this.__initialized=!1,this._toggleChecked=this._toggleChecked.bind(this),this.__handleKeydown=this._handleKeydown.bind(this),this.__handleKeyup=this._handleKeyup.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-checked",`${this.checked}`),this.addEventListener("click",this._toggleChecked),this.addEventListener("keydown",this.__handleKeydown),this.addEventListener("keyup",this.__handleKeyup)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._toggleChecked),this.removeEventListener("keydown",this.__handleKeydown),this.removeEventListener("keyup",this.__handleKeyup)}_toggleChecked(){this.disabled||(this.focus(),this.checked=!this.checked)}__checkedStateChange(){this.dispatchEvent(new Event("checked-changed",{bubbles:!0})),this.setAttribute("aria-checked",`${this.checked}`)}_handleKeydown(e){" "===e.key&&e.preventDefault()}_handleKeyup(e){[" ","Enter"].includes(e.key)&&this._toggleChecked()}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),this.__initialized&&this.isConnected&&"checked"===e&&this.checked!==t&&!this.disabled&&this.__checkedStateChange()}firstUpdated(e){super.firstUpdated(e),this.__initialized=!0}}var Cl=class extends xl{constructor(...e){super(...e),this.indeterminate=!1}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&this.setAttribute("aria-checked",this.checked?"true":this.indeterminate?"mixed":"false")}static get styles(){return[...super.styles,v`
        :host {
          --c-switch-height: var(--c-size-control-sm);
          --c-switch-thumb-offset: 6px;
          --c-switch-thumb-height: calc(
            var(--c-switch-height) - var(--c-switch-thumb-offset)
          );
          display: flex;
          height: var(--c-switch-height);
          width: calc(var(--c-switch-height) * 2);
          margin: -1px;
        }

        :host([size='small']) {
          --c-switch-height: var(--c-size-control-xs);
          --c-switch-thumb-offset: 4px;
        }

        .btn {
          width: 100%;
        }

        .switch-button__track {
          --tw-inset-shadow-color: var(--color-slate-300);
          margin-inline: -1px;
          background-color: var(--c-color-neutral-fill-quiet);
          border-radius: var(--c-radius-full);
          border: 1px solid var(--c-form-control-border-color);
          box-shadow: var(--c-input-shadow);
        }

        .switch-button__thumb {
          height: var(--c-switch-thumb-height);
          width: auto;
          aspect-ratio: 1;
          border-radius: var(--c-radius-full);
          border: 1px solid var(--c-form-control-border-color);
          background-color: var(--c-switch-thumb-fill, var(--c-surface-raised));
          inset-block-start: calc(var(--c-switch-thumb-offset) / 2);
          inset-inline-start: calc(var(--c-switch-thumb-offset) / 2);
          inset-inline-end: auto;
        }

        :host([indeterminate]:not([checked])) .switch-button__thumb {
          inset-inline-start: calc(50% - (var(--c-switch-thumb-height) / 2));
          inset-inline-end: auto;
        }

        :host([checked]) .switch-button__track {
          background-color: var(--c-color-static-success-fill);
        }

        :host([checked]) .switch-button__thumb {
          border: 1px solid var(--c-color-success-border-loud);
          inset-inline-start: auto;
          inset-inline-end: calc(
            (var(--c-switch-height) - var(--c-switch-thumb-height)) / 2
          );
        }

        :host([checked]) .switch-button__thumb:after {
          content: '';
          position: absolute;
          inset-block-start: 3px;
          inset-inline-start: 4px;
          mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--%3E%3Cpath d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z'/%3E%3C/svg%3E");
          mask-repeat: no-repeat;
          width: calc(var(--c-switch-thumb-height) - 6px);
          aspect-ratio: 1;
          background-color: var(--c-color-success-on-normal);
        }
      `]}};Ae([Te({type:Boolean,reflect:!0})],Cl.prototype,"indeterminate",void 0),customElements.get("craft-switch-button")||customElements.define("craft-switch-button",Cl);class El extends(hn(Hn(Bn))){static get styles(){return[...super.styles,v`
        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}static get scopedElements(){return{...super.scopedElements,"lion-switch-button":xl}}get _inputNode(){return Array.from(this.children).find(e=>"input"===e.slot)}get slots(){return{...super.slots,input:()=>{const e=this.createScopedElement("lion-switch-button");return e.setAttribute("data-tag-name","lion-switch-button"),e}}}render(){return ne`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return ne`${this._labelTemplate()} ${this._helpTextTemplate()} ${this._feedbackTemplate()}`}_groupTwoTemplate(){return ne`${this._inputGroupTemplate()}`}constructor(){super(),this.checked=!1,this.__handleButtonSwitchCheckedChanged=this.__handleButtonSwitchCheckedChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("checked-changed",this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.addEventListener("click",this._toggleChecked),this._syncButtonSwitch()}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&this.removeEventListener("checked-changed",this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.removeEventListener("click",this._toggleChecked)}updated(e){super.updated(e),e.has("disabled")&&this._syncButtonSwitch()}_toggleChecked(e){e.preventDefault(),super._toggleChecked(e)}_isEmpty(){return!1}__handleButtonSwitchCheckedChanged(e){e.stopPropagation(),this._isHandlingUserInput=!0,this.checked=this._inputNode.checked,this._isHandlingUserInput=!1}_syncButtonSwitch(){this._inputNode.disabled=this.disabled}_onLabelClick(){this.disabled||this._inputNode.focus()}}var Nl=v`
  :host {
    display: grid;
  }

  .input-group {
    display: inline-flex;
    align-items: center;
  }

  ::slotted(label) {
    font-weight: bold;
  }

  .state-label {
    cursor: pointer;
    user-select: none;
  }

  .state-label[data-state='off'] {
    margin-inline-end: var(--c-spacing-sm);
  }

  .state-label[data-state='on'] {
    margin-inline-start: var(--c-spacing-sm);
  }

  ::slotted([slot='state-description']) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;function Al(e){return(e??"").split(/\s+/).filter(Boolean)}const Sl=Symbol.for("craft-switch-synthetic-change");var $l=new WeakMap,Tl=new WeakSet,Ll=class extends El{constructor(...e){super(...e),st(this,Tl),this.size="medium",this.onLabel="",this.offLabel="",this.checkedValue="1",this.indeterminateValue="-",this.indeterminate=!1,this.__externalLabelledByNodes=[],this.__externalDescribedByNodes=[],this.__clickableExternalLabels=new Set,nt(this,$l,!1),this.__onKeydown=e=>{if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.disabled||e.target!==this._inputNode)return;e.preventDefault();let t="rtl"===getComputedStyle(this).direction;this._setCheckedState(e.key===(t?"ArrowLeft":"ArrowRight"))},this.__forwardNativeChange=e=>{e.target===this._inputNode&&this.__dispatchNativeChange()},this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._inputNode?.click()}}static get styles(){return[...super.styles,or,Nl]}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement("craft-switch-button");return e.setAttribute("size",this.size),e.setAttribute("data-tag-name","craft-switch-button"),e},"state-description":()=>{let e=document.createElement("div");return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement("input");return e.type="hidden",e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}static get scopedElements(){return{...super.scopedElements,"craft-switch-button":Cl}}connectedCallback(){super.connectedCallback(),this.__adoptExternalAria(),this.addEventListener("checked-changed",this.__forwardNativeChange),this.addEventListener("keydown",this.__onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("checked-changed",this.__forwardNativeChange),this.removeEventListener("keydown",this.__onKeydown),this.__teardownExternalLabelClicks()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&"hidden-input"===e.slot)}get _postedValue(){return this.checked?this.checkedValue:this.indeterminate?this.indeterminateValue:""}get _stateDescriptionNode(){return Array.from(this.children).find(e=>"state-description"===e.slot)}get _stateDescriptionText(){return[this.onLabel?Qe("Check for {onLabel}.",{onLabel:this.onLabel}):"",this.offLabel?Qe("Uncheck for {offLabel}.",{offLabel:this.offLabel}):""].filter(Boolean).join(" ")}updated(e){super.updated(e),e.has("checked")&&this.checked&&this.indeterminate&&(this.indeterminate=!1),(e.has("onLabel")||e.has("offLabel"))&&this.__syncStateDescription(),["checked","indeterminate","checkedValue","indeterminateValue","disabled","size"].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has("checked")||e.has("indeterminate"))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._inputNode;if(!e)return;let t=e.getAttribute("data-target"),i=e.getAttribute("data-reverse-target");if(!t&&!i)return;let s=window.jQuery;s&&s(e).data?.("fieldtoggle")||(this.__toggleTargets(t,this.checked),this.__toggleTargets(i,!this.checked))}__toggleTargets(e,t){if(!e)return;let i=/^[#.]/.test(e)?e:`#${e}`,s=this.getRootNode(),n=!1;for(let e of s.querySelectorAll(i))e.classList.contains("hidden")===t&&(e.classList.toggle("hidden",!t),n=!0);n&&t&&window.dispatchEvent(new Event("resize"))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked===e?t&&this.__dispatchNativeChange():this.checked=e)}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){it(Tl,this,Ol).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){it(Tl,this,Ol).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){it(Tl,this,Ol).call(this,()=>{if(this.indeterminate&&!this.checked)return;let e=this.checked;this.checked=!1,this.indeterminate=!0,e||this.__dispatchNativeChange()},e)}__dispatchNativeChange(){if(rt($l,this))return;let e=new Event("change",{bubbles:!0});e[Sl]=!0,this._inputNode?.dispatchEvent(e)}_onChange(e){e&&Sl in e||super._onChange(e)}__adoptExternalAria(){let e=this._inputNode;if(!e)return;let t=this.getRootNode();for(let i of Al(e.getAttribute("aria-labelledby"))){let e=t.getElementById(i);e&&!this.__externalLabelledByNodes.includes(e)&&(this.addToAriaLabelledBy(e,{reorder:!1}),this.__externalLabelledByNodes.push(e))}for(let i of Al(e.getAttribute("aria-describedby"))){let e=t.getElementById(i);e&&!this.__externalDescribedByNodes.includes(e)&&(this.addToAriaDescribedBy(e,{reorder:!1}),this.__externalDescribedByNodes.push(e))}this.__setupExternalLabelClicks()}__setupExternalLabelClicks(){let e=this._inputNode;if(!e)return;let t=this.getRootNode(),i=new Set(this.__externalLabelledByNodes.filter(e=>e instanceof HTMLLabelElement));if(e.id)for(let s of t.querySelectorAll(`label[for="${function(e){return typeof CSS<"u"&&"function"==typeof CSS.escape?CSS.escape(e):e}(e.id)}"]`))i.add(s);for(let e of i)this.__clickableExternalLabels.has(e)||(e.addEventListener("click",this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener("click",this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._inputNode;if(!e)return;e.getAttribute("size")!==this.size&&e.setAttribute("size",this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:"state-description",reorder:!1}):this.removeFromAriaDescribedBy(e)}_groupOneTemplate(){return ne`${super._groupOneTemplate()} ${this._stateDescriptionTemplate()}`}_stateDescriptionTemplate(){return ne`<slot name="state-description"></slot>`}_stateLabelTemplate(e){let t="on"===e?this.onLabel:this.offLabel;return t?ne`<span
      class="state-label"
      data-state=${e}
      aria-hidden="true"
      @click=${()=>this._setCheckedState("on"===e)}
      >${t}</span
    >`:oe}_inputGroupBeforeTemplate(){return ne`
      <div class="input-group__before">
        <slot name="before"></slot>
        ${this._stateLabelTemplate("off")}
      </div>
    `}_inputGroupAfterTemplate(){return ne`
      <div class="input-group__after">
        ${this._stateLabelTemplate("on")}
        <slot name="after"></slot>
      </div>
    `}};function Ol(e,t){if(!this.disabled){if(!t)return void e();ot($l,this,!0),e(),this.updateComplete.then(()=>{ot($l,this,!1)})}}function Fl(e){e.removeAttribute("selected")}function Il(e){e.removeAttribute("selected"),e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1")}function Ml(e){const t=e;switch(t.key){case"ArrowDown":case"ArrowRight":case"ArrowUp":case"ArrowLeft":case"Home":case"End":t.preventDefault()}}Ae([Te({type:String,reflect:!0})],Ll.prototype,"size",void 0),Ae([Te({type:String,attribute:"on-label"})],Ll.prototype,"onLabel",void 0),Ae([Te({type:String,attribute:"off-label"})],Ll.prototype,"offLabel",void 0),Ae([Te({attribute:"value"})],Ll.prototype,"checkedValue",void 0),Ae([Te({attribute:"indeterminate-value"})],Ll.prototype,"indeterminateValue",void 0),Ae([Te({type:Boolean,reflect:!0})],Ll.prototype,"indeterminate",void 0),customElements.get("craft-switch")||customElements.define("craft-switch",Ll);class Dl extends Ce{static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",reflect:!0}}}static get styles(){return[v`
        .tabs__tab-group {
          display: flex;
        }

        .tabs__tab-group ::slotted([slot='tab'][selected]) {
          font-weight: bold;
        }

        .tabs__panels ::slotted([slot='panel']) {
          visibility: hidden;
          display: none;
        }

        .tabs__panels ::slotted([slot='panel'][selected]) {
          visibility: visible;
          display: block;
        }

        .tabs__panels {
          display: block;
        }
      `]}render(){return ne`
      <div class="tabs__tab-group" role="tablist">
        <slot name="tab"></slot>
      </div>
      <div class="tabs__panels">
        <slot name="panel"></slot>
      </div>
    `}constructor(){super(),this.selectedIndex=0}firstUpdated(e){super.firstUpdated(e),this.__setupSlots(),this.tabs[0]?.disabled&&(this.selectedIndex=this.tabs.findIndex(e=>!e.disabled))}get tabs(){return Array.from(this.children).filter(e=>"tab"===e.slot)}get panels(){return Array.from(this.children).filter(e=>"panel"===e.slot)}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];__setupSlots(){if(this.shadowRoot){const e=this.shadowRoot.querySelector("slot[name=tab]"),t=()=>{this.__cleanStore(),this.__setupStore(),this.__updateSelected(!1)};e&&e.addEventListener("slotchange",t)}}__setupStore(){this.__store=[],this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),this.tabs.forEach((e,t)=>{const i={uid:Pt(),el:e,button:e,panel:this.panels[t],clickHandler:this.__createButtonClickHandler(t),keydownHandler:Ml.bind(this),keyupHandler:this.__handleButtonKeyup.bind(this)};!function({el:e,uid:t}){e.setAttribute("id",`panel-${t}`),e.setAttribute("role","tabpanel"),e.setAttribute("aria-labelledby",`button-${t}`),e.hasAttribute("tabindex")||e.setAttribute("tabindex","0")}({...i,el:i.panel}),function({el:e,uid:t,clickHandler:i,keydownHandler:s,keyupHandler:n}){e.setAttribute("id",`button-${t}`),e.setAttribute("role","tab"),e.setAttribute("aria-controls",`panel-${t}`),e.addEventListener("click",i),e.addEventListener("keyup",n),e.addEventListener("keydown",s)}(i),Fl(i.panel),Il(i.button),this.__store&&this.__store.push(i)})}__cleanStore(){this.__store&&(this.__store.forEach(e=>{!function({el:e,clickHandler:t,keydownHandler:i,keyupHandler:s}){e.removeAttribute("id"),e.removeAttribute("role"),e.removeAttribute("aria-controls"),e.removeEventListener("click",t),e.removeEventListener("keyup",s),e.removeEventListener("keydown",i)}(e)}),this.__store=[])}__getNextNotDisabledTab(e,t,i){let s=[];const n=e.filter((e,t)=>!e.disabled&&t>this.selectedIndex),r=e.filter((e,t)=>!e.disabled&&t<this.selectedIndex);return s="right"===i?[...n,...r]:[...r.reverse(),...n.reverse()],s[0]}__getNextAvailableIndex(e,t){const i=this.tabs[this.selectedIndex];if(this.tabs.every(e=>!e.disabled))return e;if("ArrowRight"===t||"ArrowDown"===t){const e=this.__getNextNotDisabledTab(this.tabs,i,"right");return this.tabs.findIndex(t=>e===t)}if("ArrowLeft"===t||"ArrowUp"===t){const e=this.__getNextNotDisabledTab(this.tabs,i,"left");return this.tabs.findIndex(t=>e===t)}if("Home"===t)return this.tabs.findIndex(e=>!e.disabled);if("End"===t){const e=this.tabs.map((e,t)=>({disabled:e.disabled,index:t})).filter(e=>!e.disabled);return e[e.length-1].index}return-1}__createButtonClickHandler(e){return()=>{this._setSelectedIndexWithFocus(e)}}__handleButtonKeyup(e){const t=e;if("number"==typeof this.selectedIndex)switch(t.key){case"ArrowDown":case"ArrowRight":this.selectedIndex+1>=this._pairCount?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex+1,t.key));break;case"ArrowUp":case"ArrowLeft":this.selectedIndex<=0?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex-1,t.key));break;case"Home":this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key));break;case"End":this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key))}}get selectedIndex(){return this.__selectedIndex||0}set selectedIndex(e){if(e===this.__selectedIndex)return;const t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!1),this.dispatchEvent(new Event("selected-changed")),this.requestUpdate("selectedIndex",t)}_setSelectedIndexWithFocus(e){if(-1===e)return;const t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!0),this.dispatchEvent(new Event("selected-changed")),this.requestUpdate("selectedIndex",t)}get _pairCount(){return this.__store&&this.__store.length||0}__updateSelected(e=!1){if(!this.__store||"number"!=typeof this.selectedIndex||!this.__store[this.selectedIndex])return;const t=this.tabs.find(e=>e.hasAttribute("selected")),i=this.panels.find(e=>e.hasAttribute("selected"));t&&Il(t),i&&Fl(i);const{button:s,panel:n}=this.__store[this.selectedIndex];s&&function(e,t=!1){t&&e.focus(),e.setAttribute("selected","true"),e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0")}(s,e),n&&n.setAttribute("selected","true")}}var Vl=v`
  :host {
    display: block;
  }

  :host([layout='vertical']) .tabs__tab-group {
    flex-direction: column;
  }

  .tabs__panels {
    padding-block-start: var(--c-spacing-lg);
  }

  .tabs__tab-group {
    gap: var(--c-spacing-md);
    border-bottom: 1px solid
      var(--c-tabs-border-end, var(--c-color-neutral-border-quiet));
  }
`;customElements.get("craft-tabs")||customElements.define("craft-tabs",class extends Dl{static get styles(){return[...super.styles,Vl]}});var Rl=v`
  :host {
    display: inline-flex;
    padding-inline: var(--c-tab-spacing-inline, 1em);
    padding-block: var(--c-tab-spacing-block, 0.5em);
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      inset-block-end: -1px;
      inset-inline: 0;
      display: block;
      width: 100%;
      height: calc(2rem / 16);
      background-color: transparent;
    }
  }

  :host([selected]) {
    font-weight: 400;

    &:after {
      background-color: var(
        --c-tab-border-active,
        var(--c-color-accent-border-loud)
      );
    }
  }
`,Pl=class extends Ce{render(){return ne`<slot></slot> `}};Pl.styles=[Rl],customElements.get("craft-tab")||customElements.define("craft-tab",Pl);var zl=new Map;function Bl(e){var t=zl.get(e);t&&t.destroy()}function Ul(e){var t=zl.get(e);t&&t.update()}var ql=null;"undefined"==typeof window?((ql=function(e){return e}).destroy=function(e){return e},ql.update=function(e){return e}):((ql=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!zl.has(e)){var t,i=null,s=window.getComputedStyle(e),n=(t=e.value,function(){o({testForHeightReduction:""===t||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),r=function(t){e.removeEventListener("autosize:destroy",r),e.removeEventListener("autosize:update",a),e.removeEventListener("input",n),window.removeEventListener("resize",a),Object.keys(t).forEach(function(i){return e.style[i]=t[i]}),zl.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",r),e.addEventListener("autosize:update",a),e.addEventListener("input",n),window.addEventListener("resize",a),e.style.overflowX="hidden",e.style.wordWrap="break-word",zl.set(e,{destroy:r,update:a}),a()}function o(t){var n,r,a=t.restoreTextAlign,l=void 0===a?null:a,d=t.testForHeightReduction,c=void 0===d||d,h=s.overflowY;if(0!==e.scrollHeight&&("vertical"===s.resize?e.style.resize="none":"both"===s.resize&&(e.style.resize="horizontal"),c&&(n=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],i=e[1];t.style.scrollBehavior="auto",t.scrollTop=i,t.style.scrollBehavior=null})}}(e),e.style.height=""),r="content-box"===s.boxSizing?e.scrollHeight-(parseFloat(s.paddingTop)+parseFloat(s.paddingBottom)):e.scrollHeight+parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth),"none"!==s.maxHeight&&r>parseFloat(s.maxHeight)?("hidden"===s.overflowY&&(e.style.overflow="scroll"),r=parseFloat(s.maxHeight)):"hidden"!==s.overflowY&&(e.style.overflow="hidden"),e.style.height=r+"px",l&&(e.style.textAlign=l),n&&n(),i!==r&&(e.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),i=r),h!==s.overflow&&!l)){var u=s.textAlign;"hidden"===s.overflow&&(e.style.textAlign="start"===u?"end":"start"),o({restoreTextAlign:u,testForHeightReduction:!0})}}function a(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Bl),e},ql.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Ul),e});var Hl=ql;class Wl extends Bn{get _inputNode(){return Array.from(this.children).find(e=>"input"===e.slot)}}class jl extends(zn(Wl)){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("textarea");return void 0!==e.style.resize&&(e.style.resize="none"),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("rows")){const e=this._inputNode;e&&(e.rows=this.rows)}if(e.has("readOnly")){const e=this._inputNode;e&&(e.readOnly=this.readOnly)}if(e.has("placeholder")){const e=this._inputNode;e&&(e.placeholder=this.placeholder)}e.has("modelValue")&&this.resizeTextarea(),(e.has("maxRows")||e.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),Hl.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:e}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const t=window.getComputedStyle(this._inputNode,null),i=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),r="border-box"===t.boxSizing?s+n:0;this._inputNode.style.maxHeight=`${i*this.maxRows+r}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,v`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){Hl.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;0!==e&&!this.__shady_native_contains(this._inputNode);)await new Promise(e=>setTimeout(e)),e-=1}__startAutoresize(){Hl(this._inputNode),this.setTextareaMaxHeight()}}var Kl=v`
  :host(:not([label-sr-only])) .form-field__group-one {
    margin-bottom: var(--c-spacing-sm);
  }

  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
  }
`,Gl=class extends jl{constructor(...e){super(...e),this.monospace=!1}static get styles(){return[...super.styles,ar,Kl]}};Ae([Te({type:Boolean,reflect:!0})],Gl.prototype,"monospace",void 0),customElements.get("craft-textarea")||customElements.define("craft-textarea",Gl);var Zl=v`
  :host {
    /* Overall size of the thumbnail box. */
    --c-thumbnail-size: calc(34rem / 16);
    /* Corner radius applied when [rounded] is set. Defaults to a full circle. */
    --c-thumbnail-radius: var(--c-radius-full);
    /* Size of a single checker square. */
    --c-thumbnail-checker-size: 8px;
    /* Color of the checker squares. Matches the Craft 5 \`.thumb.checkered\` pattern. */
    --c-thumbnail-checker-color: hsl(211 13% 65% / 0.25);

    --_checker-half: calc(var(--c-thumbnail-checker-size) / 2);

    display: inline-flex;
  }

  .thumbnail {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--c-thumbnail-size);
    height: var(--c-thumbnail-size);
    overflow: clip;
    max-width: 100%;
    max-height: 100%;
  }

  .thumbnail__image,
  ::slotted(img),
  ::slotted(svg) {
    display: block;
    flex-shrink: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  /* h/t https://gist.github.com/dfrankland/f6fed3e3ccc42e3de482b324126f9542 */
  .thumbnail--checkered .thumbnail__image,
  .thumbnail--checkered ::slotted(img) {
    background-image:
      linear-gradient(
        45deg,
        var(--c-thumbnail-checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(
        135deg,
        var(--c-thumbnail-checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(
        45deg,
        transparent 75%,
        var(--c-thumbnail-checker-color) 75%
      ),
      linear-gradient(
        135deg,
        transparent 75%,
        var(--c-thumbnail-checker-color) 75%
      );
    background-size: var(--c-thumbnail-checker-size)
      var(--c-thumbnail-checker-size);
    background-position:
      0 0,
      var(--_checker-half) 0,
      var(--_checker-half) calc(-1 * var(--_checker-half)),
      0 var(--_checker-half);
  }

  .thumbnail--rounded .thumbnail__image,
  .thumbnail--rounded ::slotted(img),
  .thumbnail--rounded ::slotted(svg) {
    border-radius: var(--c-thumbnail-radius);
  }
`,Yl=class extends Ce{constructor(...e){super(...e),this.src=null,this.srcset=null,this.sizes=null,this.alt="",this.width=null,this.height=null,this.loading="lazy",this.checkered=!0,this.rounded=!1}render(){return ne`
      <div class="${Ue({thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded})}" part="thumbnail">
        ${this.src?ne`<img
              class="thumbnail__image"
              part="image"
              src="${this.src}"
              srcset="${wo(this.srcset??void 0)}"
              sizes="${wo(this.sizes??void 0)}"
              width="${wo(this.width??void 0)}"
              height="${wo(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
            />`:oe}
        <slot></slot>
      </div>
    `}};Yl.styles=[Zl],Ae([Te()],Yl.prototype,"src",void 0),Ae([Te()],Yl.prototype,"srcset",void 0),Ae([Te()],Yl.prototype,"sizes",void 0),Ae([Te()],Yl.prototype,"alt",void 0),Ae([Te({type:Number})],Yl.prototype,"width",void 0),Ae([Te({type:Number})],Yl.prototype,"height",void 0),Ae([Te()],Yl.prototype,"loading",void 0),Ae([Te({reflect:!0,converter:{fromAttribute:e=>null!==e&&"false"!==e,toAttribute:e=>e?"":null}})],Yl.prototype,"checkered",void 0),Ae([Te({type:Boolean,reflect:!0})],Yl.prototype,"rounded",void 0),customElements.get("craft-thumbnail")||customElements.define("craft-thumbnail",Yl);var Jl=new WeakMap,Xl=new WeakSet,Ql=class extends HTMLElement{constructor(...e){super(...e),st(this,Xl),nt(this,Jl,null)}connectedCallback(){it(Xl,this,ed).call(this)}disconnectedCallback(){rt(Jl,this)?.destroy(),ot(Jl,this,null)}};function ed(){if(!rt(Jl,this)&&this.isConnected){if(!this.querySelector("[data-sizes]"))return void requestAnimationFrame(()=>it(Xl,this,ed).call(this));ot(Jl,this,new Jn),rt(Jl,this).load(this)}}customElements.get("craft-thumbnail-loader")||customElements.define("craft-thumbnail-loader",Ql);var td=new WeakMap,id=new WeakSet,sd=class e{constructor(){st(this,id),nt(this,td,new Map)}static getInstance(){return od._||(od._=new e),od._}static resetInstance(){od._&&(od._=null)}initialize(e={}){ot(td,this,new Map(Object.entries(e)))}getCpUrl(e){return it(id,this,nd).call(this,it(id,this,rd).call(this,"baseCpUrl"),e)}getActionUrl(e){return it(id,this,nd).call(this,it(id,this,rd).call(this,"actionUrl"),e)}all(){return rt(td,this)}set(e,t){rt(td,this).set(e,t)}get(e,t=null){return rt(td,this).has(e)?rt(td,this).get(e):t}};function nd(e,t){let i=new URL(e),s=t.startsWith("/")?t.slice(1):t;return i.pathname=`${i.pathname}/${s}`,i.toString()}function rd(e){let t=rt(td,this).get(e);if(!t)throw Error(`ConfigService: "${e}" is not configured. The page bootstrap must call ConfigService.initialize() with the CP config payload before URL helpers can be used.`);return t}var od={_:null},ad=axios;const ld=ad.create(),dd=new class{constructor(){this.refreshPromise=null,this.tokenName=null,this.tokenValue=null,this.refreshPromise=null}async getToken(){return this.tokenValue||await this.refreshToken(),this.tokenValue}async refreshToken(){return this.refreshPromise||(this.refreshPromise=ld.get("users/session-info").then(({data:e})=>{let{csrfTokenName:t,csrfTokenValue:i}=e;return this.tokenName=t??null,this.tokenValue=i??null,this.tokenValue}).finally(()=>{this.refreshPromise=null})),this.refreshPromise}clearToken(){this.tokenValue=null}};ld.interceptors.request.use(async e=>{let t=function(e=""){return sd.getInstance().getActionUrl(e)}();e.baseURL=e.url&&!e.url.startsWith("/")?t.replace(/\/+$/,""):new URL(t).origin,e.headers.set("X-Requested-With","XMLHttpRequest");let i=function(){let e=window.Craft,t=e?.registeredAssetBundles??Cp.registeredAssetBundles,i=e?.registeredJsFiles??Cp.registeredJsFiles;return{"X-Registered-Asset-Bundles":[...new Set(t)].join(","),"X-Registered-Js-Files":[...new Set(i)].join(",")}}();return Object.entries(i).forEach(([t,i])=>{e.headers.set(t,i)}),e}),ld.interceptors.response.use(e=>e,async e=>{let t=e.config;if(419===e.response?.status||403===e.response?.status&&!t._retry){t._retry=!0;try{return dd.clearToken(),t.headers["X-CSRF-Token"]=await dd.refreshToken(),ad(t)}catch(e){return console.error("Failed to refresh CSRF token:",e),Promise.reject(e)}}return Promise.reject(e)});let cd=!1,hd=null;const ud=ad.create({baseURL:"https://api.craftcms.com/v1/"});ud.interceptors.request.use(async e=>{let{cancelToken:t}=e,i=await async function(e){if(!cd){if(hd)return hd;cd=!0;try{return(await ld.post("app/api-headers",void 0,{cancelToken:e})).data}catch{}finally{cd=!1}}}(t);i&&Object.entries(i).forEach(([t,i])=>{e.headers.set(t,i)});let s={...e,params:{...Cp.apiParams||{},...e.params,v:(new Date).getTime()}};return i||(s.params.processCraftHeaders=1),Cp.httpProxy&&(s.proxy=Cp.httpProxy),s}),ud.interceptors.request.use(async function(e){return hd?Object.entries(hd).forEach(([t,i])=>{e.headers.set(t,i)}):(e.params=e.params||{},e.params.processCraftHeaders=1),e}),ud.interceptors.response.use(async function(e){return await async function(e,t){if(hd)return;let{data:i}=await ld.post("app/process-api-response-headers",{headers:e},{cancelToken:t});return hd=i,cd=!1,hd}(e.headers,e.config.cancelToken),e}),new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;var pd,md=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};const fd="undefined"!=typeof Intl&&Intl.ListFormat||class{formatToParts(e){const t=[];for(const i of e)t.push({type:"element",value:i}),t.push({type:"literal",value:", "});return t.slice(0,-1)}},_d=[["years","year"],["months","month"],["weeks","week"],["days","day"],["hours","hour"],["minutes","minute"],["seconds","second"],["milliseconds","millisecond"]],bd={minimumIntegerDigits:2};class gd{constructor(e,t={}){pd.set(this,void 0);let i=String(t.style||"short");"long"!==i&&"short"!==i&&"narrow"!==i&&"digital"!==i&&(i="short");let s="digital"===i?"numeric":i;const n=t.hours||s;s="2-digit"===n?"numeric":n;const r=t.minutes||s;s="2-digit"===r?"numeric":r;const o=t.seconds||s;s="2-digit"===o?"numeric":o;const a=t.milliseconds||s;!function(e,t,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===s?n.call(e,i):n?n.value=i:t.set(e,i)}(this,pd,{locale:e,style:i,years:t.years||"digital"===i?"short":i,yearsDisplay:"always"===t.yearsDisplay?"always":"auto",months:t.months||"digital"===i?"short":i,monthsDisplay:"always"===t.monthsDisplay?"always":"auto",weeks:t.weeks||"digital"===i?"short":i,weeksDisplay:"always"===t.weeksDisplay?"always":"auto",days:t.days||"digital"===i?"short":i,daysDisplay:"always"===t.daysDisplay?"always":"auto",hours:n,hoursDisplay:"always"===t.hoursDisplay||"digital"===i?"always":"auto",minutes:r,minutesDisplay:"always"===t.minutesDisplay||"digital"===i?"always":"auto",seconds:o,secondsDisplay:"always"===t.secondsDisplay||"digital"===i?"always":"auto",milliseconds:a,millisecondsDisplay:"always"===t.millisecondsDisplay?"always":"auto"},"f")}resolvedOptions(){return md(this,pd,"f")}formatToParts(e){const t=[],i=md(this,pd,"f"),s=i.style,n=i.locale;for(const[r,o]of _d){const a=e[r];if("auto"===i[`${r}Display`]&&!a)continue;const l=i[r],d="2-digit"===l?bd:"numeric"===l?{}:{style:"unit",unit:o,unitDisplay:l};let c=new Intl.NumberFormat(n,d).format(a);"months"===r&&("narrow"===l||"narrow"===s&&c.endsWith("m"))&&(c=c.replace(/(\d+)m$/,"$1mo")),t.push(c)}return new fd(n,{type:"unit",style:"digital"===s?"short":s}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join("")}}pd=new WeakMap;const vd=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,yd=["year","month","week","day","hour","minute","second","millisecond"];class wd{constructor(e=0,t=0,i=0,s=0,n=0,r=0,o=0,a=0){this.years=e,this.months=t,this.weeks=i,this.days=s,this.hours=n,this.minutes=r,this.seconds=o,this.milliseconds=a,this.years||(this.years=0),this.sign||(this.sign=Math.sign(this.years)),this.months||(this.months=0),this.sign||(this.sign=Math.sign(this.months)),this.weeks||(this.weeks=0),this.sign||(this.sign=Math.sign(this.weeks)),this.days||(this.days=0),this.sign||(this.sign=Math.sign(this.days)),this.hours||(this.hours=0),this.sign||(this.sign=Math.sign(this.hours)),this.minutes||(this.minutes=0),this.sign||(this.sign=Math.sign(this.minutes)),this.seconds||(this.seconds=0),this.sign||(this.sign=Math.sign(this.seconds)),this.milliseconds||(this.milliseconds=0),this.sign||(this.sign=Math.sign(this.milliseconds)),this.blank=0===this.sign}abs(){return new wd(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(e){var t;if("string"==typeof e){const i=String(e).trim(),s=i.startsWith("-")?-1:1,n=null===(t=i.match(vd))||void 0===t?void 0:t.slice(1).map(e=>(Number(e)||0)*s);return n?new wd(...n):new wd}if("object"==typeof e){const{years:t,months:i,weeks:s,days:n,hours:r,minutes:o,seconds:a,milliseconds:l}=e;return new wd(t,i,s,n,r,o,a,l)}throw new RangeError("invalid duration")}static compare(e,t){const i=Date.now(),s=Math.abs(kd(i,wd.from(e)).getTime()-i),n=Math.abs(kd(i,wd.from(t)).getTime()-i);return s>n?-1:s<n?1:0}toLocaleString(e,t){return new gd(e,t).format(this)}}function kd(e,t){const i=new Date(e);return t.sign<0?(i.setUTCSeconds(i.getUTCSeconds()+t.seconds),i.setUTCMinutes(i.getUTCMinutes()+t.minutes),i.setUTCHours(i.getUTCHours()+t.hours),i.setUTCDate(i.getUTCDate()+7*t.weeks+t.days),i.setUTCMonth(i.getUTCMonth()+t.months),i.setUTCFullYear(i.getUTCFullYear()+t.years)):(i.setUTCFullYear(i.getUTCFullYear()+t.years),i.setUTCMonth(i.getUTCMonth()+t.months),i.setUTCDate(i.getUTCDate()+7*t.weeks+t.days),i.setUTCHours(i.getUTCHours()+t.hours),i.setUTCMinutes(i.getUTCMinutes()+t.minutes),i.setUTCSeconds(i.getUTCSeconds()+t.seconds)),i}function xd(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;const i=e.sign;let s=Math.abs(e.years),n=Math.abs(e.months),r=Math.abs(e.weeks),o=Math.abs(e.days),a=Math.abs(e.hours),l=Math.abs(e.minutes),d=Math.abs(e.seconds),c=Math.abs(e.milliseconds);c>=900&&(d+=Math.round(c/1e3)),(d||l||a||o||r||n||s)&&(c=0),d>=55&&(l+=Math.round(d/60)),(l||a||o||r||n||s)&&(d=0),l>=55&&(a+=Math.round(l/60)),(a||o||r||n||s)&&(l=0),o&&a>=12&&(o+=Math.round(a/24)),!o&&a>=21&&(o+=Math.round(a/24)),(o||r||n||s)&&(a=0);const h=t.getFullYear(),u=t.getMonth(),p=t.getDate();if(o>=27||s+n+o){const e=new Date(t);e.setDate(1),e.setMonth(u+n*i+1),e.setDate(0);const a=Math.max(0,p-e.getDate()),l=new Date(t);l.setFullYear(h+s*i),l.setDate(p-a),l.setMonth(u+n*i),l.setDate(p-a+o*i);const d=l.getFullYear()-t.getFullYear(),c=l.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(l)-Number(t))/864e5))+a,f=Math.abs(12*d+c);m<27?(o>=6?(r+=Math.round(o/7),o=0):o=m,n=s=0):f<=11?(n=f,s=0):(n=0,s=d*i),(n||s)&&(o=0)}return s&&(n=0),r>=4&&(n+=Math.round(r/4)),(n||s)&&(r=0),o&&r&&!n&&!s&&(r+=Math.round(o/7),o=0),new wd(s*i,n*i,r*i,o*i,a*i,l*i,d*i,c*i)}var Cd,Ed,Nd,Ad,Sd,$d,Td,Ld,Od,Fd,Id,Md,Dd,Vd,Rd,Pd,zd=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)},Bd=function(e,t,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?n.call(e,i):n?n.value=i:t.set(e,i),i};const Ud=globalThis.HTMLElement||null,qd=new wd,Hd=new wd(0,0,0,0,0,1);class Wd extends Event{constructor(e,t,i,s){super("relative-time-updated",{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=i,this.newTitle=s}}function jd(e){if(!e.date)return 1/0;if("duration"===e.format||"elapsed"===e.format){const t=e.precision;if("second"===t)return 1e3;if("minute"===t)return 6e4}const t=Math.abs(Date.now()-e.date.getTime());return t<6e4?1e3:t<36e5?6e4:36e5}const Kd=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);const t=e.date;if(t&&t.getTime()){const t=jd(e),i=Date.now()+t;i<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=i)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(const t of this.elements)e=Math.min(e,jd(t)),t.update();this.time=Math.min(36e5,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}};class Gd extends Ud{constructor(){super(...arguments),Cd.add(this),Ed.set(this,!1),Nd.set(this,!1),Sd.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:"open"}):this),Pd.set(this,null)}static define(e="relative-time",t=customElements){return t.define(e,this),this}get timeZone(){var e;return(null===(e=this.closest("[time-zone]"))||void 0===e?void 0:e.getAttribute("time-zone"))||this.ownerDocument.documentElement.getAttribute("time-zone")||void 0}static get observedAttributes(){return["second","minute","hour","weekday","day","month","year","time-zone-name","prefix","threshold","tense","precision","format","format-style","no-title","datetime","lang","title","aria-hidden","time-zone"]}get onRelativeTimeUpdated(){return zd(this,Pd,"f")}set onRelativeTimeUpdated(e){zd(this,Pd,"f")&&this.removeEventListener("relative-time-updated",zd(this,Pd,"f")),Bd(this,Pd,"object"==typeof e||"function"==typeof e?e:null,"f"),"function"==typeof e&&this.addEventListener("relative-time-updated",e)}get second(){const e=this.getAttribute("second");if("numeric"===e||"2-digit"===e)return e}set second(e){this.setAttribute("second",e||"")}get minute(){const e=this.getAttribute("minute");if("numeric"===e||"2-digit"===e)return e}set minute(e){this.setAttribute("minute",e||"")}get hour(){const e=this.getAttribute("hour");if("numeric"===e||"2-digit"===e)return e}set hour(e){this.setAttribute("hour",e||"")}get weekday(){const e=this.getAttribute("weekday");return"long"===e||"short"===e||"narrow"===e?e:"datetime"===this.format&&""!==e?this.formatStyle:void 0}set weekday(e){this.setAttribute("weekday",e||"")}get day(){var e;const t=null!==(e=this.getAttribute("day"))&&void 0!==e?e:"numeric";if("numeric"===t||"2-digit"===t)return t}set day(e){this.setAttribute("day",e||"")}get month(){const e=this.format;let t=this.getAttribute("month");if(""!==t)return null!=t||(t="datetime"===e?this.formatStyle:"short"),"numeric"===t||"2-digit"===t||"short"===t||"long"===t||"narrow"===t?t:void 0}set month(e){this.setAttribute("month",e||"")}get year(){var e;const t=this.getAttribute("year");return"numeric"===t||"2-digit"===t?t:this.hasAttribute("year")||(new Date).getUTCFullYear()===(null===(e=this.date)||void 0===e?void 0:e.getUTCFullYear())?void 0:"numeric"}set year(e){this.setAttribute("year",e||"")}get timeZoneName(){const e=this.getAttribute("time-zone-name");if("long"===e||"short"===e||"shortOffset"===e||"longOffset"===e||"shortGeneric"===e||"longGeneric"===e)return e}set timeZoneName(e){this.setAttribute("time-zone-name",e||"")}get prefix(){var e;return null!==(e=this.getAttribute("prefix"))&&void 0!==e?e:"datetime"===this.format?"":"on"}set prefix(e){this.setAttribute("prefix",e)}get threshold(){const e=this.getAttribute("threshold");return e&&(t=e,vd.test(t))?e:"P30D";var t}set threshold(e){this.setAttribute("threshold",e)}get tense(){const e=this.getAttribute("tense");return"past"===e?"past":"future"===e?"future":"auto"}set tense(e){this.setAttribute("tense",e)}get precision(){const e=this.getAttribute("precision");return yd.includes(e)?e:"micro"===this.format?"minute":"second"}set precision(e){this.setAttribute("precision",e)}get format(){const e=this.getAttribute("format");return"datetime"===e?"datetime":"relative"===e?"relative":"duration"===e?"duration":"micro"===e?"micro":"elapsed"===e?"elapsed":"auto"}set format(e){this.setAttribute("format",e)}get formatStyle(){const e=this.getAttribute("format-style");if("long"===e)return"long";if("short"===e)return"short";if("narrow"===e)return"narrow";const t=this.format;return"elapsed"===t||"micro"===t?"narrow":"datetime"===t?"short":"long"}set formatStyle(e){this.setAttribute("format-style",e)}get noTitle(){return this.hasAttribute("no-title")}set noTitle(e){this.toggleAttribute("no-title",e)}get datetime(){return this.getAttribute("datetime")||""}set datetime(e){this.setAttribute("datetime",e)}get date(){const e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=(null==e?void 0:e.toISOString())||""}connectedCallback(){this.update()}disconnectedCallback(){Kd.unobserve(this)}attributeChangedCallback(e,t,i){t!==i&&("title"===e&&Bd(this,Ed,null!==i&&(this.date&&zd(this,Cd,"m",$d).call(this,this.date))!==i,"f"),zd(this,Nd,"f")||"title"===e&&zd(this,Ed,"f")||Bd(this,Nd,(async()=>{await Promise.resolve(),this.update(),Bd(this,Nd,!1,"f")})(),"f"))}update(){const e=zd(this,Sd,"f").textContent||this.textContent||"",t=this.getAttribute("title")||"";let i=t;const s=this.date;if("undefined"==typeof Intl||!Intl.DateTimeFormat||!s)return void(zd(this,Sd,"f").textContent=e);const n=Date.now();zd(this,Ed,"f")||(i=zd(this,Cd,"m",$d).call(this,s)||"",i&&!this.noTitle&&this.setAttribute("title",i));const r=function(e,t="second",i=Date.now()){const s=e.getTime()-i;if(0===s)return new wd;const n=Math.sign(s),r=Math.abs(s),o=Math.floor(r/1e3),a=Math.floor(o/60),l=Math.floor(a/60),d=Math.floor(l/24),c=Math.floor(d/30),h=Math.floor(c/12),u=yd.indexOf(t)||yd.length;return new wd(u>=0?h*n:0,u>=1?(c-12*h)*n:0,0,u>=3?(d-30*c)*n:0,u>=4?(l-24*d)*n:0,u>=5?(a-60*l)*n:0,u>=6?(o-60*a)*n:0,u>=7?(r-1e3*o)*n:0)}(s,this.precision,n),o=zd(this,Cd,"m",Td).call(this,r);let a=e;const l=zd(this,Cd,"m",Rd).call(this,o);a=l?zd(this,Cd,"m",Dd).call(this,s):"duration"===o?zd(this,Cd,"m",Ld).call(this,r):"relative"===o?zd(this,Cd,"m",Od).call(this,r):zd(this,Cd,"m",Fd).call(this,s),a?zd(this,Cd,"m",Vd).call(this,a):this.shadowRoot===zd(this,Sd,"f")&&this.textContent&&zd(this,Cd,"m",Vd).call(this,this.textContent),a===e&&i===t||this.dispatchEvent(new Wd(e,a,t,i)),"relative"===o||"duration"===o||l&&(zd(this,Cd,"m",Id).call(this,s)||zd(this,Cd,"m",Md).call(this,s))?Kd.observe(this):Kd.unobserve(this)}}Ed=new WeakMap,Nd=new WeakMap,Sd=new WeakMap,Pd=new WeakMap,Cd=new WeakSet,Ad=function(){var e;const t=(null===(e=this.closest("[lang]"))||void 0===e?void 0:e.getAttribute("lang"))||this.ownerDocument.documentElement.getAttribute("lang");try{return new Intl.Locale(null!=t?t:"").toString()}catch(e){return"default"}},$d=function(e){return new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short",timeZone:this.timeZone}).format(e)},Td=function(e){const t=this.format;if("datetime"===t)return"datetime";if("duration"===t)return"duration";if("elapsed"===t)return"duration";if("micro"===t)return"duration";if(("auto"===t||"relative"===t)&&"undefined"!=typeof Intl&&Intl.RelativeTimeFormat){const t=this.tense;if("past"===t||"future"===t)return"relative";if(1===wd.compare(e,this.threshold))return"relative"}return"datetime"},Ld=function(e){const t=zd(this,Cd,"a",Ad),i=this.format,s=this.formatStyle,n=this.tense;let r=qd;"micro"===i?(e=xd(e),r=Hd,0===e.months&&("past"===this.tense&&-1!==e.sign||"future"===this.tense&&1!==e.sign)&&(e=Hd)):("past"===n&&-1!==e.sign||"future"===n&&1!==e.sign)&&(e=r);const o=`${this.precision}sDisplay`;return e.blank?r.toLocaleString(t,{style:s,[o]:"always"}):e.abs().toLocaleString(t,{style:s})},Od=function(e){const t=new Intl.RelativeTimeFormat(zd(this,Cd,"a",Ad),{numeric:"auto",style:this.formatStyle}),i=this.tense;"future"===i&&1!==e.sign&&(e=qd),"past"===i&&-1!==e.sign&&(e=qd);const[s,n]=function(e){const t=xd(e,void 0);if(t.blank)return[0,"second"];for(const e of yd){if("millisecond"===e)continue;const i=t[`${e}s`];if(i)return[i,e]}return[0,"second"]}(e);return"second"===n&&s<10?t.format(0,"millisecond"===this.precision?"second":this.precision):t.format(s,n)},Fd=function(e){const t=new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},Id=function(e){const t=new Date,i=new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),{timeZone:this.timeZone,year:"numeric",month:"2-digit",day:"2-digit"});return i.format(t)===i.format(e)},Md=function(e){const t=new Date,i=new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),{timeZone:this.timeZone,year:"numeric"});return i.format(t)===i.format(e)},Dd=function(e){const t={hour:"numeric",minute:"2-digit",timeZoneName:"short",timeZone:this.timeZone};if(zd(this,Cd,"m",Id).call(this,e)){let i=new Intl.RelativeTimeFormat(zd(this,Cd,"a",Ad),{numeric:"auto"}).format(0,"day");return i=i.charAt(0).toLocaleUpperCase(zd(this,Cd,"a",Ad))+i.slice(1),`${i} ${new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),t).format(e)}`}const i=Object.assign(Object.assign({},t),{day:"numeric",month:"short"});return zd(this,Cd,"m",Md).call(this,e)?new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),i).format(e):new Intl.DateTimeFormat(zd(this,Cd,"a",Ad),Object.assign(Object.assign({},i),{year:"numeric"})).format(e)},Vd=function(e){if(this.hasAttribute("aria-hidden")&&"true"===this.getAttribute("aria-hidden")){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.textContent=e,zd(this,Sd,"f").replaceChildren(t)}else zd(this,Sd,"f").textContent=e},Rd=function(e){var t;return"duration"!==e&&("true"===this.ownerDocument.documentElement.getAttribute("data-prefers-absolute-time")||"true"===(null===(t=this.ownerDocument.body)||void 0===t?void 0:t.getAttribute("data-prefers-absolute-time")))};const Zd="undefined"!=typeof globalThis?globalThis:window;try{Zd.RelativeTimeElement=Gd.define()}catch(r){if(!(Zd.DOMException&&r instanceof DOMException&&"NotSupportedError"===r.name||r instanceof ReferenceError))throw r}},5233:function(e,t,i){"use strict";function s(e,t){for(var i=[],s={},n=0;n<t.length;n++){var r=t[n],o=r[0],a={id:e+":"+n,css:r[1],media:r[2],sourceMap:r[3]};s[o]?s[o].parts.push(a):i.push(s[o]={id:o,parts:[a]})}return i}i.d(t,{A:function(){return m}});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},o=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,d=!1,c=function(){},h=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,i,n){d=i,h=n||{};var o=s(e,t);return f(o),function(t){for(var i=[],n=0;n<o.length;n++){var a=o[n];(l=r[a.id]).refs--,i.push(l)}for(t?f(o=s(e,t)):o=[],n=0;n<i.length;n++){var l;if(0===(l=i[n]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete r[l.id]}}}}function f(e){for(var t=0;t<e.length;t++){var i=e[t],s=r[i.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](i.parts[n]);for(;n<i.parts.length;n++)s.parts.push(b(i.parts[n]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{var o=[];for(n=0;n<i.parts.length;n++)o.push(b(i.parts[n]));r[i.id]={id:i.id,refs:1,parts:o}}}}function _(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function b(e){var t,i,s=document.querySelector("style["+u+'~="'+e.id+'"]');if(s){if(d)return c;s.parentNode.removeChild(s)}if(p){var n=l++;s=a||(a=_()),t=y.bind(null,s,n,!1),i=y.bind(null,s,n,!0)}else s=_(),t=w.bind(null,s),i=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else i()}}var g,v=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,i,s){var n=i?"":s.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var r=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function w(e,t){var i=t.css,s=t.media,n=t.sourceMap;if(s&&e.setAttribute("media",s),h.ssrId&&e.setAttribute(u,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}},8272:function(e,t,i){var s=i(2054);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,i(5233).A)("0c6f9d4f",s,!0,{})}},__webpack_module_cache__={},inProgress;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var i=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](i,i.exports,__webpack_require__),i.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var i in t)__webpack_require__.o(t,i)&&!__webpack_require__.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(t,i){return __webpack_require__.f[i](e,t),t},[]))},__webpack_require__.u=function(e){return e+".js"},__webpack_require__.miniCssF=function(e){},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},inProgress={},__webpack_require__.l=function(e,t,i,s){if(inProgress[e])inProgress[e].push(t);else{var n,r;if(void 0!==i)for(var o=document.getElementsByTagName("script"),a=0;a<o.length;a++){var l=o[a];if(l.getAttribute("src")==e){n=l;break}}n||(r=!0,(n=document.createElement("script")).charset="utf-8",__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.src=e),inProgress[e]=[t];var d=function(t,i){n.onerror=n.onload=null,clearTimeout(c);var s=inProgress[e];if(delete inProgress[e],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach(function(e){return e(i)}),t)return t(i)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),r&&document.head.appendChild(n)}},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e}(),function(){var e={2561:0};__webpack_require__.f.j=function(t,i){var s=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var n=new Promise(function(i,n){s=e[t]=[i,n]});i.push(s[2]=n);var r=__webpack_require__.p+__webpack_require__.u(t),o=new Error;__webpack_require__.l(r,function(i){if(__webpack_require__.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var n=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,s[1](o)}},"chunk-"+t,t)}};var t=function(t,i){var s,n,r=i[0],o=i[1],a=i[2],l=0;if(r.some(function(t){return 0!==e[t]})){for(s in o)__webpack_require__.o(o,s)&&(__webpack_require__.m[s]=o[s]);a&&a(__webpack_require__)}for(t&&t(i);l<r.length;l++)n=r[l],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var __webpack_exports__={};!function(){"use strict";var _dashboard_scss__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8272),_dashboard_scss__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_dashboard_scss__WEBPACK_IMPORTED_MODULE_0__),_craftcms_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3516);(function($){Craft.Dashboard=Garnish.Base.extend({$grid:null,$widgetManagerBtn:null,$newWidgetBtn:null,widgetTypes:null,grid:null,widgets:null,widgetManager:null,widgetAdminTable:null,widgetSettingsModal:null,init:function(e){this.widgetTypes=e,this.widgets={},this.$widgetManagerBtn=$("#widgetManagerBtn"),this.$newWidgetBtn=$("#newwidgetmenubtn"),this.addListener(this.$widgetManagerBtn,"click","showWidgetManager"),Garnish.$doc.ready(()=>{this.$grid=$("#dashboard-grid"),this.grid=this.$grid.data("grid"),this.addListener("#new-widget-menu a","click",e=>{e.preventDefault(),this.handleNewWidgetOptionSelect(e)}),this.addListener("#new-widget-menu a","keydown",e=>{e.keyCode!==Garnish.SPACE_KEY&&e.keyCode!==Garnish.RETURN_KEY||(e.preventDefault(),this.handleNewWidgetOptionSelect(e))}),this.$grid.trigger("scroll")})},getTypeInfo:function(e,t,i){return t?void 0===this.widgetTypes[e][t]?i:this.widgetTypes[e][t]:this.widgetTypes[e]},handleNewWidgetOptionSelect:function(e){this.$newWidgetBtn.data("trigger").hide();const t=$(e.target);this.createWidget(t.data("type"),t.data("name"))},createWidget:function(type,name,responseData){const settingsNamespace=void 0===responseData?`newwidget${Math.floor(1e9*Math.random())}-settings`:`widget${responseData.id}-settings`,settingsHtml=void 0===responseData?this.getTypeInfo(type,"settingsHtml","").replace(/__NAMESPACE__/g,settingsNamespace):null,settingsJs=void 0===responseData?this.getTypeInfo(type,"settingsJs","").replace(/__NAMESPACE__/g,settingsNamespace):null,$gridItem=$('<div class="item" data-colspan="1" style="display: block">'),$container=$("<div/>",{class:"widget new loading-new scaleout","data-type":type}).addClass(type.toLowerCase()).append($("<div/>",{class:"front"}).append($("<div/>",{class:"pane"}).append($("<div/>",{class:"spinner body-loading"})).append($("<div/>",{class:"widget-heading"}).append("<h2/>").append("<h5/>")).append($("<div/>",{class:"body"})).append($("<div/>",{class:"settings icon hidden"})))).append($("<div/>",{class:"back"}).append($("<form/>",{class:"pane"}).append($("<input/>",{type:"hidden",name:"type",value:type})).append($("<input/>",{type:"hidden",name:"settingsNamespace",value:settingsNamespace})).append($("<h2/>",{class:"first",text:Craft.t("app","{type} Settings",{type:name})})).append($("<div/>",{class:"settings"})).append("<hr/>").append($("<div/>",{class:"buttons clearafter"}).append(Craft.ui.createSubmitButton({label:Craft.t("app","Save"),spinner:!0})).append($("<button/>",{type:"button",class:"btn cancel-btn",text:Craft.t("app","Cancel")}))))).appendTo($gridItem);settingsHtml?($container.addClass("flipped"),$container.children(".front").addClass("hidden")):($container.addClass("loading"),$container.children(".back").addClass("hidden"));const widget=new Craft.Widget($container,settingsHtml?settingsHtml.replace(/__NAMESPACE__/g,settingsNamespace):null,settingsJs?()=>{eval(settingsJs)}:$.noop);if(this.grid.$items.length?$gridItem.insertAfter(this.grid.$items.last()):$gridItem.prependTo(this.grid.$container),this.grid.addItems($gridItem),Garnish.scrollContainerToElement($gridItem),$container.removeClass("scaleout"),void 0!==responseData)$container.removeClass("loading"),widget.update(responseData);else if(!settingsHtml){const e={type:type};Craft.queue.push(()=>new Promise(t=>{Craft.sendActionRequest("POST","dashboard/create-widget",{data:e}).then(e=>{$container.removeClass("loading"),widget.update(e.data)}).catch(()=>{widget.destroy()}).finally(t)}))}},showWidgetManager:function(){if(this.widgetManager)this.widgetManager.show();else{for(var e=this.$grid.find("> .item > .widget"),t=$('<form method="post" accept-charset="UTF-8"><input type="hidden" name="action" value="widgets/save-widget"/></form>').appendTo(Garnish.$bod),i=$('<p id="nowidgets" class="zilch small'+(e.length?" hidden":"")+'">'+Craft.t("app","You don’t have any widgets yet.")+"</p>").appendTo(t),s=$('<table class="data'+(e.length?"":" hidden")+'" role="presentation"/>').appendTo(t),n=$("<tbody/>").appendTo(s),r=0;r<e.length;r++){var o=e.eq(r).data("widget");o&&o.id&&o.getManagerRow().appendTo(n)}this.widgetManager=new Garnish.HUD(this.$widgetManagerBtn,t,{hudClass:"hud widgetmanagerhud",onShow:()=>{this.$widgetManagerBtn.addClass("active").attr("aria-expanded","true")},onHide:()=>{this.$widgetManagerBtn.removeClass("active").attr("aria-expanded","false")}}),this.widgetAdminTable=new Craft.AdminTable({tableSelector:s,noObjectsSelector:i,sortable:!0,reorderAction:"dashboard/reorder-user-widgets",deleteAction:"dashboard/delete-user-widget",confirmDeleteMessage:null,deleteSuccessMessage:null,noItemsSelector:"#nowidgets",onReorderItems:e=>{for(var t=null,i=0;i<e.length;i++){var s=this.widgets[e[i]];t?s.$gridItem.insertAfter(t.$gridItem):s.$gridItem.prependTo(this.$grid),t=s}this.grid.resetItemOrder()},onDeleteItem:e=>{const t=this.widgets[e];t.destroy();const i=Craft.ui.createButton({label:Craft.t("app","Undo"),spinner:!0}),s=Craft.cp.displaySuccess(Craft.t("app","“{name}” deleted.",{name:t.getLabel()}),{details:i});i.on("click",()=>{if(i.hasClass("loading"))return;i.addClass("loading");const e={type:t.type,settings:t.storedSettings};Craft.sendActionRequest("POST","dashboard/create-widget",{data:e}).then(e=>{this.createWidget(t.type,t.getLabel(),e.data),i.off("click"),s.close()}).finally(()=>{i.removeClass("loading")})})}})}}}),Craft.Widget=Garnish.Base.extend({$container:null,$gridItem:null,$front:null,$settingsBtn:null,$title:null,$subtitle:null,$heading:null,$bodyContainer:null,$back:null,$settingsForm:null,$settingsContainer:null,$settingsToggle:null,$saveBtn:null,$settingsErrorList:null,id:null,type:null,title:null,subtitle:null,storedSettings:null,totalCols:null,settingsHtml:null,initSettingsFn:null,showingSettings:!1,colspanPicker:null,init:function(e,t,i,s){this.$container=$(e),this.storedSettings=s,this.$settingsToggle=this.$container.find("[data-settings-toggle]"),this.$gridItem=this.$container.parent(),this.$container.data("widget",this),this.id=this.$container.data("id"),this.type=this.$container.data("type"),this.title=this.$container.data("title"),this.id&&(window.dashboard.widgets[this.id]=this),this.$front=this.$container.children(".front"),this.$settingsBtn=this.$front.find("> .pane > .icon.settings"),this.$heading=this.$front.find("> .pane > .widget-heading"),this.$title=this.$heading.find("> h2"),this.$subtitle=this.$heading.find("> h5"),this.$bodyContainer=this.$front.find("> .pane > .body"),this.setSettingsHtml(t,i),this.$container.hasClass("flipped")?(this.initBackUi(),this.refreshSettings(),this.onShowBack()):this.onShowFront(),this.addListener(this.$settingsBtn,"click","showSettings")},initBackUi:function(){this.$back=this.$container.children(".back"),this.$settingsForm=this.$back.children("form"),this.$settingsContainer=this.$settingsForm.children(".settings");var e=this.$settingsForm.children(".buttons");this.$saveBtn=e.children("button[type=submit]"),this.addListener(e.children(".cancel-btn"),"click","cancelSettings"),this.addListener(this.$settingsForm,"submit","saveSettings")},getColspan:function(){return this.$gridItem.data("colspan")},setColspan:function(e){this.$gridItem.data("colspan",e).attr("data-colspan",e),window.dashboard.grid.refreshCols(!0)},getTypeInfo:function(e,t){return window.dashboard.getTypeInfo(this.type,e,t)},setSettingsHtml:function(e,t){this.settingsHtml=e,this.initSettingsFn=t,this.settingsHtml?this.$settingsBtn.removeClass("hidden"):this.$settingsBtn.addClass("hidden")},refreshSettings:function(){this.$settingsContainer.html(this.settingsHtml),Garnish.requestAnimationFrame(()=>{Craft.initUiElements(this.$settingsContainer),this.initSettingsFn()})},showSettings:function(){this.$back||this.initBackUi(),this.refreshSettings(),this.$back.removeClass("hidden"),setTimeout(()=>{this.$container.addClass("flipped").velocity({height:this.$back.height()},{complete:this.onShowBack.bind(this)})},100)},hideSettings:function(){this.$front.removeClass("hidden"),setTimeout(()=>{this.$container.removeClass("flipped").velocity({height:this.$front.height()},{complete:this.onShowFront.bind(this)}),this.$settingsToggle.focus()},100)},saveSettings:function(e){e.preventDefault(),this.$saveBtn.hasClass("loading")||(this.$saveBtn.addClass("loading"),Craft.queue.push(()=>new Promise(e=>{const t=this.$container.hasClass("new")?"dashboard/create-widget":"dashboard/save-widget-settings",i=this.$settingsForm.serialize();Craft.sendActionRequest("POST",t,{data:i}).then(e=>{this.$settingsErrorList&&(this.$settingsErrorList.remove(),this.$settingsErrorList=null),Craft.cp.displaySuccess(Craft.t("app","Widget saved.")),e.data.info?(this.update(e.data),this.hideSettings()):this.destroy()}).catch(({response:e})=>{this.$settingsErrorList&&(this.$settingsErrorList.remove(),this.$settingsErrorList=null),Craft.cp.displayError(Craft.t("app","Couldn’t save widget.")),e.data.errors&&(this.$settingsErrorList=Craft.ui.createErrorList(e.data.errors).insertAfter(this.$settingsContainer))}).finally(()=>{this.$saveBtn.removeClass("loading"),e()})})))},async update(response){this.$back||this.initBackUi(),this.title=response.info.title,this.subtitle=response.info.subtitle,this.storedSettings=response.info.settings,this.$container.hasClass("new")?(this.id=response.info.id,this.$container.attr("id","widget"+this.id).removeClass("new loading-new"),this.$settingsForm&&this.$settingsForm.prepend('<input type="hidden" name="widgetId" value="'+this.id+'"/>'),window.dashboard.widgets[this.id]=this,window.dashboard.widgetAdminTable&&window.dashboard.widgetAdminTable.addRow(this.getManagerRow())):window.dashboard.widgetAdminTable&&window.dashboard.widgetAdminTable.$tbody.children('[data-id="'+this.id+'"]:first').children("td:nth-child(2)").html(this.getManagerRowLabel()),this.title||this.subtitle?(this.title?this.$title.text(this.title):this.$title.remove(),this.subtitle?this.$subtitle.text(this.subtitle):this.$subtitle.remove()):this.$heading.remove(),this.$bodyContainer.html(response.info.bodyHtml),response.info.colspan!=this.getColspan()&&(this.setColspan(response.info.colspan),Garnish.scrollContainerToElement(this.$gridItem)),Craft.initUiElements(this.$bodyContainer),await Craft.appendHeadHtml(response.headHtml),await Craft.appendBodyHtml(response.bodyHtml),Craft.cp.elementThumbLoader.load(this.$bodyContainer),this.setSettingsHtml(response.info.settingsHtml,function(){eval(response.info.settingsJs)})},cancelSettings:function(){this.id?this.hideSettings():this.destroy()},onShowFront:function(){this.showingSettings=!1,this.removeListener(this.$back,"resize"),this.addListener(this.$front,"resize","updateContainerHeight"),this.$back&&this.$back.addClass("hidden")},onShowBack:function(){this.showingSettings=!0,this.removeListener(this.$front,"resize"),this.addListener(this.$back,"resize","updateContainerHeight"),this.$front.addClass("hidden"),setTimeout(()=>{this.$settingsForm.find(":focusable:first").focus()},1)},updateContainerHeight:function(){this.$container.height((this.showingSettings?this.$back:this.$front).height())},getWidgetLabelId:function(){return`widget-label-${this.id}`},getManagerRow:function(){var e=$('<tr data-id="'+this.id+'" data-name="'+(this.title?Craft.escapeHtml(this.title):this.getTypeInfo("name"))+'"><td class="widgetmanagerhud-icon thin">'+this.getTypeInfo("iconSvg")+'</td><td id="'+this.getWidgetLabelId()+'">'+this.getManagerRowLabel()+'</td><td class="widgetmanagerhud-col-colspan-picker thin"></td><td class="widgetmanagerhud-col-move thin"><a class="move icon" title="'+Craft.t("app","Reorder")+'" role="button"></a></td><td class="widgetmanagerhud-col-actions thin actions-container"></td><td class="thin"><a class="delete icon" tabindex="0" type="button" title="'+Craft.t("app","Delete")+'" role="button" aria-label="'+Craft.t("app","Delete")+'" aria-describedby="'+this.getWidgetLabelId()+'"></a></td></tr>');this.colspanPicker=document.createElement("craft-slide-picker"),this.colspanPicker.min=1,this.colspanPicker.step=1,this.colspanPicker.value=this.getColspan(),this.colspanPicker.label=Craft.t("app","Number of columns"),this.colspanPicker.valueLabel=e=>Craft.t("app","{num, number} {num, plural, =1{column} other{columns}}",{num:e}),this.colspanPicker.setAttribute("described-by",this.getWidgetLabelId());const t=()=>{const e=window.dashboard.grid.totalCols;this.colspanPicker.max=e,this.colspanPicker.value>e&&(this.colspanPicker.value=e)};return t(),this.colspanPicker.addEventListener("value-change",({detail:e})=>{const t=e.value;this.setColspan(t),window.dashboard.grid.refreshCols(!0);let i={id:this.id,colspan:t};Craft.sendActionRequest("POST","dashboard/change-widget-colspan",{data:i}).then(e=>{Craft.cp.displaySuccess(Craft.t("app","Widget saved."))}).catch(({response:e})=>{Craft.cp.displayError(Craft.t("app","Couldn’t save widget."))})}),e.find("> td.widgetmanagerhud-col-colspan-picker").append(this.colspanPicker),window.dashboard.grid.on("refreshCols",t),e},getLabel:function(){return this.title||this.getTypeInfo("name")},getManagerRowLabel:function(){var e=this.getTypeInfo("name");return this.title?Craft.escapeHtml(this.title)+(this.title!==e?' <span class="light">('+e+")</span>":""):e},destroy:function(){delete window.dashboard.widgets[this.id],this.$container.addClass("scaleout"),this.base(),setTimeout(()=>{window.dashboard.grid.removeItems(this.$gridItem),this.$gridItem.remove()},200)}})})(jQuery)}()})();
//# sourceMappingURL=Dashboard.js.map