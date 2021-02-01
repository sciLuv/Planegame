
//création des Element de la grille de scrolling column1_case1, ect//
let grid = document.getElementById('grid');
for (i = 0; i < 46; i++) { grid.innerHTML += '<div class=column id=column' + i + ' ></div>';
    for (j = 0; j < 20; j++) {
      document.getElementById('column' + i).innerHTML += '<div class="case case' + j +'" id=column' + i + '_case' + j + ' ></div>';
  }
};

//création des Element de la grille de lavion grid2Column1_case1, ect//
let grid2 = document.getElementById('grid2');
for (i = 0; i < 46; i++) { grid2.innerHTML += '<div class=grid2Column id=grid2Column' + i + ' ></div>';
  for (j = 0; j < 20; j++) {
      document.getElementById('grid2Column' + i).innerHTML += '<div class="grid2Case grid2Case' + j +'" id=grid2Column' + i + '_case' + j + ' ></div>';
  }
};

//création des Element de la grille de la fumée grid3Column1_case1, ect//
let grid3 = document.getElementById('grid3');
for (i = 0; i < 46; i++) { grid3.innerHTML += '<div class=grid3Column id=grid3Column' + i + ' ></div>';
  for (j = 0; j < 20; j++) {
      document.getElementById('grid3Column' + i).innerHTML += '<div class="smoke grid3Case grid3Case' + j +'" id=grid3Column' + i + '_case' + j + ' ></div>';
  }
};

//création des Element de la grille des oiseaux
let grid4 = document.getElementById('grid4');
for (i = 0; i < 46; i++) { grid4.innerHTML += '<div class=grid4Column id=grid4Column' + i + ' ></div>';
  for (j = 0; j < 20; j++) {
      document.getElementById('grid4Column' + i).innerHTML += '<div class="bird grid4Case grid4Case' + j +'" id=grid4Column' + i + '_case' + j + ' ></div>';
  }
};
let gridJS = grid.children, columnMontain = [], columnCloud = [], cloudAtlas = [], planeZone = [], plane = [],smokeZone = [],birdZone = [];
let randomise = () => Math.ceil(Math.random() * 1000);
let verticalLimitCounter = 5, horizontalLimitCounter = 29;
let planePlaceListing = [];
let date, localisationHorizontal, localisationVertical;
let boostingCondition = [], boostingCondition2;
let counterPlaneBoost = 0, boostVerification = 0, unBoostVerification = 0, noBoostVerification = 0;
let waitAfterBoost = 0, forceWaitAfterBoost = 0;
let fallCondition = [], fallCondition2;
let stoppingGame = false;
let oneBird = [
  { min : 0, max : 77,  bird : 'grid4Column1_case2', },
  { min : 77, max : 151,  bird : 'grid4Column1_case3', },
  { min : 151, max : 231,  bird : 'grid4Column1_case4', },
  { min : 231, max : 308,  bird : 'grid4Column1_case5', },
  { min : 308, max : 385,  bird : 'grid4Column1_case6', },
  { min : 385, max : 462,  bird : 'grid4Column1_case7', },
  { min : 462, max : 539,  bird : 'grid4Column1_case8', },
  { min : 539, max : 616,  bird : 'grid4Column1_case9', },
  { min : 616, max : 693,  bird : 'grid4Column1_case10', },
  { min : 693, max : 770,  bird : 'grid4Column1_case11', },
  { min : 770, max : 847,  bird : 'grid4Column1_case12', },
  { min : 847, max : 924,  bird : 'grid4Column1_case13', },
  { min : 924, max : 1000,  bird : 'grid4Column1_case14', },
]
let threeBird = [
  { min : 0, max : 91,  bird1 : 'grid4Column1_case2', bird2:'grid4Column1_case3', bird3:'grid4Column1_case4' },
  { min : 91, max : 182,  bird1 : 'grid4Column1_case3', bird2:'grid4Column1_case4', bird3:'grid4Column1_case5' },
  { min : 182, max : 273,  bird1 : 'grid4Column1_case4', bird2:'grid4Column1_case5', bird3:'grid4Column1_case6' },
  { min : 273, max : 364,  bird1 : 'grid4Column1_case5', bird2:'grid4Column1_case6', bird3:'grid4Column1_case7' },
  { min : 364, max : 455,  bird1 : 'grid4Column1_case6', bird2:'grid4Column1_case7', bird3:'grid4Column1_case8' },
  { min : 455, max : 546,  bird1 : 'grid4Column1_case7', bird2:'grid4Column1_case8', bird3:'grid4Column1_case9' },
  { min : 546, max : 637,  bird1 : 'grid4Column1_case8', bird2:'grid4Column1_case9', bird3:'grid4Column1_case10' },
  { min : 637, max : 728,  bird1 : 'grid4Column1_case9', bird2:'grid4Column1_case10', bird3:'grid4Column1_case11' },
  { min : 728, max : 819,  bird1 : 'grid4Column1_case10', bird2:'grid4Column1_case11', bird3:'grid4Column1_case12' },
  { min : 819, max : 910,  bird1 : 'grid4Column1_case11', bird2:'grid4Column1_case12', bird3:'grid4Column1_case13' },
  { min : 910, max : 1000,  bird1 : 'grid4Column1_case12', bird2:'grid4Column1_case13', bird3:'grid4Column1_case14' }
]

for (i = 0; i <= 45; i++) {  window['columnJS' +i] = gridJS[i].children; }

for (i = 0; i <= 45; i++) { window['columnMontain' +i] = []; columnMontain.push(eval('columnMontain' + i));
  for (j = 10; j <=19; j++) { eval('columnMontain' + i).push(eval('columnJS' + i + '[' + j +']'));
  }
}

for (i = 0; i <= 45; i++) { window['columnCloud' +i] = []; columnCloud.push(eval('columnCloud' + i));
  for (j = 1; j <= 9; j++) { eval('columnCloud' + i).push(eval('columnJS' + i + '[' + j +']'));
  }
}

for (i = 10; i <= 45; i++) {
  window['columnSmokeZone' +i] = []; smokeZone.push(eval('columnSmokeZone' + i));
  for (j = 2; j <=17; j++) { eval('columnSmokeZone' + i).push(document.getElementById('grid3Column'+i+'_case'+j));
  }
}

for (i = 0; i <= 45; i++) { //-10 comparer a x de planeZone
  window['columnBirdZone' +i] = []; birdZone.push(eval('columnBirdZone' + i));
  for (j = 2; j <=14; j++) { eval('columnBirdZone' + i).push(document.getElementById('grid4Column'+i+'_case'+j));
  }
}


function weedSelection(weeb) {
  let random = Math.random()*10000, random2 = Math.ceil(random);
  if(random2 <= 2500){ return 'img/weed.png' }
  if((random2 > 2500)&&(random2 <=5000)){ return 'img/weed2.png'}
  if((random2 > 5000)&&(random2 <=7500)){ return 'img/weed3.png'}
  if(random2 > 7500){ return 'img/weed4.png'} }
function cactusSelection(cactus) {
  let random = Math.random()*10000, random2 = Math.ceil(random);
  if(random2 <= 2500){ return 'img/cactus.png' }
  if((random2 > 2500)&&(random2 <=5000)){ return 'img/cactus2.png'}
  if((random2 > 5000)&&(random2 <=7500)){ return 'img/cactus3.png'}
  if(random2 > 7500){ return 'img/cactus4.png'} }
function rockSelection(rock){
  let random = Math.random()*10000, random2 = Math.ceil(random);
  if(random2 <= 1666){ return 'img/rock.png' }
  if((random2 > 1666)&&(random2 <=3332)){ return 'img/rock2.png'}
  if((random2 > 3332)&&(random2 <=4998)){ return 'img/rock3.png'}
  if((random2 > 4998)&&(random2 <=6664)){ return 'img/rock4.png'}
  if((random2 > 6664)&&(random2 <=8330)){ return 'img/rock5.png'}
  if(random2 > 8330){ return 'img/rock6.png'} }

function lineSelection(chosenCase){
 if(chosenCase.classList.contains("case1") == true ) {return '#76aff6' }
 if(chosenCase.classList.contains("case2") == true ) {return '#6fa4f2' }
 if(chosenCase.classList.contains("case3") == true ) {return '#699eed' }
 else { return 'cornflowerblue'}
}

