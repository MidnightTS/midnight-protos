"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerPropChangeReasonNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PropChangeReason_1 = require("./PropChangeReason");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPropChangeReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerPropChangeReasonNotify", [
            { no: 10, name: "old_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "cur_value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "reason", kind: "enum", T: () => ["PropChangeReason", PropChangeReason_1.PropChangeReason, "PROP_CHANGE_REASON_"] },
            { no: 5, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { oldValue: 0, curValue: 0, reason: 0, propType: 0 };
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
                case /* float old_value */ 10:
                    message.oldValue = reader.float();
                    break;
                case /* float cur_value */ 11:
                    message.curValue = reader.float();
                    break;
                case /* PropChangeReason reason */ 2:
                    message.reason = reader.int32();
                    break;
                case /* uint32 prop_type */ 5:
                    message.propType = reader.uint32();
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
        /* float old_value = 10; */
        if (message.oldValue !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.oldValue);
        /* float cur_value = 11; */
        if (message.curValue !== 0)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.curValue);
        /* PropChangeReason reason = 2; */
        if (message.reason !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 prop_type = 5; */
        if (message.propType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.propType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerPropChangeReasonNotify
 */
exports.PlayerPropChangeReasonNotify = new PlayerPropChangeReasonNotify$Type();
