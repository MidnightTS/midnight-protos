"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGadgetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DeshretObeliskGadgetInfo_1 = require("./DeshretObeliskGadgetInfo");
const NightCrowGadgetInfo_1 = require("./NightCrowGadgetInfo");
const RoguelikeGadgetInfo_1 = require("./RoguelikeGadgetInfo");
const CustomGadgetTreeInfo_1 = require("./CustomGadgetTreeInfo");
const FishPoolInfo_1 = require("./FishPoolInfo");
const ScreenInfo_1 = require("./ScreenInfo");
const EchoShellInfo_1 = require("./EchoShellInfo");
const VehicleInfo_1 = require("./VehicleInfo");
const FoundationInfo_1 = require("./FoundationInfo");
const OfferingInfo_1 = require("./OfferingInfo");
const GadgetGeneralRewardInfo_1 = require("./GadgetGeneralRewardInfo");
const MpPlayRewardInfo_1 = require("./MpPlayRewardInfo");
const BlossomChestInfo_1 = require("./BlossomChestInfo");
const BossChestInfo_1 = require("./BossChestInfo");
const StatueGadgetInfo_1 = require("./StatueGadgetInfo");
const AbilityGadgetInfo_1 = require("./AbilityGadgetInfo");
const WeatherInfo_1 = require("./WeatherInfo");
const ClientGadgetInfo_1 = require("./ClientGadgetInfo");
const WorktopInfo_1 = require("./WorktopInfo");
const GatherGadgetInfo_1 = require("./GatherGadgetInfo");
const Item_1 = require("./Item");
const GadgetPlayInfo_1 = require("./GadgetPlayInfo");
const PlatformInfo_1 = require("./PlatformInfo");
const GadgetBornType_1 = require("./GadgetBornType");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneGadgetInfo", [
            { no: 1, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "born_type", kind: "enum", opt: true, T: () => ["com.midnights.game.GadgetBornType", GadgetBornType_1.GadgetBornType] },
            { no: 6, name: "gadget_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gadget_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_show_cutscene", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_enable_interact", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "interact_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "mark_flag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "prop_owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 23, name: "platform", kind: "message", T: () => PlatformInfo_1.PlatformInfo },
            { no: 24, name: "interact_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 26, name: "gadget_talk_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 100, name: "play_info", kind: "message", T: () => GadgetPlayInfo_1.GadgetPlayInfo },
            { no: 12, name: "trifle_item", kind: "message", oneof: "content", T: () => Item_1.Item },
            { no: 13, name: "gather_gadget", kind: "message", oneof: "content", T: () => GatherGadgetInfo_1.GatherGadgetInfo },
            { no: 14, name: "worktop", kind: "message", oneof: "content", T: () => WorktopInfo_1.WorktopInfo },
            { no: 15, name: "client_gadget", kind: "message", oneof: "content", T: () => ClientGadgetInfo_1.ClientGadgetInfo },
            { no: 17, name: "weather", kind: "message", oneof: "content", T: () => WeatherInfo_1.WeatherInfo },
            { no: 18, name: "ability_gadget", kind: "message", oneof: "content", T: () => AbilityGadgetInfo_1.AbilityGadgetInfo },
            { no: 19, name: "statue_gadget", kind: "message", oneof: "content", T: () => StatueGadgetInfo_1.StatueGadgetInfo },
            { no: 20, name: "boss_chest", kind: "message", oneof: "content", T: () => BossChestInfo_1.BossChestInfo },
            { no: 41, name: "blossom_chest", kind: "message", oneof: "content", T: () => BlossomChestInfo_1.BlossomChestInfo },
            { no: 42, name: "mp_play_reward", kind: "message", oneof: "content", T: () => MpPlayRewardInfo_1.MpPlayRewardInfo },
            { no: 43, name: "general_reward", kind: "message", oneof: "content", T: () => GadgetGeneralRewardInfo_1.GadgetGeneralRewardInfo },
            { no: 44, name: "offering_info", kind: "message", oneof: "content", T: () => OfferingInfo_1.OfferingInfo },
            { no: 45, name: "foundation_info", kind: "message", oneof: "content", T: () => FoundationInfo_1.FoundationInfo },
            { no: 46, name: "vehicle_info", kind: "message", oneof: "content", T: () => VehicleInfo_1.VehicleInfo },
            { no: 47, name: "shell_info", kind: "message", oneof: "content", T: () => EchoShellInfo_1.EchoShellInfo },
            { no: 48, name: "screen_info", kind: "message", oneof: "content", T: () => ScreenInfo_1.ScreenInfo },
            { no: 59, name: "fish_pool_info", kind: "message", oneof: "content", T: () => FishPoolInfo_1.FishPoolInfo },
            { no: 60, name: "custom_gadget_tree_info", kind: "message", oneof: "content", T: () => CustomGadgetTreeInfo_1.CustomGadgetTreeInfo },
            { no: 61, name: "roguelike_gadget_info", kind: "message", oneof: "content", T: () => RoguelikeGadgetInfo_1.RoguelikeGadgetInfo },
            { no: 62, name: "night_crow_gadget_info", kind: "message", oneof: "content", T: () => NightCrowGadgetInfo_1.NightCrowGadgetInfo },
            { no: 63, name: "deshret_obelisk_gadget_info", kind: "message", oneof: "content", T: () => DeshretObeliskGadgetInfo_1.DeshretObeliskGadgetInfo }
        ]);
    }
    create(value) {
        const message = { interactUidList: [], content: { oneofKind: undefined } };
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
                case /* optional uint32 gadget_id */ 1:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 owner_entity_id */ 4:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.GadgetBornType born_type */ 5:
                    message.bornType = reader.int32();
                    break;
                case /* optional uint32 gadget_state */ 6:
                    message.gadgetState = reader.uint32();
                    break;
                case /* optional uint32 gadget_type */ 7:
                    message.gadgetType = reader.uint32();
                    break;
                case /* optional bool is_show_cutscene */ 8:
                    message.isShowCutscene = reader.bool();
                    break;
                case /* optional uint32 authority_peer_id */ 9:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional bool is_enable_interact */ 10:
                    message.isEnableInteract = reader.bool();
                    break;
                case /* optional uint32 interact_id */ 11:
                    message.interactId = reader.uint32();
                    break;
                case /* optional uint32 mark_flag */ 21:
                    message.markFlag = reader.uint32();
                    break;
                case /* optional uint32 prop_owner_entity_id */ 22:
                    message.propOwnerEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlatformInfo platform */ 23:
                    message.platform = PlatformInfo_1.PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
                    break;
                case /* repeated uint32 interact_uid_list */ 24:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.interactUidList.push(reader.uint32());
                    else
                        message.interactUidList.push(reader.uint32());
                    break;
                case /* optional uint32 draft_id */ 25:
                    message.draftId = reader.uint32();
                    break;
                case /* optional uint32 gadget_talk_state */ 26:
                    message.gadgetTalkState = reader.uint32();
                    break;
                case /* optional com.midnights.game.GadgetPlayInfo play_info */ 100:
                    message.playInfo = GadgetPlayInfo_1.GadgetPlayInfo.internalBinaryRead(reader, reader.uint32(), options, message.playInfo);
                    break;
                case /* com.midnights.game.Item trifle_item */ 12:
                    message.content = {
                        oneofKind: "trifleItem",
                        trifleItem: Item_1.Item.internalBinaryRead(reader, reader.uint32(), options, message.content.trifleItem)
                    };
                    break;
                case /* com.midnights.game.GatherGadgetInfo gather_gadget */ 13:
                    message.content = {
                        oneofKind: "gatherGadget",
                        gatherGadget: GatherGadgetInfo_1.GatherGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.gatherGadget)
                    };
                    break;
                case /* com.midnights.game.WorktopInfo worktop */ 14:
                    message.content = {
                        oneofKind: "worktop",
                        worktop: WorktopInfo_1.WorktopInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.worktop)
                    };
                    break;
                case /* com.midnights.game.ClientGadgetInfo client_gadget */ 15:
                    message.content = {
                        oneofKind: "clientGadget",
                        clientGadget: ClientGadgetInfo_1.ClientGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.clientGadget)
                    };
                    break;
                case /* com.midnights.game.WeatherInfo weather */ 17:
                    message.content = {
                        oneofKind: "weather",
                        weather: WeatherInfo_1.WeatherInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.weather)
                    };
                    break;
                case /* com.midnights.game.AbilityGadgetInfo ability_gadget */ 18:
                    message.content = {
                        oneofKind: "abilityGadget",
                        abilityGadget: AbilityGadgetInfo_1.AbilityGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.abilityGadget)
                    };
                    break;
                case /* com.midnights.game.StatueGadgetInfo statue_gadget */ 19:
                    message.content = {
                        oneofKind: "statueGadget",
                        statueGadget: StatueGadgetInfo_1.StatueGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.statueGadget)
                    };
                    break;
                case /* com.midnights.game.BossChestInfo boss_chest */ 20:
                    message.content = {
                        oneofKind: "bossChest",
                        bossChest: BossChestInfo_1.BossChestInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.bossChest)
                    };
                    break;
                case /* com.midnights.game.BlossomChestInfo blossom_chest */ 41:
                    message.content = {
                        oneofKind: "blossomChest",
                        blossomChest: BlossomChestInfo_1.BlossomChestInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.blossomChest)
                    };
                    break;
                case /* com.midnights.game.MpPlayRewardInfo mp_play_reward */ 42:
                    message.content = {
                        oneofKind: "mpPlayReward",
                        mpPlayReward: MpPlayRewardInfo_1.MpPlayRewardInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.mpPlayReward)
                    };
                    break;
                case /* com.midnights.game.GadgetGeneralRewardInfo general_reward */ 43:
                    message.content = {
                        oneofKind: "generalReward",
                        generalReward: GadgetGeneralRewardInfo_1.GadgetGeneralRewardInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.generalReward)
                    };
                    break;
                case /* com.midnights.game.OfferingInfo offering_info */ 44:
                    message.content = {
                        oneofKind: "offeringInfo",
                        offeringInfo: OfferingInfo_1.OfferingInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.offeringInfo)
                    };
                    break;
                case /* com.midnights.game.FoundationInfo foundation_info */ 45:
                    message.content = {
                        oneofKind: "foundationInfo",
                        foundationInfo: FoundationInfo_1.FoundationInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.foundationInfo)
                    };
                    break;
                case /* com.midnights.game.VehicleInfo vehicle_info */ 46:
                    message.content = {
                        oneofKind: "vehicleInfo",
                        vehicleInfo: VehicleInfo_1.VehicleInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.vehicleInfo)
                    };
                    break;
                case /* com.midnights.game.EchoShellInfo shell_info */ 47:
                    message.content = {
                        oneofKind: "shellInfo",
                        shellInfo: EchoShellInfo_1.EchoShellInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.shellInfo)
                    };
                    break;
                case /* com.midnights.game.ScreenInfo screen_info */ 48:
                    message.content = {
                        oneofKind: "screenInfo",
                        screenInfo: ScreenInfo_1.ScreenInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.screenInfo)
                    };
                    break;
                case /* com.midnights.game.FishPoolInfo fish_pool_info */ 59:
                    message.content = {
                        oneofKind: "fishPoolInfo",
                        fishPoolInfo: FishPoolInfo_1.FishPoolInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishPoolInfo)
                    };
                    break;
                case /* com.midnights.game.CustomGadgetTreeInfo custom_gadget_tree_info */ 60:
                    message.content = {
                        oneofKind: "customGadgetTreeInfo",
                        customGadgetTreeInfo: CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.customGadgetTreeInfo)
                    };
                    break;
                case /* com.midnights.game.RoguelikeGadgetInfo roguelike_gadget_info */ 61:
                    message.content = {
                        oneofKind: "roguelikeGadgetInfo",
                        roguelikeGadgetInfo: RoguelikeGadgetInfo_1.RoguelikeGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.roguelikeGadgetInfo)
                    };
                    break;
                case /* com.midnights.game.NightCrowGadgetInfo night_crow_gadget_info */ 62:
                    message.content = {
                        oneofKind: "nightCrowGadgetInfo",
                        nightCrowGadgetInfo: NightCrowGadgetInfo_1.NightCrowGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.nightCrowGadgetInfo)
                    };
                    break;
                case /* com.midnights.game.DeshretObeliskGadgetInfo deshret_obelisk_gadget_info */ 63:
                    message.content = {
                        oneofKind: "deshretObeliskGadgetInfo",
                        deshretObeliskGadgetInfo: DeshretObeliskGadgetInfo_1.DeshretObeliskGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.deshretObeliskGadgetInfo)
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
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 gadget_id = 1; */
        if (message.gadgetId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupId);
        /* optional uint32 config_id = 3; */
        if (message.configId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.configId);
        /* optional uint32 owner_entity_id = 4; */
        if (message.ownerEntityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional com.midnights.game.GadgetBornType born_type = 5; */
        if (message.bornType !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.bornType);
        /* optional uint32 gadget_state = 6; */
        if (message.gadgetState !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.gadgetState);
        /* optional uint32 gadget_type = 7; */
        if (message.gadgetType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.gadgetType);
        /* optional bool is_show_cutscene = 8; */
        if (message.isShowCutscene !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isShowCutscene);
        /* optional uint32 authority_peer_id = 9; */
        if (message.authorityPeerId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* optional bool is_enable_interact = 10; */
        if (message.isEnableInteract !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).bool(message.isEnableInteract);
        /* optional uint32 interact_id = 11; */
        if (message.interactId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.interactId);
        /* optional uint32 mark_flag = 21; */
        if (message.markFlag !== undefined)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.markFlag);
        /* optional uint32 prop_owner_entity_id = 22; */
        if (message.propOwnerEntityId !== undefined)
            writer.tag(22, runtime_2.WireType.Varint).uint32(message.propOwnerEntityId);
        /* optional com.midnights.game.PlatformInfo platform = 23; */
        if (message.platform)
            PlatformInfo_1.PlatformInfo.internalBinaryWrite(message.platform, writer.tag(23, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 interact_uid_list = 24; */
        if (message.interactUidList.length) {
            writer.tag(24, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.interactUidList.length; i++)
                writer.uint32(message.interactUidList[i]);
            writer.join();
        }
        /* optional uint32 draft_id = 25; */
        if (message.draftId !== undefined)
            writer.tag(25, runtime_2.WireType.Varint).uint32(message.draftId);
        /* optional uint32 gadget_talk_state = 26; */
        if (message.gadgetTalkState !== undefined)
            writer.tag(26, runtime_2.WireType.Varint).uint32(message.gadgetTalkState);
        /* optional com.midnights.game.GadgetPlayInfo play_info = 100; */
        if (message.playInfo)
            GadgetPlayInfo_1.GadgetPlayInfo.internalBinaryWrite(message.playInfo, writer.tag(100, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Item trifle_item = 12; */
        if (message.content.oneofKind === "trifleItem")
            Item_1.Item.internalBinaryWrite(message.content.trifleItem, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GatherGadgetInfo gather_gadget = 13; */
        if (message.content.oneofKind === "gatherGadget")
            GatherGadgetInfo_1.GatherGadgetInfo.internalBinaryWrite(message.content.gatherGadget, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WorktopInfo worktop = 14; */
        if (message.content.oneofKind === "worktop")
            WorktopInfo_1.WorktopInfo.internalBinaryWrite(message.content.worktop, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ClientGadgetInfo client_gadget = 15; */
        if (message.content.oneofKind === "clientGadget")
            ClientGadgetInfo_1.ClientGadgetInfo.internalBinaryWrite(message.content.clientGadget, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.WeatherInfo weather = 17; */
        if (message.content.oneofKind === "weather")
            WeatherInfo_1.WeatherInfo.internalBinaryWrite(message.content.weather, writer.tag(17, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.AbilityGadgetInfo ability_gadget = 18; */
        if (message.content.oneofKind === "abilityGadget")
            AbilityGadgetInfo_1.AbilityGadgetInfo.internalBinaryWrite(message.content.abilityGadget, writer.tag(18, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.StatueGadgetInfo statue_gadget = 19; */
        if (message.content.oneofKind === "statueGadget")
            StatueGadgetInfo_1.StatueGadgetInfo.internalBinaryWrite(message.content.statueGadget, writer.tag(19, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.BossChestInfo boss_chest = 20; */
        if (message.content.oneofKind === "bossChest")
            BossChestInfo_1.BossChestInfo.internalBinaryWrite(message.content.bossChest, writer.tag(20, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.BlossomChestInfo blossom_chest = 41; */
        if (message.content.oneofKind === "blossomChest")
            BlossomChestInfo_1.BlossomChestInfo.internalBinaryWrite(message.content.blossomChest, writer.tag(41, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MpPlayRewardInfo mp_play_reward = 42; */
        if (message.content.oneofKind === "mpPlayReward")
            MpPlayRewardInfo_1.MpPlayRewardInfo.internalBinaryWrite(message.content.mpPlayReward, writer.tag(42, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.GadgetGeneralRewardInfo general_reward = 43; */
        if (message.content.oneofKind === "generalReward")
            GadgetGeneralRewardInfo_1.GadgetGeneralRewardInfo.internalBinaryWrite(message.content.generalReward, writer.tag(43, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.OfferingInfo offering_info = 44; */
        if (message.content.oneofKind === "offeringInfo")
            OfferingInfo_1.OfferingInfo.internalBinaryWrite(message.content.offeringInfo, writer.tag(44, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FoundationInfo foundation_info = 45; */
        if (message.content.oneofKind === "foundationInfo")
            FoundationInfo_1.FoundationInfo.internalBinaryWrite(message.content.foundationInfo, writer.tag(45, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.VehicleInfo vehicle_info = 46; */
        if (message.content.oneofKind === "vehicleInfo")
            VehicleInfo_1.VehicleInfo.internalBinaryWrite(message.content.vehicleInfo, writer.tag(46, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.EchoShellInfo shell_info = 47; */
        if (message.content.oneofKind === "shellInfo")
            EchoShellInfo_1.EchoShellInfo.internalBinaryWrite(message.content.shellInfo, writer.tag(47, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.ScreenInfo screen_info = 48; */
        if (message.content.oneofKind === "screenInfo")
            ScreenInfo_1.ScreenInfo.internalBinaryWrite(message.content.screenInfo, writer.tag(48, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FishPoolInfo fish_pool_info = 59; */
        if (message.content.oneofKind === "fishPoolInfo")
            FishPoolInfo_1.FishPoolInfo.internalBinaryWrite(message.content.fishPoolInfo, writer.tag(59, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.CustomGadgetTreeInfo custom_gadget_tree_info = 60; */
        if (message.content.oneofKind === "customGadgetTreeInfo")
            CustomGadgetTreeInfo_1.CustomGadgetTreeInfo.internalBinaryWrite(message.content.customGadgetTreeInfo, writer.tag(60, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.RoguelikeGadgetInfo roguelike_gadget_info = 61; */
        if (message.content.oneofKind === "roguelikeGadgetInfo")
            RoguelikeGadgetInfo_1.RoguelikeGadgetInfo.internalBinaryWrite(message.content.roguelikeGadgetInfo, writer.tag(61, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.NightCrowGadgetInfo night_crow_gadget_info = 62; */
        if (message.content.oneofKind === "nightCrowGadgetInfo")
            NightCrowGadgetInfo_1.NightCrowGadgetInfo.internalBinaryWrite(message.content.nightCrowGadgetInfo, writer.tag(62, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.DeshretObeliskGadgetInfo deshret_obelisk_gadget_info = 63; */
        if (message.content.oneofKind === "deshretObeliskGadgetInfo")
            DeshretObeliskGadgetInfo_1.DeshretObeliskGadgetInfo.internalBinaryWrite(message.content.deshretObeliskGadgetInfo, writer.tag(63, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneGadgetInfo
 */
exports.SceneGadgetInfo = new SceneGadgetInfo$Type();
