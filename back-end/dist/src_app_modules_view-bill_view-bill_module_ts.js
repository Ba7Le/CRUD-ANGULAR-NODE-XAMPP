"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_modules_view-bill_view-bill_module_ts"],{

/***/ 5409:
/*!************************************************************************************!*\
  !*** ./src/app/modules/view-bill/view-bill-product/view-bill-product.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBillProductComponent": () => (/* binding */ ViewBillProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 3348);







function ViewBillProductComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ViewBillProductComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.name, " ");
  }
}
function ViewBillProductComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ViewBillProductComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.category, " ");
  }
}
function ViewBillProductComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ViewBillProductComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r14.price, " ");
  }
}
function ViewBillProductComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ViewBillProductComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r15.quantity, " ");
  }
}
function ViewBillProductComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ViewBillProductComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r16.total, " ");
  }
}
function ViewBillProductComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
  }
}
function ViewBillProductComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
  }
}
const _c0 = function () {
  return [5];
};
class ViewBillProductComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.displayedColumns = ['name', 'category', 'price', 'quantity', 'total'];
  }
  ngOnInit() {
    debugger;
    this.dataSource = JSON.parse(this.data.data.productDetails);
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
ViewBillProductComponent.ɵfac = function ViewBillProductComponent_Factory(t) {
  return new (t || ViewBillProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
ViewBillProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewBillProductComponent,
  selectors: [["app-view-bill-product"]],
  decls: 45,
  vars: 9,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "container"], [1, "tableUp"], [1, "mat-elevation-z8", "mt-5"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-dialog-actions", "", 1, "mat-dialog-actions"], ["mat-button", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ViewBillProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Bill");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "table", 2)(4, "tr")(5, "td")(6, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td")(10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr")(14, "td")(15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Payment Method:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3)(23, "table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewBillProductComponent_th_25_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewBillProductComponent_td_26_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewBillProductComponent_th_28_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewBillProductComponent_td_29_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewBillProductComponent_th_31_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ViewBillProductComponent_td_32_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ViewBillProductComponent_th_34_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ViewBillProductComponent_td_35_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ViewBillProductComponent_th_37_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ViewBillProductComponent_td_38_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ViewBillProductComponent_tr_39_Template, 1, 0, "tr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ViewBillProductComponent_tr_40_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-paginator", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15)(43, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewBillProductComponent_Template_button_click_43_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.data.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.data.email, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.data.contactNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.data.paymentMethod, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.tableUp[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.tableUp[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ddd;\n  font-size: 14px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92aWV3LWJpbGwvdmlldy1iaWxsLXByb2R1Y3Qvdmlldy1iaWxsLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRhYmxlVXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4udGFibGVVcCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1432:
/*!***************************************************************!*\
  !*** ./src/app/modules/view-bill/view-bill-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBillRoutingModule": () => (/* binding */ ViewBillRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _view_bill_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-bill.component */ 2253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _view_bill_component__WEBPACK_IMPORTED_MODULE_0__.ViewBillComponent
}];
class ViewBillRoutingModule {}
ViewBillRoutingModule.ɵfac = function ViewBillRoutingModule_Factory(t) {
  return new (t || ViewBillRoutingModule)();
};
ViewBillRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ViewBillRoutingModule
});
ViewBillRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewBillRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2253:
/*!**********************************************************!*\
  !*** ./src/app/modules/view-bill/view-bill.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBillComponent": () => (/* binding */ ViewBillComponent)
/* harmony export */ });
/* harmony import */ var D_Dev_cafe_manager_CRUD_ANGULAR_NODE_XAMPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global-constants */ 3018);
/* harmony import */ var _view_bill_product_view_bill_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-bill-product/view-bill-product.component */ 5409);
/* harmony import */ var src_app_shared_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dialogs/confirm/confirm.component */ 145);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bill.service */ 6546);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/snackbar.service */ 5832);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 2193);




















function ViewBillComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewBillComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r15.name, " ");
  }
}
function ViewBillComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewBillComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r16.email, " ");
  }
}
function ViewBillComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Contact Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewBillComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r17.contactNumber, " ");
  }
}
function ViewBillComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewBillComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r18.paymentMethod, " ");
  }
}
function ViewBillComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewBillComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r19.total, " ");
  }
}
function ViewBillComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ViewBillComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17)(1, "div", 18)(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewBillComponent_td_29_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.handleViewAction("300ms", "1500ms", row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewBillComponent_td_29_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.downloadReportAction(row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "summarize");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewBillComponent_td_29_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.handleDeleteAction("300ms", "1500ms", row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function ViewBillComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 22);
  }
}
function ViewBillComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 23);
  }
}
const _c0 = function () {
  return [5];
};
class ViewBillComponent {
  constructor(billService, ngxService, dialog, snackBarService, router) {
    this.billService = billService;
    this.ngxService = ngxService;
    this.dialog = dialog;
    this.snackBarService = snackBarService;
    this.router = router;
    this.displayedColumns = ['name', 'email', 'contactNumber', 'paymentMethod', 'total', 'view'];
  }
  ngOnInit() {
    this.ngxService.start();
    this.tableData();
  }
  tableData() {
    this.billService.getBills().subscribe(res => {
      this.ngxService.stop();
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(res);
    }, err => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.genericError;
      }
      this.snackBarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.error);
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  handleViewAction(enterAnimationDuration, exitAnimationDuration, values) {
    var _this = this;
    debugger;
    const dialogRef = this.dialog.open(_view_bill_product_view_bill_product_component__WEBPACK_IMPORTED_MODULE_2__.ViewBillProductComponent, {
      width: '950px',
      enterAnimationDuration,
      exitAnimationDuration,
      autoFocus: false,
      data: {
        data: values
      }
    });
    dialogRef.afterClosed().subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_Dev_cafe_manager_CRUD_ANGULAR_NODE_XAMPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
        if (message) {
          try {
            _this.snackBarService.openSnackBar(message, '');
          } catch (error) {
            _this.snackBarService.openSnackBar('Error occurred while fetching categories', src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.error);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  downloadReportAction(value) {
    this.ngxService.start();
    var data = {
      name: value.name,
      email: value.email,
      uuid: value.uuid,
      contactNumber: value.contactNumber,
      paymentMethod: value.paymentMethod,
      totalAmount: value.total,
      productDetails: value.productDetails
    };
    this.billService.getPdf(data).subscribe(res => {
      (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(res, value.uuid + '.pdf');
      this.ngxService.stop();
    });
  }
  handleDeleteAction(enterAnimationDuration, exitAnimationDuration, value) {
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
        this.ngxService.start();
        this.billService.delete(value.id).subscribe(res => {
          this.ngxService.stop();
          this.tableData();
          this.responseMessage = res?.message;
          this.snackBarService.openSnackBar(this.responseMessage, 'Success');
        }, err => {
          this.ngxService.stop();
          if (err.error?.message) {
            this.responseMessage = err.error?.message;
          } else {
            this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.genericError;
          }
          this.snackBarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.error);
        });
      }
    });
  }
}
ViewBillComponent.ɵfac = function ViewBillComponent_Factory(t) {
  return new (t || ViewBillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_5__.BillService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__.NgxUiLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
ViewBillComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ViewBillComponent,
  selectors: [["app-view-bill"]],
  decls: 33,
  vars: 5,
  consts: [[1, "black-color"], ["matInput", ""], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "contactNumber"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "total"], ["matColumnDef", "view"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "action-container"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "accent", 1, "ms-2", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "ms-2", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ViewBillComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "View");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content")(5, "mat-form-field")(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 3)(11, "table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](12, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ViewBillComponent_th_13_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ViewBillComponent_td_14_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ViewBillComponent_th_16_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ViewBillComponent_td_17_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ViewBillComponent_th_19_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ViewBillComponent_td_20_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](21, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ViewBillComponent_th_22_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ViewBillComponent_td_23_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](24, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ViewBillComponent_th_25_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ViewBillComponent_td_26_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](27, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ViewBillComponent_th_28_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ViewBillComponent_td_29_Template, 11, 0, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ViewBillComponent_tr_30_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ViewBillComponent_tr_31_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "mat-paginator", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0));
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatMiniFabButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle],
  styles: [".black-color[_ngcontent-%COMP%] {\n  color: black;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.col-width-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.col-width-20[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mg-left[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92aWV3LWJpbGwvdmlldy1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2stY29sb3Ige1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC13aWR0aC00MCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uY29sLXdpZHRoLTIwIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubWctbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3501:
/*!*******************************************************!*\
  !*** ./src/app/modules/view-bill/view-bill.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBillModule": () => (/* binding */ ViewBillModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _view_bill_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-bill-routing.module */ 1432);
/* harmony import */ var _view_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-bill.component */ 2253);
/* harmony import */ var _view_bill_product_view_bill_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-bill-product/view-bill-product.component */ 5409);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);






class ViewBillModule {}
ViewBillModule.ɵfac = function ViewBillModule_Factory(t) {
  return new (t || ViewBillModule)();
};
ViewBillModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ViewBillModule
});
ViewBillModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _view_bill_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewBillRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewBillModule, {
    declarations: [_view_bill_component__WEBPACK_IMPORTED_MODULE_1__.ViewBillComponent, _view_bill_product_view_bill_product_component__WEBPACK_IMPORTED_MODULE_2__.ViewBillProductComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _view_bill_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewBillRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_view-bill_view-bill_module_ts.js.map