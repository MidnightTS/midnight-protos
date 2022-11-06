"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeAchievementGoalRewardRsp = exports.TakeAchievementGoalRewardReq = exports.TakeAchievementRewardRsp = exports.TakeAchievementRewardReq = exports.AchievementUpdateNotify = exports.AchievementAllDataNotify = exports.Achievement = exports.TakeAchievementGoalRewardRsp_CmdId = exports.TakeAchievementGoalRewardReq_CmdId = exports.TakeAchievementRewardRsp_CmdId = exports.TakeAchievementRewardReq_CmdId = exports.AchievementUpdateNotify_CmdId = exports.AchievementAllDataNotify_CmdId = exports.Achievement_Status = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.Achievement.Status
 */
var Achievement_Status;
(function (Achievement_Status) {
    /**
     * @generated from protobuf enum value: INVALID = 0;
     */
    Achievement_Status[Achievement_Status["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: UNFINISHED = 1;
     */
    Achievement_Status[Achievement_Status["UNFINISHED"] = 1] = "UNFINISHED";
    /**
     * @generated from protobuf enum value: FINISHED = 2;
     */
    Achievement_Status[Achievement_Status["FINISHED"] = 2] = "FINISHED";
    /**
     * @generated from protobuf enum value: REWARD_TAKEN = 3;
     */
    Achievement_Status[Achievement_Status["REWARD_TAKEN"] = 3] = "REWARD_TAKEN";
})(Achievement_Status = exports.Achievement_Status || (exports.Achievement_Status = {}));
/**
 * @generated from protobuf enum com.midnights.game.AchievementAllDataNotify.CmdId
 */
var AchievementAllDataNotify_CmdId;
(function (AchievementAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AchievementAllDataNotify_CmdId[AchievementAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2676;
     */
    AchievementAllDataNotify_CmdId[AchievementAllDataNotify_CmdId["CMD_ID"] = 2676] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AchievementAllDataNotify_CmdId[AchievementAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AchievementAllDataNotify_CmdId[AchievementAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AchievementAllDataNotify_CmdId = exports.AchievementAllDataNotify_CmdId || (exports.AchievementAllDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AchievementUpdateNotify.CmdId
 */
var AchievementUpdateNotify_CmdId;
(function (AchievementUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AchievementUpdateNotify_CmdId[AchievementUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2668;
     */
    AchievementUpdateNotify_CmdId[AchievementUpdateNotify_CmdId["CMD_ID"] = 2668] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AchievementUpdateNotify_CmdId[AchievementUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AchievementUpdateNotify_CmdId[AchievementUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AchievementUpdateNotify_CmdId = exports.AchievementUpdateNotify_CmdId || (exports.AchievementUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeAchievementRewardReq.CmdId
 */
var TakeAchievementRewardReq_CmdId;
(function (TakeAchievementRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementRewardReq_CmdId[TakeAchievementRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2675;
     */
    TakeAchievementRewardReq_CmdId[TakeAchievementRewardReq_CmdId["CMD_ID"] = 2675] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementRewardReq_CmdId[TakeAchievementRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeAchievementRewardReq_CmdId[TakeAchievementRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeAchievementRewardReq_CmdId[TakeAchievementRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeAchievementRewardReq_CmdId = exports.TakeAchievementRewardReq_CmdId || (exports.TakeAchievementRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeAchievementRewardRsp.CmdId
 */
var TakeAchievementRewardRsp_CmdId;
(function (TakeAchievementRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementRewardRsp_CmdId[TakeAchievementRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2657;
     */
    TakeAchievementRewardRsp_CmdId[TakeAchievementRewardRsp_CmdId["CMD_ID"] = 2657] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementRewardRsp_CmdId[TakeAchievementRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeAchievementRewardRsp_CmdId[TakeAchievementRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeAchievementRewardRsp_CmdId = exports.TakeAchievementRewardRsp_CmdId || (exports.TakeAchievementRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeAchievementGoalRewardReq.CmdId
 */
var TakeAchievementGoalRewardReq_CmdId;
(function (TakeAchievementGoalRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementGoalRewardReq_CmdId[TakeAchievementGoalRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2652;
     */
    TakeAchievementGoalRewardReq_CmdId[TakeAchievementGoalRewardReq_CmdId["CMD_ID"] = 2652] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementGoalRewardReq_CmdId[TakeAchievementGoalRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeAchievementGoalRewardReq_CmdId[TakeAchievementGoalRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeAchievementGoalRewardReq_CmdId[TakeAchievementGoalRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeAchievementGoalRewardReq_CmdId = exports.TakeAchievementGoalRewardReq_CmdId || (exports.TakeAchievementGoalRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeAchievementGoalRewardRsp.CmdId
 */
var TakeAchievementGoalRewardRsp_CmdId;
(function (TakeAchievementGoalRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementGoalRewardRsp_CmdId[TakeAchievementGoalRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2681;
     */
    TakeAchievementGoalRewardRsp_CmdId[TakeAchievementGoalRewardRsp_CmdId["CMD_ID"] = 2681] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeAchievementGoalRewardRsp_CmdId[TakeAchievementGoalRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeAchievementGoalRewardRsp_CmdId[TakeAchievementGoalRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeAchievementGoalRewardRsp_CmdId = exports.TakeAchievementGoalRewardRsp_CmdId || (exports.TakeAchievementGoalRewardRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Achievement$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.Achievement", [
            { no: 11, name: "finish_timestamp", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "status", kind: "enum", opt: true, T: () => ["com.midnights.game.Achievement.Status", Achievement_Status] },
            { no: 12, name: "cur_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "total_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 finish_timestamp */ 11:
                    message.finishTimestamp = reader.uint32();
                    break;
                case /* optional com.midnights.game.Achievement.Status status */ 13:
                    message.status = reader.int32();
                    break;
                case /* optional uint32 cur_progress */ 12:
                    message.curProgress = reader.uint32();
                    break;
                case /* optional uint32 id */ 14:
                    message.id = reader.uint32();
                    break;
                case /* optional uint32 total_progress */ 8:
                    message.totalProgress = reader.uint32();
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
        /* optional uint32 finish_timestamp = 11; */
        if (message.finishTimestamp !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.finishTimestamp);
        /* optional com.midnights.game.Achievement.Status status = 13; */
        if (message.status !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.status);
        /* optional uint32 cur_progress = 12; */
        if (message.curProgress !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* optional uint32 id = 14; */
        if (message.id !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.id);
        /* optional uint32 total_progress = 8; */
        if (message.totalProgress !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.totalProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Achievement
 */
exports.Achievement = new Achievement$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AchievementAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AchievementAllDataNotify", [
            { no: 4, name: "achievement_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.Achievement },
            { no: 2, name: "reward_taken_goal_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { achievementList: [], rewardTakenGoalIdList: [] };
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
                case /* repeated com.midnights.game.Achievement achievement_list */ 4:
                    message.achievementList.push(exports.Achievement.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 reward_taken_goal_id_list */ 2:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardTakenGoalIdList.push(reader.uint32());
                    else
                        message.rewardTakenGoalIdList.push(reader.uint32());
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
        /* repeated com.midnights.game.Achievement achievement_list = 4; */
        for (let i = 0; i < message.achievementList.length; i++)
            exports.Achievement.internalBinaryWrite(message.achievementList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 reward_taken_goal_id_list = 2; */
        for (let i = 0; i < message.rewardTakenGoalIdList.length; i++)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.rewardTakenGoalIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AchievementAllDataNotify
 */
exports.AchievementAllDataNotify = new AchievementAllDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AchievementUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AchievementUpdateNotify", [
            { no: 14, name: "achievement_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.Achievement }
        ]);
    }
    create(value) {
        const message = { achievementList: [] };
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
                case /* repeated com.midnights.game.Achievement achievement_list */ 14:
                    message.achievementList.push(exports.Achievement.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.Achievement achievement_list = 14; */
        for (let i = 0; i < message.achievementList.length; i++)
            exports.Achievement.internalBinaryWrite(message.achievementList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AchievementUpdateNotify
 */
exports.AchievementUpdateNotify = new AchievementUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeAchievementRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeAchievementRewardReq", [
            { no: 13, name: "id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { idList: [] };
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
                case /* repeated uint32 id_list */ 13:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idList.push(reader.uint32());
                    else
                        message.idList.push(reader.uint32());
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
        /* repeated uint32 id_list = 13; */
        for (let i = 0; i < message.idList.length; i++)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.idList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeAchievementRewardReq
 */
exports.TakeAchievementRewardReq = new TakeAchievementRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeAchievementRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeAchievementRewardRsp", [
            { no: 7, name: "id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { idList: [], itemList: [] };
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
                case /* repeated uint32 id_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idList.push(reader.uint32());
                    else
                        message.idList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 10:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 1:
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
        /* repeated uint32 id_list = 7; */
        for (let i = 0; i < message.idList.length; i++)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.idList[i]);
        /* repeated com.midnights.game.ItemParam item_list = 10; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeAchievementRewardRsp
 */
exports.TakeAchievementRewardRsp = new TakeAchievementRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeAchievementGoalRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeAchievementGoalRewardReq", [
            { no: 5, name: "id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { idList: [] };
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
                case /* repeated uint32 id_list */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idList.push(reader.uint32());
                    else
                        message.idList.push(reader.uint32());
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
        /* repeated uint32 id_list = 5; */
        for (let i = 0; i < message.idList.length; i++)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.idList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeAchievementGoalRewardReq
 */
exports.TakeAchievementGoalRewardReq = new TakeAchievementGoalRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeAchievementGoalRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeAchievementGoalRewardRsp", [
            { no: 15, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { idList: [], itemList: [] };
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
                case /* optional int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 id_list */ 12:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idList.push(reader.uint32());
                    else
                        message.idList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 5:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 15; */
        if (message.retcode !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated uint32 id_list = 12; */
        for (let i = 0; i < message.idList.length; i++)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.idList[i]);
        /* repeated com.midnights.game.ItemParam item_list = 5; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeAchievementGoalRewardRsp
 */
exports.TakeAchievementGoalRewardRsp = new TakeAchievementGoalRewardRsp$Type();
