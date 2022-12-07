"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftInviteFailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DraftInviteFailReason_1 = require("./DraftInviteFailReason");
// @generated message type with reflection information, may provide speed optimized methods
class DraftInviteFailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DraftInviteFailInfo", [
            { no: 6, name: "reason", kind: "enum", T: () => ["DraftInviteFailReason", DraftInviteFailReason_1.DraftInviteFailReason, "DRAFT_INVITE_FAIL_REASON_"] },
            { no: 10, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, uid: 0 };
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
                case /* DraftInviteFailReason reason */ 6:
                    message.reason = reader.int32();
                    break;
                case /* uint32 uid */ 10:
                    message.uid = reader.uint32();
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
        /* DraftInviteFailReason reason = 6; */
        if (message.reason !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 uid = 10; */
        if (message.uid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftInviteFailInfo
 */
exports.DraftInviteFailInfo = new DraftInviteFailInfo$Type();
