/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
// tslint:disable
import { ArrayEditor } from "./array-editor"
import { BooleanEditor } from "./boolean-editor"
import { Description } from "./description"
import { Editor } from "./editor"
import { Icon } from "./icon"
import { JSONEditor } from "./index"
import { NullEditor } from "./null-editor"
import { NumberEditor } from "./number-editor"
import { ObjectEditor } from "./object-editor"
import { Optional } from "./optional"
import { StringEditor } from "./string-editor"

// @ts-ignore
export function arrayEditorTemplateHtml(this: ArrayEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('h3',[_vm._v("\n    "+_vm._s(_vm.titleToShow)+"\n    "),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyleString)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),_vm._v(" "),(!_vm.disableCollapse && _vm.value.length > 0 && !_vm.schema.enum)?_c('icon',{attrs:{"text":_vm.collapsed ? _vm.icon.expand : _vm.icon.collapse,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.collapseOrExpand()}}}):_vm._e(),_vm._v(" "),(_vm.hasAddButton)?_c('icon',{attrs:{"text":_vm.icon.add,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.addItem()}}}):_vm._e(),_vm._v(" "),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e()],1)]),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description}}),_vm._v(" "),(_vm.schema.enum)?_c('div',[(_vm.schema.format === 'select2' && !_vm.noSelect2)?_c('select2',{attrs:{"data":_vm.options,"value":_vm.value,"disabled":_vm.isReadOnly,"multiple":true},on:{"update":function($event){_vm.onChangeSelect2($event)}}}):_vm._l((_vm.options),function(option){return _c('span',{key:option.value,class:_vm.theme.checkbox},[_c('label',[_c('input',{attrs:{"type":"checkbox","disabled":_vm.isReadOnly},domProps:{"checked":_vm.isChecked(option.value)},on:{"change":function($event){_vm.onChangeCheckbox(option.value)}}}),_vm._v("\n        "+_vm._s(option.label)+"\n      ")])])})],2):_c('div',{class:_vm.theme.card},[(_vm.showFilter)?_c('div',{class:_vm.theme.row},[_c('input',{class:_vm.theme.input,domProps:{"value":_vm.filter},on:{"change":function($event){_vm.onFilterChange($event)},"keyup":function($event){_vm.onFilterChange($event)}}})]):_vm._e(),_vm._v(" "),_vm._l((_vm.filteredValues),function(item){return _c('div',{key:(1 + item.i) * _vm.renderSwitch,class:_vm.theme.rowContainer,attrs:{"data-index":item.i}},[_c('editor',{attrs:{"schema":_vm.schema.items,"title":item.i,"initial-value":_vm.value[item.i],"theme":_vm.theme,"icon":_vm.icon,"locale":_vm.locale,"required":true,"readonly":_vm.isReadOnly,"has-delete-button":true,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"force-https":_vm.forceHttps,"disable-collapse":_vm.disableCollapse,"no-select2":_vm.noSelect2},on:{"update-value":function($event){_vm.onChange(item.i, $event)},"delete":function($event){_vm.onDeleteFunction(item.i)}}})],1)})],2),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.errorMessage}})],1)}
// @ts-ignore
export var arrayEditorTemplateHtmlStatic = [  ]
// @ts-ignore
export function booleanEditorTemplateHtml(this: BooleanEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('label',{class:_vm.theme.title},[_vm._v("\n    "+_vm._s(_vm.titleToShow)+"\n    "),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyle)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),_vm._v(" "),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e()],1)]),_vm._v(" "),(_vm.value !== undefined)?_c('div',[(_vm.schema.format === 'checkbox')?_c('span',{class:_vm.theme.checkbox},[_c('label',[_c('input',{attrs:{"type":"checkbox","disabled":_vm.isReadOnly},domProps:{"checked":_vm.value},on:{"change":function($event){_vm.onChange()}}}),_vm._v("\n        "+_vm._s(_vm.locale.info.true)+"\n      ")])]):(_vm.schema.format === 'select')?_c('select',{class:_vm.theme.select,attrs:{"disabled":_vm.isReadOnly},domProps:{"value":_vm.value},on:{"change":function($event){_vm.onChange()}}},[_c('option',{domProps:{"value":true}},[_vm._v(_vm._s(_vm.locale.info.true))]),_vm._v(" "),_c('option',{domProps:{"value":false}},[_vm._v(_vm._s(_vm.locale.info.false))])]):(_vm.schema.format === 'select2')?_c('select2',{attrs:{"data":_vm.booleanOptions,"value":_vm.value,"disabled":_vm.isReadOnly},on:{"update":function($event){_vm.onChange()}}}):[_c('span',{class:_vm.theme.radiobox},[_c('label',[_c('input',{attrs:{"type":"radio","disabled":_vm.isReadOnly},domProps:{"checked":_vm.value},on:{"change":function($event){_vm.onChange()}}}),_vm._v("\n          "+_vm._s(_vm.locale.info.true)+"\n        ")])]),_vm._v(" "),_c('span',{class:_vm.theme.radiobox},[_c('label',[_c('input',{attrs:{"type":"radio","disabled":_vm.isReadOnly},domProps:{"checked":!_vm.value},on:{"change":function($event){_vm.onChange()}}}),_vm._v("\n          "+_vm._s(_vm.locale.info.false)+"\n        ")])])]],2):_vm._e(),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description}})],1)}
// @ts-ignore
export var booleanEditorTemplateHtmlStatic = [  ]
// @ts-ignore
export function descriptionTemplateHtml(this: Description) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.message)?_c('p',{class:_vm.theme.description},[_vm._v(_vm._s(_vm.message))]):_vm._e()}
// @ts-ignore
export var descriptionTemplateHtmlStatic = [  ]
// @ts-ignore
export function editorTemplateHtml(this: Editor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.schema.type === 'object')?_c('object-editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"title":_vm.title,"theme":_vm.theme,"locale":_vm.locale,"icon":_vm.icon,"readonly":_vm.readonly,"required":_vm.required,"has-delete-button":_vm.hasDeleteButton,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"forceHttps":_vm.forceHttps,"disableCollapse":_vm.disableCollapse,"noSelect2":_vm.noSelect2},on:{"update-value":function($event){_vm.$emit('update-value', $event)},"delete":function($event){_vm.$emit('delete')}}}):(_vm.schema.type === 'array')?_c('array-editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"title":_vm.title,"theme":_vm.theme,"locale":_vm.locale,"icon":_vm.icon,"readonly":_vm.readonly,"required":_vm.required,"has-delete-button":_vm.hasDeleteButton,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"forceHttps":_vm.forceHttps,"disableCollapse":_vm.disableCollapse,"noSelect2":_vm.noSelect2},on:{"update-value":function($event){_vm.$emit('update-value', $event)},"delete":function($event){_vm.$emit('delete')}}}):(_vm.schema.type === 'number' || _vm.schema.type === 'integer')?_c('number-editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"title":_vm.title,"theme":_vm.theme,"locale":_vm.locale,"icon":_vm.icon,"readonly":_vm.readonly,"required":_vm.required,"has-delete-button":_vm.hasDeleteButton,"noSelect2":_vm.noSelect2},on:{"update-value":function($event){_vm.$emit('update-value', $event)},"delete":function($event){_vm.$emit('delete')}}}):(_vm.schema.type === 'boolean')?_c('boolean-editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"title":_vm.title,"theme":_vm.theme,"locale":_vm.locale,"icon":_vm.icon,"readonly":_vm.readonly,"required":_vm.required,"has-delete-button":_vm.hasDeleteButton},on:{"update-value":function($event){_vm.$emit('update-value', $event)},"delete":function($event){_vm.$emit('delete')}}}):(_vm.schema.type === 'null')?_c('null-editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"title":_vm.title,"theme":_vm.theme,"locale":_vm.locale,"icon":_vm.icon,"readonly":_vm.readonly,"required":_vm.required,"has-delete-button":_vm.hasDeleteButton},on:{"update-value":function($event){_vm.$emit('update-value', $event)},"delete":function($event){_vm.$emit('delete')}}}):(_vm.schema.type === 'string')?_c('string-editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"title":_vm.title,"theme":_vm.theme,"locale":_vm.locale,"icon":_vm.icon,"readonly":_vm.readonly,"required":_vm.required,"has-delete-button":_vm.hasDeleteButton,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"forceHttps":_vm.forceHttps,"noSelect2":_vm.noSelect2},on:{"update-value":function($event){_vm.$emit('update-value', $event)},"delete":function($event){_vm.$emit('delete')}}}):_vm._e()}
// @ts-ignore
export var editorTemplateHtmlStatic = [  ]
// @ts-ignore
export function iconTemplateHtml(this: Icon) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.theme.button,on:{"click":function($event){_vm.$emit('click')}}},[(_vm.icon.isText)?_c('span',[_vm._v(_vm._s(_vm.text))]):_c('i',{class:_vm.text})])}
// @ts-ignore
export var iconTemplateHtmlStatic = [  ]
// @ts-ignore
export function indexTemplateHtml(this: JSONEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('editor',{attrs:{"schema":_vm.schema,"initial-value":_vm.initialValue,"theme":_vm.themeObject,"locale":_vm.localeObject,"icon":_vm.iconObject,"readonly":_vm.readonly,"required":true,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"forceHttps":_vm.forceHttps,"disableCollapse":_vm.disableCollapse,"noSelect2":_vm.noSelect2},on:{"update-value":function($event){_vm.updateValue($event)}}})}
// @ts-ignore
export var indexTemplateHtmlStatic = [  ]
// @ts-ignore
export function nullEditorTemplateHtml(this: NullEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.theme.row},[_c('label',{class:_vm.theme.title},[_vm._v("\n    "+_vm._s(_vm.titleToShow)+"\n    "),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyle)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),_vm._v(" "),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e()],1)]),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description}})],1)}
// @ts-ignore
export var nullEditorTemplateHtmlStatic = [  ]
// @ts-ignore
export function numberEditorTemplateHtml(this: NumberEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('label',{class:_vm.theme.title},[_vm._v("\n    "+_vm._s(_vm.titleToShow)+"\n    "),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyle)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),_vm._v(" "),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e()],1)]),_vm._v(" "),(_vm.useInput)?_c('input',{class:_vm.errorMessage ? _vm.theme.errorInput : _vm.theme.input,attrs:{"type":"number","readOnly":_vm.isReadOnly,"disabled":_vm.isReadOnly},domProps:{"value":_vm.value},on:{"change":function($event){_vm.onChange($event)},"keyup":function($event){_vm.onChange($event)}}}):_vm._e(),_vm._v(" "),(_vm.useSelect2Component)?_c('select2',{attrs:{"data":_vm.options,"value":_vm.value,"disabled":_vm.isReadOnly},on:{"update":function($event){_vm.updateSelection($event)}}}):_vm._e(),_vm._v(" "),(_vm.useSelectComponent)?_c('select',{class:_vm.theme.select,attrs:{"disabled":_vm.isReadOnly},domProps:{"value":_vm.value},on:{"change":function($event){_vm.updateSelection(+$event.target.value)}}},_vm._l((_vm.options),function(option){return _c('option',{key:option.value,domProps:{"value":option.value}},[_vm._v(_vm._s(option.label))])})):_vm._e(),_vm._v(" "),(_vm.useRadioBoxComponent)?_c('div',_vm._l((_vm.options),function(option){return _c('span',{key:option.value,class:_vm.theme.radiobox},[_c('label',[_c('input',{attrs:{"type":"radio","disabled":_vm.isReadOnly},domProps:{"checked":_vm.value === option.value},on:{"change":function($event){_vm.updateSelection(option.value)}}}),_vm._v("\n        "+_vm._s(option.label)+"\n      ")])])})):_vm._e(),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description}}),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.errorMessage}})],1)}
// @ts-ignore
export var numberEditorTemplateHtmlStatic = [  ]
// @ts-ignore
export function objectEditorTemplateHtml(this: ObjectEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('h3',[_vm._v("\n    "+_vm._s(_vm.titleToShow)+"\n    "),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyle)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),_vm._v(" "),(!_vm.disableCollapse)?_c('icon',{attrs:{"text":_vm.collapsed ? _vm.icon.expand : _vm.icon.collapse,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.collapseOrExpand()}}}):_vm._e(),_vm._v(" "),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e()],1)]),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description}}),_vm._v(" "),(!_vm.collapsed && _vm.value !== undefined)?_c('div',{class:_vm.theme.card},[(_vm.showFilter)?_c('div',{class:_vm.theme.row},[_c('input',{class:_vm.theme.input,attrs:{"placeholder":_vm.locale.info.search},domProps:{"value":_vm.filter},on:{"change":function($event){_vm.onFilterChange($event)},"keyup":function($event){_vm.onFilterChange($event)}}})]):_vm._e(),_vm._v(" "),_vm._l((_vm.filteredProperties),function(p,i){return (_vm.isRequired(p.property) !== false)?_c('editor',{key:p.property + _vm.isRequired(p.property),attrs:{"schema":p.schema,"title":p.schema.title || p.property,"initial-value":_vm.value[p.property],"theme":_vm.theme,"icon":_vm.icon,"locale":_vm.locale,"required":_vm.isRequired(p.property),"readonly":_vm.isReadOnly,"dragula":_vm.dragula,"md":_vm.md,"hljs":_vm.hljs,"force-https":_vm.forceHttps,"disable-collapse":_vm.disableCollapse,"no-select2":_vm.noSelect2},on:{"update-value":function($event){_vm.onChange(p.property, $event)}}}):_vm._e()})],2):_vm._e(),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.errorMessage}})],1)}
// @ts-ignore
export var objectEditorTemplateHtmlStatic = [  ]
// @ts-ignore
export function optionalTemplateHtml(this: Optional) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasOptionalCheckbox)?_c('div',{class:_vm.theme.checkbox},[_c('label',[_c('input',{attrs:{"type":"checkbox","disabled":_vm.isReadOnly},domProps:{"checked":_vm.value === undefined},on:{"change":function($event){_vm.$emit('toggleOptional')}}}),_vm._v("\n        "+_vm._s(_vm.locale.info.notExists)+"\n    ")])]):_vm._e()}
// @ts-ignore
export var optionalTemplateHtmlStatic = [  ]
// @ts-ignore
export function stringEditorTemplateHtml(this: StringEditor) {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('label',{class:_vm.theme.title},[_vm._v("\n    "+_vm._s(_vm.titleToShow)+"\n    "),_c('div',{class:_vm.theme.buttonGroup,style:(_vm.buttonGroupStyle)},[_c('optional',{attrs:{"required":_vm.required,"value":_vm.value,"isReadOnly":_vm.isReadOnly,"theme":_vm.theme,"locale":_vm.locale},on:{"toggleOptional":function($event){_vm.toggleOptional()}}}),_vm._v(" "),(_vm.hasDeleteButtonFunction)?_c('icon',{attrs:{"text":_vm.icon.delete,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.$emit('delete')}}}):_vm._e(),_vm._v(" "),(_vm.canPreview)?_c('icon',{attrs:{"text":_vm.collapsed ? _vm.icon.expand : _vm.icon.collapse,"theme":_vm.theme,"icon":_vm.icon},on:{"click":function($event){_vm.collapseOrExpand()}}}):_vm._e()],1)]),_vm._v(" "),(_vm.canUpload)?_c('file-uploader',{attrs:{"locale":_vm.locale.fileUploaderLocale},on:{"file-got":function($event){_vm.fileGot($event)}}}):_vm._e(),_vm._v(" "),(_vm.useTextArea)?_c('textarea',{class:_vm.errorMessage ? _vm.theme.errorTextarea : _vm.theme.textarea,attrs:{"rows":"10","readOnly":_vm.isReadOnly,"disabled":_vm.isReadOnly},on:{"change":function($event){_vm.onChange($event)},"keyup":function($event){_vm.onChange($event)}}},[_vm._v(_vm._s(_vm.value))]):_vm._e(),_vm._v(" "),(_vm.useInput)?_c('input',{class:_vm.errorMessage ? _vm.theme.errorInput : _vm.theme.input,attrs:{"type":_vm.schema.format,"readOnly":_vm.isReadOnly,"disabled":_vm.isReadOnly},domProps:{"value":_vm.value},on:{"change":function($event){_vm.onChange($event)},"keyup":function($event){_vm.onChange($event)}}}):_vm._e(),_vm._v(" "),(_vm.useSelect2Component)?_c('select2',{attrs:{"data":_vm.options,"value":_vm.value,"disabled":_vm.isReadOnly},on:{"update":function($event){_vm.updateSelection($event)}}}):_vm._e(),_vm._v(" "),(_vm.useSelectComponent)?_c('select',{class:_vm.theme.select,attrs:{"disabled":_vm.isReadOnly},domProps:{"value":_vm.value},on:{"change":function($event){_vm.updateSelection($event.target.value)}}},_vm._l((_vm.options),function(option){return _c('option',{key:option.value,domProps:{"value":option.value}},[_vm._v(_vm._s(option.label))])})):_vm._e(),_vm._v(" "),(_vm.useRadioBoxComponent)?_c('div',_vm._l((_vm.options),function(option){return _c('span',{key:option.value,class:_vm.theme.radiobox},[_c('label',[_c('input',{attrs:{"type":"radio","disabled":_vm.isReadOnly},domProps:{"checked":_vm.value === option.value},on:{"change":function($event){_vm.updateSelection(option.value)}}}),_vm._v("\n        "+_vm._s(option.label)+"\n      ")])])})):_vm._e(),_vm._v(" "),(_vm.willPreviewImage)?_c('img',{style:(_vm.imagePreviewStyle),attrs:{"src":_vm.getImageUrl}}):_vm._e(),_vm._v(" "),(_vm.useTextArea && _vm.willPreviewMarkdown)?_c('markdown-tip',{attrs:{"locale":_vm.locale.markdownTipLocale}}):_vm._e(),_vm._v(" "),(_vm.willPreviewMarkdown)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.getMarkdown)}}):_vm._e(),_vm._v(" "),(_vm.willPreviewCode)?_c('pre',[_c('code',{domProps:{"innerHTML":_vm._s(_vm.getCode)}})]):_vm._e(),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.schema.description}}),_vm._v(" "),_c('description',{attrs:{"theme":_vm.theme,"message":_vm.errorMessage}})],1)}
// @ts-ignore
export var stringEditorTemplateHtmlStatic = [  ]
// tslint:enable
