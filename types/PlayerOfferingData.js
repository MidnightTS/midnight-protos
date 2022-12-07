"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerOfferingData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingData$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerOfferingData", [
            { no: 8, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "offering_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_new_max_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "is_first_interact", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "taken_level_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { level: 0, offeringId: 0, isNewMaxLevel: false, isFirstInteract: false, takenLevelRewardList: [] };
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
                case /* uint32 level */ 8:
                    message.level = reader.uint32();
                    break;
                case /* uint32 offering_id */ 3:
                    message.offeringId = reader.uint32();
                    break;
                case /* bool is_new_max_level */ 14:
                    message.isNewMaxLevel = reader.bool();
                    break;
                case /* bool is_first_interact */ 9:
                    message.isFirstInteract = reader.bool();
                    break;
                case /* repeated uint32 taken_level_reward_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenLevelRewardList.push(reader.uint32());
                    else
                        message.takenLevelRewardList.push(reader.uint32());
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
        /* uint32 level = 8; */
        if (message.level !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.level);
        /* uint32 offering_id = 3; */
        if (message.offeringId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.offeringId);
        /* bool is_new_max_level = 14; */
        if (message.isNewMaxLevel !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isNewMaxLevel);
        /* bool is_first_interact = 9; */
        if (message.isFirstInteract !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isFirstInteract);
        /* repeated uint32 taken_level_reward_list = 2; */
        if (message.takenLevelRewardList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenLevelRewardList.length; i++)
                writer.uint32(message.takenLevelRewardList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerOfferingData
 */
exports.PlayerOfferingData = new PlayerOfferingData$Type();
