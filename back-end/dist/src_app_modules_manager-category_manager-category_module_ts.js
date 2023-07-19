"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_modules_manager-category_manager-category_module_ts"],{

/***/ 8001:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/manager-category/add-category/add-category.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryComponent": () => (/* binding */ AddCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/global-constants */ 3018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/snackbar.service */ 5832);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 1468);














function AddCategoryComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function AddCategoryComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCategoryComponent_ng_template_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.handleAddCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.addCategoryForm.valid);
  }
}
function AddCategoryComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCategoryComponent_ng_template_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.handleUpdateCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.addCategoryForm.valid);
  }
}
class AddCategoryComponent {
  constructor(dialogRef, data, fb, categoryService, snackbarService, ngxService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.fb = fb;
    this.categoryService = categoryService;
    this.snackbarService = snackbarService;
    this.ngxService = ngxService;
    this.addCategoryForm = _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup;
  }
  ngOnInit() {
    this.addCategoryForm = this.fb.group({
      name: [this.data.name ? this.data.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  handleAddCategory() {
    let payload = {
      name: this.addCategoryForm.get('name').value
    };
    this.ngxService.start();
    this.categoryService.add(payload).subscribe(res => {
      this.dialogRef.close(res.message);
    }, err => {
      this.ngxService.stop();
      this.dialogRef.close();
      setTimeout(() => {
        this.snackbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
      }, 500);
    });
  }
  handleUpdateCategory() {
    let payload = {
      name: this.addCategoryForm.get('name').value,
      id: this.data['id']
    };
    this.ngxService.start();
    this.categoryService.update(payload).subscribe(res => {
      this.dialogRef.close(res.message);
    }, err => {
      this.ngxService.stop();
      this.dialogRef.close();
      setTimeout(() => {
        this.snackbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
      }, 500);
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) {
  return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__.NgxUiLoaderService));
};
AddCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AddCategoryComponent,
  selectors: [["app-add-category"]],
  decls: 15,
  vars: 5,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "outline", 1, "w-100", "mt-3"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["mat-dialog-actions", "", 1, "mat-dialog-actions"], ["mat-button", "", 3, "click"], [3, "ngIf"], ["mat-button", "", "color", "primary", 3, "disabled", "click"]],
  template: function AddCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddCategoryComponent_span_9_Template, 3, 3, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_11_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AddCategoryComponent_ng_template_13_Template, 2, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AddCategoryComponent_ng_template_14_Template, 2, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addCategoryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addCategoryForm.controls.name.errors == null ? null : ctx.addCategoryForm.controls.name.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.title === "Add Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.title === "Update Category");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5500:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/manager-category/manager-category-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerCategoryRoutingModule": () => (/* binding */ ManagerCategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _manager_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-category.component */ 1798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _manager_category_component__WEBPACK_IMPORTED_MODULE_0__.ManagerCategoryComponent
}];
class ManagerCategoryRoutingModule {}
ManagerCategoryRoutingModule.ɵfac = function ManagerCategoryRoutingModule_Factory(t) {
  return new (t || ManagerCategoryRoutingModule)();
};
ManagerCategoryRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ManagerCategoryRoutingModule
});
ManagerCategoryRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManagerCategoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1798:
/*!************************************************************************!*\
  !*** ./src/app/modules/manager-category/manager-category.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerCategoryComponent": () => (/* binding */ ManagerCategoryComponent)
/* harmony export */ });
/* harmony import */ var D_Dev_cafe_manager_CRUD_ANGULAR_NODE_XAMPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category/add-category.component */ 8001);
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global-constants */ 3018);
/* harmony import */ var src_app_shared_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dialogs/confirm/confirm.component */ 145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/snackbar.service */ 5832);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 8750);



















function ManagerCategoryComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerCategoryComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r9.id, " ");
  }
}
function ManagerCategoryComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerCategoryComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r10.name, " ");
  }
}
function ManagerCategoryComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerCategoryComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerCategoryComponent_td_17_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const row_r11 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.openDialogAdd("300ms", "1500ms", "update", row_r11.name, row_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerCategoryComponent_td_17_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const row_r11 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.confirmDeleteCategory("300ms", "1500ms", row_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ManagerCategoryComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
function ManagerCategoryComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 22);
  }
}
const _c0 = function () {
  return [5];
};
class ManagerCategoryComponent {
  constructor(categoryService, ngxService, dialog, snackbarService) {
    this.categoryService = categoryService;
    this.ngxService = ngxService;
    this.dialog = dialog;
    this.snackbarService = snackbarService;
    this.displayedColumns = ['id', 'name', 'action'];
    this.getAllCategories();
  }
  getAllCategories() {
    var _this = this;
    return (0,D_Dev_cafe_manager_CRUD_ANGULAR_NODE_XAMPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ngxService.start();
      try {
        const res = yield _this.categoryService.getAll().toPromise();
        _this.ngxService.stop();
        const categories = res;
        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(categories);
        _this.dataSource.paginator = _this.paginator;
        _this.dataSource.sort = _this.sort;
        return true;
      } catch (error) {
        _this.ngxService.stop();
        if (error.error?.message) {
          _this.responseMessage = error.error?.message;
        } else {
          _this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.tokenInvalid;
        }
        _this.snackbarService.openSnackBar(_this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.error);
        return false;
      }
    })();
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialogAdd(enterAnimationDuration, exitAnimationDuration, type, name, id) {
    var _this2 = this;
    const title = type === 'add' ? 'Add Category' : 'Update Category';
    const dialogRef = this.dialog.open(_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__.AddCategoryComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: title,
        name: name,
        id: id
      }
    });
    dialogRef.afterClosed().subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_Dev_cafe_manager_CRUD_ANGULAR_NODE_XAMPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
        if (message) {
          try {
            const isReturn = yield _this2.getAllCategories();
            if (isReturn) {
              _this2.snackbarService.openSnackBar(message, '');
            }
          } catch (error) {
            _this2.snackbarService.openSnackBar('Error occurred while fetching categories', src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.error);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  confirmDeleteCategory(enterAnimationDuration, exitAnimationDuration, id) {
    var _this3 = this;
    const dialogRef = this.dialog.open(src_app_shared_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        message: 'delete'
      }
    });
    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm) {
        this.categoryService.delete(id).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,D_Dev_cafe_manager_CRUD_ANGULAR_NODE_XAMPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const isReturn = yield _this3.getAllCategories();
            if (isReturn) {
              _this3.snackbarService.openSnackBar(res.message, '');
            }
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(), error => {
          this.ngxService.stop();
          this.snackbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.genericError, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.error);
        });
      }
    });
  }
}
ManagerCategoryComponent.ɵfac = function ManagerCategoryComponent_Factory(t) {
  return new (t || ManagerCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService));
};
ManagerCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ManagerCategoryComponent,
  selectors: [["app-manager-category"]],
  viewQuery: function ManagerCategoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 21,
  vars: 5,
  consts: [["mat-raised-button", "", "color", "primary", 3, "click"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["class", "col-width-40", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-width-40", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "action"], ["class", "col-width-20", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "col-width-20", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-width-40"], ["mat-cell", "", 1, "col-width-40"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col-width-20"], ["mat-cell", "", 1, "col-width-20"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "mg-left", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ManagerCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerCategoryComponent_Template_button_click_0_listener() {
        return ctx.openDialogAdd("300ms", "1500ms", "add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ManagerCategoryComponent_Template_input_keyup_5_listener($event) {
        return ctx.applyFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3)(8, "table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ManagerCategoryComponent_th_10_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ManagerCategoryComponent_td_11_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ManagerCategoryComponent_th_13_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ManagerCategoryComponent_td_14_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ManagerCategoryComponent_th_16_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ManagerCategoryComponent_td_17_Template, 7, 0, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ManagerCategoryComponent_tr_18_Template, 1, 0, "tr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ManagerCategoryComponent_tr_19_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-paginator", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatMiniFabButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.col-width-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.col-width-20[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mg-left[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYW5hZ2VyLWNhdGVnb3J5L21hbmFnZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC13aWR0aC00MCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uY29sLXdpZHRoLTIwIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubWctbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4578:
/*!*********************************************************************!*\
  !*** ./src/app/modules/manager-category/manager-category.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerCategoryModule": () => (/* binding */ ManagerCategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _manager_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-category-routing.module */ 5500);
/* harmony import */ var _manager_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager-category.component */ 1798);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category/add-category.component */ 8001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);






class ManagerCategoryModule {}
ManagerCategoryModule.ɵfac = function ManagerCategoryModule_Factory(t) {
  return new (t || ManagerCategoryModule)();
};
ManagerCategoryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ManagerCategoryModule
});
ManagerCategoryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _manager_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagerCategoryRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManagerCategoryModule, {
    declarations: [_manager_category_component__WEBPACK_IMPORTED_MODULE_1__.ManagerCategoryComponent, _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__.AddCategoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _manager_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagerCategoryRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_manager-category_manager-category_module_ts.js.map