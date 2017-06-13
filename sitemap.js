<!DOCTYPE html>

<html>

<head>

<meta charset="utf-8">

<title>Sitemap</title>

<meta content='width=device-width, initial-scale=1' name='viewport'>

<style>

/* Sitemaps */ #sitemap-tab{padding:7px 10px;margin:0 auto 20px} #sitemap-tab table{width:auto;margin:0 auto} #sitemap-tab form{font:inherit} #sitemap-tab label{display:block;text-align:right;margin:0 10px 0 0;padding:4px 0 0} #sitemap-tab select[disabled]{opacity:.4} #post-searcher{display:block;margin:0;padding:0} #sitemap-tab input{width:100%;border:1px solid #dedede;border-radius:5px;margin:0;padding:5px;text-transform:capitalize!important;outline:0;color:#333!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box} #sitemap-tab select{width:100%;border:1px solid #dedede;border-radius:5px;margin:0 0 5px;padding:5px;text-transform:capitalize!important;outline:0;color:#333!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box} #sitemap-tab select option{min-height:1.4em!important;} #sitemap-tab input#feed-q{padding:5px 10px!important;} #sitemap-container{background:#fff;display:block;clear:both;margin:0;padding:0;list-style:none;overflow:hidden;position:relative;border-top:none} #sitemap-container li{list-style:none;margin:0;padding:0;display:inline} #sitemap-container li a{text-decoration:none;color:#2C2C2C;font-weight:bold;font-size:16px} #sitemap-container li a:hover{text-decoration:none;color:#E94141} #sitemap-container li img{float:left;margin:0 15px 15px 0;padding:0;width:70px;height:50px;!important} #sitemap-nav{margin:10px 0 30px;text-align:center;font-weight:500;width:100%} #sitemap-nav a,#sitemap-nav span{color:#fff;text-decoration:none;display:block;opacity:.8} #sitemap-nav a:hover,#sitemap-nav span:hover{opacity:1} #sitemap-nav span{cursor:wait} @media (max-width:600px){#sitemap-tab table{margin:0 auto;width:100%} #sitemap-container,#sitemap-tab{margin:0 auto} #sitemap-container li .inner{margin:5px auto;height:auto;} #SitemaContainer li{float:none;display:block;width:auto;height:auto} #sitemap-container li .news-text, #sitemapContainer:after,#sitemap-container li img{display:none!important}

</style>

</head>

<body>



<div id="sitemap-tab">



  <table>

    <tbody>

      <tr>

        <td>

          <label for="feed-order">Urutkan artikel berdasarkan:</label>

        </td>

        <td>

          <select id="feed-order">

            <option selected="" value="published">Artikel terbaru</option>

            <option value="updated">Artikel yang terakhir di update</option>

          </select>

        </td>

      </tr>

      <tr>

        <td>

          <label for="label-sorter">Filter artikel berdasarkan kategori:</label>

        </td>

        <td>

          <select disabled="" id="label-sorter">

            <option selected="">Loading....</option>

          </select>

        </td>

      </tr>

      <tr>

        <td>

          <label for="feed-q">Cari artikel dengan kata kunci:</label>

        </td>

        <td>

          <form id="post-searcher">

            <input id="feed-q" placeholder="Ketik dan tekan ENTER" type="text" />

          </form>

        </td>

      </tr>

    </tbody>

  </table>

</div>

<br />

<header id="result-desc"></header>

<br />

<ul id="sitemap-container"></ul>

<div id="sitemap-nav">

</div>



<script type='text/javaScript'>

