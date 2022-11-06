"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatChannelDataNotify = exports.ChatChannelUpdateNotify = exports.ReadPrivateChatRsp = exports.ReadPrivateChatReq = exports.PullRecentChatRsp = exports.PullRecentChatReq = exports.PullPrivateChatRsp = exports.PullPrivateChatReq = exports.PrivateChatNotify = exports.PrivateChatRsp = exports.PrivateChatReq = exports.ChatChannelDataNotify_CmdId = exports.ChatChannelUpdateNotify_CmdId = exports.ReadPrivateChatRsp_CmdId = exports.ReadPrivateChatReq_CmdId = exports.PullRecentChatRsp_CmdId = exports.PullRecentChatReq_CmdId = exports.PullPrivateChatRsp_CmdId = exports.PullPrivateChatReq_CmdId = exports.PrivateChatNotify_CmdId = exports.PrivateChatRsp_CmdId = exports.PrivateChatReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const cmd_scene_1 = require("./cmd_scene");
/**
 * @generated from protobuf enum com.midnights.game.PrivateChatReq.CmdId
 */
var PrivateChatReq_CmdId;
(function (PrivateChatReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PrivateChatReq_CmdId[PrivateChatReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5022;
     */
    PrivateChatReq_CmdId[PrivateChatReq_CmdId["CMD_ID"] = 5022] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PrivateChatReq_CmdId[PrivateChatReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PrivateChatReq_CmdId[PrivateChatReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PrivateChatReq_CmdId[PrivateChatReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PrivateChatReq_CmdId = exports.PrivateChatReq_CmdId || (exports.PrivateChatReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PrivateChatRsp.CmdId
 */
var PrivateChatRsp_CmdId;
(function (PrivateChatRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PrivateChatRsp_CmdId[PrivateChatRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5048;
     */
    PrivateChatRsp_CmdId[PrivateChatRsp_CmdId["CMD_ID"] = 5048] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PrivateChatRsp_CmdId[PrivateChatRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PrivateChatRsp_CmdId[PrivateChatRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PrivateChatRsp_CmdId = exports.PrivateChatRsp_CmdId || (exports.PrivateChatRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PrivateChatNotify.CmdId
 */
var PrivateChatNotify_CmdId;
(function (PrivateChatNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PrivateChatNotify_CmdId[PrivateChatNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4962;
     */
    PrivateChatNotify_CmdId[PrivateChatNotify_CmdId["CMD_ID"] = 4962] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PrivateChatNotify_CmdId[PrivateChatNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PrivateChatNotify_CmdId[PrivateChatNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PrivateChatNotify_CmdId = exports.PrivateChatNotify_CmdId || (exports.PrivateChatNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PullPrivateChatReq.CmdId
 */
var PullPrivateChatReq_CmdId;
(function (PullPrivateChatReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullPrivateChatReq_CmdId[PullPrivateChatReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4971;
     */
    PullPrivateChatReq_CmdId[PullPrivateChatReq_CmdId["CMD_ID"] = 4971] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullPrivateChatReq_CmdId[PullPrivateChatReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PullPrivateChatReq_CmdId[PullPrivateChatReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PullPrivateChatReq_CmdId[PullPrivateChatReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PullPrivateChatReq_CmdId = exports.PullPrivateChatReq_CmdId || (exports.PullPrivateChatReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PullPrivateChatRsp.CmdId
 */
var PullPrivateChatRsp_CmdId;
(function (PullPrivateChatRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullPrivateChatRsp_CmdId[PullPrivateChatRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4953;
     */
    PullPrivateChatRsp_CmdId[PullPrivateChatRsp_CmdId["CMD_ID"] = 4953] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullPrivateChatRsp_CmdId[PullPrivateChatRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PullPrivateChatRsp_CmdId[PullPrivateChatRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PullPrivateChatRsp_CmdId = exports.PullPrivateChatRsp_CmdId || (exports.PullPrivateChatRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PullRecentChatReq.CmdId
 */
var PullRecentChatReq_CmdId;
(function (PullRecentChatReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullRecentChatReq_CmdId[PullRecentChatReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5040;
     */
    PullRecentChatReq_CmdId[PullRecentChatReq_CmdId["CMD_ID"] = 5040] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullRecentChatReq_CmdId[PullRecentChatReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PullRecentChatReq_CmdId[PullRecentChatReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PullRecentChatReq_CmdId[PullRecentChatReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PullRecentChatReq_CmdId = exports.PullRecentChatReq_CmdId || (exports.PullRecentChatReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PullRecentChatRsp.CmdId
 */
var PullRecentChatRsp_CmdId;
(function (PullRecentChatRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullRecentChatRsp_CmdId[PullRecentChatRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5023;
     */
    PullRecentChatRsp_CmdId[PullRecentChatRsp_CmdId["CMD_ID"] = 5023] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PullRecentChatRsp_CmdId[PullRecentChatRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PullRecentChatRsp_CmdId[PullRecentChatRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PullRecentChatRsp_CmdId = exports.PullRecentChatRsp_CmdId || (exports.PullRecentChatRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadPrivateChatReq.CmdId
 */
var ReadPrivateChatReq_CmdId;
(function (ReadPrivateChatReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadPrivateChatReq_CmdId[ReadPrivateChatReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5049;
     */
    ReadPrivateChatReq_CmdId[ReadPrivateChatReq_CmdId["CMD_ID"] = 5049] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadPrivateChatReq_CmdId[ReadPrivateChatReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadPrivateChatReq_CmdId[ReadPrivateChatReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadPrivateChatReq_CmdId[ReadPrivateChatReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReadPrivateChatReq_CmdId = exports.ReadPrivateChatReq_CmdId || (exports.ReadPrivateChatReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadPrivateChatRsp.CmdId
 */
var ReadPrivateChatRsp_CmdId;
(function (ReadPrivateChatRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadPrivateChatRsp_CmdId[ReadPrivateChatRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4981;
     */
    ReadPrivateChatRsp_CmdId[ReadPrivateChatRsp_CmdId["CMD_ID"] = 4981] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadPrivateChatRsp_CmdId[ReadPrivateChatRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadPrivateChatRsp_CmdId[ReadPrivateChatRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ReadPrivateChatRsp_CmdId = exports.ReadPrivateChatRsp_CmdId || (exports.ReadPrivateChatRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChatChannelUpdateNotify.CmdId
 */
var ChatChannelUpdateNotify_CmdId;
(function (ChatChannelUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChatChannelUpdateNotify_CmdId[ChatChannelUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5025;
     */
    ChatChannelUpdateNotify_CmdId[ChatChannelUpdateNotify_CmdId["CMD_ID"] = 5025] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChatChannelUpdateNotify_CmdId[ChatChannelUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChatChannelUpdateNotify_CmdId[ChatChannelUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChatChannelUpdateNotify_CmdId = exports.ChatChannelUpdateNotify_CmdId || (exports.ChatChannelUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChatChannelDataNotify.CmdId
 */
var ChatChannelDataNotify_CmdId;
(function (ChatChannelDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChatChannelDataNotify_CmdId[ChatChannelDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 4998;
     */
    ChatChannelDataNotify_CmdId[ChatChannelDataNotify_CmdId["CMD_ID"] = 4998] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChatChannelDataNotify_CmdId[ChatChannelDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChatChannelDataNotify_CmdId[ChatChannelDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ChatChannelDataNotify_CmdId = exports.ChatChannelDataNotify_CmdId || (exports.ChatChannelDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PrivateChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PrivateChatReq", [
            { no: 7, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "text", kind: "scalar", oneof: "content", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "icon", kind: "scalar", oneof: "content", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { content: { oneofKind: undefined } };
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
                case /* optional uint32 target_uid */ 7:
                    message.targetUid = reader.uint32();
                    break;
                case /* string text */ 3:
                    message.content = {
                        oneofKind: "text",
                        text: reader.string()
                    };
                    break;
                case /* uint32 icon */ 4:
                    message.content = {
                        oneofKind: "icon",
                        icon: reader.uint32()
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
        /* optional uint32 target_uid = 7; */
        if (message.targetUid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* string text = 3; */
        if (message.content.oneofKind === "text")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.content.text);
        /* uint32 icon = 4; */
        if (message.content.oneofKind === "icon")
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.content.icon);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PrivateChatReq
 */
exports.PrivateChatReq = new PrivateChatReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrivateChatRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PrivateChatRsp", [
            { no: 12, name: "chat_forbidden_endtime", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 chat_forbidden_endtime */ 12:
                    message.chatForbiddenEndtime = reader.uint32();
                    break;
                case /* optional int32 retcode */ 14:
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
        /* optional uint32 chat_forbidden_endtime = 12; */
        if (message.chatForbiddenEndtime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.chatForbiddenEndtime);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PrivateChatRsp
 */
exports.PrivateChatRsp = new PrivateChatRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrivateChatNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PrivateChatNotify", [
            { no: 7, name: "chat_info", kind: "message", T: () => cmd_scene_1.ChatInfo }
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
                case /* optional com.midnights.game.ChatInfo chat_info */ 7:
                    message.chatInfo = cmd_scene_1.ChatInfo.internalBinaryRead(reader, reader.uint32(), options, message.chatInfo);
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
        /* optional com.midnights.game.ChatInfo chat_info = 7; */
        if (message.chatInfo)
            cmd_scene_1.ChatInfo.internalBinaryWrite(message.chatInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PrivateChatNotify
 */
exports.PrivateChatNotify = new PrivateChatNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PullPrivateChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PullPrivateChatReq", [
            { no: 5, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "pull_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "from_sequence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 5:
                    message.targetUid = reader.uint32();
                    break;
                case /* optional uint32 pull_num */ 7:
                    message.pullNum = reader.uint32();
                    break;
                case /* optional uint32 from_sequence */ 12:
                    message.fromSequence = reader.uint32();
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
        /* optional uint32 target_uid = 5; */
        if (message.targetUid !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* optional uint32 pull_num = 7; */
        if (message.pullNum !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.pullNum);
        /* optional uint32 from_sequence = 12; */
        if (message.fromSequence !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.fromSequence);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PullPrivateChatReq
 */
exports.PullPrivateChatReq = new PullPrivateChatReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PullPrivateChatRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PullPrivateChatRsp", [
            { no: 15, name: "chat_info", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => cmd_scene_1.ChatInfo },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { chatInfo: [] };
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
                case /* repeated com.midnights.game.ChatInfo chat_info */ 15:
                    message.chatInfo.push(cmd_scene_1.ChatInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.ChatInfo chat_info = 15; */
        for (let i = 0; i < message.chatInfo.length; i++)
            cmd_scene_1.ChatInfo.internalBinaryWrite(message.chatInfo[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.PullPrivateChatRsp
 */
exports.PullPrivateChatRsp = new PullPrivateChatRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PullRecentChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PullRecentChatReq", [
            { no: 6, name: "pull_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "begin_sequence", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 pull_num */ 6:
                    message.pullNum = reader.uint32();
                    break;
                case /* optional uint32 begin_sequence */ 15:
                    message.beginSequence = reader.uint32();
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
        /* optional uint32 pull_num = 6; */
        if (message.pullNum !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.pullNum);
        /* optional uint32 begin_sequence = 15; */
        if (message.beginSequence !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.beginSequence);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PullRecentChatReq
 */
exports.PullRecentChatReq = new PullRecentChatReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PullRecentChatRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PullRecentChatRsp", [
            { no: 15, name: "chat_info", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => cmd_scene_1.ChatInfo },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { chatInfo: [] };
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
                case /* repeated com.midnights.game.ChatInfo chat_info */ 15:
                    message.chatInfo.push(cmd_scene_1.ChatInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 3:
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
        /* repeated com.midnights.game.ChatInfo chat_info = 15; */
        for (let i = 0; i < message.chatInfo.length; i++)
            cmd_scene_1.ChatInfo.internalBinaryWrite(message.chatInfo[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PullRecentChatRsp
 */
exports.PullRecentChatRsp = new PullRecentChatRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadPrivateChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadPrivateChatReq", [
            { no: 1, name: "target_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 target_uid */ 1:
                    message.targetUid = reader.uint32();
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
        /* optional uint32 target_uid = 1; */
        if (message.targetUid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReadPrivateChatReq
 */
exports.ReadPrivateChatReq = new ReadPrivateChatReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadPrivateChatRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadPrivateChatRsp", [
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReadPrivateChatRsp
 */
exports.ReadPrivateChatRsp = new ReadPrivateChatRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatChannelUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChatChannelUpdateNotify", [
            { no: 3, name: "channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_create", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 channel_id */ 3:
                    message.channelId = reader.uint32();
                    break;
                case /* optional bool is_create */ 15:
                    message.isCreate = reader.bool();
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
        /* optional uint32 channel_id = 3; */
        if (message.channelId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.channelId);
        /* optional bool is_create = 15; */
        if (message.isCreate !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isCreate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChatChannelUpdateNotify
 */
exports.ChatChannelUpdateNotify = new ChatChannelUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChatChannelDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChatChannelDataNotify", [
            { no: 3, name: "channel_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { channelList: [] };
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
                case /* repeated uint32 channel_list */ 3:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.channelList.push(reader.uint32());
                    else
                        message.channelList.push(reader.uint32());
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
        /* repeated uint32 channel_list = 3; */
        for (let i = 0; i < message.channelList.length; i++)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.channelList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChatChannelDataNotify
 */
exports.ChatChannelDataNotify = new ChatChannelDataNotify$Type();
