(this.webpackJsonpyahtzee=this.webpackJsonpyahtzee||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(16),i=n.n(a),c=(n(24),n(2)),l=n(5),s=n(4),u=n(3),d=n(9),h=n(12),f=n(14),p=n(6),v=(n(25),n(17)),g=n(7),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleClick=r.handleClick.bind(Object(p.a)(r)),r}return Object(l.a)(n,[{key:"handleClick",value:function(){this.props.toggleLocked(this.props.idx)}},{key:"render",value:function(){var e=this.props,t=e.dieIcons,n=e.locked,r=e.val,a=e.disabled,i=e.rolling,c="Die ".concat(n?"Die-locked":"").concat(i?"Die-rolling":"");return o.a.createElement(v.a,{icon:t.get(r),size:"5x",className:c,onClick:this.handleClick,disabled:a})}}]),n}(r.Component);m.defaultProps={dieIcons:new Map([[1,g.c],[2,g.f],[3,g.e],[4,g.b],[5,g.a],[6,g.d]]),val:5};var b=m,O=(n(31),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Dice"},this.props.dice.map((function(t,n){return o.a.createElement(b,{toggleLocked:e.props.toggleLocked,val:t,locked:e.props.locked[n],idx:n,key:n,disabled:e.props.disabled,rolling:e.props.rolling&&!e.props.locked[n]})})))}}]),n}(r.Component)),S=(n(32),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.score,n=e.name,r=e.doScore,a=e.description,i=e.rolling,c=void 0!==t;return o.a.createElement("tr",{className:"RuleRow RuleRow-".concat(c?"disabled":"active"),onClick:c||i?null:r},o.a.createElement("td",{className:"RuleRow-name"},n),o.a.createElement("td",{className:"RuleRow-score"},c?t:a))}}]),n}(r.Component)),y=(n(33),n(18)),k=function(){function e(t){Object(c.a)(this,e),Object.assign(this,t)}return Object(l.a)(e,[{key:"sum",value:function(e){return e.reduce((function(e,t){return e+t}))}},{key:"freq",value:function(e){var t,n=new Map,r=Object(y.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.set(o,(n.get(o)||0)+1)}}catch(a){r.e(a)}finally{r.f()}return Array.from(n.values())}},{key:"count",value:function(e,t){return e.filter((function(e){return e===t})).length}}]),e}(),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).evalRoll=function(t){return e.val*e.count(t,e.val)},e}return n}(k),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).evalRoll=function(t){return e.freq(t).some((function(t){return t>=e.count}))?e.sum(t):0},e}return n}(k),E=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).evalRoll=function(t){var n=e.freq(t);return n.includes(2)&&n.includes(3)?e.score:0},e}return n}(k),R=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).evalRoll=function(t){var n=new Set(t);return n.has(2)&&n.has(3)&&n.has(4)&&(n.has(1)||n.has(5))||n.has(3)&&n.has(4)&&n.has(5)&&(n.has(2)||n.has(6))?e.score:0},e}return n}(k),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).evalRoll=function(t){var n=new Set(t);return 5!==n.size||n.has(1)&&n.has(6)?0:e.score},e}return n}(k),N=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).evalRoll=function(t){return 5===e.freq(t)[0]?e.score:0},e}return n}(k),C=new w({val:1,description:"1 point per 1"}),A=new w({val:2,description:"2 points per 2"}),T=new w({val:3,description:"3 points per 3"}),z=new w({val:4,description:"4 points per 4"}),H=new w({val:5,description:"5 points per 5"}),x=new w({val:6,description:"6 points per 6"}),G=new j({count:3,description:"Sum all dice if 3 are the same"}),K=new j({count:4,description:"Sum all dice if 4 are the same"}),I=new E({score:25,description:"25 points for a full house"}),D=new R({score:30,description:"30 points for a small straight"}),M=new L({score:40,description:"40 points for a large straight"}),W=new N({score:50,description:"50 points for yahtzee"}),q=new j({count:0,description:"Sum of all dice"}),F=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"getTotalScore",value:function(){var e=this.props.scores,t=0;for(var n in e)e[n]&&(t+=e[n]);return this.props.updateHighScore(t),t}},{key:"render",value:function(){var e=this.props,t=e.scores,n=e.doScore;return o.a.createElement("div",{className:"ScoreTable"},o.a.createElement("section",{className:"ScoreTable-section"},o.a.createElement("h2",null,"Upper"),o.a.createElement("table",{cellSpacing:"0"},o.a.createElement("tbody",null,o.a.createElement(S,{name:"Ones",score:t.ones,description:C.description,doScore:function(e){return n("ones",C.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Twos",score:t.twos,description:A.description,doScore:function(e){return n("twos",A.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Threes",score:t.threes,description:T.description,doScore:function(e){return n("threes",T.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Fours",score:t.fours,description:z.description,doScore:function(e){return n("fours",z.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Fives",score:t.fives,description:H.description,doScore:function(e){return n("fives",H.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Sixes",score:t.sixes,description:x.description,doScore:function(e){return n("sixes",x.evalRoll)},rolling:this.props.rolling})))),o.a.createElement("section",{className:"ScoreTable-section ScoreTable-section-lower"},o.a.createElement("h2",null,"Lower"),o.a.createElement("table",{cellSpacing:"0"},o.a.createElement("tbody",null,o.a.createElement(S,{name:"Three of Kind",score:t.threeOfKind,description:G.description,doScore:function(e){return n("threeOfKind",G.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Four of Kind",score:t.fourOfKind,description:K.description,doScore:function(e){return n("fourOfKind",K.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Full House",score:t.fullHouse,description:I.description,doScore:function(e){return n("fullHouse",I.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Small Straight",score:t.smallStraight,description:D.description,doScore:function(e){return n("smallStraight",D.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Large Straight",score:t.largeStraight,description:M.description,doScore:function(e){return n("largeStraight",M.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Yahtzee",score:t.yahtzee,description:W.description,doScore:function(e){return n("yahtzee",W.evalRoll)},rolling:this.props.rolling}),o.a.createElement(S,{name:"Chance",score:t.chance,description:q.description,doScore:function(e){return n("chance",q.evalRoll)},rolling:this.props.rolling})))),o.a.createElement("h2",null,"TOTAL SCORE: ",this.getTotalScore()),o.a.createElement("h2",null,"YOUR HIGHSCORE: ",this.props.highScore))}}]),n}(r.Component),J=(n(34),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={dice:Array.from({length:5}),locked:Array(5).fill(!1),rollsLeft:3,rolling:!1,highScore:0,gameOver:!1,scores:{ones:void 0,twos:void 0,threes:void 0,fours:void 0,fives:void 0,sixes:void 0,threeOfKind:void 0,fourOfKind:void 0,fullHouse:void 0,smallStraight:void 0,largeStraight:void 0,yahtzee:void 0,chance:void 0}},r.roll=r.roll.bind(Object(p.a)(r)),r.doScore=r.doScore.bind(Object(p.a)(r)),r.toggleLocked=r.toggleLocked.bind(Object(p.a)(r)),r.animateRoll=r.animateRoll.bind(Object(p.a)(r)),r.updateHighScore=r.updateHighScore.bind(Object(p.a)(r)),r.startNewGame=r.startNewGame.bind(Object(p.a)(r)),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("highScore"));e>0&&this.setState({highScore:e}),this.animateRoll()}},{key:"animateRoll",value:function(){var e=this;this.setState({rolling:!0},(function(){setTimeout(e.roll,1e3)}))}},{key:"roll",value:function(){this.setState((function(e){return{dice:e.dice.map((function(t,n){return e.locked[n]?t:Math.ceil(6*Math.random())})),locked:e.rollsLeft>1?e.locked:Array(5).fill(!0),rollsLeft:e.rollsLeft-1,rolling:!1}}))}},{key:"toggleLocked",value:function(e){this.state.rollsLeft>0&&!this.state.rolling&&!this.state.gameOver&&this.setState((function(t){return{locked:[].concat(Object(f.a)(t.locked.slice(0,e)),[!t.locked[e]],Object(f.a)(t.locked.slice(e+1)))}}))}},{key:"doScore",value:function(e,t){var n=this;this.setState((function(r){return{scores:Object(h.a)(Object(h.a)({},r.scores),{},Object(d.a)({},e,t(n.state.dice))),rollsLeft:3,locked:Array(5).fill(!1)}}),(function(){n.checkGameOver()}))}},{key:"updateHighScore",value:function(e){e>this.state.highScore&&(localStorage.setItem("highScore",JSON.stringify(e)),this.setState({highScore:e}))}},{key:"checkGameOver",value:function(){for(var e in this.state.scores)if(void 0===this.state.scores[e])return this.animateRoll();this.setState({gameOver:!0})}},{key:"startNewGame",value:function(){this.setState((function(e){return{locked:Array(5).fill(!1),gameOver:!1,scores:{ones:void 0,twos:void 0,threes:void 0,fours:void 0,fives:void 0,sixes:void 0,threeOfKind:void 0,fourOfKind:void 0,fullHouse:void 0,smallStraight:void 0,largeStraight:void 0,yahtzee:void 0,chance:void 0}}})),this.animateRoll()}},{key:"displayRollInfo",value:function(){var e=["0 Rolls Left","1 Roll Left","2 Rolls Left","Starting Round","Play Again?"];return this.state.gameOver?e[4]:e[this.state.rollsLeft]}},{key:"render",value:function(){var e=this.state,t=e.dice,n=e.locked,r=e.rollsLeft,a=e.rolling,i=e.gameOver,c=e.scores,l=e.highScore;return o.a.createElement("div",{className:"Game"},o.a.createElement("header",{className:"Game-header"},o.a.createElement("h1",{className:"App-title"},"Yahtzee!"),o.a.createElement("section",{className:"Game-dice-section"},o.a.createElement(O,{dice:t,locked:n,toggleLocked:this.toggleLocked,disabled:0===r,rolling:a}),o.a.createElement("div",{className:"Game-button-wrapper"},o.a.createElement("button",{className:"Game-reroll",disabled:n.every((function(e){return e}))||a,onClick:i?this.startNewGame:this.animateRoll},this.displayRollInfo())))),o.a.createElement(F,{doScore:this.doScore,scores:c,highScore:l,updateHighScore:this.updateHighScore,rolling:a}))}}]),n}(r.Component)),U=(n(35),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(J,null))}}]),n}(r.Component)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(U,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/yahtzee-exercise",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/yahtzee-exercise","/service-worker.js");Y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):B(e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.50a9c0dd.chunk.js.map