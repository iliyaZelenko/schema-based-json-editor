"use strict";
var React = require("react");
var common = require("../common");
var title_editor_1 = require("./title-editor");
var NumberEditor = (function (_super) {
    __extends(NumberEditor, _super);
    function NumberEditor(props) {
        var _this = this;
        _super.call(this, props);
        this.onChange = function (e) {
            _this.value = _this.props.schema.type === "integer" ? common.toInteger(e.currentTarget.value) : common.toNumber(e.currentTarget.value);
            _this.validate();
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value);
        };
        this.toggleOptional = function () {
            _this.value = common.toggleOptional(_this.value, _this.props.schema, _this.props.initialValue);
            _this.validate();
            _this.setState({ value: _this.value });
            _this.props.updateValue(_this.value);
        };
        this.value = common.getDefaultValue(this.props.required, this.props.schema, this.props.initialValue);
        this.validate();
    }
    NumberEditor.prototype.componentDidMount = function () {
        this.props.updateValue(this.value);
    };
    NumberEditor.prototype.render = function () {
        var control = null;
        if (this.value !== undefined) {
            if (this.props.schema.enum === undefined || this.props.readonly || this.props.schema.readonly) {
                control = (React.createElement("input", {className: this.props.theme.formControl, type: "number", onChange: this.onChange, defaultValue: String(this.value), readOnly: this.props.readonly || this.props.schema.readonly}));
            }
            else {
                var options = this.props.schema.enum.map(function (e, i) { return React.createElement("option", {key: i, value: e}, e); });
                control = (React.createElement("select", {className: this.props.theme.formControl, type: "number", onChange: this.onChange, defaultValue: String(this.value)}, options));
            }
        }
        var errorDescription = null;
        if (this.errorMessage) {
            errorDescription = React.createElement("p", {className: this.props.theme.help}, this.errorMessage);
        }
        var optionalCheckbox = null;
        if (!this.props.required) {
            optionalCheckbox = (React.createElement("div", {className: this.props.theme.optionalCheckbox}, 
                React.createElement("label", null, 
                    React.createElement("input", {type: "checkbox", onChange: this.toggleOptional, checked: this.value === undefined}), 
                    "is undefined")
            ));
        }
        return (React.createElement("div", {className: this.errorMessage ? this.props.theme.errorRow : this.props.theme.row}, 
            React.createElement(title_editor_1.TitleEditor, __assign({}, this.props)), 
            optionalCheckbox, 
            control, 
            React.createElement("p", {className: this.props.theme.help}, this.props.schema.description), 
            errorDescription));
    };
    NumberEditor.prototype.validate = function () {
        this.errorMessage = common.getErrorMessageOfNumber(this.value, this.props.schema, this.props.locale);
    };
    return NumberEditor;
}(React.Component));
exports.NumberEditor = NumberEditor;
//# sourceMappingURL=number-editor.js.map