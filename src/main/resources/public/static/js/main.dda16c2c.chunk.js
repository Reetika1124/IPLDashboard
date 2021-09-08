(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),r=c.n(s),i=(c(24),c(25),c(8)),j=c.n(i),h=c(10),l=c(11),m=(c(27),c(2)),o=c(4),d=(c(28),c(0)),u=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:n,children:a})}),Object(d.jsx)("h2",{className:"match-date",children:c.date}),Object(d.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(d.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(d.jsxs)("div",{className:"additional-detail",children:[Object(d.jsx)("h3",{children:"First Innings"}),Object(d.jsx)("p",{children:c.team1}),Object(d.jsx)("h3",{children:"Second Innings"}),Object(d.jsx)("p",{children:c.team2}),Object(d.jsx)("h3",{children:"Man of the match"}),Object(d.jsx)("p",{children:c.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},b=(c(38),function(e){var t=e.teamName,c=e.match,a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:n,children:a})}),Object(d.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),O=c(19),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(m.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#890416"},{title:"Wins",value:c.totalWins,color:"#407e12"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"Latest Matches"}),Object(d.jsx)(u,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(b,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsxs)(o.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:["More ",">"]})})]}):Object(d.jsx)("h1",{children:"Team not found"})},f=(c(39),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),p=(c(40),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(m.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(d.jsx)(u,{teamName:r,match:e},e.id)}))]})]})}),v=(c(41),c(42),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)("h1",{className:"text",children:Object(d.jsx)(o.b,{to:"/teams/".concat(t),children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{className:"app-name",children:"IPL DashBoard"})}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(d.jsx)(v,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(p,{})}),Object(d.jsx)(m.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(m.a,{path:"/",children:Object(d.jsx)(N,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.dda16c2c.chunk.js.map