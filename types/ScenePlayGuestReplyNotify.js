"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayGuestReplyNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayGuestReplyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayGuestReplyNotify", [
            { no: 4, name: "play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "guest_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_agree", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { playId: 0, guestUid: 0, isAgree: false };
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
                case /* uint32 play_id */ 4:
                    message.playId = reader.uint32();
                    break;
                case /* uint32 guest_uid */ 5:
                    message.guestUid = reader.uint32();
                    break;
                case /* bool is_agree */ 2:
                    message.isAgree = reader.bool();
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
        /* uint32 play_id = 4; */
        if (message.playId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playId);
        /* uint32 guest_uid = 5; */
        if (message.guestUid !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.guestUid);
        /* bool is_agree = 2; */
        if (message.isAgree !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayGuestReplyNotify
 */
exports.ScenePlayGuestReplyNotify = new ScenePlayGuestReplyNotify$Type();
