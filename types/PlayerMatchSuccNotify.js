"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMatchSuccNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGMatchInfo_1 = require("./GCGMatchInfo");
const MatchType_1 = require("./MatchType");
const GeneralMatchInfo_1 = require("./GeneralMatchInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerMatchSuccNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerMatchSuccNotify", [
            { no: 7, name: "general_match_info", kind: "message", T: () => GeneralMatchInfo_1.GeneralMatchInfo },
            { no: 3, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] },
            { no: 5, name: "mechanicus_difficult_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "confirm_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gcg_match_info", kind: "message", T: () => GCGMatchInfo_1.GCGMatchInfo },
            { no: 11, name: "mp_play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "host_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, matchType: 0, mechanicusDifficultLevel: 0, confirmEndTime: 0, mpPlayId: 0, hostUid: 0 };
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
                case /* GeneralMatchInfo general_match_info */ 7:
                    message.generalMatchInfo = GeneralMatchInfo_1.GeneralMatchInfo.internalBinaryRead(reader, reader.uint32(), options, message.generalMatchInfo);
                    break;
                case /* uint32 dungeon_id */ 3:
                    message.dungeonId = reader.uint32();
                    break;
                case /* MatchType match_type */ 15:
                    message.matchType = reader.int32();
                    break;
                case /* uint32 mechanicus_difficult_level */ 5:
                    message.mechanicusDifficultLevel = reader.uint32();
                    break;
                case /* uint32 confirm_end_time */ 13:
                    message.confirmEndTime = reader.uint32();
                    break;
                case /* GCGMatchInfo gcg_match_info */ 9:
                    message.gcgMatchInfo = GCGMatchInfo_1.GCGMatchInfo.internalBinaryRead(reader, reader.uint32(), options, message.gcgMatchInfo);
                    break;
                case /* uint32 mp_play_id */ 11:
                    message.mpPlayId = reader.uint32();
                    break;
                case /* uint32 host_uid */ 10:
                    message.hostUid = reader.uint32();
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
        /* GeneralMatchInfo general_match_info = 7; */
        if (message.generalMatchInfo)
            GeneralMatchInfo_1.GeneralMatchInfo.internalBinaryWrite(message.generalMatchInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_id = 3; */
        if (message.dungeonId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* MatchType match_type = 15; */
        if (message.matchType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.matchType);
        /* uint32 mechanicus_difficult_level = 5; */
        if (message.mechanicusDifficultLevel !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.mechanicusDifficultLevel);
        /* uint32 confirm_end_time = 13; */
        if (message.confirmEndTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.confirmEndTime);
        /* GCGMatchInfo gcg_match_info = 9; */
        if (message.gcgMatchInfo)
            GCGMatchInfo_1.GCGMatchInfo.internalBinaryWrite(message.gcgMatchInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 mp_play_id = 11; */
        if (message.mpPlayId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.mpPlayId);
        /* uint32 host_uid = 10; */
        if (message.hostUid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.hostUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerMatchSuccNotify
 */
exports.PlayerMatchSuccNotify = new PlayerMatchSuccNotify$Type();
