"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarPropChangeReasonNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PropChangeReason_1 = require("./PropChangeReason");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPropChangeReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarPropChangeReasonNotify", [
            { no: 7, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "reason", kind: "enum", T: () => ["PropChangeReason", PropChangeReason_1.PropChangeReason, "PROP_CHANGE_REASON_"] },
            { no: 14, name: "cur_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "old_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { propType: 0, reason: 0, curValue: 0, avatarGuid: 0n, oldValue: 0 };
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
                case /* uint32 prop_type */ 7:
                    message.propType = reader.uint32();
                    break;
                case /* PropChangeReason reason */ 15:
                    message.reason = reader.int32();
                    break;
                case /* float cur_value */ 14:
                    message.curValue = reader.float();
                    break;
                case /* uint64 avatar_guid */ 3:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* float old_value */ 13:
                    message.oldValue = reader.float();
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
        /* uint32 prop_type = 7; */
        if (message.propType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.propType);
        /* PropChangeReason reason = 15; */
        if (message.reason !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.reason);
        /* float cur_value = 14; */
        if (message.curValue !== 0)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.curValue);
        /* uint64 avatar_guid = 3; */
        if (message.avatarGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* float old_value = 13; */
        if (message.oldValue !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.oldValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarPropChangeReasonNotify
 */
exports.AvatarPropChangeReasonNotify = new AvatarPropChangeReasonNotify$Type();
