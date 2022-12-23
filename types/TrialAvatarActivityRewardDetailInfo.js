"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialAvatarActivityRewardDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TrialAvatarActivityRewardDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TrialAvatarActivityRewardDetailInfo", [
            { no: 4, name: "trial_avatar_index_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "received_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "passed_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { trialAvatarIndexId: 0, receivedReward: false, passedDungeon: false, rewardId: 0 };
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
                case /* uint32 trial_avatar_index_id */ 4:
                    message.trialAvatarIndexId = reader.uint32();
                    break;
                case /* bool received_reward */ 14:
                    message.receivedReward = reader.bool();
                    break;
                case /* bool passed_dungeon */ 5:
                    message.passedDungeon = reader.bool();
                    break;
                case /* uint32 reward_id */ 11:
                    message.rewardId = reader.uint32();
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
        /* uint32 trial_avatar_index_id = 4; */
        if (message.trialAvatarIndexId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.trialAvatarIndexId);
        /* bool received_reward = 14; */
        if (message.receivedReward !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.receivedReward);
        /* bool passed_dungeon = 5; */
        if (message.passedDungeon !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.passedDungeon);
        /* uint32 reward_id = 11; */
        if (message.rewardId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.rewardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TrialAvatarActivityRewardDetailInfo
 */
exports.TrialAvatarActivityRewardDetailInfo = new TrialAvatarActivityRewardDetailInfo$Type();
