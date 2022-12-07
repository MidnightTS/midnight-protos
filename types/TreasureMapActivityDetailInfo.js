"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMapActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TreasureMapRegionInfo_1 = require("./TreasureMapRegionInfo");
const TreasureMapBonusChallengeInfo_1 = require("./TreasureMapBonusChallengeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TreasureMapActivityDetailInfo", [
            { no: 15, name: "is_mp_challenge_touched", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "total_mp_spot_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "active_region_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "bonus_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TreasureMapBonusChallengeInfo_1.TreasureMapBonusChallengeInfo },
            { no: 8, name: "min_open_player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "preview_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "treasure_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "currency_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "region_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TreasureMapRegionInfo_1.TreasureMapRegionInfo }
        ]);
    }
    create(value) {
        const message = { isMpChallengeTouched: false, totalMpSpotNum: 0, activeRegionIndex: 0, bonusChallengeList: [], minOpenPlayerLevel: 0, previewRewardId: 0, treasureCloseTime: 0, currencyNum: 0, regionInfoList: [] };
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
                case /* bool is_mp_challenge_touched */ 15:
                    message.isMpChallengeTouched = reader.bool();
                    break;
                case /* uint32 total_mp_spot_num */ 12:
                    message.totalMpSpotNum = reader.uint32();
                    break;
                case /* uint32 active_region_index */ 3:
                    message.activeRegionIndex = reader.uint32();
                    break;
                case /* repeated TreasureMapBonusChallengeInfo bonus_challenge_list */ 13:
                    message.bonusChallengeList.push(TreasureMapBonusChallengeInfo_1.TreasureMapBonusChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 min_open_player_level */ 8:
                    message.minOpenPlayerLevel = reader.uint32();
                    break;
                case /* uint32 preview_reward_id */ 2:
                    message.previewRewardId = reader.uint32();
                    break;
                case /* uint32 treasure_close_time */ 1:
                    message.treasureCloseTime = reader.uint32();
                    break;
                case /* uint32 currency_num */ 4:
                    message.currencyNum = reader.uint32();
                    break;
                case /* repeated TreasureMapRegionInfo region_info_list */ 11:
                    message.regionInfoList.push(TreasureMapRegionInfo_1.TreasureMapRegionInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_mp_challenge_touched = 15; */
        if (message.isMpChallengeTouched !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isMpChallengeTouched);
        /* uint32 total_mp_spot_num = 12; */
        if (message.totalMpSpotNum !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.totalMpSpotNum);
        /* uint32 active_region_index = 3; */
        if (message.activeRegionIndex !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.activeRegionIndex);
        /* repeated TreasureMapBonusChallengeInfo bonus_challenge_list = 13; */
        for (let i = 0; i < message.bonusChallengeList.length; i++)
            TreasureMapBonusChallengeInfo_1.TreasureMapBonusChallengeInfo.internalBinaryWrite(message.bonusChallengeList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 min_open_player_level = 8; */
        if (message.minOpenPlayerLevel !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.minOpenPlayerLevel);
        /* uint32 preview_reward_id = 2; */
        if (message.previewRewardId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.previewRewardId);
        /* uint32 treasure_close_time = 1; */
        if (message.treasureCloseTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.treasureCloseTime);
        /* uint32 currency_num = 4; */
        if (message.currencyNum !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.currencyNum);
        /* repeated TreasureMapRegionInfo region_info_list = 11; */
        for (let i = 0; i < message.regionInfoList.length; i++)
            TreasureMapRegionInfo_1.TreasureMapRegionInfo.internalBinaryWrite(message.regionInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapActivityDetailInfo
 */
exports.TreasureMapActivityDetailInfo = new TreasureMapActivityDetailInfo$Type();
