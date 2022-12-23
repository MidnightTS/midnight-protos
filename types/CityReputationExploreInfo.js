"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationExploreInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationExploreInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CityReputationExploreInfo", [
            { no: 1, name: "explore_percent", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "taken_explore_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { explorePercent: 0, takenExploreRewardList: [], isOpen: false };
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
                case /* uint32 explore_percent */ 1:
                    message.explorePercent = reader.uint32();
                    break;
                case /* repeated uint32 taken_explore_reward_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenExploreRewardList.push(reader.uint32());
                    else
                        message.takenExploreRewardList.push(reader.uint32());
                    break;
                case /* bool is_open */ 13:
                    message.isOpen = reader.bool();
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
        /* uint32 explore_percent = 1; */
        if (message.explorePercent !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.explorePercent);
        /* repeated uint32 taken_explore_reward_list = 15; */
        if (message.takenExploreRewardList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenExploreRewardList.length; i++)
                writer.uint32(message.takenExploreRewardList[i]);
            writer.join();
        }
        /* bool is_open = 13; */
        if (message.isOpen !== false)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationExploreInfo
 */
exports.CityReputationExploreInfo = new CityReputationExploreInfo$Type();
