(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{42:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(16),s=a.n(c),i=a(3),o=a(4),u=a(6),h=a(5),l=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{value:this.state.query,onChange:this.handleChange,className:"SearchForm-input",type:"text",placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=a(17),p=a.n(j),m=(a(41),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:""},e.onChangeQuery=function(t){e.setState({searchQuery:t}),e.fetchHits(t)},e.fetchHits=function(t){var a=e.state.currentPage;p.a.get("https://pixabay.com/api/?key=20305682-bc6c61caedc31d9f439895335&q=".concat(t,"&image_type=photo&per_page=12&page=").concat(a)).then((function(t){e.setState((function(e){return{hits:t.data.hits,currentPage:e.currentPage+1}}))}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.hits;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{onSubmit:this.onChangeQuery}),Object(l.jsx)("ul",{children:e.map((function(e){var t=e.id,a=e.webformatURL,n=e.type;return Object(l.jsx)("li",{children:Object(l.jsx)("img",{src:a,alt:n})},t)}))}),Object(l.jsxs)("button",{type:"button",onClick:this.fetchHits,children:[" ","Load more"]})]})}}]),a}(n.Component));s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bf0cc6ad.chunk.js.map