"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffigyActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EffigyDailyInfo_1 = require("./EffigyDailyInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EffigyActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EffigyActivityDetailInfo", [
            { no: 8, name: "last_difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "taken_reward_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "daily_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EffigyDailyInfo_1.EffigyDailyInfo }
        ]);
    }
    create(value) {
        const message = { lastDifficultyId: 0, takenRewardIndexList: [], curScore: 0, dailyInfoList: [] };
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
                case /* uint32 last_difficulty_id */ 8:
                    message.lastDifficultyId = reader.uint32();
                    break;
                case /* repeated uint32 taken_reward_index_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenRewardIndexList.push(reader.uint32());
                    else
                        message.takenRewardIndexList.push(reader.uint32());
                    break;
                case /* uint32 cur_score */ 5:
                    message.curScore = reader.uint32();
                    break;
                case /* repeated EffigyDailyInfo daily_info_list */ 4:
                    message.dailyInfoList.push(EffigyDailyInfo_1.EffigyDailyInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 last_difficulty_id = 8; */
        if (message.lastDifficultyId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.lastDifficultyId);
        /* repeated uint32 taken_reward_index_list = 13; */
        if (message.takenRewardIndexList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenRewardIndexList.length; i++)
                writer.uint32(message.takenRewardIndexList[i]);
            writer.join();
        }
        /* uint32 cur_score = 5; */
        if (message.curScore !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.curScore);
        /* repeated EffigyDailyInfo daily_info_list = 4; */
        for (let i = 0; i < message.dailyInfoList.length; i++)
            EffigyDailyInfo_1.EffigyDailyInfo.internalBinaryWrite(message.dailyInfoList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyActivityDetailInfo
 */
exports.EffigyActivityDetailInfo = new EffigyActivityDetailInfo$Type();
