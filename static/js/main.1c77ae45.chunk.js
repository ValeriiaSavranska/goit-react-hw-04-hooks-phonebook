(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={label:"Filter_label__2P_5s",input:"Filter_input__266qj"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3F-dl",label:"ContactForm_label__QY1OG",input:"ContactForm_input__FRtOU",btn:"ContactForm_btn__1GZKJ"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(13),r=n.n(s),o=(n(20),n(14)),i=n(4),l=n(5),u=n(8),b=n(7),m=n(9),h=n.n(m),d=n(6),j=n(10),p=n(2),f=n.n(p),O=n(0),C={name:"",number:""},_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state=Object(j.a)({},C),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handelSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(j.a)({},t.state)),t.reset()},t.reset=function(){t.setState(Object(j.a)({},C))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handelSubmit,className:f.a.form,children:[Object(O.jsxs)("label",{className:f.a.label,children:["Name",Object(O.jsx)("input",{className:f.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(O.jsxs)("label",{className:f.a.label,children:["Number",Object(O.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(O.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=_,v=n(3),g=n.n(v),y=function(t){var e=t.filteredContacts,n=t.onDeleteContacts;return Object(O.jsx)("ul",{className:g.a.list,children:e.map((function(t){return Object(O.jsxs)("li",{className:g.a.item,children:[Object(O.jsxs)("p",{className:g.a.text,children:[t.name,": ",t.number]}),Object(O.jsx)("button",{className:g.a.btn,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},N=n(12),S=n.n(N),F=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(O.jsx)("input",{className:S.a.input,type:"text",value:e,onChange:n})]})},w=n(15),A="contacts",k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,c={id:Object(w.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return e.some((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(c.name," is already in contacts!")):{contacts:[c].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),filter:""}}))},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return null}}(A);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){t.contacts!==this.state.contacts&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){return null}}(A,this.state.contacts)}},{key:"render",value:function(){var t=this.getFilteredContacts();return Object(O.jsxs)("div",{className:h.a.container,children:[Object(O.jsx)("h1",{className:h.a.title,children:"Phonebook"}),Object(O.jsx)(x,{onSubmit:this.formSubmitHandler}),Object(O.jsx)("h2",{className:h.a.title,children:"Contacts"}),this.state.contacts.length>1&&Object(O.jsx)(F,{value:this.state.filter,onChange:this.changeFilter}),!!t.length&&Object(O.jsx)(y,{filteredContacts:t,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component),D=k;r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__3AieU",text:"ContactList_text__3HC6F",btn:"ContactList_btn__3Dh3e"}},9:function(t,e,n){t.exports={container:"App_container__3lHwJ",title:"App_title__1pxVH"}}},[[22,1,2]]]);
//# sourceMappingURL=main.1c77ae45.chunk.js.map