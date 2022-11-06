"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicusCandidateTeamCreateRsp = exports.MechanicusCandidateTeamCreateReq = exports.EnterMechanicusDungeonRsp = exports.EnterMechanicusDungeonReq = exports.MechanicusLevelupGearRsp = exports.MechanicusLevelupGearReq = exports.MechanicusUnlockGearRsp = exports.MechanicusUnlockGearReq = exports.MechanicusCloseNotify = exports.MechanicusOpenNotify = exports.MechanicusCoinNotify = exports.MechanicusSequenceOpenNotify = exports.GetMechanicusInfoRsp = exports.GetMechanicusInfoReq = exports.MechanicusInfo = exports.MechanicusCandidateTeamCreateRsp_CmdId = exports.MechanicusCandidateTeamCreateReq_CmdId = exports.EnterMechanicusDungeonRsp_CmdId = exports.EnterMechanicusDungeonReq_CmdId = exports.MechanicusLevelupGearRsp_CmdId = exports.MechanicusLevelupGearReq_CmdId = exports.MechanicusUnlockGearRsp_CmdId = exports.MechanicusUnlockGearReq_CmdId = exports.MechanicusCloseNotify_CmdId = exports.MechanicusOpenNotify_CmdId = exports.MechanicusCoinNotify_CmdId = exports.MechanicusSequenceOpenNotify_CmdId = exports.GetMechanicusInfoRsp_CmdId = exports.GetMechanicusInfoReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GetMechanicusInfoReq.CmdId
 */
