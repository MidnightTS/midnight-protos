"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftGuestReplyInviteNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DraftGuestReplyInviteNotify", [
            { no: 1, name: "is_agree", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "guest_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "draft_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isAgree: false, guestUid: 0, draftId: 0 };
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
                case /* bool is_agree */ 1:
                    message.isAgree = reader.bool();
                    break;
                case /* uint32 guest_uid */ 13:
                    message.guestUid = reader.uint32();
                    break;
                case /* uint32 draft_id */ 2:
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
        /* bool is_agree = 1; */
        if (message.isAgree !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isAgree);
        /* uint32 guest_uid = 13; */
        if (message.guestUid !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.guestUid);
        /* uint32 draft_id = 2; */
        if (message.draftId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DraftGuestReplyInviteNotify
 */
exports.DraftGuestReplyInviteNotify = new DraftGuestReplyInviteNotify$Type();
