"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BrickBreakerDetailInfo_1 = require("./BrickBreakerDetailInfo");
const CoinCollectDetailInfo_1 = require("./CoinCollectDetailInfo");
const EffigyChallengeV2DetailInfo_1 = require("./EffigyChallengeV2DetailInfo");
const CharAmusementDetailInfo_1 = require("./CharAmusementDetailInfo");
const FungusFighterDetailInfo_1 = require("./FungusFighterDetailInfo");
const WindFieldDetailInfo_1 = require("./WindFieldDetailInfo");
const VintageActivityDetailInfo_1 = require("./VintageActivityDetailInfo");
const RockBoardExploreDetailInfo_1 = require("./RockBoardExploreDetailInfo");
const TreasureSeelieActivityDetailInfo_1 = require("./TreasureSeelieActivityDetailInfo");
const MuqadasPotionActivityDetailInfo_1 = require("./MuqadasPotionActivityDetailInfo");
const InstableSprayDetailInfo_1 = require("./InstableSprayDetailInfo");
const GravenInnocenceDetailInfo_1 = require("./GravenInnocenceDetailInfo");
const GearActivityDetailInfo_1 = require("./GearActivityDetailInfo");
const IslandPartyDetailInfo_1 = require("./IslandPartyDetailInfo");
const SummerTimeV2DetailInfo_1 = require("./SummerTimeV2DetailInfo");
const RogueDiaryActivityDetailInfo_1 = require("./RogueDiaryActivityDetailInfo");
const LuminanceStoneChallengeActivityDetailInfo_1 = require("./LuminanceStoneChallengeActivityDetailInfo");
const GachaActivityDetailInfo_1 = require("./GachaActivityDetailInfo");
const SpiceActivityDetailInfo_1 = require("./SpiceActivityDetailInfo");
const PhotoActivityDetailInfo_1 = require("./PhotoActivityDetailInfo");
const IrodoriActivityDetailInfo_1 = require("./IrodoriActivityDetailInfo");
const CrystalLinkActivityDetailInfo_1 = require("./CrystalLinkActivityDetailInfo");
const UgcActivityDetailInfo_1 = require("./UgcActivityDetailInfo");
const BartenderActivityDetailInfo_1 = require("./BartenderActivityDetailInfo");
const MichiaeMatsuriActivityDetailInfo_1 = require("./MichiaeMatsuriActivityDetailInfo");
const LanternRiteActivityDetailInfo_1 = require("./LanternRiteActivityDetailInfo");
const TanukiTravelActivityDetailInfo_1 = require("./TanukiTravelActivityDetailInfo");
const PotionActivityDetailInfo_1 = require("./PotionActivityDetailInfo");
const WinterCampActivityDetailInfo_1 = require("./WinterCampActivityDetailInfo");
const HachiActivityDetailInfo_1 = require("./HachiActivityDetailInfo");
const DigActivityDetailInfo_1 = require("./DigActivityDetailInfo");
const RoguelikeDungeonActivityDetailInfo_1 = require("./RoguelikeDungeonActivityDetailInfo");
const MusicGameActivityDetailInfo_1 = require("./MusicGameActivityDetailInfo");
const PlantFlowerActivityDetailInfo_1 = require("./PlantFlowerActivityDetailInfo");
const LunaRiteDetailInfo_1 = require("./LunaRiteDetailInfo");
const MoonfinTrialActivityDetailInfo_1 = require("./MoonfinTrialActivityDetailInfo");
const SumoActivityDetailInfo_1 = require("./SumoActivityDetailInfo");
const ChessActivityDetailInfo_1 = require("./ChessActivityDetailInfo");
const BlitzRushActivityDetailInfo_1 = require("./BlitzRushActivityDetailInfo");
const BounceConjuringActivityDetailInfo_1 = require("./BounceConjuringActivityDetailInfo");
const EchoShellDetailInfo_1 = require("./EchoShellDetailInfo");
const BuoyantCombatDetailInfo_1 = require("./BuoyantCombatDetailInfo");
const SummerTimeDetailInfo_1 = require("./SummerTimeDetailInfo");
const FindHilichurlDetailInfo_1 = require("./FindHilichurlDetailInfo");
const HideAndSeekActivityDetailInfo_1 = require("./HideAndSeekActivityDetailInfo");
const MistTrialActivityDetailInfo_1 = require("./MistTrialActivityDetailInfo");
const ChannelerSlabActivityDetailInfo_1 = require("./ChannelerSlabActivityDetailInfo");
const WaterSpiritActivityDetailInfo_1 = require("./WaterSpiritActivityDetailInfo");
const FleurFairActivityDetailInfo_1 = require("./FleurFairActivityDetailInfo");
const ArenaChallengeActivityDetailInfo_1 = require("./ArenaChallengeActivityDetailInfo");
const ExpeditionActivityDetailInfo_1 = require("./ExpeditionActivityDetailInfo");
const SeaLampActivityInfo_1 = require("./SeaLampActivityInfo");
const BlessingActivityDetailInfo_1 = require("./BlessingActivityDetailInfo");
const TreasureMapActivityDetailInfo_1 = require("./TreasureMapActivityDetailInfo");
const EffigyActivityDetailInfo_1 = require("./EffigyActivityDetailInfo");
const DragonSpineActivityDetailInfo_1 = require("./DragonSpineActivityDetailInfo");
const FlightActivityDetailInfo_1 = require("./FlightActivityDetailInfo");
const AsterActivityDetailInfo_1 = require("./AsterActivityDetailInfo");
const DeliveryActivityDetailInfo_1 = require("./DeliveryActivityDetailInfo");
const TrialAvatarActivityDetailInfo_1 = require("./TrialAvatarActivityDetailInfo");
const SalesmanActivityDetailInfo_1 = require("./SalesmanActivityDetailInfo");
const CrucibleActivityDetailInfo_1 = require("./CrucibleActivityDetailInfo");
const SeaLampActivityDetailInfo_1 = require("./SeaLampActivityDetailInfo");
const ActivityPushTipsData_1 = require("./ActivityPushTipsData");
const ActivityWatcherInfo_1 = require("./ActivityWatcherInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityInfo", [
            { no: 360, name: "Unk3300_MJNPGEKLOCG", kind: "scalar", jsonName: "Unk3300MJNPGEKLOCG", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1268, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1870, name: "score_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_ICNJJKDHPCH", kind: "scalar", jsonName: "Unk3300ICNJJKDHPCH", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "meet_cond_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1645, name: "Unk3300_NEPKLLBJFKK", kind: "scalar", jsonName: "Unk3300NEPKLLBJFKK", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "watcher_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityWatcherInfo_1.ActivityWatcherInfo },
            { no: 1867, name: "activity_push_tips_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityPushTipsData_1.ActivityPushTipsData },
            { no: 13, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1889, name: "taken_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 697, name: "selected_avatar_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 36, name: "activity_coin_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 786, name: "first_day_start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1486, name: "Unk3300_ABJKLALKLDG", kind: "scalar", jsonName: "Unk3300ABJKLALKLDG", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "activity_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1375, name: "Unk3300_CBCEHLJJOGI", kind: "scalar", jsonName: "Unk3300CBCEHLJJOGI", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_MDBDPIBEGGH", kind: "scalar", jsonName: "Unk3300MDBDPIBEGGH", T: 8 /*ScalarType.BOOL*/ },
            { no: 939, name: "wish_gift_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 10, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "expire_cond_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "sam_lamp_info", kind: "message", oneof: "detail", T: () => SeaLampActivityDetailInfo_1.SeaLampActivityDetailInfo },
            { no: 15, name: "crucible_info", kind: "message", oneof: "detail", T: () => CrucibleActivityDetailInfo_1.CrucibleActivityDetailInfo },
            { no: 9, name: "salesman_info", kind: "message", oneof: "detail", T: () => SalesmanActivityDetailInfo_1.SalesmanActivityDetailInfo },
            { no: 4, name: "trial_avatar_info", kind: "message", oneof: "detail", T: () => TrialAvatarActivityDetailInfo_1.TrialAvatarActivityDetailInfo },
            { no: 1141, name: "delivery_info", kind: "message", oneof: "detail", T: () => DeliveryActivityDetailInfo_1.DeliveryActivityDetailInfo },
            { no: 1977, name: "aster_info", kind: "message", oneof: "detail", T: () => AsterActivityDetailInfo_1.AsterActivityDetailInfo },
            { no: 2011, name: "flight_info", kind: "message", oneof: "detail", T: () => FlightActivityDetailInfo_1.FlightActivityDetailInfo },
            { no: 1310, name: "dragon_spine_info", kind: "message", oneof: "detail", T: () => DragonSpineActivityDetailInfo_1.DragonSpineActivityDetailInfo },
            { no: 1374, name: "effigy_info", kind: "message", oneof: "detail", T: () => EffigyActivityDetailInfo_1.EffigyActivityDetailInfo },
            { no: 1925, name: "treasure_map_info", kind: "message", oneof: "detail", T: () => TreasureMapActivityDetailInfo_1.TreasureMapActivityDetailInfo },
            { no: 1962, name: "blessing_info", kind: "message", oneof: "detail", T: () => BlessingActivityDetailInfo_1.BlessingActivityDetailInfo },
            { no: 247, name: "sea_lamp_info", kind: "message", oneof: "detail", T: () => SeaLampActivityInfo_1.SeaLampActivityInfo },
            { no: 1752, name: "expedition_info", kind: "message", oneof: "detail", T: () => ExpeditionActivityDetailInfo_1.ExpeditionActivityDetailInfo },
            { no: 538, name: "arena_challenge_info", kind: "message", oneof: "detail", T: () => ArenaChallengeActivityDetailInfo_1.ArenaChallengeActivityDetailInfo },
            { no: 1447, name: "fleur_fair_info", kind: "message", oneof: "detail", T: () => FleurFairActivityDetailInfo_1.FleurFairActivityDetailInfo },
            { no: 635, name: "water_spirit_info", kind: "message", oneof: "detail", T: () => WaterSpiritActivityDetailInfo_1.WaterSpiritActivityDetailInfo },
            { no: 846, name: "channeler_slab_info", kind: "message", oneof: "detail", T: () => ChannelerSlabActivityDetailInfo_1.ChannelerSlabActivityDetailInfo },
            { no: 432, name: "mist_trial_activity_info", kind: "message", oneof: "detail", T: () => MistTrialActivityDetailInfo_1.MistTrialActivityDetailInfo },
            { no: 839, name: "hide_and_seek_info", kind: "message", oneof: "detail", T: () => HideAndSeekActivityDetailInfo_1.HideAndSeekActivityDetailInfo },
            { no: 378, name: "find_hilichurl_info", kind: "message", oneof: "detail", T: () => FindHilichurlDetailInfo_1.FindHilichurlDetailInfo },
            { no: 1910, name: "summer_time_info", kind: "message", oneof: "detail", T: () => SummerTimeDetailInfo_1.SummerTimeDetailInfo },
            { no: 686, name: "buoyant_combat_info", kind: "message", oneof: "detail", T: () => BuoyantCombatDetailInfo_1.BuoyantCombatDetailInfo },
            { no: 1162, name: "echo_shell_info", kind: "message", oneof: "detail", T: () => EchoShellDetailInfo_1.EchoShellDetailInfo },
            { no: 922, name: "bounce_conjuring_info", kind: "message", oneof: "detail", T: () => BounceConjuringActivityDetailInfo_1.BounceConjuringActivityDetailInfo },
            { no: 64, name: "blitz_rush_info", kind: "message", oneof: "detail", T: () => BlitzRushActivityDetailInfo_1.BlitzRushActivityDetailInfo },
            { no: 1006, name: "chess_info", kind: "message", oneof: "detail", T: () => ChessActivityDetailInfo_1.ChessActivityDetailInfo },
            { no: 505, name: "sumo_info", kind: "message", oneof: "detail", T: () => SumoActivityDetailInfo_1.SumoActivityDetailInfo },
            { no: 766, name: "moonfin_trial_info", kind: "message", oneof: "detail", T: () => MoonfinTrialActivityDetailInfo_1.MoonfinTrialActivityDetailInfo },
            { no: 1545, name: "luna_rite_info", kind: "message", oneof: "detail", T: () => LunaRiteDetailInfo_1.LunaRiteDetailInfo },
            { no: 1274, name: "plant_flower_info", kind: "message", oneof: "detail", T: () => PlantFlowerActivityDetailInfo_1.PlantFlowerActivityDetailInfo },
            { no: 1989, name: "music_game_info", kind: "message", oneof: "detail", T: () => MusicGameActivityDetailInfo_1.MusicGameActivityDetailInfo },
            { no: 970, name: "roguelike_dungeon_info", kind: "message", oneof: "detail", T: () => RoguelikeDungeonActivityDetailInfo_1.RoguelikeDungeonActivityDetailInfo },
            { no: 1862, name: "dig_info", kind: "message", oneof: "detail", T: () => DigActivityDetailInfo_1.DigActivityDetailInfo },
            { no: 511, name: "hachi_info", kind: "message", oneof: "detail", T: () => HachiActivityDetailInfo_1.HachiActivityDetailInfo },
            { no: 699, name: "winter_camp_info", kind: "message", oneof: "detail", T: () => WinterCampActivityDetailInfo_1.WinterCampActivityDetailInfo },
            { no: 1567, name: "potion_info", kind: "message", oneof: "detail", T: () => PotionActivityDetailInfo_1.PotionActivityDetailInfo },
            { no: 1348, name: "tanuki_travel_activity_info", kind: "message", oneof: "detail", T: () => TanukiTravelActivityDetailInfo_1.TanukiTravelActivityDetailInfo },
            { no: 237, name: "lantern_rite_activity_info", kind: "message", oneof: "detail", T: () => LanternRiteActivityDetailInfo_1.LanternRiteActivityDetailInfo },
            { no: 1839, name: "michiae_matsuri_info", kind: "message", oneof: "detail", T: () => MichiaeMatsuriActivityDetailInfo_1.MichiaeMatsuriActivityDetailInfo },
            { no: 551, name: "bartender_info", kind: "message", oneof: "detail", T: () => BartenderActivityDetailInfo_1.BartenderActivityDetailInfo },
            { no: 1182, name: "ugc_info", kind: "message", oneof: "detail", T: () => UgcActivityDetailInfo_1.UgcActivityDetailInfo },
            { no: 812, name: "crystal_link_info", kind: "message", oneof: "detail", T: () => CrystalLinkActivityDetailInfo_1.CrystalLinkActivityDetailInfo },
            { no: 1056, name: "irodori_info", kind: "message", oneof: "detail", T: () => IrodoriActivityDetailInfo_1.IrodoriActivityDetailInfo },
            { no: 1822, name: "photo_info", kind: "message", oneof: "detail", T: () => PhotoActivityDetailInfo_1.PhotoActivityDetailInfo },
            { no: 789, name: "spice_info", kind: "message", oneof: "detail", T: () => SpiceActivityDetailInfo_1.SpiceActivityDetailInfo },
            { no: 1297, name: "gacha_info", kind: "message", oneof: "detail", T: () => GachaActivityDetailInfo_1.GachaActivityDetailInfo },
            { no: 444, name: "luminance_stone_challenge_info", kind: "message", oneof: "detail", T: () => LuminanceStoneChallengeActivityDetailInfo_1.LuminanceStoneChallengeActivityDetailInfo },
            { no: 560, name: "rogue_diary_info", kind: "message", oneof: "detail", T: () => RogueDiaryActivityDetailInfo_1.RogueDiaryActivityDetailInfo },
            { no: 411, name: "summer_time_v2_info", kind: "message", oneof: "detail", T: () => SummerTimeV2DetailInfo_1.SummerTimeV2DetailInfo },
            { no: 740, name: "island_party_info", kind: "message", oneof: "detail", T: () => IslandPartyDetailInfo_1.IslandPartyDetailInfo },
            { no: 1482, name: "gear_info", kind: "message", oneof: "detail", T: () => GearActivityDetailInfo_1.GearActivityDetailInfo },
            { no: 1928, name: "graven_innocence_info", kind: "message", oneof: "detail", T: () => GravenInnocenceDetailInfo_1.GravenInnocenceDetailInfo },
            { no: 1145, name: "instable_spray_info", kind: "message", oneof: "detail", T: () => InstableSprayDetailInfo_1.InstableSprayDetailInfo },
            { no: 1662, name: "muqadas_potion_info", kind: "message", oneof: "detail", T: () => MuqadasPotionActivityDetailInfo_1.MuqadasPotionActivityDetailInfo },
            { no: 1032, name: "treasure_seelie_info", kind: "message", oneof: "detail", T: () => TreasureSeelieActivityDetailInfo_1.TreasureSeelieActivityDetailInfo },
            { no: 1265, name: "rock_board_explore_info", kind: "message", oneof: "detail", T: () => RockBoardExploreDetailInfo_1.RockBoardExploreDetailInfo },
            { no: 1308, name: "vintage_info", kind: "message", oneof: "detail", T: () => VintageActivityDetailInfo_1.VintageActivityDetailInfo },
            { no: 468, name: "wind_field_info", kind: "message", oneof: "detail", T: () => WindFieldDetailInfo_1.WindFieldDetailInfo },
            { no: 1757, name: "fungus_fighter_info", kind: "message", oneof: "detail", T: () => FungusFighterDetailInfo_1.FungusFighterDetailInfo },
            { no: 621, name: "char_amusement_info", kind: "message", oneof: "detail", T: () => CharAmusementDetailInfo_1.CharAmusementDetailInfo },
            { no: 233, name: "effigy_challenge_info", kind: "message", oneof: "detail", T: () => EffigyChallengeV2DetailInfo_1.EffigyChallengeV2DetailInfo },
            { no: 2002, name: "coin_collect_info", kind: "message", oneof: "detail", T: () => CoinCollectDetailInfo_1.CoinCollectDetailInfo },
            { no: 1522, name: "brick_breaker_info", kind: "message", oneof: "detail", T: () => BrickBreakerDetailInfo_1.BrickBreakerDetailInfo }
        ]);
    }
    create(value) {
        const message = { unk3300MJNPGEKLOCG: false, isFinished: false, curScore: 0, scheduleId: 0, scoreLimit: 0, unk3300ICNJJKDHPCH: false, meetCondList: [], unk3300NEPKLLBJFKK: false, watcherInfoList: [], activityPushTipsDataList: [], activityId: 0, takenRewardList: [], selectedAvatarRewardId: 0, activityCoinMap: {}, firstDayStartTime: 0, unk3300ABJKLALKLDG: false, activityType: 0, unk3300CBCEHLJJOGI: false, beginTime: 0, unk3300MDBDPIBEGGH: false, wishGiftNumMap: {}, endTime: 0, expireCondList: [], detail: { oneofKind: undefined } };
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
                case /* bool Unk3300_MJNPGEKLOCG = 360 [json_name = "Unk3300MJNPGEKLOCG"];*/ 360:
                    message.unk3300MJNPGEKLOCG = reader.bool();
                    break;
                case /* bool is_finished */ 8:
                    message.isFinished = reader.bool();
                    break;
                case /* uint32 cur_score */ 1268:
                    message.curScore = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 7:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 score_limit */ 1870:
                    message.scoreLimit = reader.uint32();
                    break;
                case /* bool Unk3300_ICNJJKDHPCH = 14 [json_name = "Unk3300ICNJJKDHPCH"];*/ 14:
                    message.unk3300ICNJJKDHPCH = reader.bool();
                    break;
                case /* repeated uint32 meet_cond_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.meetCondList.push(reader.uint32());
                    else
                        message.meetCondList.push(reader.uint32());
                    break;
                case /* bool Unk3300_NEPKLLBJFKK = 1645 [json_name = "Unk3300NEPKLLBJFKK"];*/ 1645:
                    message.unk3300NEPKLLBJFKK = reader.bool();
                    break;
                case /* repeated ActivityWatcherInfo watcher_info_list */ 6:
                    message.watcherInfoList.push(ActivityWatcherInfo_1.ActivityWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ActivityPushTipsData activity_push_tips_data_list */ 1867:
                    message.activityPushTipsDataList.push(ActivityPushTipsData_1.ActivityPushTipsData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 activity_id */ 13:
                    message.activityId = reader.uint32();
                    break;
                case /* repeated uint32 taken_reward_list */ 1889:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenRewardList.push(reader.uint32());
                    else
                        message.takenRewardList.push(reader.uint32());
                    break;
                case /* uint32 selected_avatar_reward_id */ 697:
                    message.selectedAvatarRewardId = reader.uint32();
                    break;
                case /* map<uint32, uint32> activity_coin_map */ 36:
                    this.binaryReadMap36(message.activityCoinMap, reader, options);
                    break;
                case /* uint32 first_day_start_time */ 786:
                    message.firstDayStartTime = reader.uint32();
                    break;
                case /* bool Unk3300_ABJKLALKLDG = 1486 [json_name = "Unk3300ABJKLALKLDG"];*/ 1486:
                    message.unk3300ABJKLALKLDG = reader.bool();
                    break;
                case /* uint32 activity_type */ 3:
                    message.activityType = reader.uint32();
                    break;
                case /* bool Unk3300_CBCEHLJJOGI = 1375 [json_name = "Unk3300CBCEHLJJOGI"];*/ 1375:
                    message.unk3300CBCEHLJJOGI = reader.bool();
                    break;
                case /* uint32 begin_time */ 1:
                    message.beginTime = reader.uint32();
                    break;
                case /* bool Unk3300_MDBDPIBEGGH = 12 [json_name = "Unk3300MDBDPIBEGGH"];*/ 12:
                    message.unk3300MDBDPIBEGGH = reader.bool();
                    break;
                case /* map<uint32, uint32> wish_gift_num_map */ 939:
                    this.binaryReadMap939(message.wishGiftNumMap, reader, options);
                    break;
                case /* uint32 end_time */ 10:
                    message.endTime = reader.uint32();
                    break;
                case /* repeated uint32 expire_cond_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.expireCondList.push(reader.uint32());
                    else
                        message.expireCondList.push(reader.uint32());
                    break;
                case /* SeaLampActivityDetailInfo sam_lamp_info */ 2:
                    message.detail = {
                        oneofKind: "samLampInfo",
                        samLampInfo: SeaLampActivityDetailInfo_1.SeaLampActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.samLampInfo)
                    };
                    break;
                case /* CrucibleActivityDetailInfo crucible_info */ 15:
                    message.detail = {
                        oneofKind: "crucibleInfo",
                        crucibleInfo: CrucibleActivityDetailInfo_1.CrucibleActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.crucibleInfo)
                    };
                    break;
                case /* SalesmanActivityDetailInfo salesman_info */ 9:
                    message.detail = {
                        oneofKind: "salesmanInfo",
                        salesmanInfo: SalesmanActivityDetailInfo_1.SalesmanActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.salesmanInfo)
                    };
                    break;
                case /* TrialAvatarActivityDetailInfo trial_avatar_info */ 4:
                    message.detail = {
                        oneofKind: "trialAvatarInfo",
                        trialAvatarInfo: TrialAvatarActivityDetailInfo_1.TrialAvatarActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.trialAvatarInfo)
                    };
                    break;
                case /* DeliveryActivityDetailInfo delivery_info */ 1141:
                    message.detail = {
                        oneofKind: "deliveryInfo",
                        deliveryInfo: DeliveryActivityDetailInfo_1.DeliveryActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.deliveryInfo)
                    };
                    break;
                case /* AsterActivityDetailInfo aster_info */ 1977:
                    message.detail = {
                        oneofKind: "asterInfo",
                        asterInfo: AsterActivityDetailInfo_1.AsterActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.asterInfo)
                    };
                    break;
                case /* FlightActivityDetailInfo flight_info */ 2011:
                    message.detail = {
                        oneofKind: "flightInfo",
                        flightInfo: FlightActivityDetailInfo_1.FlightActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.flightInfo)
                    };
                    break;
                case /* DragonSpineActivityDetailInfo dragon_spine_info */ 1310:
                    message.detail = {
                        oneofKind: "dragonSpineInfo",
                        dragonSpineInfo: DragonSpineActivityDetailInfo_1.DragonSpineActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.dragonSpineInfo)
                    };
                    break;
                case /* EffigyActivityDetailInfo effigy_info */ 1374:
                    message.detail = {
                        oneofKind: "effigyInfo",
                        effigyInfo: EffigyActivityDetailInfo_1.EffigyActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyInfo)
                    };
                    break;
                case /* TreasureMapActivityDetailInfo treasure_map_info */ 1925:
                    message.detail = {
                        oneofKind: "treasureMapInfo",
                        treasureMapInfo: TreasureMapActivityDetailInfo_1.TreasureMapActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.treasureMapInfo)
                    };
                    break;
                case /* BlessingActivityDetailInfo blessing_info */ 1962:
                    message.detail = {
                        oneofKind: "blessingInfo",
                        blessingInfo: BlessingActivityDetailInfo_1.BlessingActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.blessingInfo)
                    };
                    break;
                case /* SeaLampActivityInfo sea_lamp_info */ 247:
                    message.detail = {
                        oneofKind: "seaLampInfo",
                        seaLampInfo: SeaLampActivityInfo_1.SeaLampActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.seaLampInfo)
                    };
                    break;
                case /* ExpeditionActivityDetailInfo expedition_info */ 1752:
                    message.detail = {
                        oneofKind: "expeditionInfo",
                        expeditionInfo: ExpeditionActivityDetailInfo_1.ExpeditionActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.expeditionInfo)
                    };
                    break;
                case /* ArenaChallengeActivityDetailInfo arena_challenge_info */ 538:
                    message.detail = {
                        oneofKind: "arenaChallengeInfo",
                        arenaChallengeInfo: ArenaChallengeActivityDetailInfo_1.ArenaChallengeActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.arenaChallengeInfo)
                    };
                    break;
                case /* FleurFairActivityDetailInfo fleur_fair_info */ 1447:
                    message.detail = {
                        oneofKind: "fleurFairInfo",
                        fleurFairInfo: FleurFairActivityDetailInfo_1.FleurFairActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.fleurFairInfo)
                    };
                    break;
                case /* WaterSpiritActivityDetailInfo water_spirit_info */ 635:
                    message.detail = {
                        oneofKind: "waterSpiritInfo",
                        waterSpiritInfo: WaterSpiritActivityDetailInfo_1.WaterSpiritActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.waterSpiritInfo)
                    };
                    break;
                case /* ChannelerSlabActivityDetailInfo channeler_slab_info */ 846:
                    message.detail = {
                        oneofKind: "channelerSlabInfo",
                        channelerSlabInfo: ChannelerSlabActivityDetailInfo_1.ChannelerSlabActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.channelerSlabInfo)
                    };
                    break;
                case /* MistTrialActivityDetailInfo mist_trial_activity_info */ 432:
                    message.detail = {
                        oneofKind: "mistTrialActivityInfo",
                        mistTrialActivityInfo: MistTrialActivityDetailInfo_1.MistTrialActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.mistTrialActivityInfo)
                    };
                    break;
                case /* HideAndSeekActivityDetailInfo hide_and_seek_info */ 839:
                    message.detail = {
                        oneofKind: "hideAndSeekInfo",
                        hideAndSeekInfo: HideAndSeekActivityDetailInfo_1.HideAndSeekActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.hideAndSeekInfo)
                    };
                    break;
                case /* FindHilichurlDetailInfo find_hilichurl_info */ 378:
                    message.detail = {
                        oneofKind: "findHilichurlInfo",
                        findHilichurlInfo: FindHilichurlDetailInfo_1.FindHilichurlDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.findHilichurlInfo)
                    };
                    break;
                case /* SummerTimeDetailInfo summer_time_info */ 1910:
                    message.detail = {
                        oneofKind: "summerTimeInfo",
                        summerTimeInfo: SummerTimeDetailInfo_1.SummerTimeDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.summerTimeInfo)
                    };
                    break;
                case /* BuoyantCombatDetailInfo buoyant_combat_info */ 686:
                    message.detail = {
                        oneofKind: "buoyantCombatInfo",
                        buoyantCombatInfo: BuoyantCombatDetailInfo_1.BuoyantCombatDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.buoyantCombatInfo)
                    };
                    break;
                case /* EchoShellDetailInfo echo_shell_info */ 1162:
                    message.detail = {
                        oneofKind: "echoShellInfo",
                        echoShellInfo: EchoShellDetailInfo_1.EchoShellDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.echoShellInfo)
                    };
                    break;
                case /* BounceConjuringActivityDetailInfo bounce_conjuring_info */ 922:
                    message.detail = {
                        oneofKind: "bounceConjuringInfo",
                        bounceConjuringInfo: BounceConjuringActivityDetailInfo_1.BounceConjuringActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.bounceConjuringInfo)
                    };
                    break;
                case /* BlitzRushActivityDetailInfo blitz_rush_info */ 64:
                    message.detail = {
                        oneofKind: "blitzRushInfo",
                        blitzRushInfo: BlitzRushActivityDetailInfo_1.BlitzRushActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.blitzRushInfo)
                    };
                    break;
                case /* ChessActivityDetailInfo chess_info */ 1006:
                    message.detail = {
                        oneofKind: "chessInfo",
                        chessInfo: ChessActivityDetailInfo_1.ChessActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.chessInfo)
                    };
                    break;
                case /* SumoActivityDetailInfo sumo_info */ 505:
                    message.detail = {
                        oneofKind: "sumoInfo",
                        sumoInfo: SumoActivityDetailInfo_1.SumoActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.sumoInfo)
                    };
                    break;
                case /* MoonfinTrialActivityDetailInfo moonfin_trial_info */ 766:
                    message.detail = {
                        oneofKind: "moonfinTrialInfo",
                        moonfinTrialInfo: MoonfinTrialActivityDetailInfo_1.MoonfinTrialActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.moonfinTrialInfo)
                    };
                    break;
                case /* LunaRiteDetailInfo luna_rite_info */ 1545:
                    message.detail = {
                        oneofKind: "lunaRiteInfo",
                        lunaRiteInfo: LunaRiteDetailInfo_1.LunaRiteDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.lunaRiteInfo)
                    };
                    break;
                case /* PlantFlowerActivityDetailInfo plant_flower_info */ 1274:
                    message.detail = {
                        oneofKind: "plantFlowerInfo",
                        plantFlowerInfo: PlantFlowerActivityDetailInfo_1.PlantFlowerActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.plantFlowerInfo)
                    };
                    break;
                case /* MusicGameActivityDetailInfo music_game_info */ 1989:
                    message.detail = {
                        oneofKind: "musicGameInfo",
                        musicGameInfo: MusicGameActivityDetailInfo_1.MusicGameActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.musicGameInfo)
                    };
                    break;
                case /* RoguelikeDungeonActivityDetailInfo roguelike_dungeon_info */ 970:
                    message.detail = {
                        oneofKind: "roguelikeDungeonInfo",
                        roguelikeDungeonInfo: RoguelikeDungeonActivityDetailInfo_1.RoguelikeDungeonActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.roguelikeDungeonInfo)
                    };
                    break;
                case /* DigActivityDetailInfo dig_info */ 1862:
                    message.detail = {
                        oneofKind: "digInfo",
                        digInfo: DigActivityDetailInfo_1.DigActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.digInfo)
                    };
                    break;
                case /* HachiActivityDetailInfo hachi_info */ 511:
                    message.detail = {
                        oneofKind: "hachiInfo",
                        hachiInfo: HachiActivityDetailInfo_1.HachiActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.hachiInfo)
                    };
                    break;
                case /* WinterCampActivityDetailInfo winter_camp_info */ 699:
                    message.detail = {
                        oneofKind: "winterCampInfo",
                        winterCampInfo: WinterCampActivityDetailInfo_1.WinterCampActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.winterCampInfo)
                    };
                    break;
                case /* PotionActivityDetailInfo potion_info */ 1567:
                    message.detail = {
                        oneofKind: "potionInfo",
                        potionInfo: PotionActivityDetailInfo_1.PotionActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.potionInfo)
                    };
                    break;
                case /* TanukiTravelActivityDetailInfo tanuki_travel_activity_info */ 1348:
                    message.detail = {
                        oneofKind: "tanukiTravelActivityInfo",
                        tanukiTravelActivityInfo: TanukiTravelActivityDetailInfo_1.TanukiTravelActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.tanukiTravelActivityInfo)
                    };
                    break;
                case /* LanternRiteActivityDetailInfo lantern_rite_activity_info */ 237:
                    message.detail = {
                        oneofKind: "lanternRiteActivityInfo",
                        lanternRiteActivityInfo: LanternRiteActivityDetailInfo_1.LanternRiteActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.lanternRiteActivityInfo)
                    };
                    break;
                case /* MichiaeMatsuriActivityDetailInfo michiae_matsuri_info */ 1839:
                    message.detail = {
                        oneofKind: "michiaeMatsuriInfo",
                        michiaeMatsuriInfo: MichiaeMatsuriActivityDetailInfo_1.MichiaeMatsuriActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.michiaeMatsuriInfo)
                    };
                    break;
                case /* BartenderActivityDetailInfo bartender_info */ 551:
                    message.detail = {
                        oneofKind: "bartenderInfo",
                        bartenderInfo: BartenderActivityDetailInfo_1.BartenderActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.bartenderInfo)
                    };
                    break;
                case /* UgcActivityDetailInfo ugc_info */ 1182:
                    message.detail = {
                        oneofKind: "ugcInfo",
                        ugcInfo: UgcActivityDetailInfo_1.UgcActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.ugcInfo)
                    };
                    break;
                case /* CrystalLinkActivityDetailInfo crystal_link_info */ 812:
                    message.detail = {
                        oneofKind: "crystalLinkInfo",
                        crystalLinkInfo: CrystalLinkActivityDetailInfo_1.CrystalLinkActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.crystalLinkInfo)
                    };
                    break;
                case /* IrodoriActivityDetailInfo irodori_info */ 1056:
                    message.detail = {
                        oneofKind: "irodoriInfo",
                        irodoriInfo: IrodoriActivityDetailInfo_1.IrodoriActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.irodoriInfo)
                    };
                    break;
                case /* PhotoActivityDetailInfo photo_info */ 1822:
                    message.detail = {
                        oneofKind: "photoInfo",
                        photoInfo: PhotoActivityDetailInfo_1.PhotoActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.photoInfo)
                    };
                    break;
                case /* SpiceActivityDetailInfo spice_info */ 789:
                    message.detail = {
                        oneofKind: "spiceInfo",
                        spiceInfo: SpiceActivityDetailInfo_1.SpiceActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.spiceInfo)
                    };
                    break;
                case /* GachaActivityDetailInfo gacha_info */ 1297:
                    message.detail = {
                        oneofKind: "gachaInfo",
                        gachaInfo: GachaActivityDetailInfo_1.GachaActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.gachaInfo)
                    };
                    break;
                case /* LuminanceStoneChallengeActivityDetailInfo luminance_stone_challenge_info */ 444:
                    message.detail = {
                        oneofKind: "luminanceStoneChallengeInfo",
                        luminanceStoneChallengeInfo: LuminanceStoneChallengeActivityDetailInfo_1.LuminanceStoneChallengeActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.luminanceStoneChallengeInfo)
                    };
                    break;
                case /* RogueDiaryActivityDetailInfo rogue_diary_info */ 560:
                    message.detail = {
                        oneofKind: "rogueDiaryInfo",
                        rogueDiaryInfo: RogueDiaryActivityDetailInfo_1.RogueDiaryActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.rogueDiaryInfo)
                    };
                    break;
                case /* SummerTimeV2DetailInfo summer_time_v2_info */ 411:
                    message.detail = {
                        oneofKind: "summerTimeV2Info",
                        summerTimeV2Info: SummerTimeV2DetailInfo_1.SummerTimeV2DetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.summerTimeV2Info)
                    };
                    break;
                case /* IslandPartyDetailInfo island_party_info */ 740:
                    message.detail = {
                        oneofKind: "islandPartyInfo",
                        islandPartyInfo: IslandPartyDetailInfo_1.IslandPartyDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.islandPartyInfo)
                    };
                    break;
                case /* GearActivityDetailInfo gear_info */ 1482:
                    message.detail = {
                        oneofKind: "gearInfo",
                        gearInfo: GearActivityDetailInfo_1.GearActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.gearInfo)
                    };
                    break;
                case /* GravenInnocenceDetailInfo graven_innocence_info */ 1928:
                    message.detail = {
                        oneofKind: "gravenInnocenceInfo",
                        gravenInnocenceInfo: GravenInnocenceDetailInfo_1.GravenInnocenceDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.gravenInnocenceInfo)
                    };
                    break;
                case /* InstableSprayDetailInfo instable_spray_info */ 1145:
                    message.detail = {
                        oneofKind: "instableSprayInfo",
                        instableSprayInfo: InstableSprayDetailInfo_1.InstableSprayDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.instableSprayInfo)
                    };
                    break;
                case /* MuqadasPotionActivityDetailInfo muqadas_potion_info */ 1662:
                    message.detail = {
                        oneofKind: "muqadasPotionInfo",
                        muqadasPotionInfo: MuqadasPotionActivityDetailInfo_1.MuqadasPotionActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.muqadasPotionInfo)
                    };
                    break;
                case /* TreasureSeelieActivityDetailInfo treasure_seelie_info */ 1032:
                    message.detail = {
                        oneofKind: "treasureSeelieInfo",
                        treasureSeelieInfo: TreasureSeelieActivityDetailInfo_1.TreasureSeelieActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.treasureSeelieInfo)
                    };
                    break;
                case /* RockBoardExploreDetailInfo rock_board_explore_info */ 1265:
                    message.detail = {
                        oneofKind: "rockBoardExploreInfo",
                        rockBoardExploreInfo: RockBoardExploreDetailInfo_1.RockBoardExploreDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.rockBoardExploreInfo)
                    };
                    break;
                case /* VintageActivityDetailInfo vintage_info */ 1308:
                    message.detail = {
                        oneofKind: "vintageInfo",
                        vintageInfo: VintageActivityDetailInfo_1.VintageActivityDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.vintageInfo)
                    };
                    break;
                case /* WindFieldDetailInfo wind_field_info */ 468:
                    message.detail = {
                        oneofKind: "windFieldInfo",
                        windFieldInfo: WindFieldDetailInfo_1.WindFieldDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.windFieldInfo)
                    };
                    break;
                case /* FungusFighterDetailInfo fungus_fighter_info */ 1757:
                    message.detail = {
                        oneofKind: "fungusFighterInfo",
                        fungusFighterInfo: FungusFighterDetailInfo_1.FungusFighterDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.fungusFighterInfo)
                    };
                    break;
                case /* CharAmusementDetailInfo char_amusement_info */ 621:
                    message.detail = {
                        oneofKind: "charAmusementInfo",
                        charAmusementInfo: CharAmusementDetailInfo_1.CharAmusementDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.charAmusementInfo)
                    };
                    break;
                case /* EffigyChallengeV2DetailInfo effigy_challenge_info */ 233:
                    message.detail = {
                        oneofKind: "effigyChallengeInfo",
                        effigyChallengeInfo: EffigyChallengeV2DetailInfo_1.EffigyChallengeV2DetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.effigyChallengeInfo)
                    };
                    break;
                case /* CoinCollectDetailInfo coin_collect_info */ 2002:
                    message.detail = {
                        oneofKind: "coinCollectInfo",
                        coinCollectInfo: CoinCollectDetailInfo_1.CoinCollectDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.coinCollectInfo)
                    };
                    break;
                case /* BrickBreakerDetailInfo brick_breaker_info */ 1522:
                    message.detail = {
                        oneofKind: "brickBreakerInfo",
                        brickBreakerInfo: BrickBreakerDetailInfo_1.BrickBreakerDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.brickBreakerInfo)
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
    binaryReadMap36(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityInfo.activity_coin_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap939(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityInfo.wish_gift_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool Unk3300_MJNPGEKLOCG = 360 [json_name = "Unk3300MJNPGEKLOCG"]; */
        if (message.unk3300MJNPGEKLOCG !== false)
            writer.tag(360, runtime_2.WireType.Varint).bool(message.unk3300MJNPGEKLOCG);
        /* bool is_finished = 8; */
        if (message.isFinished !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isFinished);
        /* uint32 cur_score = 1268; */
        if (message.curScore !== 0)
            writer.tag(1268, runtime_2.WireType.Varint).uint32(message.curScore);
        /* uint32 schedule_id = 7; */
        if (message.scheduleId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* uint32 score_limit = 1870; */
        if (message.scoreLimit !== 0)
            writer.tag(1870, runtime_2.WireType.Varint).uint32(message.scoreLimit);
        /* bool Unk3300_ICNJJKDHPCH = 14 [json_name = "Unk3300ICNJJKDHPCH"]; */
        if (message.unk3300ICNJJKDHPCH !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.unk3300ICNJJKDHPCH);
        /* repeated uint32 meet_cond_list = 11; */
        if (message.meetCondList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.meetCondList.length; i++)
                writer.uint32(message.meetCondList[i]);
            writer.join();
        }
        /* bool Unk3300_NEPKLLBJFKK = 1645 [json_name = "Unk3300NEPKLLBJFKK"]; */
        if (message.unk3300NEPKLLBJFKK !== false)
            writer.tag(1645, runtime_2.WireType.Varint).bool(message.unk3300NEPKLLBJFKK);
        /* repeated ActivityWatcherInfo watcher_info_list = 6; */
        for (let i = 0; i < message.watcherInfoList.length; i++)
            ActivityWatcherInfo_1.ActivityWatcherInfo.internalBinaryWrite(message.watcherInfoList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated ActivityPushTipsData activity_push_tips_data_list = 1867; */
        for (let i = 0; i < message.activityPushTipsDataList.length; i++)
            ActivityPushTipsData_1.ActivityPushTipsData.internalBinaryWrite(message.activityPushTipsDataList[i], writer.tag(1867, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 activity_id = 13; */
        if (message.activityId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.activityId);
        /* repeated uint32 taken_reward_list = 1889; */
        if (message.takenRewardList.length) {
            writer.tag(1889, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenRewardList.length; i++)
                writer.uint32(message.takenRewardList[i]);
            writer.join();
        }
        /* uint32 selected_avatar_reward_id = 697; */
        if (message.selectedAvatarRewardId !== 0)
            writer.tag(697, runtime_2.WireType.Varint).uint32(message.selectedAvatarRewardId);
        /* map<uint32, uint32> activity_coin_map = 36; */
        for (let k of Object.keys(message.activityCoinMap))
            writer.tag(36, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.activityCoinMap[k]).join();
        /* uint32 first_day_start_time = 786; */
        if (message.firstDayStartTime !== 0)
            writer.tag(786, runtime_2.WireType.Varint).uint32(message.firstDayStartTime);
        /* bool Unk3300_ABJKLALKLDG = 1486 [json_name = "Unk3300ABJKLALKLDG"]; */
        if (message.unk3300ABJKLALKLDG !== false)
            writer.tag(1486, runtime_2.WireType.Varint).bool(message.unk3300ABJKLALKLDG);
        /* uint32 activity_type = 3; */
        if (message.activityType !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.activityType);
        /* bool Unk3300_CBCEHLJJOGI = 1375 [json_name = "Unk3300CBCEHLJJOGI"]; */
        if (message.unk3300CBCEHLJJOGI !== false)
            writer.tag(1375, runtime_2.WireType.Varint).bool(message.unk3300CBCEHLJJOGI);
        /* uint32 begin_time = 1; */
        if (message.beginTime !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* bool Unk3300_MDBDPIBEGGH = 12 [json_name = "Unk3300MDBDPIBEGGH"]; */
        if (message.unk3300MDBDPIBEGGH !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.unk3300MDBDPIBEGGH);
        /* map<uint32, uint32> wish_gift_num_map = 939; */
        for (let k of Object.keys(message.wishGiftNumMap))
            writer.tag(939, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.wishGiftNumMap[k]).join();
        /* uint32 end_time = 10; */
        if (message.endTime !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.endTime);
        /* repeated uint32 expire_cond_list = 5; */
        if (message.expireCondList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.expireCondList.length; i++)
                writer.uint32(message.expireCondList[i]);
            writer.join();
        }
        /* SeaLampActivityDetailInfo sam_lamp_info = 2; */
        if (message.detail.oneofKind === "samLampInfo")
            SeaLampActivityDetailInfo_1.SeaLampActivityDetailInfo.internalBinaryWrite(message.detail.samLampInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CrucibleActivityDetailInfo crucible_info = 15; */
        if (message.detail.oneofKind === "crucibleInfo")
            CrucibleActivityDetailInfo_1.CrucibleActivityDetailInfo.internalBinaryWrite(message.detail.crucibleInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SalesmanActivityDetailInfo salesman_info = 9; */
        if (message.detail.oneofKind === "salesmanInfo")
            SalesmanActivityDetailInfo_1.SalesmanActivityDetailInfo.internalBinaryWrite(message.detail.salesmanInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* TrialAvatarActivityDetailInfo trial_avatar_info = 4; */
        if (message.detail.oneofKind === "trialAvatarInfo")
            TrialAvatarActivityDetailInfo_1.TrialAvatarActivityDetailInfo.internalBinaryWrite(message.detail.trialAvatarInfo, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* DeliveryActivityDetailInfo delivery_info = 1141; */
        if (message.detail.oneofKind === "deliveryInfo")
            DeliveryActivityDetailInfo_1.DeliveryActivityDetailInfo.internalBinaryWrite(message.detail.deliveryInfo, writer.tag(1141, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* AsterActivityDetailInfo aster_info = 1977; */
        if (message.detail.oneofKind === "asterInfo")
            AsterActivityDetailInfo_1.AsterActivityDetailInfo.internalBinaryWrite(message.detail.asterInfo, writer.tag(1977, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* FlightActivityDetailInfo flight_info = 2011; */
        if (message.detail.oneofKind === "flightInfo")
            FlightActivityDetailInfo_1.FlightActivityDetailInfo.internalBinaryWrite(message.detail.flightInfo, writer.tag(2011, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* DragonSpineActivityDetailInfo dragon_spine_info = 1310; */
        if (message.detail.oneofKind === "dragonSpineInfo")
            DragonSpineActivityDetailInfo_1.DragonSpineActivityDetailInfo.internalBinaryWrite(message.detail.dragonSpineInfo, writer.tag(1310, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* EffigyActivityDetailInfo effigy_info = 1374; */
        if (message.detail.oneofKind === "effigyInfo")
            EffigyActivityDetailInfo_1.EffigyActivityDetailInfo.internalBinaryWrite(message.detail.effigyInfo, writer.tag(1374, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* TreasureMapActivityDetailInfo treasure_map_info = 1925; */
        if (message.detail.oneofKind === "treasureMapInfo")
            TreasureMapActivityDetailInfo_1.TreasureMapActivityDetailInfo.internalBinaryWrite(message.detail.treasureMapInfo, writer.tag(1925, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* BlessingActivityDetailInfo blessing_info = 1962; */
        if (message.detail.oneofKind === "blessingInfo")
            BlessingActivityDetailInfo_1.BlessingActivityDetailInfo.internalBinaryWrite(message.detail.blessingInfo, writer.tag(1962, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SeaLampActivityInfo sea_lamp_info = 247; */
        if (message.detail.oneofKind === "seaLampInfo")
            SeaLampActivityInfo_1.SeaLampActivityInfo.internalBinaryWrite(message.detail.seaLampInfo, writer.tag(247, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ExpeditionActivityDetailInfo expedition_info = 1752; */
        if (message.detail.oneofKind === "expeditionInfo")
            ExpeditionActivityDetailInfo_1.ExpeditionActivityDetailInfo.internalBinaryWrite(message.detail.expeditionInfo, writer.tag(1752, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ArenaChallengeActivityDetailInfo arena_challenge_info = 538; */
        if (message.detail.oneofKind === "arenaChallengeInfo")
            ArenaChallengeActivityDetailInfo_1.ArenaChallengeActivityDetailInfo.internalBinaryWrite(message.detail.arenaChallengeInfo, writer.tag(538, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* FleurFairActivityDetailInfo fleur_fair_info = 1447; */
        if (message.detail.oneofKind === "fleurFairInfo")
            FleurFairActivityDetailInfo_1.FleurFairActivityDetailInfo.internalBinaryWrite(message.detail.fleurFairInfo, writer.tag(1447, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* WaterSpiritActivityDetailInfo water_spirit_info = 635; */
        if (message.detail.oneofKind === "waterSpiritInfo")
            WaterSpiritActivityDetailInfo_1.WaterSpiritActivityDetailInfo.internalBinaryWrite(message.detail.waterSpiritInfo, writer.tag(635, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabActivityDetailInfo channeler_slab_info = 846; */
        if (message.detail.oneofKind === "channelerSlabInfo")
            ChannelerSlabActivityDetailInfo_1.ChannelerSlabActivityDetailInfo.internalBinaryWrite(message.detail.channelerSlabInfo, writer.tag(846, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* MistTrialActivityDetailInfo mist_trial_activity_info = 432; */
        if (message.detail.oneofKind === "mistTrialActivityInfo")
            MistTrialActivityDetailInfo_1.MistTrialActivityDetailInfo.internalBinaryWrite(message.detail.mistTrialActivityInfo, writer.tag(432, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* HideAndSeekActivityDetailInfo hide_and_seek_info = 839; */
        if (message.detail.oneofKind === "hideAndSeekInfo")
            HideAndSeekActivityDetailInfo_1.HideAndSeekActivityDetailInfo.internalBinaryWrite(message.detail.hideAndSeekInfo, writer.tag(839, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* FindHilichurlDetailInfo find_hilichurl_info = 378; */
        if (message.detail.oneofKind === "findHilichurlInfo")
            FindHilichurlDetailInfo_1.FindHilichurlDetailInfo.internalBinaryWrite(message.detail.findHilichurlInfo, writer.tag(378, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SummerTimeDetailInfo summer_time_info = 1910; */
        if (message.detail.oneofKind === "summerTimeInfo")
            SummerTimeDetailInfo_1.SummerTimeDetailInfo.internalBinaryWrite(message.detail.summerTimeInfo, writer.tag(1910, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* BuoyantCombatDetailInfo buoyant_combat_info = 686; */
        if (message.detail.oneofKind === "buoyantCombatInfo")
            BuoyantCombatDetailInfo_1.BuoyantCombatDetailInfo.internalBinaryWrite(message.detail.buoyantCombatInfo, writer.tag(686, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* EchoShellDetailInfo echo_shell_info = 1162; */
        if (message.detail.oneofKind === "echoShellInfo")
            EchoShellDetailInfo_1.EchoShellDetailInfo.internalBinaryWrite(message.detail.echoShellInfo, writer.tag(1162, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* BounceConjuringActivityDetailInfo bounce_conjuring_info = 922; */
        if (message.detail.oneofKind === "bounceConjuringInfo")
            BounceConjuringActivityDetailInfo_1.BounceConjuringActivityDetailInfo.internalBinaryWrite(message.detail.bounceConjuringInfo, writer.tag(922, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* BlitzRushActivityDetailInfo blitz_rush_info = 64; */
        if (message.detail.oneofKind === "blitzRushInfo")
            BlitzRushActivityDetailInfo_1.BlitzRushActivityDetailInfo.internalBinaryWrite(message.detail.blitzRushInfo, writer.tag(64, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ChessActivityDetailInfo chess_info = 1006; */
        if (message.detail.oneofKind === "chessInfo")
            ChessActivityDetailInfo_1.ChessActivityDetailInfo.internalBinaryWrite(message.detail.chessInfo, writer.tag(1006, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SumoActivityDetailInfo sumo_info = 505; */
        if (message.detail.oneofKind === "sumoInfo")
            SumoActivityDetailInfo_1.SumoActivityDetailInfo.internalBinaryWrite(message.detail.sumoInfo, writer.tag(505, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* MoonfinTrialActivityDetailInfo moonfin_trial_info = 766; */
        if (message.detail.oneofKind === "moonfinTrialInfo")
            MoonfinTrialActivityDetailInfo_1.MoonfinTrialActivityDetailInfo.internalBinaryWrite(message.detail.moonfinTrialInfo, writer.tag(766, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* LunaRiteDetailInfo luna_rite_info = 1545; */
        if (message.detail.oneofKind === "lunaRiteInfo")
            LunaRiteDetailInfo_1.LunaRiteDetailInfo.internalBinaryWrite(message.detail.lunaRiteInfo, writer.tag(1545, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* PlantFlowerActivityDetailInfo plant_flower_info = 1274; */
        if (message.detail.oneofKind === "plantFlowerInfo")
            PlantFlowerActivityDetailInfo_1.PlantFlowerActivityDetailInfo.internalBinaryWrite(message.detail.plantFlowerInfo, writer.tag(1274, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* MusicGameActivityDetailInfo music_game_info = 1989; */
        if (message.detail.oneofKind === "musicGameInfo")
            MusicGameActivityDetailInfo_1.MusicGameActivityDetailInfo.internalBinaryWrite(message.detail.musicGameInfo, writer.tag(1989, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* RoguelikeDungeonActivityDetailInfo roguelike_dungeon_info = 970; */
        if (message.detail.oneofKind === "roguelikeDungeonInfo")
            RoguelikeDungeonActivityDetailInfo_1.RoguelikeDungeonActivityDetailInfo.internalBinaryWrite(message.detail.roguelikeDungeonInfo, writer.tag(970, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* DigActivityDetailInfo dig_info = 1862; */
        if (message.detail.oneofKind === "digInfo")
            DigActivityDetailInfo_1.DigActivityDetailInfo.internalBinaryWrite(message.detail.digInfo, writer.tag(1862, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* HachiActivityDetailInfo hachi_info = 511; */
        if (message.detail.oneofKind === "hachiInfo")
            HachiActivityDetailInfo_1.HachiActivityDetailInfo.internalBinaryWrite(message.detail.hachiInfo, writer.tag(511, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* WinterCampActivityDetailInfo winter_camp_info = 699; */
        if (message.detail.oneofKind === "winterCampInfo")
            WinterCampActivityDetailInfo_1.WinterCampActivityDetailInfo.internalBinaryWrite(message.detail.winterCampInfo, writer.tag(699, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* PotionActivityDetailInfo potion_info = 1567; */
        if (message.detail.oneofKind === "potionInfo")
            PotionActivityDetailInfo_1.PotionActivityDetailInfo.internalBinaryWrite(message.detail.potionInfo, writer.tag(1567, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* TanukiTravelActivityDetailInfo tanuki_travel_activity_info = 1348; */
        if (message.detail.oneofKind === "tanukiTravelActivityInfo")
            TanukiTravelActivityDetailInfo_1.TanukiTravelActivityDetailInfo.internalBinaryWrite(message.detail.tanukiTravelActivityInfo, writer.tag(1348, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* LanternRiteActivityDetailInfo lantern_rite_activity_info = 237; */
        if (message.detail.oneofKind === "lanternRiteActivityInfo")
            LanternRiteActivityDetailInfo_1.LanternRiteActivityDetailInfo.internalBinaryWrite(message.detail.lanternRiteActivityInfo, writer.tag(237, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* MichiaeMatsuriActivityDetailInfo michiae_matsuri_info = 1839; */
        if (message.detail.oneofKind === "michiaeMatsuriInfo")
            MichiaeMatsuriActivityDetailInfo_1.MichiaeMatsuriActivityDetailInfo.internalBinaryWrite(message.detail.michiaeMatsuriInfo, writer.tag(1839, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* BartenderActivityDetailInfo bartender_info = 551; */
        if (message.detail.oneofKind === "bartenderInfo")
            BartenderActivityDetailInfo_1.BartenderActivityDetailInfo.internalBinaryWrite(message.detail.bartenderInfo, writer.tag(551, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* UgcActivityDetailInfo ugc_info = 1182; */
        if (message.detail.oneofKind === "ugcInfo")
            UgcActivityDetailInfo_1.UgcActivityDetailInfo.internalBinaryWrite(message.detail.ugcInfo, writer.tag(1182, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CrystalLinkActivityDetailInfo crystal_link_info = 812; */
        if (message.detail.oneofKind === "crystalLinkInfo")
            CrystalLinkActivityDetailInfo_1.CrystalLinkActivityDetailInfo.internalBinaryWrite(message.detail.crystalLinkInfo, writer.tag(812, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* IrodoriActivityDetailInfo irodori_info = 1056; */
        if (message.detail.oneofKind === "irodoriInfo")
            IrodoriActivityDetailInfo_1.IrodoriActivityDetailInfo.internalBinaryWrite(message.detail.irodoriInfo, writer.tag(1056, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* PhotoActivityDetailInfo photo_info = 1822; */
        if (message.detail.oneofKind === "photoInfo")
            PhotoActivityDetailInfo_1.PhotoActivityDetailInfo.internalBinaryWrite(message.detail.photoInfo, writer.tag(1822, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SpiceActivityDetailInfo spice_info = 789; */
        if (message.detail.oneofKind === "spiceInfo")
            SpiceActivityDetailInfo_1.SpiceActivityDetailInfo.internalBinaryWrite(message.detail.spiceInfo, writer.tag(789, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* GachaActivityDetailInfo gacha_info = 1297; */
        if (message.detail.oneofKind === "gachaInfo")
            GachaActivityDetailInfo_1.GachaActivityDetailInfo.internalBinaryWrite(message.detail.gachaInfo, writer.tag(1297, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* LuminanceStoneChallengeActivityDetailInfo luminance_stone_challenge_info = 444; */
        if (message.detail.oneofKind === "luminanceStoneChallengeInfo")
            LuminanceStoneChallengeActivityDetailInfo_1.LuminanceStoneChallengeActivityDetailInfo.internalBinaryWrite(message.detail.luminanceStoneChallengeInfo, writer.tag(444, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* RogueDiaryActivityDetailInfo rogue_diary_info = 560; */
        if (message.detail.oneofKind === "rogueDiaryInfo")
            RogueDiaryActivityDetailInfo_1.RogueDiaryActivityDetailInfo.internalBinaryWrite(message.detail.rogueDiaryInfo, writer.tag(560, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SummerTimeV2DetailInfo summer_time_v2_info = 411; */
        if (message.detail.oneofKind === "summerTimeV2Info")
            SummerTimeV2DetailInfo_1.SummerTimeV2DetailInfo.internalBinaryWrite(message.detail.summerTimeV2Info, writer.tag(411, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* IslandPartyDetailInfo island_party_info = 740; */
        if (message.detail.oneofKind === "islandPartyInfo")
            IslandPartyDetailInfo_1.IslandPartyDetailInfo.internalBinaryWrite(message.detail.islandPartyInfo, writer.tag(740, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* GearActivityDetailInfo gear_info = 1482; */
        if (message.detail.oneofKind === "gearInfo")
            GearActivityDetailInfo_1.GearActivityDetailInfo.internalBinaryWrite(message.detail.gearInfo, writer.tag(1482, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* GravenInnocenceDetailInfo graven_innocence_info = 1928; */
        if (message.detail.oneofKind === "gravenInnocenceInfo")
            GravenInnocenceDetailInfo_1.GravenInnocenceDetailInfo.internalBinaryWrite(message.detail.gravenInnocenceInfo, writer.tag(1928, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* InstableSprayDetailInfo instable_spray_info = 1145; */
        if (message.detail.oneofKind === "instableSprayInfo")
            InstableSprayDetailInfo_1.InstableSprayDetailInfo.internalBinaryWrite(message.detail.instableSprayInfo, writer.tag(1145, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* MuqadasPotionActivityDetailInfo muqadas_potion_info = 1662; */
        if (message.detail.oneofKind === "muqadasPotionInfo")
            MuqadasPotionActivityDetailInfo_1.MuqadasPotionActivityDetailInfo.internalBinaryWrite(message.detail.muqadasPotionInfo, writer.tag(1662, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* TreasureSeelieActivityDetailInfo treasure_seelie_info = 1032; */
        if (message.detail.oneofKind === "treasureSeelieInfo")
            TreasureSeelieActivityDetailInfo_1.TreasureSeelieActivityDetailInfo.internalBinaryWrite(message.detail.treasureSeelieInfo, writer.tag(1032, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* RockBoardExploreDetailInfo rock_board_explore_info = 1265; */
        if (message.detail.oneofKind === "rockBoardExploreInfo")
            RockBoardExploreDetailInfo_1.RockBoardExploreDetailInfo.internalBinaryWrite(message.detail.rockBoardExploreInfo, writer.tag(1265, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* VintageActivityDetailInfo vintage_info = 1308; */
        if (message.detail.oneofKind === "vintageInfo")
            VintageActivityDetailInfo_1.VintageActivityDetailInfo.internalBinaryWrite(message.detail.vintageInfo, writer.tag(1308, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* WindFieldDetailInfo wind_field_info = 468; */
        if (message.detail.oneofKind === "windFieldInfo")
            WindFieldDetailInfo_1.WindFieldDetailInfo.internalBinaryWrite(message.detail.windFieldInfo, writer.tag(468, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* FungusFighterDetailInfo fungus_fighter_info = 1757; */
        if (message.detail.oneofKind === "fungusFighterInfo")
            FungusFighterDetailInfo_1.FungusFighterDetailInfo.internalBinaryWrite(message.detail.fungusFighterInfo, writer.tag(1757, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CharAmusementDetailInfo char_amusement_info = 621; */
        if (message.detail.oneofKind === "charAmusementInfo")
            CharAmusementDetailInfo_1.CharAmusementDetailInfo.internalBinaryWrite(message.detail.charAmusementInfo, writer.tag(621, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* EffigyChallengeV2DetailInfo effigy_challenge_info = 233; */
        if (message.detail.oneofKind === "effigyChallengeInfo")
            EffigyChallengeV2DetailInfo_1.EffigyChallengeV2DetailInfo.internalBinaryWrite(message.detail.effigyChallengeInfo, writer.tag(233, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CoinCollectDetailInfo coin_collect_info = 2002; */
        if (message.detail.oneofKind === "coinCollectInfo")
            CoinCollectDetailInfo_1.CoinCollectDetailInfo.internalBinaryWrite(message.detail.coinCollectInfo, writer.tag(2002, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* BrickBreakerDetailInfo brick_breaker_info = 1522; */
        if (message.detail.oneofKind === "brickBreakerInfo")
            BrickBreakerDetailInfo_1.BrickBreakerDetailInfo.internalBinaryWrite(message.detail.brickBreakerInfo, writer.tag(1522, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityInfo
 */
exports.ActivityInfo = new ActivityInfo$Type();
