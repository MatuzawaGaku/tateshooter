var player;
var boss;
var direction = 1;
var xSpeed = 0; //カートの移動速度
var gameLayer;

var detectedX;　 //現在タッチしているX座標
var savedX;　 //前回タッチしていたX座標
var touching = false;　 //タッチ状況管理用flag

var gameScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    gameLayer = new game();
    gameLayer.init();
    this.addChild(gameLayer);
  }
});

var game = cc.Layer.extend({
  init: function() {
    this._super();
    //グラデーション背景
    //  var backgroundLayer = cc.LayerGradient.create(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));

    var background = new cc.Sprite(res.gb_png);
    var size = cc.director.getWinSize();
    background.setPosition(cc.p(100, 100));
    background.setScale(3,4);
    var backgroundLayer = cc.Layer.create();
    backgroundLayer.addChild(background);
    this.addChild(backgroundLayer);

    player = new player;
    this.addChild(player);

    boss = new boss;
    this.addChild(boss);

    this.schedule(this.Etama, 0.5);

    cc.eventManager.addListener(touchListener, this);
    this.scheduleUpdate();
},
  update: function(dt){
    if (touching) {
      //現在タッチしているX座標と前回の座標の差分をとる
      var deltaX = savedX - detectedX;
      //差分でカートが右にいくか左にいくかを判断する
      if (deltaX > 0) {
        xSpeed = -2;
      }
      if (deltaX < 0) {
        xSpeed = 2;
      }
      //saveXに今回のX座標を代入し、onTouchMovedイベントで
      //detectedX変数が更新されても対応できるようにする
      savedX = detectedX;
      if (xSpeed > 0) {

        player.setFlippedX(true);
      }
      if (xSpeed < 0) {
        player.setFlippedX(false);
      }

      player.setPosition(player.getPosition().x + xSpeed, player.getPosition().y);
    }
  },
  Addtama : function(event){
    var tama = new tama();
    this.addChild(tama);
  },
  removetama : function(tama){
    this.removeChild(tama);
  },
  AddEtama : function(event){
    var Etama = new Etama();
    this.addChild(Etama);
  },
  removeEtama : function(Etama){
    this.removeChild(Etama);
  },
});
//バーチャルアナログパッド用のタッチリスナーの実装
var touchListener = cc.EventListener.create({
  event: cc.EventListener.TOUCH_ONE_BY_ONE,
  swallowTouches: true,
  onTouchBegan: function(touch, event) {
    touching = true;
    //現在タッチ中のX座標を保持する変数へ代入
    detectedX = touch.getLocation().x;
    //前回タッチしていたX座標として代入
    savedX = detectedX;
    return true;
  },
  onTouchMoved: function(touch, event) {
    //現在タッチ中のX座標を保持する変数へ代入
    detectedX = touch.getLocation().x;
  },
  onTouchEnded: function(touch, event) {
    //タッチflagをOFF
    touching = false;
  }
});

var player = cc.Sprite.extend({
  _time: 0,
  ctor : function(){
    this._super();
    this.initWithFile(res.jiki_png);
  },
  onEnter : function(){
    this._super();
    this.setPosition(100,100);
    this.setScale(0.2);
    winSize = cc.director.getWinSize();
    this.scheduleUpdate();

  },
  update : function(dt){
    this._time += 1;
    if(this._time == 1) {
      var shot = new tama();
      shot.setPosition(player.getPosition().x, player.getPosition().y + 12);
      gameLayer.addChild(shot);
    }
    if(this._time > 10) this._time = 0;
  }
});

var tama = cc.Sprite.extend({
  ctor : function(){
    this._super();
    this.initWithFile(res.playertama_png);
  },
  onEnter : function(){
    this._super();
    this.setScale(0.2);
    var moveAction = cc.MoveTo.create(13, new cc.Point(this.getPosition().x , this.getPosition().y * 50 + 50));
    this.runAction(moveAction);
    this.scheduleUpdate();
  },
  update : function(dt){
    var bossBoundingBox = boss.getBoundingBox();
    var tamaBoundingBox = this.getBoundingBox();
    if(cc.rectIntersectsRect(bossBoundingBox,tamaBoundingBox)){
      gameLayer.removetama(this);
    }
    if(this.getPosition().y < 500) {
      this.removeChild(tama);
      console.log("消した");
    }
  }
});

var boss = cc.Sprite.extend({
  _time: 0,
  ctor : function(){
    this._super();
    this.initWithFile(res.teki0_png);
  },
  onEnter : function(){
    this._super();
    this.setPosition(100,400);
    this.setScale(0.2);
    winSize = cc.director.getWinSize();
    this.scheduleUpdate();

  },
  update : function(dt){
    this._time += 1;
    if(this._time == 1) {
      var shot2 = new Etama();
      shot2.setPosition(boss.getPosition().x, boss.getPosition().y - 12);
      gameLayer.addChild(shot2);
    }
    if(this._time > 10) this._time = 0;
  }
});

var Etama = cc.Sprite.extend({
  ctor : function(){
    this._super();
    this.initWithFile(res.enemytama_png);
  },
  onEnter : function(){
    this._super();
    this.setScale(0.02);
    var moveAction = cc.MoveTo.create(7, new cc.Point(this.getPosition().x , this.getPosition().y * -20 - 50));
    this.runAction(moveAction);
    this.scheduleUpdate();
  },
  update : function(dt){
    var playerBoundingBox = player.getBoundingBox();
    var EtamaBoundingBox = this.getBoundingBox();
    if(cc.rectIntersectsRect(playerBoundingBox,EtamaBoundingBox)){
      gameLayer.removeEtama(this);
    }
    if(this.getPosition().y > 0) {
      this.removeChild(Etama);
      console.log("消した");
    }
  }
});
