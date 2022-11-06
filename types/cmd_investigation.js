"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestigationReadQuestDailyNotify = exports.InvestigationQuestDailyNotify = exports.InvestigationMonsterUpdateNotify = exports.MarkTargetInvestigationMonsterNotify = exports.PlayerInvestigationTargetNotify = exports.PlayerInvestigationNotify = exports.GetInvestigationMonsterRsp = exports.InvestigationMonster = exports.GetInvestigationMonsterReq = exports.TakeInvestigationTargetRewardRsp = exports.TakeInvestigationTargetRewardReq = exports.TakeInvestigationRewardRsp = exports.TakeInvestigationRewardReq = exports.PlayerInvestigationAllInfoNotify = exports.InvestigationTarget = exports.Investigation = exports.InvestigationReadQuestDailyNotify_CmdId = exports.InvestigationQuestDailyNotify_CmdId = exports.InvestigationMonsterUpdateNotify_CmdId = exports.MarkTargetInvestigationMonsterNotify_CmdId = exports.PlayerInvestigationTargetNotify_CmdId = exports.PlayerInvestigationNotify_CmdId = exports.GetInvestigationMonsterRsp_CmdId = exports.InvestigationMonster_LockState = exports.GetInvestigationMonsterReq_CmdId = exports.TakeInvestigationTargetRewardRsp_CmdId = exports.TakeInvestigationTargetRewardReq_CmdId = exports.TakeInvestigationRewardRsp_CmdId = exports.TakeInvestigationRewardReq_CmdId = exports.PlayerInvestigationAllInfoNotify_CmdId = exports.InvestigationTarget_State = exports.Investigation_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.Investigation.State
 */
