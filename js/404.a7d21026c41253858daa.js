(self.webpackChunksearchBook=self.webpackChunksearchBook||[]).push([[404],{8404:function(e,t,i){"use strict";i.r(t);var o=i(7294),n=i(3407),r=i(2247),c=i(7270),a=i(5893);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(m,e);var t,i,o,l,p=(o=m,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(o);if(l){var i=C(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return u(this,e)});function m(){var e;I(this,m);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return A(d(e=p.call.apply(p,[this].concat(i))),"state",{card:null,isLoading:!1,error:!1,imgTag:null,imgLoaded:!1}),e}return t=m,(i=[{key:"componentDidMount",value:function(){var e=this;if(this.props.cardClick){this.setState({isLoading:!0});var t=document.createElement("img");t.alt="cover book",t.src="https://books.google.com/books/content?id=".concat(this.props.id,"&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"),t.onload=function(){e.setState({imgLoaded:!0})},(0,n.R)("https://www.googleapis.com/books/v1/volumes/".concat(this.props.id)).then((function(t){e.setState({card:t,cardClickInner:!1})})).catch((function(t){e.setState({error:!0}),console.error("Error ".concat(t))})).finally((function(){e.setState({cardClickInner:!1,isLoading:!1})}))}}},{key:"render",value:function(){var e,t,i,o,n,l,I=this.props.id,g=this.state,s=g.card,u=g.isLoading;return s?(0,a.jsxs)("div",{className:"detailed-card",children:[(0,a.jsx)("aside",{className:"book-image",children:(0,a.jsx)("div",{className:"adapt-img",style:{minHeight:"368px"},children:this.state.imgLoaded?(0,a.jsx)("img",{src:"https://books.google.com/books/content?id=".concat(I,"&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"),alt:"image book"}):(0,a.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,a.jsx)("img",{alt:"image loader",style:{width:"100px",height:"100px",position:"absolute",top:"50%",left:"50%"},src:c})})})}),(0,a.jsx)("div",{className:"datailed-card__container",children:(0,a.jsxs)("main",{className:"datailed-card__desc",children:[(0,a.jsx)("p",{className:"detailed-card__categories",children:null===(e=s.volumeInfo)||void 0===e||null===(t=e.valueOfCategory)||void 0===t?void 0:t[0]}),(0,a.jsx)("p",{className:"detailed-card__title",children:null===(i=s.volumeInfo)||void 0===i?void 0:i.title}),(0,a.jsx)("p",{className:"authors",children:"Авторы:"}),(0,a.jsx)("p",{className:"detailed-card__authors",children:null===(o=s.volumeInfo)||void 0===o||null===(n=o.authors)||void 0===n?void 0:n.join(", ")}),(0,a.jsx)("p",{className:"detailed-card__area",children:null===(l=s.volumeInfo)||void 0===l?void 0:l.description})]})})]}):u?(0,a.jsx)(r.Z,{}):null}}])&&g(t.prototype,i),m}(o.Component);t.default=p},7270:function(e){"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIGlkPSJMNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCiAgICAgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDAgMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPGNpcmNsZSBmaWxsPSJyZWQiIHN0cm9rZT0ibm9uZSIgY3g9IjYiIGN5PSI1MCIgcj0iNiI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybQogICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgIGR1cj0iMXMiCiAgICAgICAgICAgIHR5cGU9InRyYW5zbGF0ZSIKICAgICAgICAgICAgdmFsdWVzPSIwIDE1IDsgMCAtMTU7IDAgMTUiCiAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIgogICAgICAgICAgICBiZWdpbj0iMC4xIi8+CiAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGZpbGw9IiNibHVlIiBzdHJva2U9Im5vbmUiIGN4PSIzMCIgY3k9IjUwIiByPSI2Ij4KICAgIDxhbmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIKICAgICAgICAgICAgZHVyPSIxcyIKICAgICAgICAgICAgdHlwZT0idHJhbnNsYXRlIgogICAgICAgICAgICB2YWx1ZXM9IjAgMTAgOyAwIC0xMDsgMCAxMCIKICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiCiAgICAgICAgICAgIGJlZ2luPSIwLjIiLz4KICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgZmlsbD0iYXF1YSIgc3Ryb2tlPSJub25lIiBjeD0iNTQiIGN5PSI1MCIgcj0iNiI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybQogICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgIGR1cj0iMXMiCiAgICAgICAgICAgIHR5cGU9InRyYW5zbGF0ZSIKICAgICAgICAgICAgdmFsdWVzPSIwIDUgOyAwIC01OyAwIDUiCiAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIgogICAgICAgICAgICBiZWdpbj0iMC4zIi8+CiAgPC9jaXJjbGU+Cjwvc3ZnPg=="}}]);