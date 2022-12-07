"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HideAndSeekStageType_1 = require("./HideAndSeekStageType");
const HideAndSeekPlayerBattleInfo_1 = require("./HideAndSeekPlayerBattleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HideAndSeekStageInfo", [
            { no: 9, name: "hunter_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "battle_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => HideAndSeekPlayerBattleInfo_1.HideAndSeekPlayerBattleInfo } },
            { no: 5, name: "is_record_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "hider_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "map_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "stage_type", kind: "enum", T: () => ["HideAndSeekStageType", HideAndSeekStageType_1.HideAndSeekStageType, "HIDE_AND_SEEK_STAGE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { hunterUid: 0, battleInfoMap: {}, isRecordScore: false, hiderUidList: [], mapId: 0, stageType: 0 };
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
                case /* uint32 hunter_uid */ 9:
                    message.hunterUid = reader.uint32();
                    break;
                case /* map<uint32, HideAndSeekPlayerBattleInfo> battle_info_map */ 8:
                    this.binaryReadMap8(message.battleInfoMap, reader, options);
                    break;
                case /* bool is_record_score */ 5:
                    message.isRecordScore = reader.bool();
                    break;
                case /* repeated uint32 hider_uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hiderUidList.push(reader.uint32());
                    else
                        message.hiderUidList.push(reader.uint32());
                    break;
                case /* uint32 map_id */ 13:
                    message.mapId = reader.uint32();
                    break;
                case /* HideAndSeekStageType stage_type */ 6:
                    message.stageType = reader.int32();
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
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = HideAndSeekPlayerBattleInfo_1.HideAndSeekPlayerBattleInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field HideAndSeekStageInfo.battle_info_map");
            }
        }
        map[key ?? 0] = val ?? HideAndSeekPlayerBattleInfo_1.HideAndSeekPlayerBattleInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 hunter_uid = 9; */
        if (message.hunterUid !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.hunterUid);
        /* map<uint32, HideAndSeekPlayerBattleInfo> battle_info_map = 8; */
        for (let k of Object.keys(message.battleInfoMap)) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            HideAndSeekPlayerBattleInfo_1.HideAndSeekPlayerBattleInfo.internalBinaryWrite(message.battleInfoMap[k], writer, options);
            writer.join().join();
        }
        /* bool is_record_score = 5; */
        if (message.isRecordScore !== false)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isRecordScore);
        /* repeated uint32 hider_uid_list = 2; */
        if (message.hiderUidList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hiderUidList.length; i++)
                writer.uint32(message.hiderUidList[i]);
            writer.join();
        }
        /* uint32 map_id = 13; */
        if (message.mapId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.mapId);
        /* HideAndSeekStageType stage_type = 6; */
        if (message.stageType !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.stageType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekStageInfo
 */
exports.HideAndSeekStageInfo = new HideAndSeekStageInfo$Type();
