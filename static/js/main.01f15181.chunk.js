(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(27)},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(8),a=n.n(i),l=(n(15),n(1)),c=n(2),s=n(4),u=n(3),h=n(5),f=n(6),p=(n(17),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"floor"},this.props.label)}}]),e}(o.Component)),b=(n(19),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={currentFloor:1,goinToFloor:null,elevatorMovement:null},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"goToFloor",value:function(t){var e=this;this.setState({goinToFloor:t}),this.elevatorMovement=setInterval(function(){e.setState(function(t){return{currentFloor:t.currentFloor+.5}})},100)}},{key:"componentDidMount",value:function(){this.goToFloor(10)}},{key:"componentDidUpdate",value:function(){this.state.currentFloor===this.state.goinToFloor&&clearTimeout(this.elevatorMovement)}},{key:"render",value:function(){return console.log("CURRENT FLOOR",this.state.currentFloor),r.a.createElement("div",{className:"elevatorShaft",style:{height:this.props.buildingHeight}},r.a.createElement("div",{className:"elevator",style:{height:this.props.floorHeight,bottom:this.props.floorHeight*this.state.currentFloor,backgroundColor:"red"}}))}}]),e}(o.Component)),g=(n(21),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"elevators",style:{height:this.props.buildingHeight}},Object(f.a)(new Array(this.props.qty)).map(function(e,n){return r.a.createElement(b,{key:n,floorHeight:t.props.floorHeight,buildingHeight:t.props.buildingHeight})}))}}]),e}(o.Component)),d=(n(23),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).building=r.a.createRef(),n.state={buildingHeight:0},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({buildingHeight:this.building.current.offsetHeight,floorHeight:this.building.current.offsetHeight/this.props.floors})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{ref:this.building,className:"building"},r.a.createElement("div",null,Object(f.a)(new Array(this.props.floors+1)).map(function(e,n){return r.a.createElement(p,{key:n,label:t.props.floors-n===0?"T":t.props.floors-n})}),r.a.createElement(g,{buildingHeight:this.state.buildingHeight,floorHeight:this.state.floorHeight,qty:this.props.elevators})))}}]),e}(o.Component)),m=(n(25),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{floors:20,elevators:2}))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.01f15181.chunk.js.map