"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishBattleEndRsp = exports.FishBattleEndRsp_FishNoRewardReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
const FishBattleResult_1 = require("./FishBattleResult");
/**
 * @generated from protobuf enum FishBattleEndRsp.FishNoRewardReason
 */
var FishBattleEndRsp_FishNoRewardReason;
(function (FishBattleEndRsp_FishNoRewardReason) {
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_NONE = 0;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_ACTIVITY_LIMIT = 1;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["ACTIVITY_LIMIT"] = 1] = "ACTIVITY_LIMIT";
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_BAG_LIMIT = 2;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["BAG_LIMIT"] = 2] = "BAG_LIMIT";
    /**
     * @generated from protobuf enum value: FISH_NO_REWARD_REASON_POOL_LIMIT = 3;
     */
    FishBattleEndRsp_FishNoRewardReason[FishBattleEndRsp_FishNoRewardReason["POOL_LIMIT"] = 3] = "POOL_LIMIT";
})(FishBattleEndRsp_FishNoRewardReason = exports.FishBattleEndRsp_FishNoRewardReason || (exports.FishBattleEndRsp_FishNoRewardReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class FishBattleEndRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("FishBattleEndRsp", [
            { no: 6, name: "battle_result", kind: "enum", T: () => ["FishBattleResult", FishBattleResult_1.FishBattleResult, "FISH_BATTLE_RESULT_"] },
            { no: 2, name: "no_reward_reason", kind: "enum", T: () => ["FishBattleEndRsp.FishNoRewardReason", FishBattleEndRsp_FishNoRewardReason, "FISH_NO_REWARD_REASON_"] },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "Unk3300_ABBBGOBDJEC", kind: "message", jsonName: "Unk3300ABBBGOBDJEC", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 8, name: "is_got_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_MDCKKPGNKGL", kind: "message", jsonName: "Unk3300MDCKKPGNKGL", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 15, name: "reward_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { battleResult: 0, noRewardReason: 0, retcode: 0, unk3300ABBBGOBDJEC: [], isGotReward: false, unk3300MDCKKPGNKGL: [], rewardItemList: [] };
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
                case /* FishBattleResult battle_result */ 6:
                    message.battleResult = reader.int32();
                    break;
                case /* FishBattleEndRsp.FishNoRewardReason no_reward_reason */ 2:
                    message.noRewardReason = reader.int32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ItemParam Unk3300_ABBBGOBDJEC = 12 [json_name = "Unk3300ABBBGOBDJEC"];*/ 12:
                    message.unk3300ABBBGOBDJEC.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_got_reward */ 8:
                    message.isGotReward = reader.bool();
                    break;
                case /* repeated ItemParam Unk3300_MDCKKPGNKGL = 1 [json_name = "Unk3300MDCKKPGNKGL"];*/ 1:
                    message.unk3300MDCKKPGNKGL.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam reward_item_list */ 15:
                    message.rewardItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* FishBattleResult battle_result = 6; */
        if (message.battleResult !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.battleResult);
        /* FishBattleEndRsp.FishNoRewardReason no_reward_reason = 2; */
        if (message.noRewardReason !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.noRewardReason);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated ItemParam Unk3300_ABBBGOBDJEC = 12 [json_name = "Unk3300ABBBGOBDJEC"]; */
        for (let i = 0; i < message.unk3300ABBBGOBDJEC.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.unk3300ABBBGOBDJEC[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_got_reward = 8; */
        if (message.isGotReward !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isGotReward);
        /* repeated ItemParam Unk3300_MDCKKPGNKGL = 1 [json_name = "Unk3300MDCKKPGNKGL"]; */
        for (let i = 0; i < message.unk3300MDCKKPGNKGL.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.unk3300MDCKKPGNKGL[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam reward_item_list = 15; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishBattleEndRsp
 */
exports.FishBattleEndRsp = new FishBattleEndRsp$Type();
