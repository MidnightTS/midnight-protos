"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DeliveryActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DeliveryActivityDetailInfo", [
            { no: 1, name: "day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_taken_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "finished_delivery_quest_index", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dayIndex: 0, isTakenReward: false, finishedDeliveryQuestIndex: [] };
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
                case /* uint32 day_index */ 1:
                    message.dayIndex = reader.uint32();
                    break;
                case /* bool is_taken_reward */ 11:
                    message.isTakenReward = reader.bool();
                    break;
                case /* repeated uint32 finished_delivery_quest_index */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedDeliveryQuestIndex.push(reader.uint32());
                    else
                        message.finishedDeliveryQuestIndex.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 day_index = 1; */
        if (message.dayIndex !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.dayIndex);
        /* bool is_taken_reward = 11; */
        if (message.isTakenReward !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isTakenReward);
        /* repeated uint32 finished_delivery_quest_index = 4; */
        if (message.finishedDeliveryQuestIndex.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedDeliveryQuestIndex.length; i++)
                writer.uint32(message.finishedDeliveryQuestIndex[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeliveryActivityDetailInfo
 */
exports.DeliveryActivityDetailInfo = new DeliveryActivityDetailInfo$Type();
