"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditState = void 0;
// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "AuditState.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
/**
 * @generated from protobuf enum com.midnights.game.AuditState
 */
var AuditState;
(function (AuditState) {
    /**
     * @generated from protobuf enum value: AUDIT_NONE = 0;
     */
    AuditState[AuditState["AUDIT_NONE"] = 0] = "AUDIT_NONE";
    /**
     * @generated from protobuf enum value: AUDIT_WAITING = 1;
     */
    AuditState[AuditState["AUDIT_WAITING"] = 1] = "AUDIT_WAITING";
    /**
     * @generated from protobuf enum value: AUDIT_FAILED = 2;
     */
    AuditState[AuditState["AUDIT_FAILED"] = 2] = "AUDIT_FAILED";
})(AuditState = exports.AuditState || (exports.AuditState = {}));
