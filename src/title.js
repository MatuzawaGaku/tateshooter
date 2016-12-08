var titleLayer = cc.Layer.extend({
  ctor : function() {
    this._super();
    var size = cc.director.getWinSize();

    var title = cc.Sprite.create(res.titlebg_png);
    title.setPosition(size.width/2, size.height/2);
    title.setScale(1,1);
    this.addChild(title);

    var sprite = cc.Sprite.create(res.start_png);
    sprite.setPosition(220,30);
    sprite.setScale(0.9);
    this.addChild(sprite);

    var sprite2 = cc.Sprite.create(res.title_png);
    sprite2.setPosition(200,200);
    sprite2.setScale(0.9);
    this.addChild(sprite2);

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: this.onTouchBegan,
      onTouchMoved: this.onTouchMoved,
      onTouchEnded: this.onTouchEnded
  }, this);

  return true;
},

onTouchBegan: function(touch, event) {
  return true;
},
onTouchMoved: function(touch, event) {},
onTouchEnded: function(touch, event) {
  // 次のシーンに切り替える
  cc.director.runScene(new gameScene());
},
});
var titleScene = cc.Scene.extend({
onEnter : function() {
  this._super();
  var layer = new titleLayer();
  this.addChild(layer);
  }
});
