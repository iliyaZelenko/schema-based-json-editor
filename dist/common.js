"use strict";
require("tslib");
var toNumber = require("lodash/toNumber");
exports.toNumber = toNumber;
var toInteger = require("lodash/toInteger");
exports.toInteger = toInteger;
var debounce = require("lodash/debounce");
exports.debounce = debounce;
var dragula = require("dragula");
exports.dragula = dragula;
exports.themes = {
    "bootstrap3": {
        rowContainer: "well bootstrap3-row-container",
        row: "row",
        formControl: "form-control",
        button: "btn btn-default",
        help: "help-block",
        errorRow: "row has-error",
        label: "control-label",
        optionalCheckbox: "checkbox",
        buttonGroup: "btn-group",
    },
};
var defaultTheme = {
    rowContainer: "",
    row: "",
    formControl: "",
    button: "",
    help: "",
    errorRow: "",
    label: "",
    optionalCheckbox: "",
    buttonGroup: "",
};
function getTheme(name) {
    if (name === undefined) {
        return defaultTheme;
    }
    if (typeof name === "string") {
        return exports.themes[name] || defaultTheme;
    }
    return name;
}
exports.getTheme = getTheme;
exports.defaultLocale = {
    button: {
        collapse: "Collapse",
        expand: "Expand",
        add: "Add",
        delete: "Delete",
    },
    error: {
        minLength: "Value must be at least {0} characters long.",
        maxLength: "Value must be at most {0} characters long.",
        pattern: "Value doesn't match the pattern {0}.",
        minimum: "Value must be >= {0}.",
        maximum: "Value must be <= {0}.",
        largerThan: "Value must be > {0}.",
        smallerThan: "Value must be < {0}.",
        minItems: "The length of the array must be >= {0}",
        uniqueItems: "The item in {0} and {1} must not be same.",
    },
};
exports.locales = {
    "zh-cn": {
        button: {
            collapse: "折叠",
            expand: "显示",
            add: "增加",
            delete: "删除",
        },
        error: {
            minLength: "要求至少 {0} 字符。",
            maxLength: "要求至多 {0} 字符。",
            pattern: "要求匹配模式 {0}。",
            minimum: "要求 >= {0}。",
            maximum: "要求 <= {0}。",
            largerThan: "要求 > {0}。",
            smallerThan: "要求 < {0}。",
            minItems: "数组的长度要求 >= {0}。",
            uniqueItems: "{0} 和 {1} 的项不应该相同。",
        },
    },
};
function getLocale(name) {
    if (name === undefined) {
        return exports.defaultLocale;
    }
    if (typeof name === "string") {
        return exports.locales[name] || exports.defaultLocale;
    }
    return name;
}
exports.getLocale = getLocale;
var icons = {
    "bootstrap3": {
        isText: false,
        collapse: "glyphicon glyphicon-chevron-down",
        expand: "glyphicon glyphicon-chevron-right",
        add: "glyphicon glyphicon-plus",
        delete: "glyphicon glyphicon-remove",
    },
    "fontawesome4": {
        isText: false,
        collapse: "fa fa-caret-square-o-down",
        expand: "fa fa-caret-square-o-right",
        add: "fa fa-plus",
        delete: "fa fa-times",
    },
};
function getIcon(name, locale) {
    if (name === undefined) {
        return {
            isText: true,
            collapse: locale.button.collapse,
            expand: locale.button.expand,
            add: locale.button.add,
            delete: locale.button.delete,
        };
    }
    if (typeof name === "string") {
        return icons[name] || {
            isText: true,
            collapse: locale.button.collapse,
            expand: locale.button.expand,
            add: locale.button.add,
            delete: locale.button.delete,
        };
    }
    return name;
}
exports.getIcon = getIcon;
function getDefaultValue(required, schema, initialValue) {
    if (!required) {
        return undefined;
    }
    if (initialValue !== undefined) {
        return initialValue;
    }
    if (schema.default !== undefined) {
        return schema.default;
    }
    switch (schema.type) {
        case "object":
            return {};
        case "array":
            return [];
        case "number":
        case "integer":
            if (schema.enum !== undefined && schema.enum.length > 0) {
                return schema.enum[0];
            }
            else {
                return 0;
            }
        case "boolean":
            return false;
        case "string":
            if (schema.enum !== undefined && schema.enum.length > 0) {
                return schema.enum[0];
            }
            else {
                return "";
            }
        case "null":
        default:
            return null;
    }
}
exports.getDefaultValue = getDefaultValue;
exports.buttonGroupStyle = { marginLeft: "10px" };
exports.buttonGroupStyleString = "margin-left: 10px";
function isSame(value1, value2) {
    if (typeof value1 === "string"
        || typeof value1 === "number"
        || typeof value1 === "boolean"
        || value1 === null
        || value1 === undefined) {
        return value1 === value2;
    }
    if (typeof value2 === "string"
        || typeof value2 === "number"
        || typeof value2 === "boolean"
        || value2 === null
        || value2 === undefined) {
        return false;
    }
    if (Array.isArray(value1)) {
        if (Array.isArray(value2) && value1.length === value2.length) {
            for (var i = 0; i < value1.length; i++) {
                if (!isSame(value1, value2)) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    if (Array.isArray(value2)
        || Object.keys(value1).length !== Object.keys(value1).length) {
        return false;
    }
    for (var key in value1) {
        if (!isSame(value1[key], value2[key])) {
            return false;
        }
    }
    return true;
}
function switchItem(value, el, sibling) {
    var fromIndex = +el.dataset["index"];
    if (sibling) {
        var toIndex = +sibling.dataset["index"];
        value.splice(toIndex, 0, value[fromIndex]);
        if (fromIndex > toIndex) {
            value.splice(fromIndex + 1, 1);
        }
        else {
            value.splice(fromIndex, 1);
        }
    }
    else {
        value.push(value[fromIndex]);
        value.splice(fromIndex, 1);
    }
}
exports.switchItem = switchItem;
function getErrorMessageOfArray(value, schema, locale) {
    if (value !== undefined) {
        if (schema.minItems !== undefined) {
            if (value.length < schema.minItems) {
                return locale.error.minItems.replace("{0}", String(schema.minItems));
            }
        }
        if (schema.uniqueItems) {
            for (var i = 1; i < value.length; i++) {
                for (var j = 0; j < i; j++) {
                    if (isSame(value[i], value[j])) {
                        return locale.error.uniqueItems.replace("{0}", String(j)).replace("{1}", String(i));
                    }
                }
            }
        }
    }
    return "";
}
exports.getErrorMessageOfArray = getErrorMessageOfArray;
function getErrorMessageOfNumber(value, schema, locale) {
    if (value !== undefined) {
        if (schema.minimum !== undefined) {
            if (schema.exclusiveMinimum) {
                if (value <= schema.minimum) {
                    return locale.error.largerThan.replace("{0}", String(schema.minimum));
                }
            }
            else {
                if (value < schema.minimum) {
                    return locale.error.minimum.replace("{0}", String(schema.minimum));
                }
            }
        }
        if (schema.maximum !== undefined) {
            if (schema.exclusiveMaximum) {
                if (value >= schema.maximum) {
                    return locale.error.smallerThan.replace("{0}", String(schema.maximum));
                }
            }
            else {
                if (value > schema.maximum) {
                    return locale.error.maximum.replace("{0}", String(schema.maximum));
                }
            }
        }
    }
    return "";
}
exports.getErrorMessageOfNumber = getErrorMessageOfNumber;
function getErrorMessageOfString(value, schema, locale) {
    if (value !== undefined) {
        if (schema.minLength !== undefined
            && value.length < schema.minLength) {
            return locale.error.minLength.replace("{0}", String(schema.minLength));
        }
        if (schema.maxLength !== undefined
            && value.length > schema.maxLength) {
            return locale.error.maxLength.replace("{0}", String(schema.maxLength));
        }
        if (schema.pattern !== undefined
            && !new RegExp(schema.pattern).test(value)) {
            return locale.error.pattern.replace("{0}", String(schema.pattern));
        }
    }
    return "";
}
exports.getErrorMessageOfString = getErrorMessageOfString;
function toggleOptional(value, schema, initialValue) {
    if (value === undefined) {
        return getDefaultValue(true, schema, initialValue);
    }
    else {
        return undefined;
    }
}
exports.toggleOptional = toggleOptional;
//# sourceMappingURL=common.js.map