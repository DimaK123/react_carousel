(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n.n(i),s=n(2),r=n(3),c=n(5),o=n(4),l=n(1),u=n.n(l),m=(n(13),n(7)),p=n.n(m),h=(n(14),n(0)),b=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={move:0},e.moveAction=function(t){var n=t.currentTarget.innerText,i=e.props,a=i.images,s=i.step,r=i.frameSize,c=i.itemWidth,o=i.infinite,l=c*a.length-r*c;"Prev"===n&&e.setState((function(e){var t=e.move,n=t-s*c;switch(!0){case 0===t&&o:return{move:l};case n<=0:return{move:0};default:return{move:n}}})),"Next"===n&&e.setState((function(e){var t=e.move,n=t+s*c;switch(!0){case t===l&&!o:return null;case t===l&&o:return{move:0};case n>=l:return{move:l};default:return{move:n}}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.frameSize,i=e.itemWidth,a=e.animationDuration,s=e.infinite,r=this.state.move,c=i*t.length-n*i;return Object(h.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*i,"px")},children:[Object(h.jsx)("ul",{className:"Carousel__list",style:{transform:"translate(-".concat(r,"px)"),transition:"transform ".concat(a,"ms")},children:t.map((function(e,t){return Object(h.jsx)("li",{className:"Carousel__list-item",style:{minWidth:i,height:i},children:Object(h.jsx)("img",{src:e,alt:"".concat(t+1),style:{width:"100%",height:"100%",objectFit:"cover"}})},"".concat(t+1))}))}),Object(h.jsxs)("div",{className:"Carousel__buttons",children:[Object(h.jsx)("button",{className:p()("Carousel__buttons-left",{"Carousel__buttons-left_disabled":!(0!==r||s)}),disabled:!(0!==r||s),type:"button",onClick:this.moveAction,children:"Prev"}),Object(h.jsx)("button",{className:p()("Carousel__buttons-right",{"Carousel__buttons-right_disabled":!(r!==c||s)}),disabled:!(r!==c||s),type:"button",onClick:this.moveAction,children:"Next"})]})]})}}]),n}(u.a.Component),j=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.step,a=t.frameSize,s=t.itemWidth,r=t.animationDuration,c=t.infinite;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"Carousel with ".concat(n.length," images")}),Object(h.jsx)(b,{images:n,step:i,frameSize:a,itemWidth:s,animationDuration:r,infinite:c}),Object(h.jsxs)("form",{action:"post",className:"App__Form",style:{width:"390px"},children:[Object(h.jsxs)("label",{className:"App__Form-input",children:["Item Width",Object(h.jsx)("input",{type:"number",value:s,onChange:function(t){e.setState({itemWidth:+t.currentTarget.value})}})]}),Object(h.jsxs)("label",{className:"App__Form-input",children:["Frame Size",Object(h.jsx)("input",{type:"number",value:a,onChange:function(t){e.setState({frameSize:+t.currentTarget.value})}})]}),Object(h.jsxs)("label",{className:"App__Form-input",children:["Step",Object(h.jsx)("input",{type:"number",value:i,onChange:function(t){e.setState({step:+t.currentTarget.value})}})]}),Object(h.jsxs)("label",{className:"App__Form-input",children:["Animation Duration",Object(h.jsx)("input",{type:"number",value:r,onChange:function(t){e.setState({animationDuration:+t.currentTarget.value})}})]}),Object(h.jsxs)("label",{className:"App__Form-input",children:["Infinite",Object(h.jsx)("input",{type:"checkbox",onChange:function(){e.setState({infinite:!c})}})]})]})]})}}]),n}(u.a.Component),g=j;a.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.731c4cc4.chunk.js.map