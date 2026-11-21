// Prime Package – റൂട്ട് പ്ലാനർ ബാക്കെൻഡ് (Google Apps Script)
const KEY='CvjeO24wi6Z3'; // ഇത് ആപ്പിൽ കൊടുക്കുന്ന പാസ്‌വേഡ് ആണ്; ആവശ്യമെങ്കിൽ മാറ്റാം
const SEED=[["Reliance SMART Superstore","18008910001",0],["Nesto Hypermarket - Kalpetta","7736214777",0],["Al Nahdha Hypermarket","9495476205",0],["AL NAHDHA HYPERMARKET KALPETTA","9542375423",0],["JamJoom Hypermarket Kalpetta","7559888811",0],["WELLMART","4936220221",0],["Supplyco Supermarket Kalpetta","4936206441",0],["Janesh Margin Free Super Market","4936202336",0],["Keerthi Margin Free Super Market","4936204748",0],["Keerthi Fresh Margin Free Store","4936221946",0],["Ajfan Dates and Nuts Kalpatta","8138000508",0],["WAYANAD MART","8547044480",0],["Happy Day Supermarket","9645226227",0],["Minha Mart","8086644524",0],["Hypercity Hpermarket","7034173173",0],["Hypercity hypermarket","7511174173",0],["Shop More Hypermarket","9744276238",0],["Fresh mart","9946022044",0],["Olive supermarket","9207093489",0],["Wayanad Trading Corporation","9847873310",0],["Consumers D Mart","9447430246",0],["Galaxy Supermarket","",0],["Enlite Super Market","",0],["Co-operative Super Market","",0],["CSD canteen kalpetta","",0],["SHALIMAR TRADING COMPANY KALPETTA","",0],["Winco Supermarket","",0],["Bada Bazaar","",0],["Kakkuzhiyil Traders (Spices King)","9947173444",0],["TIKACHI SPICES","9446584471",0],["Wayanad Spices Gartens","9446881301",0],["Wayanad Floating Market","9778733052",0],["Daymart Hypermarket Sultan Bathery","9072896735",1],["Happy 7 Days - Hypermarket","7354888777",1],["Happy 7 days Hypermarket","7510944777",1],["Shopprix Super Mart - Sultan Bathery","4936221077",1],["City supermarket meenangadi","",1],["Pravasi Supermarket","7994883327",1],["20 20 Supermarket","7034032020",1],["Saams Hypermart","9744261160",1],["Pachilakkad Vanitham Margin Free Supermarket","7593006415",1],["Ickara Super Market","4936211544",1],["Paul Mart","8547240799",1],["Quality Super Market","8113086130",1],["NEW ONE STOP","",1],["Alakkal Supermarket","",1],["Eden Fresh Hyper Mart","",1],["C.V.Store","",1],["Beverages Outlet Cheepad","",1],["NEW FOOD MART SUPER MARKET","7510464734",1],["Ever Fine Super Market","9447933254",1],["The Walnut Cakes Sulthan Bathery","9847275388",1],["VMK SUPERMARKET & Groceries Kenichira","8075364330",1],["BLUE MART","9656600827",1],["Sidra grocery store","8547220165",1],["Shreyas Supermarket","7510666800",1],["Aysha Super Market","",1],["Lemoon Food & Grocery Delivery","9946949546",1],["JS STORE","9074022238",1],["Mint Mall","4936222277",1],["DAYMART HYPERMARKET MANANTHAVADY","9639666222",2],["MYTHRI SUPERMARKET KANIYAMBETTA","4936285786",2],["Supplyco super market panamaram","",2],["PAMANGADAN STORES","4936280246",2],["KSB Stores","",2],["MARIYAM STORE","8606443319",2],["Mariya Store","9447887857",2],["AONE SUPERMARKET","",2],["NEDUMBALA TOWN","",2],["Panachical Stores","9400254892",2],["JANAMYTHRI SUPER MARKET","",2],["MR Hypermarket - Muriyanal","",2],["MR Hypermarket","9895307711",2],["Al Salama Stores","9961707195",2],["Aishwarya Shopping Mall","",2],["WeMart SuperMarket","9846358512",2],["Karingalode city","9562982513",2],["Daily Needs Vengoor","9164980611",2],["Pulpally Market","",2],["Banyan Tree","9947400963",2],["KARIAMBADI STORES","9961365799",2],["Gramin Mart","9744083698",2],["Gramin Ghandhi Gramam","8157832439",2],["Sneha Women Self help Market","9446252337",2],["Ajwa Foods","7907004521",2],["Janatha Store Malapuram","9847113425",2],["NICE MART MEPPADI","9778523429",3],["S S mart","9656051078",3],["CH Vegetables Wholesale, Irumanathoor","9387343388",3],["FRESH & SPOT","8129899298",3],["Sudhi Store","9605398875",3],["Sulabha Super Market","8590087227",3],["OM STORE","9400824691",3],["RINSHAD STORE","9605896464",3],["Nakul Store","7306348728",3],["PS Store","9544763819",3],["SZ Supermarket (Smart Zone)","",3],["Ration shop, Mylambady","8606796279",3],["C S STORES","9061897452",3],["P.S Fruits & Vegetables","",3],["QMART SUPERMARKET","9329300600",3],["KM Supermarket","9496111177",3],["TM Stores (Mukundettans shop)","9961301950",3],["Badusha hypermarket","9037400004",3],["Hexa supermarket","8139830057",3],["Kathir Supermarket","9961196364",3],["Palakkal Agencies","9495258812",3],["KA SUPERMARKET","9061717739",3],["Luxus Hypermarket","8086902020",3],["Shop.wayanad.co.in","9061703735",3],["KNS SUPER MARKET","",3],["Panda Foods (India) Pvt Ltd","4936246213",3],["Extra Hyper Market","8943212121",3],["Korkandy babu store","",3],["Wayanad Associated","4972722677",4],["Budget Hyper Market Manjeri","9567857777",4],["Green Apple Super Shoppee","4902344277",4],["VKM HYPER MARKET","8594000411",4],["Greens Hypermarket, Thalasserry","8943000011",4],["Winfair Supermarket","9847436233",4],["Daymart Supermarket Vatakara","9645182121",4],["VPT Supermarket","8089375004",4],["H and H Stores","",4],["Dhyan Mini Mart","9605992562",4],["SKYZOON SUPERMARKET","",4],["Oppam Hyper Zone","",4],["BMP Hyper Market","",4],["Real Hyper Market","9061733300",4],["Naderi Super Market","9746242422",4],["Masters Supermarket","9069111121",4],["AYANIKKAD Supermarket, Bakery & Restaurant","",4],["NS Vegetables","",4],["Lotus Hypermarket","8137883133",4],["Ayisha Store","9605165151",4],["La Bazar","8943723818",4],["Am stores","",4],["Fish & meet market","",4],["illathvillas farm-stay","7907766193",4]];
const DAYN=['ശനി','തിങ്കൾ','ചൊവ്വ','ബുധൻ','വ്യാഴം'];
const LAB={p:'ബാക്കി',v:'സന്ദർശിച്ചു',o:'ഓർഡർ ലഭിച്ചു',c:'കട അടച്ചു',l:'പിന്നീട്'};
const HS=['id','കട','ഫോൺ','ദിവസം'];
const HV=['തീയതി','shopId','കട','ദിവസം','സ്റ്റാറ്റസ്','ഓർഡർ ₹','കുറിപ്പ്','സമയം'];

