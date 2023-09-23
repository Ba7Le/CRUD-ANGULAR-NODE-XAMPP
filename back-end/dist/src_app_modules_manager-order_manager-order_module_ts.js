"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_modules_manager-order_manager-order_module_ts"],{

/***/ 5265:
/*!***********************************************************************!*\
  !*** ./src/app/modules/manager-order/manager-order-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerOrderRoutingModule": () => (/* binding */ ManagerOrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _manager_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-order.component */ 3487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _manager_order_component__WEBPACK_IMPORTED_MODULE_0__.ManagerOrderComponent
}];
class ManagerOrderRoutingModule {}
ManagerOrderRoutingModule.ɵfac = function ManagerOrderRoutingModule_Factory(t) {
  return new (t || ManagerOrderRoutingModule)();
};
ManagerOrderRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ManagerOrderRoutingModule
});
ManagerOrderRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManagerOrderRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3487:
/*!******************************************************************!*\
  !*** ./src/app/modules/manager-order/manager-order.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerOrderComponent": () => (/* binding */ ManagerOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/global-constants */ 3018);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/snackbar.service */ 5832);
/* harmony import */ var src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/bill.service */ 6546);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
























function ManagerOrderComponent_mat_error_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_20_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManagerOrderComponent_mat_error_20_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.manageOrderForm.controls.name.errors == null ? null : ctx_r0.manageOrderForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.manageOrderForm.controls.name.errors == null ? null : ctx_r0.manageOrderForm.controls.name.errors.pattern);
  }
}
function ManagerOrderComponent_mat_error_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_26_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManagerOrderComponent_mat_error_26_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.manageOrderForm.controls.email.errors == null ? null : ctx_r1.manageOrderForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.manageOrderForm.controls.email.errors == null ? null : ctx_r1.manageOrderForm.controls.email.errors.pattern);
  }
}
function ManagerOrderComponent_mat_error_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " This field is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_32_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManagerOrderComponent_mat_error_32_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.manageOrderForm.controls.contactNumber.errors == null ? null : ctx_r2.manageOrderForm.controls.contactNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.manageOrderForm.controls.contactNumber.errors == null ? null : ctx_r2.manageOrderForm.controls.contactNumber.errors.pattern);
  }
}
function ManagerOrderComponent_mat_error_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_42_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.manageOrderForm.controls.paymentMethod.errors == null ? null : ctx_r3.manageOrderForm.controls.paymentMethod.errors.required);
  }
}
function ManagerOrderComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", category_r33.name, " ");
  }
}
function ManagerOrderComponent_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", product_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", product_r34.name, " ");
  }
}
function ManagerOrderComponent_mat_error_74_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_74_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.manageOrderForm.controls.price.errors == null ? null : ctx_r6.manageOrderForm.controls.price.errors.required);
  }
}
function ManagerOrderComponent_mat_error_81_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_81_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.manageOrderForm.controls.quantity.errors == null ? null : ctx_r8.manageOrderForm.controls.quantity.errors.required);
  }
}
function ManagerOrderComponent_mat_error_87_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "required-or-invalid-field.mandatory"), " ");
  }
}
function ManagerOrderComponent_mat_error_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManagerOrderComponent_mat_error_87_span_1_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.manageOrderForm.controls.total.errors == null ? null : ctx_r9.manageOrderForm.controls.total.errors.required);
  }
}
function ManagerOrderComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r38.name, " ");
  }
}
function ManagerOrderComponent_th_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r39.categoryName, " ");
  }
}
function ManagerOrderComponent_th_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r40.description, " ");
  }
}
function ManagerOrderComponent_th_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r41.price, " ");
  }
}
function ManagerOrderComponent_th_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r42.quantity, " ");
  }
}
function ManagerOrderComponent_th_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r43.total, " ");
  }
}
function ManagerOrderComponent_th_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ManagerOrderComponent_td_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 40)(1, "div", 41)(2, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerOrderComponent_td_115_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const i_r45 = restoredCtx.index;
      const row_r44 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.handleDeleteAction(i_r45, row_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function ManagerOrderComponent_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
  }
}
function ManagerOrderComponent_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 44);
  }
}
const _c0 = function () {
  return [5];
};
class ManagerOrderComponent {
  constructor(fb, productService, categoryService, snacbarService, billService, ngxService) {
    this.fb = fb;
    this.productService = productService;
    this.categoryService = categoryService;
    this.snacbarService = snacbarService;
    this.billService = billService;
    this.ngxService = ngxService;
    this.displayedColumns = ['name', 'category', 'price', 'quantity', 'total', 'delete'];
    this.dataSource = [];
    this.manageOrderForm = _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup;
    this.categories = [];
    this.products = [];
    this.totalAmount = 0;
  }
  ngOnInit() {
    this.ngxService.start();
    this.getCategories();
    this.manageOrderForm = this.fb.group({
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.nameRegex)]],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.emailRegex)]],
      contactNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.contactNumberRegex)]],
      paymentMethod: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      product: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      category: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      quantity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      total: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
  }
  getCategories() {
    this.categoryService.getAll().subscribe(res => {
      this.ngxService.stop();
      this.categories = res;
    }, err => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
    });
  }
  getProductByCategory(value) {
    this.manageOrderForm.patchValue({
      product: null
    });
    this.productService.getProductsByCategory(value.id).subscribe(res => {
      this.products = res;
      this.manageOrderForm.patchValue({
        price: '',
        quantity: '',
        total: 0
      });
    }, err => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
    });
  }
  getProductDetails(value) {
    this.productService.getById(value.id).subscribe(res => {
      this.price = res.price;
      this.manageOrderForm.patchValue({
        price: res.price,
        quantity: '1',
        total: this.price * 1
      });
    }, err => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
    });
  }
  setQuantity(value) {
    let quantity = this.manageOrderForm.get('quantity')?.value;
    let price = this.manageOrderForm.get('price')?.value;
    if (quantity > 0) {
      this.manageOrderForm.patchValue({
        total: quantity * price
      });
    } else if (quantity !== '') {
      this.manageOrderForm.patchValue({
        quantity: 1,
        total: 1 * price
      });
    }
  }
  validateProductAdd() {
    let total = this.manageOrderForm.get('total')?.value;
    let quantity = this.manageOrderForm.get('quantity')?.value;
    if (total === 0 || total === null || quantity <= 0) {
      return true;
    } else {
      return false;
    }
  }
  validateSubmit() {
    let name = this.manageOrderForm.get('name')?.value;
    let email = this.manageOrderForm.get('email')?.value;
    let emailValid = this.manageOrderForm.get('email')?.valid;
    let contactNumber = this.manageOrderForm.get('contactNumber')?.value;
    let contactNumberValid = this.manageOrderForm.get('contactNumber')?.valid;
    let paymentMethod = this.manageOrderForm.get('paymentMethod')?.value;
    if (this.totalAmount === 0 || name === null || email === null || contactNumber === null || paymentMethod === null || !contactNumberValid || !emailValid) {
      return true;
    } else {
      return false;
    }
  }
  add() {
    var formData = this.manageOrderForm.value;
    var productName = this.dataSource.find(e => e.id === formData.product.id);
    if (productName === undefined) {
      this.totalAmount = this.totalAmount + formData.total;
      this.dataSource.push({
        id: formData.product.id,
        name: formData.product.name,
        category: formData.category.name,
        quantity: formData.quantity,
        price: formData.price,
        total: formData.total
      });
      this.dataSource = [...this.dataSource];
      this.snacbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.productAdd, "success");
    } else {
      this.snacbarService.openSnackBar(src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.productExistError, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
    }
  }
  handleDeleteAction(value, element) {
    this.totalAmount = this.totalAmount - element.total;
    this.dataSource.splice(value, 1);
    this.dataSource = [...this.dataSource];
  }
  submitAction() {
    this.ngxService.start();
    var formData = this.manageOrderForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      paymentMethod: formData.paymentMethod,
      totalAmount: this.totalAmount,
      productDetails: JSON.stringify(this.dataSource)
    };
    this.billService.generateReport(data).subscribe(res => {
      this.downloadFile(res?.uuid);
      this.manageOrderForm.reset();
      this.dataSource = [];
      this.totalAmount = 0;
    }, err => {
      this.ngxService.stop();
      if (err.error?.message) {
        this.responseMessage = err.error?.message;
      } else {
        this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.genericError;
      }
      this.snacbarService.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.error);
    });
  }
  downloadFile(fileName) {
    var data = {
      uuid: fileName
    };
    this.billService.getPdf(data).subscribe(res => {
      (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(res, fileName + '.pdf');
      this.ngxService.stop();
    });
  }
}
ManagerOrderComponent.ɵfac = function ManagerOrderComponent_Factory(t) {
  return new (t || ManagerOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_bill_service__WEBPACK_IMPORTED_MODULE_5__.BillService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__.NgxUiLoaderService));
};
ManagerOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ManagerOrderComponent,
  selectors: [["app-manager-order"]],
  viewQuery: function ManagerOrderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 119,
  vars: 27,
  consts: [[1, "order-container"], [1, "black-color"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "formGroup"], [1, "mt-3", "black-color"], [1, "row", "mt-3"], [1, "col-3"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "contactNumber"], ["formControlName", "paymentMethod"], [3, "value"], ["formControlName", "category", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "product", 3, "selectionChange"], [1, "col-2"], ["matInput", "", "formControlName", "price", "readonly", ""], ["matInput", "", "type", "number", "formControlName", "quantity", 3, "keyup"], ["input", ""], ["matInput", "", "type", "number", "formControlName", "total", "readonly", ""], [1, "d-flex", "justify-content-between"], ["mat-raised-button", "", "color", "warn"], [1, "mat-elevation-z8", "mt-3"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "description"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefSticky"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "action-container"], ["mat-mini-fab", "", "color", "warn", 1, "mg-left", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ManagerOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Manager Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-actions", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerOrderComponent_Template_button_click_6_listener() {
        return ctx.submitAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Submit & Get Bill ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 4)(9, "mat-card", 5)(10, "mat-card-header")(11, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Customer Details:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-card-content")(14, "div", 6)(15, "div", 7)(16, "mat-form-field", 8)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ManagerOrderComponent_mat_error_20_Template, 3, 2, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7)(22, "mat-form-field", 8)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ManagerOrderComponent_mat_error_26_Template, 3, 2, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 7)(28, "mat-form-field", 8)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Contact Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ManagerOrderComponent_mat_error_32_Template, 3, 2, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 7)(34, "mat-form-field", 8)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Payment Method");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-select", 13)(38, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Cash ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " Credit Card ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ManagerOrderComponent_mat_error_42_Template, 2, 1, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-card", 5)(44, "mat-card-header")(45, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Select Product:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-card-content")(48, "div", 6)(49, "div", 7)(50, "mat-form-field", 8)(51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ManagerOrderComponent_Template_mat_select_selectionChange_53_listener($event) {
        return ctx.getProductByCategory($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ManagerOrderComponent_mat_option_54_Template, 2, 2, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "mat-error")(56, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 7)(60, "mat-form-field", 8)(61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ManagerOrderComponent_Template_mat_select_selectionChange_63_listener($event) {
        return ctx.getProductDetails($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, ManagerOrderComponent_mat_option_64_Template, 2, 2, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "mat-error")(66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 18)(70, "mat-form-field", 8)(71, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, ManagerOrderComponent_mat_error_74_Template, 2, 1, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 18)(76, "mat-form-field", 8)(77, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Quantity");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ManagerOrderComponent_Template_input_keyup_79_listener($event) {
        return ctx.setQuantity($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, ManagerOrderComponent_mat_error_81_Template, 2, 1, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 18)(83, "mat-form-field", 8)(84, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, ManagerOrderComponent_mat_error_87_Template, 2, 1, "mat-error", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "mat-card-actions", 23)(89, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManagerOrderComponent_Template_button_click_89_listener() {
        return ctx.add();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 25)(94, "table", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](95, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, ManagerOrderComponent_th_96_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, ManagerOrderComponent_td_97_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](98, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, ManagerOrderComponent_th_99_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, ManagerOrderComponent_td_100_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](101, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](102, ManagerOrderComponent_th_102_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](103, ManagerOrderComponent_td_103_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](104, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, ManagerOrderComponent_th_105_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, ManagerOrderComponent_td_106_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](107, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, ManagerOrderComponent_th_108_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, ManagerOrderComponent_td_109_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](110, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](111, ManagerOrderComponent_th_111_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, ManagerOrderComponent_td_112_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](113, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](114, ManagerOrderComponent_th_114_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, ManagerOrderComponent_td_115_Template, 5, 0, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, ManagerOrderComponent_tr_116_Template, 1, 0, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, ManagerOrderComponent_tr_117_Template, 1, 0, "tr", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](118, "mat-paginator", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.validateSubmit());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.manageOrderForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.name.touched && ctx.manageOrderForm.controls.name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.email.touched && ctx.manageOrderForm.controls.email.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.contactNumber.touched && ctx.manageOrderForm.controls.contactNumber.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Cash");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Credit Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.paymentMethod.touched && ctx.manageOrderForm.controls.paymentMethod.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](58, 22, "required-or-invalid-field.mandatory"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](68, 24, "required-or-invalid-field.mandatory"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.price.touched && ctx.manageOrderForm.controls.price.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.quantity.touched && ctx.manageOrderForm.controls.quantity.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.manageOrderForm.controls.total.touched && ctx.manageOrderForm.controls.total.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.validateProductAdd());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total Amount: ", ctx.totalAmount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns)("matRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatMiniFabButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: [".black-color[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.order-container[_ngcontent-%COMP%] {\n  height: 82%;\n  overflow: auto;\n  padding: 0 10px;\n}\n\n\n.order-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n.order-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f1f1f1;\n}\n\n.order-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n}\n\n.order-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYW5hZ2VyLW9yZGVyL21hbmFnZXItb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQSxvQ0FBQTtBQUNBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrLWNvbG9yIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9yZGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgyJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4vKiBTdHlsZXMgZm9yIHRoZSBjdXN0b20gc2Nyb2xsYmFyICovXHJcbi5vcmRlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi5vcmRlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5vcmRlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5vcmRlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 6539:
/*!***************************************************************!*\
  !*** ./src/app/modules/manager-order/manager-order.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerOrderModule": () => (/* binding */ ManagerOrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _manager_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager-order-routing.module */ 5265);
/* harmony import */ var _manager_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager-order.component */ 3487);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);





class ManagerOrderModule {}
ManagerOrderModule.ɵfac = function ManagerOrderModule_Factory(t) {
  return new (t || ManagerOrderModule)();
};
ManagerOrderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ManagerOrderModule
});
ManagerOrderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _manager_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagerOrderRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManagerOrderModule, {
    declarations: [_manager_order_component__WEBPACK_IMPORTED_MODULE_1__.ManagerOrderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _manager_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagerOrderRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_manager-order_manager-order_module_ts.js.map