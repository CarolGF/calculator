(this["webpackJsonpfcc-calculator"]=this["webpackJsonpfcc-calculator"]||[]).push([[0],[,function(_,e,t){"use strict";var a=t(2),r=t(3),n=t(5),c=t(4),l=t(0),o=t.n(l),u=function(_){Object(n.a)(t,_);var e=Object(c.a)(t);function t(){var _;Object(a.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(_=e.call.apply(e,[this].concat(n))).runParentOnClick=function(){_.props.onClick(_.props.name)},_}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{onClick:this.runParentOnClick,className:"btn",id:this.props.id,name:this.props.name},this.props.name)}}]),t}(l.Component);e.a=u},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Screen__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),dupOpRegex=/[+/*]?-?\d+\.?\d*/g,App=function(_Component){Object(_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(props){var _this;return Object(_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this,props),_this.handleDigitLimit=function(){_this.state.currentNumber.length>13&&(_this.setState({currentNumber:"Limit"}),setTimeout((function(){_this.setState({currentNumber:"0"})}),2e3))},_this.onClick=function(buttonName){var currentNumber=_this.state.currentNumber,operatorFlag=_this.state.operatorFlag;switch(!0){case"0"===buttonName||"1"===buttonName||"2"===buttonName||"3"===buttonName||"4"===buttonName||"5"===buttonName||"6"===buttonName||"7"===buttonName||"8"===buttonName||"9"===buttonName:"0"!==_this.state.currentNumber?(currentNumber+=buttonName,operatorFlag=!1):currentNumber=buttonName;break;case"+"===buttonName||"-"===buttonName||"*"===buttonName||"/"===buttonName:if(_this.state.operatorFlag){var newNumber=currentNumber.slice(0,currentNumber.length-1);currentNumber=newNumber,currentNumber+=buttonName}else currentNumber+=buttonName,_this.setState({decimalFlag:!1});break;case"AC"===buttonName:currentNumber="0",operatorFlag=!1,_this.setState({decimalFlag:!1});break;case"="===buttonName:console.log(currentNumber.match(dupOpRegex)),currentNumber=eval(currentNumber.match(dupOpRegex).join("")),operatorFlag=!1,_this.setState({decimalFlag:!0});break;default:_this.state.decimalFlag||(currentNumber+=".",_this.setState({decimalFlag:!0}))}_this.setState({operatorFlag:operatorFlag}),_this.setState({currentNumber:currentNumber}),_this.handleDigitLimit()},_this.state={currentNumber:"0",operatorFlag:!1,decimalFlag:!1},_this}return Object(_home_carolina_Desktop_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Screen__WEBPACK_IMPORTED_MODULE_5__.a,{id:"display",currentNumber:this.state.currentNumber}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"keypad"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"clear",name:"AC"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"divide",name:"/"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"multiply",name:"*"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"seven",name:"7"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"eight",name:"8"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"nine",name:"9"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"subtract",name:"-"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"four",name:"4"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"five",name:"5"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"six",name:"6"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"add",name:"+"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"one",name:"1"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"two",name:"2"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"three",name:"3"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"zero",name:"0"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"decimal",name:"."}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick,id:"equals",name:"="}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("footer",null,"by Carolina"))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(_,e,t){"use strict";var a=t(0),r=t.n(a);e.a=function(_){var e=_.id,t=_.currentNumber;return r.a.createElement("div",{id:e,className:"operation"},t)}},function(_,e,t){_.exports=t(11)},function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(7),c=t.n(n),l=t(8);c.a.render(r.a.createElement(l.a,null),document.getElementById("root"))},,,,,function(_,e,t){}],[[10,1,2]]]);
//# sourceMappingURL=main.dbb96a77.chunk.js.map