function sheet_(name,head,textCol){
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  let s=ss.getSheetByName(name);
  if(!s){
    s=ss.insertSheet(name);
    s.getRange(1,1,1,head.length).setValues([head]);
    s.setFrozenRows(1);
    s.getRange(textCol+':'+textCol).setNumberFormat('@');
  }
  return s;
}
function setup(){setup_();}
function setup_(){
  const a=sheet_('Shops',HS,'C');
  if(a.getLastRow()<2){
    a.getRange(2,1,SEED.length,4).setValues(SEED.map((r,i)=>[i+1,r[0],r[1],r[2]]));
  }
  sheet_('Visits',HV,'A');
}
function ds_(v){return v instanceof Date?Utilities.formatDate(v,Session.getScriptTimeZone(),'yyyy-MM-dd'):String(v);}
function rows_(s){const v=s.getDataRange().getValues();v.shift();return v;}
function find_(s,col,val){
  const v=s.getDataRange().getValues();
  for(let i=1;i<v.length;i++){if(Number(v[i][col])===val)return i+1;}
  return -1;
}
function doGet(){return ContentService.createTextOutput('OK – Route Planner backend');}
function doPost(e){
  let r;
  try{
    const q=JSON.parse(e.postData.contents);
    if(q.key!==KEY)throw new Error('auth');
    const L=LockService.getScriptLock();
    L.waitLock(20000);
    try{r=act_(q);}finally{L.releaseLock();}
  }catch(x){r={error:String(x.message||x)};}
  return ContentService.createTextOutput(JSON.stringify(r)).setMimeType(ContentService.MimeType.JSON);
}
function act_(q){
  setup_();
  const SH=sheet_('Shops',HS,'C'),VS=sheet_('Visits',HV,'A');
  if(q.a==='read'){
    const inv={};Object.keys(LAB).forEach(k=>inv[LAB[k]]=k);
    return{
      shops:rows_(SH).filter(r=>r[1]!=='').map(r=>({id:Number(r[0]),n:String(r[1]),p:String(r[2]),d:Number(r[3])})),
      visits:rows_(VS).filter(r=>r[0]!=='').map(r=>({date:ds_(r[0]),id:Number(r[1]),n:String(r[2]),s:inv[r[4]]||'p',o:r[5]===''?'':String(r[5]),t:String(r[6]),v:String(r[7])}))
    };
  }
  if(q.a==='visit'){
    const v=q.v,vals=VS.getDataRange().getValues();
    let at=-1;
    for(let i=1;i<vals.length;i++){if(ds_(vals[i][0])===v.date&&Number(vals[i][1])===v.id){at=i+1;break;}}
    if(v.s==='p'&&!v.o&&!v.t){if(at>0)VS.deleteRow(at);}
    else{
      const row=[v.date,v.id,v.n,DAYN[v.d],LAB[v.s],v.o===''?'':Number(v.o),v.t||'',v.tm||''];
      VS.getRange(at>0?at:VS.getLastRow()+1,1,1,8).setValues([row]);
    }
    return{ok:1};
  }
  if(q.a==='shopAdd'){
    if(find_(SH,0,q.shop.id)<0)SH.getRange(SH.getLastRow()+1,1,1,4).setValues([[q.shop.id,q.shop.n,q.shop.p,q.shop.d]]);
    return{ok:1};
  }
  if(q.a==='shopSet'){
    const at=find_(SH,0,q.shop.id);
    if(at>0)SH.getRange(at,1,1,4).setValues([[q.shop.id,q.shop.n,q.shop.p,q.shop.d]]);
    return{ok:1};
  }
  if(q.a==='shopDel'){
    const at=find_(SH,0,q.id);
    if(at>0)SH.deleteRow(at);
    return{ok:1};
  }
  throw new Error('unknown action');
}
