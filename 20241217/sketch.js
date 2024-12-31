let player1 = {
  x: 200,
  y: 200,
  currentAction: 'idle', // 當前動作
  frame: 0, // 當前幀
  frameCount: 0, // 用於控制動畫速度
  actions: {
    idle: {
      img: null,
      width: 469/6,
      height: 99,
      frames: 6
    },
    walk: {
      img: null,
      width: 653/7,
      height: 107,
      frames: 7
    },
    jump: {
      img: null,
      width: 787/11,
      height: 136,
      frames: 11
    }
  }
};

function preload() {
  // 載入各個動作的精靈圖片
  player1.actions.idle.img = loadImage('player1/跑.png');
  player1.actions.walk.img = loadImage('player1/打架.png');
  player1.actions.jump.img = loadImage('player1/跳.png');
}

function setup() {
  createCanvas(800, 600);
  frameRate(60);
}

function draw() {
  background(windowWidth,windowHeight);

  // 更新動畫幀
  player1.frameCount++;
  if (player1.frameCount > 5) { // 每6幀更新一次動畫
    const currentActionData = player1.actions[player1.currentAction];
    player1.frame = (player1.frame + 1) % currentActionData.frames;
    player1.frameCount = 0;
  }
  
  // 獲取當前動作的資料
  const action = player1.actions[player1.currentAction];
  
  // 繪製精靈
  let sx = player1.frame * action.width;
  
  image(action.img, 
        player1.x, player1.y, 
        action.width, action.height, // 使用原始尺寸
        sx, 0, 
        action.width, action.height);
}

function keyPressed() {
  // 按數字鍵1-3切換動作
  if (key === '1') {
    player1.currentAction = 'idle';
    player1.frame = 0; // 重置幀計數
  } else if (key === '2') {
    player1.currentAction = 'walk';
    player1.frame = 0;
  } else if (key === '3') {
    player1.currentAction = 'jump';
    player1.frame = 0;
  }
}
