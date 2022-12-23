"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentAuditInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AuditState_1 = require("./AuditState");
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ContentAuditInfo", [
            { no: 1, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "submit_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "audit_state", kind: "enum", T: () => ["AuditState", AuditState_1.AuditState, "AUDIT_STATE_"] },
            { no: 5, name: "submit_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, content: "", submitCount: 0, auditState: 0, submitLimit: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_open */ 1:
                    message.isOpen = reader.bool();
                    break;
                case /* string content */ 2:
                    message.content = reader.string();
                    break;
                case /* uint32 submit_count */ 3:
                    message.submitCount = reader.uint32();
                    break;
                case /* AuditState audit_state */ 4:
                    message.auditState = reader.int32();
                    break;
                case /* uint32 submit_limit */ 5:
                    message.submitLimit = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_open = 1; */
        if (message.isOpen !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isOpen);
        /* string content = 2; */
        if (message.content !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.content);
        /* uint32 submit_count = 3; */
        if (message.submitCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.submitCount);
        /* AuditState audit_state = 4; */
        if (message.auditState !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.auditState);
        /* uint32 submit_limit = 5; */
        if (message.submitLimit !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.submitLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ContentAuditInfo
 */
exports.ContentAuditInfo = new ContentAuditInfo$Type();
