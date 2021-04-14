// ==UserScript==
// @name           Japanese DLSite translation
// @namespace      https://raw.github.com/Zero-G-Sys
// @description    Replaces Japanese text on DLSite
// @include        http*://*.dlsite.com/*
// @exclude        http*://*.dlsite.com/*eng*
// @grant          none
// @version        1.1.1
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @project page   https://github.com/Zero-G-Sys/DLStrans
// @downloadURL    https://raw.github.com/Zero-G-Sys/DLStrans/master/Japanese_DLSite_translation.user.js
// @updateURL      https://raw.github.com/Zero-G-Sys/DLStrans/master/Japanese_DLSite_translation.user.js
// ==/UserScript==
(function () {
  'use strict';

//Custom script
let reviewButtons = document.getElementsByClassName('_btn_good_review btn_default');
if (reviewButtons !== undefined && reviewButtons[0] !== undefined) {
  Array.from(reviewButtons).forEach(function (item) {
    item.value = 'Helpful';
  });
}

let linkTwitter = document.getElementsByClassName('link_twitter');
if (linkTwitter !== undefined && linkTwitter[0] !== undefined) {
  linkTwitter[0].style.display = 'none';
}

let btnCartAll = document.getElementsByClassName('work_cart type_series');
if (btnCartAll !== undefined && btnCartAll[0] !== undefined) {
  btnCartAll[0].children[0].innerHTML = 'Add All to Cart';
}

/*-----------------------------------------------------------------------------------*/
// Create mutation observers for elements that are created during page load

var work_right = document.getElementById('work_right');
if (work_right !== null){
  (new MutationObserver(function(mutationsList, observer) {
      for(const mutation of mutationsList) {
          if(mutation.addedNodes[0] && mutation.addedNodes[0].className == 'work_right_info'){
            // Stop this observer as it is not necessary anymore, and the following changes
            // would trigger it.
            this.disconnect(); 

            let node = mutation.addedNodes[0];

            node.children[0].innerHTML = node.children[0].innerHTML.replace('ランキング：', 'Ranking:');
            node.children[0].innerHTML = node.children[0].innerHTML.replace('24時間', 'Daily');
            node.children[0].innerHTML = node.children[0].innerHTML.replace(/位/g, 'Rank');
            node.children[0].innerHTML = node.children[0].innerHTML.replace('7日間', 'Weekly');
            node.children[0].innerHTML = node.children[0].innerHTML.replace('30日間', 'Monthly');
            node.children[0].innerHTML = node.children[0].innerHTML.replace('年間', 'Yearly');
            node.children[0].innerHTML = node.children[0].innerHTML.replace('累計', 'Total');

            node.children[1].innerHTML = node.children[1].innerHTML.replace('販売数', 'Sales');
            node.children[1].innerHTML = node.children[1].innerHTML.replace('評価', 'Rating');

            node.children[2].innerHTML = node.children[2].innerHTML.replace('お気に入り数', 'Favorited');
            node.children[2].innerHTML = node.children[2].innerHTML.replace('レビュー数', 'Reviews');
            node.children[2].innerHTML = node.children[2].innerHTML.replace('レビューへ', 'Go to reviews');
          }
      }  
  })).observe(work_right, { childList: true});
}

var work_right_name = document.getElementById('work_right_name');
if (work_right_name !== null){
  (new MutationObserver(function(mutationsList, observer) {
      for(const mutation of mutationsList) {
          if(mutation.addedNodes[0] && mutation.addedNodes[0].className == 'link_cien'){
            this.disconnect();

            mutation.addedNodes[0].innerHTML = mutation.addedNodes[0].innerHTML.replace('ファンクラブで支援する', 'Support author on Ci-En');
            mutation.addedNodes[0].innerHTML = mutation.addedNodes[0].innerHTML.replace('DLポイントでも支援できます', 'Can also support with DL Points');
         }
      }  
  })).observe(work_right_name, { childList: true});
}

var work_buy_box_wrapper = document.getElementById('work_buy_box_wrapper');
if (work_buy_box_wrapper !== null){
  (new MutationObserver(function(mutationsList, observer) {
      for(const mutation of mutationsList) {
          if(mutation.addedNodes[0] && mutation.addedNodes[0].id == 'work_price'){
            this.disconnect();

            let purchaseElem = document.getElementsByClassName('work_buy_main')[0];
            if (purchaseElem !== undefined) {
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('会員登録で', 'Registration');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('クーポンプレゼント！', 'Gift Coupon!');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('クーポンご利用の場合', 'Price using coupons');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('価格', 'Price');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('ポイント', 'Points');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace(/円/g, 'Yens');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('還元', ' Discount');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('カートに入れる', 'Add to Cart');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('お気に入りに追加', 'Add to Favourites');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('会員登録して購入', 'Buy');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('すぐに購入', 'Buy');
              purchaseElem.innerHTML = purchaseElem.innerHTML.replace('カートに入っています', 'Already in Cart');
            }
          }
      }  
  })).observe(work_buy_box_wrapper, { childList: true, subtree: true});
}

var header = document.getElementById('header');
if (header !== null){
  (new MutationObserver(function(mutationsList, observer) {
      for(const mutation of mutationsList) {
        if(mutation.addedNodes[0] && mutation.addedNodes[0].className == 'noticeNav'){
          this.disconnect();

          mutation.addedNodes[0].innerHTML = mutation.addedNodes[0].innerHTML.replace('ポイント', 'Points');
          mutation.addedNodes[0].innerHTML = mutation.addedNodes[0].innerHTML.replace('クーポン 保有', 'Coupons');
          mutation.addedNodes[0].innerHTML = mutation.addedNodes[0].innerHTML.replace('枚', '');
          mutation.addedNodes[0].innerHTML = mutation.addedNodes[0].innerHTML.replace('獲得する', 'Acquire');
        }
      }  
  })).observe(header, { childList: true, subtree: true});
}

/*-----------------------------------------------------------------------------------*/

// Elements that depend on another script and load even after document ready state
// Was using this method before using mutation observers
$(window).load(function () {
  let favElem = document.getElementsByClassName('work_dl clear')[0];
  if (favElem) {
    let favElemChild = favElem.children[0];
    if (favElemChild) favElemChild.innerHTML = favElemChild.innerHTML.replace('お気に入り数', 'Favorited');
  }

  
  let cart_box_headerElement = document.getElementsByClassName('cart_box_header');
  if (cart_box_headerElement !== undefined && cart_box_headerElement[0] !== undefined) {
    cart_box_headerElement[0].innerHTML = cart_box_headerElement[0].innerHTML.replace('この作品を買う', 'Buy this product');
  }
  
  let work_buy_labelElement = document.getElementsByClassName('work_buy_label');
  if (work_buy_labelElement !== undefined && work_buy_labelElement[0] !== undefined) {
    work_buy_labelElement[0].innerHTML = work_buy_labelElement[0].innerHTML.replace('ポイント', 'Points');
    Array.from(work_buy_labelElement).forEach(function (item) {
      if(item.innerHTML.localeCompare('ポイント') === 0) item.innerHTML = 'Points';
    });
  }
  
  let work_buy_box_wrapper = document.getElementById('work_buy_box_wrapper');
  let btn_buy;
  if(work_buy_box_wrapper) btn_buy = work_buy_box_wrapper.getElementsByClassName('btn_buy');
  if (btn_buy && btn_buy[1]) {
    btn_buy[1].innerHTML = btn_buy[1].innerHTML.replace('会員登録して購入', 'Buy');
    btn_buy[1].innerHTML = btn_buy[1].innerHTML.replace('すぐに購入', 'Buy');
  }
  
  if (document.getElementById('search_text').placeholder.localeCompare('キーワードから探す（作品名、サークル名など）') === 0) {
    document.getElementById('search_text').placeholder = 'Search by keyword (work name, circle name, etc.)';
  }
});

/*-----------------------------------------------------------------------------------*/

// Function that runs after doing the replacements of original script
function doAfterReplacements(){
  let coupons = document.querySelector('li.login_information_item:nth-child(2) > a:nth-child(1)');
  coupons.innerHTML = coupons.innerHTML.replace('Coupon', 'Coupon/s');
  coupons.innerHTML = coupons.innerHTML.replace('images', '');
}
//Custom script end


  /*
      NOTE: 
          You can use \\* to match actual asterisks instead of using it as a wildcard!

          '/(?:^|)word(?:|$)/g' : 'word', = space/break after > and space/break before <
          '/(?:^|\\W)word(?:\\W|$)/g' : 'word',  = start from break page before > and ends with break page before <; i.e. deletes symbol before and after word
          '/(:|^)word(?:\\W|$)/g' : 'word',  = start from > and ends with break page before <; i.e. deletes symbol after the word
      '/(:|^)word(||\\W)(:|$)/g' : 'word',  = start from > and ends with break page before <
          '/(?:^|\\s)word/g' : 'word',
          '/(|\\s)word\\s/g' : 'word',
          '/(\\W:|)word(:\\W|$)/g' : 'word',
          '/\\bword\\b/g' : 'word',
          '/\\bword/g' : 'word',
          '/(:|^)word/g' : 'word',  = start from >
          '/(:|^)word(:|$)/g' : 'word',  = start from > and end with <
          '/(:|^)word(|| )(:|$)/g' : 'word ',

  */

  var words = {
  ///////////////////////////////////////////////////////


  // Syntax: 'Search word' : 'Replace word',
  //custom
  '関連サービス': 'Related services',
  '新規クーポン取得': 'Get New Coupon',
  'クーポン': 'Coupon',
  '体験版でご確認ください': 'Please check in the trial version',
  '種類': 'Type:',
  '日本語版': 'Japanese Ver.',
  '販売数': 'Sales',
  'フタナリ': 'Futanari',
  'ボイス・ASMR': 'Voice/ASMR',
  'CG・イラスト': 'CG/Illustration',
  '新着レビュー': 'New Reviews',
  '専売作品': 'Exclusive Products',
  '無料作品': 'Free Products',
  'ボイスコミック': 'Voiced Comics',
  'ワンコイン作品': 'One-Coin Products',
  '成年コミック': 'Adult Comics',
  'にじGAME': 'NijiGAME',
  'DLチャンネル': 'DL Channel',
  'トリオキニ': 'Triokini',
  'ログイン中': 'Login',
  'カート': 'Cart',
  '購入済作品': 'Purchased',
  'アカウント': 'Account',
  '女性向けへ': 'Girls Side',
  'ガイド': 'Guide',
  'キーワードから探す（作品名、サークル名など）': 'Search by keyword (product name, circle name, etc.)',
  'おすすめ': 'Recommended',
  'バイノーラル/ダミヘ': 'Binaural/Damihe',
  '他のジャンルで探す': 'Search by other genres',
  '3月～5月即売会販売作品': 'Sales from March to May',
  'その他の販売フロア': 'Other Sales',
  '同人': 'Doujin',
  'マンガ・CG': 'Manga / CG',
  'VR対応作品': 'VR Compatible',
  '未定': 'Undecided',
  'Doujin作品を探す': 'Find Doujin Products',
  'スマホ版DLsiteへ': 'Go to mobile site',
  '総合トップ': 'Main Site',
  '人気順': 'Popularity',
  'Salesが多い順': 'Sales (Descending)',
  '作者': 'Author',
  'ファイル容量': 'File Size',
  '動作環境': 'Operating Enviroment',
  '内蔵ストレージ': 'Internal storage',
  'フォローする': 'Follow',
  'まとめ': 'Summary',
  '件': '', //Case/s
  'トーク': 'Comments',
  'URLをコピー': 'Copy URL',
  'ユーザーレビュー': 'User Reviews',
  'トップレビュー順': 'Top Reviews',
  '新着順': 'New Reviews',
  'レビュアーオススメ！': 'Recommended by Reviewer!',
  '作品情報': 'Product Information',
  '最近チェックした作品': 'Recently viewed products',
  '報告する': 'Report',
  '人 が役に立ったと答えています': ' person/s said it was helpful',
  'すべてのレビューを見る': 'See all reviews',
  'レビューを投稿する': 'Post a review',
  '購入済み': 'Purchased',
  '人気レビュアー': 'Popular reviewer',
  '同一シリーズ作品': 'Products in the Same Series',
  '関連Summary記事': 'Related Summary Articles',
  'すべてのSummary記事を見る': 'See all summary articles',
  '開催中の企画・キャンペーン': 'Current projects and campaigns',
  '獣耳': 'Animal Ears',
  'おっぱい': 'Breasts',
  '癒し': 'Healing',
  'ノーマルプレイ': 'Normal Play',
  'アニメ': 'Animation',
  'ほのぼの': 'Heartwarming',
  '男主人公': 'Male MC',
  '技術書': 'Technical Book',
  '女主人公': 'Female MC',
  'マニアック/変態': 'Maniac/Pervert',
  '評論': 'Criticism',
  'ツクール': 'Tsukuru',
  '料理/グルメ': 'Cooking/Gourmet',
  'おねショタ': 'One Shota',
  '潮吹き': 'Squirting',
  'ゲイ/男同士': 'Gay/Male to Male',
  'ささやき': 'Secret Talk/Whisper',
  '羞恥/恥辱': 'Shame/Humiliation',
  '耳舐め': 'Ear Licking',
  'キャラクター/衣装': 'Character / Costume',
  '体育会系/スポーツ選手': 'Athletic/Athletes',
  'くノ一': 'Kunoichi',
  'サキュバス/淫魔': 'Succubus/Incubus',
  'おやじ': 'Father',
  'ロボット/アンドロイド': 'Robot/Android',
  '方言': 'Dialect',
  'ツルペタ': 'Flat Chest',
  'ムチムチ': 'Muchimuchi',
  '太め/デブ': 'Thick/Fat',
  '即売会': 'Spot Sale',
  '2020/3月～5月即売会': 'March-May 2020 spot sale',
  'バージョンアップ情報': 'Updates Information',
  'スマホ': 'Smart phone',
  '寝取られ': 'Netorare',
  '純愛': 'Pure love',
  '単行本': 'Book',
  '雑誌/アンソロ': 'Magazine / Anthology',
  
    
    // End of Custom
    
    //game page
      '24時間ランキング' : 'Daily Ranking',
      '7日間ランキング' : 'Weekly Ranking',
      'ランキングをもっと見る' : 'See More Details',
      '発売予告作品をもっと見る' : 'See More Details',
      '発売予告作品' : 'Upcoming Products',
      '男性成人向け作品へ' : 'Products for Adults',
      '/(:|^)同人誌(:|$)/g' : 'Doujinshi',
      '対象性別' : 'Audience',
      '男性向け' : 'Males',
      '活動ジャンル' : 'Main categories',
      '/(:|^)(||\\W)ロールプレイング(||ゲーム)(||\\W)(:|$)/g' : 'RPG',
      '/(:|^)対応OS(:|$)/g' : 'OS Platforms',
      'その他オプション' : 'Additional Options',
      'その他同人誌' : 'Other Doujins',
      'その他同人ソフト' : 'Other Doujin Soft',
      'その他ゲーム' : 'Other Games',
      '/(:|^)その他形式(:|$)/g' : 'Other files',
      '/(:|^)マイジャンル登録(:|$)/g' : 'Add to My Tags',
      'マイジャンル' : 'My Tags',
      'サンプル' : 'Samples',
      'HTML版で表示' : 'Display in HTML format',
      'ホームページ' : 'Website',
      '/(:|^)サークル名(:|$)/g' : 'Circle',
      '並び替え' : 'Sort by',
      '件中' : 'Total',
      '件目' : 'Showing',
      '発売日が新しい順' : 'Release date - New to Old',
      '発売日が古い順' : 'Release date - Old to New',
      'DL数が多い順' : 'Number of Downloads',
      '価格が安い順' : 'Price - Low to High',
      '価格が高い順' : 'Price - High to Low',
      '評価が高い順' : 'Rating - High to Low',
      'レビューが多い順' : 'Reviews - High to Low',
      '表示件数' : 'Display',
      '表示形式' : 'View',
      '/(:|^)次へ(:|$)/g' : 'Next',
      '/(:|^)最後へ(:|$)/g' : 'Last Page',
      '/(:|^)最初へ(:|$)/g' : 'First Page',
      '/(:|^)前へ(:|$)/g' : 'Previous',
      'お気に入りに追加' : 'Favorite',
      '/(:|^)キーワード(:|$)/g' : 'Keywords',
      '検索条件を変更する' : 'Modify search conditions',
      '/\\b年\\b/g' : '/',
      '/\\b月\\b/g' : '/',
      '/\\b日/g' : '',
      '/(:|^)保存した検索条件(:|$)/g' : 'Search Conditions',
      '/(:|^)検索条件(:|$)/g' : 'Search for',
      '/(:|^)ジャンル/g' : 'Tags',
      'の検索結果' : 'Results',
      '検索結果' : 'Results',
      '他の趣味嗜好で探す' : 'See more…',
      '他の作品形式で探す' : 'See more…',
      '専売/独占/先行作品' : 'DLsite Exclusive',
      '/(:|^)DLsite独占/先行作品(:|$)/g' : 'DLsite Exclusive',
      '/(:|^)レンタルあり(:|$)/g' : 'Rental available',
      '/(:|^)レンタル作品(:|$)/g' : 'Rental available',
      '/(:|^)体験版ミラー(:|$)/g' : 'Trial versions',
      'ツール/アクセサリ' : 'Utility / Tool',
      'こだわり/アピール' : 'Focus / Appeals',
      '淡白/あっさり' : 'Plain/Nonpersisting',
      'お尻/ヒップ' : 'Buttocks',
      'ベタ/コテコテ' : 'Predictable Story',
      '汁/液大量' : 'Lots of Cum',
      'アイテム/道具' : 'Featured Items/Tools',
      'ピアス/装飾品' : 'Earrings',
      '首輪/鎖/拘束具' : 'Collar/Chain/Hamper',
      'ムチ/縄/蝋燭' : 'Whip/Rope/Candle',
      '包帯/注射器' : 'Bandage/Injector',
      '道具/異物' : 'Foreign Object',
      '叔父/義父' : 'Uncle/Stepfather',
      '男性/おやじ' : 'Man/Middle-age',
      '同級生/同僚' : 'Classmate',
      '先輩/後輩' : 'Junior & Senior Students',
      '女王様/お姫様' : 'Queen/Princess',
      'エルフ/妖精' : 'Elf/Fairy',
      '天使/悪魔' : 'Angel/Demon',
      '魔法使い/魔女' : 'Witch',
      '人外娘/モンスター娘' : 'Nonhuman/Monster Girl',
      'レトロ/耽美' : 'Retro/Aesthetic',
      '芸能人/アイドル/モデル' : 'Entertainer/Idol/Model',
      '警察/刑事' : 'Police',
      'ヤクザ/裏社会' : 'Crime/Gangster',
      '不良/ヤンキー' : 'Bad Boy/Hoodlum',
      'レスラー/格闘家' : 'Wrestler/Fighter',
      'ヤリチン/プレイボーイ' : 'Playboy',
      'けもの/獣化' : 'Animalize',
      'コスチューム/衣装/職業' : 'Outfits / Occupations',
      'レース/フリル' : 'Lacy/Frilled',
      '着物/和服' : 'Kimono/Japanese Dress',
      'シチュエーション/系統' : 'Situations / Tastes',
      '学校/学園' : 'School',
      'オフィス/職場' : 'Office',
      'ラブラブ/あまあま' : 'Romance',
      '退廃/背徳/インモラル' : 'Decadent/Immoral',
      '日常/生活' : 'Drama/Daily Living',
      '風俗/ソープ' : 'Soapland',
      '歴史/時代物' : 'Epic/Historical',
      'ノンフィクション/体験談' : 'Non-fiction/Real Story',
      'プレイ/えっち傾向' : 'Actions / Sexual Pref.',
      '妊娠/孕ませ' : 'Pregnancy/Impregnation',
      'レズ/女同士' : 'Lesbian',
      'ホモ/男同士' : 'Homosexual',
      '複数プレイ/乱交' : 'Orgy',
      '強制/無理矢理' : 'Coercion/Compulsion',
      '放尿/おしっこ' : 'Urination',
      'ごっくん/食ザー' : 'Cum Swallow',
      '外見/身体的特徴' : 'Appearance',
      '巨乳/爆乳' : 'Big Breasts',
      '貧乳/微乳' : 'Tiny Breasts',
      '複乳/怪乳/超乳' : 'Multiple Breasts',
      '乳首/乳輪' : 'Nipples',
      'ぼて腹/妊婦' : 'Pregnant Woman',
      'スリム/スレンダー' : 'Slim/Slender',
      '陰毛/腋毛' : 'Pubic Hair',
      '褐色/日焼け' : 'Tanned Skin/Suntan',
      'タトゥー/刺青' : 'Tattoo',
      '残酷系/異常系' : 'Violence / Guro',
      '血液/流血' : 'Blood',
      '売春/援交' : 'Prostitution',
//common words
//Advanced Search
      '/(:|^)その他(:|$)/g' : 'Option',
      '/(:|^)その他ソフト(:|$)/g' : 'Other Software',
      '/(:|^)カップリング/g' : 'Pairings',
      '/(:|^)シリーズ名/g' : 'Series',
      '/(:|^)イベント/g' : 'Event',
      '/(:|^)作品名(:|$)/g' : 'Title',
      '/(:|^)オプション(:|$)/g' : 'Option',
      '/(:|^)ページ数/g' : 'Page Count',
      '/\\bページ/g' : ' pages',
      '/(:|^)対象作品(:|$)/g' : 'Target product',
      '/\\b件/g' : ' pages',
      '/\\b円以下(:|$)/g' : ' JPY and less',
      '/\\b円以上(:|$)/g' : ' JPY and more',
//Categories
      '/(:|^)(||\\W)デジタルコミック(||\\W)(:|$)/g' : 'Digital Comic',
      '/(:|^)(||\\W)劇画(||\\W)(:|$)/g' : 'Gekiga',
      '/(:|^)(||\\W)マンガ(||\\W)(:|$)/g' : 'Manga',
      '/(:|^)(||\\W)CG集(||\\W)(:|$)/g' : 'CG Collection',
      '/(:|^)(||\\W)イラスト集(||\\W)(:|$)/g' : 'Illustration',
      'イラスト\＋ノベル' : 'Illust\+Novel',
      'CG+ノベル' : 'C\G\+Novel',
      'イラスト+ノベル' : 'Illust+Novel',
      '/(:|^)(||\\W)ノベル(||\\W)(:|$)/g' : 'Novel',
      '/(:|^)(||\\W)同人ソフトノベル(||\\W)(:|$)/g' : 'Doujin Software Novel',
      '/(:|^)(||\\W)同人誌ノベル(||\\W)(:|$)/g' : 'Doujin Novel',
      '/(:|^)(||\\W)写真集(||\\W)(:|$)/g' : 'Photo Album',
      '/(:|^)(||\\W)素材(||\\W)(:|$)/g' : 'Materials',
      '/(:|^)(||\\W)画像(||\\W)(:|$)/g' : 'Image ',
      '/(:|^)画像素材(:|$)/g' : 'Image Material',
      '/(:|^)(||\\W)オーディオ(||\\W)(:|$)/g' : 'Audio',
      '/(:|^)(||\\W)動画(||\\W)(:|$)/g' : 'Video',
      '/(:|^)(||\\W)動画作品(||\\W)(:|$)/g' : 'Video',
      '/(:|^)(||\\W)音声(||\\W)(:|$)/g' : 'Voice',
      '/(:|^)(||\\W)音声作品(||\\W)(:|$)/g' : 'Voice',
      '/(:|^)(||\\W)音楽(||\\W)(:|$)/g' : 'Music',
      '/(:|^)(||\\W)音楽作品(||\\W)(:|$)/g' : 'Music',
      '/(:|^)(||\\W)アクション(||\\W)(:|$)/g' : 'Action',
      '/(:|^)(||\\W)クイズ(||\\W)(:|$)/g' : 'Quiz',
      '/(:|^)(||\\W)アドベンチャー(||\\W)(:|$)/g' : 'Adventure',
      '/(:|^)(||\\W)テーブルゲーム(||\\W)(:|$)/g' : 'Tabletop',
      '/(:|^)テーブル(:|$)/g' : 'Tabletop',
      '/(:|^)(||\\W)デジタルノベル(||\\W)(:|$)/g' : 'Digital Novel',
      '/(:|^)(||\\W)シミュレーション(||\\W)(:|$)/g' : 'Simulation',
      '/(:|^)(||\\W)タイピング(||\\W)(:|$)/g' : 'Typing',
      '/(:|^)(||\\W)シューティング(||\\W)(:|$)/g' : 'Shooter',
      '/(:|^)(||\\W)パズル(||\\W)(:|$)/g' : 'Puzzle',
      '/(:|^)(||\\W)ゲーム(||\\W)(:|$)/g' : 'Game',
      '/(:|^)(||\\W)画集(||\\W)(:|$)/g' : 'Artbooks',
//Preferences
      '趣味嗜好' : 'Preferences',
      'いずれかを含む' : 'One or more of these words',
      '全てを含む' : 'All these words',
//Focus / Appeals
      '/(:|^)萌え(|| )(:|$)/g' : 'Moe ',
      '/(:|^)ツンデレ(|| )(:|$)/g' : 'Tsundere ',
      '/(:|^)燃え(|| )(:|$)/g' : 'Hot ',
      '/(:|^)感動(|| )(:|$)/g' : 'Tearjerker ',
      '/(:|^)癒し(|| )(:|$)/g' : 'Healing ',
      '/(:|^)鬱(|| )(:|$)/g' : 'Depression ',
      '/(:|^)オールハッピー(|| )(:|$)/g' : 'Totally Happy ',
      '/(:|^)着衣(|| )(:|$)/g' : 'Clothed ',
      '/(:|^)チラリズム(|| )(:|$)/g' : 'Peeping ',
      '/(:|^)フェチ(|| )(:|$)/g' : 'Fetish ',
      '/(:|^)女性視点(|| )(:|$)/g' : 'Woman\'s Viewpoint ',
      '/(:|^)女主人公のみ(|| )(:|$)/g' : 'Female Heroine Only ',
      '/(:|^)男無(|| )(:|$)/g' : 'No Male ',
      '/(:|^)逆転無し(|| )(:|$)/g' : 'No Reverse ',
      '/(:|^)マニアック(|| )(:|$)/g' : 'Maniac ',
      '/(:|^)アブノーマル(|| )(:|$)/g' : 'Abnormal ',
      '/(:|^)おさわり(|| )(:|$)/g' : 'Touching ',
      '/(:|^)きせかえ(|| )(:|$)/g' : 'Clothes Changing  ',
      '/(:|^)脚(|| )(:|$)/g' : 'Legs ',
      '/(:|^)おっぱい(|| )(:|$)/g' : 'Breasts ',
      '/(:|^)淫語(|| )(:|$)/g' : 'Dirty Talk ',
      '/(:|^)連続絶頂(|| )(:|$)/g' : 'Successive Orgasms ',
      '/(:|^)断面図(|| )(:|$)/g' : 'Inside View ',
      '/(:|^)ドット(|| )(:|$)/g' : 'Pixel Art  ',
      '/(:|^)ポリゴン(|| )(:|$)/g' : '3D ',
      '/(:|^)アニメ(|| )(:|$)/g' : 'Anime ',
      '/(:|^)催眠音声(|| )(:|$)/g' : 'Hypnotic Voice ',
      '/(:|^)アンソロジー(|| )(:|$)/g' : 'Anthology ',
//Featured Items / Tools
      '/(:|^)リボン(|| )(:|$)/g' : 'Ribbon ',
      '/(:|^)カチューシャ(|| )(:|$)/g' : 'Headband ',
      '/(:|^)メガネ(|| )(:|$)/g' : 'Glasses ',
      '/(:|^)靴下(|| )(:|$)/g' : 'Socks ',
      '/(:|^)薬物(|| )(:|$)/g' : 'Drug ',
      '/(:|^)ローション(|| )(:|$)/g' : 'Lotion ',
      '/(:|^)スタンガン(|| )(:|$)/g' : 'Stun Gun ',
      '/(:|^)おむつ(|| )(:|$)/g' : 'Diaper ',
      '/(:|^)おもちゃ(|| )(:|$)/g' : 'Toy ',
//Characters
      '/(:|^)キャラクター(|| )(:|$)/g' : 'Characters ',
      '/(:|^)少女(|| )(:|$)/g' : 'Girl ',
      '/(:|^)ぷに(|| )(:|$)/g' : 'Puni ',
      '/(:|^)少年(|| )(:|$)/g' : 'Boy ',
      '/(:|^)ショタ(|| )(:|$)/g' : 'Shota  ',
      '/(:|^)年上(|| )(:|$)/g' : 'Senior ',
     '/(:|^)母親(|| )(:|$)/g' : 'Mother ',
      '/(:|^)義妹(|| )(:|$)/g' : 'Younger Stepsister ',
      '/(:|^)娘(|| )(:|$)/g' : 'Daughter  ',
      '/(:|^)妹(|| )(:|$)/g' : 'Younger Sister  ',
      '/(:|^)兄(|| )(:|$)/g' : 'Older Brother  ',
      '/(:|^)弟(|| )(:|$)/g' : 'Younger Brother  ',
      '/(:|^)父(|| )(:|$)/g' : 'Father  ',
      '/(:|^)義母(|| )(:|$)/g' : 'Stepmother ',
      '/(:|^)実姉(|| )(:|$)/g' : 'Real Older Sister ',
      '/(:|^)義姉(|| )(:|$)/g' : 'Older Stepsister ',
      '/(:|^)熟女(|| )(:|$)/g' : 'Mature Woman ',
      '/(:|^)人妻(|| )(:|$)/g' : 'Married Woman ',
      '/(:|^)お姉さん(|| )(:|$)/g' : 'Older Girl/Older Sister ',
      '/(:|^)未亡人(|| )(:|$)/g' : 'Widow ',
      '/(:|^)既婚者(|| )(:|$)/g' : 'Married Person ',
      '/(:|^)幼なじみ(|| )(:|$)/g' : 'Childhood Friend ',
      '/(:|^)双子(|| )(:|$)/g' : 'Twins ',
      '/(:|^)姉妹(|| )(:|$)/g' : 'Sisters ',
      '/(:|^)保健医(|| )(:|$)/g' : 'School Nurse ',
      '/(:|^)女医(|| )(:|$)/g' : 'Female Doctor ',
      '/(:|^)女教師(|| )(:|$)/g' : 'Female Teacher ',
      '/(:|^)教師(|| )(:|$)/g' : 'Teacher ',
      '/(:|^)学生(|| )(:|$)/g' : 'Student ',
      '/(:|^)委員長(|| )(:|$)/g' : 'Class President ',
      '/(:|^)先輩(|| )(:|$)/g' : 'Senpai  ',
      '/(:|^)上司(|| )(:|$)/g' : 'Boss ',
      '/(:|^)OL(|| )(:|$)/g' : 'Office Lady ',
      '/(:|^)秘書(|| )(:|$)/g' : 'Secretary ',
      '/(:|^)サラリーマン(|| )(:|$)/g' : 'Salaried Worker ',
      '/(:|^)ホスト(|| )(:|$)/g' : 'Host ',
      '/(:|^)リーマン(|| )(:|$)/g' : 'Salariman ',
      '/(:|^)お嬢様(|| )(:|$)/g' : 'Upper-class Girl ',
      '/(:|^)ギャル(|| )(:|$)/g' : 'Gal ',
      '/(:|^)ビッチ(|| )(:|$)/g' : 'Bitch ',
      '/(:|^)天然(|| )(:|$)/g' : 'Natural ',
      '/(:|^)電波(|| )(:|$)/g' : 'Frantic ',
      '/(:|^)主従(|| )(:|$)/g' : 'Master and Servant ',
      '/(:|^)執事(|| )(:|$)/g' : 'Butler ',
      '/(:|^)変身ヒロイン(|| )(:|$)/g' : 'Transforming Girl ',
      '/(:|^)魔法少女(|| )(:|$)/g' : 'Magical Girl ',
      '/(:|^)男の娘(|| )(:|$)/g' : 'Trap ',
      '/(:|^)妖怪(|| )(:|$)/g' : 'Specter ',
      '/(:|^)擬人化(|| )(:|$)/g' : 'Personification ',
      '/(:|^)ヤンデレ(|| )(:|$)/g' : 'Yandere ',
      '/(:|^)モンスター娘(|| )(:|$)/g' : 'Monster Girl  ',
      '/(:|^)ロボッ娘(|| )(:|$)/g' : 'Robogirl  ',
      '/(:|^)ドジっ娘(|| )(:|$)/g' : 'Clumsy Girl ',
      '/(:|^)ロボット(|| )(:|$)/g' : 'Robot ',
      '/(:|^)ガテン系(|| )(:|$)/g' : 'Blue-collar Worker ',
      '/(:|^)幽霊(|| )(:|$)/g' : 'Ghost ',
      '/(:|^)ゾンビ(|| )(:|$)/g' : 'Zombie ',
      '/(:|^)同性愛者(|| )(:|$)/g' : 'Homosexual ',
      '/(:|^)ショタケモ(|| )(:|$)/g' : 'Furry (Shota) ',
      '/(:|^)インテリ(|| )(:|$)/g' : 'Intellectual ',
      '/(:|^)外国人(|| )(:|$)/g' : 'Foreigner ',
      '/(:|^)体育会系(|| )(:|$)/g' : 'Jock ',
      '/(:|^)スポーツ選手(|| )(:|$)/g' : 'Athlete ',
      '/(:|^)ニューハーフ(|| )(:|$)/g' : 'Shemale ',
      '/(:|^)戦士(|| )(:|$)/g' : 'Warrior ',
      '/(:|^)俺様攻め(|| )(:|$)/g' : 'Lordly Manner (Dominant) ',
      '/(:|^)クール攻め(|| )(:|$)/g' : 'Cool Man (Dominant) ',
      '/(:|^)年下攻め(|| )(:|$)/g' : 'Younger Man (Dominant) ',
      '/(:|^)ヘタレ攻め(|| )(:|$)/g' : 'Lazy (Dominant) ',
      '/(:|^)強気受け(|| )(:|$)/g' : 'Tough Guy (Submissive) ',
      '/(:|^)誘い受け(|| )(:|$)/g' : 'Seduce (Submissive) ',
      '/(:|^)やんちゃ受け(|| )(:|$)/g' : 'Mischievous (Submissive) ',
      '/(:|^)オヤジ受け(|| )(:|$)/g' : 'Older Man (Submissive) ',
      '/(:|^)クール受け(|| )(:|$)/g' : 'Cool Man (Submissive) ',
      '/(:|^)健気受け(|| )(:|$)/g' : 'Diligent Man (Submissive) ',
      '/(:|^)乙女受け(|| )(:|$)/g' : 'Girl (Submissive) ',
//Outfits / Occupations
      '/(:|^)制服(|| )(:|$)/g' : 'Uniform ',
      '/(:|^)セーラー服(|| )(:|$)/g' : 'Sailor-style Uniform ',
      '/(:|^)体操着(|| )(:|$)/g' : 'Gym Clothes ',
      '/(:|^)道着(|| )(:|$)/g' : 'Judo Uniform ',
      '/(:|^)スポユニ(|| )(:|$)/g' : 'Sports Uniform ',
      '/(:|^)メイド(|| )(:|$)/g' : 'Maid ',
      '/(:|^)ナース(|| )(:|$)/g' : 'Nurse ',
      '/(:|^)巫女(|| )(:|$)/g' : 'Shrine Maiden ',
      '/(:|^)軍服(|| )(:|$)/g' : 'Army Uniform ',
      '/(:|^)下着(|| )(:|$)/g' : 'Underwear ',
      '/(:|^)パンツ(|| )(:|$)/g' : 'Panties ',
      '/(:|^)ふんどし(|| )(:|$)/g' : 'Loincloth ',
      '/(:|^)ゴスロリ(|| )(:|$)/g' : 'Gothic Lolita ',
      '/(:|^)ロリ(|| )(:|$)/g' : 'Loli ',
      '/(:|^)コスプレ(|| )(:|$)/g' : 'Cosplay ',
      '/(:|^)ボンデージ(|| )(:|$)/g' : 'Bondage ',
      '/(:|^)ブルマ(|| )(:|$)/g' : 'Gym Shorts ',
      '/(:|^)チャイナ(|| )(:|$)/g' : 'Chinese Dress ',
      '/(:|^)ミニスカ(|| )(:|$)/g' : 'Short Skirt ',
      '/(:|^)エプロン(|| )(:|$)/g' : 'Apron ',
      '/(:|^)ラバー(|| )(:|$)/g' : 'Rubber ',
      '/(:|^)レオタード(|| )(:|$)/g' : 'Leotard ',
      '/(:|^)白衣(|| )(:|$)/g' : 'White coat ',
      '/(:|^)シスター(|| )(:|$)/g' : 'Nun ',
      '/(:|^)ワイシャツ(|| )(:|$)/g' : 'Dress Shirt ',
      '/(:|^)ウェイトレス(|| )(:|$)/g' : 'Waitress ',
      '/(:|^)バニーガール(|| )(:|$)/g' : 'Bunny Girl ',
      '/(:|^)スパッツ(|| )(:|$)/g' : 'Leggings ',
      '/(:|^)ニーソックス(|| )(:|$)/g' : 'Knee Socks ',
      '/(:|^)ストッキング(|| )(:|$)/g' : 'Stockings ',
      '/(:|^)ローレグ(|| )(:|$)/g' : 'Low-cut Legs ',
      '/(:|^)スクール水着(|| )(:|$)/g' : 'School Swimsuit ',
      '/(:|^)水着(|| )(:|$)/g' : 'Swimsuit ',
      '/(:|^)スーツ(|| )(:|$)/g' : 'Suit ',
      '/(:|^)ガードル(|| )(:|$)/g' : 'Girdle ',
      '/(:|^)ガーター(|| )(:|$)/g' : 'Garter ',
      '/(:|^)半ズボン(|| )(:|$)/g' : 'Breeches ',
      '/(:|^)ブレザー(|| )(:|$)/g' : 'Blazer ',
      '/(:|^)男装(|| )(:|$)/g' : 'Cross-dressed Woman ',
      '/(:|^)女装(|| )(:|$)/g' : 'Crossdress ',
      '/(:|^)社長(|| )(:|$)/g' : 'President ',
      '/(:|^)医者(|| )(:|$)/g' : 'Doctor ',
      '/(:|^)アイドル(|| )(:|$)/g' : 'Idol ',
//Situations / Tastes
      '/(:|^)ラブコメ(|| )(:|$)/g' : 'Funny Love Story ',
      '/(:|^)耳かき(|| )(:|$)/g' : 'Ear Cleaning ',
      '/(:|^)屋外(|| )(:|$)/g' : 'Outdoor ',
      '/(:|^)ギャグ(|| )(:|$)/g' : 'Hilarious ',
      '/(:|^)憑依(|| )(:|$)/g' : 'Possession ',
      '/(:|^)石化(|| )(:|$)/g' : 'Petrifaction ',
      '/(:|^)家族(|| )(:|$)/g' : 'Family ',
      '/(:|^)コメディ(|| )(:|$)/g' : 'Comedy ',
      '/(:|^)時間停止(|| )(:|$)/g' : 'Time Stopping ',
      '/(:|^)ミリタリー(|| )(:|$)/g' : 'Military ',
      '/(:|^)SF(|| )(:|$)/g' : 'Sci Fi ',
      '/(:|^)スポーツ(|| )(:|$)/g' : 'Sports ',
      '/(:|^)格闘(|| )(:|$)/g' : 'Fight ',
      '/(:|^)ほのぼの(|| )(:|$)/g' : 'Heartwarming ',
      '/(:|^)同棲(|| )(:|$)/g' : 'Cohabitation ',
      '/(:|^)恋人同士(|| )(:|$)/g' : 'Lovers ',
      '/(:|^)遠距離恋愛(|| )(:|$)/g' : 'Long-distance Love ',
      '/(:|^)初体験(|| )(:|$)/g' : 'First Experience ',
      '/(:|^)出会い(|| )(:|$)/g' : 'Encounter ',
      '/(:|^)サークル(|| )(:|$)/g' : 'Circle ',
      '/(:|^)色仕掛け(|| )(:|$)/g' : 'Coquettish ',
      '/(:|^)女体化(|| )(:|$)/g' : 'Feminization ',
      '性転換(TS)' : 'Transsexual ',
      '/(:|^)浮気(|| )(:|$)/g' : 'Cheating ',
      '/(:|^)三角関係(|| )(:|$)/g' : 'Love Triangle ',
      '/(:|^)シリアス(|| )(:|$)/g' : 'Serious ',
      '/(:|^)ファンタジー(|| )(:|$)/g' : 'Fantasy ',
      '/(:|^)パラレル(|| )(:|$)/g' : 'Parallel ',
      '/(:|^)ホラー(|| )(:|$)/g' : 'Horror ',
      '/(:|^)キャットファイト(|| )(:|$)/g' : 'Cat Fight ',
      '/(:|^)スプラッター(|| )(:|$)/g' : 'Splatter ',
      '/(:|^)サスペンス(|| )(:|$)/g' : 'Suspense ',
      '/(:|^)ハードボイルド(|| )(:|$)/g' : 'Hard-boiled ',
      '/(:|^)バイオレンス(|| )(:|$)/g' : 'Violence ',
      '/(:|^)ギャンブル(|| )(:|$)/g' : 'Gambling ',
      '/(:|^)ヤキモチ(|| )(:|$)/g' : 'Jealousy ',
      '/(:|^)オカルト(|| )(:|$)/g' : 'Occult ',
      '/(:|^)歳の差(|| )(:|$)/g' : 'May and December ',
      '/(:|^)魔法(|| )(:|$)/g' : 'Magic ',
      '/(:|^)芸能(|| )(:|$)/g' : 'Entertainment ',
      '/(:|^)同居(|| )(:|$)/g' : 'Roommate ',
      '/(:|^)純愛(|| )(:|$)/g' : 'Pure Love ',
      '/(:|^)耽美(|| )(:|$)/g' : 'Shonen-ai ',
      '/(:|^)戦場(|| )(:|$)/g' : 'War ',
      '/(:|^)おもらし(|| )(:|$)/g' : 'Wetting ',
      '/(:|^)伝奇(|| )(:|$)/g' : 'Marvel Tales ',
      '/(:|^)ティーンズラブ(|| )(:|$)/g' : 'Teens Love ',
      '/(:|^)ボーイズラブ(|| )(:|$)/g' : 'Boys Love ',
      '/(:|^)年下攻(|| )(:|$)/g' : 'Younger Man (Dominant) ',
      '/(:|^)ハーレム(|| )(:|$)/g' : 'Harem ',
      '/(:|^)やおい(|| )(:|$)/g' : 'Yaoi ',
      '/(:|^)寝取られ(|| )(:|$)/g' : 'Netorare ',
      '/(:|^)百合(|| )(:|$)/g' : 'Yuri ',
      '/(:|^)ミステリー(|| )(:|$)/g' : 'Mystery ',
      '/(:|^)丸呑み(|| )(:|$)/g' : 'Vore ',
      '/(:|^)電車(|| )(:|$)/g' : 'Train ',
      '/(:|^)寝取り(|| )(:|$)/g' : 'Netori ',
      '/(:|^)歴史(|| )(:|$)/g' : 'History ',
//Actions / Sexual Pteferences
      '/(:|^)手コキ(|| )(:|$)/g' : 'Hand Job ',
      '/(:|^)足コキ(|| )(:|$)/g' : 'Foot Job ',
      '/(:|^)ぶっかけ(|| )(:|$)/g' : 'Bukkake ',
      '/(:|^)顔射(|| )(:|$)/g' : 'Facial ',
      '/(:|^)中出し(|| )(:|$)/g' : 'Internal Cumshot ',
      '/(:|^)パイズリ(|| )(:|$)/g' : 'Breast Sex ',
      '/(:|^)母乳(|| )(:|$)/g' : 'Breast Milk ',
      '/(:|^)搾乳(|| )(:|$)/g' : 'Milking ',
      '/(:|^)出産(|| )(:|$)/g' : 'Childbirth ',
      '/(:|^)産卵(|| )(:|$)/g' : 'Egg Production ',
      '/(:|^)陵辱(|| )(:|$)/g' : 'Violation ',
      '/(:|^)オナニー(|| )(:|$)/g' : 'Masturbation ',
      '/(:|^)緊縛(|| )(:|$)/g' : 'Tight Binding ',
      '/(:|^)フェラチオ(|| )(:|$)/g' : 'Blowjob ',
      '/(:|^)痴漢(|| )(:|$)/g' : 'Molestation ',
      '/(:|^)調教(|| )(:|$)/g' : 'Sexual Training ',
      '/(:|^)変態(|| )(:|$)/g' : 'Hentai ',
      '/(:|^)淫乱(|| )(:|$)/g' : 'Naughty ',
      '/(:|^)露出(|| )(:|$)/g' : 'Outdoor Exposure ',
      '/(:|^)言葉責め(|| )(:|$)/g' : 'Oral Assault ',
      '/(:|^)青姦(|| )(:|$)/g' : 'Outdoor Sex ',
      '/(:|^)拘束(|| )(:|$)/g' : 'Restraint ',
      '/(:|^)奴隷(|| )(:|$)/g' : 'Slave ',
      '/(:|^)浣腸(|| )(:|$)/g' : 'Enema ',
      '/(:|^)羞恥(|| )(:|$)/g' : 'Ashamed ',
      '/(:|^)恥辱(|| )(:|$)/g' : 'Humiliation ',
      '/(:|^)監禁(|| )(:|$)/g' : 'Captivity ',
      '/(:|^)焦らし(|| )(:|$)/g' : 'Tease ',
      '/(:|^)くすぐり(|| )(:|$)/g' : 'Tickling ',
      '/(:|^)鬼畜(|| )(:|$)/g' : 'Pervert ',
      '/(:|^)ノーマルプレイ(|| )(:|$)/g' : 'Vanilla Sex ',
      '/(:|^)放置プレイ(|| )(:|$)/g' : 'Neglect Play ',
      '/(:|^)無理矢理(|| )(:|$)/g' : 'Coercion ',
      '/(:|^)睡眠姦(|| )(:|$)/g' : 'Sleep Rape ',
      '/(:|^)輪姦(|| )(:|$)/g' : 'Gangbang ',
      '/(:|^)和姦(|| )(:|$)/g' : 'Consensual Sex ',
      '/(:|^)近親相姦(|| )(:|$)/g' : 'Incest ',
      '/(:|^)逆レイプ(|| )(:|$)/g' : 'Woman Rapes Man ',
      '/(:|^)盗撮(|| )(:|$)/g' : 'Upskirt/Spy Photo ',
      '/(:|^)男性受け(|| )(:|$)/g' : 'Submissive Man ',
      '/(:|^)催眠(|| )(:|$)/g' : 'Hypnosis ',
      '/(:|^)アナル(|| )(:|$)/g' : 'Anal ',
      '/(:|^)スカトロ(|| )(:|$)/g' : 'Scatology ',
      '/(:|^)尿道(|| )(:|$)/g' : 'Urethra ',
      '/(:|^)触手(|| )(:|$)/g' : 'Tentacle ',
      '/(:|^)獣姦(|| )(:|$)/g' : 'Bestiality ',
      '/(:|^)機械姦(|| )(:|$)/g' : 'Robot Sex ',
      '/(:|^)拡張(|| )(:|$)/g' : 'Stretch/Expansion ',
      '/(:|^)下克上(|| )(:|$)/g' : 'Junior\'s Domination ',
      '/(:|^)ソフトエッチ(|| )(:|$)/g' : 'Soft Erotic ',
      '/(:|^)アヘ顔(|| )(:|$)/g' : 'Ahegao ',
      '/(:|^)モブ姦(|| )(:|$)/g' : 'Nameless Sex ',
      '/(:|^)異種姦(|| )(:|$)/g' : 'Interspecies Sex ',
      '/(:|^)悪堕ち(|| )(:|$)/g' : 'Corrupted Morals ',
      '/(:|^)洗脳(|| )(:|$)/g' : 'Brainwashing ',
      '/(:|^)口内射精(|| )(:|$)/g' : 'Oral Cumshot ',
      '/(:|^)イラマチオ(|| )(:|$)/g' : 'Forced Oral ',
      '/(:|^)スパンキング(|| )(:|$)/g' : 'Spanking ',
      '/(:|^)バイ(|| )(:|$)/g' : 'Bisexual ',
      '/(:|^)レイプ(|| )(:|$)/g' : 'Rape ',
//Appearance
      '/(:|^)ショートカット(|| )(:|$)/g' : 'Short hair ',
      '/(:|^)ロングヘア(|| )(:|$)/g' : 'Long Hair ',
      '/(:|^)おかっぱ(|| )(:|$)/g' : 'Bobbed Hair ',
      '/(:|^)茶髪(|| )(:|$)/g' : 'Brown Hair ',
      '/(:|^)金髪(|| )(:|$)/g' : 'Blonde Hair ',
      '/(:|^)黒髪(|| )(:|$)/g' : 'Brunet Hair ',
      '/(:|^)三つ編み(|| )(:|$)/g' : 'Braid ',
      '/(:|^)ポニーテール(|| )(:|$)/g' : 'Ponytail ',
      '/(:|^)ツインテール(|| )(:|$)/g' : 'Twin Tail ',
      '/(:|^)ネコミミ(|| )(:|$)/g' : 'Cat Ears ',
      '/(:|^)獣耳(|| )(:|$)/g' : 'Animal Ears ',
      '/(:|^)長身(|| )(:|$)/g' : 'Tall Woman ',
      '/(:|^)羽根(|| )(:|$)/g' : 'Wings ',
      '/(:|^)筋肉(|| )(:|$)/g' : 'Muscular ',
      '/(:|^)スレンダー(|| )(:|$)/g' : 'Slender ',
      '/(:|^)つるぺた(|| )(:|$)/g' : 'Childlike Build ',
      '/(:|^)パイパン(|| )(:|$)/g' : 'Hairless ',
      '/(:|^)ふたなり(|| )(:|$)/g' : 'Futanari ',
      '/(:|^)巨根(|| )(:|$)/g' : 'Large Cock ',
      '/(:|^)童貞(|| )(:|$)/g' : 'Virgin/Intact Male ',
      '/(:|^)処女(|| )(:|$)/g' : 'Virgin Female ',
      '/(:|^)巨大化(|| )(:|$)/g' : 'Supersize ',
      '/(:|^)しっぽ(|| )(:|$)/g' : 'Tail ',
      '/(:|^)関西弁(|| )(:|$)/g' : 'Kansai Dialect ',
      '/(:|^)ボクっ娘(|| )(:|$)/g' : 'Tomboy ',
      '/(:|^)無表情(|| )(:|$)/g' : 'Deadpan ',
      '/(:|^)包茎(|| )(:|$)/g' : 'Phimosis ',
      '/(:|^)むちむち(|| )(:|$)/g' : 'Chubby/Plump ',
      '/(:|^)太め(|| )(:|$)/g' : 'Chubby ',
      '/(:|^)デブ(|| )(:|$)/g' : 'Fat ',
      '/(:|^)爺(|| )(:|$)/g' : 'Old Man ',
//Violence / Guro
      '/(:|^)腹パン(|| )(:|$)/g' : 'Gut Punch ',
      '/(:|^)猟奇(|| )(:|$)/g' : 'Psychotic ',
      '/(:|^)人体改造(|| )(:|$)/g' : 'Body Modification ',
      '/(:|^)拷問(|| )(:|$)/g' : 'Torture ',
      '/(:|^)フィストファック(|| )(:|$)/g' : 'Fist Sex ',
      '/(:|^)ニプルファック(|| )(:|$)/g' : 'Nipple Sex ',
      '/(:|^)狂気(|| )(:|$)/g' : 'Madness ',
      '/(:|^)リョナ(|| )(:|$)/g' : 'Ryona/Brutal ',
      '/(:|^)蟲姦(|| )(:|$)/g' : 'Worm Sex ',
//Additional Options
      'グロテスクな表現を含む作品' : 'Contains grotesque imagery',
      'グロテスク表現を含む作品' : 'Contains grotesque imagery',
      'ホモセクシャルな表現を含む作品' : 'Contains homosexual imagery',
      'ゲイ表現を含む作品' : 'Contains homosexual imagery',
      'プロテクト作品を除外する' : 'Exclude copy-controlled prodcuts',
      '体験版あり' : 'Trial version',
      'レビューあり' : 'User reviews',
      '音声あり' : 'Voiced',
      '音楽あり' : 'With Music',
      '動画あり' : 'With Video',
      '3D作品' : '3D',
      'PDF同梱' : 'PDF File',
      'APK同梱' : 'APK File',
      'almight対応' : 'Almight engine',
      'ブラウザ試聴' : 'Browser streaming',
      'ブラウザ対応' : 'Browser streaming',
      '平均評価' : 'Average rating',
//Event
      'コミックマーケット' : 'Comic Market ',
//File Format
      'HTMLファイル' : 'HTML file',
      'HTML\\(+画像\\)' : 'HTML+Image',
      'HTML+画像' : 'HTML+Image',
      'HTML\\(+動画\\)' : 'HTML+Video',
      'HTML(動画)' : 'HTML+Video',
      '画像ファイル' : 'Image file',
      '動画ファイル' : 'Video file',
      '/(:|^)ムービー(:|$)/g' : 'Movie',
      'ムービーファイル' : 'Video file',
      'オーディオファイル' : 'Image file',
      'Flashファイル' : 'FLASH file',
      'PDFファイル' : 'PDF file',
      'TEXTファイル' : 'TEXT file',
      'Androidアプリファイル' : 'App file for Android',
      'APKファイル' : 'APK file',
      '\\)ファイル' : '\)',
      '画像\\(' : 'Image (',
      'オーディオ\(' : 'Audio (',
      'ムービー\\(' : 'Video (',
//end of Advanced Search
//other
      'ランキング' : 'Ranking',
      'DLsite専売作品' : 'Exclusives',
      'おすすめ特集' : 'Recommend',
      '発売カレンダー' : 'Releases',
      '詳細検索' : 'Advanced Search',
      '/(:|^)料理(:|$)/g' : 'Cooking',
      '\[スマホ' : '\[Phone',
      'ブラウザ視聴' : 'Browser streaming',
      '同人ソフト' : 'Doujin soft',
      '作品番号' : 'Product Number',
      'ファイル名/ファイル容量' : 'File / Size',
      '以上推奨' : ' or greater recommend',
      '相当以上' : ' or greater',
      '/(:|^)メモリ(:|$)/g' : 'Memory',
      '/(:|^)空き容量/g' : 'Free spase ',
      '/B以上の空き容量(:|$)/g' : 'B or greater recommend',
      '/B以上の空き(:|$)/g' : 'B or greater required',
      '/B 利用可能(:|$)/g' : 'B required',
      '/B以上(:|$)/g' : 'B or greater',
      '/以上\\(推奨/g' : ' (recommend ',
      '/以上\\)(:|$)/g' : ' or greater)',
      '/(:|^)解像度/g' : 'Resolution ',
      '/\\b以上(:|$)/g' : ' or greater',
      '/\\b以降(:|$)/g' : '+',
      '/(:|^)画面解像度/g' : 'Screen resolution ',
      '/フルカラー以上表示可能(:|$)/g' : ' which can display in full color',
      '注意事項' : 'Notice',
      '/(:|^)誤字脱字修正(:|$)/g' : 'Correction: typos',
      '/(:|^)不具合修正(:|$)/g' : 'Correction: bugs/defects',
      '/(:|^)内容追加(:|$)/g' : 'Added content',
      '/(:|^)以上(:|$)/g' : '+',
      '/\\b以上導入環境推奨(:|$)/g' : '+',
      '/(:|^)推奨/g' : 'Recommend ',
      '/\\b以上 \/ /g' : '+ \/ ',
      '/(:|^)フリガナ(:|$)/g' : 'Furigana',
      'サークル ID' : 'Circle ID',
      '/(:|^)メンバー(:|$)/g' : 'Members',
      'の同一シリーズ作品' : ' has other products in the same series',
      'シリーズ作品' : 'Products in series',
      '「クリックゲームシリーズ」シリーズ\（' : 'Click Game Series (',
      '/作品\\）(:|$)/g' : ' products)',
      '/\\b作品\\)(:|$)/g' : ' products)',
      'サークル紹介' : 'Circle introduction',
      '/(:|^)イラスト(:|$)/g' : 'Illustration',
      'ゲーム・動画' : 'Game / Video',
      '音声・音楽' : 'Voice / Music',
      '/(:|^)新着作品(:|$)/g' : 'New Titles',
      '対象年齢' : 'Audience',
      '/(:|^)すべて(:|$)/g' : 'All',
      '/(:|^)もっと見る(:|$)/g' : 'More',
      '/\\b年 /g' : '/',
      '/\\b本）/g' : ' titles)',
      '全年齢作品へ' : 'Products for All ages',
      '女性向け作品へ' : 'Products for Girls',
      'ゲイ向け作品へ' : 'Products for Gays',
      'VR対応作品へ' : 'Products for VR',
      '/\\b位/g' : 'th',
      'ピックアップ' : '',
      '/(:|^)女性向け(:|$)/g' : 'Females',
      '/(:|^)カテゴリ(:|$)/g' : 'Category',
      '/(:|^)作品内容(:|$)/g' : 'Content',
      '作品情報/動作環境' : 'Operational Requirements',
      'おさわりゲーム' : 'Touching Game',
      '/(:|^)全年齢(:|$)/g' : 'For all ages',
      '/(:|^)最新の(:|$)/g' : 'Latest',
      '特集をもっと見る' : 'See more…',
      '」シリーズ（' : '」series \(',
      'シリーズをもっと見る' : 'See more…',
      '/(:|^)シリーズ(:|$)/g' : 'Series',
      'サークル作品一覧' : 'Products by the Circle',
      '作品をもっと見る' : 'See more…',
      'RPGツクール' : 'RPG Tkool ',
      'RTPが必要' : 'RTP required',
      '/(:|^)他はRPG/g' : 'RPG',
      '/\\bの動作環境に準ずる。(:|$)/g' : '',
      'に対応している必要あり' : ' or greater',
      'B程度の空き容量' : 'B of free space',
      '/(:|^)バージョンアップ履歴をもっと見る(:|$)/g' : 'See more...',
      '/(:|^)不具合修正やアップデート/g' : 'Bug fixes and version updates',
      '/(:|^)不具合修正/g' : 'Bug fixes',
      '/(:|^)追加更新/g' : 'Version updates',
      '/(:|^)更新/g' : 'Version updates',
      '/(:|^)アップデート/g' : 'Version updates',
      '/(:|^)バージョンアップ/g' : 'Version updates',
      '/(:|^)バグ修正等アップデート/g' : 'Bug fixes and version updates',
      '/(:|^)不具合の修正や調整/g' : 'Bug fixes and version updates',
      '/に関しましては予定事項となります。(:|$)/g' : ' are planned for this product.',
      'ディーエルサイトコムがこれを保証するものではありません。' : 'Please be aware that DLsite does not guarantee',
      '現段階の作品内容にご了承を頂いた上でご購入下さい。' : 'version updates or the contents thereof.',
      '/(:|^)◆更新履歴◆(:|$)/g' : 'Change Log',
      '/(:|^)閲覧可能な環境(:|$)/g' : 'Compatible Devices',
      '/(:|^)対応予定デバイス(:|$)/g' : 'Compatible Devices',
      '/(:|^)ダウンロードして閲覧(:|$)/g' : 'Download and view',
      '/(:|^)ブラウザで閲覧(:|$)/g' : 'Stream in browser',
      '/(:|^)ダウンロード(:|$)/g' : 'Download',
      '/(:|^)ブラウザ/g' : 'Stream',
      '/視聴(:|$)/g' : '',
      '/(:|^)の対応バージョン(:|$)/g' : ' compatible version(s)',
      '/(:|^)すべての対応OSを表示する(:|$)/g' : 'View All OS Platforms',
      '/(:|^)販売作品(:|$)/g' : 'Releases',
      'この作品を買った人はこんな作品も買っています' : 'People who bought this item also bought',
      'こちらの作品も見られています' : 'Viewers of this item also viewed',
      '/(:|^)レビュー(:|$)/g' : 'User Reviews',
      'レビュアーに多く選ばれたジャンル' : 'Tags the reviewers selected',
      'レビュアーが選んだジャンル' : 'Tags the reviewer selected',
      'レビュー数 \: ' : 'User reviews\:',
      '/(:|^)内容一部削除(:|$)/g' : 'Partial deletion of contents',
      '/(:|^)シリーズもの(|| )(:|$)/g' : 'Serial ',
      '/着せ替え(:|$)/g' : 'Clothes Change',
      '/(:|^)専用ビューア(:|$)/g' : 'Special Viewer',
      '/(:|^)すべての作品を見る/g' : 'See All Products',
      '/(:|^)この作品は/g' : 'This product contains content also found in the following:',
      '/と(||一部)内容の重複があります。/g' : '',
      '予告開始日' : 'Submited date',
      'お気に入り登録数' : 'Favorited',
      '発売予定時期' : 'Scheduled Release',
      '予定価格' : 'Scheduled Price',
      '/\\b月上旬発売予定(:|$)/g' : ' early in the month',
      '/\\b月中旬発売予定(:|$)/g' : ' mid-month',
      '/\\b月下旬発売予定(:|$)/g' : ' late in the month',
      '/\\b月上旬(:|$)/g' : ' Early',
      '/\\b月中旬(:|$)/g' : ' Middle',
      '/\\b月下旬(:|$)/g' : ' Late',
      '/(:|^)未定(:|$)/g' : 'TBA',
      '/(:|^)体験版ダウンロード(:|$)/g' : 'Try Free Demo',
      '/(:|^)ムービーダウンロード(:|$)/g' : 'Download Movie',
      '\%還元' : '\% back',
      '/(:|^)ポイント(:|$)/g' : 'Points',
      '/(:|^)価格(:|$)/g' : 'Price',
      '/(:|^)あたらしい画像ビューワーはいかがですか？(:|$)/g' : 'How do you like the new sample viewer?',
      '/(:|^)評価する(:|$)/g' : 'Rate',
      '/(:|^)画像ビューワーの評価(:|$)/g' : 'Rate the sample viewer',
      '新しい画像ビューワーの使い心地はいかがですか？' : 'How would you rate the usability of the new sample viewer?',
      '今後の改修の参考のためにも、以下より5段階で評価していただけますと幸いです。' : 'Your feedback is highly appreciated. Please rate it on the 5-star scale.',
      '/枚(:|$)/g' : ' images',
      '/(:|^)お気に入りに入れる(:|$)/g' : 'Add to My Favorite',
      '/(:||\\n)総計/g' : 'Total size:',
      '/(:|^)DLsite専売(:|$)/g' : 'Exclusive',
      '/(:|^)体験版でご確認ください。(:|$)/g' : 'See demo/trial to confirm.',
//account
      '/(:|^)ユーザー登録（無料）(:|$)/g' : 'Create an Account',
      '/(:|^)ユーザー登録　ユーザー情報入力(:|$)/g' : 'Create an Account : Input',
      '/(:|^)ユーザー情報入力(:|$)/g' : 'Input',
      '/(:|^)確認メール受信(:|$)/g' : 'Confirmation email',
      '/(:|^)登録完了(:|$)/g' : 'Completion',
      '入力されたメールアドレス宛に「ユーザー登録のご確認」メールが送信され、' : '',
      'メールに記載されているURLをクリックすることで登録が完了致します。' : 'A membership confirmation email will be sent.',
      'dlsite.comからのメール受信を許可してください。' : ' Please make sure your mailbox allows emails from the dlsite.com domain.',
      '/(:|^)は必須項目です/g' : 'Required field',
      '/(:|^)メールアドレス(:|$)/g' : 'E-Mail Address',
      '（半角英数字）' : '',
      '携帯メールは使用できません。' : '',
      '/(:|^)ログインID(:|$)/g' : 'Login ID',
      '/半角アルファベットで始まる4～20文字の半角英数字/g' : '4 to 20 characters \/ alphabets and numerals only',
      '/(:|^)パスワード(:|$)/g' : 'Password',
      '/確認のため、再度ご入力ください。(:|$)/g' : 'Retype to confirm.',
      '/半角英数字で8～20文字/g' : '8 to 20 characters \/ alphabets and numerals only',
      '/(:|^)生年月日(:|$)/g' : 'Date of birth',
      '/(:|^)（半角数字）(:|$)/g' : 'This information will be requested',
      '/パスワード再発行で使用しますので、正確なご入力をお願いします。/g' : 'when you retrieve your ID and password.',
      '/(:|^)キャンペーンコード(:|$)/g' : 'Promotional code',
      '/(:|^)（半角英数字）(:|$)/g' : '',
      '/キャンペーンコードをお持ちの方はご入力ください。/g' : 'Please enter a promotional code if applicable.',
      '/(:|^)ディーエルサイトコムの/g' : 'Make sure to read through our',
      '/(:|^)ユーザー規約(:|$)/g' : 'User Agreement',
      '/(:|^)個人情報の取扱いについて(:|$)/g' : 'Privacy Policy',
      '/を必ずお読みください。(:|$)/g' : 'please.',
      '/(:|^)西暦(:|$)/g' : '',
      '/(:|^)年(:|$)/g' : 'Year',
      '/(:|^)月(:|$)/g' : 'Month',
      '/(:|^)日(:|$)/g' : 'Day',
      '/(:|^)ユーザー登録　入力情報の確認(:|$)/g' : 'Create an Account : Preview',
      '/(:|^)基本情報入力(:|$)/g' : 'Input',
      '/(:|^)確認メール送信(:|$)/g' : 'Confirmation email',
      'ユーザー登録　確認メール受信' : 'Receive user registration confirmation email',
      //'確認メールの送信が完了しました。' : 'Sending confirmation mail is completed.',
      //'「ユーザー登録のご確認」のメールをお送りしました。' : 'We sent an e-mail of \"Confirmation of User Registration\".',
      //'メールに記載されているURLから登録を完了してください。' : 'Please complete registration from the URL described in the email.',
      'メールが届かない場合は、迷惑メールなどに割り振られていないかご確認ください。' : 'If you didn\'t receive the e-mail, please check if it is not allocated to spam, etc.',
      //'ユーザー登録 最終確認ページ' : ''User registration final confirmation page,
      //'ご入力いただいたログインIDとパスワードでログインすることでユーザー登録が完了致します。' : 'User registration will be completed by logging in with the login ID and password you entered.',
      //'ユーザー登録　登録完了' : 'Completed uer registration',
      //'ユーザー登録が完了しました。' : 'User registration is completed.',
      //'設定が完了しました。' : 'Setting is completed.',
      '/(:|^)ユーザーログイン(:|$)/g' : 'User login',
      'ログインIDとパスワードをご入力の上、「ログイン」ボタンをクリックしてください。' : 'Enter your Login ID and password, then click \"Log In\".',
      '/(:|^)ログインIDかパスワードが正しくありません。(:|$)/g' : 'Login ID/password combination you entered is incorrect. Please try again.',
      'ログインID/パスワードを保存する' : 'Remember my ID on this computer',
      'ログインID/パスワードを忘れた方' : 'Forgot your Login ID and/or password?',
      '/（ユーザー）/g' : '(User)',
      '/（サークル）/g' : '(Circle)',
      '/(:|^)サークルログイン(:|$)/g' : 'Circle login',
      '/(:|^)新規ユーザー登録(:|$)/g' : 'New user registration',
      '/(:|^)新規サークル登録(:|$)/g' : 'New circle registration',
'/(:|^)ご指定のログインIDは使用できません。(:|$)/g' : 'Your specified login ID can not be used.',
'/(:|^)ログインIDに使用出来ない文字が含まれています。(:|$)/g' : 'Login ID contains characters that can not be used.',
      'マイページトップ' : 'My Page\: Main',
      '/(:|^)お客様(:|$)/g' : '',
      '/(:|^)マイページメニュー(:|$)/g' : 'My Page: Menu',
      '/(:|^)のマイページ(||\\W)(:|$)/g' : 'My Page',
      '/(:|^)購入済み作品(:|$)/g' : 'My Items',
      '/(:|^)お気に入り(:|$)/g' : 'My Favorites',
      '/(:|^)フォローリスト(:|$)/g' : 'Follow List',
      '/(:|^)作品評価・レビュー(:|$)/g' : 'Ratings \/ Reviews',
      '/(:|^)作品評価・レビュー(||\\W)(:|$)/g' : 'Ratings \/ Reviews',
      '/(:|^)マイ評価(:|$)/g' : 'My Ratings',
      '/(:|^)マイレビュー(:|$)/g' : 'My Reviews',
      '/(:|^)ポイント照会・履歴(:|$)/g' : 'Status \/ History',
      '/(:|^)ポイント使用(:|$)/g' : 'Use Points',
      '/(:|^)ポイント購入(:|$)/g' : 'Buy Points',
      '/(:|^)購入履歴(:|$)/g' : 'Download History',
      '/(:|^)今月の購入履歴(:|$)/g' : 'History - This month',
      '/(:|^)過去の購入履歴(:|$)/g' : 'History - All',
      '/(:|^)特典コード・クーポン(:|$)/g' : 'Coupon',
      '/(:|^)特典コード(:|$)/g' : 'Reward code',
      '/(:|^)クーポン管理(:|$)/g' : 'Coupon control',
      '/(:|^)アフィリエイト(:|$)/g' : 'Affiliate Program',
      '/(:|^)アフィリエイト管理(:|$)/g' : 'Affiliate Settings',
      '/(:|^)サービス別売上情報(:|$)/g' : 'Earnings Report',
      '/(:|^)リンク作成(:|$)/g' : 'Create a link',
      '/(:|^)各種設定(:|$)/g' : 'Various Settings',
      '/(:|^)ダウンロード制限金額(:|$)/g' : 'Purchase Limit',
      '/(:|^)メール設定(:|$)/g' : 'E-mail Notifications',
      '/(:|^)画像表示設定(:|$)/g' : 'Display',
      '/(:|^)オススメ作品表示設定(:|$)/g' : 'Recommendation Settings',
      '/(:|^)登録情報確認/変更(:|$)/g' : 'Account Information',
      '予告作品では、作品が販売開始されたことをメールでお知らせする、「お知らせメール」の設定ができます。' : 'For upcoming products, you can set your preferences to receive an email notification when a product is released.',
      '/(:|^)メールの形式は/g' : 'You can change the format of emails via ',
      'で設定できます。' : '',
      '/(:|^)表示切替 /g' : 'Display',
      '/(:|^)全て(:|$)/g' : 'All',
      '/(:|^)予告作品(:|$)/g' : 'Upcoming',
      '/(:|^)絞り込み/g' : 'Refine By',
      '/(:|^)美少女ゲーム(:|$)/g' : 'Bishoujo game',
      '/(:|^)オプション/g' : 'Options',
      '/(:|^)割引中(:|$)/g' : 'Items at Discount',
      '/(:|^)ポイントアップ中(:|$)/g' : 'Items with increased point rate',
      '/(:|^)該当する作品はありません(:|$)/g' : 'There are no matches to your search criteria.',
      '/(:|^)このページの上部へ(:|$)/g' : 'Back to Top',
      '/(:|^)他の販売フロアへ(:|$)/g' : 'Sale place',
      '/(:|^)評価アイコンについて(:|$)/g' : 'About ratings',
      '/(:|^)購入日の新しい順(:|$)/g' : 'Purchase - New to Old',
      '/(:|^)購入日の古い順(:|$)/g' : 'Purchase - Old to New',
      '/(:|^)作品名の昇順(あ→ん)(:|$)/g' : 'Title - A to Z',
      '/(:|^)作品名の降順(ん→あ)(:|$)/g' : 'Title - Z to A',
      '/(:|^)サークルIDの昇順(:|$)/g' : 'Circle ID - Ascending',
      '/(:|^)サークルIDの降順(:|$)/g' : 'Circle ID - Descending',
      '/(:|^)価格の高い順(:|$)/g' : 'Price - High to Low',
      '/(:|^)価格の安い順(:|$)/g' : 'Price - Low to High',
      '/(:|^)評価の高い順(:|$)/g' : 'Rating - High to Low',
      '/(:|^)評価の低い順(:|$)/g' : 'Rating - Low to High',
      '/(:|^)未評価(:|$)/g' : 'Not rated yet',
      '/(:|^)評価済み(:|$)/g' : 'Already rated',
      '/(:|^)便利な機能(:|$)/g' : 'Useful Functions',
      '/(:|^)作品評価でポイントGET!(:|$)/g' : 'Rate and earn points!',
      '/(:|^)販売終了お知らせメール(:|$)/g' : 'End of sale information',
      '/(:|^)画像表示制限機能(:|$)/g' : 'Imagery Filter Settings',
      '/(:|^)ポイント照会(:|$)/g' : 'Point status',
      '/(:|^)現在のポイント(:|$)/g' : 'Your points',
      '/(:|^)有効期限(:|$)/g' : 'Expiry date',
      '/(:|^)ポイント利用履歴(:|$)/g' : 'Point history',
      '/(:|^)1ヶ月以内のポイント取得・使用履歴を表示します。(:|$)/g' : 'You can check your history of points you have earned or used in last 30 days.',
      '/(:|^)ポイント取得・使用履歴はありません(:|$)/g' : 'No archive.',
      '/(:|^)今月購入分に使用(:|$)/g' : 'Used for purchase this month',
      '/(:|^)アイテム交換(:|$)/g' : 'Item exchange',
      '/(:|^)支払いに使用する(:|$)/g' : 'Use for payment',
      '/(:|^)前払い決済でご利用のお客様へ(:|$)/g' : 'For customers using prepaid settlement',
      '/(:|^)こちらからは後払い（コンビニ・銀行振込・郵便振替）ご利用分の次回ご請求金額に対してポイントをお使いいただけます。(:|$)/g' : 'From here you can use points for post-payment (convenience store, bank transfer, postal transfer) next time billing amount used.',
      '/(:|^)前払い（クレジットカード・電子マネー決済）でご利用のお客様は、カートから行っていただけるご購入手続きにてポイントをご使用ください。(:|$)/g' : 'Customers using prepaid (credit card / electronic money), please use the points in the purchase procedure you can do from the cart.',
      '/(:|^)DLsite.comで使用できるポイントを購入することができます。ご希望のポイントとお支払い方法を選択してください。(:|$)/g' : 'You can buy points to use on DLsite.com here. Please select the number of points and payment method using the form below.',
      '/(:|^)(||\\W)ポイント購入のみで利用可能な決済もございます。詳細は/g' : 'There is also a settlement that can be used only by purchasing points. Please see ',
      '/(:|^)ポイント購入限定決済(:|$)/g' : 'Point purchase limited settlement',
      '/(:|^) \\]をご覧ください。(:|$)/g' : ' \] for details',
      '/「ドコモ ケータイ払い」「WebMoney」をご利用の方は、こちらから購入手続きを行ってください。/g' : 'If you use "\"DOCOMO mobile payment\" or \"WebMoney\", please do purchase procedure from here.',
      '/(:|^)全年齢向けサイトに切替(:|$)/g' : 'Switch to All ages site',
      '/(:|^)DLsite.comおよび遷移先の各決済サイトで決済手続きを中断しますと、自動的にキャンセル扱いになります。(:|$)/g' : 'If you cancel the settlement procedure at DLsite.com and each settlement site at the transition destination, it will be automatically canceled.',
      '/(:|^)ご購入後のポイントの変更・取消は承りかねますので、あらかじめご了承ください。(:|$)/g' : 'Please note that changes / cancellation of points after purchase can not be accepted.',
      '/(:|^)「ドコモ ケータイ払い」「WebMoney」「Yahoo!ウォレット」で購入できるポイントは10,000ポイント（10,000円）が上限となります。(:|$)/g' : 'The maximum points that can be purchased with \"DOCOMO mobile payment\", \"WebMoney\" and \"Yahoo! Wallet\" is limited to 10,000 points (10,000 yen).',
      '/(:|^)ポイント反映について(:|$)/g' : 'About point reflection',
      '/(:|^)電子マネー、ネットバンク、コンビニ前払い、銀行振込（バーチャル口座）をご利用の場合、ポイント反映までにお時間をいただく場合がございます。詳細は/g' : 'If you use e-money, net bank, convenience store prepayment, bank transfer (virtual account), it may take time to reflect points. Please see ',
      '/(:|^)ヘルプ(:|$)/g' : 'Help',
      '/(:|^)支払い方法選択(:|$)/g' : 'Select payment method',
      '/(:|^)クレジットカード・Vプリカ(:|$)/g' : 'Credit card \[ VISA, MasterCard, JCB, V-Preca \]',
      '/(:|^)電子マネー ・ ネットバンク ・ コンビニ前払い ・ 銀行振込（バーチャル口座）(:|$)/g' : 'E-money, net bank, convenience store prepayment, bank transfer (virtual account)',
      '/(:|^)ビットキャッシュ(:|$)/g' : 'BitCash',
      '/(:|^)Yahoo!ウォレット(:|$)/g' : 'Yahoo! Wallet',
      '/(:|^)ポイント選択(:|$)/g' : 'Point selection',
      '/(:|^)電話番号入力(:|$)/g' : 'Phone number',
      '/(:|^)電話番号を入力してください。(:|$)/g' : 'Please enter the phone number.',
      '/(:|^)販売作品一覧(:|$)/g' : 'Releases List',
      '/(:|^)販売作品数(:|$)/g' : 'Number of products',
      '/(:|^)のプロフィール(:|$)/g' : 'Profile',
      '/(:|^)すべて表示する(:|$)/g' : 'Show all',
      '/(:|^)アフィリエイトリンクの作成(:|$)/g' : 'Create Affiliate Links',
      '/(:|^)ユーザー用(:|$)/g' : 'For Members',
      '/(:|^)サークル用(:|$)/g' : 'For Circle',
      '/(:|^)人気キーワード/g' : 'Top Keywords',
      '/\\b 作品(:|$)/g' : ' products',
      '/(:|^)ディーゼルマイン(:|$)/g' : 'Dieselmine',
      '/(:|^)ランドカット(:|$)/g' : 'landcut',
      '/(:|^)ツイート(:|$)/g' : 'Tweet',
      '/(:|^)ルさんちまん(:|$)/g' : 'Ressentiment',
      '/(:|^)梅麻呂3D(:|$)/g' : 'Umemaro 3D',
      '/(:|^)せるふぃっしゅ(:|$)/g' : 'SELFISH',
      '/(:|^)もくぎゅうたん。(:|$)/g' : 'Moku Gyutan',
      '/(:|^)U羅漢(:|$)/g' : 'Urakan',
      '/(:|^)とろとろレジスタンス(:|$)/g' : 'Toro Toro Resistance',
      '/(:|^)公式サイト(:|$)/g' : 'Website',
      '/(:|^)同人作品を探す(:|$)/g' : 'Search by Genre',
      '/(:|^)DLsite blog 最新記事(:|$)/g' : 'Latest posts on DLsite blog',
      '/(?:^|)アフィリエイトリンク作成(?:|$)/g' : 'Create Affiliate Links',
      '/(:|^)クリエイター名(:|$)/g' : 'Creator\'s name',
      '/サークル、ブランド、著者、出版社を含む(:|$)/g' : 'Including circle, brand, author, publisher',
      '/ 作家、シナリオ、イラスト、声優、音楽、サークルメンバーを含む(:|$)/g' : ' Including writers, scenarists, illustrators, voice actors, composer, circle members',
      '/(:|^)独占販売:(:|$)/g' : 'Exclusive sale:',
      '/(:|^)独占販売作品(:|$)/g' : 'Exclusive products',
      '/(:|^)音楽・音声(:|$)/g' : 'Voice / Music',
//        '/(:|^)(:|$)/g' : '',
//        '/(:|^)(:|$)/g' : '',
      '/(:|^)ポイント(||\\W)(:|$)/g' : 'Points test',
      '/ポイント/g' : 'Points',
      '/(:|^)使用方法/g' : 'Usage rules',
      '/(:|^)円(:|$)/g' : ' JPY',
      '/\\b円/g' : ' JPY',
      'サークル一覧' : 'Circles',
      '/(:|^)ブランド名(:|$)/g' : 'Brand name',
      '成人向けすべて' : 'Adult All',
      '成人向け同人' : 'Adult Doujin',
      '成人向けPCソフト' : 'Adult PC soft',
      '同人ゲーム' : 'Doujin Game',
      'アプリケーション' : 'Executable File',
      //'バージョンアップ情報' : 'Upgrade Information',
      '販売日' : 'Release',
      '最終更新日' : 'Last Modified',
      '原画' : 'Art',
      'シナリオ' : 'Scenario',
      '声優' : 'Voice',
      '年齢指定' : 'Age Ratings',
      '18禁' : 'R18+',
      '作品形式' : 'Categories',
      'ファイル形式' : 'File Format',
      'DLsite blogへ' : 'DLsite blog',
      '同人作品' : 'Doujin',
      'PCゲーム' : 'PC game',
      '電子書籍' : 'E-book',
      '全年齢向け' : 'All ages',
      'R指定' : 'R-15',
      '成人向け' : 'Adult ',
      '表示順序' : 'Sort by',
      '通常表示' : 'Standard view',
      '画像のみ' : 'Gallery view',
      '割引中の作品' : 'Items at Discount',
      '販売開始日' : 'Release Date',
      '指定なし' : 'All',
      '1週間以内' : 'Last 7 days',
      '1ヶ月以内' : 'Last 30 days',
      '1年以内' : 'Past 12 months',
      'それ以前' : 'Older',
      '価格帯' : 'Price Range',
      '販売状況' : 'Sale status',
      '販売中' : 'Products available for sale',
      '予告中' : 'Upcoming products',
      '指定しない' : 'All',
      '/(:|^)全/g' : '',
//        '/(:|^)(:|$)/g' : '',
//        '/(:|^)/g' : '',
//        '/(:|$)/g' : '',
//        '//g' : '',
//        '/\\b/g' : ' ',
//        '' : '',


    
  ///////////////////////////////////////////////////////
  '':''};











  //////////////////////////////////////////////////////////////////////////////
  // This is where the real code is
  // Don't edit below this
  //////////////////////////////////////////////////////////////////////////////

  var regexs = [], replacements = [],
      tagsWhitelist = ['INPUT', 'TEXTAREA'],
      rIsRegexp = /^\/(.+)\/([gim]+)?$/,
      word, text, texts, i, userRegexp;

  // prepareRegex by JoeSimmons
  // used to take a string and ready it for use in new RegExp()
  function prepareRegex(string) {
      return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
  }

  // function to decide whether a parent tag will have its text replaced or not
  function isTagOk(tag) {
      return tagsWhitelist.indexOf(tag) === -1;
  }

  delete words['']; // so the user can add each entry ending with a comma,
                    // I put an extra empty key/value pair in the object.
                    // so we need to remove it before continuing

  // convert the 'words' JSON object to an Array
  for (word in words) {
      if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
          userRegexp = word.match(rIsRegexp);

          // add the search/needle/query
          if (userRegexp) {
              regexs.push(
                  new RegExp(userRegexp[1], 'g')
              );
          } else {
              regexs.push(
                  new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
                      return fullMatch === '\\*' ? '*' : '[^ ]*';
                  }), 'g')
              );
          }

          // add the replacement
          replacements.push( words[word] );
      }
  }

  // do the replacement
  texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
  for (i = 0; text = texts.snapshotItem(i); i += 1) {
      if ( isTagOk(text.parentNode.tagName) ) {
          regexs.forEach(function (value, index) {
              text.data = text.data.replace( value, replacements[index] );
          });
      }
  }

doAfterReplacements();
}());