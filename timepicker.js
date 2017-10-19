'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_react=require('react'),_react2=_interopRequireDefault(_react);Object.defineProperty(exports,'__esModule',{value:!0}),exports.Clock=exports.Info=exports.Timepicker=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Timepicker=exports.Timepicker=function(a){function b(a){var c=a.hours,d=a.minutes,e=a.mode;_classCallCheck(this,b);var f=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return f.state={hours:c,minutes:d,mode:e},f.onChange=f.onChange.bind(f),f.onChangeMode=f.onChangeMode.bind(f),f}return _inherits(b,a),_createClass(b,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(a){var b=a.hours,c=a.minutes,d=a.mode,e={},f=this.props;f.hours!==b&&(e.hours=b),f.minutes!==c&&(e.minutes=c),f.mode!==d&&(e.mode=d),this.setState(e)}},{key:'render',value:function render(){var a=this.state,c=a.hours,d=a.minutes,e=a.mode,f=this.props,g=f.formatNumber,h=f.militaryTime,i=f.radius,j=f.size;return _react2.default.createElement('div',{className:'timepicker'},_react2.default.createElement(b.Info,{formatNumber:g,hours:c,minutes:d,mode:e,onChangeMode:this.onChangeMode,size:j}),_react2.default.createElement(b.Clock,{hours:c,minutes:d,mode:e,size:j,formatNumber:g,onChangeMode:this.onChangeMode,militaryTime:h,radius:i,onChange:this.onChange}))}},{key:'onChange',value:function onChange(a,b){this.setState({hours:a,minutes:b}),this.props.onChange&&this.props.onChange(a,b)}},{key:'onChangeMode',value:function onChangeMode(a){this.setState({mode:a}),this.props.onChangeMode&&this.props.onChangeMode(a)}}]),b}(_react2.default.Component);Timepicker.HOURS=!0,Timepicker.MINUTES=!1,Timepicker.propTypes='production'===process.env.NODE_ENV?{}:{formatNumber:_propTypes2.default.func,hours:_propTypes2.default.number,militaryTime:_propTypes2.default.bool,minutes:_propTypes2.default.number,mode:_propTypes2.default.bool,onChange:_propTypes2.default.func,onChangeMode:_propTypes2.default.func,radius:_propTypes2.default.number,size:_propTypes2.default.number},Timepicker.defaultProps={formatNumber:function formatNumber(a){return 10>a?'0'+a:a},hours:0,militaryTime:!0,minutes:0,mode:Timepicker.HOURS,radius:125,size:300};var Info=exports.Info=function(a){function b(){_classCallCheck(this,b);var a=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.onClickHours=a.onClickHours.bind(a),a.onClickMinutes=a.onClickMinutes.bind(a),a}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var a=this.props,b=a.formatNumber,c=a.hours,d=a.minutes,e=a.mode,f=a.size;return _react2.default.createElement('p',{className:'timepicker-info',style:{width:f}},_react2.default.createElement('span',{className:'timepicker-info-digits'+(e===Timepicker.HOURS?' active':''),onClick:this.onClickHours},b(c,'info')),':',_react2.default.createElement('span',{className:'timepicker-info-digits'+(e===Timepicker.MINUTES?' active':''),onClick:this.onClickMinutes},b(d,'info')))}},{key:'onClickHours',value:function onClickHours(){this.props.onChangeMode&&this.props.onChangeMode(Timepicker.HOURS)}},{key:'onClickMinutes',value:function onClickMinutes(){this.props.onChangeMode&&this.props.onChangeMode(Timepicker.MINUTES)}}]),b}(_react2.default.Component);Info.propTypes='production'===process.env.NODE_ENV?{}:{formatNumber:_propTypes2.default.func.isRequired,hours:_propTypes2.default.number.isRequired,minutes:_propTypes2.default.number.isRequired,mode:_propTypes2.default.bool.isRequired,onChangeMode:_propTypes2.default.func,size:_propTypes2.default.number.isRequired},Timepicker.Info=Info;var Clock=exports.Clock=function(a){function b(a){var c=a.hours,d=a.militaryTime,e=a.minutes,f=a.mode;_classCallCheck(this,b);var g=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return g.state={even:!0,hours:c%(d?24:12),minutes:e%60,mode:f,positionsHours:g.calculatePositionsHours(),positionsMinutes:g.calculatePositionsMinutes()},g.onHand1=g.onHand1.bind(g),g.onHand2=g.onHand2.bind(g),g}var c=Math.sin,d=Math.round,e=Math.cos,f=Math.PI;return _inherits(b,a),_createClass(b,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(a){var b=a.hours,c=a.militaryTime,d=a.minutes,e=a.mode,f=a.radius,g=a.size,h=this.props;g!==h.size||f!==h.radius?this.setState({positionsHours:this.calculatePositionsHours(),positionsMinutes:this.calculatePositionsMinutes()}):c!==h.militaryTime&&this.setState({positionsHours:this.calculatePositionsHours()}),e!==h.mode&&this.setState({mode:e}),b!==h.hours&&this.setState({hours:b%(c?24:12)}),d!==h.minutes&&this.setState({minutes:d%60})}},{key:'componentDidMount',value:function componentDidMount(){this.componentDidUpdate({})}},{key:'componentDidUpdate',value:function componentDidUpdate(a,b){var c=Math.ceil,d=Math.sqrt,e=this.props,f=e.militaryTime,g=e.mode,h=e.size,i=this.state,j=i.even,k=i.hours,l=i.minutes,m=i.positionsHours,n=i.positionsMinutes;if(a.mode!==g||b.hours!==k||b.minutes!==l){var o=j?this.hand1:this.hand2,p=j?this.hand2:this.hand1;o.setAttribute('x2',g?m[0===k?f?23:11:k-1][0]:n[l][0]),o.setAttribute('y2',g?m[0===k?f?23:11:k-1][1]:n[l][1]),a.mode!==g&&(p.setAttribute('x2',h/2),p.setAttribute('y2',h/2));var q=o.getAttribute('x1')-o.getAttribute('x2'),r=o.getAttribute('y1')-o.getAttribute('y2'),s=p.getAttribute('x1')-p.getAttribute('x2'),t=p.getAttribute('y1')-p.getAttribute('y2'),u=c(d(q*q+r*r)),v=c(d(s*s+t*t));o.style.strokeDasharray=u,p.style.strokeDasharray=v,o.style.strokeDashoffset=u,p.style.strokeDashoffset='0',o.style.transitionProperty='none',p.style.transitionProperty='none',o.getBoundingClientRect(),p.getBoundingClientRect(),o.style.transitionProperty='stroke-dashoffset',p.style.transitionProperty='stroke-dashoffset',o.style.strokeDashoffset='0',p.style.strokeDashoffset=v}}},{key:'render',value:function render(){var a=this.props.size,b=this.state.mode;return _react2.default.createElement('svg',{height:a,width:a},_react2.default.createElement('line',{ref:this.onHand1,className:'timepicker-hand',x1:a/2,y1:a/2,x2:a/2,y2:a/2}),_react2.default.createElement('line',{ref:this.onHand2,className:'timepicker-hand',x1:a/2,y1:a/2,x2:a/2,y2:a/2}),_react2.default.createElement('g',{className:'timepicker-'+(b?'visible':'invisible')},this.renderHoursBubbles()),_react2.default.createElement('g',{className:'timepicker-'+(b?'invisible':'visible')},this.renderMinutesBubbles()))}},{key:'renderHoursBubbles',value:function renderHoursBubbles(){for(var a=this.props.formatNumber,b=this.state,c=b.hours,d=b.positionsHours,e=[],f=0;f<d.length;++f){var g=d[f][0],h=d[f][1],i=(f+1)%24,j=this.onClickHour(i),k=this.onMouseMoveHour(i);e.push(_react2.default.createElement('g',{className:'timepicker-bubble'+(c===i?' active':''),key:f,onClick:j,onMouseMove:k,onMouseUp:k},_react2.default.createElement('circle',{cx:g,cy:h,r:15}),_react2.default.createElement('text',{x:g,y:h},a(i,'clock'))))}return bubbles}},{key:'renderMinutesBubbles',value:function renderMinutesBubbles(){for(var a=this.props.formatNumber,b=this.state,c=b.minutes,d=b.positionsMinutes,e=[],f=0;f<d.length;++f){var g=d[f][0],h=d[f][1],i=this.onClickMinute(f),j=this.onMouseMoveMinute(f);e.push(_react2.default.createElement('g',{className:'timepicker-bubble'+(f%5?' small':'')+(c===f?' active':''),key:f,onClick:i,onMouseMove:j},_react2.default.createElement('circle',{cx:g,cy:h,r:f%5?c===f?5:0:15}),f%5?_react2.default.createElement('circle',{cx:g,cy:h,r:10}):_react2.default.createElement('text',{x:g,y:h},a(f,'clock'))))}return bubbles}},{key:'onChange',value:function onChange(){this.props.onChange&&this.props.onChange(this.state.hours,this.state.minutes),this.props.onChangeMode&&this.props.onChangeMode(this.state.mode)}},{key:'onClickHour',value:function onClickHour(a){var b=this;return function(c,d){b.state.hours===a&&d||b.setState({even:!b.state.even,hours:a,mode:d?b.state.mode===Timepicker.HOURS?Timepicker.HOURS:Timepicker.MINUTES:b.state.mode===Timepicker.HOURS?Timepicker.MINUTES:Timepicker.HOURS},function(){return b.onChange()})}}},{key:'onClickMinute',value:function onClickMinute(a){var b=this;return function(){b.state.minutes===a||b.setState({minutes:a,even:!b.state.even},function(){return b.onChange()})}}},{key:'onHand1',value:function onHand1(a){this.hand1=a}},{key:'onHand2',value:function onHand2(a){this.hand2=a}},{key:'onMouseMoveHour',value:function onMouseMoveHour(a){var b=this.onClickHour(a);return function(a){var c='mouseup'===a.type;(c||1===a.buttons)&&b(a,!c)}}},{key:'onMouseMoveMinute',value:function onMouseMoveMinute(a){var b=this.onClickMinute(a);return function(a){1===a.buttons&&b()}}},{key:'calculatePositionsHours',value:function calculatePositionsHours(){for(var a=this.props,b=a.militaryTime,g=a.radius,h=a.size,i=[],j=1;j<=(b?24:12);++j)i.push([d(h/2+g*(b?12<j?1:0.65:1)*e((j%12/6-0.5)*f)),d(h/2+g*(b?12<j?1:0.65:1)*c((j%12/6-0.5)*f))]);return positions}},{key:'calculatePositionsMinutes',value:function calculatePositionsMinutes(){for(var a=this.props,b=a.radius,g=a.size,h=[],i=0;60>i;++i)h.push([d(g/2+b*e((i/30-0.5)*f)),d(g/2+b*c((i/30-0.5)*f))]);return positions}}]),b}(_react2.default.Component);Clock.propTypes='production'===process.env.NODE_ENV?{}:{formatNumber:_propTypes2.default.func.isRequired,hours:_propTypes2.default.number.isRequired,militaryTime:_propTypes2.default.bool.isRequired,minutes:_propTypes2.default.number.isRequired,mode:_propTypes2.default.bool.isRequired,onChange:_propTypes2.default.func,onChangeMode:_propTypes2.default.func,radius:_propTypes2.default.number.isRequired,size:_propTypes2.default.number.isRequired},Timepicker.Clock=Clock;

