"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBonusActivityRewardRsp = exports.GetBonusActivityRewardReq = exports.BonusActivityInfoRsp = exports.BonusActivityInfoReq = exports.BonusActivityUpdateNotify = exports.BonusActivityInfo = exports.GetSignInRewardRsp = exports.GetSignInRewardReq = exports.SignInInfoRsp = exports.SignInInfoReq = exports.SignInInfo = exports.SignInData = exports.OpActivityStateNotify = exports.OpActivityTagBriefInfo = exports.GetBonusActivityRewardRsp_CmdId = exports.GetBonusActivityRewardReq_CmdId = exports.BonusActivityInfoRsp_CmdId = exports.BonusActivityInfoReq_CmdId = exports.BonusActivityUpdateNotify_CmdId = exports.GetSignInRewardRsp_CmdId = exports.GetSignInRewardReq_CmdId = exports.SignInInfoRsp_CmdId = exports.SignInInfoReq_CmdId = exports.OpActivityStateNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.OpActivityStateNotify.CmdId
 */
var OpActivityStateNotify_CmdId;
(function (OpActivityStateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpActivityStateNotify_CmdId[OpActivityStateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2572;
     */
    OpActivityStateNotify_CmdId[OpActivityStateNotify_CmdId["CMD_ID"] = 2572] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OpActivityStateNotify_CmdId[OpActivityStateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OpActivityStateNotify_CmdId[OpActivityStateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OpActivityStateNotify_CmdId = exports.OpActivityStateNotify_CmdId || (exports.OpActivityStateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SignInInfoReq.CmdId
 */
var SignInInfoReq_CmdId;
(function (SignInInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SignInInfoReq_CmdId[SignInInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2512;
     */
    SignInInfoReq_CmdId[SignInInfoReq_CmdId["CMD_ID"] = 2512] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SignInInfoReq_CmdId[SignInInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SignInInfoReq_CmdId[SignInInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SignInInfoReq_CmdId[SignInInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(SignInInfoReq_CmdId = exports.SignInInfoReq_CmdId || (exports.SignInInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.SignInInfoRsp.CmdId
 */
var SignInInfoRsp_CmdId;
(function (SignInInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SignInInfoRsp_CmdId[SignInInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2535;
     */
    SignInInfoRsp_CmdId[SignInInfoRsp_CmdId["CMD_ID"] = 2535] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    SignInInfoRsp_CmdId[SignInInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    SignInInfoRsp_CmdId[SignInInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(SignInInfoRsp_CmdId = exports.SignInInfoRsp_CmdId || (exports.SignInInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetSignInRewardReq.CmdId
 */
var GetSignInRewardReq_CmdId;
(function (GetSignInRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSignInRewardReq_CmdId[GetSignInRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2507;
     */
    GetSignInRewardReq_CmdId[GetSignInRewardReq_CmdId["CMD_ID"] = 2507] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSignInRewardReq_CmdId[GetSignInRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSignInRewardReq_CmdId[GetSignInRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSignInRewardReq_CmdId[GetSignInRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetSignInRewardReq_CmdId = exports.GetSignInRewardReq_CmdId || (exports.GetSignInRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetSignInRewardRsp.CmdId
 */
var GetSignInRewardRsp_CmdId;
(function (GetSignInRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSignInRewardRsp_CmdId[GetSignInRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2521;
     */
    GetSignInRewardRsp_CmdId[GetSignInRewardRsp_CmdId["CMD_ID"] = 2521] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSignInRewardRsp_CmdId[GetSignInRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSignInRewardRsp_CmdId[GetSignInRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetSignInRewardRsp_CmdId = exports.GetSignInRewardRsp_CmdId || (exports.GetSignInRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BonusActivityUpdateNotify.CmdId
 */
var BonusActivityUpdateNotify_CmdId;
(function (BonusActivityUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BonusActivityUpdateNotify_CmdId[BonusActivityUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2575;
     */
    BonusActivityUpdateNotify_CmdId[BonusActivityUpdateNotify_CmdId["CMD_ID"] = 2575] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BonusActivityUpdateNotify_CmdId[BonusActivityUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BonusActivityUpdateNotify_CmdId[BonusActivityUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BonusActivityUpdateNotify_CmdId = exports.BonusActivityUpdateNotify_CmdId || (exports.BonusActivityUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BonusActivityInfoReq.CmdId
 */
var BonusActivityInfoReq_CmdId;
(function (BonusActivityInfoReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BonusActivityInfoReq_CmdId[BonusActivityInfoReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2548;
     */
    BonusActivityInfoReq_CmdId[BonusActivityInfoReq_CmdId["CMD_ID"] = 2548] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BonusActivityInfoReq_CmdId[BonusActivityInfoReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BonusActivityInfoReq_CmdId[BonusActivityInfoReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BonusActivityInfoReq_CmdId[BonusActivityInfoReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(BonusActivityInfoReq_CmdId = exports.BonusActivityInfoReq_CmdId || (exports.BonusActivityInfoReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.BonusActivityInfoRsp.CmdId
 */
var BonusActivityInfoRsp_CmdId;
(function (BonusActivityInfoRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BonusActivityInfoRsp_CmdId[BonusActivityInfoRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2597;
     */
    BonusActivityInfoRsp_CmdId[BonusActivityInfoRsp_CmdId["CMD_ID"] = 2597] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    BonusActivityInfoRsp_CmdId[BonusActivityInfoRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    BonusActivityInfoRsp_CmdId[BonusActivityInfoRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(BonusActivityInfoRsp_CmdId = exports.BonusActivityInfoRsp_CmdId || (exports.BonusActivityInfoRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBonusActivityRewardReq.CmdId
 */
var GetBonusActivityRewardReq_CmdId;
(function (GetBonusActivityRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBonusActivityRewardReq_CmdId[GetBonusActivityRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2581;
     */
    GetBonusActivityRewardReq_CmdId[GetBonusActivityRewardReq_CmdId["CMD_ID"] = 2581] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBonusActivityRewardReq_CmdId[GetBonusActivityRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBonusActivityRewardReq_CmdId[GetBonusActivityRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBonusActivityRewardReq_CmdId[GetBonusActivityRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetBonusActivityRewardReq_CmdId = exports.GetBonusActivityRewardReq_CmdId || (exports.GetBonusActivityRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetBonusActivityRewardRsp.CmdId
 */
var GetBonusActivityRewardRsp_CmdId;
(function (GetBonusActivityRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBonusActivityRewardRsp_CmdId[GetBonusActivityRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2505;
     */
    GetBonusActivityRewardRsp_CmdId[GetBonusActivityRewardRsp_CmdId["CMD_ID"] = 2505] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetBonusActivityRewardRsp_CmdId[GetBonusActivityRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetBonusActivityRewardRsp_CmdId[GetBonusActivityRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetBonusActivityRewardRsp_CmdId = exports.GetBonusActivityRewardRsp_CmdId || (exports.GetBonusActivityRewardRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityTagBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpActivityTagBriefInfo", [
            { no: 2, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "has_reward", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "op_activity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* optional bool has_reward */ 3:
                    message.hasReward = reader.bool();
                    break;
                case /* optional uint32 op_activity_type */ 11:
                    message.opActivityType = reader.uint32();
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
        /* optional uint32 config_id = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional bool has_reward = 3; */
        if (message.hasReward !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.hasReward);
        /* optional uint32 op_activity_type = 11; */
        if (message.opActivityType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.opActivityType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityTagBriefInfo
 */
exports.OpActivityTagBriefInfo = new OpActivityTagBriefInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OpActivityStateNotify", [
            { no: 14, name: "finished_bonus_activity_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "opened_op_activity_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.OpActivityTagBriefInfo }
        ]);
    }
    create(value) {
        const message = { finishedBonusActivityIdList: [], openedOpActivityInfoList: [] };
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
                case /* repeated uint32 finished_bonus_activity_id_list */ 14:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedBonusActivityIdList.push(reader.uint32());
                    else
                        message.finishedBonusActivityIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.OpActivityTagBriefInfo opened_op_activity_info_list */ 13:
                    message.openedOpActivityInfoList.push(exports.OpActivityTagBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 finished_bonus_activity_id_list = 14; */
        for (let i = 0; i < message.finishedBonusActivityIdList.length; i++)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.finishedBonusActivityIdList[i]);
        /* repeated com.midnights.game.OpActivityTagBriefInfo opened_op_activity_info_list = 13; */
        for (let i = 0; i < message.openedOpActivityInfoList.length; i++)
            exports.OpActivityTagBriefInfo.internalBinaryWrite(message.openedOpActivityInfoList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OpActivityStateNotify
 */
exports.OpActivityStateNotify = new OpActivityStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SignInData", [
            { no: 14, name: "day_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "reward_item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { rewardItemList: [] };
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
                case /* optional uint32 day_count */ 14:
                    message.dayCount = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ItemParam reward_item_list */ 5:
                    message.rewardItemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 day_count = 14; */
        if (message.dayCount !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.dayCount);
        /* repeated com.midnights.game.ItemParam reward_item_list = 5; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SignInData
 */
exports.SignInData = new SignInData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SignInInfo", [
            { no: 7, name: "is_cond_satisfied", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "reward_day_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "signin_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SignInData },
            { no: 8, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "sign_in_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "last_sign_in_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { rewardDayList: [], signinDataList: [] };
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
                case /* optional bool is_cond_satisfied */ 7:
                    message.isCondSatisfied = reader.bool();
                    break;
                case /* repeated uint32 reward_day_list */ 15:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardDayList.push(reader.uint32());
                    else
                        message.rewardDayList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.SignInData signin_data_list */ 12:
                    message.signinDataList.push(exports.SignInData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 config_id */ 8:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 sign_in_count */ 2:
                    message.signInCount = reader.uint32();
                    break;
                case /* optional uint32 schedule_id */ 3:
                    message.scheduleId = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 13:
                    message.endTime = reader.uint32();
                    break;
                case /* optional uint32 last_sign_in_time */ 6:
                    message.lastSignInTime = reader.uint32();
                    break;
                case /* optional uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
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
        /* optional bool is_cond_satisfied = 7; */
        if (message.isCondSatisfied !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isCondSatisfied);
        /* repeated uint32 reward_day_list = 15; */
        for (let i = 0; i < message.rewardDayList.length; i++)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.rewardDayList[i]);
        /* repeated com.midnights.game.SignInData signin_data_list = 12; */
        for (let i = 0; i < message.signinDataList.length; i++)
            exports.SignInData.internalBinaryWrite(message.signinDataList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 config_id = 8; */
        if (message.configId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional uint32 sign_in_count = 2; */
        if (message.signInCount !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.signInCount);
        /* optional uint32 schedule_id = 3; */
        if (message.scheduleId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* optional uint32 end_time = 13; */
        if (message.endTime !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.endTime);
        /* optional uint32 last_sign_in_time = 6; */
        if (message.lastSignInTime !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lastSignInTime);
        /* optional uint32 begin_time = 5; */
        if (message.beginTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.beginTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SignInInfo
 */
exports.SignInInfo = new SignInInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SignInInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.SignInInfoReq
 */
exports.SignInInfoReq = new SignInInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignInInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SignInInfoRsp", [
            { no: 1, name: "sign_in_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.SignInInfo },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { signInInfoList: [] };
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
                case /* repeated com.midnights.game.SignInInfo sign_in_info_list */ 1:
                    message.signInInfoList.push(exports.SignInInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
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
        /* repeated com.midnights.game.SignInInfo sign_in_info_list = 1; */
        for (let i = 0; i < message.signInInfoList.length; i++)
            exports.SignInInfo.internalBinaryWrite(message.signInInfoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SignInInfoRsp
 */
exports.SignInInfoRsp = new SignInInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSignInRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetSignInRewardReq", [
            { no: 10, name: "schedule_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reward_day", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 schedule_id */ 10:
                    message.scheduleId = reader.uint32();
                    break;
                case /* optional uint32 reward_day */ 3:
                    message.rewardDay = reader.uint32();
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
        /* optional uint32 schedule_id = 10; */
        if (message.scheduleId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* optional uint32 reward_day = 3; */
        if (message.rewardDay !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.rewardDay);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetSignInRewardReq
 */
exports.GetSignInRewardReq = new GetSignInRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSignInRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetSignInRewardRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "sign_in_info", kind: "message", T: () => exports.SignInInfo }
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
                case /* optional com.midnights.game.SignInInfo sign_in_info */ 14:
                    message.signInInfo = exports.SignInInfo.internalBinaryRead(reader, reader.uint32(), options, message.signInInfo);
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
        /* optional com.midnights.game.SignInInfo sign_in_info = 14; */
        if (message.signInInfo)
            exports.SignInInfo.internalBinaryWrite(message.signInInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetSignInRewardRsp
 */
exports.GetSignInRewardRsp = new GetSignInRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BonusActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BonusActivityInfo", [
            { no: 6, name: "bonus_activity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 bonus_activity_id */ 6:
                    message.bonusActivityId = reader.uint32();
                    break;
                case /* optional uint32 state */ 3:
                    message.state = reader.uint32();
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
        /* optional uint32 bonus_activity_id = 6; */
        if (message.bonusActivityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.bonusActivityId);
        /* optional uint32 state = 3; */
        if (message.state !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BonusActivityInfo
 */
exports.BonusActivityInfo = new BonusActivityInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BonusActivityUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BonusActivityUpdateNotify", [
            { no: 8, name: "bonus_activity_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.BonusActivityInfo }
        ]);
    }
    create(value) {
        const message = { bonusActivityInfoList: [] };
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
                case /* repeated com.midnights.game.BonusActivityInfo bonus_activity_info_list */ 8:
                    message.bonusActivityInfoList.push(exports.BonusActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.BonusActivityInfo bonus_activity_info_list = 8; */
        for (let i = 0; i < message.bonusActivityInfoList.length; i++)
            exports.BonusActivityInfo.internalBinaryWrite(message.bonusActivityInfoList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BonusActivityUpdateNotify
 */
exports.BonusActivityUpdateNotify = new BonusActivityUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BonusActivityInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BonusActivityInfoReq", []);
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
 * @generated MessageType for protobuf message com.midnights.game.BonusActivityInfoReq
 */
exports.BonusActivityInfoReq = new BonusActivityInfoReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BonusActivityInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BonusActivityInfoRsp", [
            { no: 2, name: "bonus_activity_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.BonusActivityInfo },
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { bonusActivityInfoList: [] };
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
                case /* repeated com.midnights.game.BonusActivityInfo bonus_activity_info_list */ 2:
                    message.bonusActivityInfoList.push(exports.BonusActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
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
        /* repeated com.midnights.game.BonusActivityInfo bonus_activity_info_list = 2; */
        for (let i = 0; i < message.bonusActivityInfoList.length; i++)
            exports.BonusActivityInfo.internalBinaryWrite(message.bonusActivityInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BonusActivityInfoRsp
 */
exports.BonusActivityInfoRsp = new BonusActivityInfoRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBonusActivityRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBonusActivityRewardReq", [
            { no: 14, name: "bonus_activity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 bonus_activity_id */ 14:
                    message.bonusActivityId = reader.uint32();
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
        /* optional uint32 bonus_activity_id = 14; */
        if (message.bonusActivityId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.bonusActivityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBonusActivityRewardReq
 */
exports.GetBonusActivityRewardReq = new GetBonusActivityRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBonusActivityRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetBonusActivityRewardRsp", [
            { no: 4, name: "bonus_activity_info_list", kind: "message", T: () => exports.BonusActivityInfo },
            { no: 13, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional com.midnights.game.BonusActivityInfo bonus_activity_info_list */ 4:
                    message.bonusActivityInfoList = exports.BonusActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.bonusActivityInfoList);
                    break;
                case /* optional int32 retcode */ 13:
                    message.retcode = reader.int32();
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
        /* optional com.midnights.game.BonusActivityInfo bonus_activity_info_list = 4; */
        if (message.bonusActivityInfoList)
            exports.BonusActivityInfo.internalBinaryWrite(message.bonusActivityInfoList, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 13; */
        if (message.retcode !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetBonusActivityRewardRsp
 */
exports.GetBonusActivityRewardRsp = new GetBonusActivityRewardRsp$Type();
