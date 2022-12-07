"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultistagePlayInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CoinCollectStageInfo_1 = require("./CoinCollectStageInfo");
const BrickBreakerStageInfo_1 = require("./BrickBreakerStageInfo");
const CharAmusementInfo_1 = require("./CharAmusementInfo");
const InBattleIrodoriChessInfo_1 = require("./InBattleIrodoriChessInfo");
const InBattleChessInfo_1 = require("./InBattleChessInfo");
const HideAndSeekStageInfo_1 = require("./HideAndSeekStageInfo");
const InBattleFleurFairInfo_1 = require("./InBattleFleurFairInfo");
const InBattleMechanicusInfo_1 = require("./InBattleMechanicusInfo");
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MultistagePlayInfo", [
            { no: 13, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "duration", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "stage_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "stage_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1303, name: "mechanicus_info", kind: "message", oneof: "detail", T: () => InBattleMechanicusInfo_1.InBattleMechanicusInfo },
            { no: 1502, name: "fleur_fair_info", kind: "message", oneof: "detail", T: () => InBattleFleurFairInfo_1.InBattleFleurFairInfo },
            { no: 1725, name: "hide_and_seek_info", kind: "message", oneof: "detail", T: () => HideAndSeekStageInfo_1.HideAndSeekStageInfo },
            { no: 1756, name: "chess_info", kind: "message", oneof: "detail", T: () => InBattleChessInfo_1.InBattleChessInfo },
            { no: 1835, name: "irodori_chess_info", kind: "message", oneof: "detail", T: () => InBattleIrodoriChessInfo_1.InBattleIrodoriChessInfo },
            { no: 1015, name: "char_amusement_info", kind: "message", oneof: "detail", T: () => CharAmusementInfo_1.CharAmusementInfo },
            { no: 547, name: "brick_breaker_info", kind: "message", oneof: "detail", T: () => BrickBreakerStageInfo_1.BrickBreakerStageInfo },
            { no: 1263, name: "coin_collect_info", kind: "message", oneof: "detail", T: () => CoinCollectStageInfo_1.CoinCollectStageInfo }
        ]);
    }
    create(value) {
        const message = { playIndex: 0, duration: 0, stageType: 0, groupId: 0, stageIndex: 0, beginTime: 0, playType: 0, detail: { oneofKind: undefined } };
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
                case /* uint32 play_index */ 13:
                    message.playIndex = reader.uint32();
                    break;
                case /* uint32 duration */ 2:
                    message.duration = reader.uint32();
                    break;
                case /* uint32 stage_type */ 5:
                    message.stageType = reader.uint32();
                    break;
                case /* uint32 group_id */ 1:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 stage_index */ 10:
                    message.stageIndex = reader.uint32();
                    break;
                case /* uint32 begin_time */ 9:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 play_type */ 15:
                    message.playType = reader.uint32();
                    break;
                case /* InBattleMechanicusInfo mechanicus_info */ 1303:
                    message.detail = {
                        oneofKind: "mechanicusInfo",
                        mechanicusInfo: InBattleMechanicusInfo_1.InBattleMechanicusInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.mechanicusInfo)
                    };
                    break;
                case /* InBattleFleurFairInfo fleur_fair_info */ 1502:
                    message.detail = {
                        oneofKind: "fleurFairInfo",
                        fleurFairInfo: InBattleFleurFairInfo_1.InBattleFleurFairInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.fleurFairInfo)
                    };
                    break;
                case /* HideAndSeekStageInfo hide_and_seek_info */ 1725:
                    message.detail = {
                        oneofKind: "hideAndSeekInfo",
                        hideAndSeekInfo: HideAndSeekStageInfo_1.HideAndSeekStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.hideAndSeekInfo)
                    };
                    break;
                case /* InBattleChessInfo chess_info */ 1756:
                    message.detail = {
                        oneofKind: "chessInfo",
                        chessInfo: InBattleChessInfo_1.InBattleChessInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.chessInfo)
                    };
                    break;
                case /* InBattleIrodoriChessInfo irodori_chess_info */ 1835:
                    message.detail = {
                        oneofKind: "irodoriChessInfo",
                        irodoriChessInfo: InBattleIrodoriChessInfo_1.InBattleIrodoriChessInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.irodoriChessInfo)
                    };
                    break;
                case /* CharAmusementInfo char_amusement_info */ 1015:
                    message.detail = {
                        oneofKind: "charAmusementInfo",
                        charAmusementInfo: CharAmusementInfo_1.CharAmusementInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.charAmusementInfo)
                    };
                    break;
                case /* BrickBreakerStageInfo brick_breaker_info */ 547:
                    message.detail = {
                        oneofKind: "brickBreakerInfo",
                        brickBreakerInfo: BrickBreakerStageInfo_1.BrickBreakerStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.brickBreakerInfo)
                    };
                    break;
                case /* CoinCollectStageInfo coin_collect_info */ 1263:
                    message.detail = {
                        oneofKind: "coinCollectInfo",
                        coinCollectInfo: CoinCollectStageInfo_1.CoinCollectStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.coinCollectInfo)
                    };
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
        /* uint32 play_index = 13; */
        if (message.playIndex !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* uint32 duration = 2; */
        if (message.duration !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.duration);
        /* uint32 stage_type = 5; */
        if (message.stageType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.stageType);
        /* uint32 group_id = 1; */
        if (message.groupId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 stage_index = 10; */
        if (message.stageIndex !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stageIndex);
        /* uint32 begin_time = 9; */
        if (message.beginTime !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 play_type = 15; */
        if (message.playType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.playType);
        /* InBattleMechanicusInfo mechanicus_info = 1303; */
        if (message.detail.oneofKind === "mechanicusInfo")
            InBattleMechanicusInfo_1.InBattleMechanicusInfo.internalBinaryWrite(message.detail.mechanicusInfo, writer.tag(1303, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* InBattleFleurFairInfo fleur_fair_info = 1502; */
        if (message.detail.oneofKind === "fleurFairInfo")
            InBattleFleurFairInfo_1.InBattleFleurFairInfo.internalBinaryWrite(message.detail.fleurFairInfo, writer.tag(1502, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HideAndSeekStageInfo hide_and_seek_info = 1725; */
        if (message.detail.oneofKind === "hideAndSeekInfo")
            HideAndSeekStageInfo_1.HideAndSeekStageInfo.internalBinaryWrite(message.detail.hideAndSeekInfo, writer.tag(1725, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* InBattleChessInfo chess_info = 1756; */
        if (message.detail.oneofKind === "chessInfo")
            InBattleChessInfo_1.InBattleChessInfo.internalBinaryWrite(message.detail.chessInfo, writer.tag(1756, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* InBattleIrodoriChessInfo irodori_chess_info = 1835; */
        if (message.detail.oneofKind === "irodoriChessInfo")
            InBattleIrodoriChessInfo_1.InBattleIrodoriChessInfo.internalBinaryWrite(message.detail.irodoriChessInfo, writer.tag(1835, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CharAmusementInfo char_amusement_info = 1015; */
        if (message.detail.oneofKind === "charAmusementInfo")
            CharAmusementInfo_1.CharAmusementInfo.internalBinaryWrite(message.detail.charAmusementInfo, writer.tag(1015, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BrickBreakerStageInfo brick_breaker_info = 547; */
        if (message.detail.oneofKind === "brickBreakerInfo")
            BrickBreakerStageInfo_1.BrickBreakerStageInfo.internalBinaryWrite(message.detail.brickBreakerInfo, writer.tag(547, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CoinCollectStageInfo coin_collect_info = 1263; */
        if (message.detail.oneofKind === "coinCollectInfo")
            CoinCollectStageInfo_1.CoinCollectStageInfo.internalBinaryWrite(message.detail.coinCollectInfo, writer.tag(1263, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MultistagePlayInfo
 */
exports.MultistagePlayInfo = new MultistagePlayInfo$Type();
