(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(5),n=a.n(i),s=a(8),r=a(6),o=a(7),l=a(10),c=a(9),d=a(3),u=a(1),m=a.n(u),h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],p=(a(4),a(15),a(0)),g=m.a.memo((function(e){var t=e.todos;return Object(p.jsx)("ul",{className:"cards",children:t.map((function(e){var t=e.user,a=e.id,i=e.title;return Object(p.jsx)("li",{className:"cards__card-todo card",children:t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"cards-title",children:t.name}),Object(p.jsx)("div",{className:"cards-text",children:i})]})},a)}))})})),y=(a(17),h.map((function(e){var t=b.find((function(t){return t.id===e.userId}))||null;return Object(d.a)(Object(d.a)({},e),{},{user:t})}))),f=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).latestId=1,e.state={userId:1,title:"",validatedInput:!0,validatedSelect:!0},e.chooseUser=function(t){e.setState({userId:+t.target.value,validatedSelect:!0})},e.inputTitle=function(t){var a=t.target.value;e.setState({title:a,validatedInput:!0})},e.validate=function(t,a){var i=!0;return t||(i=!1,e.setState({validatedSelect:!1})),a||(i=!1,e.setState({validatedInput:!1})),i},e.addTodo=function(t){t.preventDefault();var a=e.state,i=a.userId,n=a.title;if(e.validate(i,n)){var r={id:e.latestId+1,user:b.find((function(e){return e.id===i}))||null,userId:i,title:n,completed:!1};y=[].concat(Object(s.a)(y),[r]),e.setState({userId:0,title:""})}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userId,a=e.title,i=e.validatedInput,n=e.validatedSelect;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"App__title",children:"Add todo form"}),Object(p.jsxs)("form",{action:"",className:"todo-form",onSubmit:this.addTodo,children:[Object(p.jsxs)("label",{htmlFor:"title",className:"todo-form__label",children:[Object(p.jsx)("input",{id:"title",type:"text",name:"title",className:"form-control",placeholder:"Title",autoComplete:"off",value:a,onChange:this.inputTitle}),!i&&Object(p.jsx)("p",{className:"alert alert-danger",role:"alert",children:"Please enter the title"})]}),Object(p.jsxs)("label",{htmlFor:"userId",className:"todo-form__label",children:[Object(p.jsxs)("select",{name:"userId",id:"userId",className:"form-select","aria-label":"Default select example",value:t,onChange:this.chooseUser,children:[Object(p.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),b.map((function(e){var t=e.id,a=e.name;return Object(p.jsx)("option",{value:t,children:a},t)}))]}),!n&&Object(p.jsx)("p",{className:"alert alert-danger",role:"alert",children:"Please choose a user"})]}),Object(p.jsx)("button",{type:"submit",className:"button btn btn-primary",children:"Add"})]}),Object(p.jsx)(g,{todos:y})]})}}]),a}(m.a.Component);n.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e5bb38ec.chunk.js.map