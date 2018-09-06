var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //VISOR
var Visor = function (_React$Component) {_inherits(Visor, _React$Component);
	function Visor(props) {_classCallCheck(this, Visor);var _this = _possibleConstructorReturn(this, (Visor.__proto__ || Object.getPrototypeOf(Visor)).call(this,
		props));
		_this.state = {
			visorFormula: _this.props.formula.length,
			limit: 0,
			minimo: 0 };

		_this.handleRangeChange = _this.handleRangeChange.bind(_this);return _this;
	}_createClass(Visor, [{ key: "handleRangeChange", value: function handleRangeChange(
		e) {
			this.setState({ visorFormula: e.target.value });
		} }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(
		nextProps) {
			this.setState({
				visorFormula: nextProps.formula.length,
				limit: !nextProps.power ? 2 : nextProps.display.length === 16 ? 1 : 0,
				minimo: nextProps.formula.length > 39 ? 39 : 0 });

		} }, { key: "render", value: function render()
		{
			var colorFONDO = ["#f2f2f2", "crimson", "#0d0d0d"];
			var colorFONT = ["indigo", "white", "gold"];
			var colorBARRA = ["transparent", colorFONT[this.state.limit], "transparent"];
			var disponible = this.state.visorFormula > 38 ? 1 : 0;
			var inicio = this.state.visorFormula > 39 ? this.state.visorFormula - 39 : 0;
			var displayFormula = this.props.formula.slice(inicio, inicio + 39);
			return (
				React.createElement("div", { id: "visor" },
					React.createElement("style", { type: "text/css" }, "\n@font-face{font-family:Casio;src:url('https://cdn.rawgit.com/mostafazke/udacity-problem-set/94ae8bf9/LCD_Solid.ttf')}\n#visor {\n\tmax-width: 25em;\n\tmin-height: 6.5em;\n\tmargin: 0.5em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: 0.5em solid black;\n\tbackground: " +









						colorFONDO[this.state.limit] + ";\n\tcolor: " +
						colorFONT[this.state.limit] + ";\n\tfont-family: 'Casio';\n}\n#visor .zonaVisor {\n\tmargin-left: 1%;\n\tmargin-right: 1%;\n}\n#visor #visorFormula {\n\theight: 1em;\n\tfont-size: 1em;\n\toverflow: hidden;\n}\n#visor #display {\n\tmargin: 0px;\n\tpadding-right: 0.25em;\n\tfloat: right;\n\tfont-size: 1.8em;\n}\n#visor #visorRange {\n\theight: 0.5em;\n\twidth: 90%;\n\tmargin-left: 4%;\n\tmargin-right: 5%;\n\t-webkit-appearance: none;\n}\n#visor #visorRange:focus {\n  outline: none;\n}\n\n/* ---MOZ */\n#visor #visorRange::-moz-range-track {\n  height: 0.5em;\n  animate: 0.2s;\n  box-shadow: none;\n  background: " +

































						colorBARRA[disponible] + ";\n  border-radius: 25px;\n  border: none;\n}\n#visor #visorRange::-moz-range-progress {\n\theight: 0.6em;\n\tbackground: " +





						colorFONDO[this.state.limit] + ";\n}\n#visor #visorRange::-moz-range-thumb {\n  box-shadow: none;\n  border: none;\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  background: " +







						colorBARRA[disponible] + ";\n\tcursor: pointer;\n\ttransition: all 0.5s;\n}\n/* ---CHROME */\n\n#visor #visorRange::-webkit-slider-runnable-track {\n  height: 0.5em;\n  animate: 0.2s;\n  box-shadow: none;\n  background: " +









						colorFONDO[this.state.limit] + ";\n  border-radius: 0px;\n  border: none;\n}\n#visor #visorRange::-webkit-slider-thumb {\n  box-shadow: none;\n  border: none;\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  background: " +









						colorBARRA[disponible] + ";\n\tcursor: pointer;\n\t-webkit-appearance: none;\n\tmargin-top: -0.25em; \n\ttransition: all 0.5s;\n}\n#visor #visorRange:focus::-webkit-slider-runnable-track {\n  background: " +






						colorFONDO[this.state.limit] + ";\n}\n/* ---EDGE-IE */\n#visor #visorRange::-ms-track {\n  height: 0.5em;\n  animate: 0.2s;\n  box-shadow: none;\n  background: " +






						colorBARRA[disponible] + ";\n  border-radius: 25px;\n  border: none;\n}\n#visor #visorRange::-ms-fill-lower {\n  height: 0.6em;\n\tbackground: " +





						colorFONDO[this.state.limit] + ";\n}\n#visor #visorRange::-ms-fill-upper {\n\theight: 0.5em;\n  background: " +



						colorBARRA[disponible] + ";\n}\n#visor #visorRange:focus::-ms-fill-lower {\n  background: " +


						colorFONDO[this.state.limit] + ";\n}\n#visor #visorRange:focus::-ms-fill-upper {\n  background: " +


						colorBARRA[disponible] + ";\n}\n#visor #visorRange::-ms-thumb {\n  box-shadow: none;\n  border: none;\n  height: 0.5em;\n  width: 0.5em;\n  border-radius: 50%;\n  background: " +







						colorBARRA[disponible] + ";\n\tcursor: pointer;\n\ttransition: all 0.5s;\n}\n"),





					React.createElement("p", { id: "visorFormula", className: "zonaVisor" }, displayFormula),
					React.createElement("input", { id: "visorRange", type: "range", name: "scroll", min: this.state.minimo, max: this.props.formula.length, step: "1", value: this.state.visorFormula, onChange: this.handleRangeChange }),
					React.createElement("p", { id: "display", className: "zonaVisor" }, this.props.display)));


		} }]);return Visor;}(React.Component);

