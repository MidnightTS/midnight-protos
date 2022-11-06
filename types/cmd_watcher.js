"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPushTipsRewardRsp = exports.GetPushTipsRewardReq = exports.PushTipsReadFinishRsp = exports.PushTipsReadFinishReq = exports.PushTipsChangeNotify = exports.PushTipsAllDataNotify = exports.PushTipsData = exports.WatcherEventStageNotify = exports.WatcherEventTypeNotify = exports.WatcherEventNotify = exports.WatcherChangeNotify = exports.WatcherAllDataNotify = exports.PushTipsState = exports.GetPushTipsRewardRsp_CmdId = exports.GetPushTipsRewardReq_CmdId = exports.PushTipsReadFinishRsp_CmdId = exports.PushTipsReadFinishReq_CmdId = exports.PushTipsChangeNotify_CmdId = exports.PushTipsAllDataNotify_CmdId = exports.WatcherEventStageNotify_CmdId = exports.WatcherEventTypeNotify_CmdId = exports.WatcherEventNotify_CmdId = exports.WatcherChangeNotify_CmdId = exports.WatcherAllDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.WatcherAllDataNotify.CmdId
 */
var WatcherAllDataNotify_CmdId;
(function (WatcherAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherAllDataNotify_CmdId[WatcherAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2272;
     */
    WatcherAllDataNotify_CmdId[WatcherAllDataNotify_CmdId["CMD_ID"] = 2272] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherAllDataNotify_CmdId[WatcherAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherAllDataNotify_CmdId[WatcherAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WatcherAllDataNotify_CmdId = exports.WatcherAllDataNotify_CmdId || (exports.WatcherAllDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WatcherChangeNotify.CmdId
 */
var WatcherChangeNotify_CmdId;
(function (WatcherChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherChangeNotify_CmdId[WatcherChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2298;
     */
    WatcherChangeNotify_CmdId[WatcherChangeNotify_CmdId["CMD_ID"] = 2298] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherChangeNotify_CmdId[WatcherChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherChangeNotify_CmdId[WatcherChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WatcherChangeNotify_CmdId = exports.WatcherChangeNotify_CmdId || (exports.WatcherChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WatcherEventNotify.CmdId
 */
var WatcherEventNotify_CmdId;
(function (WatcherEventNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherEventNotify_CmdId[WatcherEventNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2212;
     */
    WatcherEventNotify_CmdId[WatcherEventNotify_CmdId["CMD_ID"] = 2212] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherEventNotify_CmdId[WatcherEventNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherEventNotify_CmdId[WatcherEventNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherEventNotify_CmdId[WatcherEventNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WatcherEventNotify_CmdId = exports.WatcherEventNotify_CmdId || (exports.WatcherEventNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WatcherEventTypeNotify.CmdId
 */
var WatcherEventTypeNotify_CmdId;
(function (WatcherEventTypeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherEventTypeNotify_CmdId[WatcherEventTypeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2235;
     */
    WatcherEventTypeNotify_CmdId[WatcherEventTypeNotify_CmdId["CMD_ID"] = 2235] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherEventTypeNotify_CmdId[WatcherEventTypeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherEventTypeNotify_CmdId[WatcherEventTypeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherEventTypeNotify_CmdId[WatcherEventTypeNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WatcherEventTypeNotify_CmdId = exports.WatcherEventTypeNotify_CmdId || (exports.WatcherEventTypeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WatcherEventStageNotify.CmdId
 */
var WatcherEventStageNotify_CmdId;
(function (WatcherEventStageNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherEventStageNotify_CmdId[WatcherEventStageNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2207;
     */
    WatcherEventStageNotify_CmdId[WatcherEventStageNotify_CmdId["CMD_ID"] = 2207] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WatcherEventStageNotify_CmdId[WatcherEventStageNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherEventStageNotify_CmdId[WatcherEventStageNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WatcherEventStageNotify_CmdId[WatcherEventStageNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(WatcherEventStageNotify_CmdId = exports.WatcherEventStageNotify_CmdId || (exports.WatcherEventStageNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PushTipsAllDataNotify.CmdId
 */
var PushTipsAllDataNotify_CmdId;
(function (PushTipsAllDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsAllDataNotify_CmdId[PushTipsAllDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2222;
     */
    PushTipsAllDataNotify_CmdId[PushTipsAllDataNotify_CmdId["CMD_ID"] = 2222] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsAllDataNotify_CmdId[PushTipsAllDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PushTipsAllDataNotify_CmdId[PushTipsAllDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PushTipsAllDataNotify_CmdId = exports.PushTipsAllDataNotify_CmdId || (exports.PushTipsAllDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PushTipsChangeNotify.CmdId
 */
var PushTipsChangeNotify_CmdId;
(function (PushTipsChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsChangeNotify_CmdId[PushTipsChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2265;
     */
    PushTipsChangeNotify_CmdId[PushTipsChangeNotify_CmdId["CMD_ID"] = 2265] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsChangeNotify_CmdId[PushTipsChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PushTipsChangeNotify_CmdId[PushTipsChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PushTipsChangeNotify_CmdId = exports.PushTipsChangeNotify_CmdId || (exports.PushTipsChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PushTipsReadFinishReq.CmdId
 */
var PushTipsReadFinishReq_CmdId;
(function (PushTipsReadFinishReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsReadFinishReq_CmdId[PushTipsReadFinishReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2204;
     */
    PushTipsReadFinishReq_CmdId[PushTipsReadFinishReq_CmdId["CMD_ID"] = 2204] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsReadFinishReq_CmdId[PushTipsReadFinishReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PushTipsReadFinishReq_CmdId[PushTipsReadFinishReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PushTipsReadFinishReq_CmdId[PushTipsReadFinishReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PushTipsReadFinishReq_CmdId = exports.PushTipsReadFinishReq_CmdId || (exports.PushTipsReadFinishReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PushTipsReadFinishRsp.CmdId
 */
var PushTipsReadFinishRsp_CmdId;
(function (PushTipsReadFinishRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsReadFinishRsp_CmdId[PushTipsReadFinishRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2293;
     */
    PushTipsReadFinishRsp_CmdId[PushTipsReadFinishRsp_CmdId["CMD_ID"] = 2293] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PushTipsReadFinishRsp_CmdId[PushTipsReadFinishRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PushTipsReadFinishRsp_CmdId[PushTipsReadFinishRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PushTipsReadFinishRsp_CmdId = exports.PushTipsReadFinishRsp_CmdId || (exports.PushTipsReadFinishRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPushTipsRewardReq.CmdId
 */
var GetPushTipsRewardReq_CmdId;
(function (GetPushTipsRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPushTipsRewardReq_CmdId[GetPushTipsRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2227;
     */
    GetPushTipsRewardReq_CmdId[GetPushTipsRewardReq_CmdId["CMD_ID"] = 2227] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPushTipsRewardReq_CmdId[GetPushTipsRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPushTipsRewardReq_CmdId[GetPushTipsRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPushTipsRewardReq_CmdId[GetPushTipsRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetPushTipsRewardReq_CmdId = exports.GetPushTipsRewardReq_CmdId || (exports.GetPushTipsRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetPushTipsRewardRsp.CmdId
 */
var GetPushTipsRewardRsp_CmdId;
(function (GetPushTipsRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPushTipsRewardRsp_CmdId[GetPushTipsRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2294;
     */
    GetPushTipsRewardRsp_CmdId[GetPushTipsRewardRsp_CmdId["CMD_ID"] = 2294] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetPushTipsRewardRsp_CmdId[GetPushTipsRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetPushTipsRewardRsp_CmdId[GetPushTipsRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetPushTipsRewardRsp_CmdId = exports.GetPushTipsRewardRsp_CmdId || (exports.GetPushTipsRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PushTipsState
 */
var PushTipsState;
(function (PushTipsState) {
    /**
     * @generated from protobuf enum value: PUSH_TIPS_STATE_NONE = 0;
     */
    PushTipsState[PushTipsState["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: PUSH_TIPS_STATE_START = 1;
     */
    PushTipsState[PushTipsState["START"] = 1] = "START";
    /**
     * @generated from protobuf enum value: PUSH_TIPS_STATE_READ = 2;
     */
    PushTipsState[PushTipsState["READ"] = 2] = "READ";
    /**
     * @generated from protobuf enum value: PUSH_TIPS_STATE_FINISH = 3;
     */
    PushTipsState[PushTipsState["FINISH"] = 3] = "FINISH";
})(PushTipsState = exports.PushTipsState || (exports.PushTipsState = {}));
// @generated message type with reflection information, may provide speed optimized methods
class WatcherAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WatcherAllDataNotify", [
            { no: 4, name: "watcher_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { watcherList: [] };
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
                case /* repeated uint32 watcher_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.watcherList.push(reader.uint32());
                    else
                        message.watcherList.push(reader.uint32());
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
        /* repeated uint32 watcher_list = 4; */
        if (message.watcherList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.watcherList.length; i++)
                writer.uint32(message.watcherList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WatcherAllDataNotify
 */
exports.WatcherAllDataNotify = new WatcherAllDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WatcherChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WatcherChangeNotify", [
            { no: 2, name: "removed_watcher_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "new_watcher_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { removedWatcherList: [], newWatcherList: [] };
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
                case /* repeated uint32 removed_watcher_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removedWatcherList.push(reader.uint32());
                    else
                        message.removedWatcherList.push(reader.uint32());
                    break;
                case /* repeated uint32 new_watcher_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.newWatcherList.push(reader.uint32());
                    else
                        message.newWatcherList.push(reader.uint32());
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
        /* repeated uint32 removed_watcher_list = 2; */
        if (message.removedWatcherList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.removedWatcherList.length; i++)
                writer.uint32(message.removedWatcherList[i]);
            writer.join();
        }
        /* repeated uint32 new_watcher_list = 15; */
        if (message.newWatcherList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.newWatcherList.length; i++)
                writer.uint32(message.newWatcherList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WatcherChangeNotify
 */
exports.WatcherChangeNotify = new WatcherChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WatcherEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WatcherEventNotify", [
            { no: 6, name: "add_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 add_progress */ 6:
                    message.addProgress = reader.uint32();
                    break;
                case /* optional uint32 watcher_id */ 9:
                    message.watcherId = reader.uint32();
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
        /* optional uint32 add_progress = 6; */
        if (message.addProgress !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.addProgress);
        /* optional uint32 watcher_id = 9; */
        if (message.watcherId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.watcherId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WatcherEventNotify
 */
exports.WatcherEventNotify = new WatcherEventNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WatcherEventTypeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WatcherEventTypeNotify", [
            { no: 14, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "add_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "watcher_trigger_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [] };
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
                case /* repeated uint32 param_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional uint32 add_progress */ 15:
                    message.addProgress = reader.uint32();
                    break;
                case /* optional uint32 watcher_trigger_type */ 11:
                    message.watcherTriggerType = reader.uint32();
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
        /* repeated uint32 param_list = 14; */
        if (message.paramList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* optional uint32 add_progress = 15; */
        if (message.addProgress !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.addProgress);
        /* optional uint32 watcher_trigger_type = 11; */
        if (message.watcherTriggerType !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.watcherTriggerType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WatcherEventTypeNotify
 */
exports.WatcherEventTypeNotify = new WatcherEventTypeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WatcherEventStageNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WatcherEventStageNotify", [
            { no: 4, name: "add_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stage", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "watcher_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 add_progress */ 4:
                    message.addProgress = reader.uint32();
                    break;
                case /* optional uint32 stage */ 2:
                    message.stage = reader.uint32();
                    break;
                case /* optional uint32 watcher_id */ 12:
                    message.watcherId = reader.uint32();
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
        /* optional uint32 add_progress = 4; */
        if (message.addProgress !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.addProgress);
        /* optional uint32 stage = 2; */
        if (message.stage !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.stage);
        /* optional uint32 watcher_id = 12; */
        if (message.watcherId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.watcherId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WatcherEventStageNotify
 */
exports.WatcherEventStageNotify = new WatcherEventStageNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PushTipsData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PushTipsData", [
            { no: 13, name: "push_tips_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 push_tips_id */ 13:
                    message.pushTipsId = reader.uint32();
                    break;
                case /* optional uint32 state */ 4:
                    message.state = reader.uint32();
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
        /* optional uint32 push_tips_id = 13; */
        if (message.pushTipsId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.pushTipsId);
        /* optional uint32 state = 4; */
        if (message.state !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PushTipsData
 */
exports.PushTipsData = new PushTipsData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PushTipsAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PushTipsAllDataNotify", [
            { no: 4, name: "push_tips_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PushTipsData }
        ]);
    }
    create(value) {
        const message = { pushTipsList: [] };
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
                case /* repeated com.midnights.game.PushTipsData push_tips_list */ 4:
                    message.pushTipsList.push(exports.PushTipsData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PushTipsData push_tips_list = 4; */
        for (let i = 0; i < message.pushTipsList.length; i++)
            exports.PushTipsData.internalBinaryWrite(message.pushTipsList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PushTipsAllDataNotify
 */
exports.PushTipsAllDataNotify = new PushTipsAllDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PushTipsChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PushTipsChangeNotify", [
            { no: 9, name: "push_tips_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PushTipsData }
        ]);
    }
    create(value) {
        const message = { pushTipsList: [] };
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
                case /* repeated com.midnights.game.PushTipsData push_tips_list */ 9:
                    message.pushTipsList.push(exports.PushTipsData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PushTipsData push_tips_list = 9; */
        for (let i = 0; i < message.pushTipsList.length; i++)
            exports.PushTipsData.internalBinaryWrite(message.pushTipsList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PushTipsChangeNotify
 */
exports.PushTipsChangeNotify = new PushTipsChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PushTipsReadFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PushTipsReadFinishReq", [
            { no: 11, name: "push_tips_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 push_tips_id */ 11:
                    message.pushTipsId = reader.uint32();
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
        /* optional uint32 push_tips_id = 11; */
        if (message.pushTipsId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.pushTipsId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PushTipsReadFinishReq
 */
exports.PushTipsReadFinishReq = new PushTipsReadFinishReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PushTipsReadFinishRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PushTipsReadFinishRsp", [
            { no: 3, name: "push_tips_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 push_tips_id */ 3:
                    message.pushTipsId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 9:
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
        /* optional uint32 push_tips_id = 3; */
        if (message.pushTipsId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.pushTipsId);
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PushTipsReadFinishRsp
 */
exports.PushTipsReadFinishRsp = new PushTipsReadFinishRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPushTipsRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPushTipsRewardReq", [
            { no: 4, name: "push_tips_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pushTipsIdList: [] };
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
                case /* repeated uint32 push_tips_id_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pushTipsIdList.push(reader.uint32());
                    else
                        message.pushTipsIdList.push(reader.uint32());
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
        /* repeated uint32 push_tips_id_list = 4; */
        if (message.pushTipsIdList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pushTipsIdList.length; i++)
                writer.uint32(message.pushTipsIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPushTipsRewardReq
 */
exports.GetPushTipsRewardReq = new GetPushTipsRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPushTipsRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetPushTipsRewardRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "push_tips_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pushTipsIdList: [] };
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
                case /* optional int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 push_tips_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pushTipsIdList.push(reader.uint32());
                    else
                        message.pushTipsIdList.push(reader.uint32());
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 push_tips_id_list = 9; */
        if (message.pushTipsIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pushTipsIdList.length; i++)
                writer.uint32(message.pushTipsIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetPushTipsRewardRsp
 */
exports.GetPushTipsRewardRsp = new GetPushTipsRewardRsp$Type();
