(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),o=a.n(i),c=(a(24),a(2)),l=a(3),s=a(5),u=a(4),m=a(6);a(25);var v=function(e){var t=e.message?e.message:"Welcome To The Movie Festival";return r.a.createElement("header",{className:"headerComponent"},r.a.createElement("h1",null," ",e.title," "),r.a.createElement("h2",null," ",t," "))};var d=function(e){return r.a.createElement("footer",{className:"footerComponent"},r.a.createElement("h1",null," \xa9 This is Toronto Movie Festival 2019."))},h=a(8),p=a.n(h),f=a(16),E=(a(27),a(17)),g=a.n(E),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={movies:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"getMovieData",value:function(){var e=Object(f.a)(p.a.mark(function e(){var t,a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=1;case 2:if(!(a<39)){e.next=11;break}return e.next=5,g.a.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"d1533d4ca4c407672b61788a01df4c08",language:"en-US",page:a}});case 5:n=e.sent,r=n.data.results,r.filter(function(e){if(2019===new Date(e.release_date).getFullYear())return t.push(e),t});case 8:a++,e.next=2;break;case 11:t.sort(function(e,t){return new Date(e.release_date)-new Date(t.release_date)}),this.setState({movies:t});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderLoader",value:function(){return r.a.createElement("p",null," ...Loading ")}},{key:"renderMovies",value:function(){var e=this;return this.state.movies.map(function(t){var a=t.original_title,n=t.overview,i=t.popularity,o=t.release_date,c=t.poster_path,l=t.id;if(i>10)return r.a.createElement("div",{key:l,className:"movieCard",onClick:function(){e.props.setSelectedMovie(l)}},r.a.createElement("div",{className:"imgDiv"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(c),alt:""})),r.a.createElement("div",{className:"contentDiv"},r.a.createElement("h2",{className:"movieName"}," Movie Name: ",a),r.a.createElement("h4",null," Release Date: ",o," "),r.a.createElement("h4",null," Popularity: ",i),r.a.createElement("p",null,r.a.createElement("span",{className:"description"},"Description:")," ",n)))})}},{key:"render",value:function(){return r.a.createElement("section",{className:"movieListComponent"},r.a.createElement("h2",null," Here's The Movie List "),r.a.createElement("div",{className:"movieList"},this.state.movies.length?this.renderMovies():this.renderLoader()))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).setSelectedMovie=function(t){e.setState({Selected_Movie_ID:t})},e.state={Selected_Movie_ID:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(v,{title:"Toronto Movie Festival",message:"Browse you're favorite movie from here."}),r.a.createElement("main",null,r.a.createElement(w,{setSelectedMovie:this.setSelectedMovie})),r.a.createElement(d,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.7d5c250c.chunk.js.map