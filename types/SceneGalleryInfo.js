"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneGalleryCoinCollectInfo_1 = require("./SceneGalleryCoinCollectInfo");
const SceneGalleryCharAmusementInfo_1 = require("./SceneGalleryCharAmusementInfo");
const SceneGalleryFungusFighterCaptureInfo_1 = require("./SceneGalleryFungusFighterCaptureInfo");
const SceneGalleryEffigyChallengeV2Info_1 = require("./SceneGalleryEffigyChallengeV2Info");
const SceneGalleryFungusFighterTrainingInfo_1 = require("./SceneGalleryFungusFighterTrainingInfo");
const SceneGalleryWindFieldInfo_1 = require("./SceneGalleryWindFieldInfo");
const SceneGalleryVintageHuntingInfo_1 = require("./SceneGalleryVintageHuntingInfo");
const SceneGalleryTreasureSeelieInfo_1 = require("./SceneGalleryTreasureSeelieInfo");
const SceneGalleryMuqadasPotionInfo_1 = require("./SceneGalleryMuqadasPotionInfo");
const SceneGalleryInstableSprayInfo_1 = require("./SceneGalleryInstableSprayInfo");
const SceneGalleryIslandPartySailInfo_1 = require("./SceneGalleryIslandPartySailInfo");
const SceneGalleryIslandPartyRaftInfo_1 = require("./SceneGalleryIslandPartyRaftInfo");
const SceneGallerySummerTimeV2BoatInfo_1 = require("./SceneGallerySummerTimeV2BoatInfo");
const SceneGalleryIslandPartyDownHillInfo_1 = require("./SceneGalleryIslandPartyDownHillInfo");
const SceneGalleryHomeSeekFurnitureInfo_1 = require("./SceneGalleryHomeSeekFurnitureInfo");
const SceneGalleryLuminanceStoneChallengeInfo_1 = require("./SceneGalleryLuminanceStoneChallengeInfo");
const SceneGalleryIrodoriMasterInfo_1 = require("./SceneGalleryIrodoriMasterInfo");
const SceneGalleryCrystalLinkInfo_1 = require("./SceneGalleryCrystalLinkInfo");
const SceneGalleryHomeBalloonInfo_1 = require("./SceneGalleryHomeBalloonInfo");
const SceneGallerySalvageEscortInfo_1 = require("./SceneGallerySalvageEscortInfo");
const SceneGallerySalvagePreventInfo_1 = require("./SceneGallerySalvagePreventInfo");
const SceneGallerySumoInfo_1 = require("./SceneGallerySumoInfo");
const SceneGalleryHandballInfo_1 = require("./SceneGalleryHandballInfo");
const SceneGalleryBounceConjuringInfo_1 = require("./SceneGalleryBounceConjuringInfo");
const SceneGalleryBuoyantCombatInfo_1 = require("./SceneGalleryBuoyantCombatInfo");
const SceneGalleryHideAndSeekInfo_1 = require("./SceneGalleryHideAndSeekInfo");
const SceneGalleryBrokenFloorInfo_1 = require("./SceneGalleryBrokenFloorInfo");
const SceneGalleryBulletInfo_1 = require("./SceneGalleryBulletInfo");
const SceneGalleryFlowerInfo_1 = require("./SceneGalleryFlowerInfo");
const SceneGalleryFallInfo_1 = require("./SceneGalleryFallInfo");
const SceneGalleryBalloonInfo_1 = require("./SceneGalleryBalloonInfo");
const GalleryStageType_1 = require("./GalleryStageType");
const SceneGalleryProgressInfo_1 = require("./SceneGalleryProgressInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryInfo", [
            { no: 14, name: "pre_start_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "progress_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneGalleryProgressInfo_1.SceneGalleryProgressInfo },
            { no: 4, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "player_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "stage", kind: "enum", T: () => ["GalleryStageType", GalleryStageType_1.GalleryStageType, "GALLERY_STAGE_TYPE_"] },
            { no: 5, name: "balloon_info", kind: "message", oneof: "info", T: () => SceneGalleryBalloonInfo_1.SceneGalleryBalloonInfo },
            { no: 7, name: "fall_info", kind: "message", oneof: "info", T: () => SceneGalleryFallInfo_1.SceneGalleryFallInfo },
            { no: 11, name: "flower_info", kind: "message", oneof: "info", T: () => SceneGalleryFlowerInfo_1.SceneGalleryFlowerInfo },
            { no: 12, name: "bullet_info", kind: "message", oneof: "info", T: () => SceneGalleryBulletInfo_1.SceneGalleryBulletInfo },
            { no: 6, name: "broken_floor_info", kind: "message", oneof: "info", T: () => SceneGalleryBrokenFloorInfo_1.SceneGalleryBrokenFloorInfo },
            { no: 13, name: "hide_and_seek_info", kind: "message", oneof: "info", T: () => SceneGalleryHideAndSeekInfo_1.SceneGalleryHideAndSeekInfo },
            { no: 1224, name: "buoyant_combat_info", kind: "message", oneof: "info", T: () => SceneGalleryBuoyantCombatInfo_1.SceneGalleryBuoyantCombatInfo },
            { no: 621, name: "bounce_conjuring_info", kind: "message", oneof: "info", T: () => SceneGalleryBounceConjuringInfo_1.SceneGalleryBounceConjuringInfo },
            { no: 1835, name: "handball_info", kind: "message", oneof: "info", T: () => SceneGalleryHandballInfo_1.SceneGalleryHandballInfo },
            { no: 877, name: "sumo_info", kind: "message", oneof: "info", T: () => SceneGallerySumoInfo_1.SceneGallerySumoInfo },
            { no: 1477, name: "salvage_prevent_info", kind: "message", oneof: "info", T: () => SceneGallerySalvagePreventInfo_1.SceneGallerySalvagePreventInfo },
            { no: 732, name: "salvage_escort_info", kind: "message", oneof: "info", T: () => SceneGallerySalvageEscortInfo_1.SceneGallerySalvageEscortInfo },
            { no: 1866, name: "home_balloon_info", kind: "message", oneof: "info", T: () => SceneGalleryHomeBalloonInfo_1.SceneGalleryHomeBalloonInfo },
            { no: 666, name: "crystal_link_info", kind: "message", oneof: "info", T: () => SceneGalleryCrystalLinkInfo_1.SceneGalleryCrystalLinkInfo },
            { no: 1679, name: "irodori_master_info", kind: "message", oneof: "info", T: () => SceneGalleryIrodoriMasterInfo_1.SceneGalleryIrodoriMasterInfo },
            { no: 1847, name: "luminance_stone_challenge_info", kind: "message", oneof: "info", T: () => SceneGalleryLuminanceStoneChallengeInfo_1.SceneGalleryLuminanceStoneChallengeInfo },
            { no: 540, name: "home_seek_furniture_info", kind: "message", oneof: "info", T: () => SceneGalleryHomeSeekFurnitureInfo_1.SceneGalleryHomeSeekFurnitureInfo },
            { no: 2047, name: "island_party_down_hill_info", kind: "message", oneof: "info", T: () => SceneGalleryIslandPartyDownHillInfo_1.SceneGalleryIslandPartyDownHillInfo },
            { no: 1890, name: "summer_time_v2_boat_info", kind: "message", oneof: "info", T: () => SceneGallerySummerTimeV2BoatInfo_1.SceneGallerySummerTimeV2BoatInfo },
            { no: 244, name: "island_party_raft_info", kind: "message", oneof: "info", T: () => SceneGalleryIslandPartyRaftInfo_1.SceneGalleryIslandPartyRaftInfo },
            { no: 633, name: "island_party_sail_info", kind: "message", oneof: "info", T: () => SceneGalleryIslandPartySailInfo_1.SceneGalleryIslandPartySailInfo },
            { no: 75, name: "instable_spray_info", kind: "message", oneof: "info", T: () => SceneGalleryInstableSprayInfo_1.SceneGalleryInstableSprayInfo },
            { no: 496, name: "muqadas_potion_info", kind: "message", oneof: "info", T: () => SceneGalleryMuqadasPotionInfo_1.SceneGalleryMuqadasPotionInfo },
            { no: 16, name: "treasure_seelie_info", kind: "message", oneof: "info", T: () => SceneGalleryTreasureSeelieInfo_1.SceneGalleryTreasureSeelieInfo },
            { no: 1470, name: "vintage_hunting_info", kind: "message", oneof: "info", T: () => SceneGalleryVintageHuntingInfo_1.SceneGalleryVintageHuntingInfo },
            { no: 1001, name: "wind_field_info", kind: "message", oneof: "info", T: () => SceneGalleryWindFieldInfo_1.SceneGalleryWindFieldInfo },
            { no: 861, name: "fungus_fighter_training_info", kind: "message", oneof: "info", T: () => SceneGalleryFungusFighterTrainingInfo_1.SceneGalleryFungusFighterTrainingInfo },
            { no: 1577, name: "effigy_challenge_info", kind: "message", oneof: "info", T: () => SceneGalleryEffigyChallengeV2Info_1.SceneGalleryEffigyChallengeV2Info },
            { no: 711, name: "fungus_fighter_capture_info", kind: "message", oneof: "info", T: () => SceneGalleryFungusFighterCaptureInfo_1.SceneGalleryFungusFighterCaptureInfo },
            { no: 152, name: "char_amusement_info", kind: "message", oneof: "info", T: () => SceneGalleryCharAmusementInfo_1.SceneGalleryCharAmusementInfo },
            { no: 1243, name: "coin_collect_info", kind: "message", oneof: "info", T: () => SceneGalleryCoinCollectInfo_1.SceneGalleryCoinCollectInfo }
        ]);
    }
    create(value) {
        const message = { preStartEndTime: 0, ownerUid: 0, progressInfoList: [], galleryId: 0, startTime: 0, playerCount: 0, endTime: 0, stage: 0, info: { oneofKind: undefined } };
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
                case /* uint32 pre_start_end_time */ 14:
                    message.preStartEndTime = reader.uint32();
                    break;
                case /* uint32 owner_uid */ 9:
                    message.ownerUid = reader.uint32();
                    break;
                case /* repeated SceneGalleryProgressInfo progress_info_list */ 10:
                    message.progressInfoList.push(SceneGalleryProgressInfo_1.SceneGalleryProgressInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 gallery_id */ 4:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 start_time */ 3:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 player_count */ 15:
                    message.playerCount = reader.uint32();
                    break;
                case /* uint32 end_time */ 1:
                    message.endTime = reader.uint32();
                    break;
                case /* GalleryStageType stage */ 8:
                    message.stage = reader.int32();
                    break;
                case /* SceneGalleryBalloonInfo balloon_info */ 5:
                    message.info = {
                        oneofKind: "balloonInfo",
                        balloonInfo: SceneGalleryBalloonInfo_1.SceneGalleryBalloonInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.balloonInfo)
                    };
                    break;
                case /* SceneGalleryFallInfo fall_info */ 7:
                    message.info = {
                        oneofKind: "fallInfo",
                        fallInfo: SceneGalleryFallInfo_1.SceneGalleryFallInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.fallInfo)
                    };
                    break;
                case /* SceneGalleryFlowerInfo flower_info */ 11:
                    message.info = {
                        oneofKind: "flowerInfo",
                        flowerInfo: SceneGalleryFlowerInfo_1.SceneGalleryFlowerInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.flowerInfo)
                    };
                    break;
                case /* SceneGalleryBulletInfo bullet_info */ 12:
                    message.info = {
                        oneofKind: "bulletInfo",
                        bulletInfo: SceneGalleryBulletInfo_1.SceneGalleryBulletInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.bulletInfo)
                    };
                    break;
                case /* SceneGalleryBrokenFloorInfo broken_floor_info */ 6:
                    message.info = {
                        oneofKind: "brokenFloorInfo",
                        brokenFloorInfo: SceneGalleryBrokenFloorInfo_1.SceneGalleryBrokenFloorInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.brokenFloorInfo)
                    };
                    break;
                case /* SceneGalleryHideAndSeekInfo hide_and_seek_info */ 13:
                    message.info = {
                        oneofKind: "hideAndSeekInfo",
                        hideAndSeekInfo: SceneGalleryHideAndSeekInfo_1.SceneGalleryHideAndSeekInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.hideAndSeekInfo)
                    };
                    break;
                case /* SceneGalleryBuoyantCombatInfo buoyant_combat_info */ 1224:
                    message.info = {
                        oneofKind: "buoyantCombatInfo",
                        buoyantCombatInfo: SceneGalleryBuoyantCombatInfo_1.SceneGalleryBuoyantCombatInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.buoyantCombatInfo)
                    };
                    break;
                case /* SceneGalleryBounceConjuringInfo bounce_conjuring_info */ 621:
                    message.info = {
                        oneofKind: "bounceConjuringInfo",
                        bounceConjuringInfo: SceneGalleryBounceConjuringInfo_1.SceneGalleryBounceConjuringInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.bounceConjuringInfo)
                    };
                    break;
                case /* SceneGalleryHandballInfo handball_info */ 1835:
                    message.info = {
                        oneofKind: "handballInfo",
                        handballInfo: SceneGalleryHandballInfo_1.SceneGalleryHandballInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.handballInfo)
                    };
                    break;
                case /* SceneGallerySumoInfo sumo_info */ 877:
                    message.info = {
                        oneofKind: "sumoInfo",
                        sumoInfo: SceneGallerySumoInfo_1.SceneGallerySumoInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.sumoInfo)
                    };
                    break;
                case /* SceneGallerySalvagePreventInfo salvage_prevent_info */ 1477:
                    message.info = {
                        oneofKind: "salvagePreventInfo",
                        salvagePreventInfo: SceneGallerySalvagePreventInfo_1.SceneGallerySalvagePreventInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.salvagePreventInfo)
                    };
                    break;
                case /* SceneGallerySalvageEscortInfo salvage_escort_info */ 732:
                    message.info = {
                        oneofKind: "salvageEscortInfo",
                        salvageEscortInfo: SceneGallerySalvageEscortInfo_1.SceneGallerySalvageEscortInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.salvageEscortInfo)
                    };
                    break;
                case /* SceneGalleryHomeBalloonInfo home_balloon_info */ 1866:
                    message.info = {
                        oneofKind: "homeBalloonInfo",
                        homeBalloonInfo: SceneGalleryHomeBalloonInfo_1.SceneGalleryHomeBalloonInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.homeBalloonInfo)
                    };
                    break;
                case /* SceneGalleryCrystalLinkInfo crystal_link_info */ 666:
                    message.info = {
                        oneofKind: "crystalLinkInfo",
                        crystalLinkInfo: SceneGalleryCrystalLinkInfo_1.SceneGalleryCrystalLinkInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.crystalLinkInfo)
                    };
                    break;
                case /* SceneGalleryIrodoriMasterInfo irodori_master_info */ 1679:
                    message.info = {
                        oneofKind: "irodoriMasterInfo",
                        irodoriMasterInfo: SceneGalleryIrodoriMasterInfo_1.SceneGalleryIrodoriMasterInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.irodoriMasterInfo)
                    };
                    break;
                case /* SceneGalleryLuminanceStoneChallengeInfo luminance_stone_challenge_info */ 1847:
                    message.info = {
                        oneofKind: "luminanceStoneChallengeInfo",
                        luminanceStoneChallengeInfo: SceneGalleryLuminanceStoneChallengeInfo_1.SceneGalleryLuminanceStoneChallengeInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.luminanceStoneChallengeInfo)
                    };
                    break;
                case /* SceneGalleryHomeSeekFurnitureInfo home_seek_furniture_info */ 540:
                    message.info = {
                        oneofKind: "homeSeekFurnitureInfo",
                        homeSeekFurnitureInfo: SceneGalleryHomeSeekFurnitureInfo_1.SceneGalleryHomeSeekFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.homeSeekFurnitureInfo)
                    };
                    break;
                case /* SceneGalleryIslandPartyDownHillInfo island_party_down_hill_info */ 2047:
                    message.info = {
                        oneofKind: "islandPartyDownHillInfo",
                        islandPartyDownHillInfo: SceneGalleryIslandPartyDownHillInfo_1.SceneGalleryIslandPartyDownHillInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.islandPartyDownHillInfo)
                    };
                    break;
                case /* SceneGallerySummerTimeV2BoatInfo summer_time_v2_boat_info */ 1890:
                    message.info = {
                        oneofKind: "summerTimeV2BoatInfo",
                        summerTimeV2BoatInfo: SceneGallerySummerTimeV2BoatInfo_1.SceneGallerySummerTimeV2BoatInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.summerTimeV2BoatInfo)
                    };
                    break;
                case /* SceneGalleryIslandPartyRaftInfo island_party_raft_info */ 244:
                    message.info = {
                        oneofKind: "islandPartyRaftInfo",
                        islandPartyRaftInfo: SceneGalleryIslandPartyRaftInfo_1.SceneGalleryIslandPartyRaftInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.islandPartyRaftInfo)
                    };
                    break;
                case /* SceneGalleryIslandPartySailInfo island_party_sail_info */ 633:
                    message.info = {
                        oneofKind: "islandPartySailInfo",
                        islandPartySailInfo: SceneGalleryIslandPartySailInfo_1.SceneGalleryIslandPartySailInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.islandPartySailInfo)
                    };
                    break;
                case /* SceneGalleryInstableSprayInfo instable_spray_info */ 75:
                    message.info = {
                        oneofKind: "instableSprayInfo",
                        instableSprayInfo: SceneGalleryInstableSprayInfo_1.SceneGalleryInstableSprayInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.instableSprayInfo)
                    };
                    break;
                case /* SceneGalleryMuqadasPotionInfo muqadas_potion_info */ 496:
                    message.info = {
                        oneofKind: "muqadasPotionInfo",
                        muqadasPotionInfo: SceneGalleryMuqadasPotionInfo_1.SceneGalleryMuqadasPotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.muqadasPotionInfo)
                    };
                    break;
                case /* SceneGalleryTreasureSeelieInfo treasure_seelie_info */ 16:
                    message.info = {
                        oneofKind: "treasureSeelieInfo",
                        treasureSeelieInfo: SceneGalleryTreasureSeelieInfo_1.SceneGalleryTreasureSeelieInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.treasureSeelieInfo)
                    };
                    break;
                case /* SceneGalleryVintageHuntingInfo vintage_hunting_info */ 1470:
                    message.info = {
                        oneofKind: "vintageHuntingInfo",
                        vintageHuntingInfo: SceneGalleryVintageHuntingInfo_1.SceneGalleryVintageHuntingInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.vintageHuntingInfo)
                    };
                    break;
                case /* SceneGalleryWindFieldInfo wind_field_info */ 1001:
                    message.info = {
                        oneofKind: "windFieldInfo",
                        windFieldInfo: SceneGalleryWindFieldInfo_1.SceneGalleryWindFieldInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.windFieldInfo)
                    };
                    break;
                case /* SceneGalleryFungusFighterTrainingInfo fungus_fighter_training_info */ 861:
                    message.info = {
                        oneofKind: "fungusFighterTrainingInfo",
                        fungusFighterTrainingInfo: SceneGalleryFungusFighterTrainingInfo_1.SceneGalleryFungusFighterTrainingInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.fungusFighterTrainingInfo)
                    };
                    break;
                case /* SceneGalleryEffigyChallengeV2Info effigy_challenge_info */ 1577:
                    message.info = {
                        oneofKind: "effigyChallengeInfo",
                        effigyChallengeInfo: SceneGalleryEffigyChallengeV2Info_1.SceneGalleryEffigyChallengeV2Info.internalBinaryRead(reader, reader.uint32(), options, message.info.effigyChallengeInfo)
                    };
                    break;
                case /* SceneGalleryFungusFighterCaptureInfo fungus_fighter_capture_info */ 711:
                    message.info = {
                        oneofKind: "fungusFighterCaptureInfo",
                        fungusFighterCaptureInfo: SceneGalleryFungusFighterCaptureInfo_1.SceneGalleryFungusFighterCaptureInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.fungusFighterCaptureInfo)
                    };
                    break;
                case /* SceneGalleryCharAmusementInfo char_amusement_info */ 152:
                    message.info = {
                        oneofKind: "charAmusementInfo",
                        charAmusementInfo: SceneGalleryCharAmusementInfo_1.SceneGalleryCharAmusementInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.charAmusementInfo)
                    };
                    break;
                case /* SceneGalleryCoinCollectInfo coin_collect_info */ 1243:
                    message.info = {
                        oneofKind: "coinCollectInfo",
                        coinCollectInfo: SceneGalleryCoinCollectInfo_1.SceneGalleryCoinCollectInfo.internalBinaryRead(reader, reader.uint32(), options, message.info.coinCollectInfo)
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
        /* uint32 pre_start_end_time = 14; */
        if (message.preStartEndTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.preStartEndTime);
        /* uint32 owner_uid = 9; */
        if (message.ownerUid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* repeated SceneGalleryProgressInfo progress_info_list = 10; */
        for (let i = 0; i < message.progressInfoList.length; i++)
            SceneGalleryProgressInfo_1.SceneGalleryProgressInfo.internalBinaryWrite(message.progressInfoList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gallery_id = 4; */
        if (message.galleryId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 start_time = 3; */
        if (message.startTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.startTime);
        /* uint32 player_count = 15; */
        if (message.playerCount !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.playerCount);
        /* uint32 end_time = 1; */
        if (message.endTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.endTime);
        /* GalleryStageType stage = 8; */
        if (message.stage !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.stage);
        /* SceneGalleryBalloonInfo balloon_info = 5; */
        if (message.info.oneofKind === "balloonInfo")
            SceneGalleryBalloonInfo_1.SceneGalleryBalloonInfo.internalBinaryWrite(message.info.balloonInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryFallInfo fall_info = 7; */
        if (message.info.oneofKind === "fallInfo")
            SceneGalleryFallInfo_1.SceneGalleryFallInfo.internalBinaryWrite(message.info.fallInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryFlowerInfo flower_info = 11; */
        if (message.info.oneofKind === "flowerInfo")
            SceneGalleryFlowerInfo_1.SceneGalleryFlowerInfo.internalBinaryWrite(message.info.flowerInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryBulletInfo bullet_info = 12; */
        if (message.info.oneofKind === "bulletInfo")
            SceneGalleryBulletInfo_1.SceneGalleryBulletInfo.internalBinaryWrite(message.info.bulletInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryBrokenFloorInfo broken_floor_info = 6; */
        if (message.info.oneofKind === "brokenFloorInfo")
            SceneGalleryBrokenFloorInfo_1.SceneGalleryBrokenFloorInfo.internalBinaryWrite(message.info.brokenFloorInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryHideAndSeekInfo hide_and_seek_info = 13; */
        if (message.info.oneofKind === "hideAndSeekInfo")
            SceneGalleryHideAndSeekInfo_1.SceneGalleryHideAndSeekInfo.internalBinaryWrite(message.info.hideAndSeekInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryBuoyantCombatInfo buoyant_combat_info = 1224; */
        if (message.info.oneofKind === "buoyantCombatInfo")
            SceneGalleryBuoyantCombatInfo_1.SceneGalleryBuoyantCombatInfo.internalBinaryWrite(message.info.buoyantCombatInfo, writer.tag(1224, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryBounceConjuringInfo bounce_conjuring_info = 621; */
        if (message.info.oneofKind === "bounceConjuringInfo")
            SceneGalleryBounceConjuringInfo_1.SceneGalleryBounceConjuringInfo.internalBinaryWrite(message.info.bounceConjuringInfo, writer.tag(621, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryHandballInfo handball_info = 1835; */
        if (message.info.oneofKind === "handballInfo")
            SceneGalleryHandballInfo_1.SceneGalleryHandballInfo.internalBinaryWrite(message.info.handballInfo, writer.tag(1835, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGallerySumoInfo sumo_info = 877; */
        if (message.info.oneofKind === "sumoInfo")
            SceneGallerySumoInfo_1.SceneGallerySumoInfo.internalBinaryWrite(message.info.sumoInfo, writer.tag(877, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGallerySalvagePreventInfo salvage_prevent_info = 1477; */
        if (message.info.oneofKind === "salvagePreventInfo")
            SceneGallerySalvagePreventInfo_1.SceneGallerySalvagePreventInfo.internalBinaryWrite(message.info.salvagePreventInfo, writer.tag(1477, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGallerySalvageEscortInfo salvage_escort_info = 732; */
        if (message.info.oneofKind === "salvageEscortInfo")
            SceneGallerySalvageEscortInfo_1.SceneGallerySalvageEscortInfo.internalBinaryWrite(message.info.salvageEscortInfo, writer.tag(732, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryHomeBalloonInfo home_balloon_info = 1866; */
        if (message.info.oneofKind === "homeBalloonInfo")
            SceneGalleryHomeBalloonInfo_1.SceneGalleryHomeBalloonInfo.internalBinaryWrite(message.info.homeBalloonInfo, writer.tag(1866, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryCrystalLinkInfo crystal_link_info = 666; */
        if (message.info.oneofKind === "crystalLinkInfo")
            SceneGalleryCrystalLinkInfo_1.SceneGalleryCrystalLinkInfo.internalBinaryWrite(message.info.crystalLinkInfo, writer.tag(666, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryIrodoriMasterInfo irodori_master_info = 1679; */
        if (message.info.oneofKind === "irodoriMasterInfo")
            SceneGalleryIrodoriMasterInfo_1.SceneGalleryIrodoriMasterInfo.internalBinaryWrite(message.info.irodoriMasterInfo, writer.tag(1679, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryLuminanceStoneChallengeInfo luminance_stone_challenge_info = 1847; */
        if (message.info.oneofKind === "luminanceStoneChallengeInfo")
            SceneGalleryLuminanceStoneChallengeInfo_1.SceneGalleryLuminanceStoneChallengeInfo.internalBinaryWrite(message.info.luminanceStoneChallengeInfo, writer.tag(1847, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryHomeSeekFurnitureInfo home_seek_furniture_info = 540; */
        if (message.info.oneofKind === "homeSeekFurnitureInfo")
            SceneGalleryHomeSeekFurnitureInfo_1.SceneGalleryHomeSeekFurnitureInfo.internalBinaryWrite(message.info.homeSeekFurnitureInfo, writer.tag(540, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryIslandPartyDownHillInfo island_party_down_hill_info = 2047; */
        if (message.info.oneofKind === "islandPartyDownHillInfo")
            SceneGalleryIslandPartyDownHillInfo_1.SceneGalleryIslandPartyDownHillInfo.internalBinaryWrite(message.info.islandPartyDownHillInfo, writer.tag(2047, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGallerySummerTimeV2BoatInfo summer_time_v2_boat_info = 1890; */
        if (message.info.oneofKind === "summerTimeV2BoatInfo")
            SceneGallerySummerTimeV2BoatInfo_1.SceneGallerySummerTimeV2BoatInfo.internalBinaryWrite(message.info.summerTimeV2BoatInfo, writer.tag(1890, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryIslandPartyRaftInfo island_party_raft_info = 244; */
        if (message.info.oneofKind === "islandPartyRaftInfo")
            SceneGalleryIslandPartyRaftInfo_1.SceneGalleryIslandPartyRaftInfo.internalBinaryWrite(message.info.islandPartyRaftInfo, writer.tag(244, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryIslandPartySailInfo island_party_sail_info = 633; */
        if (message.info.oneofKind === "islandPartySailInfo")
            SceneGalleryIslandPartySailInfo_1.SceneGalleryIslandPartySailInfo.internalBinaryWrite(message.info.islandPartySailInfo, writer.tag(633, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryInstableSprayInfo instable_spray_info = 75; */
        if (message.info.oneofKind === "instableSprayInfo")
            SceneGalleryInstableSprayInfo_1.SceneGalleryInstableSprayInfo.internalBinaryWrite(message.info.instableSprayInfo, writer.tag(75, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryMuqadasPotionInfo muqadas_potion_info = 496; */
        if (message.info.oneofKind === "muqadasPotionInfo")
            SceneGalleryMuqadasPotionInfo_1.SceneGalleryMuqadasPotionInfo.internalBinaryWrite(message.info.muqadasPotionInfo, writer.tag(496, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryTreasureSeelieInfo treasure_seelie_info = 16; */
        if (message.info.oneofKind === "treasureSeelieInfo")
            SceneGalleryTreasureSeelieInfo_1.SceneGalleryTreasureSeelieInfo.internalBinaryWrite(message.info.treasureSeelieInfo, writer.tag(16, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryVintageHuntingInfo vintage_hunting_info = 1470; */
        if (message.info.oneofKind === "vintageHuntingInfo")
            SceneGalleryVintageHuntingInfo_1.SceneGalleryVintageHuntingInfo.internalBinaryWrite(message.info.vintageHuntingInfo, writer.tag(1470, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryWindFieldInfo wind_field_info = 1001; */
        if (message.info.oneofKind === "windFieldInfo")
            SceneGalleryWindFieldInfo_1.SceneGalleryWindFieldInfo.internalBinaryWrite(message.info.windFieldInfo, writer.tag(1001, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryFungusFighterTrainingInfo fungus_fighter_training_info = 861; */
        if (message.info.oneofKind === "fungusFighterTrainingInfo")
            SceneGalleryFungusFighterTrainingInfo_1.SceneGalleryFungusFighterTrainingInfo.internalBinaryWrite(message.info.fungusFighterTrainingInfo, writer.tag(861, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryEffigyChallengeV2Info effigy_challenge_info = 1577; */
        if (message.info.oneofKind === "effigyChallengeInfo")
            SceneGalleryEffigyChallengeV2Info_1.SceneGalleryEffigyChallengeV2Info.internalBinaryWrite(message.info.effigyChallengeInfo, writer.tag(1577, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryFungusFighterCaptureInfo fungus_fighter_capture_info = 711; */
        if (message.info.oneofKind === "fungusFighterCaptureInfo")
            SceneGalleryFungusFighterCaptureInfo_1.SceneGalleryFungusFighterCaptureInfo.internalBinaryWrite(message.info.fungusFighterCaptureInfo, writer.tag(711, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryCharAmusementInfo char_amusement_info = 152; */
        if (message.info.oneofKind === "charAmusementInfo")
            SceneGalleryCharAmusementInfo_1.SceneGalleryCharAmusementInfo.internalBinaryWrite(message.info.charAmusementInfo, writer.tag(152, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGalleryCoinCollectInfo coin_collect_info = 1243; */
        if (message.info.oneofKind === "coinCollectInfo")
            SceneGalleryCoinCollectInfo_1.SceneGalleryCoinCollectInfo.internalBinaryWrite(message.info.coinCollectInfo, writer.tag(1243, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryInfo
 */
exports.SceneGalleryInfo = new SceneGalleryInfo$Type();
