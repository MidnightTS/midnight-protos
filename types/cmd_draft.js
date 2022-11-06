"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftGuestReplyTwiceConfirmNotify = exports.DraftTwiceConfirmResultNotify = exports.DraftGuestReplyTwiceConfirmRsp = exports.DraftGuestReplyTwiceConfirmReq = exports.DraftOwnerTwiceConfirmNotify = exports.DraftInviteResultNotify = exports.DraftGuestReplyInviteNotify = exports.DraftGuestReplyInviteRsp = exports.DraftGuestReplyInviteReq = exports.DraftOwnerInviteNotify = exports.DraftOwnerStartInviteRsp = exports.DraftInviteFailInfo = exports.DraftOwnerStartInviteReq = exports.DraftInviteFailReason = exports.DraftGuestReplyTwiceConfirmNotify_CmdId = exports.DraftTwiceConfirmResultNotify_CmdId = exports.DraftGuestReplyTwiceConfirmRsp_CmdId = exports.DraftGuestReplyTwiceConfirmReq_CmdId = exports.DraftOwnerTwiceConfirmNotify_CmdId = exports.DraftInviteResultNotify_CmdId = exports.DraftGuestReplyInviteNotify_CmdId = exports.DraftGuestReplyInviteRsp_CmdId = exports.DraftGuestReplyInviteReq_CmdId = exports.DraftOwnerInviteNotify_CmdId = exports.DraftOwnerStartInviteRsp_CmdId = exports.DraftOwnerStartInviteReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.DraftOwnerStartInviteReq.CmdId
 */
