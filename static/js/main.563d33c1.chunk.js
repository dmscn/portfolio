(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){e.exports={softBlack:"#011C27",darkBlue:"#090088",purple:"#930077",magenta:"#e4007c",mustard:"#ffbd39"}},30:function(e,t,n){e.exports=n(62)},35:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),o=n.n(c),i=(n(35),n(11)),u=n.n(i),l=n(23),f=n(2),s=n(15),m=n(25),d={colors:n.n(m).a},p=n(5),b=n.n(p),h=n(9),v=n(4),g=n(3);function E(){var e=Object(v.a)(["\n  ","\n"]);return E=function(){return e},e}var j=Object(f.b)("div")(g.c,g.b),w={base:{display:"flex"},full:{minHeight:"100vh",maxWidth:"100vw"},center:{justifyContent:"center",alignItems:"center"},column:{flexDirection:"column"}},O=Object(f.b)(j).attrs(function(e){var t=e.center,n=e.full,r=e.column;return Object(h.a)({},w.base,n&&w.full,t&&w.center,r&&w.column)})(E(),g.a);function k(){var e=Object(v.a)(["\n  font-weight: 400;\n  color: ",";\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 600ms step-end infinite;\n"]);return k=function(){return e},e}function y(){var e=Object(v.a)(["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"]);return y=function(){return e},e}var x=Object(f.c)(y()),S=f.b.span(k(),function(e){return e.color||"black"},x),z=function(e){return a.a.createElement(S,e,"|")};function B(e){return a.a.createElement(O,{center:!0,full:!0,column:!0,color:"white"},a.a.createElement(b.a,{loop:!0,cursor:a.a.createElement(z,{color:"white"})},a.a.createElement(b.a.Delay,{ms:50}),a.a.createElement("h1",null,"Work in Progress..."),a.a.createElement(b.a.Backspace,{count:20,delay:1500,speed:25})),a.a.createElement("h3",null,"Coming soon"))}function C(){var e=Object(v.a)([""]);return C=function(){return e},e}var W=Object(f.b)("div")(g.c,g.a,g.d),A={light:{color:"white"},heading:{fontSize:64,fontWeight:600},title:{fontSize:32,fontWeight:600},subtitle:{fontSize:30,fontWeight:600},body:{fontSize:16}},J=Object(f.b)(W).attrs(function(e){var t=e.light,n=e.variant,r=void 0===n?"body":n;return Object(h.a)({},A[r],t&&A.light)})(C()),L=function(e){var t=["JavaScript","ES8","React","Angular","Vue.js"].map(function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{variant:"title",light:!0},e),a.a.createElement(b.a.Backspace,{count:e.length,delay:1500,speed:25}))});return a.a.createElement(O,{full:!0,center:!0,column:!0},a.a.createElement(J,{variant:"heading",light:!0},"hello, i'm Leo"),a.a.createElement(b.a,{loop:!0,cursor:a.a.createElement(z,{color:"white"})},t))};function D(e){return new Promise(function(t,n){var r=document.createElement("script");r.src=e,r.addEventListener("load",function(){t()}),r.addEventListener("error",function(e){n(e)}),document.body.appendChild(r)})}var I=function(){return Object(r.useEffect)(function(){var e;return function(){var t=Object(l.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("https://cdn.jsdelivr.net/gh/tengbao/vanta/vendor/three.r92.min.js");case 2:return t.next=4,D("https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.net.min.js");case 4:e=window.VANTA.NET({el:"#background",color:16777215,backgroundColor:72743});case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),function(){e.effect&&e.effect.destroy()}},[]),Object(r.useEffect)(function(){Object(s.b)("/workinprogress")},[]),a.a.createElement(f.a,{theme:d},a.a.createElement("div",{id:"background"},a.a.createElement(s.a,null,a.a.createElement(L,{path:"/"}),a.a.createElement(B,{path:"/workinprogress"}))))};o.a.render(a.a.createElement(I,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.563d33c1.chunk.js.map