(this.webpackJsonpmusic_bubbles=this.webpackJsonpmusic_bubbles||[]).push([[0],{29:function(e,a,n){},30:function(e,a,n){},31:function(e,a,n){},32:function(e,a,n){},35:function(e,a){},37:function(e,a){},47:function(e,a,n){"use strict";n.r(a);var i=n(0),t=n(1),o=n.n(t),c=n(22),r=n.n(c),s=(n(29),n(30),n(5));n(31),n(32);var l=function(e){return Object(i.jsx)("div",{className:"outer",onClick:function(){e.onClick(e.title)},children:Object(i.jsx)("div",{className:"nameSmall",children:e.title})})},u=n(9),d=n.p+"static/media/JeVivroieLiement-GuillaumeDeMachaut.e34985eb.mp3",m=n.p+"static/media/D'o\xf9VientCelaBelle-ClaudindeSermisy.b678a094.mp3",p=n.p+"static/media/LittleFugueInGMinor-JSBach.89c4dd4e.mp3",h=n.p+"static/media/mozart.6e966921.mp3",b=n.p+"static/media/Serenade-Schubert.a5157acc.mp3",j=n.p+"static/media/CarmenOverture-Bizet.4f6983ce.mp3",g=n.p+"static/media/ClairDeLune-ClaudeDebussy.e777a3a3.mp3",O=n.p+"static/media/StringQuarterNo8-BenJohnston.e3a7e6e4.mp3",C=[d,m,p,h,b,j,g,O],f=Object(u.a)('name,description,audio file name,parent,child\n"Medieval","Created Western classical nomenclature, i.e. Music Theory","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"\n"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon.","../audio/D\'o\xf9VientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"\n"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect.","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"\n"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart","../audio/mozart.mp3","Baroque","Early Romantic"\n"Early Romantic","Oh amore mio, che meraviglia e lirica.","../audio/Serenade-Schubert.mp3","Classical","Romantic"\n"Romantic","Intense, emotional, Opera-tic: Exaggeration is the name, and Tchaikofsky is a brain.","../audio/CarmenOverture-Bizert.mp3","Early Romantic","Impressionist"\n"Impressionist","Colorful, atonal, and valuing the artist\'s voice above all else.","../audio/ClairDeLune-ClaudeDebussy","Romantic","Contemporary","../audio/ClairDeLune-ClaudeDebussy"\n"Contemporary","Begone limitations, it\'s our time to stretch the horizons.","../audio/StringQuartetNo8-BenJohnston.mp3","Impressionist",""',{header:!0}),v=0;var y=function(e){var a=Object(t.useState)(e.parent),n=Object(s.a)(a,2),o=n[0],c=n[1],r=Object(t.useState)(e.childOne),u=Object(s.a)(r,2),d=u[0],m=u[1],p=Object(t.useState)(e.genre),h=Object(s.a)(p,2),b=h[0],j=h[1],g=Object(t.useState)(e.info),O=Object(s.a)(g,2),y=O[0],B=O[1],S=Object(t.useState)(e.song),R=Object(s.a)(S,2),x=R[0],L=R[1],M=Object(t.useRef)(),D=function(e){L(e),M.current&&(M.current.pause(),M.current.load(),M.current.play())};return Object(i.jsxs)("div",{className:"Big",children:[Object(i.jsx)(l,{title:o,onClick:function(e){--v>-1?(c(f.data[v].parent),m(f.data[v].child),j(f.data[v].name),B(f.data[v].description),D(C[v]),console.log("clicked")):v++}}),Object(i.jsxs)("div",{className:"inner",children:[Object(i.jsx)("div",{className:"name",children:b}),Object(i.jsx)("p",{}),Object(i.jsxs)("audio",{controls:!0,ref:M,children:[Object(i.jsx)("source",{src:x,type:"audio/mpeg"}),"Music not supported"]}),Object(i.jsx)("p",{}),Object(i.jsx)("div",{className:"info",children:y})]}),Object(i.jsx)(l,{title:d,onClick:function(e){++v<8?(c(f.data[v].parent),m(f.data[v].child),j(f.data[v].name),B(f.data[v].description),D(C[v]),console.log("clicked")):v--}})]})};var B=function(){var e=Object(u.a)('name,description,audio file name,parent,child\n"Medieval","Created Western classical nomenclature, i.e. Music Theory","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"\n"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon.","../audio/D\'o\xf9VientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"\n"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect.","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"\n"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart","../audio/mozart.mp3","Baroque","Early Romantic"\n"Early Romantic","Oh amore mio, che meraviglia e lirica.","../audio/Serenade-Schubert.mp3","Classical","Romantic"\n"Romantic","Intense, emotional, Opera-tic: Exaggeration is the name, and Tchaikofsky is a brain.","../audio/CarmenOverture-Bizert.mp3","Early Romantic","Impressionist"\n"Impressionist","Colorful, atonal, and valuing the artist\'s voice above all else.","../audio/ClairDeLune-ClaudeDebussy","Romantic","Contemporary"\n"Contemporary","Begone limitations, it\'s our time to stretch the horizons.","../audio/StringQuartetNo8-BenJohnston.mp3","Impressionist",""',{header:!0});return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(y,{parent:e.data[0].parent,childOne:e.data[0].child,genre:e.data[0].name,song:d,info:e.data[0].description})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(a){var n=a.getCLS,i=a.getFID,t=a.getFCP,o=a.getLCP,c=a.getTTFB;n(e),i(e),t(e),o(e),c(e)}))};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.d185eef7.chunk.js.map