var PurpleMine;(PurpleMine=PurpleMine||{}).HistoryTabs=function(){"use strict";var a,n={en:{all:"All",notes:"Notes",details:"Changes"},ro:{all:"Toate",notes:"Note",details:"Schimbări"},fr:{all:"Tout",notes:"Remarques",details:"Changements"},pl:{all:"Wszystko",notes:"Notatki",details:"Zmiany"},de:{all:"Alles",notes:"Kommentare",details:"Änderungen"},ja:{all:"すべて",notes:"注記",details:"変更"}};var r=function(){var e=$(this),t=e.attr("data-tab");a.$tabs.removeClass("selected"),e.addClass("selected"),a.$history.removeClass("hide-details").removeClass("hide-notes"),"notes"===t?a.$history.addClass("hide-details"):"details"===t&&a.$history.addClass("hide-notes")};return function(){if(a)return a;var e,t,i,s;(a=this).$tabsContainer=null,this.$tabs=null,this.$history=$("#history"),this.lang=document.documentElement.lang,void 0===n[this.lang]&&(this.lang="en"),this._=n[this.lang],0<this.$history.length&&(e="",s="</a></li>",e+='<div class="tabs"><ul>',e+=(t='<li><a href="javascript:;" class="')+"selected "+(i='history-tab" data-tab="')+'all">'+a._.all+s,e+=t+i+'notes">'+a._.notes+s,e+=t+i+'details">'+a._.details+s,e+="</ul></div>",a.$tabsContainer=$(e),$("#history > h3").after(a.$tabsContainer),a.$tabs=a.$tabsContainer.find(".history-tab"),a.$tabs.on("click",r),a.$history.find(".has-notes:first").addClass("first-of-notes"),a.$history.find(".has-details:first").addClass("first-of-details"))}}(),(PurpleMine=PurpleMine||{}).MenuCollapse=function(){"use strict";var n,t={en:{topMenuToggler:"Expand/collapse top menu"},ro:{topMenuToggler:"Deschide/închide meniul de sus"},fr:{topMenuToggler:"Développer/réduire le menu principal"},pl:{topMenuToggler:"Zwiń/rozwiń górne menu"},de:{topMenuToggler:"Ein-/Ausklappen Hauptmenu"},ja:{topMenuToggler:"トップメニューの展開/折りたたみ"}};function e(){if(n)return n;for(var e in(n=this).lang=document.documentElement.lang,void 0===t[this.lang]&&(this.lang="en"),this._=t[this.lang],this.menus={top:{$el:$("#top-menu")}},this.menus)this.menus.hasOwnProperty(e)&&0<this.menus[e].$el.length&&i(e)}function i(e){if("none"===n.menus[e].$el.css("maxHeight"))return!1;var t,i,s,a;n.menus[e].collapsed=!0,window.localStorage&&(n.menus[e].collapsed=null===localStorage.getItem(r(e))),i=(t=e)+"-menu-toggler",s=n._[t+"MenuToggler"],a='<a href="javascript:;" class="'+i+'" title="'+s+'"></a>',n.menus[t].$toggler=$(a),n.menus[t].$el.prepend(n.menus[t].$toggler),n.menus[t].$toggler.on("click",{menu:t},n.toggleMenu),!1===n.isCollapsed(e)&&n.expandMenu(e)}function r(e){return"PurpleMine:"+e+"MenuExpanded"}return e.prototype.toggleMenu=function(e){var t=e.data.menu||"";n.isCollapsed(t)?n.expandMenu(t):n.collapseMenu(t)},e.prototype.isCollapsed=function(e){return this.menus[e].collapsed},e.prototype.expandMenu=function(e){this.menus[e].$el.addClass("expanded"),this.menus[e].$toggler.addClass("expanded"),this.menus[e].collapsed=!1,window.localStorage&&localStorage.setItem(r(e),"x")},e.prototype.collapseMenu=function(e){this.menus[e].$el.removeClass("expanded"),this.menus[e].$toggler.removeClass("expanded"),this.menus[e].collapsed=!0,window.localStorage&&localStorage.removeItem(r(e))},e}(),(PurpleMine=PurpleMine||{}).RevisionGraph=function(e,t,i){"use strict";var s=t,a=$.map(s,function(e){return e}),n=a.length-1,r=$("table.changesets tr.changeset");null!==revisionGraph?revisionGraph.clear():revisionGraph=new Raphael(e);var o=revisionGraph.set(),l=r.first().find("td").first().position().left-$(e).position().left,d=$(e).position().top,p=l+20*(i+1),u=r.last().position().top+r.last().height()-d;revisionGraph.setSize(p,u);var h,c,g,m,b,f,v,w,C=["#e74c3c","#2989D8","#019851","#ed820c","#4183c4"];if(i>=C.length){Raphael.getColor.reset();for(var M=0;M<=i;M++)C.push(Raphael.getColor(.9))}$.each(a,function(e,i){i.hasOwnProperty("space")||(i.space=0),g=r.eq(n-i.rdmid).position().top-d+17,c=l+10+20*i.space,revisionGraph.circle(c,g,3.5).attr({fill:C[i.space],stroke:"none"}).toFront(),$.each(i.parent_scmids,function(e,t){(h=s[t])?(h.hasOwnProperty("space")||(h.space=0),b=r.eq(n-h.rdmid).position().top-d+17,m=l+10+20*h.space,f=h.space===i.space?revisionGraph.path(["M",c,g,"V",b]):revisionGraph.path(["M",c,g,"C",c,g,c,g+(b-g)/2,c+(m-c)/2,g+(b-g)/2,"C",c+(m-c)/2,g+(b-g)/2,m,b-(b-g)/2,m,b])):f=revisionGraph.path(["M",c,g,"V",u]),f.attr({stroke:C[i.space],"stroke-width":1.5}).toBack()}),(w=revisionGraph.circle(c,g,10)).attr({fill:"#000",opacity:0,cursor:"pointer",href:i.href}),null!==i.refs&&0<i.refs.length&&((v=document.createElementNS(revisionGraph.canvas.namespaceURI,"title")).appendChild(document.createTextNode(i.refs)),w.node.appendChild(v)),o.push(w)}),o.toFront()},$(function(){"use strict";window.drawRevisionGraph&&(window.drawRevisionGraph=PurpleMine.RevisionGraph,$(window).resize())}),(PurpleMine=PurpleMine||{}).SidebarToggler=function(){"use strict";var i,e={en:{toggler:"Toggle sidebar"},ro:{toggler:"Deschide/închide bara laterală"},fr:{toggler:"Basculer la barre latérale"},pl:{toggler:"Pokaż/ukryj panel boczny"},ja:{toggler:"サイドバーの切り替え"}};function t(){if(i)return i;(i=this).sidebarVisible=!0,this.sidebarHiding=null,this.$toggler=null,this.$main=$("#main"),this.$sidebar=$("#sidebar"),this.lang=document.documentElement.lang,void 0===e[this.lang]&&(this.lang="en"),this._=e[this.lang],"relative"===this.$main.css("position")&&$(window).load(function(){$("#context-menu").appendTo("#wrapper3")}),function(){window.localStorage&&(i.sidebarVisible=null===localStorage.getItem("PurpleMine:sidebarHidden"));0<i.$sidebar.length&&!1===i.$main.hasClass("nosidebar")&&(e='<a href="javascript:;" class="sidebar-toggler" title="'+i._.toggler+'"></a>',i.$toggler=$(e),i.$main.append(i.$toggler),i.$toggler.on("click",i.toggleSidebar),t=document.getElementsByTagName("body")[0],!(window.onkeydown=function(e){t===e.target&&83===e.keyCode&&!1===e.ctrlKey&&!1===e.altKey&&!1===e.shiftKey&&i.toggleSidebar()})===i.sidebarVisible&&i.hideSidebar(!0));var t;var e}()}return t.prototype.toggleSidebar=function(){i.sidebarVisible?i.hideSidebar():i.showSidebar()},t.prototype.hideSidebar=function(e){!0===e?this.$sidebar.addClass("sidebar-hiding sidebar-hidden"):(this.$sidebar.addClass("sidebar-hiding"),this.sidebarHiding=setTimeout(function(){i.$sidebar.addClass("sidebar-hidden")},500)),this.$toggler.addClass("sidebar-hidden"),this.sidebarVisible=!1,window.localStorage&&localStorage.setItem("PurpleMine:sidebarHidden","x")},t.prototype.showSidebar=function(){clearTimeout(this.sidebarHiding),i.$sidebar.removeClass("sidebar-hidden"),setTimeout(function(){i.$sidebar.removeClass("sidebar-hiding")},50),this.$toggler.removeClass("sidebar-hidden"),this.sidebarVisible=!0,window.localStorage&&localStorage.removeItem("PurpleMine:sidebarHidden")},t}(),$(function(){"use strict";new PurpleMine.SidebarToggler,new PurpleMine.HistoryTabs,new PurpleMine.MenuCollapse});
