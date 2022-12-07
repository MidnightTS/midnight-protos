"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMatchStopNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchReason_1 = require("./MatchReason");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchStopNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerMatchStopNotify", [
            { no: 10, name: "reason", kind: "enum", T: () => ["MatchReason", MatchReason_1.MatchReason, "MATCH_REASON_"] },
            { no: 8, name: "host_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, hostUid: 0 };
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
                case /* MatchReason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* uint32 host_uid */ 8:
                    message.hostUid = reader.uint32();
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
        /* MatchReason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 host_uid = 8; */
        if (message.hostUid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.hostUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerMatchStopNotify
 */
exports.PlayerMatchStopNotify = new PlayerMatchStopNotify$Type();
