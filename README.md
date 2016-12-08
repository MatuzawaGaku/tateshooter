#### 課題1  
ランダムな位置に１０個オーブを出現させなさい。  

### 課題2  
for　文の２重ループを用いて、５×５の格子状にオーブを配置しなさい。
※配置するオーブはランダム

## 課題3
名前を変えてgit cloneを行う  
 - git bush で　一つ上のディレクトリ GitHubに移動する  
 - git clone https://github.com/hosokawa9360/01_HelloWorld_js.git　 04__ConcentrationGame_js  エラー？
 - git clone  https://github.com/hosokawa9360/01_HelloWorld_js.git  04__ConcentrationGame_js  
 - cd 04__ConcentrationGame_js  
 - git管理から一旦はずす
 - rm -rf .git/  
 - resフォルダの画像ﾌｧｲﾙ（cocos.png , drop01.png, drop02.png, drop03.png, drop04.png, drop05.png,HelloWorld.png)を削除する
 - srcフォルダのnextSnece.js Temporarily.jsは削除する

- issues #1　に差し替える画像があるので、ダウンロード回答して、resフォルダに入れる。  
 - git status  
 - git init  
 - git add .  
 - git commit -m "ConcentrationGame first commit"  
 - 自分のgithub（Web上）でリポジトリを作る　リポジトリ名は　04__ConcionGame_js  
 - git remote add origin https://github.com/自分のユーザID/04__ConcentrationGame_js.git  
 - git push -u origin master  

## 課題4
 - MyScene.jsを編集し、cover.png(64 x 64) が　4　× 4 のグリッドで配置されるようにせよ。
 cover.png同士の間隔がそれぞれ10ピクセル離れていること。  


# Cocos2d-JS Single File Engine User Guide　

This guide is for the usage of single file engine of Cocos2d-JS which can be retrieved from [the online downloader](http://cocos2d-x.org/filecenter/jsbuilder/).

You may have downloaded one of these three versions:

- **Full Version**: Full Version engine contains all features and all extensions for Cocos2d-JS, it can help you explore its great possibility. You can refer to the feature list in [Cocos2d-JS documentation page](http://www.cocos2d-x.org/docs/manual/framework/html5/en)

- **Cocos2d-JS Lite Version**: Lite Version contains some core features of Cocos2d-JS, it's extremely easy to use and light as a feather. Its features are listing below:
    + Canvas renderer (No WebGL support)
    + Scene and Layers
    + Event Manager
    + Scheduler
    + Sprite and Texture2D
    + LabelTTF
    + Audio
    + Actions
    + Menu and MenuItems

- **Customized Version**: Customize your own version of Cocos2d-JS with the features you need, you should know the meaning of these features to construct a suitable version. All the features you chose will be included in the downloaded engine js file.

## Usage

The usage have been demonstrated in the downloaded package, you can see the cocos2d-js-v3.0[-lite].js is embeded in the HelloWorld.html, after the window loading you will be able to use Cocos2d-JS API in your custom js code.

You need to host these files on a web server or local web server to see the result.

## Useful links

- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [Document root](http://cocos2d-x.org/docs/manual/framework/html5/en)
- [Github repository](https://github.com/cocos2d/cocos2d-js)
- [Online forum](http://discuss.cocos2d-x.org/category/javascript)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## About Closure Compiler

You can use [Google Closure Compiler](https://developers.google.com/closure/compiler/) to compress all js files to a smaller size even if you downloaded the compressed version. Steps are showing below:

1. Download Closure Compiler's jar app
2. Configure the build.xml with your own configurations
3. Run `ant` in the terminal
4. Replace the embeded js files in HelloWorld.html with the single output file `game.min.js`

Please be noticed that you can not write any js code in your html file, all js codes should be compressed at the same time, otherwise errors will be triggered.

## Notice

While openning the HelloWorld.html, you will receive an error:
"Failed to load resource: the server responded with a status of 404 (Not Found)" for the file `project.json`

It's not a problem, you can simply igore it, or you can get rid of this error by creating an empty `project.json` file.
