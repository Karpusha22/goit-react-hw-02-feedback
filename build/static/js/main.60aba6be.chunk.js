(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={statistics:"Statistics_statistics__2337R"}},,,,,,,function(t,e,n){t.exports={btn:"FeedbackOptions_btn__h-1zj"}},function(t,e,n){t.exports={notification:"Notification_notification__Tgmlt"}},function(t,e,n){t.exports={section:"Section_section__snUHO"}},function(t,e,n){t.exports={Container:"Container_Container___MQpf"}},,,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),r=n(6),o=n(7),l=n(8),d=n(14),u=n(13),b=n(2),j=n.n(b),h=n(0),f=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:j.a.statistics,children:["Good:",e]}),Object(h.jsxs)("li",{className:j.a.statistics,children:["Neutral:",n]}),Object(h.jsxs)("li",{className:j.a.statistics,children:["Bad:",c]}),Object(h.jsxs)("li",{className:j.a.statistics,children:["Total:",a]}),Object(h.jsxs)("li",{className:j.a.statistics,children:["Positive feedback:",i,"%"]})]})})},O=n(3),x=n.n(O),p=n(9),v=n.n(p),m=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsx)("button",{className:v.a.btn,type:"button",onClick:function(){return n(t)},children:t.charAt(0).toUpperCase()+t.slice(1)},t)}))})};m.prototype={good:x.a.func.isRequired,neutral:x.a.func.isRequired,bad:x.a.func.isRequired};var g=m,_=n(10),k=n.n(_),N=function(t){var e=t.message;return Object(h.jsx)("h3",{className:k.a.notification,children:e})},y=n(11),C=n.n(y),F=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:C.a.section,children:[Object(h.jsx)("h2",{children:e}),n]})},w=n(12),S=n.n(w),L=function(t){var e=t.children;return Object(h.jsx)("div",{className:S.a.Container,children:e})},P=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,a=e+c+n,i=Math.round(e/a*100),s=Object.keys(this.state);return Object(h.jsxs)(L,{children:[Object(h.jsx)(F,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:s,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(F,{title:"Statistics",children:a?Object(h.jsx)(f,{good:e,neutral:n,bad:c,total:a,positivePercentage:i}):Object(h.jsx)(N,{message:"No feedback given"})})]})}}]),n}(c.Component),R=P;n(22),n(23);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.60aba6be.chunk.js.map