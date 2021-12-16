(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(17),n(11)),i=n(3),l=n(12),u=n(7),b=n.n(u),m=n(2),j=n.n(m),d=n(0),p=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],b=l[1],m=function(t){var e=t.target,n=e.name,a=e.value;"name"===n&&r(a),"number"===n&&b(a)},p=function(){r(""),b("")};return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(s,u),p()},className:j.a.form,children:[Object(d.jsxs)("label",{className:j.a.label,children:["Name",Object(d.jsx)("input",{className:j.a.input,type:"text",name:"name",value:s,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(d.jsxs)("label",{className:j.a.label,children:["Number",Object(d.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:u,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(d.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})},h=n(5),f=n.n(h),O=function(t){var e=t.filteredContacts,n=t.onDeleteContacts;return Object(d.jsx)("ul",{className:f.a.list,children:e.map((function(t){return Object(d.jsxs)("li",{className:f.a.item,children:[Object(d.jsxs)("p",{className:f.a.text,children:[t.name,": ",t.number]}),Object(d.jsx)("button",{className:f.a.btn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},_=n(9),x=n.n(_),C=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n})]})},N="contacts",v=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),u=r[0],m=r[1];Object(a.useEffect)((function(){var t=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return null}}(N);t&&c(t)}),[]),Object(a.useEffect)((function(){!function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}(N,n)}),[n]);var j=function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))};return Object(d.jsxs)("div",{className:b.a.container,children:[Object(d.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(d.jsx)(p,{onSubmit:function(t,e){var a={id:Object(l.a)(),name:t,number:e};return n.some((function(t){return t.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(a.name," is already in contacts!")):c([a].concat(Object(o.a)(n)))}}),Object(d.jsx)("h2",{className:b.a.title,children:"Contacts"}),n.length>1&&Object(d.jsx)(C,{value:u,onChange:function(t){m(t.target.value)}}),!!j().length&&Object(d.jsx)(O,{filteredContacts:j(),onDeleteContacts:function(t){c((function(e){return m(""),e.filter((function(e){return e.id!==t}))}))}})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__3F-dl",label:"ContactForm_label__QY1OG",input:"ContactForm_input__FRtOU",btn:"ContactForm_btn__1GZKJ"}},5:function(t,e,n){t.exports={list:"ContactList_list__3AieU",text:"ContactList_text__3HC6F",btn:"ContactList_btn__3Dh3e"}},7:function(t,e,n){t.exports={container:"App_container__3lHwJ",title:"App_title__1pxVH"}},9:function(t,e,n){t.exports={label:"Filter_label__2P_5s",input:"Filter_input__266qj"}}},[[19,1,2]]]);
//# sourceMappingURL=main.bf85ccda.chunk.js.map