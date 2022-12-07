"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EffigyChallengeV2SettleInfo_1 = require("./EffigyChallengeV2SettleInfo");
const WindFieldDungeonSettleInfo_1 = require("./WindFieldDungeonSettleInfo");
const InstableSprayDungeonSettleInfo_1 = require("./InstableSprayDungeonSettleInfo");
const SummerTimeV2DungeonSettleInfo_1 = require("./SummerTimeV2DungeonSettleInfo");
const CrystalLinkDungeonSettleInfo_1 = require("./CrystalLinkDungeonSettleInfo");
const RoguelikeDungeonSettleInfo_1 = require("./RoguelikeDungeonSettleInfo");
const EffigyChallengeDungeonResultInfo_1 = require("./EffigyChallengeDungeonResultInfo");
const ChannelerSlabLoopDungeonResultInfo_1 = require("./ChannelerSlabLoopDungeonResultInfo");
const TrialAvatarFirstPassDungeonNotify_1 = require("./TrialAvatarFirstPassDungeonNotify");
const TowerLevelEndNotify_1 = require("./TowerLevelEndNotify");
const DungeonSettleExhibitionInfo_1 = require("./DungeonSettleExhibitionInfo");
const StrengthenPointData_1 = require("./StrengthenPointData");
const ParamList_1 = require("./ParamList");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonSettleNotify", [
            { no: 6, name: "settle_show", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ParamList_1.ParamList } },
            { no: 7, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => StrengthenPointData_1.StrengthenPointData } },
            { no: 12, name: "exhibition_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DungeonSettleExhibitionInfo_1.DungeonSettleExhibitionInfo },
            { no: 14, name: "use_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "result", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "fail_cond_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "create_player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1089, name: "tower_level_end_notify", kind: "message", oneof: "detail", T: () => TowerLevelEndNotify_1.TowerLevelEndNotify },
            { no: 1117, name: "trial_avatar_first_pass_dungeon_notify", kind: "message", oneof: "detail", T: () => TrialAvatarFirstPassDungeonNotify_1.TrialAvatarFirstPassDungeonNotify },
            { no: 1394, name: "channeller_slab_loop_dungeon_result_info", kind: "message", oneof: "detail", T: () => ChannelerSlabLoopDungeonResultInfo_1.ChannelerSlabLoopDungeonResultInfo },
            { no: 254, name: "effigy_challenge_dungeon_result_info", kind: "message", oneof: "detail", T: () => EffigyChallengeDungeonResultInfo_1.EffigyChallengeDungeonResultInfo },
            { no: 1888, name: "roguelike_dungeon_settle_info", kind: "message", oneof: "detail", T: () => RoguelikeDungeonSettleInfo_1.RoguelikeDungeonSettleInfo },
            { no: 1840, name: "crystal_link_settle_info", kind: "message", oneof: "detail", T: () => CrystalLinkDungeonSettleInfo_1.CrystalLinkDungeonSettleInfo },
            { no: 285, name: "summer_time_v2_dungeon_settle_info", kind: "message", oneof: "detail", T: () => SummerTimeV2DungeonSettleInfo_1.SummerTimeV2DungeonSettleInfo },
            { no: 1794, name: "instable_spray_settle_info", kind: "message", oneof: "detail", T: () => InstableSprayDungeonSettleInfo_1.InstableSprayDungeonSettleInfo },
            { no: 1522, name: "wind_field_dungeon_settle_info", kind: "message", oneof: "detail", T: () => WindFieldDungeonSettleInfo_1.WindFieldDungeonSettleInfo },
            { no: 1913, name: "effigy_challenge_v2_settle_info", kind: "message", oneof: "detail", T: () => EffigyChallengeV2SettleInfo_1.EffigyChallengeV2SettleInfo }
        ]);
    }
    create(value) {
        const message = { settleShow: {}, strengthenPointDataMap: {}, exhibitionInfoList: [], useTime: 0, isSuccess: false, closeTime: 0, dungeonId: 0, result: 0, failCondList: [], createPlayerUid: 0, detail: { oneofKind: undefined } };
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
                case /* map<uint32, ParamList> settle_show */ 6:
                    this.binaryReadMap6(message.settleShow, reader, options);
                    break;
                case /* map<uint32, StrengthenPointData> strengthen_point_data_map */ 7:
                    this.binaryReadMap7(message.strengthenPointDataMap, reader, options);
                    break;
                case /* repeated DungeonSettleExhibitionInfo exhibition_info_list */ 12:
                    message.exhibitionInfoList.push(DungeonSettleExhibitionInfo_1.DungeonSettleExhibitionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 use_time */ 14:
                    message.useTime = reader.uint32();
                    break;
                case /* bool is_success */ 10:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 close_time */ 15:
                    message.closeTime = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 9:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 result */ 5:
                    message.result = reader.uint32();
                    break;
                case /* repeated uint32 fail_cond_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.failCondList.push(reader.uint32());
                    else
                        message.failCondList.push(reader.uint32());
                    break;
                case /* uint32 create_player_uid */ 2:
                    message.createPlayerUid = reader.uint32();
                    break;
                case /* TowerLevelEndNotify tower_level_end_notify */ 1089:
                    message.detail = {
                        oneofKind: "towerLevelEndNotify",
                        towerLevelEndNotify: TowerLevelEndNotify_1.TowerLevelEndNotify.internalBinaryRead(reader, reader.uint32(), options, message.detail.towerLevelEndNotify)
                    };
                    break;
                case /* TrialAvatarFirstPassDungeonNotify trial_avatar_first_pass_dungeon_notify */ 1117:
                    message.detail = {
                        oneofKind: "trialAvatarFirstPassDungeonNotify",
                        trialAvatarFirstPassDungeonNotify: TrialAvatarFirstPassDungeonNotify_1.TrialAvatarFirstPassDungeonNotify.internalBinaryRead(reader, reader.uint32(), options, message.detail.trialAvatarFirstPassDungeonNotify)
                    };
                    break;
                case /* ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info */ 1394:
                    message.detail = {
                        oneofKind: "channellerSlabLoopDungeonResultInfo",
                        channellerSlabLoopDungeonResultInfo: ChannelerSlabLoopDungeonResultInfo_1.ChannelerSlabLoopDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.channellerSlabLoopDungeonResultInfo)
                    };
                    break;
                case /* EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info */ 254:
                    message.detail = {
                        oneofKind: "effigyChallengeDungeonResultInfo",
                        effigyChallengeDungeonResultInfo: EffigyChallengeDungeonResultInfo_1.EffigyChallengeDungeonResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeDungeonResultInfo)
                    };
                    break;
                case /* RoguelikeDungeonSettleInfo roguelike_dungeon_settle_info */ 1888:
                    message.detail = {
                        oneofKind: "roguelikeDungeonSettleInfo",
                        roguelikeDungeonSettleInfo: RoguelikeDungeonSettleInfo_1.RoguelikeDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.roguelikeDungeonSettleInfo)
                    };
                    break;
                case /* CrystalLinkDungeonSettleInfo crystal_link_settle_info */ 1840:
                    message.detail = {
                        oneofKind: "crystalLinkSettleInfo",
                        crystalLinkSettleInfo: CrystalLinkDungeonSettleInfo_1.CrystalLinkDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.crystalLinkSettleInfo)
                    };
                    break;
                case /* SummerTimeV2DungeonSettleInfo summer_time_v2_dungeon_settle_info */ 285:
                    message.detail = {
                        oneofKind: "summerTimeV2DungeonSettleInfo",
                        summerTimeV2DungeonSettleInfo: SummerTimeV2DungeonSettleInfo_1.SummerTimeV2DungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.summerTimeV2DungeonSettleInfo)
                    };
                    break;
                case /* InstableSprayDungeonSettleInfo instable_spray_settle_info */ 1794:
                    message.detail = {
                        oneofKind: "instableSpraySettleInfo",
                        instableSpraySettleInfo: InstableSprayDungeonSettleInfo_1.InstableSprayDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.instableSpraySettleInfo)
                    };
                    break;
                case /* WindFieldDungeonSettleInfo wind_field_dungeon_settle_info */ 1522:
                    message.detail = {
                        oneofKind: "windFieldDungeonSettleInfo",
                        windFieldDungeonSettleInfo: WindFieldDungeonSettleInfo_1.WindFieldDungeonSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.windFieldDungeonSettleInfo)
                    };
                    break;
                case /* EffigyChallengeV2SettleInfo effigy_challenge_v2_settle_info */ 1913:
                    message.detail = {
                        oneofKind: "effigyChallengeV2SettleInfo",
                        effigyChallengeV2SettleInfo: EffigyChallengeV2SettleInfo_1.EffigyChallengeV2SettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeV2SettleInfo)
                    };
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = ParamList_1.ParamList.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field DungeonSettleNotify.settle_show");
            }
        }
        map[key ?? 0] = val ?? ParamList_1.ParamList.create();
    }
    binaryReadMap7(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field DungeonSettleNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? StrengthenPointData_1.StrengthenPointData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, ParamList> settle_show = 6; */
        for (let k of Object.keys(message.settleShow)) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            ParamList_1.ParamList.internalBinaryWrite(message.settleShow[k], writer, options);
            writer.join().join();
        }
        /* map<uint32, StrengthenPointData> strengthen_point_data_map = 7; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            StrengthenPointData_1.StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k], writer, options);
            writer.join().join();
        }
        /* repeated DungeonSettleExhibitionInfo exhibition_info_list = 12; */
        for (let i = 0; i < message.exhibitionInfoList.length; i++)
            DungeonSettleExhibitionInfo_1.DungeonSettleExhibitionInfo.internalBinaryWrite(message.exhibitionInfoList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 use_time = 14; */
        if (message.useTime !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.useTime);
        /* bool is_success = 10; */
        if (message.isSuccess !== false)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isSuccess);
        /* uint32 close_time = 15; */
        if (message.closeTime !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.closeTime);
        /* uint32 dungeon_id = 9; */
        if (message.dungeonId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* uint32 result = 5; */
        if (message.result !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.result);
        /* repeated uint32 fail_cond_list = 11; */
        if (message.failCondList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.failCondList.length; i++)
                writer.uint32(message.failCondList[i]);
            writer.join();
        }
        /* uint32 create_player_uid = 2; */
        if (message.createPlayerUid !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.createPlayerUid);
        /* TowerLevelEndNotify tower_level_end_notify = 1089; */
        if (message.detail.oneofKind === "towerLevelEndNotify")
            TowerLevelEndNotify_1.TowerLevelEndNotify.internalBinaryWrite(message.detail.towerLevelEndNotify, writer.tag(1089, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* TrialAvatarFirstPassDungeonNotify trial_avatar_first_pass_dungeon_notify = 1117; */
        if (message.detail.oneofKind === "trialAvatarFirstPassDungeonNotify")
            TrialAvatarFirstPassDungeonNotify_1.TrialAvatarFirstPassDungeonNotify.internalBinaryWrite(message.detail.trialAvatarFirstPassDungeonNotify, writer.tag(1117, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabLoopDungeonResultInfo channeller_slab_loop_dungeon_result_info = 1394; */
        if (message.detail.oneofKind === "channellerSlabLoopDungeonResultInfo")
            ChannelerSlabLoopDungeonResultInfo_1.ChannelerSlabLoopDungeonResultInfo.internalBinaryWrite(message.detail.channellerSlabLoopDungeonResultInfo, writer.tag(1394, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* EffigyChallengeDungeonResultInfo effigy_challenge_dungeon_result_info = 254; */
        if (message.detail.oneofKind === "effigyChallengeDungeonResultInfo")
            EffigyChallengeDungeonResultInfo_1.EffigyChallengeDungeonResultInfo.internalBinaryWrite(message.detail.effigyChallengeDungeonResultInfo, writer.tag(254, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* RoguelikeDungeonSettleInfo roguelike_dungeon_settle_info = 1888; */
        if (message.detail.oneofKind === "roguelikeDungeonSettleInfo")
            RoguelikeDungeonSettleInfo_1.RoguelikeDungeonSettleInfo.internalBinaryWrite(message.detail.roguelikeDungeonSettleInfo, writer.tag(1888, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CrystalLinkDungeonSettleInfo crystal_link_settle_info = 1840; */
        if (message.detail.oneofKind === "crystalLinkSettleInfo")
            CrystalLinkDungeonSettleInfo_1.CrystalLinkDungeonSettleInfo.internalBinaryWrite(message.detail.crystalLinkSettleInfo, writer.tag(1840, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SummerTimeV2DungeonSettleInfo summer_time_v2_dungeon_settle_info = 285; */
        if (message.detail.oneofKind === "summerTimeV2DungeonSettleInfo")
            SummerTimeV2DungeonSettleInfo_1.SummerTimeV2DungeonSettleInfo.internalBinaryWrite(message.detail.summerTimeV2DungeonSettleInfo, writer.tag(285, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* InstableSprayDungeonSettleInfo instable_spray_settle_info = 1794; */
        if (message.detail.oneofKind === "instableSpraySettleInfo")
            InstableSprayDungeonSettleInfo_1.InstableSprayDungeonSettleInfo.internalBinaryWrite(message.detail.instableSpraySettleInfo, writer.tag(1794, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* WindFieldDungeonSettleInfo wind_field_dungeon_settle_info = 1522; */
        if (message.detail.oneofKind === "windFieldDungeonSettleInfo")
            WindFieldDungeonSettleInfo_1.WindFieldDungeonSettleInfo.internalBinaryWrite(message.detail.windFieldDungeonSettleInfo, writer.tag(1522, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* EffigyChallengeV2SettleInfo effigy_challenge_v2_settle_info = 1913; */
        if (message.detail.oneofKind === "effigyChallengeV2SettleInfo")
            EffigyChallengeV2SettleInfo_1.EffigyChallengeV2SettleInfo.internalBinaryWrite(message.detail.effigyChallengeV2SettleInfo, writer.tag(1913, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonSettleNotify
 */
exports.DungeonSettleNotify = new DungeonSettleNotify$Type();
