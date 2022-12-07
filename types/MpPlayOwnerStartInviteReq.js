"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpPlayOwnerStartInviteReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerStartInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("MpPlayOwnerStartInviteReq", [
            { no: 9, name: "is_skip_match", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSkipMatch: false, mpPlayId: 0 };
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
                case /* bool is_skip_match */ 9:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* uint32 mp_play_id */ 10:
                    message.mpPlayId = reader.uint32();
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
        /* bool is_skip_match = 9; */
        if (message.isSkipMatch !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        /* uint32 mp_play_id = 10; */
        if (message.mpPlayId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MpPlayOwnerStartInviteReq
 */
exports.MpPlayOwnerStartInviteReq = new MpPlayOwnerStartInviteReq$Type();
