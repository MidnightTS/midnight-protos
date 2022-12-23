"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonRestartInviteReplyRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonRestartInviteReplyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonRestartInviteReplyRsp", [
            { no: 14, name: "is_trans_point", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "is_accept", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isTransPoint: false, retcode: 0, isAccept: false };
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
                case /* bool is_trans_point */ 14:
                    message.isTransPoint = reader.bool();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_accept */ 6:
                    message.isAccept = reader.bool();
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
        /* bool is_trans_point = 14; */
        if (message.isTransPoint !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isTransPoint);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_accept = 6; */
        if (message.isAccept !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAccept);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonRestartInviteReplyRsp
 */
exports.DungeonRestartInviteReplyRsp = new DungeonRestartInviteReplyRsp$Type();
