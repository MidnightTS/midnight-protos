"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassCycle = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassCycle$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassCycle", [
            { no: 5, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cycle_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { endTime: 0, beginTime: 0, cycleIdx: 0 };
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
                case /* uint32 end_time */ 5:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 begin_time */ 13:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 cycle_idx */ 15:
                    message.cycleIdx = reader.uint32();
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
        /* uint32 end_time = 5; */
        if (message.endTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 begin_time = 13; */
        if (message.beginTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 cycle_idx = 15; */
        if (message.cycleIdx !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cycleIdx);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassCycle
 */
exports.BattlePassCycle = new BattlePassCycle$Type();