//BOTONES
var Botonera = function Botonera(props) {
	var on = props.power ? 0 : 1;
	var colorTECLA = ["white", "transparent"];
	var colorACT = ["gold", "inherit"];
	var colorPOWER = ["crimson", "mediumspringgreen"];
	var colorOFF = "#0d0d0d";
	var colorNUMBER = ["deeppink", colorOFF];
	var colorOP = ["salmon", colorOFF];
	var colorEQ = ["darkcyan", colorOFF];
	var colorAC = ["cyan", colorOFF];
	var cursorON = ["pointer", "not-allowed"];
	return (
		React.createElement("div", { id: "botonera" },
			React.createElement("style", { type: "text/css" }, "\n#botonera {\n\tmax-width: 25.5em;\n\tmin-height: 6.5em;\n\tmargin: 0.75em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: none;\n}\n#botonera .boton {\n\tbox-sizing: border-box;\n\twidth: 3.186em;\n\theight: 3.186em;\n\tmargin: 0px;\n\tborder: 0.2em solid black;\n\tcolor: " +















				colorTECLA[on] + ";\n\tfont-size: 2em;\n\tcursor: " +

				cursorON[on] + ";\n\ttransition: all 0.5s;\n}\n#botonera .boton:hover {\n\tborder-color: " +



				colorACT[on] + ";\n}\n#botonera .boton:active {\n\tcolor: " +


				colorACT[on] + ";\n}\n#botonera .boton.b-power {\n\tbackground: " +


				colorPOWER[on] + ";\n\tcolor: white;\n\tcursor: pointer;\n}\n#botonera .boton.b-clear {\n\tbackground: " +




				colorAC[on] + ";\n}\n#botonera .boton.b-equals {\n\tbackground: " +


				colorEQ[on] + ";\n}\n#botonera .boton.b-number {\n\tbackground: " +


				colorNUMBER[on] + ";\n}\n#botonera .boton.b-op {\n\tbackground: " +


				colorOP[on] + ";\n}\n#botonera .boton.b-decimal {\n\tbackground: black;\n}\n#botonera .boton.b-grande {\n\twidth: 6.372em;\n}\n"),









			React.createElement("button", { id: "power", className: "boton b-power", onClick: props.click, value: "Escape" }, React.createElement("i", { "class": "fa fa-power-off" })),
			React.createElement("button", { id: "clear", className: "boton b-clear", onClick: props.click, value: "c" }, React.createElement("i", { "class": "fa fa-file-o" })),
			React.createElement("button", { id: "erase", className: "boton b-clear", onClick: props.click, value: "e" }, React.createElement("i", { "class": "fa fa-eraser" })),
			React.createElement("button", { id: "equals", className: "boton b-equals", onClick: props.click, value: "=" }, "="),
			React.createElement("button", { id: "one", className: "boton b-number", onClick: props.click, value: "1" }, "1"),
			React.createElement("button", { id: "two", className: "boton b-number", onClick: props.click, value: "2" }, "2"),
			React.createElement("button", { id: "three", className: "boton b-number", onClick: props.click, value: "3" }, "3"),
			React.createElement("button", { id: "divide", className: "boton b-op", onClick: props.click, value: "/" }, "/"),
			React.createElement("button", { id: "four", className: "boton b-number", onClick: props.click, value: "4" }, "4"),
			React.createElement("button", { id: "five", className: "boton b-number", onClick: props.click, value: "5" }, "5"),
			React.createElement("button", { id: "six", className: "boton b-number", onClick: props.click, value: "6" }, "6"),
			React.createElement("button", { id: "multiply", className: "boton b-op", onClick: props.click, value: "*" }, "x"),
			React.createElement("button", { id: "seven", className: "boton b-number", onClick: props.click, value: "7" }, "7"),
			React.createElement("button", { id: "eight", className: "boton b-number", onClick: props.click, value: "8" }, "8"),
			React.createElement("button", { id: "nine", className: "boton b-number", onClick: props.click, value: "9" }, "9"),
			React.createElement("button", { id: "add", className: "boton b-op", onClick: props.click, value: "+" }, "+"),
			React.createElement("button", { id: "zero", className: "boton b-number b-grande", onClick: props.click, value: "0" }, "0"),
			React.createElement("button", { id: "decimal", className: "boton b-decimal", onClick: props.click, value: "." }, "."),
			React.createElement("button", { id: "subtract", className: "boton b-op", onClick: props.click, value: "-" }, "-")));
};
//APP
var Calculadora = function (_React$Component2) {_inherits(Calculadora, _React$Component2);
	function Calculadora(props) {_classCallCheck(this, Calculadora);var _this2 = _possibleConstructorReturn(this, (Calculadora.__proto__ || Object.getPrototypeOf(Calculadora)).call(this,
		props));
		_this2.state = {
			power: true,
			display: "0",
			formula: "",
			lastNumber: false,
			float: false,
			result: false };

		_this2.handleKeyPress = _this2.handleKeyPress.bind(_this2);
		_this2.handleClick = _this2.handleClick.bind(_this2);return _this2;
	}
	//EVENT-LISTENER
	_createClass(Calculadora, [{ key: "componentDidMount", value: function componentDidMount() {
			document.addEventListener('keydown', this.handleKeyPress);
		} }, { key: "componentWillUnmount", value: function componentWillUnmount()
		{
			document.removeEventListener('keydown', this.handleKeyPress);
		}
		//HANDLERS
	}, { key: "handleKeyPress", value: function handleKeyPress(e) {
			var teclaTECLA = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
			var teclaOPERADOR = ["+", "-", "*", "/"];
			var teclaRESULT = ["=", "Enter"];
			var tecla = e.key;
			if (tecla === "Escape") {this.enterPower();} else
			if (tecla === "c" && this.state.power) {this.enterClear();} else
			if (tecla === "e" && this.state.power) {this.enterErase();} else
			if (teclaRESULT.includes(tecla) && this.state.power) {this.enterResult();} else
			if (teclaOPERADOR.includes(tecla) && this.state.power) {this.enterOperador(tecla);} else
			if (this.state.display.length !== 16) {
				if (teclaTECLA.includes(tecla) && this.state.power) {this.enterNumber(tecla);}
			}
		} }, { key: "handleClick", value: function handleClick(
		e) {
			this.handleKeyPress({ key: e.target.value });
		} }, { key: "enterPower", value: function enterPower()
		{
			var mensaje1 = "";
			var mensaje2 = "";
			if (this.state.power) {
				mensaje1 = "CREADO POR";
				mensaje2 = "GASTÓN PEREYRA";
			} else {
				mensaje1 = "";
				mensaje2 = "0";
			}
			this.setState({
				power: !this.state.power,
				display: mensaje2,
				formula: mensaje1,
				float: false,
				result: false,
				lastNumber: false });

		} }, { key: "enterOperador", value: function enterOperador(
		tecla) {
			var newFormula = "";
			if (this.state.result) {newFormula = this.state.display;} else
			{newFormula = this.state.formula;}
			if (newFormula.length > 0 || tecla === "-") {
				if (this.state.lastNumber || this.state.result) {
					this.setState({
						display: tecla,
						formula: newFormula + tecla,
						float: false,
						result: false,
						lastNumber: false });
				} else {
					var anteriorFormula = this.state.formula.slice(0, this.state.formula.length - 1);
					this.setState({ display: tecla, formula: anteriorFormula + tecla });
				}
			}
		} }, { key: "enterNumber", value: function enterNumber(
		tecla) {
			var newFormula = "";
			if (this.state.result) {newFormula = "";} else
			{newFormula = this.state.formula;}
			if (this.state.lastNumber) {
				if (tecla !== ".") {
					this.setState({ display: this.state.display + tecla, formula: newFormula + tecla });
				} else if (!this.state.float && tecla === ".") {
					this.setState({ display: this.state.display + tecla, formula: newFormula + tecla, float: true });
				}
			} else {
				if (tecla === ".") {
					var teclaNew = "0.";
					this.setState({
						display: teclaNew,
						formula: newFormula + teclaNew,
						float: true,
						result: false,
						lastNumber: true });
				} else if (this.state.display === "0" && tecla !== "0" || this.state.display !== "0") {
					this.setState({
						display: tecla,
						formula: newFormula + tecla,
						result: false,
						lastNumber: true });
				}
			}
		} }, { key: "enterClear", value: function enterClear()
		{
			this.setState({
				display: "0",
				formula: "",
				lastNumber: false,
				float: false,
				result: false });

		} }, { key: "enterErase", value: function enterErase()
		{
			var teclaOPERADOR = ["+", "-", "*", "/"];
			if (this.state.formula.length > 0) {
				if (this.state.formula.length == 1) {this.enterClear();} else
				if (this.state.lastNumber) {
					if (this.state.display.length == 1) {
						var anteriorFormula = this.state.formula.slice(0, this.state.formula.length - 1);
						this.setState({ display: anteriorFormula[anteriorFormula.length - 1],
							formula: anteriorFormula,
							float: false,
							result: false,
							lastNumber: false });
					} else {
						var _anteriorFormula = this.state.formula.slice(0, this.state.formula.length - 1);
						var anteriorDisplay = this.state.display.slice(0, this.state.display.length - 1);
						var isFloat = true;
						if (this.state.display[this.state.display.length - 1] === ".") {isFloat = false;}
						this.setState({ display: anteriorDisplay,
							formula: _anteriorFormula,
							float: isFloat });}
				} else {
					var _anteriorFormula2 = this.state.formula.slice(0, this.state.formula.length - 1);
					var anterior = _anteriorFormula2.length - 1;
					var _isFloat = false;
					var finishAnterior = false;
					do {
						if (teclaOPERADOR.indexOf(_anteriorFormula2[anterior]) > -1) {
							finishAnterior = true;
							anterior++;
						} else {
							if (_anteriorFormula2[anterior] === ".") {_isFloat = true;}
							anterior--;
						}
					} while (!finishAnterior && anterior > 0);
					this.setState({ display: _anteriorFormula2.slice(anterior),
						formula: _anteriorFormula2,
						float: _isFloat,
						result: false,
						lastNumber: true });}
			}
		} }, { key: "enterResult", value: function enterResult()
		{
			var newFormula = "";
			if (this.state.lastNumber) {
				if (this.state.formula[this.state.formula.length - 1] === ".") {newFormula = this.state.formula + "0";} else
				{newFormula = this.state.formula;}
			} else if (!this.state.result) {
				newFormula = this.state.formula.slice(0, this.state.formula.length - 1);
			} else {newFormula = this.state.formula;}
			var resultado = eval(newFormula);
			this.setState({ display: resultado.toString(),
				formula: newFormula + "=",
				result: true,
				float: false,
				lastNumber: false });

		} }, { key: "render", value: function render()
		{
			return (
				React.createElement("div", { id: "calculator", className: "caja" },
					React.createElement("style", { type: "text/css" }, "\n.caja {\n\twidth: 30em;\n\tmin-height: 10em;\n\tbox-sizing: border-box;\n\tborder: 1em outset darkblue;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tbackground: midnightblue;\n}\n"),












					React.createElement(Visor, { display: this.state.display, formula: this.state.formula, power: this.state.power }),
					React.createElement(Botonera, { click: this.handleClick, power: this.state.power })));

		} }]);return Calculadora;}(React.Component);


ReactDOM.render(React.createElement(Calculadora, null), document.getElementById('App'));