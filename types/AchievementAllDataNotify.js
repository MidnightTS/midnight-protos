"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementAllDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Achievement_1 = require("./Achievement");
// @generated message type with reflection information, may provide speed optimized methods
class AchievementAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AchievementAllDataNotify", [
            { no: 13, name: "reward_taken_goal_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "achievement_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Achievement_1.Achievement }
        ]);
    }
    create(value) {
        const message = { rewardTakenGoalIdList: [], achievementList: [] };
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
                case /* repeated uint32 reward_taken_goal_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardTakenGoalIdList.push(reader.uint32());
                    else
                        message.rewardTakenGoalIdList.push(reader.uint32());
                    break;
                case /* repeated Achievement achievement_list */ 8:
                    message.achievementList.push(Achievement_1.Achievement.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 reward_taken_goal_id_list = 13; */
        if (message.rewardTakenGoalIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardTakenGoalIdList.length; i++)
                writer.uint32(message.rewardTakenGoalIdList[i]);
            writer.join();
        }
        /* repeated Achievement achievement_list = 8; */
        for (let i = 0; i < message.achievementList.length; i++)
            Achievement_1.Achievement.internalBinaryWrite(message.achievementList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AchievementAllDataNotify
 */
exports.AchievementAllDataNotify = new AchievementAllDataNotify$Type();
