// 最終課題を制作しよう
let board = [
  ["","","",""],
  ["","","",""],
  ["","","",""],
  ];

  let currentplayer = "〇";
  let winner = "";
  function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(69, 170, 160);
  let size = min(width, height)*0.6;
  let startX = (width - size)/2;
  let startY = (height - size)/2;
  let cell = size/3;  

  //縦線
  line(startX + cell, startY, startX + cell, startY + size);
  line(startX + cell*2, startY, startX + cell*2, startY + size);

  //横線
  line(startX, startY + cell, startX + size, startY + cell);
  line(startX, startY + cell*2, startX + size, startY + cell*2);

  //〇×表示
  textAlign(CENTER, CENTER);
  textSize(cell*0.6);

  for(let r = 0; r < 3; r++){
    for(let c = 0; c < 3; c++){
      text(board[r][c], startX + cell*c + cell/2, startY + cell*r + cell/2);
    }
  }
  if (winner != ""){
    textSize(50);
    fill(255, 0, 0);
    text(winner + "の勝ち", width/2, height*0.8);
  }
 fill(0);
textSize(20);
text("スペースキーでリセット", width/2, height*0.9);
}
function mousePressed(){
  if (winner != ""){
    return;
  }
  let size = min(width, height)*0.6;
  let startX = (width - size)/2;
  let startY = (height - size)/2;
  let cell = size/3;  
  
  
  
  if (
     mouseX >= startX && mouseX <= startX + size &&
     mouseY >= startY && mouseY <= startY + size
  ){
　　　let col = floor((mouseX - startX)/cell);
    let row = floor((mouseY - startY)/cell);
    
    if(board[row][col] == ""){
      board[row][col] = currentplayer;
      checkWinner();

      if(currentplayer == "〇"){
        currentplayer = "×";
      }else{
        currentplayer = "〇";
      }
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
  function checkWinner(){
    //横の勝利条件
    for(let r = 0; r < 3; r++){
      if(board[r][0] != "" && board[r][0] == board[r][1] && board[r][1] == board[r][2]){
        winner = board[r][0];
      }
    }
    //縦の勝利条件
    for(let c = 0; c < 3; c++){
      if(board[0][c] != "" && board[0][c] == board[1][c] && board[1][c] == board[2][c]){
        winner = board[0][c];
      
      }
    }
    //対角の勝利条件
    if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]){
      winner = board[0][0];
     
    }
    if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]){
      winner = board[0][2];
      
   
    }
   }
  
function keyPressed(){
    if(keyCode == "32"){
      board = [
        ["","","",""],
        ["","","",""],
        ["","","",""],
      ];
      currentplayer = "〇";
      winner = "";
    }
   }