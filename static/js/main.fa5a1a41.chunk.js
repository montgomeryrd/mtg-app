(this["webpackJsonpmtg-app"]=this["webpackJsonpmtg-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),i=(n(12),n(2)),l=n(7),u=n(0),j=function(e){var t=e.newPlayers,n=e.setNewPlayers,c=e.setGame,s=e.setData,r=Object(a.useState)(""),j=Object(i.a)(r,2),o=j[0],d=j[1],b=t.map((function(e){return Object(u.jsx)("li",{onClick:function(){return m(e.id)},children:e.name},e.id)})),m=function(e){var a=t.filter((function(t){return t.id!==e}));n(a)};return Object(u.jsxs)("div",{className:"setup-container",children:[Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault();var a=1*Math.random();n([].concat(Object(l.a)(t),[{name:o,id:a}])),d("")},children:Object(u.jsx)("input",{type:"text",value:o,onChange:function(e){return d(e.target.value)},required:!0,placeholder:"add player"})}),Object(u.jsxs)("section",{className:"new-player-list",children:[Object(u.jsx)("h2",{className:"title",children:"PLAYER LIST"}),Object(u.jsxs)("ul",{className:"current",children:[b,t.length>=2?Object(u.jsx)("button",{className:"start-btn",onClick:function(){s({newPlayers:t}),c(!0)},children:"start game"}):""]})]})]})},o=function(e){var t=e.player,n=Object(a.useState)(20),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(u.jsxs)("div",{className:s<1?"card-container dead":"card-container",children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsxs)("section",{className:"health",children:[Object(u.jsx)("div",{className:"minus",onClick:function(){return r((function(e){return e-1}))},children:"-"}),Object(u.jsx)("div",{className:"health",children:s}),Object(u.jsx)("div",{className:"plus",onClick:function(){return r((function(e){return e+1}))},children:"+"})]})]},t.id)},d=function(e){var t=e.newPlayers,n=(e.setNewPlayers,e.setData,e.setGame),a=t.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(o,{player:e})},e.id)}));return Object(u.jsxs)("div",{className:"players-in-game",children:[a,Object(u.jsx)("button",{className:"reset",onClick:function(){return n(!1)},children:"new game"})]})};n(14);var b=function(){var e=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("mtg-player-data"))||[]})),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(i.a)(s,2),l=r[0],o=r[1],b=Object(a.useState)(!1),m=Object(i.a)(b,2),O=m[0],h=m[1];return Object(a.useEffect)((function(){window.localStorage.setItem("mtg-player-data",JSON.stringify(n))}),[n]),Object(u.jsx)("div",{className:"App",children:!1===O?Object(u.jsx)(j,{newPlayers:l,setNewPlayers:o,setGame:h,setData:c}):Object(u.jsx)(d,{newPlayers:l,setNewPlayers:o,setData:c,setGame:h})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fa5a1a41.chunk.js.map