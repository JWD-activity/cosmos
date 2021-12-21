(this["webpackJsonpcosmos-app"]=this["webpackJsonpcosmos-app"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(25),r=a.n(n),s=a(17),i=a(20),j=a.n(i),l=a(30),o=a(31),u=a.n(o),d="https://lldev.thespacedevs.com/2.2.0/",b="config/spacecraft/",O="astronaut/",f=["TechCrunch","SpaceFlight Insider","NASA Spaceflight","SpaceX","ElonX","Blue Origin","Spaceflight Now","Space.com","Teslarati","Virgin Galactic","Planetary Society","Phys","National Space Society","The Japan Times","National Geographic","SpaceNews","The National","Jet Propulsion Laboratory","NASA","The Space Review","The Verge","The Drive","Arstechnica","ESA","The Space Devs","AmericaSpace","The Wall Street Journal","CNBC","United Launch Alliance"],x=["Active","Retired","Deceased","Lost In Flight"],h=function(e,t,a){var c,n=t.length,r=m(t,a),s=r+1;if("next"===e){if(!(s<n))return{selectedId:a};c=t[r+1].id}if("prev"===e){if(!(s>1))return{selectedId:a};c=t[r-1].id}return{selectedId:c}},m=function(e,t){return e.findIndex((function(e){return e.id===+t}))},p=function(e,t){localStorage.setItem(e,JSON.stringify(t))},g=function(e){return!("undefined"===window||!localStorage.getItem(e))&&JSON.parse(localStorage.getItem(e))},v=function(e,t){return e.filter((function(e){return e.status.name.includes(t)}))},N=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))},y=function(e){var t=e.nodeName;return"BUTTON"===t||"path"===t||"svg"===t},S={isLoading:!0,spacecraft:g("spacecraft")||{},error:""},w=Object(s.b)("spacecraft/fetchSpacecraft",Object(l.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=g("spacecraft"))){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,u.a.get(d+b,{params:{limit:27}});case 7:return a=e.sent,p("spacecraft",a.data),e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})))),C=Object(s.c)({name:"spacecraft",initialState:S,reducers:{getSpacecraft:function(e,t){return t.payload}},extraReducers:function(e){e.addCase(w.pending,(function(e,t){e.isLoading=!0})).addCase(w.fulfilled,(function(e,t){e.isLoading=!1,e.spacecraft=t.payload})).addCase(w.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message}))}}),L=(C.actions.getSpacecraft,C.reducer),D={isLoading:!0,spacecraftDetails:g("spacecraftDetails")||{},error:""},A=Object(s.b)("spacecraft/fetchSpaceDetails",function(){var e=Object(l.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat(d).concat(b).concat(t));case 2:return a=e.sent,p("spacecraftDetails",a.data),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(s.c)({name:"spacecraftDetails",initialState:D,reducers:{},extraReducers:function(e){e.addCase(A.pending,(function(e,t){e.isLoading=!0})).addCase(A.fulfilled,(function(e,t){e.isLoading=!1,e.spacecraftDetails=t.payload})).addCase(A.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message}))}}).reducer,I={isLoading:!0,astronauts:g("astronauts")||[],error:""},T=Object(s.b)("astronauts/fetchAstronauts",Object(l.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=g("astronauts"))){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,u.a.get(d+O,{params:{limit:100}});case 7:return a=e.sent,p("astronauts",a.data.results),e.abrupt("return",a.data.results);case 10:case"end":return e.stop()}}),e)})))),E=Object(s.c)({name:"astronauts",initialState:I,reducers:{},extraReducers:function(e){e.addCase(T.pending,(function(e,t){e.isLoading=!0})).addCase(T.fulfilled,(function(e,t){e.isLoading=!1,e.astronauts=t.payload})).addCase(T.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message}))}}).reducer,R={isLoading:!0,astronautDetails:g("astronautDetails")||{},error:""},F=Object(s.b)("astronauts/fetchAstronautDetails",function(){var e=Object(l.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(d+O+t);case 2:return a=e.sent,p("astronautDetails",a.data),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(s.c)({name:"astronautDetails",initialState:R,reducers:{},extraReducers:function(e){e.addCase(F.pending,(function(e,t){e.isLoading=!0})).addCase(F.fulfilled,(function(e,t){e.isLoading=!1,e.astronautDetails=t.payload})).addCase(F.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message}))}}).reducer,_=Object(s.b)("news/fetchNews",Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.spaceflightnewsapi.net/v3/articles");case 2:return t=e.sent,p("news",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))),B=Object(s.c)({name:"news",initialState:{isLoading:!0,news:[],error:""},reducers:{},extraReducers:function(e){e.addCase(_.pending,(function(e,t){e.isLoading=!0})).addCase(_.fulfilled,(function(e,t){e.isLoading=!1,e.news=t.payload})).addCase(_.rejected,(function(e,t){e.isLoading=!1,e.error=t.error.message}))}}).reducer,J=Object(s.a)({reducer:{spacecraft:L,spacecraftDetails:k,astronauts:E,astronautDetails:P,news:B}});J.subscribe((function(){}));var M=J,V=a(12),G=(a(118),a(119),a(15)),U=a(9),H=a(18),W=(a(120),a(2));var X=function(e){var t=e.children;return Object(W.jsx)("button",{className:"btn-gradient",children:t})};a(122);var K=function(e){var t=e.name,a=(e.title,e.desc);return e.children,Object(W.jsx)(H.a,{className:"imgcard-container bg-".concat(t," "),children:Object(W.jsxs)(H.a.Body,{className:"imgcard-content",children:[Object(W.jsx)("h1",{children:t}),Object(W.jsx)("p",{children:a}),Object(W.jsx)(X,{children:"EXPLORE"})]})})},Q=a(8),Y=a(10),q=(a(123),[{id:1,name:"spacecraft",desc:"Explore the spacecraft we use to stay in orbit."},{id:2,name:"astronauts",desc:"Meet the exceptional people that have ventured into space."},{id:3,name:"news",desc:"Check the latest spaceflight-related news."}]);var z=function(){return Object(W.jsx)(Y.a,{children:q.map((function(e){var t=e.name,a=e.desc,c=e.id;return Object(W.jsx)(Q.a,{lg:4,md:12,className:"p-5",children:Object(W.jsx)(G.c,{to:"/".concat(t),className:function(e){return e.isActive?"active-menu":""},children:Object(W.jsx)(K,{name:t,desc:a})})},c)}))})},Z=a(7);a(124);var $=function(e){var t=e.content,a=t.image_url,c=t.name,n=t.id;return Object(W.jsx)(G.b,{to:"/spacecraft/".concat(n),className:"summary-link--spacecraft",children:Object(W.jsxs)(H.a,{className:"summary-card--spacecraft",children:[Object(W.jsx)(H.a.Img,{variant:"top",src:a,alt:c,className:"img-sm--spacecraft"}),Object(W.jsxs)(H.a.Body,{children:[Object(W.jsx)(H.a.Title,{children:c}),Object(W.jsx)(X,{children:"VIEW DETAILS"})]})]})})},ee=a(47),te=a(35);a(125);var ae=function(e){var t=e.content,a=t.profile_image_thumbnail,c=t.name,n=t.id,r=t.agency,s=t.status,i=s.name.toLowerCase(),j="active"===i?"primary":"retired"===i?"danger":"secondary";return Object(W.jsx)(G.b,{to:"/astronauts/".concat(n),className:"summary-link--astronauts",children:Object(W.jsxs)(H.a,{className:"summary-card--astronauts",children:[Object(W.jsx)(Q.a,{children:Object(W.jsx)(ee.a,{variant:"top",src:a,alt:c,className:"img-sm--astronauts p-4",roundedCircle:!0})}),Object(W.jsxs)(H.a.Body,{children:[Object(W.jsx)(Y.a,{children:Object(W.jsx)(Q.a,{className:"mb-3",children:Object(W.jsx)(te.a,{bg:j,children:s.name})})}),Object(W.jsx)(Y.a,{children:Object(W.jsx)(H.a.Title,{children:c})}),Object(W.jsx)(Y.a,{children:Object(W.jsx)("h4",{className:"text-muted",children:r.name})}),Object(W.jsx)(X,{children:"VIEW DETAILS"})]})]})})},ce=a(32),ne=a(83),re=a(84),se=a(82);a(126);var ie=function(e){var t,a=e.type,c=Object(U.e)().pathname;return"wiki"===a&&(t=Object(W.jsx)(se.a,{})),"next"===a&&(t=Object(W.jsx)(ce.b,{})),"prev"===a&&(t=Object(W.jsx)(ce.a,{})),"goback"===a&&(c.includes("spacecraft")&&(t=Object(W.jsxs)("span",{className:"btn-goback",children:[Object(W.jsx)(ne.a,{}),"GO BACK TO SPACECRAFT"]})),c.includes("astronauts")&&(t=Object(W.jsxs)("span",{className:"btn-goback",children:[Object(W.jsx)(re.a,{}),"GO BACK TO ASTRONAUTS"]}))),Object(W.jsx)("button",{className:"btn-icon",type:"button",children:t})},je=a(71);a(127);var le=function(e){var t=e.data,a=e.numPerPage,n=e.section,r=Object(c.useState)(0),s=Object(Z.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)([]),o=Object(Z.a)(l,2),u=o[0],d=o[1];Object(c.useEffect)((function(){t&&(h(),j(0))}),[t]);var b=Object(W.jsx)(ie,{type:"prev"}),O=Object(W.jsx)(ie,{type:"next"}),f=t?Math.ceil(t.length/a):0,x=function(e){var c=function(e,t){var a=(e-1)*t;return{start:a,end:a+t}}(e,a),r=c.start,s=c.end,i=t.slice(r,s);return Object(W.jsx)(je.a.Item,{children:Object(W.jsx)(Y.a,{children:i.map((function(e){return Object(W.jsx)(Q.a,{lg:3,md:6,sm:12,children:"spacecraft"===n?Object(W.jsx)($,{content:e}):Object(W.jsx)(ae,{content:e})},e.id)}))})},e)},h=function(){for(var e=[],t=0;t<f;t++)e.push(x(t+1));d(e)};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(Q.a,{className:"pagenation text-center",children:[Object(W.jsx)("strong",{children:i+1})," / ",f]}),Object(W.jsx)(je.a,{activeIndex:i,onSelect:function(e,t){j(e)},prevIcon:b,nextIcon:O,indicators:!1,controls:!0,interval:null,children:u})]})},oe=a(89),ue=a(86),de=a(87),be=a(88);a(129);var Oe=function(e){var t,a=e.type,c=e.message;return"error"===a&&(t=Object(W.jsx)(ue.a,{className:"alert-icon"})),"info"===a&&(t=Object(W.jsx)(de.a,{className:"alert-icon"})),"noPage"===a&&(t=Object(W.jsx)(be.a,{className:"alert-icon"})),Object(W.jsxs)(oe.a,{variant:"error"===a?"danger":"info"===a?"success":"secondary",children:[t," ",c]})},fe=a(34);a(130);var xe=function(){var e=Object(V.b)(),t=Object(V.c)((function(e){return e.spacecraft.error})),a=Object(V.c)((function(e){return e.spacecraft.isLoading})),n=Object(V.c)((function(e){return e.spacecraft.spacecraft.results}));return Object(c.useEffect)((function(){e(w())}),[]),Object(W.jsxs)(Y.a,{className:"flex-column pt-5",children:[Object(W.jsxs)(Q.a,{className:"spacecraft-heading",children:[Object(W.jsx)("h1",{children:"Spacecraft"}),Object(W.jsx)("h2",{children:"Explore the spacecraft we use to stay in orbit."})]}),Object(W.jsx)(Q.a,{children:Object(W.jsx)(Y.a,{className:"position-relative",children:t?Object(W.jsx)(Oe,{type:"error",message:t}):a?Object(W.jsx)(fe.a,{animation:"border",role:"status",className:"loading"}):Object(W.jsx)(le,{data:n,numPerPage:4,section:"spacecraft"})})})]})};a(131);var he=function(){var e=Object(V.b)(),t=Object(V.c)((function(e){return e.spacecraftDetails.error})),a=Object(V.c)((function(e){return e.spacecraftDetails.isLoading})),n=Object(V.c)((function(e){return e.spacecraftDetails.spacecraftDetails})),r=Object(V.c)((function(e){return e.spacecraft.spacecraft.results})),s=Object(U.f)(),i=Object(U.g)().id,j=Object(c.useState)(null),l=Object(Z.a)(j,2),o=l[0],u=l[1],d=r.length;Object(c.useEffect)((function(){e(w())}),[]),Object(c.useEffect)((function(){u(m(r,i)+1),e(A(i))}),[i,r,e]);var b=function(){var e=n.in_use,t=n.human_rated,a=n.crew_capacity;return Object(W.jsxs)("div",{className:"badges",children:[e?Object(W.jsx)(te.a,{bg:"info",children:"ACTIVE"}):Object(W.jsx)(te.a,{bg:"danger",children:"IN-ACTIVE"})," ",t?Object(W.jsx)(te.a,{bg:"success",children:"HUMAN RATED"}):Object(W.jsx)(te.a,{bg:"warning",text:"dark",children:"CARGO"})," ",a&&Object(W.jsxs)(te.a,{bg:"primary",children:["CREW CAPACITY: ",a]})]})},O=function(e){if(y(e.target)){var t=h("prev",r,i).selectedId;t&&s("/spacecraft/".concat(t))}},f=function(e){if(y(e.target)){var t=h("next",r,i).selectedId;t&&s("/spacecraft/".concat(t))}},x=function(){var e=n.height,t=n.agency,a=n.flight_life;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h3",{children:t.name}),e?Object(W.jsxs)("h4",{children:["Height: ",e,"M"]}):"",a?Object(W.jsxs)("h4",{children:["Flight Life: ",a]}):""]})};return Object(W.jsx)(W.Fragment,{children:t?Object(W.jsx)(Oe,{type:"error",message:t}):function(){var e=n.name,t=n.details,c=n.image_url;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(Y.a,{className:"spacecraft-details",children:[Object(W.jsx)(Q.a,{className:"col-btn text-start d-flex align-items-center",onClick:O,children:o>1?Object(W.jsx)(ie,{type:"prev"}):""}),Object(W.jsx)(Q.a,{children:Object(W.jsx)(Y.a,{className:"flex-column gap-3 pt-2",children:a?Object(W.jsx)(fe.a,{animation:"border",role:"status",className:"loading"}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(Q.a,{children:Object(W.jsxs)(Y.a,{children:[Object(W.jsxs)(Q.a,{lg:6,children:[Object(W.jsxs)("p",{className:"page",children:[Object(W.jsx)("strong",{children:o})," / ",d]}),Object(W.jsx)(ee.a,{src:c,alt:e,fluid:!0,className:"img-lg"})]}),Object(W.jsxs)(Q.a,{lg:6,children:[Object(W.jsx)("h2",{children:e}),b(),x(),Object(W.jsx)(Y.a,{className:"mt-4 d-inline-flex",children:Object(W.jsx)(G.b,{to:"/spacecraft",children:Object(W.jsx)(ie,{type:"goback"})})})]})]})}),Object(W.jsx)(Q.a,{children:Object(W.jsx)("p",{children:t})})]})})}),Object(W.jsx)(Q.a,{className:"col-btn text-end d-flex align-items-center",onClick:f,children:o<d&&Object(W.jsx)(ie,{type:"next"})})]})})}()})},me=a(66),pe=a(55);a(132);var ge=function(e){var t=e.onQueryHandler,a=Object(c.useState)(""),n=Object(Z.a)(a,2),r=n[0],s=n[1];return Object(W.jsx)(pe.a,{onSubmit:function(e){e.preventDefault(),r.trim()&&t(r.toLowerCase())},children:Object(W.jsxs)(me.a,{className:"search",children:[Object(W.jsx)(me.a.Text,{children:Object(W.jsx)(ce.e,{})}),Object(W.jsx)(pe.a.Control,{type:"text",placeholder:"Search astronauts..","aria-label":"Search astronauts",onChange:function(e){e.target.value.trim()||t(""),s(e.target.value)},value:r}),Object(W.jsx)(me.a.Text,{onClick:function(){t(""),s("")},className:"clear--search",children:Object(W.jsx)(ce.c,{})})]})})};a(133);var ve=function(e){var t=e.options,a=e.onChange,c=e.by,n=e.selectedOption;return Object(W.jsxs)(pe.a.Select,{"aria-label":"Default select example",className:"filter",onChange:function(e){a(e.target.value)},value:n,children:[Object(W.jsxs)("option",{value:"default",children:["Filter by ",c]}),t.map((function(e,t){return Object(W.jsx)("option",{value:e,children:e},t)}))]})};a(134);var Ne=function(){var e=Object(V.b)(),t=Object(V.c)((function(e){return e.astronauts.error})),a=Object(V.c)((function(e){return e.astronauts.isLoading})),n=Object(V.c)((function(e){return e.astronauts.astronauts})),r=Object(c.useState)("default"),s=Object(Z.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)([]),o=Object(Z.a)(l,2),u=o[0],d=o[1],b=Object(c.useState)(""),O=Object(Z.a)(b,2),f=O[0],h=O[1];return Object(c.useEffect)((function(){e(T())}),[]),Object(c.useEffect)((function(){var e;"default"===i&&(f&&(e=N(n,f)),f||(e=n)),"default"!==i&&(f&&(e=N(v(n,i),f)),f||(e=v(n,i))),d(e),localStorage.setItem("finalResults",JSON.stringify(e))}),[n,i,f]),Object(W.jsxs)(Y.a,{className:"flex-column",children:[Object(W.jsxs)(Q.a,{className:"astronauts-heading",children:[Object(W.jsx)("h1",{children:"Astronauts"}),Object(W.jsx)("h2",{children:"Meet the exceptional people that have ventured into space."})]}),Object(W.jsx)(Q.a,{children:Object(W.jsxs)(Y.a,{className:"my-5",children:[Object(W.jsx)(Q.a,{md:6,sm:12,children:Object(W.jsx)(ge,{onQueryHandler:function(e){h(e)}})}),Object(W.jsx)(Q.a,{md:6,sm:12,children:Object(W.jsx)(ve,{options:x,by:"status",onChange:j,value:i})}),Object(W.jsxs)(Q.a,{className:"mt-3",children:[f?Object(W.jsx)(Oe,{type:"info",message:"".concat(u.length,' search results for "').concat(f,'"')}):"",!a&&f&&0===u.length?Object(W.jsx)(Oe,{type:"error",message:"Sorry No results found."}):""]})]})}),Object(W.jsx)(Q.a,{children:Object(W.jsx)(Y.a,{className:"position-relative",children:t?Object(W.jsx)(Oe,{type:"error",message:t}):a?Object(W.jsx)(fe.a,{animation:"border",role:"status",className:"loading"}):Object(W.jsx)(le,{data:u,numPerPage:8,section:"astronauts"})})})]})};a(135);var ye=function(){var e=Object(V.b)(),t=Object(U.f)(),a=Object(U.g)().id,n=Object(V.c)((function(e){return e.astronautDetails.error})),r=Object(V.c)((function(e){return e.astronautDetails.isLoading})),s=Object(V.c)((function(e){return e.astronautDetails.astronautDetails})),i=Object(V.c)((function(e){return e.astronauts.astronauts})),j=Object(c.useState)(null),l=Object(Z.a)(j,2),o=l[0],u=l[1],d=localStorage.getItem("finalResults"),b=d?JSON.parse(d):i,O=b.length;Object(c.useEffect)((function(){e(T())}),[]),Object(c.useEffect)((function(){u(m(b,a)+1),e(F(a))}),[a]);var f=function(e){var t=e.toLowerCase();return Object(W.jsx)(te.a,{className:"mb-3",bg:"active"===t?"primary":"retired"===t?"danger":"secondary",children:e})},x=function(e){if(y(e.target)){var c=h("prev",b,a).selectedId;c&&t("/astronauts/".concat(c))}},p=function(e){if(y(e.target)){var c=h("next",b,a).selectedId;c&&t("/astronauts/".concat(c))}},g=function(){var e=s.nationality,t=s.agency,a=s.bio,c=s.date_of_birth,n=s.status,r=new Date(c).toLocaleDateString();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h3",{children:t.name}),f(n.name),Object(W.jsx)("h4",{children:e}),Object(W.jsxs)("h4",{children:["Date of birth: ",r]}),Object(W.jsx)("p",{children:a})]})};return Object(W.jsx)(W.Fragment,{children:n?Object(W.jsx)(Oe,{type:"error",message:n}):function(){var e=s.profile_image,t=s.name,a=s.wiki;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(Y.a,{className:"astronaut-details",children:[Object(W.jsx)(Q.a,{className:"col-btn text-start d-flex align-items-center",onClick:x,children:o>1?Object(W.jsx)(ie,{type:"prev"}):""}),Object(W.jsx)(Q.a,{children:Object(W.jsx)(Y.a,{className:"flex-column gap-3 pt-2",children:r?Object(W.jsx)(fe.a,{animation:"border",role:"status",className:"loading"}):Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(Q.a,{children:Object(W.jsxs)(Y.a,{children:[Object(W.jsxs)(Q.a,{lg:3,children:[Object(W.jsxs)("p",{className:"page",children:[Object(W.jsx)("strong",{children:o})," / ",O]}),Object(W.jsx)(ee.a,{src:e,alt:t,fluid:!0,className:"img-lg--astroDetails"})]}),Object(W.jsxs)(Q.a,{lg:9,children:[Object(W.jsxs)("h2",{children:[t," ",Object(W.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(W.jsx)(ie,{type:"wiki"})})]}),g(),Object(W.jsx)(Y.a,{className:"mt-4 align-items-center d-inline-flex",children:Object(W.jsx)(G.b,{to:"/astronauts",children:Object(W.jsx)(ie,{type:"goback"})})})]})]})})})})}),Object(W.jsx)(Q.a,{className:"col-btn text-end d-flex align-items-center",onClick:p,children:o<O&&Object(W.jsx)(ie,{type:"next"})})]})})}()})};a(136);var Se=function(e){var t=e.content,a=t.imageUrl,c=t.title,n=t.newsSite,r=t.updatedAt,s=t.url,i=new Date(r).toLocaleString();return Object(W.jsx)(H.a,{className:"news-box my-3",children:Object(W.jsxs)(Y.a,{children:[Object(W.jsx)(Q.a,{md:3,sm:12,className:"img-box--news",children:Object(W.jsx)("img",{src:a,alt:c,className:"img-sm--news "})}),Object(W.jsxs)(Q.a,{md:9,sm:12,className:"info-box--news",children:[Object(W.jsx)(H.a.Title,{children:c}),Object(W.jsxs)(H.a.Subtitle,{children:[Object(W.jsx)("span",{children:n}),Object(W.jsx)("span",{className:"updated",children:i})]}),Object(W.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(W.jsx)(X,{children:"READ MORE"})})]})]})})};var we=function(){var e=Object(V.b)(),t=Object(V.c)((function(e){return e.news.error})),a=Object(V.c)((function(e){return e.news.isLoading})),n=Object(V.c)((function(e){return e.news.news})),r=Object(c.useState)(null),s=Object(Z.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)([]),o=Object(Z.a)(l,2),u=o[0],d=o[1];Object(c.useEffect)((function(){e(_())}),[]),Object(c.useEffect)((function(){var e;d((e=i,n.filter((function(t){return t.newsSite.includes(e)}))))}),[i,n,n.length]);var b=function(e){return e.map((function(e){return Object(W.jsx)(Se,{content:e},e.id)}))};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(Y.a,{className:"my-3 pt-4",children:[Object(W.jsx)("h1",{children:"News"}),Object(W.jsx)("h2",{children:"Check the latest spaceflight-related news."}),Object(W.jsx)(Q.a,{md:6,sm:12}),Object(W.jsx)(Q.a,{md:6,sm:12,children:Object(W.jsx)(ve,{options:f,onChange:j,by:"news site"})})]}),Object(W.jsx)(Y.a,{className:"px-2",children:t?Object(W.jsx)(Oe,{type:"error",message:t}):a?Object(W.jsx)(fe.a,{animation:"border",role:"status",className:"loading"}):i&&"default"!==i?0===u.length?Object(W.jsx)(Oe,{type:"error",message:"Sorry No results found."}):b(u):b(n)})]})};var Ce=function(){return Object(W.jsx)(Oe,{type:"noPage",message:"Page not found!"})},Le=a(56),De=a(44),Ae=a(70);a(137);var ke=function(){var e=["spacecraft","astronauts","news"];return Object(W.jsx)("header",{children:Object(W.jsx)(Le.a,{bg:"dark",variant:"dark",expand:"md",children:Object(W.jsxs)(De.a,{children:[Object(W.jsx)(Le.a.Brand,{children:Object(W.jsxs)(G.c,{to:"/",className:function(e){return e.isActive?"active-menu":""},children:[Object(W.jsx)(ce.d,{}),"COSMOS"]})}),Object(W.jsx)(Le.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(W.jsx)(Le.a.Collapse,{id:"responsive-navbar-nav",children:Object(W.jsx)(Ae.a,{className:"ms-auto nav-container",children:e.map((function(e,t){return Object(W.jsx)(Ae.a.Item,{children:Object(W.jsx)(G.c,{to:"/".concat(e),className:function(e){return e.isActive?"active-menu":""},children:e})},t)}))})})]})})})};a(140);var Ie=function(e){var t=e.children,a=Object(U.e)().pathname;return"/astronauts"===a||"/news"===a?Object(W.jsx)("main",{children:Object(W.jsx)(De.a,{children:t})}):Object(W.jsx)("main",{className:"position-relative",children:Object(W.jsx)(De.a,{className:"main-container",children:t})})};var Te=function(){return Object(W.jsx)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3",children:Object(W.jsx)(De.a,{className:"text-center text-muted",children:"Made with \u2764 In Melbourne, Australia \xb7 Coded by Jinok"})})};a(141);var Ee=function(){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(G.a,{children:[Object(W.jsx)(ke,{}),Object(W.jsx)(Ie,{children:Object(W.jsxs)(U.c,{children:[Object(W.jsx)(U.a,{path:"/",element:Object(W.jsx)(z,{})}),Object(W.jsx)(U.a,{path:"spacecraft",element:Object(W.jsx)(xe,{})}),Object(W.jsx)(U.a,{path:"spacecraft/:id",element:Object(W.jsx)(he,{})}),Object(W.jsx)(U.a,{path:"astronauts",element:Object(W.jsx)(Ne,{})}),Object(W.jsx)(U.a,{path:"astronauts/:id",element:Object(W.jsx)(ye,{})}),Object(W.jsx)(U.a,{path:"news",element:Object(W.jsx)(we,{})}),Object(W.jsx)(U.a,{path:"*",element:Object(W.jsx)(Ce,{})})]})})]}),Object(W.jsx)(Te,{})]})};r.a.render(Object(W.jsx)(V.a,{store:M,children:Object(W.jsx)(Ee,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.39b31c92.chunk.js.map