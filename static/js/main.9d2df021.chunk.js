(this["webpackJsonpmovie-award"]=this["webpackJsonpmovie-award"]||[]).push([[0],{59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),o=n(30),s=n.n(o),r=n(32),l=n(3);function j(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h1",{className:"text-center m-4",children:"THE SHOPPIES"})})}var d=n(12),O=n(31),m=n.n(O),v=function(e){return m.a.get("https://www.omdbapi.com/?s="+e+"&apikey=trilogy&Type=movie&page=1")},b=n(34),u=n(16),h=n(9),x="SEARCH_MOVIES_FOR_NOMINATION",M="DELETE_MOVIES_FROM_NOMINATION",N="ADD_MOVIES_FOR_NOMINATION",f=Object(i.createContext)({}),I=f.Provider;function g(e,t){switch(t.type){case x:return console.log("inside reducer SEARCH_MOVIES_FOR_NOMINATION"),console.log(t.allMovies),Object(h.a)(Object(h.a)({},e),{},{allMovies:t.allMovies});case N:if(console.log("inside reducer ADD_MOVIES_FOR_NOMINATION"),console.log(e.nominatedMovies),5===e.nominatedMovies.length)return Object(h.a)(Object(h.a)({},e),{},{nominatedMovies:Object(u.a)(e.nominatedMovies)});var n=e.nominatedMovies.includes(t.nominatedMovies);return console.log(n),n?Object(h.a)(Object(h.a)({},e),{},{nominatedMovies:Object(u.a)(e.nominatedMovies)}):Object(h.a)(Object(h.a)({},e),{},{nominatedMovies:[t.nominatedMovies].concat(Object(u.a)(e.nominatedMovies))});case M:var c=e.nominatedMovies.filter((function(e){return console.log("inside delete nominated movies"),console.log(e.imdbID),console.log(t.removeNominatedMovies),e.imdbID!==t.removeNominatedMovies}));return Object(h.a)(Object(h.a)({},e),{},{nominatedMovies:c});default:return e}}function p(e){e.value;var t=Object(b.a)(e,["value"]),n=Object(i.useReducer)(g,{allMovies:[],nominatedMovies:[]}),a=Object(d.a)(n,2),o=a[0],s=a[1];return Object(c.jsx)(I,Object(h.a)({value:[o,s]},t))}function S(){return Object(i.useContext)(f)}function T(){var e=S(),t=Object(d.a)(e,2),n=(t[0],t[1]),a=Object(i.useRef)();return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("form",{className:"row filter-form",children:Object(c.jsxs)("div",{className:"form-group m-4",children:[Object(c.jsx)("h3",{children:"Search Movie"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{name:"movie",id:"movie",ref:a}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault();var t=a.current.value;console.log("input value is ".concat(t)),v(t).then((function(e){console.log("Searchbar data from API"),console.log(e),console.log(e.data.Search),n({type:x,allMovies:e.data.Search})}))},children:" Search"})]})})})}var E=n(67),_=n(68);function w(e){var t=S(),n=Object(d.a)(t,2),i=n[0],a=n[1];return void 0===i.allMovies.length||0===i.allMovies.length||null===i.allMovies.length?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h6",{children:"Please Enter movie name for nomination"})}):Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:i.allMovies.map((function(e){return Object(c.jsxs)(E.a,{style:{width:"18rem"},className:"col-md- p-4 m-4",children:[Object(c.jsx)(E.a.Img,{variant:"top",src:e.Poster}),Object(c.jsxs)(E.a.Body,{children:[Object(c.jsxs)(E.a.Title,{children:["Movie Name: ",e.Title]}),Object(c.jsxs)(E.a.Text,{children:["Year: ",e.Year," "]}),Object(c.jsx)(_.a,{variant:"primary",onClick:function(){return function(e){var t=i.allMovies.find((function(t){return t.imdbID===e}));a({type:N,nominatedMovies:t})}(e.imdbID)},children:"Nominate"})]})]},e.imdbID)}))})})}function y(){var e=S(),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h4",{children:" YOUR NOMINATIONS ARE : "}),n.nominatedMovies.map((function(e){return Object(c.jsxs)(E.a,{style:{width:"18rem"},className:"col-md- p-4 m-4",children:[Object(c.jsx)(E.a.Img,{variant:"top",src:e.Poster}),Object(c.jsxs)(E.a.Body,{children:[Object(c.jsxs)(E.a.Title,{children:["Movie Name: ",e.Title]}),Object(c.jsxs)(E.a.Text,{children:["Year: ",e.Year," "]}),Object(c.jsx)(_.a,{variant:"primary",onClick:function(){return t=e.imdbID,void i({type:M,removeNominatedMovies:t});var t},children:"Remove"})]})]},e.imdbID)}))]})})}function D(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(j,{}),Object(c.jsx)(T,{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsx)(w,{})}),Object(c.jsx)("div",{className:"col-md",children:Object(c.jsx)(y,{})})]})]})}n(59);var A=function(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(p,{children:Object(c.jsx)(l.c,{children:Object(c.jsx)(l.a,{exact:!0,path:"/",component:D})})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};n(65);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.9d2df021.chunk.js.map