"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationHuntInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationHuntInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CityReputationHuntInfo", [
            { no: 1, name: "cur_week_finish_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "has_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { curWeekFinishNum: 0, isOpen: false, hasReward: false };
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
                case /* uint32 cur_week_finish_num */ 1:
                    message.curWeekFinishNum = reader.uint32();
                    break;
                case /* bool is_open */ 7:
                    message.isOpen = reader.bool();
                    break;
                case /* bool has_reward */ 15:
                    message.hasReward = reader.bool();
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
        /* uint32 cur_week_finish_num = 1; */
        if (message.curWeekFinishNum !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.curWeekFinishNum);
        /* bool is_open = 7; */
        if (message.isOpen !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isOpen);
        /* bool has_reward = 15; */
        if (message.hasReward !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.hasReward);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationHuntInfo
 */
exports.CityReputationHuntInfo = new CityReputationHuntInfo$Type();