var GetMechanicusInfoReq_CmdId;
(function (GetMechanicusInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMechanicusInfoReq_CmdId[GetMechanicusInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3972;
     */
    GetMechanicusInfoReq_CmdId[GetMechanicusInfoReq_CmdId["CMD_ID"] = 3972] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMechanicusInfoReq_CmdId[GetMechanicusInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMechanicusInfoReq_CmdId[GetMechanicusInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMechanicusInfoReq_CmdId[GetMechanicusInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetMechanicusInfoReq_CmdId = exports.GetMechanicusInfoReq_CmdId || (exports.GetMechanicusInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMechanicusInfoRsp.CmdId
 */
var GetMechanicusInfoRsp_CmdId;
(function (GetMechanicusInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMechanicusInfoRsp_CmdId[GetMechanicusInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3998;
     */
    GetMechanicusInfoRsp_CmdId[GetMechanicusInfoRsp_CmdId["CMD_ID"] = 3998] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMechanicusInfoRsp_CmdId[GetMechanicusInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMechanicusInfoRsp_CmdId[GetMechanicusInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetMechanicusInfoRsp_CmdId = exports.GetMechanicusInfoRsp_CmdId || (exports.GetMechanicusInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusSequenceOpenNotify.CmdId
 */
var MechanicusSequenceOpenNotify_CmdId;
(function (MechanicusSequenceOpenNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusSequenceOpenNotify_CmdId[MechanicusSequenceOpenNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3912;
     */
    MechanicusSequenceOpenNotify_CmdId[MechanicusSequenceOpenNotify_CmdId["CMD_ID"] = 3912] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusSequenceOpenNotify_CmdId[MechanicusSequenceOpenNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusSequenceOpenNotify_CmdId[MechanicusSequenceOpenNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusSequenceOpenNotify_CmdId = exports.MechanicusSequenceOpenNotify_CmdId || (exports.MechanicusSequenceOpenNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusCoinNotify.CmdId
 */
var MechanicusCoinNotify_CmdId;
(function (MechanicusCoinNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCoinNotify_CmdId[MechanicusCoinNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3935;
     */
    MechanicusCoinNotify_CmdId[MechanicusCoinNotify_CmdId["CMD_ID"] = 3935] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCoinNotify_CmdId[MechanicusCoinNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusCoinNotify_CmdId[MechanicusCoinNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusCoinNotify_CmdId = exports.MechanicusCoinNotify_CmdId || (exports.MechanicusCoinNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusOpenNotify.CmdId
 */
var MechanicusOpenNotify_CmdId;
(function (MechanicusOpenNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusOpenNotify_CmdId[MechanicusOpenNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3907;
     */
    MechanicusOpenNotify_CmdId[MechanicusOpenNotify_CmdId["CMD_ID"] = 3907] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusOpenNotify_CmdId[MechanicusOpenNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusOpenNotify_CmdId[MechanicusOpenNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusOpenNotify_CmdId = exports.MechanicusOpenNotify_CmdId || (exports.MechanicusOpenNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusCloseNotify.CmdId
 */
var MechanicusCloseNotify_CmdId;
(function (MechanicusCloseNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCloseNotify_CmdId[MechanicusCloseNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3921;
     */
    MechanicusCloseNotify_CmdId[MechanicusCloseNotify_CmdId["CMD_ID"] = 3921] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCloseNotify_CmdId[MechanicusCloseNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusCloseNotify_CmdId[MechanicusCloseNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusCloseNotify_CmdId = exports.MechanicusCloseNotify_CmdId || (exports.MechanicusCloseNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusUnlockGearReq.CmdId
 */
var MechanicusUnlockGearReq_CmdId;
(function (MechanicusUnlockGearReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusUnlockGearReq_CmdId[MechanicusUnlockGearReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3903;
     */
    MechanicusUnlockGearReq_CmdId[MechanicusUnlockGearReq_CmdId["CMD_ID"] = 3903] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusUnlockGearReq_CmdId[MechanicusUnlockGearReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusUnlockGearReq_CmdId[MechanicusUnlockGearReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusUnlockGearReq_CmdId[MechanicusUnlockGearReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MechanicusUnlockGearReq_CmdId = exports.MechanicusUnlockGearReq_CmdId || (exports.MechanicusUnlockGearReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusUnlockGearRsp.CmdId
 */
var MechanicusUnlockGearRsp_CmdId;
(function (MechanicusUnlockGearRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusUnlockGearRsp_CmdId[MechanicusUnlockGearRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3990;
     */
    MechanicusUnlockGearRsp_CmdId[MechanicusUnlockGearRsp_CmdId["CMD_ID"] = 3990] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusUnlockGearRsp_CmdId[MechanicusUnlockGearRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusUnlockGearRsp_CmdId[MechanicusUnlockGearRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusUnlockGearRsp_CmdId = exports.MechanicusUnlockGearRsp_CmdId || (exports.MechanicusUnlockGearRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusLevelupGearReq.CmdId
 */
var MechanicusLevelupGearReq_CmdId;
(function (MechanicusLevelupGearReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusLevelupGearReq_CmdId[MechanicusLevelupGearReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3973;
     */
    MechanicusLevelupGearReq_CmdId[MechanicusLevelupGearReq_CmdId["CMD_ID"] = 3973] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusLevelupGearReq_CmdId[MechanicusLevelupGearReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusLevelupGearReq_CmdId[MechanicusLevelupGearReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusLevelupGearReq_CmdId[MechanicusLevelupGearReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MechanicusLevelupGearReq_CmdId = exports.MechanicusLevelupGearReq_CmdId || (exports.MechanicusLevelupGearReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusLevelupGearRsp.CmdId
 */
var MechanicusLevelupGearRsp_CmdId;
(function (MechanicusLevelupGearRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusLevelupGearRsp_CmdId[MechanicusLevelupGearRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3999;
     */
    MechanicusLevelupGearRsp_CmdId[MechanicusLevelupGearRsp_CmdId["CMD_ID"] = 3999] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusLevelupGearRsp_CmdId[MechanicusLevelupGearRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusLevelupGearRsp_CmdId[MechanicusLevelupGearRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusLevelupGearRsp_CmdId = exports.MechanicusLevelupGearRsp_CmdId || (exports.MechanicusLevelupGearRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterMechanicusDungeonReq.CmdId
 */
var EnterMechanicusDungeonReq_CmdId;
(function (EnterMechanicusDungeonReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterMechanicusDungeonReq_CmdId[EnterMechanicusDungeonReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3931;
     */
    EnterMechanicusDungeonReq_CmdId[EnterMechanicusDungeonReq_CmdId["CMD_ID"] = 3931] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterMechanicusDungeonReq_CmdId[EnterMechanicusDungeonReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterMechanicusDungeonReq_CmdId[EnterMechanicusDungeonReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterMechanicusDungeonReq_CmdId[EnterMechanicusDungeonReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(EnterMechanicusDungeonReq_CmdId = exports.EnterMechanicusDungeonReq_CmdId || (exports.EnterMechanicusDungeonReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EnterMechanicusDungeonRsp.CmdId
 */
var EnterMechanicusDungeonRsp_CmdId;
(function (EnterMechanicusDungeonRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterMechanicusDungeonRsp_CmdId[EnterMechanicusDungeonRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3975;
     */
    EnterMechanicusDungeonRsp_CmdId[EnterMechanicusDungeonRsp_CmdId["CMD_ID"] = 3975] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EnterMechanicusDungeonRsp_CmdId[EnterMechanicusDungeonRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EnterMechanicusDungeonRsp_CmdId[EnterMechanicusDungeonRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EnterMechanicusDungeonRsp_CmdId = exports.EnterMechanicusDungeonRsp_CmdId || (exports.EnterMechanicusDungeonRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusCandidateTeamCreateReq.CmdId
 */
var MechanicusCandidateTeamCreateReq_CmdId;
(function (MechanicusCandidateTeamCreateReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCandidateTeamCreateReq_CmdId[MechanicusCandidateTeamCreateReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3981;
     */
    MechanicusCandidateTeamCreateReq_CmdId[MechanicusCandidateTeamCreateReq_CmdId["CMD_ID"] = 3981] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCandidateTeamCreateReq_CmdId[MechanicusCandidateTeamCreateReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusCandidateTeamCreateReq_CmdId[MechanicusCandidateTeamCreateReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusCandidateTeamCreateReq_CmdId[MechanicusCandidateTeamCreateReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MechanicusCandidateTeamCreateReq_CmdId = exports.MechanicusCandidateTeamCreateReq_CmdId || (exports.MechanicusCandidateTeamCreateReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MechanicusCandidateTeamCreateRsp.CmdId
 */
var MechanicusCandidateTeamCreateRsp_CmdId;
(function (MechanicusCandidateTeamCreateRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCandidateTeamCreateRsp_CmdId[MechanicusCandidateTeamCreateRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3905;
     */
    MechanicusCandidateTeamCreateRsp_CmdId[MechanicusCandidateTeamCreateRsp_CmdId["CMD_ID"] = 3905] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MechanicusCandidateTeamCreateRsp_CmdId[MechanicusCandidateTeamCreateRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MechanicusCandidateTeamCreateRsp_CmdId[MechanicusCandidateTeamCreateRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MechanicusCandidateTeamCreateRsp_CmdId = exports.MechanicusCandidateTeamCreateRsp_CmdId || (exports.MechanicusCandidateTeamCreateRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusInfo", [
            { no: 14, name: "gear_level_pair_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.Uint32Pair },
            { no: 7, name: "open_sequence_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "punish_over_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "finish_difficult_level_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_finish_teach_dungeon", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { gearLevelPairList: [], openSequenceIdList: [], finishDifficultLevelList: [] };
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
                case /* repeated com.midnights.game.Uint32Pair gear_level_pair_list */ 14:
                    message.gearLevelPairList.push(define_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 open_sequence_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openSequenceIdList.push(reader.uint32());
                    else
                        message.openSequenceIdList.push(reader.uint32());
                    break;
                case /* optional uint32 coin */ 8:
                    message.coin = reader.uint32();
                    break;
                case /* optional uint32 punish_over_time */ 12:
                    message.punishOverTime = reader.uint32();
                    break;
                case /* optional uint32 mechanicus_id */ 10:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* repeated uint32 finish_difficult_level_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishDifficultLevelList.push(reader.uint32());
                    else
                        message.finishDifficultLevelList.push(reader.uint32());
                    break;
                case /* optional bool is_finish_teach_dungeon */ 4:
                    message.isFinishTeachDungeon = reader.bool();
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
        /* repeated com.midnights.game.Uint32Pair gear_level_pair_list = 14; */
        for (let i = 0; i < message.gearLevelPairList.length; i++)
            define_1.Uint32Pair.internalBinaryWrite(message.gearLevelPairList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 open_sequence_id_list = 7; */
        for (let i = 0; i < message.openSequenceIdList.length; i++)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.openSequenceIdList[i]);
        /* optional uint32 coin = 8; */
        if (message.coin !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.coin);
        /* optional uint32 punish_over_time = 12; */
        if (message.punishOverTime !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.punishOverTime);
        /* optional uint32 mechanicus_id = 10; */
        if (message.mechanicusId !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* repeated uint32 finish_difficult_level_list = 13; */
        for (let i = 0; i < message.finishDifficultLevelList.length; i++)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.finishDifficultLevelList[i]);
        /* optional bool is_finish_teach_dungeon = 4; */
        if (message.isFinishTeachDungeon !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isFinishTeachDungeon);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusInfo
 */
exports.MechanicusInfo = new MechanicusInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMechanicusInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMechanicusInfoReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetMechanicusInfoReq
 */
exports.GetMechanicusInfoReq = new GetMechanicusInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMechanicusInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMechanicusInfoRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "mechanicus_info", kind: "message", T: () => exports.MechanicusInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.MechanicusInfo mechanicus_info */ 15:
                    message.mechanicusInfo = exports.MechanicusInfo.internalBinaryRead(reader, reader.uint32(), options, message.mechanicusInfo);
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
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.MechanicusInfo mechanicus_info = 15; */
        if (message.mechanicusInfo)
            exports.MechanicusInfo.internalBinaryWrite(message.mechanicusInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetMechanicusInfoRsp
 */
exports.GetMechanicusInfoRsp = new GetMechanicusInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusSequenceOpenNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusSequenceOpenNotify", [
            { no: 8, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "sequence_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 mechanicus_id */ 8:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* optional uint32 sequence_id */ 7:
                    message.sequenceId = reader.uint32();
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
        /* optional uint32 mechanicus_id = 8; */
        if (message.mechanicusId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* optional uint32 sequence_id = 7; */
        if (message.sequenceId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.sequenceId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusSequenceOpenNotify
 */
exports.MechanicusSequenceOpenNotify = new MechanicusSequenceOpenNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusCoinNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusCoinNotify", [
            { no: 7, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "coin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 mechanicus_id */ 7:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* optional uint32 coin */ 4:
                    message.coin = reader.uint32();
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
        /* optional uint32 mechanicus_id = 7; */
        if (message.mechanicusId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* optional uint32 coin = 4; */
        if (message.coin !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusCoinNotify
 */
exports.MechanicusCoinNotify = new MechanicusCoinNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusOpenNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusOpenNotify", [
            { no: 2, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 mechanicus_id */ 2:
                    message.mechanicusId = reader.uint32();
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
        /* optional uint32 mechanicus_id = 2; */
        if (message.mechanicusId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusOpenNotify
 */
exports.MechanicusOpenNotify = new MechanicusOpenNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusCloseNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusCloseNotify", [
            { no: 6, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 mechanicus_id */ 6:
                    message.mechanicusId = reader.uint32();
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
        /* optional uint32 mechanicus_id = 6; */
        if (message.mechanicusId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusCloseNotify
 */
exports.MechanicusCloseNotify = new MechanicusCloseNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusUnlockGearReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusUnlockGearReq", [
            { no: 7, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "gear_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 mechanicus_id */ 7:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* optional uint32 gear_id */ 6:
                    message.gearId = reader.uint32();
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
        /* optional uint32 mechanicus_id = 7; */
        if (message.mechanicusId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* optional uint32 gear_id = 6; */
        if (message.gearId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.gearId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusUnlockGearReq
 */
exports.MechanicusUnlockGearReq = new MechanicusUnlockGearReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusUnlockGearRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusUnlockGearRsp", [
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gear_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 mechanicus_id */ 8:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* optional uint32 gear_id */ 14:
                    message.gearId = reader.uint32();
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
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 mechanicus_id = 8; */
        if (message.mechanicusId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* optional uint32 gear_id = 14; */
        if (message.gearId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.gearId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusUnlockGearRsp
 */
exports.MechanicusUnlockGearRsp = new MechanicusUnlockGearRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusLevelupGearReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusLevelupGearReq", [
            { no: 14, name: "gear_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 gear_id */ 14:
                    message.gearId = reader.uint32();
                    break;
                case /* optional uint32 mechanicus_id */ 12:
                    message.mechanicusId = reader.uint32();
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
        /* optional uint32 gear_id = 14; */
        if (message.gearId !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.gearId);
        /* optional uint32 mechanicus_id = 12; */
        if (message.mechanicusId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusLevelupGearReq
 */
exports.MechanicusLevelupGearReq = new MechanicusLevelupGearReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusLevelupGearRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusLevelupGearRsp", [
            { no: 7, name: "gear_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "mechanicus_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "after_gear_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 gear_id */ 7:
                    message.gearId = reader.uint32();
                    break;
                case /* optional uint32 mechanicus_id */ 2:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* optional uint32 after_gear_level */ 12:
                    message.afterGearLevel = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
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
        /* optional uint32 gear_id = 7; */
        if (message.gearId !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.gearId);
        /* optional uint32 mechanicus_id = 2; */
        if (message.mechanicusId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* optional uint32 after_gear_level = 12; */
        if (message.afterGearLevel !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.afterGearLevel);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusLevelupGearRsp
 */
exports.MechanicusLevelupGearRsp = new MechanicusLevelupGearRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterMechanicusDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterMechanicusDungeonReq", [
            { no: 7, name: "difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 difficult_level */ 7:
                    message.difficultLevel = reader.uint32();
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
        /* optional uint32 difficult_level = 7; */
        if (message.difficultLevel !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.difficultLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterMechanicusDungeonReq
 */
exports.EnterMechanicusDungeonReq = new EnterMechanicusDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterMechanicusDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EnterMechanicusDungeonRsp", [
            { no: 12, name: "wrong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 wrong_uid */ 12:
                    message.wrongUid = reader.uint32();
                    break;
                case /* optional uint32 difficult_level */ 13:
                    message.difficultLevel = reader.uint32();
                    break;
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 dungeon_id */ 11:
                    message.dungeonId = reader.uint32();
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
        /* optional uint32 wrong_uid = 12; */
        if (message.wrongUid !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.wrongUid);
        /* optional uint32 difficult_level = 13; */
        if (message.difficultLevel !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.difficultLevel);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 dungeon_id = 11; */
        if (message.dungeonId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EnterMechanicusDungeonRsp
 */
exports.EnterMechanicusDungeonRsp = new EnterMechanicusDungeonRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusCandidateTeamCreateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusCandidateTeamCreateReq", [
            { no: 6, name: "difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 difficult_level */ 6:
                    message.difficultLevel = reader.uint32();
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
        /* optional uint32 difficult_level = 6; */
        if (message.difficultLevel !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.difficultLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusCandidateTeamCreateReq
 */
exports.MechanicusCandidateTeamCreateReq = new MechanicusCandidateTeamCreateReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusCandidateTeamCreateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MechanicusCandidateTeamCreateRsp", [
            { no: 1, name: "dungeon_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "difficult_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 difficult_level */ 10:
                    message.difficultLevel = reader.uint32();
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
        /* optional uint32 dungeon_id = 1; */
        if (message.dungeonId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 difficult_level = 10; */
        if (message.difficultLevel !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.difficultLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MechanicusCandidateTeamCreateRsp
 */
exports.MechanicusCandidateTeamCreateRsp = new MechanicusCandidateTeamCreateRsp$Type();
