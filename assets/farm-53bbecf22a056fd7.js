(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8106],{58266:function(n,e,r){"use strict";var i,t=r(67294);function a(){return a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},a.apply(this,arguments)}const o=(n,e)=>{let{title:r,titleId:o,...l}=n;return t.createElement("svg",a({width:12,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},l),r?t.createElement("title",{id:o},r):null,i||(i=t.createElement("path",{d:"m.498 3.246.475-.203a3.929 3.929 0 0 0 2.07-2.07l.202-.475a.82.82 0 0 1 1.51 0l.202.475a3.929 3.929 0 0 0 2.07 2.07l.475.203a.82.82 0 0 1 0 1.508l-.475.203a3.928 3.928 0 0 0-2.07 2.07l-.202.475a.82.82 0 0 1-1.51 0l-.202-.474a3.928 3.928 0 0 0-2.07-2.071l-.475-.203a.82.82 0 0 1 0-1.508ZM8.25 7.623l.236-.101c.466-.2.837-.57 1.036-1.036l.1-.237a.41.41 0 0 1 .755 0l.101.237c.2.466.57.837 1.036 1.036l.237.1a.41.41 0 0 1 0 .755l-.237.101c-.466.2-.837.57-1.036 1.036l-.1.237a.41.41 0 0 1-.755 0l-.101-.237a1.964 1.964 0 0 0-1.036-1.035l-.237-.102a.41.41 0 0 1 0-.754Z",fill:"#50BEAF"})))},l=(0,t.forwardRef)(o),c=(0,t.memo)(l);e.Z=c},38559:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farm",function(){return r(58244)}])},7233:function(n,e,r){"use strict";r.d(e,{y:function(){return s}});var i=r(85893),t=r(49522),a=r.n(t),o=r(67294),l=r(33827),c=(0,i.jsx)(i.Fragment,{children:"-"}),s=(0,o.memo)((function(n){var e=n.amount,r=n.short,t=n.duration,s=void 0===t?300:t,d=function(){var n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){n.current=!0})),n.current}();if(!e)return c;var u=Number(e.toExact());if(!Number.isFinite(u))return c;var h=r?l.u.short:l.u.nice;return(0,i.jsx)(a(),{component:"text",value:u,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},duration:d?s:0,formatValue:h})}))},65222:function(n,e,r){"use strict";r.d(e,{Z:function(){return k}});var i=r(34051),t=r.n(i),a=r(85893),o=r(91308),l=r(70878),c=r(85160),s=r(58266),d=r(63067),u=r(17705),h=r(63191),f=r(54515),m=r(282),p=r(41120),x=r(75154),g=r(29323),v=r(67294),j=r(4250),b=r(7233);function y(n,e,r,i,t,a,o){try{var l=n[a](o),c=l.value}catch(s){return void r(s)}l.done?e(c):Promise.resolve(c).then(i,t)}var w=(0,p.Z)((function(n){return(0,x.Z)({card:{zIndex:16,height:(0,f.Q)(158),width:(0,f.Q)(258),border:0,"&:hover":{border:0}},btn:{color:"#fff",padding:0,height:(0,f.Q)(40),width:"100%",fontSize:(0,f.Q)(14),lineHeight:(0,f.Q)(16),letterSpacing:"0.04em",fontWeight:500,marginTop:(0,f.Q)(12),"& svg":{marginRight:(0,f.Q)(2)},"& svg path":{fill:"#fff"},"&:not(disabled)":{backgroundColor:n.palette.success.main,"&:hover":{backgroundColor:"#43A99B"}}},valueLabel:{marginTop:(0,f.Q)(12)},titleLabel:{marginTop:(0,f.Q)(8)}})})),k=(0,g.Pi)((function(n){var e,r=n.farm,i=(0,v.useState)(!1),f=i[0],p=i[1],x=(0,c.r)().chainId,g=null===r||void 0===r?void 0:r.balance,k=(0,d.WB)(),S=w(),C=function(n){return(0,d.YO)().pickPendingTransactions().find((function(e){return(0,u.Je)(e)&&e.input.farm.pid===n.pid&&e.chainId===n.chainId}))}(r),T=(0,d.sS)().toFiatAmount(null===g||void 0===g?void 0:g.pendingReward),P=function(){var n,e=(n=t().mark((function n(){return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,k.harvest(r);case 4:return n.prev=4,p(!1),n.finish(4);case 7:case"end":return n.stop()}}),n,null,[[0,,4,7]])})),function(){var e=this,r=arguments;return new Promise((function(i,t){var a=n.apply(e,r);function o(n){y(a,i,t,o,l,"next",n)}function l(n){y(a,i,t,o,l,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)(o.S,{disableRipple:!0,className:S.card,children:[(0,a.jsxs)(o.S.Columns,{children:[(0,a.jsxs)(o.S.Left,{children:[(0,a.jsx)(j.Y,{size:24,poolCurrency:null===(e=r.pool)||void 0===e?void 0:e.poolCurrency,rewardCurrency:r.rewardToken}),(0,a.jsx)(o.S.Label,{children:(0,a.jsx)("div",{className:S.titleLabel,children:"Reward"})}),(0,a.jsx)(o.S.PrimaryText,{children:r.rewardToken.symbol})]}),(0,a.jsxs)(o.S.Right,{children:[(0,a.jsx)(l.uc,{sm:!0,chainId:r.chainId}),(0,a.jsx)(o.S.Label,{children:(0,a.jsx)("div",{className:S.valueLabel,children:T&&(0,h.$y)(T)})}),(0,a.jsx)(o.S.PrimaryText,{children:(0,a.jsx)(b.y,{amount:null===g||void 0===g?void 0:g.pendingReward})})]})]}),f||C?(0,a.jsx)(m.Z,{variant:"contained",disabled:!0,size:"large",className:S.btn,children:C?"Claiming...":x===r.chainId?"Confirm in MetaMask...":"Switch network..."}):(0,a.jsxs)(m.Z,{variant:"contained",color:"primary",size:"large",className:S.btn,onClick:P,children:[(0,a.jsx)(s.Z,{}),"Claim"]})]})}))},11982:function(n,e,r){"use strict";r.d(e,{$:function(){return t}});var i=r(63067);function t(n){return(0,i.Eu)().pickPoolByLpToken(n)}},58244:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return an}});var i=r(85893),t=r(30588),a=r(13402),o=r(75127),l=r(41780),c=r(60378),s=r(85160),d=r(63067),u=r(98646),h=r(63191),f=r(79246),m=r(13724),p=r(54515),x=r(80343),g=r(79895),v=r(41120),j=r(75154),b=r(56847),y=r(96486),w=r(29323),k=r(67294),S=r(65222),C=r(39306),T=r(11982),P=r(97095),F=r(91308),L=r(81341),N=r(70878),I=r(38148),Q=r(4250),R=r(23688),Z=(0,v.Z)((function(n){return(0,j.Z)({newLabel:{display:"flex",alignItems:"flex-start","& svg":{marginRight:"2px",marginTop:"4px"}},rewardAmount:{display:"flex"},rewardIcon:{display:"flex",marginTop:(0,p.Q)(4),width:(0,p.Q)(16),height:(0,p.Q)(16),marginRight:(0,p.Q)(4)},top:{display:"flex",justifyContent:"space-between",marginBottom:n.spacing(1)}})})),B=(0,w.Pi)((function(n){var e,r,t,a=n.farm,o=n.reward,l=(0,P.vZ)(a.lpToken),c=(0,d.sS)(),s=(0,d.WB)(),u=(0,T.$)(a.lpToken),p=a.balance,g=Z(),v=a.isLegacy?"Action required. Migrate your LPT to the new USDC farm.":null,j=!!v,b=(0,C.H)();return(0,i.jsxs)(F.S,{onClick:function(){if(a.isLegacy){var n=s.pickFarmByLpToken(a.lpToken);b.toFarmMigration(n.id)}else b.toFarmAddStake(a.id)},children:[(0,i.jsxs)("div",{className:g.top,children:[(0,i.jsx)(Q.Y,{size:24,poolCurrency:null===(e=a.pool)||void 0===e?void 0:e.poolCurrency,rewardCurrency:a.rewardToken}),(0,i.jsxs)(x.Z,{display:"flex",children:[a.sponsoredBy&&(0,i.jsx)(x.Z,{mr:.5,children:(0,i.jsx)(R.q,{sm:!0,title:a.sponsoredBy})}),(0,i.jsx)(N.uc,{sm:!0,chainId:null===(r=a.pool)||void 0===r?void 0:r.chainId})]})]}),(0,i.jsxs)(F.S.Columns,{children:[(0,i.jsx)(F.S.Left,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(F.S.Label,{children:"Farm"}),(0,i.jsx)(F.S.PrimaryText,{children:(0,m.K)(null===(t=a.pool)||void 0===t?void 0:t.poolCurrency)})]})}),(0,i.jsx)(F.S.Right,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(F.S.Label,{children:"APY"}),(0,i.jsx)(F.S.PrimaryText,{children:(0,I.Q)(a)})]})})]}),!j&&(0,i.jsxs)(F.S.Bottom,{children:[(0,i.jsx)(i.Fragment,{children:o?(0,i.jsxs)("div",{children:[(0,i.jsx)(F.S.Label,{children:"LPT Staked"}),(0,i.jsx)(F.S.Text,{children:p?f.d.short(p.amount):"-"})]}):(0,i.jsxs)("div",{children:[(0,i.jsx)(F.S.Label,{children:"LPT Available to Stake"}),(0,i.jsx)(F.S.Text,{children:l?f.d.nice(l):"-"})]})}),(0,i.jsx)(i.Fragment,{children:o?(0,i.jsxs)(F.S.Right,{children:[(0,i.jsxs)(F.S.Label,{children:[a.rewardToken.symbol," Pending reward"]}),(0,i.jsx)(F.S.Text,{children:p?(0,i.jsxs)("div",{className:g.rewardAmount,children:[(0,i.jsx)(L.r,{currency:a.rewardToken,className:g.rewardIcon}),f.d.short(p.pendingReward)]}):"-"})]}):(0,i.jsxs)(F.S.Right,{children:[(0,i.jsx)(F.S.Label,{children:"Liquidity"}),(0,i.jsx)(F.S.Text,{children:h.$y.short(c.toFiatAmount(null===u||void 0===u?void 0:u.totalLiquidity))})]})})]}),j&&(0,i.jsx)(F.S.Footer,{children:v})]})})),E=r(71369),A=r(91955),O=r(34208),H=r(25587),W=r(78729),q=r(74705),_=r(92430);function Y(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function z(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),i.forEach((function(e){Y(n,e,r[e])}))}return n}var $=(0,v.Z)((function(n){return(0,j.Z)({tableIcon:{},withIcon:{display:"flex",alignItems:"center","& $tableIcon":{top:-1,marginRight:(0,p.Q)(10)}},pagination:{marginTop:n.spacing(3),width:"100%",fontSize:(0,p.Q)(12),"& button":{padding:0,margin:"0 4px"}}})})),D=(0,w.Pi)((function(n){var e,r=null!==(e=n.farms)&&void 0!==e?e:[],t=n.stakedOnly,a=$(),o=(0,C.H)(),l=(0,A.M)(),c=(0,A.K)(),s=(0,d.Eu)(),u=function(n){var e=s.pickPoolByLpToken(n.lpToken);return l(null===e||void 0===e?void 0:e.totalLiquidity)},h=function(n){var e=s.pickPoolByLpToken(n.lpToken);return c(null===e||void 0===e?void 0:e.totalLiquidity)},p=function(n){return(0,W.b)((0,q.HJ)(n))},x=function(n){var e;return f.d.nice(null===(e=n.balance)||void 0===e?void 0:e.pendingReward,2)},g=function(n){var e;return f.d.nice(null===(e=n.balance)||void 0===e?void 0:e.amount,2)},v=function(n){return null!==n&&void 0!==n?n:""},j=(0,O.E)("apr"),b=j.comparator,y=j.handleRequestSort,w=r.slice().sort(b),k=(0,_.h0)(w,n.perPage),S=n.perPage<w.length;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(H.i,{children:[(0,i.jsx)(H.i.Head,{children:(0,i.jsxs)(H.i.Row,{children:[(0,i.jsx)(H.i.Header,{onClick:function(){return y(!1,(function(n){var e,r;return null===(e=n.pool)||void 0===e||null===(r=e.poolCurrency)||void 0===r?void 0:r.symbol}))},children:"Name"}),(0,i.jsx)(H.i.Header,{onClick:function(){return y("chainId",E.IB)},children:"Network"}),(0,i.jsx)(H.i.Header,{onClick:function(){return y("sponsoredBy",v)},children:"Supported"}),t&&(0,i.jsx)(H.i.Header,{align:"left",onClick:function(){return y(!1,(function(n){return p(n.pool)}))},children:"Pool Share"}),(0,i.jsx)(H.i.Header,{align:"left",onClick:function(){return y(!1,h)},children:"Liquidity"}),t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H.i.Header,{align:"left",onClick:function(){return y(!1,x)},children:"STG Pending Reward"}),(0,i.jsx)(H.i.Header,{align:"left",onClick:function(){return y(!1,g)},children:"LPT Staked"})]}),(0,i.jsx)(H.i.Header,{align:"left",onClick:function(){return y("apr")},children:"APY"})]})}),(0,i.jsx)(H.i.Body,{children:k.pageItems.map((function(n,e){var r,l;return(0,i.jsxs)(H.i.Row,{onClick:function(){return function(n){o.toFarmAddStake(n.id)}(n)},children:[(0,i.jsx)(H.i.Cell,{children:(0,i.jsxs)("div",{className:a.withIcon,children:[(0,i.jsx)(L.r,{currency:null===(r=n.pool)||void 0===r?void 0:r.poolCurrency,size:24,className:a.tableIcon}),(0,m.K)(null===(l=n.pool)||void 0===l?void 0:l.poolCurrency)]})}),(0,i.jsx)(H.i.Cell,{children:(0,i.jsx)("div",{className:a.withIcon,children:(0,i.jsx)(N.uc,{chainId:n.chainId})})}),(0,i.jsx)(H.i.Cell,{children:n.sponsoredBy&&(0,i.jsx)(R.q,{title:n.sponsoredBy})}),t&&(0,i.jsx)(H.i.Cell,{align:"left",children:p(n.pool)}),(0,i.jsx)(H.i.Cell,{align:"left",children:u(n)}),t&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H.i.Cell,{align:"left",children:x(n)}),(0,i.jsx)(H.i.Cell,{align:"left",children:g(n)})]}),(0,i.jsx)(H.i.Cell,{align:"left",children:(0,I.Q)(n)})]},e)}))})]}),S&&(0,i.jsx)("div",{className:a.pagination,children:(0,i.jsx)(_.ZP,z({},k))})]})}));function M(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var K=(0,v.Z)((function(n){return(0,j.Z)({cardsContainer:M({marginTop:(0,p.Q)(56),marginBottom:(0,p.Q)(64)},n.breakpoints.up("sm"),{marginTop:(0,p.Q)(96)}),accent:{color:n.palette.success.main},paginationWrapper:M({marginTop:(0,p.Q)(18),marginLeft:"auto",display:"none"},n.breakpoints.up("sm"),{display:"block"}),smList:{overflowX:"auto",flexWrap:"nowrap","&::-webkit-scrollbar":{display:"none"}},filtersContainer:{display:"flex",alignItems:"center"},dropdownFilterContainer:M({display:"flex",justifyContent:"flex-end",marginBottom:(0,p.Q)(15),marginTop:(0,p.Q)(25)},n.breakpoints.up("sm"),{marginTop:(0,p.Q)(-25)}),stakedSwitch:{color:n.palette.text.secondary,fontWeight:400,marginTop:(0,p.Q)(-20)},tableWrapper:{borderRadius:(0,p.Q)(12),boxShadow:"none"},withIcon:{display:"flex",alignItems:"center","& $tableIcon":{top:-1,marginRight:(0,p.Q)(9)}}})})),X="Your Farms",G="Pending rewards",U="Available",J="Top Farms",V=(0,w.Pi)((function(){var n=K(),e=(0,d.WB)(),r=e.activeFarms,u=(0,s.r)().account,f=!!u,p=(0,l.k)(),v=(0,d.Eu)(),j=e.topFarms(8),w=e.yourFarms(),C=e.withReward(),T=(0,d.vF)().enabledNetworks,P=w.length>0,F=(0,k.useState)(P?X:J),L=F[0],N=F[1];(0,k.useEffect)((function(){P?N(X):f||N(J)}),[P,f]);var I=e.availableFarms(),Q=I.length,R=en(I.map((function(n){return n.lpToken}))),Z=I.length>0,E=!u,A=(0,y.uniqBy)(v.pools.map((function(n){return n.poolCurrency})),m.K),O=r.filter((function(n){var e;return(!p.network||n.chainId===p.network.chainId)&&((!p.token||!n.pool||(0,m.K)(null===(e=n.pool)||void 0===e?void 0:e.poolCurrency)===(0,m.K)(p.token))&&(!p.staked||w.includes(n)))}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{sub:"Stargate liquidity providers can farm their LP tokens in exchange for STG rewards. Earn STG and become a member of the Stargate community.",children:E?"Connect your wallet to see your available assets to stake.":Z?(0,i.jsxs)(i.Fragment,{children:["You have",(0,i.jsxs)("span",{className:n.accent,children:[" ",(0,h.P$)(R)]})," LP tokens available to farm in your wallet across"," ",(0,i.jsx)("span",{className:n.accent,children:nn(I)})," networks."]}):"You don\u2019t have available assets to farm in your wallet."}),(0,i.jsx)("div",{className:n.cardsContainer,children:(0,i.jsxs)(c.m,{activeTab:L,children:[(0,i.jsx)(c.m.Tab,{title:X,onClick:function(){return N(X)},disabled:!f,adornment:(0,i.jsx)(o.N,{alignRight:!0,children:Q>0?(0,i.jsxs)(i.Fragment,{children:["Available farms based on your",(0,i.jsxs)(o.N.Accent,{children:[Q," "]}),"assets"]}):(0,i.jsx)(i.Fragment,{children:"You don\u2019t have any pools available"})}),children:(0,i.jsx)(t.f,{withPagination:!0,withPlaceholders:!0,children:w.map((function(n){return(0,i.jsx)(B,{reward:!0,farm:n},n.id)}))})}),(0,i.jsx)(c.m.Tab,{title:G,onClick:function(){return N(G)},disabled:!f,children:(0,i.jsx)(t.f,{withPagination:!0,withPlaceholders:!0,children:C.map((function(n){return n.isEmergencyWithdrawEnabled?null:(0,i.jsx)(S.Z,{farm:n},n.id)}))})}),(0,i.jsx)(c.m.Tab,{title:U,onClick:function(){return N(U)},disabled:!f,adornment:(0,i.jsxs)(o.N,{alignRight:!0,children:["Available Farms based on your",(0,i.jsxs)(o.N.Accent,{children:[(0,h.P$)(R)," "]}),"assets"]}),children:(0,i.jsx)(t.f,{withPagination:!0,withPlaceholders:!0,children:I.map((function(n){return(0,i.jsx)(B,{farm:n},n.id)}))})}),(0,i.jsx)(c.m.Tab,{title:J,onClick:function(){return N(J)},children:(0,i.jsx)(t.f,{withPagination:!0,withPlaceholders:!0,children:j.map((function(n){return(0,i.jsx)(B,{farm:n},n.id)}))})})]})}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(l.o,{type:"Farms",options:{token:A,network:T},selected:p,onStakedChange:p.setStaked,onNetworkChange:p.setNetwork,onTokenChange:p.setToken}),(0,i.jsx)(b.Z,{component:g.Z,className:n.tableWrapper,children:(0,i.jsx)(D,{farms:O,stakedOnly:p.staked,perPage:O.length})})]})]})}));function nn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,y.uniq)(n.map((function(n){return n.chainId}))).length}var en=function(n){var e=(0,d.GX)(),r=(0,u.l)(e);return n.reduce((function(n,e){var i=r.pickWalletBalance(e);return i?n+parseFloat((0,f.d)(i)):n}),0)},rn=r(34342),tn=r(74839),an=(0,tn.XC)(rn.Z,(0,tn.Yg)(V))},38148:function(n,e,r){"use strict";r.d(e,{Q:function(){return a}});var i=r(33827),t=r(25489);function a(n){if(!n)return"N/A";var e=n.apr,r=n.poolInfo;return(0,t.u)(n.pool)?"N/A":0===(null===r||void 0===r?void 0:r.allocPoint)?"0%":0===e?"NEW":void 0===e?"-":e>1e4?"NEW":Number.isFinite(e)?i.u.nice(100*e)+"%":"-"}},33827:function(n,e,r){"use strict";function i(n){return String(n)}r.d(e,{u:function(){return i}}),i.short=function(n){return n>=1e6?(n/1e6).toLocaleString("en-US",{maximumFractionDigits:1})+"M":n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})},i.nice=function(n){return n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}}},function(n){n.O(0,[296,7581,406,3818,6924,6977,8957,9774,2888,179],(function(){return e=38559,n(n.s=e);var e}));var e=n.O();_N_E=e}]);