"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayBattleResultNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ScenePlayBattleSettleRewardInfo_1 = require("./ScenePlayBattleSettleRewardInfo");
const ScenePlayBattleSettlePlayerInfo_1 = require("./ScenePlayBattleSettlePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayBattleResultNotify", [
            { no: 14, name: "settle_player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ScenePlayBattleSettlePlayerInfo_1.ScenePlayBattleSettlePlayerInfo },
            { no: 10, name: "settle_reward_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ScenePlayBattleSettleRewardInfo_1.ScenePlayBattleSettleRewardInfo },
            { no: 6, name: "cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_win", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { settlePlayerInfoList: [], settleRewardInfoList: [], costTime: 0, playType: 0, isWin: false, playId: 0 };
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
                case /* repeated ScenePlayBattleSettlePlayerInfo settle_player_info_list */ 14:
                    message.settlePlayerInfoList.push(ScenePlayBattleSettlePlayerInfo_1.ScenePlayBattleSettlePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ScenePlayBattleSettleRewardInfo settle_reward_info_list */ 10:
                    message.settleRewardInfoList.push(ScenePlayBattleSettleRewardInfo_1.ScenePlayBattleSettleRewardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cost_time */ 6:
                    message.costTime = reader.uint32();
                    break;
                case /* uint32 play_type */ 4:
                    message.playType = reader.uint32();
                    break;
                case /* bool is_win */ 15:
                    message.isWin = reader.bool();
                    break;
                case /* uint32 play_id */ 8:
                    message.playId = reader.uint32();
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
        /* repeated ScenePlayBattleSettlePlayerInfo settle_player_info_list = 14; */
        for (let i = 0; i < message.settlePlayerInfoList.length; i++)
            ScenePlayBattleSettlePlayerInfo_1.ScenePlayBattleSettlePlayerInfo.internalBinaryWrite(message.settlePlayerInfoList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ScenePlayBattleSettleRewardInfo settle_reward_info_list = 10; */
        for (let i = 0; i < message.settleRewardInfoList.length; i++)
            ScenePlayBattleSettleRewardInfo_1.ScenePlayBattleSettleRewardInfo.internalBinaryWrite(message.settleRewardInfoList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cost_time = 6; */
        if (message.costTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.costTime);
        /* uint32 play_type = 4; */
        if (message.playType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playType);
        /* bool is_win = 15; */
        if (message.isWin !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isWin);
        /* uint32 play_id = 8; */
        if (message.playId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayBattleResultNotify
 */
exports.ScenePlayBattleResultNotify = new ScenePlayBattleResultNotify$Type();