function insideBorderingCloudLeftLineSelection(chosenCase){
if(chosenCase.classList.contains("case1") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudLeft2 ></div></div>' }
if(chosenCase.classList.contains("case2") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudLeft3 ></div></div>' }
if(chosenCase.classList.contains("case3") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudLeft4 ></div></div>' }
else { return '<div id=borderingCloud ><div id=insideBorderingCloudLeft ></div></div>'}
}
function insideBorderingCloudUpLeftLineSelection(chosenCase){
if(chosenCase.classList.contains("case1") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudUpLeft2 ></div></div>' }
if(chosenCase.classList.contains("case2") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudUpLeft3 ></div></div>' }
if(chosenCase.classList.contains("case3") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudUpLeft4 ></div></div>' }
else { return '<div id=borderingCloud ><div id=insideBorderingCloudUpLeft ></div></div>'}
}
function insideBorderingCloudDownLeftLineSelection(chosenCase){
if(chosenCase.classList.contains("case1") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudDownLeft2 ></div></div>' }
if(chosenCase.classList.contains("case2") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudDownLeft3 ></div></div>' }
if(chosenCase.classList.contains("case3") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudDownLeft4 ></div></div>' }
else { return '<div id=borderingCloud ><div id=insideBorderingCloudDownLeft ></div></div>'}
}
function insideBorderingCloudRightLineSelection(chosenCase){
if(chosenCase.classList.contains("case1") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudRight2 ></div></div>' }
if(chosenCase.classList.contains("case2") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudRight3 ></div></div>' }
if(chosenCase.classList.contains("case3") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudRight4 ></div></div>' }
else { return '<div id=borderingCloud ><div id=insideBorderingCloudRight ></div></div>'}
}
function insideBorderingCloudUpRightLineSelection(chosenCase){
if(chosenCase.classList.contains("case1") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudUpRight2 ></div></div>' }
if(chosenCase.classList.contains("case2") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudUpRight3 ></div></div>' }
if(chosenCase.classList.contains("case3") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudUpRight4 ></div></div>' }
else { return '<div id=borderingCloud ><div id=insideBorderingCloudUpRight ></div></div>'}
}
function insideBorderingCloudDownRightLineSelection(chosenCase){
if(chosenCase.classList.contains("case1") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudDownRight2 ></div></div>' }
if(chosenCase.classList.contains("case2") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudDownRight3 ></div></div>' }
if(chosenCase.classList.contains("case3") == true ) {return '<div id=borderingCloud ><div id=insideBorderingCloudDownRight4 ></div></div>' }
else { return '<div id=borderingCloud ><div id=insideBorderingCloudDownRight ></div></div>'}
}

function insideBorderingLineSelection(chosenCase){
if(chosenCase.classList.contains("case13") == true ) {return '<div id=bordering ><div id=insideBordering2 ></div></div>' }
if(chosenCase.classList.contains("case14") == true ) {return '<div id=bordering ><div id=insideBordering3 ></div></div>' }
if(chosenCase.classList.contains("case15") == true ) {return '<div id=bordering ><div id=insideBordering4 ></div></div>' }
else {return '<div id=bordering ><div id=insideBordering ></div></div>' }
}
function insideBorderingRightLineSelection(chosenCase){
if(chosenCase.classList.contains("case13") == true ) {return '<div id=borderingRight ><div id=insideBorderingRight2 ></div></div>' }
if(chosenCase.classList.contains("case14") == true ) {return '<div id=borderingRight ><div id=insideBorderingRight3 ></div></div>' }
if(chosenCase.classList.contains("case15") == true ) {return '<div id=borderingRight ><div id=insideBorderingRight4 ></div></div>' }
else {return '<div id=borderingRight ><div id=insideBorderingRight ></div></div>' }
}
function insideBorderingLeftLineSelection(chosenCase){
if(chosenCase.classList.contains("case13") == true ) {return '<div id=borderingLeft ><div id=insideBorderingLeft2 ></div></div>' }
if(chosenCase.classList.contains("case14") == true ) {return '<div id=borderingLeft ><div id=insideBorderingLeft3 ></div></div>' }
if(chosenCase.classList.contains("case15") == true ) {return '<div id=borderingLeft ><div id=insideBorderingLeft4 ></div></div>' }
else {return '<div id=borderingLeft ><div id=insideBorderingLeft ></div></div>' }
}

function ground1Generator(){
  columnMontain[0][9].style.backgroundColor = '#d97727';
  let random3 = Math.random()*10000, random4 = Math.ceil(random3);
  let random5 = Math.random()*10000, random6 = Math.ceil(random5);
  if (random4 >= 9000 ){ columnMontain[0][9].innerHTML += '<img src= ' + weedSelection() +' >';}
  if ((random6 >= 9500 )&&(columnMontain[0][9].innerHTML=='')){ columnMontain[0][9].innerHTML += '<img src= ' + cactusSelection() +' >';}
}
function ground2Generator(){
  columnMontain[0][8].style.backgroundColor = '#db7a35';
  let random3 = Math.random()*10000, random4 = Math.ceil(random3);
  let random5 = Math.random()*10000, random6 = Math.ceil(random5);
  if (random4 >= 9000 ){ columnMontain[0][8].innerHTML += '<img src= ' + weedSelection() +' >';}
  if ((random6 >= 9500 )&&(columnMontain[0][8].innerHTML=='')){ columnMontain[0][8].innerHTML += '<img src= ' + cactusSelection() +' >';}
}
function ground3Generator(){
  columnMontain[0][7].style.backgroundColor = '#d67940';
  let random3 = Math.random()*10000, random4 = Math.ceil(random3);
  let random5 = Math.random()*10000, random6 = Math.ceil(random5);
  if (random4 >= 9000 ){ columnMontain[0][7].innerHTML += '<img src= ' + weedSelection() +' >';}
  if ((random6 >= 9500 )&&(columnMontain[0][7].innerHTML=='')){ columnMontain[0][7].innerHTML += '<img src= ' + cactusSelection() +' >';}
}
function montainGenerator(){
  columnMontain[0][5].style.backgroundColor = '#5d7cf0'; columnMontain[0][4].style.backgroundColor = '#5e8ae9';
  columnMontain[0][3].style.backgroundColor = '#5f91e3'; columnMontain[0][2].style.backgroundColor = 'cornflowerblue';
  columnMontain[0][1].style.backgroundColor = 'cornflowerblue';
  columnMontain[0][0].style.backgroundColor = 'cornflowerblue'; columnMontain[1][0].style.backgroundColor = 'cornflowerblue';
  columnMontain[2][0].style.backgroundColor = 'cornflowerblue'; columnMontain[3][0].style.backgroundColor = 'cornflowerblue';
  columnMontain[0][6].style.backgroundColor = 'peru';
//6 choix de montagne differente
  let random = Math.random()*10000, random2 = Math.ceil(random);
  let random3 = Math.random()*10000, random4 = Math.ceil(random);
//selection de la hauteur de la montagne
  if (random2 < 1200) {}
  if ((random2 >= 1400) && (columnMontain[0][6].style.backgroundColor = 'peru')) {
    columnMontain[0][5].style.backgroundColor = 'peru';
  }
  if ((random2 >= 3262) && (columnMontain[0][5].style.backgroundColor = 'peru')) {
    columnMontain[0][4].style.backgroundColor = 'peru';
  }
  if ((random2 >= 4958) && (columnMontain[0][4].style.backgroundColor = 'peru')) {
    columnMontain[0][3].style.backgroundColor = 'peru';
  }
  if ((random2 >= 6164) && (columnMontain[0][3].style.backgroundColor = 'peru')) {
    columnMontain[0][2].style.backgroundColor = 'peru';
  }
  if ((random2 >= 9100) && (columnMontain[0][2].style.backgroundColor = 'peru')) {
    columnMontain[0][1].style.backgroundColor = 'peru';
  }

//fissure
if (random4 >= 7000){
    let random = Math.random()*10000, random2 = Math.ceil(random);
      if ((random2 <= 1666 )&&(columnMontain[1][6].style.backgroundColor == 'peru'))
      { columnMontain[1][6].innerHTML += '<img src= ' + rockSelection() +' >';}
      if (((random2 > 1666 )&&(random2 <= 3332 ))&&(columnMontain[1][5].style.backgroundColor == 'peru'))
      { columnMontain[1][5].innerHTML += '<img src= ' + rockSelection() +' >';}
      if (((random2 > 3332 )&&(random2 <= 4998 ))&&(columnMontain[1][4].style.backgroundColor == 'peru'))
      { columnMontain[1][4].innerHTML += '<img src= ' + rockSelection() +' >';}
      if (((random2 > 4998 )&&(random2 <= 6664 ))&&(columnMontain[1][3].style.backgroundColor == 'peru'))
      { columnMontain[1][3].innerHTML += '<img src= ' + rockSelection() +' >';}
      if (((random2 > 6664 )&&(random2 <= 8332 ))&&(columnMontain[1][2].style.backgroundColor == 'peru'))
      { columnMontain[1][2].innerHTML += '<img src= ' + rockSelection() +' >';}
      if ((random2 > 8332 )&&(columnMontain[1][1].style.backgroundColor == 'peru'))
      {columnMontain[1][1].innerHTML += '<img src= ' + rockSelection() +' >';}
    }
  }
function cloudGenerator(){
    // 2nd case-4eme case // 3eme case-5eme case // 4eme case-6eme case // 5eme case-8eme case
      let random = Math.random()*10000, random2 = Math.ceil(random);
      if (random2 <= 7000){}
      else {
        let random = Math.random()*10000, random2 = Math.ceil(random);
        for (i = 0; i <= 5 ; i++) {
        if (random2 <= 1428){ for (j = 0; j <= 2; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
        if ((random2 > 1428) && (random2 <= 2856 )){ for (j = 1; j <= 3; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
        if ((random2 > 2856) && (random2 <= 4284 )){ for (j = 2; j <= 4; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
        if ((random2 > 4284) && (random2 <= 5712 )){ for (j = 3; j <= 5; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
        if ((random2 > 5712) && (random2 <= 7140 )){ for (j = 4; j <= 6; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
        if ((random2 > 7140) && (random2 <= 8568 )){ for (j = 5; j <= 7; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
        if ((random2 > 8568) && (random2 <= 9996 )){ for (j = 6; j <= 8; j++) {
            if (i==0){columnCloud[i][j].style.backgroundColor = lineSelection(columnCloud[i][j]);}
            else {columnCloud[i][j].style.backgroundColor = 'white';}
          }}
      }
    }
  }

function cloudSculptor() {


  let random = Math.random()*10000, random2 = Math.ceil(random);
  let random3 = Math.random()*10000, random4 = Math.ceil(random3);
  let random5 = Math.random()*10000, random6 = Math.ceil(random5);
// ligne 3 //
// 3 cases
if(random2<=3333){
  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=3333){cloudAtlas[11].style.backgroundColor=lineSelection(cloudAtlas[11]); cloudAtlas[10].style.backgroundColor=lineSelection(cloudAtlas[10]);}
  if((random8>3333)&&(random8<=6666)){cloudAtlas[14].style.backgroundColor=lineSelection(cloudAtlas[14]); cloudAtlas[10].style.backgroundColor=lineSelection(cloudAtlas[10]);}
  if((random8>6666)&&(random8<=10000)){cloudAtlas[14].style.backgroundColor=lineSelection(cloudAtlas[14]); cloudAtlas[13].style.backgroundColor=lineSelection(cloudAtlas[13]);}
}
// 4 cases
if((random2>3333)&&(random2<=6666)){
  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=5000){cloudAtlas[10].style.backgroundColor=lineSelection(cloudAtlas[10]);}
  if((random8>5000)&&(random8<=10000)){cloudAtlas[14].style.backgroundColor=lineSelection(cloudAtlas[14]);}
}
// 5 cases
if((random2>6666)&&(random2<=10000)){}
// ligne 2 //
//2 cases
if(random4<=3333){
  let cloudAlignment = 'false', cloudAlignmentCondition = [];

  while (cloudAlignment == 'false') {
  for(i=5; i<10; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudAlignment = 'false'; for(i=0; i<10; i++){ cloudAlignmentCondition.shift();}

  let random7 = Math.random()*10000, random8 = Math.ceil(random7);

  if(random8<=2500){cloudAtlas[7].style.backgroundColor=lineSelection(cloudAtlas[7]); cloudAtlas[6].style.backgroundColor=lineSelection(cloudAtlas[6]); cloudAtlas[5].style.backgroundColor=lineSelection(cloudAtlas[5]);}
  if((random8>2500)&&(random8<=5000)){cloudAtlas[9].style.backgroundColor=lineSelection(cloudAtlas[9]); cloudAtlas[6].style.backgroundColor=lineSelection(cloudAtlas[6]); cloudAtlas[5].style.backgroundColor=lineSelection(cloudAtlas[5]);}
  if((random8>5000)&&(random8<=7500)){cloudAtlas[9].style.backgroundColor=lineSelection(cloudAtlas[9]); cloudAtlas[8].style.backgroundColor=lineSelection(cloudAtlas[8]); cloudAtlas[5].style.backgroundColor=lineSelection(cloudAtlas[5]);}
  if((random8>7500)&&(random8<=10000)){cloudAtlas[9].style.backgroundColor=lineSelection(cloudAtlas[9]); cloudAtlas[8].style.backgroundColor=lineSelection(cloudAtlas[8]); cloudAtlas[7].style.backgroundColor=lineSelection(cloudAtlas[7]);}

  for(j=10; j<15; j++){
       if ((cloudAtlas[j].style.backgroundColor == 'white')&&(cloudAtlas[j-5].style.backgroundColor == 'white')) {
             cloudAlignmentCondition.push('true');
             if (cloudAlignmentCondition.length !== 0) {cloudAlignment = 'true';
           }
         }
       }
     }
   }
//3 cases
if((random4>3333)&&(random4<=6666)){
  let cloudQuincunx = 'false', cloudQuincunxCondition = [];

  while (cloudQuincunx == 'false') {
  for(i=5; i<10; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudQuincunx = 'false'; for(i=0; i<10; i++){ cloudQuincunxCondition.shift();}

  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=3333){cloudAtlas[6].style.backgroundColor=lineSelection(cloudAtlas[6]); cloudAtlas[5].style.backgroundColor=lineSelection(cloudAtlas[5]);}
  if((random8>3333)&&(random8<=6666)){cloudAtlas[9].style.backgroundColor=lineSelection(cloudAtlas[9]); cloudAtlas[5].style.backgroundColor=lineSelection(cloudAtlas[5]);}
  if((random8>6666)&&(random8<=10000)){cloudAtlas[9].style.backgroundColor=lineSelection(cloudAtlas[9]); cloudAtlas[8].style.backgroundColor=lineSelection(cloudAtlas[8]);}

  for(j=10; j<15; j++){
       if ((cloudAtlas[j].style.backgroundColor == 'white')&&
       (cloudAtlas[j-5].style.backgroundColor !== 'white'))
         {
             cloudQuincunxCondition.push('true');
             if (cloudQuincunxCondition.length !== 0) {cloudQuincunx = 'true';
           }
         }
       }
     }
   }
//4cases
if((random4>6666)&&(random4<=10000)){
  let cloudQuincunx = 'false', cloudQuincunxCondition = []; cloudQuincunxException = [];

  while (cloudQuincunx == 'false') {
    //suppression des element generer lors de la derniere tentative de completion de la boucle
  for(i=5; i<10; i++){cloudAtlas[i].style.backgroundColor='white';} cloudQuincunx = 'false';
  for(i=0; i<10; i++){ cloudQuincunxCondition.shift();}for(i=10; i<15; i++){ cloudQuincunxException.shift();}
  //création de la representation de la ligne précedente
  for(i=10; i<15; i++){ if(cloudAtlas[i].style.backgroundColor == 'white') {cloudQuincunxException.push(cloudAtlas[i]);}}
    //selection des case a laisser afficher en blanc
  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=5000){cloudAtlas[5].style.backgroundColor=lineSelection(cloudAtlas[5]);}
  if((random8>5000)&&(random8<=10000)){cloudAtlas[9].style.backgroundColor=lineSelection(cloudAtlas[9]);}

  //conditon a remplir pour sortir de la boucle
  for(j=10; j<15; j++){
       if ((cloudQuincunxException.length <= 3)||((cloudQuincunxException.length > 3)&&(cloudAtlas[j].style.backgroundColor == 'white')&&
       ((cloudAtlas[j-5].style.backgroundColor !== 'white') ))) {
             cloudQuincunxCondition.push('true');
             if (cloudQuincunxCondition.length !== 0) {cloudQuincunx = 'true';
           }
         }
       }
     }
   }
// ligne 1 //
//1 cases
if(random6<=3333){
  let cloudAlignment = 'false', cloudAlignmentCondition = [];

  while (cloudAlignment == 'false') {
  for(i=0; i<5; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudAlignment = 'false'; for(i=0; i<10; i++){ cloudAlignmentCondition.shift();}

  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=2000)
  {cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]); cloudAtlas[2].style.backgroundColor=lineSelection(cloudAtlas[2]); cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>2000)&&(random8<=4000))
  {cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[2].style.backgroundColor=lineSelection(cloudAtlas[2]); cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>4000)&&(random8<=6000))
  {cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]); cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>6000)&&(random8<=8000))
  {cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]); cloudAtlas[2].style.backgroundColor=lineSelection(cloudAtlas[2]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>8000)&&(random8<=10000))
  {cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]); cloudAtlas[2].style.backgroundColor=lineSelection(cloudAtlas[2]); cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]);}

  for(j=5; j<10; j++){
       if ((cloudAtlas[j].style.backgroundColor == 'white')&&(cloudAtlas[j-5].style.backgroundColor == 'white')) {
             cloudAlignmentCondition.push('true');
             if (cloudAlignmentCondition.length !== 0) {cloudAlignment = 'true';
           }
         }
       }
     }
   }
//2 cases
if((random6>3333)&&(random6<=6666)){
  let cloudQuincunx = 'false', cloudQuincunxCondition = [];

  while (cloudQuincunx == 'false') {
  for(i=0; i<5; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudQuincunx = 'false'; for(i=0; i<10; i++){ cloudQuincunxCondition.shift();}

  let cloudAlignment = 'false', cloudAlignmentCondition = [];

  while (cloudAlignment == 'false') {
  for(i=0; i<5; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudAlignment = 'false'; for(i=0; i<10; i++){ cloudAlignmentCondition.shift();}

  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=2500){cloudAtlas[2].style.backgroundColor=lineSelection(cloudAtlas[2]); cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>2500)&&(random8<=5000)){cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>5000)&&(random8<=7500)){cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>7500)&&(random8<=10000)){cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]); cloudAtlas[2].style.backgroundColor=lineSelection(cloudAtlas[2]);}
  for(j=5; j<10; j++){
       if ((cloudAtlas[j].style.backgroundColor == 'white')&&(cloudAtlas[j-5].style.backgroundColor == 'white')) {
             cloudAlignmentCondition.push('true');
             if (cloudAlignmentCondition.length !== 0) {cloudAlignment = 'true';
           }
         }
       }
     }
     for(j=5; j<10; j++){
     if ((cloudAtlas[j].style.backgroundColor == 'white')&&((cloudAtlas[j-5].style.backgroundColor !== 'white' ))) {
           cloudQuincunxCondition.push('true');
           if (cloudQuincunxCondition.length !== 0) {cloudQuincunx = 'true';
          }
        }
      }
    }
  }
//3 cases
if((random6>6666)&&(random6<=10000)){
  let cloudQuincunx = 'false', cloudQuincunxCondition = [];

  while (cloudQuincunx == 'false') {
  for(i=0; i<5; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudQuincunx = 'false'; for(i=0; i<10; i++){ cloudQuincunxCondition.shift();}

  let cloudAlignment = 'false', cloudAlignmentCondition = [];

  while (cloudAlignment == 'false') {
  for(i=0; i<5; i++){cloudAtlas[i].style.backgroundColor='white';}
  cloudAlignment = 'false'; for(i=0; i<10; i++){ cloudAlignmentCondition.shift();}

  let random7 = Math.random()*10000, random8 = Math.ceil(random7);
  if(random8<=3333){cloudAtlas[1].style.backgroundColor=lineSelection(cloudAtlas[1]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>3333)&&(random8<=6666)){cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[0].style.backgroundColor=lineSelection(cloudAtlas[0]);}
  if((random8>6666)&&(random8<=10000)){cloudAtlas[4].style.backgroundColor=lineSelection(cloudAtlas[4]); cloudAtlas[3].style.backgroundColor=lineSelection(cloudAtlas[3]);}
  for(j=5; j<10; j++){
       if ((cloudAtlas[j].style.backgroundColor == 'white')&&(cloudAtlas[j-5].style.backgroundColor == 'white')) {
             cloudAlignmentCondition.push('true');
             if (cloudAlignmentCondition.length !== 0) {cloudAlignment = 'true';
           }
         }
       }
     }
     for(j=5; j<10; j++){
      if ((cloudAtlas[j].style.backgroundColor == 'white')&&((cloudAtlas[j-5].style.backgroundColor !== 'white'))) {
            cloudQuincunxCondition.push('true');
            if (cloudQuincunxCondition.length !== 0) {cloudQuincunx = 'true';
       }
      }
     }
    }
   }

   for(i = 0; i <= 14; i++){
     let iBefore = i-1, iAfter = i+1, iLineBefore = i-5, iLineAfter = i+5;
     if (cloudAtlas[i].style.backgroundColor == 'white'){

      if(((cloudAtlas[iAfter] == undefined)||(cloudAtlas[iAfter].style.backgroundColor !== 'white'))&&((cloudAtlas[iLineBefore] == undefined)||(cloudAtlas[iLineBefore].style.backgroundColor !== 'white')))
      {cloudAtlas[i].style.borderRadius = '50px 0px 0px 0px'}
      if(((cloudAtlas[iLineBefore] == undefined)||(cloudAtlas[iLineBefore].style.backgroundColor !== 'white'))&&((cloudAtlas[iBefore] == undefined)||(cloudAtlas[iBefore].style.backgroundColor !== 'white')))
      {cloudAtlas[i].style.borderRadius = '0px 50px 0px 0px'}
      if(((cloudAtlas[iBefore] == undefined)||(cloudAtlas[iBefore].style.backgroundColor !== 'white'))&&((cloudAtlas[iLineAfter] == undefined)||(cloudAtlas[iLineAfter].style.backgroundColor !== 'white')))
      {cloudAtlas[i].style.borderRadius = '0px 0px 50px 0px'}
      if(((cloudAtlas[iLineAfter] == undefined)||(cloudAtlas[iLineAfter].style.backgroundColor !== 'white'))&&((cloudAtlas[iAfter] == undefined)||(cloudAtlas[iAfter].style.backgroundColor !== 'white')))
      {cloudAtlas[i].style.borderRadius = '0px 0px 0px 50px'}

      if(((cloudAtlas[iAfter] == undefined)||(cloudAtlas[iAfter].style.backgroundColor !== 'white'))&&((cloudAtlas[iLineBefore] == undefined)||(cloudAtlas[iLineBefore].style.backgroundColor !== 'white'))&&
        ((cloudAtlas[iBefore] == undefined)||(cloudAtlas[iBefore].style.backgroundColor !== 'white')))
        {cloudAtlas[i].style.borderRadius = '50px 50px 0px 0px'}
      if(((cloudAtlas[iLineBefore] == undefined)||(cloudAtlas[iLineBefore].style.backgroundColor !== 'white'))&&((cloudAtlas[iBefore] == undefined)||(cloudAtlas[iBefore].style.backgroundColor !== 'white'))&&
        ((cloudAtlas[iLineAfter] == undefined)||(cloudAtlas[iLineAfter].style.backgroundColor !== 'white')))
        {cloudAtlas[i].style.borderRadius = '0px 50px 50px 0px'}
      if(((cloudAtlas[iBefore] == undefined)||(cloudAtlas[iBefore].style.backgroundColor !== 'white'))&&((cloudAtlas[iLineAfter] == undefined)||(cloudAtlas[iLineAfter].style.backgroundColor !== 'white'))&&
        ((cloudAtlas[iAfter] == undefined)||(cloudAtlas[iAfter].style.backgroundColor !== 'white')))
        {cloudAtlas[i].style.borderRadius = '0px 50px 50px 0px'}
      if(((cloudAtlas[iLineAfter] == undefined)||(cloudAtlas[iLineAfter].style.backgroundColor !== 'white'))&&((cloudAtlas[iAfter] == undefined)||(cloudAtlas[iAfter].style.backgroundColor !== 'white'))&&
        ((cloudAtlas[iLineBefore] == undefined)||(cloudAtlas[iLineBefore].style.backgroundColor !== 'white')))
        {cloudAtlas[i].style.borderRadius = '50px 0px 0px 50px'}
       }
     }
        if(cloudAtlas[10].style.backgroundColor == 'white'){
          if (cloudAtlas[5].style.backgroundColor !== 'white'){cloudAtlas[10].style.borderRadius = '0px 50px 50px 0px';}
          else{cloudAtlas[10].style.borderRadius = '0px 0px 50px 0px';}
        }

        if(cloudAtlas[4].style.backgroundColor == 'white'){
          cloudAtlas[4].style.borderRadius = '50px 0px 0px 0px';
          if (cloudAtlas[3].style.backgroundColor !== 'white'){cloudAtlas[4].style.borderRadius = '50px 50px 0px 0px';}
          if ((cloudAtlas[3].style.backgroundColor == 'white')&&(cloudAtlas[9].style.backgroundColor !== 'white')){cloudAtlas[4].style.borderRadius = '50px 0px 0px 50px';}

        }

        if(cloudAtlas[9].style.backgroundColor == 'white'){
          if ((cloudAtlas[4].style.backgroundColor !== 'white')&&(cloudAtlas[14].style.backgroundColor !== 'white')){cloudAtlas[9].style.borderRadius = '50px 0px 0px 50px';}
          if ((cloudAtlas[4].style.backgroundColor == 'white')&&(cloudAtlas[14].style.backgroundColor !== 'white')){cloudAtlas[9].style.borderRadius = '0px 0px 0px 50px';}
          if ((cloudAtlas[4].style.backgroundColor !== 'white')&&(cloudAtlas[14].style.backgroundColor == 'white')){cloudAtlas[9].style.borderRadius = '50px 0px 0px 0px';}

        }

        if(cloudAtlas[5].style.backgroundColor == 'white'){
          if ((cloudAtlas[0].style.backgroundColor !== 'white')&&(cloudAtlas[10].style.backgroundColor !== 'white')){cloudAtlas[5].style.borderRadius = '0px 50px 50px 0px';}
          if ((cloudAtlas[0].style.backgroundColor == 'white')&&(cloudAtlas[10].style.backgroundColor !== 'white')){cloudAtlas[5].style.borderRadius = '0px 0px 50px 0px';}
          if ((cloudAtlas[0].style.backgroundColor !== 'white')&&(cloudAtlas[10].style.backgroundColor == 'white')){cloudAtlas[5].style.borderRadius = '0px 50px 0px 0px';}

        }

   for(i = 6; i <= 9; i++){
     let iBefore = i-1, iLineBefore = i-5, iLineAfter = i+5;
     if (cloudAtlas[i].style.backgroundColor !== 'white'){
       if ((cloudAtlas[iLineBefore].style.backgroundColor == 'white')&&(cloudAtlas[iLineAfter].style.backgroundColor == 'white')&&(cloudAtlas[iBefore].style.backgroundColor == 'white')){
         cloudAtlas[i].innerHTML += insideBorderingCloudRightLineSelection(cloudAtlas[i]);
       }
     }
   }

   for(i = 5; i <= 8; i++){
     let iAfter = i+1, iLineBefore = i-5, iLineAfter = i+5;
     if (cloudAtlas[i].style.backgroundColor !== 'white'){
       if ((cloudAtlas[iLineBefore].style.backgroundColor == 'white')&&(cloudAtlas[iLineAfter].style.backgroundColor == 'white')&&(cloudAtlas[iAfter].style.backgroundColor == 'white')){
         cloudAtlas[i].innerHTML += insideBorderingCloudLeftLineSelection(cloudAtlas[i]);
       }
     }
   }

   for(i = 6; i <= 9; i++){
     let iBefore = i-1, iLineBefore = i-5, iLineAfter = i+5;
     if (cloudAtlas[i].style.backgroundColor !== 'white'){
       if (((cloudAtlas[iLineBefore].style.backgroundColor == 'white')&&(cloudAtlas[iLineBefore].style.borderRadius == ''))&&
           ((cloudAtlas[iBefore].style.backgroundColor == 'white')&&(cloudAtlas[iBefore].style.borderRadius == ''))&&
           (cloudAtlas[iLineAfter].style.backgroundColor !== 'white')) {
         cloudAtlas[i].innerHTML += insideBorderingCloudUpRightLineSelection(cloudAtlas[i]);
       }
       if (((cloudAtlas[iLineAfter].style.backgroundColor == 'white')&&(cloudAtlas[iLineAfter].style.borderRadius == ''))&&
           ((cloudAtlas[iBefore].style.backgroundColor == 'white')&&(cloudAtlas[iBefore].style.borderRadius == ''))&&
           (cloudAtlas[iLineBefore].style.backgroundColor !== 'white')) {
         cloudAtlas[i].innerHTML += insideBorderingCloudDownRightLineSelection(cloudAtlas[i]);
       }
     }
   }

   for(i = 5; i <= 8; i++){
     let iAfter = i+1, iLineBefore = i-5, iLineAfter = i+5;
     if (cloudAtlas[i].style.backgroundColor !== 'white'){
       if (((cloudAtlas[iLineBefore].style.backgroundColor == 'white')&&(cloudAtlas[iLineBefore].style.borderRadius == ''))&&
           ((cloudAtlas[iAfter].style.backgroundColor == 'white')&&(cloudAtlas[iAfter].style.borderRadius == ''))&&
           (cloudAtlas[iLineAfter].style.backgroundColor !== 'white')) {
         cloudAtlas[i].innerHTML += insideBorderingCloudUpLeftLineSelection(cloudAtlas[i]);
       }
       if (((cloudAtlas[iLineAfter].style.backgroundColor == 'white')&&(cloudAtlas[iLineAfter].style.borderRadius == ''))&&
           ((cloudAtlas[iAfter].style.backgroundColor == 'white')&&(cloudAtlas[iAfter].style.borderRadius == ''))&&
           (cloudAtlas[iLineBefore].style.backgroundColor !== 'white')) {
         cloudAtlas[i].innerHTML += insideBorderingCloudDownLeftLineSelection(cloudAtlas[i]);
       }
     }
   }


   }

function ground1Scrolling(){
  columnMontain[0][9].innerHTML = '';
  ground1Generator();
  for (i = 45; i >= 1; i--){
    let iBefore = i-1;
        //réinitialisation de la colonne et copiage de la colonne précedente
        columnMontain[i][9].style.backgroundColor = 'cornflowerblue';columnMontain[i][9].innerHTML = '';
        columnMontain[i][9].style.backgroundColor = columnMontain[iBefore][9].style.backgroundColor;
        columnMontain[i][9].innerHTML = columnMontain[iBefore][9].innerHTML;
      }
}
function ground2Scrolling(){
  columnMontain[0][8].innerHTML = '';
  ground2Generator();
  for (i = 45; i >= 1; i--){
    let iBefore = i-1;
        //réinitialisation de la colonne et copiage de la colonne précedente
        columnMontain[i][8].style.backgroundColor = 'cornflowerblue'; columnMontain[i][8].innerHTML = '';
        columnMontain[i][8].style.backgroundColor = columnMontain[iBefore][8].style.backgroundColor;
        columnMontain[i][8].innerHTML = columnMontain[iBefore][8].innerHTML;
      }
}
function ground3Scrolling(){
  columnMontain[0][7].innerHTML = '';
  ground3Generator();
  for (i = 45; i >= 1; i--){
    let iBefore = i-1;
        //réinitialisation de la colonne et copiage de la colonne précedente
        columnMontain[i][7].style.backgroundColor = 'cornflowerblue'; columnMontain[i][7].style.borderRadius = ''; columnMontain[i][7].innerHTML = '';
        columnMontain[i][7].style.backgroundColor = columnMontain[iBefore][7].style.backgroundColor;
        columnMontain[i][7].style.borderRadius = columnMontain[iBefore][7].style.borderRadius;
        columnMontain[i][7].innerHTML = columnMontain[iBefore][7].innerHTML;
      }
}
function montainScrolling(){
     columnMontain[0][6].innerHTML = ''; columnMontain[0][5].innerHTML = ''; columnMontain[0][4].innerHTML = '';
     columnMontain[0][3].innerHTML = ''; columnMontain[0][2].innerHTML = ''; columnMontain[0][1].innerHTML = '';

     montainGenerator();
     for (i = 45; i >= 1; i--){
       let iBefore = i-1;
         for (j = 1; j <= 6; j++){
           //réinitialisation de la colonne et copiage de la colonne précedente
           columnMontain[i][j].style.backgroundColor = ''; columnMontain[i][j].style.borderRadius = ''; columnMontain[i][j].innerHTML = '';
           columnMontain[i][j].style.backgroundColor = columnMontain[iBefore][j].style.backgroundColor;
           columnMontain[i][j].style.borderRadius = columnMontain[iBefore][j].style.borderRadius;
           columnMontain[i][j].innerHTML = columnMontain[iBefore][j].innerHTML;
         }
       }
       for (j = 1; j <= 6; j++){
         //selectionne le bloc marron tout en haut de la colonne.
         if ((columnMontain[2][j-1].style.backgroundColor !== 'peru') && (columnMontain[2][j].style.backgroundColor == 'peru')){
           //si l'une des deux colonnes adjacentes est plus haute que le plus haut bloc de la colonne actuel
           if((columnMontain[1][j-1].style.backgroundColor == 'peru') || (columnMontain[3][j-1].style.backgroundColor == 'peru')){

             if((columnMontain[1][j-1].style.backgroundColor == 'peru') && (columnMontain[3][j-1].style.backgroundColor == 'peru')){
               columnMontain[2][j-1].innerHTML = insideBorderingLineSelection(columnMontain[2][j-1]);
             }

             if((columnMontain[1][j-1] .style.backgroundColor !== 'peru') && (columnMontain[3][j-1] .style.backgroundColor == 'peru')){
               columnMontain[2][j-1].innerHTML = insideBorderingRightLineSelection(columnMontain[2][j-1]);
               if (columnMontain[1][j].style.backgroundColor !== 'peru'){
                 columnMontain[2][j].style.borderRadius = '20px 0px 0px 0px'; }}

             if((columnMontain[1][j-1] .style.backgroundColor == 'peru') && (columnMontain[3][j-1] .style.backgroundColor !== 'peru')){
               columnMontain[2][j-1].innerHTML = insideBorderingLeftLineSelection(columnMontain[2][j-1]);
               if (columnMontain[3][j].style.backgroundColor !== 'peru'){
                 columnMontain[2][j].style.borderRadius = '00px 20px 0px 0px';}}
           }
           //si les colonnes adjacentes ne sont pas plus haute que le plus haut bloc de la colonne actuel
           if((columnMontain[1][j-1].style.backgroundColor !== 'peru') && (columnMontain[3][j-1].style.backgroundColor !== 'peru')){
             if ((columnMontain[1][j].style.backgroundColor !== 'peru') && (columnMontain[3][j].style.backgroundColor !== 'peru'))
                 {columnMontain[2][j].style.borderRadius = '20px 20px 0px 0px';}
             if ((columnMontain[1][j].style.backgroundColor !== 'peru') && (columnMontain[3][j].style.backgroundColor == 'peru'))
                 {columnMontain[2][j].style.borderRadius = '20px 0px 0px 0px';}
             if ((columnMontain[1][j].style.backgroundColor == 'peru') && (columnMontain[3][j].style.backgroundColor !== 'peru'))
                 {columnMontain[2][j].style.borderRadius = '0px 20px 0px 0px';}}

           }
         }
       }
function cloudScrolling(){
//  let trueCloud = [], verificationCloud = [];
//  for (i = 5; i <= 6; i++){
//  for (j = 0; j <= 8; j++){trueCloud.push(columnCloud[i][j].style.backgroundColor.toString());}}
//  for(i = 0; i <= 53; i++){verificationCloud.push('cornflowerblue');}

    if (
      (columnCloud[4][0].style.backgroundColor == 'white') || (columnCloud[4][1].style.backgroundColor == 'white') ||
      (columnCloud[4][2].style.backgroundColor == 'white') || (columnCloud[4][3].style.backgroundColor == 'white') ||
      (columnCloud[4][4].style.backgroundColor == 'white') || (columnCloud[4][5].style.backgroundColor == 'white') ||
      (columnCloud[4][6].style.backgroundColor == 'white') || (columnCloud[4][7].style.backgroundColor == 'white') ||
      (columnCloud[4][8].style.backgroundColor == 'white') ||
      (columnCloud[5][0].style.backgroundColor == 'white') || (columnCloud[5][1].style.backgroundColor == 'white') ||
      (columnCloud[5][2].style.backgroundColor == 'white') || (columnCloud[5][3].style.backgroundColor == 'white') ||
      (columnCloud[5][4].style.backgroundColor == 'white') || (columnCloud[5][5].style.backgroundColor == 'white') ||
      (columnCloud[5][6].style.backgroundColor == 'white') || (columnCloud[5][7].style.backgroundColor == 'white') ||
      (columnCloud[5][8].style.backgroundColor == 'white') ||
      (columnCloud[6][0].style.backgroundColor == 'white') || (columnCloud[6][1].style.backgroundColor == 'white') ||
      (columnCloud[6][2].style.backgroundColor == 'white') || (columnCloud[6][3].style.backgroundColor == 'white') ||
      (columnCloud[6][4].style.backgroundColor == 'white') || (columnCloud[6][5].style.backgroundColor == 'white') ||
      (columnCloud[6][6].style.backgroundColor == 'white') || (columnCloud[6][7].style.backgroundColor == 'white') ||
      (columnCloud[6][8].style.backgroundColor == 'white') ||
      (columnCloud[7][0].style.backgroundColor == 'white') || (columnCloud[7][1].style.backgroundColor == 'white') ||
      (columnCloud[7][2].style.backgroundColor == 'white') || (columnCloud[7][3].style.backgroundColor == 'white') ||
      (columnCloud[7][4].style.backgroundColor == 'white') || (columnCloud[7][5].style.backgroundColor == 'white') ||
      (columnCloud[7][6].style.backgroundColor == 'white') || (columnCloud[7][7].style.backgroundColor == 'white') ||
      (columnCloud[7][8].style.backgroundColor == 'white')){}
    else {for(i = 1; cloudAtlas.length; i++){cloudAtlas.shift();}
      cloudGenerator();
      for (j = 0; j <= 8; j++){
        if (columnCloud[4][j].style.backgroundColor == 'white'){
          for(i = 5; i >= 1; i--){ cloudAtlas.push(columnCloud[i][j]); }
        }
      }
      if (cloudAtlas.length == '15'){
        cloudSculptor();
      }  }


    for (i = 45; i >= 1; i--){
      let iBefore = i-1;
        for (j = 0; j <= 8; j++){
          //réinitialisation de la colonne et copiage de la colonne précedenteif (j==0){ columnCloud[i][j].style.backgroundColor = '#6da0f2'; console.log('test');}
          columnCloud[i][j].style.borderRadius = '0px 0px 0px 0px'; columnCloud[i][j].innerHTML = '';
          columnCloud[i][j].style.backgroundColor = columnCloud[iBefore][j].style.backgroundColor;
          columnCloud[i][j].style.borderRadius = columnCloud[iBefore][j].style.borderRadius;
          columnCloud[i][j].innerHTML += columnCloud[iBefore][j].innerHTML;
          }
        }

    for (j = 0; j <= 8; j++) {
      columnCloud[i][j].style.backgroundColor = 'cornflowerblue';
      if (j==0){ columnCloud[i][j].style.backgroundColor = '#76aff6';}
      if (j==1){ columnCloud[i][j].style.backgroundColor = '#6fa4f2';}
      if (j==2){ columnCloud[i][j].style.backgroundColor = '#699eed';}
    }}


//zone mouvement avion [0][0] [35][20]
for (i = 10; i <= 45; i++) {
  window['columnPlaneZone' +i] = []; planeZone.push(eval('columnPlaneZone' + i));
  for (j = 2; j <=17; j++) { eval('columnPlaneZone' + i).push(document.getElementById('grid2Column'+i+'_case'+j));
  }
}

// emplacement de base de l'avion/////////////////

for (i = 0; i <= 29; i++) {
  boostingCondition.push('noBoost');
}
for (i = 0; i <= 17; i++) {
  fallCondition.push('false');
}
for (j=5; j<=6; j++) { for (i=29; i<=31; i++) { plane.push(planeZone[i][j]) } }

function planeZoneLocalisationVertical (){
  for (x = 0; x <= 35; x++){
      for (y = 0; y <= 15; y++){
        if(plane[0] == planeZone[x][y]){
            return x ;
          }
        }
      }
}
function planeZoneLocalisationHorizontal (){
  for (x = 0; x <= 35; x++){
      for (y = 0; y <= 15; y++){
        if(plane[0] == planeZone[x][y]){
            return y ;
          }
        }
      }
}
function planeImage(){
      for (i=0; i<=5; i++) {
        if(i==0){plane[i].style.backgroundImage = 'url("img/plane/plane0.png")';
                 plane[i].style.backgroundSize = '30px';}
        if(i==1){plane[i].style.backgroundImage = 'url("img/plane/plane1.png")';
                 plane[i].style.backgroundSize = '30px';}
        if(i==2){plane[i].style.backgroundImage = 'url("img/plane/plane2.png")';
                 plane[i].style.backgroundSize = '30px';}
        if(i==3){plane[i].style.backgroundImage = 'url("img/plane/plane3.png")';
                 plane[i].style.backgroundSize = '30px';}
        if(i==4){plane[i].style.backgroundImage = 'url("img/plane/plane4.png")';
                 plane[i].style.backgroundSize = '30px';}
        if(i==5){plane[i].style.backgroundImage = 'url("img/plane/plane5.png")';
                 plane[i].style.backgroundSize = '30px';}
       }
     }
function planeNoImage(){
        for (i=0; i<=5; i++) {
           plane[i].style.backgroundImage = 'url("img/emptyPlane.png")';
          }
       }
function planeImageUp(){
       for (i=0; i<=5; i++) {
         if(i==0){plane[i].style.backgroundImage = 'url("img/planeUp/planeUp0.png")';
                  plane[i].style.backgroundSize = '30px';}
         if(i==1){plane[i].style.backgroundImage = 'url("img/planeUp/planeUp1.png")';
                  plane[i].style.backgroundSize = '30px';}
         if(i==2){plane[i].style.backgroundImage = 'url("img/planeUp/planeUp2.png")';
                  plane[i].style.backgroundSize = '30px';}
         if(i==3){plane[i].style.backgroundImage = 'url("img/planeUp/planeUp3.png")';
                  plane[i].style.backgroundSize = '30px';}
         if(i==4){plane[i].style.backgroundImage = 'url("img/planeUp/planeUp4.png")';
                  plane[i].style.backgroundSize = '30px';}
         if(i==5){plane[i].style.backgroundImage = 'url("img/planeUp/planeUp5.png")';
                  plane[i].style.backgroundSize = '30px';}
        }
      }
function planeImageDown(){
         for (i=0; i<=5; i++) {
           if(i==0){plane[i].style.backgroundImage = 'url("img/planeDown/planeDown0.png")';
                    plane[i].style.backgroundSize = '30px';}
           if(i==1){plane[i].style.backgroundImage = 'url("img/planeDown/planeDown1.png")';
                    plane[i].style.backgroundSize = '30px';}
           if(i==2){plane[i].style.backgroundImage = 'url("img/planeDown/planeDown2.png")';
                    plane[i].style.backgroundSize = '30px';}
           if(i==3){plane[i].style.backgroundImage = 'url("img/planeDown/planeDown3.png")';
                    plane[i].style.backgroundSize = '30px';}
           if(i==4){plane[i].style.backgroundImage = 'url("img/planeDown/planeDown4.png")';
                    plane[i].style.backgroundSize = '30px';}
           if(i==5){plane[i].style.backgroundImage = 'url("img/planeDown/planeDown5.png")';
                    plane[i].style.backgroundSize = '30px';}
          }
        }

//mouvement verticaux de l'avion
document.getElementById('body').addEventListener('keydown', planeUp);
function planeUp (event){
  let key = event.key;
  if (stoppingGame == false){
    if (key == ' '){
    if ((verticalLimitCounter == 0)||(verticalLimitCounter == 14)){}
    else {
        let planeSave = [];
        planeNoImage();

        for (i=0; i<=2; i++) {
              plane.splice(3,1);
            }

        for (i=0; i<=2; i++){
            for (x = 0; x <= 35; x++){
                for (y = 0; y <= 15; y++){
                  if(plane[i] == planeZone[x][y]){
                      planeSave.push(planeZone[x][y-1]);
                    }
                  }
                }
              }

            for (i=2; i>=0; i--) {
            plane.unshift(planeSave[i]);
          }

        planeImageUp(); verticalLimitCounter--;
        }
      }
  }
}
document.getElementById('body').addEventListener('keyup', planeUpEnd);
function planeUpEnd (event){
  let key = event.key;
  if (stoppingGame == false){
    if (key == ' '){
      planeNoImage ();
      planeImage ();
    }
  }
}

function controlePlane(){
  //création des objet de comparaison du tableau listing de la place de l'avion
  date = new Date();
  localisationHorizontal = planeZoneLocalisationHorizontal ();
  localisationVertical = planeZoneLocalisationVertical ();
  planePlaceListing.push({time : date.getTime(), vertical : localisationHorizontal, horizontal : localisationVertical });

  while(planePlaceListing.length > 50){ planePlaceListing.shift(); }
}

//gestion du boost
let secondBoostVerification = 0
document.getElementById('body').addEventListener('keydown', planeBoost);
function planeBoost (event){
   let key = event.key;
   if (key == 'b'){
     if (secondBoostVerification == 0){
      if (forceWaitAfterBoost == 0){
        if (counterPlaneBoost == 0){
         if (fallCondition2 == 'false' ){
           if ((horizontalLimitCounter == 0)||(horizontalLimitCounter == 35)){}
           else {
               boostingCondition.splice(31, 1, 'boost'); forceWaitAfterBoost = 1;
            }
          }
        }
      }
    }
  }
}
document.getElementById('body').addEventListener('keydown', planeReBoost);
function planeReBoost (event){
  let key = event.key;
  if (key == 'b'){
      if (secondBoostVerification == 1){
      if (counterPlaneBoost !== 0){
      if (fallCondition2 == 'false' ){
        if ((horizontalLimitCounter == 0)||(horizontalLimitCounter == 35)){}
        else {
            boostingCondition.splice(31, 1, 'boost');
           }
          }
        }
      }
    }
  }
document.getElementById('body').addEventListener('keyup', planeBoostStop);
function planeBoostStop (event){
    let key = event.key;
    if (key == 'b'){
      if (counterPlaneBoost !== 0){
      if (fallCondition2 == 'false' ){
        if ((horizontalLimitCounter == 0)||(horizontalLimitCounter == 35)){}
        else {
            boostingCondition.splice(31, 1, 'noBoost'); secondBoostVerification++;
          }
        }
      }
    }
  }

function planeBoosting (){
   planeNoImage ();
   let planeSave = [];
   for (i=0; i<=5; i++){
     for (x = 0; x <= 35; x++){ for (y = 0; y <= 15; y++){
           if(plane[i] == planeZone[x][y]){ planeSave.push(planeZone[x-1][y]);
         }
       }
     }
   }
   for (i=0; i<=5; i++) { plane.shift();}
   for (i=0; i<=5; i++) { plane.push(planeSave[i]);}
   planeImage(); horizontalLimitCounter--; counterPlaneBoost ++;
 }
function planeUnboosting (){
   planeNoImage ();
   let planeSave = [];
   for (i=0; i<=5; i++){
     for (x = 0; x <= 35; x++){ for (y = 0; y <= 15; y++){
           if(plane[i] == planeZone[x][y]){ planeSave.push(planeZone[x+1][y]);
         }
       }
     }
   }
   for (i=0; i<=5; i++) { plane.shift();}
   for (i=0; i<=5; i++) { plane.push(planeSave[i]);}
   planeImage(); horizontalLimitCounter++; counterPlaneBoost --;
 }

// gestion de la chute
function boostCondition (){
             if (planePlaceListing.length >= 20) {
                   while(boostingCondition.length > 31){
                     boostingCondition.shift();
                   }
                 for(i=0; i<= boostingCondition.length; i++){
                    if ((boostingCondition[i] == 'boost')||(boostingCondition[i] == 'reBoost')){boostVerification ++;}
                    if (boostingCondition[i] == 'unBoost'){unBoostVerification ++;}
                    if (boostingCondition[i] == 'noBoost'){noBoostVerification ++;}
                  }

                 if ((boostVerification >= 1)&&(boostVerification <= 27)&&(counterPlaneBoost !==28)&&(boostingCondition[30] == 'boost')){
                   boostingCondition.push('boost');
                 }
          /*     else if ((boostVerification >= 1)&&(boostVerification <= 27)&&(counterPlaneBoost !==28)&&(boostingCondition[30] == 'reBoost')&&(cooldownBoost2 >=2 )){
                    boostCondition.push('reBoost');
                 } */
                 else if((((unBoostVerification >= 1)&&(unBoostVerification <= 27))&&(counterPlaneBoost !==0))||((noBoostVerification == 31)&&(counterPlaneBoost !==0))) {
                   boostingCondition.push('unBoost');
                 }
                 else {
                   boostingCondition.push('noBoost');
                }

                   if (boostingCondition[31] == 'boost'){
                   planeBoosting();
                   }
                   else if (boostingCondition[31] == 'unBoost'){
                   planeUnboosting();
                   }

             }
             boostVerification = 0; unBoostVerification = 0; noBoostVerification = 0;
 }
function planeFall (){
   planeNoImage ();
   for (i=1; i<=3; i++) {
         plane.shift();
    }
    for (i=0; i<=2; i++){
      for (x = 0; x <= 35; x++){
        for (y = 0; y <= 15; y++){
             if(plane[i] == planeZone[x][y]){
                   plane.push(planeZone[x][y+1]);
                   if (verticalLimitCounter == 13) {
                     clearInterval(montain); clearInterval(cloud);
                     clearInterval(ground1); clearInterval(ground2); clearInterval(ground3);
                     clearInterval(controle); clearInterval(bird); clearInterval(animateBird); clearInterval(affichageScoring);

                     let finalFalling = setTimeout(() => {clearInterval(fall); planeImage ();},0);
                   }
            }
         }
      }
   }
     planeImageDown (); verticalLimitCounter++;
 }
function fallingCondition(){
   if (planePlaceListing.length >= 20) {
       while(fallCondition.length > 17){
         fallCondition.shift();
       }

       for (i=46; i<=48; i++){
           if (planePlaceListing[i-5].vertical-planePlaceListing[i].vertical >= 4){
             fallCondition.push('false');
           }
           else{
             fallCondition.push('true');
           }
       }

       if (counterPlaneBoost == 0){
         if (waitAfterBoost == 0){
           for (i=0; i<=19; i++){
               if(fallCondition[i] == 'false'){
                 fallCondition2 = 'false'; break;
               }
               else {
                 fallCondition2 = 'true'; forceWaitAfterBoost = 0; secondBoostVerification = 0;
               }
           }
         }
         else{
         waitAfterBoost--; fallCondition2 = 'false';
         }

       }
       else {
         fallCondition2 = 'false';
         if (waitAfterBoost >= 3){}
         else{waitAfterBoost++;}
       }


       if (fallCondition2 == 'true'){
       planeFall();
       }

    }

  }

//fumée
function smokeSelection(smoke) {
    let random = Math.random()*10000, random2 = Math.ceil(random);
    if(random2 <= 2500){ return '<div class="smokeType1" ></div>' }
    if((random2 > 2500)&&(random2 <=5000)){ return '<div class="smokeType2" ></div>'}
    if((random2 > 5000)&&(random2 <=7500)){ return '<div class="smokeType3" ></div>'}
    if(random2 > 7500){ return '<div class="smokeType3" ></div>'} }
function smokeGenerator(){
     if (planePlaceListing[48].horizontal - planePlaceListing[49].horizontal >= 1){
       for (x = 0; x <= 35; x++){
           for (y = 0; y <= 15; y++){
             if(plane[5] == planeZone[x][y]){
                if(smokeZone[x][y].innerHTML == ''){smokeZone[x][y].innerHTML += smokeSelection();}
                if(smokeZone[x+1][y].innerHTML == ''){smokeZone[x+1][y].innerHTML += smokeSelection();}
               }
             }
           }
     }
     else if (planePlaceListing[48].vertical - planePlaceListing[49].vertical >= 1){
       for (x = 0; x <= 35; x++){
           for (y = 0; y <= 15; y++){
             if(plane[5] == planeZone[x][y]){
                 if(smokeZone[x][y].innerHTML == ''){smokeZone[x][y].innerHTML += smokeSelection();}
                 if(smokeZone[x+1][y+1].innerHTML == ''){smokeZone[x+1][y+1].innerHTML += smokeSelection();}
               }
             }
           }
     }

  }
function smokeScrolling(){
    smokeGenerator();
    for (i = 35; i >= 1; i--){
      for (j = 0; j <= 15; j++){
      let iBefore = i-1;
          //réinitialisation de la colonne et copiage de la colonne précedente
          smokeZone[i][j].innerHTML = ''; //eventuellement la mm chose mais avec border radius.
          smokeZone[i][j].innerHTML = smokeZone[iBefore][j].innerHTML;
          }
        }
  }

//tableau des oiseaux
function birdGenerator(){
  let random = randomise();
   if (random >= 825){
     let random2 = randomise();
     if (random2 < 300){
       let random3 = randomise();
       for (birds of threeBird) {
           if ((random2 < birds.max) && (random2 > birds.min)){
             document.getElementById(birds.bird1).style.backgroundImage = 'url("img/bird1.png")';
             document.getElementById(birds.bird2).style.backgroundImage = 'url("img/bird1.png")';
             document.getElementById(birds.bird3).style.backgroundImage = 'url("img/bird1.png")';
             }
           }
     }
     else {
       let random3 = randomise();
       for (birds of oneBird) {
           if ((random2 < birds.max) && (random2 > birds.min)){
             document.getElementById(birds.bird).style.backgroundImage = 'url("img/bird1.png")';

             }
           }
     }
   }
   else {}
  };
function birdAnimation(){
    for (i = 45; i >= 1; i--){
      for (j = 0; j <= 12; j++){
      let iBefore = i-1;
        if (birdZone[i][j].style.backgroundImage == 'url("img/bird1.png")'){
          birdZone[i][j].style.backgroundImage = 'url("img/bird2.png")';
        }
        else if(birdZone[i][j].style.backgroundImage == 'url("img/bird2.png")'){
          birdZone[i][j].style.backgroundImage = 'url("img/bird1.png")';
        }
        else{}
        }
      }
  }
function birdScrolling(){
      birdGenerator();
      for (i = 45; i >= 1; i--){
        for (j = 0; j <= 12; j++){
        let iBefore = i-1;
            //réinitialisation de la colonne et copiage de la colonne précedente
            birdZone[i][j].style.backgroundImage = ''; //birdZone[i][j].style.backgroundImage = 'url("img/bird1.png")'; ou bird2
            birdZone[i][j].style.backgroundImage = birdZone[iBefore][j].style.backgroundImage;
            }
          }
    }
    

//préparation general des tableaux
for (i = 0; i<50; i++){
  setTimeout(ground1Scrolling,10);setTimeout(ground2Scrolling,10);setTimeout(ground3Scrolling,10);setTimeout(montainScrolling,10); setTimeout(cloudScrolling,10);
  setTimeout(controlePlane,10);
}

function score (){
  let scoringHTML = document.getElementById('scoring');
  let scoring = scoringHTML.textContent;
    if (scoring < 99999){
      scoring ++;
      scoringHTML.textContent = scoring
    }

}

let affichageScoring = setInterval(score, 2);

//défillement environnement
let bird = setInterval(birdScrolling, 200);
let animateBird = setInterval(birdAnimation, 90);
let ground1 = setInterval(ground1Scrolling,126);
let ground2 = setInterval(ground2Scrolling,132);
let ground3 = setInterval(ground3Scrolling,140);
let montain = setInterval(montainScrolling,140);
let cloud = setInterval(cloudScrolling,70);
let smoke = setInterval(smokeScrolling,100);
let colision = setInterval(colisionDetector, 50);

//pause et défillement avion
let controle, fall, boosting;
planeImage ();
let start = setTimeout(() => {
                              controle = setInterval(controlePlane,100);
                              fall = setInterval(fallingCondition,300);
                              boosting = setInterval(boostCondition,100);
                             }
                             ,1000);


//colision
function colisionDetector (){
  for (i = 0; i <= 35; i++){
    for (j = 0; j <= 12; j++){
      for (y = 0; y <= 5; y++){
          if(planeZone[i][j].style.backgroundImage == 'url("img/emptyPlane.png")'){
            if(planeZone[i][j].id !== plane[y].id){
                  planeZone[i][j].style.backgroundImage = '';
          }
        }
      }
    }
  }


  for (i = 0; i <= 35; i++){
    for (j = 0; j <= 12; j++){
  if ((planeZone[i][j].style.backgroundImage !== '')){
    if (birdZone[i+10][j].style.backgroundImage !== ''){
      clearInterval(montain); clearInterval(cloud); clearInterval(controle); clearInterval(fall); clearInterval(boosting); clearInterval(smoke);
      clearInterval(ground1); clearInterval(ground2); clearInterval(ground3); clearInterval(affichageScoring);
      clearInterval(controle); clearInterval(bird); clearInterval(animateBird); stoppingGame = true;
        }
      }
    }
  }
}
