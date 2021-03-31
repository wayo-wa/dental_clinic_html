## White歯科クリニック 
  
●使用ＯＳ：windows10  
●作成目的：レスポンシブデザイン学習の為。  
●使用言語：HTML/SCSS/JS(jQuery)  
●制作日数：約18日間

#### 【URL】&emsp;https://glacial-beyond-81919.herokuapp.com/<br> 
#### 【補足】<br>
&emsp;&emsp;「マイページ」の「削除」処理について。画面遷移せず削除処理を行いたいので、data属性に変数$val['id']を付与し、<br> 
&emsp;&emsp;ajaxDelete.phpへ値を渡し非同期通信(ajax)にて行いました。<br> 
```
<input class="p-btn c-btn c-btn--modify js-button-click" data-stampingid="<?php echo $val['id']; ?>" type="submit" value="削除">
```

<img src="https://user-images.githubusercontent.com/73923419/105647830-8f557500-5eeb-11eb-8b1d-ac3adccd9529.png" width="300px">
