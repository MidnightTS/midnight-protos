"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiracleRingDropResultNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDropResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MiracleRingDropResultNotify", [
            { no: 15, name: "last_take_reward_time", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "drop_result", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { lastTakeRewardTime: 0, dropResult: 0 };
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
                case /* int32 last_take_reward_time */ 15:
                    message.lastTakeRewardTime = reader.int32();
                    break;
                case /* int32 drop_result */ 8:
                    message.dropResult = reader.int32();
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
        /* int32 last_take_reward_time = 15; */
        if (message.lastTakeRewardTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.lastTakeRewardTime);
        /* int32 drop_result = 8; */
        if (message.dropResult !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.dropResult);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MiracleRingDropResultNotify
 */
exports.MiracleRingDropResultNotify = new MiracleRingDropResultNotify$Type();
