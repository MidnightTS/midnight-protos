"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftInviteResultNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DraftInviteResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DraftInviteResultNotify", [
            { no: 11, name: "is_all_agree", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "draft_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isAllAgree: false, draftId: 0 };
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
                case /* bool is_all_agree */ 11:
                    message.isAllAgree = reader.bool();
                    break;
                case /* uint32 draft_id */ 12:
                    message.draftId = reader.uint32();
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
        /* bool is_all_agree = 11; */
        if (message.isAllAgree !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isAllAgree);
        /* uint32 draft_id = 12; */
        if (message.draftId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftInviteResultNotify
 */
exports.DraftInviteResultNotify = new DraftInviteResultNotify$Type();
