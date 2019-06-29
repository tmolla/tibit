(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(87)},41:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(16),o=a.n(l),r=a(92),c=a(93),s=a(94),m=a(13),u=a(7),d=a(8),h=a(10),b=a(9),g=a(11);a(41);var f=function(e){var t=e.children;return i.a.createElement("div",{className:"jumbotron mt-4"},t)};var E=function(){return i.a.createElement("footer",null,i.a.createElement("hr",null),i.a.createElement("p",{className:"pull-right"},i.a.createElement("i",{className:"fab fa-github"})," Proudly built using React.js"))},p=a(14),v=a.n(p),N={findTibits:function(e){return console.log("here is phrase "+e),v.a.get("/api/tibits/find/"+e)},getAllTibits:function(){return v.a.get("/api/tibits")},deleteTibit:function(e){return v.a.delete("/api/tibits/"+e)},createTibit:function(e){return v.a.post("/api/tibits",e)},updateTibit:function(e,t){return v.a.put("/api/tibits/"+e,t)}};function T(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function w(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return i.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var k=a(22),S=a.n(k),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={tibits:[],q:"",message:"Search For A Tibit To Begin!"},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(m.a)({},n,i)),console.log(a.state.q)},a.findTibits=function(){console.log(a.state.q),a.state.q.trim()?N.findTibits(a.state.q).then(function(e){console.log("fiinding tibits"),console.log(e.data),0!==e.data.length?a.setState({tibits:e.data}):a.setState({tibits:[],message:"No Tibits Found Matching your Query, Try a Different phrase"})}).catch(function(e){a.setState({tibits:[],message:e.message}),console.log("fiinding tibits catch")}):N.getAllTibits().then(function(e){console.log("getting all tibits"),0!==e.data.length?a.setState({tibits:e.data}):a.setState({tibits:[],message:"Database is empty"})}).catch(function(e){return a.setState({tibits:[],message:e.message})})},a.handleFormSubmit=function(e){e.preventDefault(),console.log("ouch!"),a.findTibits()},a.handleTibitDelete=function(e){var t=a.state.tibits.find(function(t){return t._id===e});N.deleteTibit(t._id).then(function(){return a.findTibits()})},a.handleTibitUpdate=function(e){var t=a.state.tibits.find(function(t){return t._id===e});N.updateTibit(t._id,{action:"Read the best book ever! "+Date()}).then(function(){return a.findTibits()})},a.handleTibitCreate=function(){N.createTibit({action:"Great Action"+Date(),goal:"Some Awesome Goal",location:"Someplace in Tucson",date:Date.now(),note:"This is a longer string"}).then(function(){return a.findTibits()})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(T,null,i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement(f,null,i.a.createElement("h1",{className:"text-center"},i.a.createElement("strong",null,"Tibit - Collect your action in one place!")),i.a.createElement("h2",{className:"text-center"},"Never forget any action.")))),i.a.createElement(w,null,i.a.createElement(S.a,{variant:"primary"},i.a.createElement(S.a.Heading,null,"We need a Home page"),i.a.createElement("p",null,"The Home page will be the first page one will see when they get to our site. It should be beautiful and usable. On this page we shoudl have some info that will keep the user informed."),i.a.createElement("hr",null),i.a.createElement("p",{className:"mb-0"},"Who wants to be a hero and take this on?"))),i.a.createElement(E,null))}}]),t}(n.Component);var j=function(e){var t=e.icon,a=e.title,n=e.children;return i.a.createElement("div",{className:"card mt-4"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h3",null,i.a.createElement("strong",null,i.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),i.a.createElement("div",{className:"card-body"},n))};var D=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"Query"},i.a.createElement("strong",null,"search word")),i.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Type word to search for in Tibits",name:"q",onChange:a,required:!0})),i.a.createElement("div",{className:"pull-right"},i.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg btn-danger float-right"},"Submit")))},O=(a(83),function(e){var t=e.children;return i.a.createElement("ul",{className:"list-group"},t)});function A(e){var t=e.children;return i.a.createElement("li",{className:"list-group-item"},t)}a(84);var q=function(e){var t=e.action,a=e.goal,n=e.date,l=e.location,o=e.note,r=e.DeleteButton,c=e.UpdateButton;return i.a.createElement(A,null,i.a.createElement(w,{className:"flex-wrap-reverse"},i.a.createElement(y,{size:"md-12"},i.a.createElement("div",{className:"btn-container"},i.a.createElement(c,null),i.a.createElement(r,null)))),i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement("p",{className:"font-italic small"},t))),i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},o&&i.a.createElement("p",{className:"font-italic small"},o),i.a.createElement("br",null))),i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement("hr",null)),i.a.createElement(y,{size:"md-4"},a&&i.a.createElement("p",null,a)),i.a.createElement(y,{size:"md-4"},l&&i.a.createElement("p",null,"(",l,")")),i.a.createElement(y,{size:"md-4"},n&&i.a.createElement("p",null,"(",n,")"))))},x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={tibits:[],q:"",message:"Search For A Tibit To Begin!"},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(m.a)({},n,i)),console.log(a.state.q)},a.findTibits=function(){console.log(a.state.q),a.state.q.trim()?N.findTibits(a.state.q).then(function(e){console.log("fiinding tibits"),console.log(e.data),0!==e.data.length?a.setState({tibits:e.data}):a.setState({tibits:[],message:"No Tibits Found Matching your Query, Try a Different phrase"})}).catch(function(e){a.setState({tibits:[],message:e.message}),console.log("fiinding tibits catch")}):N.getAllTibits().then(function(e){console.log("getting all tibits"),0!==e.data.length?a.setState({tibits:e.data}):a.setState({tibits:[],message:"Database is empty"})}).catch(function(e){return a.setState({tibits:[],message:e.message})})},a.handleFormSubmit=function(e){e.preventDefault(),a.findTibits()},a.handleTibitDelete=function(e){var t=a.state.tibits.find(function(t){return t._id===e});N.deleteTibit(t._id).then(function(){return a.findTibits()})},a.handleTibitUpdate=function(e){var t=a.state.tibits.find(function(t){return t._id===e});N.updateTibit(t._id,{action:"Read the best book ever! "+Date()}).then(function(){return a.findTibits()})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(T,null,i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement(j,{title:"Tibit Search",icon:"far fa-search"},i.a.createElement(D,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement(j,{title:"Search Results",icon:"camera"},this.state.tibits.length?i.a.createElement(O,null,this.state.tibits.map(function(t){return i.a.createElement(q,{key:t._id,action:t.action,goal:t.goal,location:t.location,date:t.date,note:t.note,UpdateButton:function(){return i.a.createElement("button",{onClick:function(){return e.handleTibitUpdate(t._id)},className:"btn btn-success btn-sm ml-2"},"Update")},DeleteButton:function(){return i.a.createElement("button",{onClick:function(){return e.handleTibitDelete(t._id)},className:"btn btn-primary btn-sm ml-2"},"Delete")}})})):i.a.createElement("h2",{className:"text-center"},this.state.message)))),i.a.createElement(E,null))}}]),t}(n.Component);var z=function(e){var t=e.action,a=e.goal,n=e.location,l=e.date,o=e.note,r=e.handleInputChange,c=e.handleFormSubmit;return i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"Action")),i.a.createElement("input",{className:"form-control",id:"Action",type:"text",value:t,placeholder:"Enter you action (mandatory)",name:"action",onChange:r,required:!0})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"Note")),i.a.createElement("input",{className:"form-control",id:"Note",type:"textarea",rows:"2",value:o,placeholder:"Enter any detail about action (optional)",name:"note",onChange:r})),i.a.createElement(w,null,i.a.createElement(y,{size:"md-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"Goal")),i.a.createElement("input",{className:"form-control",id:"Goal",type:"text",value:a,placeholder:"Type your goal here (optional)",name:"goal",onChange:r,required:!0}))),i.a.createElement(y,{size:"md-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"Location")),i.a.createElement("input",{className:"form-control",id:"Location",type:"text",value:n,placeholder:"Enter the location of action (optional)",name:"location",onChange:r,required:!0}))),i.a.createElement(y,{size:"md-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,i.a.createElement("strong",null,"Date")),i.a.createElement("input",{className:"form-control",id:"Location",type:"date",value:l,placeholder:"Enter the location of action (optional)",name:"date",onChange:r,required:!0})))),i.a.createElement("div",{className:"pull-right"},i.a.createElement("button",{onClick:c,type:"submit",className:"btn btn-lg btn-danger float-right"},"Submit")))},_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={tibits:[],action:"",goal:"",location:"",date:"",note:"",message:"Some message"},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(m.a)({},n,i))},a.getAllTibits=function(){N.getAllTibits().then(function(e){console.log("getting all tibits"),0!==e.data.length?a.setState({tibits:e.data}):a.setState({tibits:[],message:"Database is empty"})}).catch(function(e){return a.setState({tibits:[],message:e.message})})},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.action),N.createTibit({action:a.state.action,goal:a.state.goal,location:a.state.location,date:Date.now(),note:a.state.note}).then(function(){return a.getAllTibits()})},a.handleTibitDelete=function(e){var t=a.state.tibits.find(function(t){return t._id===e});N.deleteTibit(t._id).then(function(){return a.getAllTibits()})},a.handleTibitUpdate=function(e){var t=a.state.tibits.find(function(t){return t._id===e});N.updateTibit(t._id,{action:"Read the best book ever! "+Date()}).then(function(){return a.getAllTibits()})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getAllTibits()}},{key:"render",value:function(){var e=this;return i.a.createElement(T,null,i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement(j,{className:"mb-5",title:"Tibit Add",icon:"far fa-add"},i.a.createElement(z,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,action:this.state.action})))),i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement(j,{title:"Added Tibits",icon:"camera"},this.state.tibits.length?i.a.createElement(O,null,this.state.tibits.map(function(t){return i.a.createElement(q,{key:t._id,action:t.action,goal:t.goal,location:t.location,note:t.note,date:t.date,UpdateButton:function(){return i.a.createElement("button",{onClick:function(){return e.handleTibitUpdate(t._id)},className:"btn btn-success btn-sm ml-2"},"Update")},DeleteButton:function(){return i.a.createElement("button",{onClick:function(){return e.handleTibitDelete(t._id)},className:"btn btn-primary btn-sm ml-2"},"Delete")}})})):i.a.createElement("h2",{className:"text-center"},this.state.message)))),i.a.createElement(E,null))}}]),t}(n.Component);var F=function(){return i.a.createElement(T,{fluid:!0},i.a.createElement(w,null,i.a.createElement(y,{size:"md-12"},i.a.createElement(f,null,i.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),i.a.createElement("h1",{className:"text-center"},i.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},W=a(91),U=(a(85),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>991&&(e.open=!1),a.setState(e)},a.toggleNav=function(){a.setState({open:!a.state.open})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},i.a.createElement(W.a,{className:"navbar-brand",to:"/"},"TibiT"),i.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(W.a,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(W.a,{onClick:this.toggleNav,className:"/add"===window.location.pathname?"nav-link active":"nav-link",to:"/add"},"Add")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(W.a,{onClick:this.toggleNav,className:"/search"===window.location.pathname?"nav-link active":"nav-link",to:"/search"},"Search")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(W.a,{onClick:this.toggleNav,className:"/setting"===window.location.pathname?"nav-link active":"nav-link",to:"/setting"},"Setting")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(W.a,{onClick:this.toggleNav,className:"/login"===window.location.pathname?"nav-link active":"nav-link",to:"/login"},"Login")))))}}]),t}(n.Component));var I=function(){return i.a.createElement(r.a,null,i.a.createElement("div",null,i.a.createElement(U,null),i.a.createElement(c.a,null,i.a.createElement(s.a,{exact:!0,path:"/",component:C}),i.a.createElement(s.a,{exact:!0,path:"/search",component:x}),i.a.createElement(s.a,{exact:!0,path:"/add",component:_})," */}",i.a.createElement(s.a,{component:F}))))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");B?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):L(e)})}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.9765d6a7.chunk.js.map