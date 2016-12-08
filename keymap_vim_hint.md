##　vim　
### モード　
i	 : カーソル位置に文字入力  
o	 : カーソル位置の下に文字入力  
n	 : 文字の入力が終わったら ノーマルモード に戻ります。  
v	 : ビジュアルモード  
vB : 	.visual-mode.blockwise  
vL : 	.visual-mode.linewise  
vC : 	.visual-mode.characterwise  
iR : 	.insert-mode.replace  
!i : 	:not(.insert-mode)	except insert-mode  
#	 : .with-count	when count is specified  

## カーソル移動
h : 左  j : 下  k : 上 l : 右  
gg : ﾌｧｲﾙの先頭に移動  
G　 :ﾌｧｲﾙの最後に移動  

## 文字削除
n gv	select-previous-selection	Select last selected visual area in current buffer
!i d
x :一文字削除  
v x	delete  
n x	delete-right
n X	delete-left
!i D	delete-to-last-character-of-line
!i g~
o,v ~	toggle-case
!i ~	toggle-case-and-move-right
!i gU
o,v U	upper-case
!i gu
o,v u	lower-case
split-character
!i gc	camel-case
snake-case	CamelCase -> camel_case
!i g-	dash-case
