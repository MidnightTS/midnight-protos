"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpPlayOwnerStartInviteRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayOwnerStartInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("MpPlayOwnerStartInviteRsp", [
            { no: 14, name: "is_skip_match", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSkipMatch: false, retcode: 0, mpPlayId: 0 };
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
                case /* bool is_skip_match */ 14:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 mp_play_id */ 4:
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
        /* bool is_skip_match = 14; */
        if (message.isSkipMatch !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isSkipMatch);
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 mp_play_id = 4; */
        if (message.mpPlayId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MpPlayOwnerStartInviteRsp
 */
exports.MpPlayOwnerStartInviteRsp = new MpPlayOwnerStartInviteRsp$Type();
