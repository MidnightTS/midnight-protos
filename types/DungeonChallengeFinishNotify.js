"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonChallengeFinishNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonResultInfo_1 = require("./CustomDungeonResultInfo");
const PotionDungeonResultInfo_1 = require("./PotionDungeonResultInfo");
const EffigyChallengeDungeonResultInfo_1 = require("./EffigyChallengeDungeonResultInfo");
const ChannelerSlabLoopDungeonResultInfo_1 = require("./ChannelerSlabLoopDungeonResultInfo");
const StrengthenPointData_1 = require("./StrengthenPointData");
const ChallengeFinishType_1 = require("./ChallengeFinishType");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonChallengeFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonChallengeFinishNotify", [
            { no: 9, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "current_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "finish_type", kind: "enum", T: () => ["ChallengeFinishType", ChallengeFinishType_1.ChallengeFinishType, "CHALLENGE_FINISH_TYPE_"] },
            { no: 11, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => StrengthenPointData_1.StrengthenPointData } },
            { no: 2, name: "challenge_record_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "time_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1545, name: "channeller_slab_loop_dungeon_result_info", kind: "message", oneof: "detail", T: () => ChannelerSlabLoopDungeonResultInfo_1.ChannelerSlabLoopDungeonResultInfo },
            { no: 76, name: "effigy_challenge_dungeon_result_info", kind: "message", oneof: "detail", T: () => EffigyChallengeDungeonResultInfo_1.EffigyChallengeDungeonResultInfo },
            { no: 216, name: "potion_dungeon_result_info", kind: "message", oneof: "detail", T: () => PotionDungeonResultInfo_1.PotionDungeonResultInfo },
            { no: 1678, name: "custom_dungeon_result_info", kind: "message", oneof: "detail", T: () => CustomDungeonResultInfo_1.CustomDungeonResultInfo }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false, currentValue: 0, finishType: 0, strengthenPointDataMap: {}, challengeRecordType: 0, isSuccess: false, challengeIndex: 0, timeCost: 0, detail: { oneofKind: undefined } };
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
                case /* bool is_new_record */ 9:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 current_value */ 5:
                    message.currentValue = reader.uint32();
                    break;
                case /* ChallengeFinishType finish_type */ 3:
                    message.finishType = reader.int32();
                    break;
                case /* map<uint32, StrengthenPointData> strengthen_point_data_map */ 11:
                    this.binaryReadMap11(message.strengthenPointDataMap, reader, options);
                    break;
                case /* uint32 challenge_record_type */ 2:
                    message.challengeRecordType = reader.uint32();
                    break;
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 challenge_index */ 12:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 time_cost */ 7:
                    message.timeCost = reader.uint32();
                    break;
                case /* ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info */ 1545:
                    message.detail = {
                        oneofKind: "channellerSlabLoopDungeonResultInfo",
                        channellerSlabLoopDungeonResultInfo: ChannelerSlabLoopDungeonResultInfo_1.ChannelerSlabLoopDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.channellerSlabLoopDungeonResultInfo)
                    };
                    break;
                case /* EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info */ 76:
                    message.detail = {
                        oneofKind: "effigyChallengeDungeonResultInfo",
                        effigyChallengeDungeonResultInfo: EffigyChallengeDungeonResultInfo_1.EffigyChallengeDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeDungeonResultInfo)
                    };
                    break;
                case /* PotionDungeonResultInfo potion_dungeon_result_info */ 216:
                    message.detail = {
                        oneofKind: "potionDungeonResultInfo",
                        potionDungeonResultInfo: PotionDungeonResultInfo_1.PotionDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.potionDungeonResultInfo)
                    };
                    break;
                case /* CustomDungeonResultInfo custom_dungeon_result_info */ 1678:
                    message.detail = {
                        oneofKind: "customDungeonResultInfo",
                        customDungeonResultInfo: CustomDungeonResultInfo_1.CustomDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.customDungeonResultInfo)
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = StrengthenPointData_1.StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field DungeonChallengeFinishNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? StrengthenPointData_1.StrengthenPointData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_new_record = 9; */
        if (message.isNewRecord !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 current_value = 5; */
        if (message.currentValue !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.currentValue);
        /* ChallengeFinishType finish_type = 3; */
        if (message.finishType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.finishType);
        /* map<uint32, StrengthenPointData> strengthen_point_data_map = 11; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            StrengthenPointData_1.StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 challenge_record_type = 2; */
        if (message.challengeRecordType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.challengeRecordType);
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 challenge_index = 12; */
        if (message.challengeIndex !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* uint32 time_cost = 7; */
        if (message.timeCost !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info = 1545; */
        if (message.detail.oneofKind === "channellerSlabLoopDungeonResultInfo")
            ChannelerSlabLoopDungeonResultInfo_1.ChannelerSlabLoopDungeonResultInfo.internalBinaryWrite(message.detail.channellerSlabLoopDungeonResultInfo, writer.tag(1545, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info = 76; */
        if (message.detail.oneofKind === "effigyChallengeDungeonResultInfo")
            EffigyChallengeDungeonResultInfo_1.EffigyChallengeDungeonResultInfo.internalBinaryWrite(message.detail.effigyChallengeDungeonResultInfo, writer.tag(76, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* PotionDungeonResultInfo potion_dungeon_result_info = 216; */
        if (message.detail.oneofKind === "potionDungeonResultInfo")
            PotionDungeonResultInfo_1.PotionDungeonResultInfo.internalBinaryWrite(message.detail.potionDungeonResultInfo, writer.tag(216, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonResultInfo custom_dungeon_result_info = 1678; */
        if (message.detail.oneofKind === "customDungeonResultInfo")
            CustomDungeonResultInfo_1.CustomDungeonResultInfo.internalBinaryWrite(message.detail.customDungeonResultInfo, writer.tag(1678, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonChallengeFinishNotify
 */
exports.DungeonChallengeFinishNotify = new DungeonChallengeFinishNotify$Type();
