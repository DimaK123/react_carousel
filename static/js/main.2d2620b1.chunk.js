(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a,i=n(10),s=n.n(i),r=n(2),c=n(8),o=n(3),m=n(4),l=n(6),u=n(5),h=n(1),p=n.n(h),b=(n(15),n(9)),d=n.n(b),g=(n(16),n(0));!function(e){e.previous="Prev",e.next="Next"}(a||(a={}));var j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={move:0},e.moveAction=function(t){var n=t.currentTarget.innerText,a=e.props,i=a.images,s=a.step,r=a.frameSize,c=a.itemWidth,o=a.infinite,m=c*i.length-r*c;"Prev"===n&&e.setState((function(e){var t=e.move,n=t-s*c;switch(!0){case 0===t&&o:return{move:m};case n<=0:return{move:0};default:return{move:n}}})),"Next"===n&&e.setState((function(e){var t=e.move,n=t+s*c;switch(!0){case t===m&&!o:return null;case t===m&&o:return{move:0};case n>=m:return{move:m};default:return{move:n}}}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.frameSize,a=e.itemWidth,i=e.animationDuration,s=e.infinite,r=this.state.move,c=a*t.length-n*a;return Object(g.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*a,"px")},children:[Object(g.jsx)("ul",{className:"Carousel__list",style:{transform:"translate(-".concat(r,"px)"),transition:"transform ".concat(i,"ms")},children:t.map((function(e,t){return Object(g.jsx)("li",{className:"Carousel__list-item",style:{minWidth:a,height:a,backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},"".concat(t+1))}))}),Object(g.jsxs)("div",{className:"Carousel__buttons",children:[Object(g.jsx)("button",{className:d()("Carousel__buttons-left",{"Carousel__buttons-left_disabled":!(0!==r||s)}),disabled:!(0!==r||s),type:"button",onClick:this.moveAction,children:"Prev"}),Object(g.jsx)("button",{"data-cy":"Next",className:d()("Carousel__buttons-right",{"Carousel__buttons-right_disabled":!(r!==c||s)}),disabled:!(r!==c||s),type:"button",onClick:this.moveAction,children:"Next"})]})]})}}]),n}(p.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value,s=n.type,o=n.checked,m=n.max,l=n.min;e.setState((function(e){var t=i;return+i>+m&&(t=m),+i<+l&&(t=l),Object(c.a)(Object(c.a)({},e),{},Object(r.a)({},a,"checkbox"===s?o:+t))}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,s=e.animationDuration,r=e.infinite;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(g.jsx)(j,{images:t,step:n,frameSize:a,itemWidth:i,animationDuration:s,infinite:r}),Object(g.jsxs)("form",{action:"post",className:"App__Form",children:[Object(g.jsxs)("label",{className:"App__Form-input",children:["Item Width",Object(g.jsx)("input",{type:"number",name:"itemWidth",min:130,max:500,value:i,onChange:this.handleChange})]}),Object(g.jsxs)("label",{className:"App__Form-input",children:["Frame Size",Object(g.jsx)("input",{type:"number",name:"frameSize",value:a,min:1,max:t.length,onChange:this.handleChange})]}),Object(g.jsxs)("label",{className:"App__Form-input",children:["Step",Object(g.jsx)("input",{type:"number",name:"step",value:n,min:1,max:10,onChange:this.handleChange})]}),Object(g.jsxs)("label",{className:"App__Form-input",children:["Animation Duration",Object(g.jsx)("input",{type:"number",name:"animationDuration",value:s,min:1e3,onChange:this.handleChange})]}),Object(g.jsxs)("label",{className:"App__Form-input",children:["Infinite",Object(g.jsx)("input",{type:"checkbox",name:"infinite",checked:r,onChange:this.handleChange})]})]})]})}}]),n}(p.a.Component),f=v;s.a.render(Object(g.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2d2620b1.chunk.js.map