(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(7),s=n.n(i),o=(n(15),n(9)),u=n(2),b=n(3),j=n(5),l=n(4),h=n(8),f=n(18),m=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.submitForm=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.submitForm(Object(f.a)(),a,c),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.submitForm,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.inputChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Phone",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",name:"number",value:this.state.number,onChange:this.inputChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component);var O=function(t){var e=t.filterValue,n=t.filterInput;return Object(a.jsxs)("label",{children:["Find contacts by name ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){return n(t)}})]})};var d=function(t){var e=t.contacts,n=t.deleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsxs)("li",{children:[t.name,": ",t.number,Object(a.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},p=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.filterChange=function(e){var n=e.target.value;t.setState({filter:n})},t.addContact=function(e,n,a){t.isContactExists(n)?alert(n+" is already in contacts"):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{id:e,name:n,number:a}])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.isContactExists=function(e){return t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Phone book"}),Object(a.jsx)(m,{submitForm:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O,{filterValue:this.state.filter,filterInput:this.filterChange}),Object(a.jsx)(d,{contacts:t,deleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.85b1f76d.chunk.js.map