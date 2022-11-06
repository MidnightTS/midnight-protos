"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishedTalkIdListNotify = exports.MeetNpcRsp = exports.MeetNpcReq = exports.MetNpcIdListNotify = exports.GetSceneNpcPositionRsp = exports.GetSceneNpcPositionReq = exports.NpcTalkRsp = exports.NpcTalkReq = exports.FinishedTalkIdListNotify_CmdId = exports.MeetNpcRsp_CmdId = exports.MeetNpcReq_CmdId = exports.MetNpcIdListNotify_CmdId = exports.GetSceneNpcPositionRsp_CmdId = exports.GetSceneNpcPositionReq_CmdId = exports.NpcTalkRsp_CmdId = exports.NpcTalkReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.NpcTalkReq.CmdId
 */
var NpcTalkReq_CmdId;
(function (NpcTalkReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NpcTalkReq_CmdId[NpcTalkReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 572;
     */
    NpcTalkReq_CmdId[NpcTalkReq_CmdId["CMD_ID"] = 572] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NpcTalkReq_CmdId[NpcTalkReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NpcTalkReq_CmdId[NpcTalkReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NpcTalkReq_CmdId[NpcTalkReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(NpcTalkReq_CmdId = exports.NpcTalkReq_CmdId || (exports.NpcTalkReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.NpcTalkRsp.CmdId
 */
var NpcTalkRsp_CmdId;
(function (NpcTalkRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NpcTalkRsp_CmdId[NpcTalkRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 598;
     */
    NpcTalkRsp_CmdId[NpcTalkRsp_CmdId["CMD_ID"] = 598] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NpcTalkRsp_CmdId[NpcTalkRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NpcTalkRsp_CmdId[NpcTalkRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(NpcTalkRsp_CmdId = exports.NpcTalkRsp_CmdId || (exports.NpcTalkRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetSceneNpcPositionReq.CmdId
 */
var GetSceneNpcPositionReq_CmdId;
(function (GetSceneNpcPositionReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneNpcPositionReq_CmdId[GetSceneNpcPositionReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 535;
     */
    GetSceneNpcPositionReq_CmdId[GetSceneNpcPositionReq_CmdId["CMD_ID"] = 535] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneNpcPositionReq_CmdId[GetSceneNpcPositionReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSceneNpcPositionReq_CmdId[GetSceneNpcPositionReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSceneNpcPositionReq_CmdId[GetSceneNpcPositionReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetSceneNpcPositionReq_CmdId = exports.GetSceneNpcPositionReq_CmdId || (exports.GetSceneNpcPositionReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetSceneNpcPositionRsp.CmdId
 */
var GetSceneNpcPositionRsp_CmdId;
(function (GetSceneNpcPositionRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneNpcPositionRsp_CmdId[GetSceneNpcPositionRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 507;
     */
    GetSceneNpcPositionRsp_CmdId[GetSceneNpcPositionRsp_CmdId["CMD_ID"] = 507] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetSceneNpcPositionRsp_CmdId[GetSceneNpcPositionRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetSceneNpcPositionRsp_CmdId[GetSceneNpcPositionRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetSceneNpcPositionRsp_CmdId = exports.GetSceneNpcPositionRsp_CmdId || (exports.GetSceneNpcPositionRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MetNpcIdListNotify.CmdId
 */
var MetNpcIdListNotify_CmdId;
(function (MetNpcIdListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MetNpcIdListNotify_CmdId[MetNpcIdListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 521;
     */
    MetNpcIdListNotify_CmdId[MetNpcIdListNotify_CmdId["CMD_ID"] = 521] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MetNpcIdListNotify_CmdId[MetNpcIdListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MetNpcIdListNotify_CmdId[MetNpcIdListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MetNpcIdListNotify_CmdId = exports.MetNpcIdListNotify_CmdId || (exports.MetNpcIdListNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MeetNpcReq.CmdId
 */
var MeetNpcReq_CmdId;
(function (MeetNpcReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MeetNpcReq_CmdId[MeetNpcReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 503;
     */
    MeetNpcReq_CmdId[MeetNpcReq_CmdId["CMD_ID"] = 503] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MeetNpcReq_CmdId[MeetNpcReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MeetNpcReq_CmdId[MeetNpcReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MeetNpcReq_CmdId[MeetNpcReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MeetNpcReq_CmdId = exports.MeetNpcReq_CmdId || (exports.MeetNpcReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MeetNpcRsp.CmdId
 */
var MeetNpcRsp_CmdId;
(function (MeetNpcRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MeetNpcRsp_CmdId[MeetNpcRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 590;
     */
    MeetNpcRsp_CmdId[MeetNpcRsp_CmdId["CMD_ID"] = 590] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MeetNpcRsp_CmdId[MeetNpcRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MeetNpcRsp_CmdId[MeetNpcRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MeetNpcRsp_CmdId = exports.MeetNpcRsp_CmdId || (exports.MeetNpcRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.FinishedTalkIdListNotify.CmdId
 */
var FinishedTalkIdListNotify_CmdId;
(function (FinishedTalkIdListNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishedTalkIdListNotify_CmdId[FinishedTalkIdListNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 573;
     */
    FinishedTalkIdListNotify_CmdId[FinishedTalkIdListNotify_CmdId["CMD_ID"] = 573] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    FinishedTalkIdListNotify_CmdId[FinishedTalkIdListNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    FinishedTalkIdListNotify_CmdId[FinishedTalkIdListNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(FinishedTalkIdListNotify_CmdId = exports.FinishedTalkIdListNotify_CmdId || (exports.FinishedTalkIdListNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class NpcTalkReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NpcTalkReq", [
            { no: 8, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "npc_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "talk_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 npc_entity_id */ 9:
                    message.npcEntityId = reader.uint32();
                    break;
                case /* optional uint32 talk_id */ 7:
                    message.talkId = reader.uint32();
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
        /* optional uint32 entity_id = 8; */
        if (message.entityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 npc_entity_id = 9; */
        if (message.npcEntityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.npcEntityId);
        /* optional uint32 talk_id = 7; */
        if (message.talkId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.talkId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NpcTalkReq
 */
exports.NpcTalkReq = new NpcTalkReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NpcTalkRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NpcTalkRsp", [
            { no: 9, name: "cur_talk_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "npc_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cur_talk_id */ 9:
                    message.curTalkId = reader.uint32();
                    break;
                case /* optional uint32 npc_entity_id */ 6:
                    message.npcEntityId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
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
        /* optional uint32 cur_talk_id = 9; */
        if (message.curTalkId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curTalkId);
        /* optional uint32 npc_entity_id = 6; */
        if (message.npcEntityId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.npcEntityId);
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NpcTalkRsp
 */
exports.NpcTalkRsp = new NpcTalkRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSceneNpcPositionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetSceneNpcPositionReq", [
            { no: 6, name: "npc_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { npcIdList: [] };
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
                case /* repeated uint32 npc_id_list */ 6:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.npcIdList.push(reader.uint32());
                    else
                        message.npcIdList.push(reader.uint32());
                    break;
                case /* optional uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
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
        /* repeated uint32 npc_id_list = 6; */
        for (let i = 0; i < message.npcIdList.length; i++)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.npcIdList[i]);
        /* optional uint32 scene_id = 8; */
        if (message.sceneId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetSceneNpcPositionReq
 */
exports.GetSceneNpcPositionReq = new GetSceneNpcPositionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSceneNpcPositionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetSceneNpcPositionRsp", [
            { no: 10, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "npc_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.NpcPositionInfo },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { npcInfoList: [] };
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
                case /* repeated com.midnights.game.NpcPositionInfo npc_info_list */ 14:
                    message.npcInfoList.push(define_1.NpcPositionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
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
        /* optional int32 retcode = 10; */
        if (message.retcode !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.NpcPositionInfo npc_info_list = 14; */
        for (let i = 0; i < message.npcInfoList.length; i++)
            define_1.NpcPositionInfo.internalBinaryWrite(message.npcInfoList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetSceneNpcPositionRsp
 */
exports.GetSceneNpcPositionRsp = new GetSceneNpcPositionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MetNpcIdListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MetNpcIdListNotify", [
            { no: 9, name: "npc_first_met_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { npcFirstMetIdList: [] };
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
                case /* repeated uint32 npc_first_met_id_list */ 9:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.npcFirstMetIdList.push(reader.uint32());
                    else
                        message.npcFirstMetIdList.push(reader.uint32());
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
        /* repeated uint32 npc_first_met_id_list = 9; */
        for (let i = 0; i < message.npcFirstMetIdList.length; i++)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.npcFirstMetIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MetNpcIdListNotify
 */
exports.MetNpcIdListNotify = new MetNpcIdListNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeetNpcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MeetNpcReq", [
            { no: 4, name: "npc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 npc_id */ 4:
                    message.npcId = reader.uint32();
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
        /* optional uint32 npc_id = 4; */
        if (message.npcId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.npcId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MeetNpcReq
 */
exports.MeetNpcReq = new MeetNpcReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeetNpcRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MeetNpcRsp", [
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "npc_first_met_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 npc_first_met_id */ 8:
                    message.npcFirstMetId = reader.uint32();
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
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 npc_first_met_id = 8; */
        if (message.npcFirstMetId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.npcFirstMetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MeetNpcRsp
 */
exports.MeetNpcRsp = new MeetNpcRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishedTalkIdListNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.FinishedTalkIdListNotify", [
            { no: 1, name: "finished_talk_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishedTalkIdList: [] };
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
                case /* repeated uint32 finished_talk_id_list */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedTalkIdList.push(reader.uint32());
                    else
                        message.finishedTalkIdList.push(reader.uint32());
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
        /* repeated uint32 finished_talk_id_list = 1; */
        for (let i = 0; i < message.finishedTalkIdList.length; i++)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.finishedTalkIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FinishedTalkIdListNotify
 */
exports.FinishedTalkIdListNotify = new FinishedTalkIdListNotify$Type();