document.write;var loadToc,loadCategories,_toc={init:function(){var cfg={url:'https://caritau-musikterkini.blogspot.com/',maxResults:10,numChars:270,thumbWidth:140,thumbHeight:95,navText:"Tampilkan artikel selanjutnya &#9660;",resetToc:"Kembali ke Awal",noImage:"//2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1100/no-thumbnail.png",loading:"<span>Memuat...</span>",counting:"<div>Memuat artikel...</div>",searching:"<span>Mencari...</span>"},w=window,d=document,el=function(id){return d.getElementById(id);},o={a:el('feed-order'),b:el('label-sorter').parentNode,c:el('post-searcher'),d:el('feed-q'),e:el('result-desc'),f:el('sitemap-container'),g:el('sitemap-nav'),h:d.getElementsByTagName('head')[0],i:0,j:null,k:'published',l:0,m:""},fn={a:function(){old=el('temporer-script');old.parentNode.removeChild(old);},b:function(param){var script=d.createElement('script');script.type="text/javascript";script.id="temporer-script";script.src=param;if(el('temporer-script'))fn.a();o.h.appendChild(script);},c:function(mode,tag,order){o.i++;o.e.innerHTML=cfg.counting;o.g.innerHTML=cfg[mode==1?"searching":"loading"];if(mode===0){fn.b(tag!==null?cfg.url+'/feeds/posts/summary/-/'+ tag+'?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc':cfg.url+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc');}else if(mode==1){fn.b(cfg.url+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&q='+ tag+'&orderby='+ order+'&callback=loadToc');} o.j=(tag!==null)?tag:null;o.l=mode;o.a.disabled=true;o.b.children[0].disabled=true;},d:function(json){var _h;o.g.innerHTML="";o.e.innerHTML=o.l==1?'<span>Hasil penelusuran untuk kata kunci <b>&#8220;'+ o.m+'&#8221;</b> ('+ json.feed.openSearch$totalResults.$t+' Hasil)</span>':'<div>Total: '+ json.feed.openSearch$totalResults.$t+' Artikel</div>';if("entry"in json.feed){var a=json.feed.entry,b,c,_d,e="0 Komentar",f="",g;for(var i=0;i<cfg.maxResults;i++){if(i==a.length)break;b=a[i].title.$t;_d=("summary"in a[i])?a[i].summary.$t.replace(/<br ?\/?>/ig," ").replace(/<(.*?)>/g,"").replace(/<iframe/ig,"").substring(0,cfg.numChars):"";g=("media$thumbnail"in a[i])?a[i].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+""):cfg.noImage.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+"");for(var j=0,jen=a[i].link.length;j<jen;j++){c=(a[i].link[j].rel=="alternate")?a[i].link[j].href:"#";} for(var k=0,ken=a[i].link.length;k<ken;k++){if(a[i].link[k].rel=="replies"&&a[i].link[k].type=="text/html"){e=a[i].link[k].title;break;}} _h=d.createElement('li');_h.innerHTML='<div class="inner"><img style="width:'+ cfg.thumbWidth+'px;height:'+ cfg.thumbHeight+'px;" src="'+ g+'" alt="'+ b+'"><a class="toc-title" href="'+ c+'" target="_blank" title="'+ b+'">'+ b+'</a><div class="news-text">'+ _d+'&hellip;<br style="clear:both;"></div></div>';o.f.appendChild(_h);} _h=d.createElement('a');_h.href='#load-more';_h.innerHTML=cfg.navText;_h.onclick=function(){fn.c(o.l,o.j,o.k);return false;};}else{_h=d.createElement('a');_h.href='#reset-content';_h.innerHTML=cfg.resetToc;_h.onclick=function(){o.i=-1;o.e.innerHTML=cfg.counting;o.f.innerHTML="";fn.c(0,null,'published');o.a.innerHTML=o.a.innerHTML;o.b.children[0].innerHTML=o.b.children[0].innerHTML;return false;};} o.g.appendChild(_h);o.a.disabled=false;o.b.children[0].disabled=false;},e:function(json){var a=json.feed.category,b='<select id="label-sorter"><option value="" selected disabled>Pilih Kategori...</option>';for(var i=0,len=a.length;i<len;i++){b+='<option value="'+ encodeURIComponent(a[i].term).replace(/%20/g, " ")+'">'+ encodeURIComponent(a[i].term).replace(/%20/g, " ")+'</option>';} b+='</select>';o.b.innerHTML=b;o.b.children[0].onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.loading;fn.c(0,this.value,o.k);};}};loadToc=fn.d;loadCategories=fn.e;fn.b(cfg.url+'/feeds/posts/summary?alt=json-in-script&start-index='+(o.i+ 1)+'&max-results='+ cfg.maxResults+'&orderby=published&callback=loadToc');fn.b(cfg.url+'/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories');o.a.onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.counting;o.b.children[0].innerHTML=o.b.children[0].innerHTML;fn.c(0,null,this.value);o.k=this.value;};o.c.onsubmit=function(){o.i=-1;o.f.innerHTML="";o.m=o.d.value;fn.c(1,o.d.value,o.k);return false;};}};_toc.init();

</script>

<div class='clear'></div>

</div>

</div>

</div>

<div class='inline-ad'>

</div>

        </div></div>

</body>

</html>