var Investigation_State;
(function (Investigation_State) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    Investigation_State[Investigation_State["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: IN_PROGRESS = 1;
     */
    Investigation_State[Investigation_State["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    /**
     * @generated from protobuf enum value: COMPLETE = 2;
     */
    Investigation_State[Investigation_State["COMPLETE"] = 2] = "COMPLETE";
    /**
     * @generated from protobuf enum value: REWARD_TAKEN = 3;
     */
    Investigation_State[Investigation_State["REWARD_TAKEN"] = 3] = "REWARD_TAKEN";
})(Investigation_State = exports.Investigation_State || (exports.Investigation_State = {}));
/**
 * @generated from protobuf enum com.midnights.game.InvestigationTarget.State
 */
var InvestigationTarget_State;
(function (InvestigationTarget_State) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    InvestigationTarget_State[InvestigationTarget_State["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: IN_PROGRESS = 1;
     */
    InvestigationTarget_State[InvestigationTarget_State["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    /**
     * @generated from protobuf enum value: COMPLETE = 2;
     */
    InvestigationTarget_State[InvestigationTarget_State["COMPLETE"] = 2] = "COMPLETE";
    /**
     * @generated from protobuf enum value: REWARD_TAKEN = 3;
     */
    InvestigationTarget_State[InvestigationTarget_State["REWARD_TAKEN"] = 3] = "REWARD_TAKEN";
})(InvestigationTarget_State = exports.InvestigationTarget_State || (exports.InvestigationTarget_State = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerInvestigationAllInfoNotify.CmdId
 */
var PlayerInvestigationAllInfoNotify_CmdId;
(function (PlayerInvestigationAllInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInvestigationAllInfoNotify_CmdId[PlayerInvestigationAllInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1928;
     */
    PlayerInvestigationAllInfoNotify_CmdId[PlayerInvestigationAllInfoNotify_CmdId["CMD_ID"] = 1928] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInvestigationAllInfoNotify_CmdId[PlayerInvestigationAllInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerInvestigationAllInfoNotify_CmdId[PlayerInvestigationAllInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerInvestigationAllInfoNotify_CmdId = exports.PlayerInvestigationAllInfoNotify_CmdId || (exports.PlayerInvestigationAllInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeInvestigationRewardReq.CmdId
 */
var TakeInvestigationRewardReq_CmdId;
(function (TakeInvestigationRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationRewardReq_CmdId[TakeInvestigationRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1912;
     */
    TakeInvestigationRewardReq_CmdId[TakeInvestigationRewardReq_CmdId["CMD_ID"] = 1912] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationRewardReq_CmdId[TakeInvestigationRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeInvestigationRewardReq_CmdId[TakeInvestigationRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeInvestigationRewardReq_CmdId[TakeInvestigationRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeInvestigationRewardReq_CmdId = exports.TakeInvestigationRewardReq_CmdId || (exports.TakeInvestigationRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeInvestigationRewardRsp.CmdId
 */
var TakeInvestigationRewardRsp_CmdId;
(function (TakeInvestigationRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationRewardRsp_CmdId[TakeInvestigationRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1922;
     */
    TakeInvestigationRewardRsp_CmdId[TakeInvestigationRewardRsp_CmdId["CMD_ID"] = 1922] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationRewardRsp_CmdId[TakeInvestigationRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeInvestigationRewardRsp_CmdId[TakeInvestigationRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeInvestigationRewardRsp_CmdId = exports.TakeInvestigationRewardRsp_CmdId || (exports.TakeInvestigationRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeInvestigationTargetRewardReq.CmdId
 */
var TakeInvestigationTargetRewardReq_CmdId;
(function (TakeInvestigationTargetRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationTargetRewardReq_CmdId[TakeInvestigationTargetRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1918;
     */
    TakeInvestigationTargetRewardReq_CmdId[TakeInvestigationTargetRewardReq_CmdId["CMD_ID"] = 1918] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationTargetRewardReq_CmdId[TakeInvestigationTargetRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeInvestigationTargetRewardReq_CmdId[TakeInvestigationTargetRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeInvestigationTargetRewardReq_CmdId[TakeInvestigationTargetRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeInvestigationTargetRewardReq_CmdId = exports.TakeInvestigationTargetRewardReq_CmdId || (exports.TakeInvestigationTargetRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeInvestigationTargetRewardRsp.CmdId
 */
var TakeInvestigationTargetRewardRsp_CmdId;
(function (TakeInvestigationTargetRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationTargetRewardRsp_CmdId[TakeInvestigationTargetRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1916;
     */
    TakeInvestigationTargetRewardRsp_CmdId[TakeInvestigationTargetRewardRsp_CmdId["CMD_ID"] = 1916] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeInvestigationTargetRewardRsp_CmdId[TakeInvestigationTargetRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeInvestigationTargetRewardRsp_CmdId[TakeInvestigationTargetRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeInvestigationTargetRewardRsp_CmdId = exports.TakeInvestigationTargetRewardRsp_CmdId || (exports.TakeInvestigationTargetRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetInvestigationMonsterReq.CmdId
 */
var GetInvestigationMonsterReq_CmdId;
(function (GetInvestigationMonsterReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetInvestigationMonsterReq_CmdId[GetInvestigationMonsterReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1901;
     */
    GetInvestigationMonsterReq_CmdId[GetInvestigationMonsterReq_CmdId["CMD_ID"] = 1901] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetInvestigationMonsterReq_CmdId[GetInvestigationMonsterReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetInvestigationMonsterReq_CmdId[GetInvestigationMonsterReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetInvestigationMonsterReq_CmdId[GetInvestigationMonsterReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetInvestigationMonsterReq_CmdId = exports.GetInvestigationMonsterReq_CmdId || (exports.GetInvestigationMonsterReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InvestigationMonster.LockState
 */
var InvestigationMonster_LockState;
(function (InvestigationMonster_LockState) {
    /**
     * @generated from protobuf enum value: LOCK_NONE = 0;
     */
    InvestigationMonster_LockState[InvestigationMonster_LockState["LOCK_NONE"] = 0] = "LOCK_NONE";
    /**
     * @generated from protobuf enum value: LOCK_QUEST = 1;
     */
    InvestigationMonster_LockState[InvestigationMonster_LockState["LOCK_QUEST"] = 1] = "LOCK_QUEST";
})(InvestigationMonster_LockState = exports.InvestigationMonster_LockState || (exports.InvestigationMonster_LockState = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetInvestigationMonsterRsp.CmdId
 */
var GetInvestigationMonsterRsp_CmdId;
(function (GetInvestigationMonsterRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetInvestigationMonsterRsp_CmdId[GetInvestigationMonsterRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1910;
     */
    GetInvestigationMonsterRsp_CmdId[GetInvestigationMonsterRsp_CmdId["CMD_ID"] = 1910] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetInvestigationMonsterRsp_CmdId[GetInvestigationMonsterRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetInvestigationMonsterRsp_CmdId[GetInvestigationMonsterRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetInvestigationMonsterRsp_CmdId[GetInvestigationMonsterRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetInvestigationMonsterRsp_CmdId = exports.GetInvestigationMonsterRsp_CmdId || (exports.GetInvestigationMonsterRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerInvestigationNotify.CmdId
 */
var PlayerInvestigationNotify_CmdId;
(function (PlayerInvestigationNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInvestigationNotify_CmdId[PlayerInvestigationNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1911;
     */
    PlayerInvestigationNotify_CmdId[PlayerInvestigationNotify_CmdId["CMD_ID"] = 1911] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInvestigationNotify_CmdId[PlayerInvestigationNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerInvestigationNotify_CmdId[PlayerInvestigationNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerInvestigationNotify_CmdId = exports.PlayerInvestigationNotify_CmdId || (exports.PlayerInvestigationNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerInvestigationTargetNotify.CmdId
 */
var PlayerInvestigationTargetNotify_CmdId;
(function (PlayerInvestigationTargetNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInvestigationTargetNotify_CmdId[PlayerInvestigationTargetNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1929;
     */
    PlayerInvestigationTargetNotify_CmdId[PlayerInvestigationTargetNotify_CmdId["CMD_ID"] = 1929] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerInvestigationTargetNotify_CmdId[PlayerInvestigationTargetNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerInvestigationTargetNotify_CmdId[PlayerInvestigationTargetNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerInvestigationTargetNotify_CmdId = exports.PlayerInvestigationTargetNotify_CmdId || (exports.PlayerInvestigationTargetNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkTargetInvestigationMonsterNotify.CmdId
 */
var MarkTargetInvestigationMonsterNotify_CmdId;
(function (MarkTargetInvestigationMonsterNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkTargetInvestigationMonsterNotify_CmdId[MarkTargetInvestigationMonsterNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1915;
     */
    MarkTargetInvestigationMonsterNotify_CmdId[MarkTargetInvestigationMonsterNotify_CmdId["CMD_ID"] = 1915] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkTargetInvestigationMonsterNotify_CmdId[MarkTargetInvestigationMonsterNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkTargetInvestigationMonsterNotify_CmdId[MarkTargetInvestigationMonsterNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkTargetInvestigationMonsterNotify_CmdId[MarkTargetInvestigationMonsterNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MarkTargetInvestigationMonsterNotify_CmdId = exports.MarkTargetInvestigationMonsterNotify_CmdId || (exports.MarkTargetInvestigationMonsterNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InvestigationMonsterUpdateNotify.CmdId
 */
var InvestigationMonsterUpdateNotify_CmdId;
(function (InvestigationMonsterUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InvestigationMonsterUpdateNotify_CmdId[InvestigationMonsterUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1906;
     */
    InvestigationMonsterUpdateNotify_CmdId[InvestigationMonsterUpdateNotify_CmdId["CMD_ID"] = 1906] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InvestigationMonsterUpdateNotify_CmdId[InvestigationMonsterUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InvestigationMonsterUpdateNotify_CmdId[InvestigationMonsterUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InvestigationMonsterUpdateNotify_CmdId = exports.InvestigationMonsterUpdateNotify_CmdId || (exports.InvestigationMonsterUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InvestigationQuestDailyNotify.CmdId
 */
var InvestigationQuestDailyNotify_CmdId;
(function (InvestigationQuestDailyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InvestigationQuestDailyNotify_CmdId[InvestigationQuestDailyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1921;
     */
    InvestigationQuestDailyNotify_CmdId[InvestigationQuestDailyNotify_CmdId["CMD_ID"] = 1921] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InvestigationQuestDailyNotify_CmdId[InvestigationQuestDailyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InvestigationQuestDailyNotify_CmdId[InvestigationQuestDailyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(InvestigationQuestDailyNotify_CmdId = exports.InvestigationQuestDailyNotify_CmdId || (exports.InvestigationQuestDailyNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.InvestigationReadQuestDailyNotify.CmdId
 */
var InvestigationReadQuestDailyNotify_CmdId;
(function (InvestigationReadQuestDailyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InvestigationReadQuestDailyNotify_CmdId[InvestigationReadQuestDailyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1902;
     */
    InvestigationReadQuestDailyNotify_CmdId[InvestigationReadQuestDailyNotify_CmdId["CMD_ID"] = 1902] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    InvestigationReadQuestDailyNotify_CmdId[InvestigationReadQuestDailyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InvestigationReadQuestDailyNotify_CmdId[InvestigationReadQuestDailyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    InvestigationReadQuestDailyNotify_CmdId[InvestigationReadQuestDailyNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(InvestigationReadQuestDailyNotify_CmdId = exports.InvestigationReadQuestDailyNotify_CmdId || (exports.InvestigationReadQuestDailyNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Investigation$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Investigation", [
            { no: 5, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.Investigation.State", Investigation_State] },
            { no: 13, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 total_progress */ 5:
                    message.totalProgress = reader.uint32();
                    break;
                case /* optional com.midnights.game.Investigation.State state */ 2:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 progress */ 13:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 id */ 9:
                    message.id = reader.uint32();
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
        /* optional uint32 total_progress = 5; */
        if (message.totalProgress !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* optional com.midnights.game.Investigation.State state = 2; */
        if (message.state !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.state);
        /* optional uint32 progress = 13; */
        if (message.progress !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 id = 9; */
        if (message.id !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Investigation
 */
exports.Investigation = new Investigation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationTarget$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InvestigationTarget", [
            { no: 15, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "state", kind: "enum", opt: true, T: () => ["com.midnights.game.InvestigationTarget.State", InvestigationTarget_State] },
            { no: 8, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "investigation_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 quest_id */ 15:
                    message.questId = reader.uint32();
                    break;
                case /* optional com.midnights.game.InvestigationTarget.State state */ 2:
                    message.state = reader.int32();
                    break;
                case /* optional uint32 progress */ 8:
                    message.progress = reader.uint32();
                    break;
                case /* optional uint32 total_progress */ 7:
                    message.totalProgress = reader.uint32();
                    break;
                case /* optional uint32 investigation_id */ 3:
                    message.investigationId = reader.uint32();
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
        /* optional uint32 quest_id = 15; */
        if (message.questId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.questId);
        /* optional com.midnights.game.InvestigationTarget.State state = 2; */
        if (message.state !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.state);
        /* optional uint32 progress = 8; */
        if (message.progress !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional uint32 total_progress = 7; */
        if (message.totalProgress !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* optional uint32 investigation_id = 3; */
        if (message.investigationId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.investigationId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InvestigationTarget
 */
exports.InvestigationTarget = new InvestigationTarget$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerInvestigationAllInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerInvestigationAllInfoNotify", [
            { no: 15, name: "investigation_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.Investigation },
            { no: 12, name: "investigation_target_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InvestigationTarget }
        ]);
    }
    create(value) {
        const message = { investigationList: [], investigationTargetList: [] };
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
                case /* repeated com.midnights.game.Investigation investigation_list */ 15:
                    message.investigationList.push(exports.Investigation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.InvestigationTarget investigation_target_list */ 12:
                    message.investigationTargetList.push(exports.InvestigationTarget.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.Investigation investigation_list = 15; */
        for (let i = 0; i < message.investigationList.length; i++)
            exports.Investigation.internalBinaryWrite(message.investigationList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.InvestigationTarget investigation_target_list = 12; */
        for (let i = 0; i < message.investigationTargetList.length; i++)
            exports.InvestigationTarget.internalBinaryWrite(message.investigationTargetList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerInvestigationAllInfoNotify
 */
exports.PlayerInvestigationAllInfoNotify = new PlayerInvestigationAllInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeInvestigationRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeInvestigationRewardReq", [
            { no: 5, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 id */ 5:
                    message.id = reader.uint32();
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
        /* optional uint32 id = 5; */
        if (message.id !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeInvestigationRewardReq
 */
exports.TakeInvestigationRewardReq = new TakeInvestigationRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeInvestigationRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeInvestigationRewardRsp", [
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 id */ 12:
                    message.id = reader.uint32();
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
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 id = 12; */
        if (message.id !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeInvestigationRewardRsp
 */
exports.TakeInvestigationRewardRsp = new TakeInvestigationRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeInvestigationTargetRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeInvestigationTargetRewardReq", [
            { no: 11, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 quest_id */ 11:
                    message.questId = reader.uint32();
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
        /* optional uint32 quest_id = 11; */
        if (message.questId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeInvestigationTargetRewardReq
 */
exports.TakeInvestigationTargetRewardReq = new TakeInvestigationTargetRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeInvestigationTargetRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeInvestigationTargetRewardRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "quest_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 quest_id */ 2:
                    message.questId = reader.uint32();
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
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 quest_id = 2; */
        if (message.questId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeInvestigationTargetRewardRsp
 */
exports.TakeInvestigationTargetRewardRsp = new TakeInvestigationTargetRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetInvestigationMonsterReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetInvestigationMonsterReq", [
            { no: 3, name: "city_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_for_mark", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { cityIdList: [] };
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
                case /* repeated uint32 city_id_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cityIdList.push(reader.uint32());
                    else
                        message.cityIdList.push(reader.uint32());
                    break;
                case /* optional bool is_for_mark */ 4:
                    message.isForMark = reader.bool();
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
        /* repeated uint32 city_id_list = 3; */
        if (message.cityIdList.length) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cityIdList.length; i++)
                writer.uint32(message.cityIdList[i]);
            writer.join();
        }
        /* optional bool is_for_mark = 4; */
        if (message.isForMark !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isForMark);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetInvestigationMonsterReq
 */
exports.GetInvestigationMonsterReq = new GetInvestigationMonsterReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationMonster$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InvestigationMonster", [
            { no: 9, name: "is_alive", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "refresh_interval", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "boss_chest_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "weekly_boss_resin_discount_info", kind: "message", T: () => define_2.WeeklyBossResinDiscountInfo },
            { no: 301, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "pos", kind: "message", T: () => define_1.Vector },
            { no: 8, name: "resin", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "max_boss_chest_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 285, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_area_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "lock_state", kind: "enum", opt: true, T: () => ["com.midnights.game.InvestigationMonster.LockState", InvestigationMonster_LockState] },
            { no: 7, name: "next_boss_chest_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "city_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_alive */ 9:
                    message.isAlive = reader.bool();
                    break;
                case /* optional uint32 refresh_interval */ 3:
                    message.refreshInterval = reader.uint32();
                    break;
                case /* optional uint32 id */ 13:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 level */ 5:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 boss_chest_num */ 1:
                    message.bossChestNum = reader.uint32();
                    break;
                case /* optional com.midnights.game.WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info */ 12:
                    message.weeklyBossResinDiscountInfo = define_2.WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options, message.weeklyBossResinDiscountInfo);
                    break;
                case /* optional uint32 monster_id */ 301:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 14:
                    message.pos = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional uint32 resin */ 8:
                    message.resin = reader.uint32();
                    break;
                case /* optional uint32 max_boss_chest_num */ 4:
                    message.maxBossChestNum = reader.uint32();
                    break;
                case /* optional uint32 next_refresh_time */ 11:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 285:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional bool is_area_locked */ 15:
                    message.isAreaLocked = reader.bool();
                    break;
                case /* optional com.midnights.game.InvestigationMonster.LockState lock_state */ 2:
                    message.lockState = reader.int32();
                    break;
                case /* optional uint32 next_boss_chest_refresh_time */ 7:
                    message.nextBossChestRefreshTime = reader.uint32();
                    break;
                case /* optional uint32 city_id */ 6:
                    message.cityId = reader.uint32();
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
        /* optional bool is_alive = 9; */
        if (message.isAlive !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isAlive);
        /* optional uint32 refresh_interval = 3; */
        if (message.refreshInterval !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.refreshInterval);
        /* optional uint32 id = 13; */
        if (message.id !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.id);
        /* optional uint32 level = 5; */
        if (message.level !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 boss_chest_num = 1; */
        if (message.bossChestNum !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.bossChestNum);
        /* optional com.midnights.game.WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 12; */
        if (message.weeklyBossResinDiscountInfo)
            define_2.WeeklyBossResinDiscountInfo.internalBinaryWrite(message.weeklyBossResinDiscountInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 monster_id = 301; */
        if (message.monsterId !== undefined)
            writer.tag(301, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* optional com.midnights.game.Vector pos = 14; */
        if (message.pos)
            define_1.Vector.internalBinaryWrite(message.pos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 resin = 8; */
        if (message.resin !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.resin);
        /* optional uint32 max_boss_chest_num = 4; */
        if (message.maxBossChestNum !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.maxBossChestNum);
        /* optional uint32 next_refresh_time = 11; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* optional uint32 group_id = 285; */
        if (message.groupId !== undefined)
            writer.tag(285, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 scene_id = 10; */
        if (message.sceneId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional bool is_area_locked = 15; */
        if (message.isAreaLocked !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isAreaLocked);
        /* optional com.midnights.game.InvestigationMonster.LockState lock_state = 2; */
        if (message.lockState !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.lockState);
        /* optional uint32 next_boss_chest_refresh_time = 7; */
        if (message.nextBossChestRefreshTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.nextBossChestRefreshTime);
        /* optional uint32 city_id = 6; */
        if (message.cityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InvestigationMonster
 */
exports.InvestigationMonster = new InvestigationMonster$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetInvestigationMonsterRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetInvestigationMonsterRsp", [
            { no: 10, name: "monster_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InvestigationMonster },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "is_for_mark", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { monsterList: [] };
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
                case /* repeated com.midnights.game.InvestigationMonster monster_list */ 10:
                    message.monsterList.push(exports.InvestigationMonster.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_for_mark */ 2:
                    message.isForMark = reader.bool();
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
        /* repeated com.midnights.game.InvestigationMonster monster_list = 10; */
        for (let i = 0; i < message.monsterList.length; i++)
            exports.InvestigationMonster.internalBinaryWrite(message.monsterList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_for_mark = 2; */
        if (message.isForMark !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isForMark);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetInvestigationMonsterRsp
 */
exports.GetInvestigationMonsterRsp = new GetInvestigationMonsterRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerInvestigationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerInvestigationNotify", [
            { no: 1, name: "investigation_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.Investigation }
        ]);
    }
    create(value) {
        const message = { investigationList: [] };
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
                case /* repeated com.midnights.game.Investigation investigation_list */ 1:
                    message.investigationList.push(exports.Investigation.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.Investigation investigation_list = 1; */
        for (let i = 0; i < message.investigationList.length; i++)
            exports.Investigation.internalBinaryWrite(message.investigationList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerInvestigationNotify
 */
exports.PlayerInvestigationNotify = new PlayerInvestigationNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerInvestigationTargetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerInvestigationTargetNotify", [
            { no: 1, name: "investigation_target_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.InvestigationTarget }
        ]);
    }
    create(value) {
        const message = { investigationTargetList: [] };
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
                case /* repeated com.midnights.game.InvestigationTarget investigation_target_list */ 1:
                    message.investigationTargetList.push(exports.InvestigationTarget.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.InvestigationTarget investigation_target_list = 1; */
        for (let i = 0; i < message.investigationTargetList.length; i++)
            exports.InvestigationTarget.internalBinaryWrite(message.investigationTargetList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerInvestigationTargetNotify
 */
exports.PlayerInvestigationTargetNotify = new PlayerInvestigationTargetNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkTargetInvestigationMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MarkTargetInvestigationMonsterNotify", [
            { no: 11, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "investigation_monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 monster_id */ 4:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 investigation_monster_id */ 12:
                    message.investigationMonsterId = reader.uint32();
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
        /* optional uint32 scene_id = 11; */
        if (message.sceneId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 monster_id = 4; */
        if (message.monsterId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* optional uint32 group_id = 5; */
        if (message.groupId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.groupId);
        /* optional uint32 investigation_monster_id = 12; */
        if (message.investigationMonsterId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.investigationMonsterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MarkTargetInvestigationMonsterNotify
 */
exports.MarkTargetInvestigationMonsterNotify = new MarkTargetInvestigationMonsterNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationMonsterUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InvestigationMonsterUpdateNotify", [
            { no: 5, name: "investigation_monster", kind: "message", T: () => exports.InvestigationMonster }
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
                case /* optional com.midnights.game.InvestigationMonster investigation_monster */ 5:
                    message.investigationMonster = exports.InvestigationMonster.internalBinaryRead(reader, reader.uint32(), options, message.investigationMonster);
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
        /* optional com.midnights.game.InvestigationMonster investigation_monster = 5; */
        if (message.investigationMonster)
            exports.InvestigationMonster.internalBinaryWrite(message.investigationMonster, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InvestigationMonsterUpdateNotify
 */
exports.InvestigationMonsterUpdateNotify = new InvestigationMonsterUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationQuestDailyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InvestigationQuestDailyNotify", []);
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
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InvestigationQuestDailyNotify
 */
exports.InvestigationQuestDailyNotify = new InvestigationQuestDailyNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationReadQuestDailyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.InvestigationReadQuestDailyNotify", []);
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
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.InvestigationReadQuestDailyNotify
 */
exports.InvestigationReadQuestDailyNotify = new InvestigationReadQuestDailyNotify$Type();