var DraftOwnerStartInviteReq_CmdId;
(function (DraftOwnerStartInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerStartInviteReq_CmdId[DraftOwnerStartInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5412;
     */
    DraftOwnerStartInviteReq_CmdId[DraftOwnerStartInviteReq_CmdId["CMD_ID"] = 5412] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerStartInviteReq_CmdId[DraftOwnerStartInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftOwnerStartInviteReq_CmdId[DraftOwnerStartInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftOwnerStartInviteReq_CmdId[DraftOwnerStartInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DraftOwnerStartInviteReq_CmdId = exports.DraftOwnerStartInviteReq_CmdId || (exports.DraftOwnerStartInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftOwnerStartInviteRsp.CmdId
 */
var DraftOwnerStartInviteRsp_CmdId;
(function (DraftOwnerStartInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerStartInviteRsp_CmdId[DraftOwnerStartInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5435;
     */
    DraftOwnerStartInviteRsp_CmdId[DraftOwnerStartInviteRsp_CmdId["CMD_ID"] = 5435] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerStartInviteRsp_CmdId[DraftOwnerStartInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftOwnerStartInviteRsp_CmdId[DraftOwnerStartInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftOwnerStartInviteRsp_CmdId[DraftOwnerStartInviteRsp_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DraftOwnerStartInviteRsp_CmdId = exports.DraftOwnerStartInviteRsp_CmdId || (exports.DraftOwnerStartInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftOwnerInviteNotify.CmdId
 */
var DraftOwnerInviteNotify_CmdId;
(function (DraftOwnerInviteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerInviteNotify_CmdId[DraftOwnerInviteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5407;
     */
    DraftOwnerInviteNotify_CmdId[DraftOwnerInviteNotify_CmdId["CMD_ID"] = 5407] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerInviteNotify_CmdId[DraftOwnerInviteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftOwnerInviteNotify_CmdId[DraftOwnerInviteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftOwnerInviteNotify_CmdId = exports.DraftOwnerInviteNotify_CmdId || (exports.DraftOwnerInviteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftGuestReplyInviteReq.CmdId
 */
var DraftGuestReplyInviteReq_CmdId;
(function (DraftGuestReplyInviteReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyInviteReq_CmdId[DraftGuestReplyInviteReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5421;
     */
    DraftGuestReplyInviteReq_CmdId[DraftGuestReplyInviteReq_CmdId["CMD_ID"] = 5421] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyInviteReq_CmdId[DraftGuestReplyInviteReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyInviteReq_CmdId[DraftGuestReplyInviteReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyInviteReq_CmdId[DraftGuestReplyInviteReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DraftGuestReplyInviteReq_CmdId = exports.DraftGuestReplyInviteReq_CmdId || (exports.DraftGuestReplyInviteReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftGuestReplyInviteRsp.CmdId
 */
var DraftGuestReplyInviteRsp_CmdId;
(function (DraftGuestReplyInviteRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyInviteRsp_CmdId[DraftGuestReplyInviteRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5403;
     */
    DraftGuestReplyInviteRsp_CmdId[DraftGuestReplyInviteRsp_CmdId["CMD_ID"] = 5403] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyInviteRsp_CmdId[DraftGuestReplyInviteRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyInviteRsp_CmdId[DraftGuestReplyInviteRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftGuestReplyInviteRsp_CmdId = exports.DraftGuestReplyInviteRsp_CmdId || (exports.DraftGuestReplyInviteRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftGuestReplyInviteNotify.CmdId
 */
var DraftGuestReplyInviteNotify_CmdId;
(function (DraftGuestReplyInviteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyInviteNotify_CmdId[DraftGuestReplyInviteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5490;
     */
    DraftGuestReplyInviteNotify_CmdId[DraftGuestReplyInviteNotify_CmdId["CMD_ID"] = 5490] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyInviteNotify_CmdId[DraftGuestReplyInviteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyInviteNotify_CmdId[DraftGuestReplyInviteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftGuestReplyInviteNotify_CmdId = exports.DraftGuestReplyInviteNotify_CmdId || (exports.DraftGuestReplyInviteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftInviteResultNotify.CmdId
 */
var DraftInviteResultNotify_CmdId;
(function (DraftInviteResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftInviteResultNotify_CmdId[DraftInviteResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5473;
     */
    DraftInviteResultNotify_CmdId[DraftInviteResultNotify_CmdId["CMD_ID"] = 5473] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftInviteResultNotify_CmdId[DraftInviteResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftInviteResultNotify_CmdId[DraftInviteResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftInviteResultNotify_CmdId = exports.DraftInviteResultNotify_CmdId || (exports.DraftInviteResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftOwnerTwiceConfirmNotify.CmdId
 */
var DraftOwnerTwiceConfirmNotify_CmdId;
(function (DraftOwnerTwiceConfirmNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerTwiceConfirmNotify_CmdId[DraftOwnerTwiceConfirmNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5499;
     */
    DraftOwnerTwiceConfirmNotify_CmdId[DraftOwnerTwiceConfirmNotify_CmdId["CMD_ID"] = 5499] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftOwnerTwiceConfirmNotify_CmdId[DraftOwnerTwiceConfirmNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftOwnerTwiceConfirmNotify_CmdId[DraftOwnerTwiceConfirmNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftOwnerTwiceConfirmNotify_CmdId = exports.DraftOwnerTwiceConfirmNotify_CmdId || (exports.DraftOwnerTwiceConfirmNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftGuestReplyTwiceConfirmReq.CmdId
 */
var DraftGuestReplyTwiceConfirmReq_CmdId;
(function (DraftGuestReplyTwiceConfirmReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyTwiceConfirmReq_CmdId[DraftGuestReplyTwiceConfirmReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5431;
     */
    DraftGuestReplyTwiceConfirmReq_CmdId[DraftGuestReplyTwiceConfirmReq_CmdId["CMD_ID"] = 5431] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyTwiceConfirmReq_CmdId[DraftGuestReplyTwiceConfirmReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyTwiceConfirmReq_CmdId[DraftGuestReplyTwiceConfirmReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyTwiceConfirmReq_CmdId[DraftGuestReplyTwiceConfirmReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DraftGuestReplyTwiceConfirmReq_CmdId = exports.DraftGuestReplyTwiceConfirmReq_CmdId || (exports.DraftGuestReplyTwiceConfirmReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftGuestReplyTwiceConfirmRsp.CmdId
 */
var DraftGuestReplyTwiceConfirmRsp_CmdId;
(function (DraftGuestReplyTwiceConfirmRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyTwiceConfirmRsp_CmdId[DraftGuestReplyTwiceConfirmRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5475;
     */
    DraftGuestReplyTwiceConfirmRsp_CmdId[DraftGuestReplyTwiceConfirmRsp_CmdId["CMD_ID"] = 5475] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyTwiceConfirmRsp_CmdId[DraftGuestReplyTwiceConfirmRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyTwiceConfirmRsp_CmdId[DraftGuestReplyTwiceConfirmRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftGuestReplyTwiceConfirmRsp_CmdId = exports.DraftGuestReplyTwiceConfirmRsp_CmdId || (exports.DraftGuestReplyTwiceConfirmRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftTwiceConfirmResultNotify.CmdId
 */
var DraftTwiceConfirmResultNotify_CmdId;
(function (DraftTwiceConfirmResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftTwiceConfirmResultNotify_CmdId[DraftTwiceConfirmResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5448;
     */
    DraftTwiceConfirmResultNotify_CmdId[DraftTwiceConfirmResultNotify_CmdId["CMD_ID"] = 5448] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftTwiceConfirmResultNotify_CmdId[DraftTwiceConfirmResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftTwiceConfirmResultNotify_CmdId[DraftTwiceConfirmResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftTwiceConfirmResultNotify_CmdId = exports.DraftTwiceConfirmResultNotify_CmdId || (exports.DraftTwiceConfirmResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftGuestReplyTwiceConfirmNotify.CmdId
 */
var DraftGuestReplyTwiceConfirmNotify_CmdId;
(function (DraftGuestReplyTwiceConfirmNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyTwiceConfirmNotify_CmdId[DraftGuestReplyTwiceConfirmNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5497;
     */
    DraftGuestReplyTwiceConfirmNotify_CmdId[DraftGuestReplyTwiceConfirmNotify_CmdId["CMD_ID"] = 5497] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DraftGuestReplyTwiceConfirmNotify_CmdId[DraftGuestReplyTwiceConfirmNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DraftGuestReplyTwiceConfirmNotify_CmdId[DraftGuestReplyTwiceConfirmNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DraftGuestReplyTwiceConfirmNotify_CmdId = exports.DraftGuestReplyTwiceConfirmNotify_CmdId || (exports.DraftGuestReplyTwiceConfirmNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DraftInviteFailReason
 */
var DraftInviteFailReason;
(function (DraftInviteFailReason) {
    /**
     * @generated from protobuf enum value: DRAFT_FAIL_UNKNOWN = 0;
     */
    DraftInviteFailReason[DraftInviteFailReason["DRAFT_FAIL_UNKNOWN"] = 0] = "DRAFT_FAIL_UNKNOWN";
    /**
     * @generated from protobuf enum value: DRAFT_ACTIVITY_NOT_OPEN = 1;
     */
    DraftInviteFailReason[DraftInviteFailReason["DRAFT_ACTIVITY_NOT_OPEN"] = 1] = "DRAFT_ACTIVITY_NOT_OPEN";
    /**
     * @generated from protobuf enum value: DRAFT_ACTIVITY_PLAY_NOT_OPEN = 2;
     */
    DraftInviteFailReason[DraftInviteFailReason["DRAFT_ACTIVITY_PLAY_NOT_OPEN"] = 2] = "DRAFT_ACTIVITY_PLAY_NOT_OPEN";
    /**
     * @generated from protobuf enum value: DRAFT_SCENE_NOT_MEET = 3;
     */
    DraftInviteFailReason[DraftInviteFailReason["DRAFT_SCENE_NOT_MEET"] = 3] = "DRAFT_SCENE_NOT_MEET";
    /**
     * @generated from protobuf enum value: DRAFT_WORLD_NOT_MEET = 4;
     */
    DraftInviteFailReason[DraftInviteFailReason["DRAFT_WORLD_NOT_MEET"] = 4] = "DRAFT_WORLD_NOT_MEET";
    /**
     * @generated from protobuf enum value: DRAFT_PLAY_LIMIT_NOT_MEET = 5;
     */
    DraftInviteFailReason[DraftInviteFailReason["DRAFT_PLAY_LIMIT_NOT_MEET"] = 5] = "DRAFT_PLAY_LIMIT_NOT_MEET";
})(DraftInviteFailReason = exports.DraftInviteFailReason || (exports.DraftInviteFailReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerStartInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftOwnerStartInviteReq", [
            { no: 14, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 draft_id */ 14:
                    message.draftId = reader.uint32();
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
        /* optional uint32 draft_id = 14; */
        if (message.draftId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftOwnerStartInviteReq
 */
exports.DraftOwnerStartInviteReq = new DraftOwnerStartInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftInviteFailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftInviteFailInfo", [
            { no: 8, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.DraftInviteFailReason", DraftInviteFailReason] }
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
                case /* optional uint32 uid */ 8:
                    message.uid = reader.uint32();
                    break;
                case /* optional com.midnights.game.DraftInviteFailReason reason */ 5:
                    message.reason = reader.int32();
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
        /* optional uint32 uid = 8; */
        if (message.uid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.uid);
        /* optional com.midnights.game.DraftInviteFailReason reason = 5; */
        if (message.reason !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftInviteFailInfo
 */
exports.DraftInviteFailInfo = new DraftInviteFailInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerStartInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftOwnerStartInviteRsp", [
            { no: 15, name: "invite_fail_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.DraftInviteFailInfo },
            { no: 9, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "wrong_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { inviteFailInfoList: [] };
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
                case /* repeated com.midnights.game.DraftInviteFailInfo invite_fail_info_list */ 15:
                    message.inviteFailInfoList.push(exports.DraftInviteFailInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 wrong_uid */ 3:
                    message.wrongUid = reader.uint32();
                    break;
                case /* optional uint32 draft_id */ 14:
                    message.draftId = reader.uint32();
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
        /* repeated com.midnights.game.DraftInviteFailInfo invite_fail_info_list = 15; */
        for (let i = 0; i < message.inviteFailInfoList.length; i++)
            exports.DraftInviteFailInfo.internalBinaryWrite(message.inviteFailInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 9; */
        if (message.retcode !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 wrong_uid = 3; */
        if (message.wrongUid !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.wrongUid);
        /* optional uint32 draft_id = 14; */
        if (message.draftId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftOwnerStartInviteRsp
 */
exports.DraftOwnerStartInviteRsp = new DraftOwnerStartInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftOwnerInviteNotify", [
            { no: 4, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "invite_deadline_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 draft_id */ 4:
                    message.draftId = reader.uint32();
                    break;
                case /* optional uint32 invite_deadline_time */ 15:
                    message.inviteDeadlineTime = reader.uint32();
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
        /* optional uint32 draft_id = 4; */
        if (message.draftId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.draftId);
        /* optional uint32 invite_deadline_time = 15; */
        if (message.inviteDeadlineTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.inviteDeadlineTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftOwnerInviteNotify
 */
exports.DraftOwnerInviteNotify = new DraftOwnerInviteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyInviteReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftGuestReplyInviteReq", [
            { no: 10, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 draft_id */ 10:
                    message.draftId = reader.uint32();
                    break;
                case /* optional bool is_agree */ 3:
                    message.isAgree = reader.bool();
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
        /* optional uint32 draft_id = 10; */
        if (message.draftId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.draftId);
        /* optional bool is_agree = 3; */
        if (message.isAgree !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftGuestReplyInviteReq
 */
exports.DraftGuestReplyInviteReq = new DraftGuestReplyInviteReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftGuestReplyInviteRsp", [
            { no: 3, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 draft_id */ 3:
                    message.draftId = reader.uint32();
                    break;
                case /* optional int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* optional bool is_agree */ 10:
                    message.isAgree = reader.bool();
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
        /* optional uint32 draft_id = 3; */
        if (message.draftId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.draftId);
        /* optional int32 retcode = 1; */
        if (message.retcode !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional bool is_agree = 10; */
        if (message.isAgree !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAgree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftGuestReplyInviteRsp
 */
exports.DraftGuestReplyInviteRsp = new DraftGuestReplyInviteRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyInviteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftGuestReplyInviteNotify", [
            { no: 5, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "guest_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 draft_id */ 5:
                    message.draftId = reader.uint32();
                    break;
                case /* optional bool is_agree */ 9:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 guest_uid */ 10:
                    message.guestUid = reader.uint32();
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
        /* optional uint32 draft_id = 5; */
        if (message.draftId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.draftId);
        /* optional bool is_agree = 9; */
        if (message.isAgree !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isAgree);
        /* optional uint32 guest_uid = 10; */
        if (message.guestUid !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.guestUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftGuestReplyInviteNotify
 */
exports.DraftGuestReplyInviteNotify = new DraftGuestReplyInviteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftInviteResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftInviteResultNotify", [
            { no: 9, name: "is_all_argee", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_all_argee */ 9:
                    message.isAllArgee = reader.bool();
                    break;
                case /* optional uint32 draft_id */ 13:
                    message.draftId = reader.uint32();
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
        /* optional bool is_all_argee = 9; */
        if (message.isAllArgee !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isAllArgee);
        /* optional uint32 draft_id = 13; */
        if (message.draftId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftInviteResultNotify
 */
exports.DraftInviteResultNotify = new DraftInviteResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftOwnerTwiceConfirmNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftOwnerTwiceConfirmNotify", [
            { no: 15, name: "twice_confirm_deadline_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 twice_confirm_deadline_time */ 15:
                    message.twiceConfirmDeadlineTime = reader.uint32();
                    break;
                case /* optional uint32 draft_id */ 14:
                    message.draftId = reader.uint32();
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
        /* optional uint32 twice_confirm_deadline_time = 15; */
        if (message.twiceConfirmDeadlineTime !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.twiceConfirmDeadlineTime);
        /* optional uint32 draft_id = 14; */
        if (message.draftId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftOwnerTwiceConfirmNotify
 */
exports.DraftOwnerTwiceConfirmNotify = new DraftOwnerTwiceConfirmNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyTwiceConfirmReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftGuestReplyTwiceConfirmReq", [
            { no: 15, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_agree */ 15:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 draft_id */ 14:
                    message.draftId = reader.uint32();
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
        /* optional bool is_agree = 15; */
        if (message.isAgree !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isAgree);
        /* optional uint32 draft_id = 14; */
        if (message.draftId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftGuestReplyTwiceConfirmReq
 */
exports.DraftGuestReplyTwiceConfirmReq = new DraftGuestReplyTwiceConfirmReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyTwiceConfirmRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftGuestReplyTwiceConfirmRsp", [
            { no: 5, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional uint32 draft_id */ 5:
                    message.draftId = reader.uint32();
                    break;
                case /* optional bool is_agree */ 13:
                    message.isAgree = reader.bool();
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
        /* optional uint32 draft_id = 5; */
        if (message.draftId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.draftId);
        /* optional bool is_agree = 13; */
        if (message.isAgree !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isAgree);
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
 * @generated MessageType for protobuf message com.midnights.game.DraftGuestReplyTwiceConfirmRsp
 */
exports.DraftGuestReplyTwiceConfirmRsp = new DraftGuestReplyTwiceConfirmRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftTwiceConfirmResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftTwiceConfirmResultNotify", [
            { no: 7, name: "is_all_argee", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_all_argee */ 7:
                    message.isAllArgee = reader.bool();
                    break;
                case /* optional uint32 draft_id */ 1:
                    message.draftId = reader.uint32();
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
        /* optional bool is_all_argee = 7; */
        if (message.isAllArgee !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isAllArgee);
        /* optional uint32 draft_id = 1; */
        if (message.draftId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.draftId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftTwiceConfirmResultNotify
 */
exports.DraftTwiceConfirmResultNotify = new DraftTwiceConfirmResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DraftGuestReplyTwiceConfirmNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DraftGuestReplyTwiceConfirmNotify", [
            { no: 14, name: "is_agree", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "draft_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "guest_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_agree */ 14:
                    message.isAgree = reader.bool();
                    break;
                case /* optional uint32 draft_id */ 15:
                    message.draftId = reader.uint32();
                    break;
                case /* optional uint32 guest_uid */ 7:
                    message.guestUid = reader.uint32();
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
        /* optional bool is_agree = 14; */
        if (message.isAgree !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isAgree);
        /* optional uint32 draft_id = 15; */
        if (message.draftId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.draftId);
        /* optional uint32 guest_uid = 7; */
        if (message.guestUid !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.guestUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DraftGuestReplyTwiceConfirmNotify
 */
exports.DraftGuestReplyTwiceConfirmNotify = new DraftGuestReplyTwiceConfirmNotify$Type();
