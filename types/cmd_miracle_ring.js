"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiracleRingDestroyNotify = exports.MiracleRingDeliverItemRsp = exports.MiracleRingDeliverItemReq = exports.MiracleRingDropResultNotify = exports.MiracleRingTakeRewardRsp = exports.MiracleRingTakeRewardReq = exports.MiracleRingDataNotify = exports.UseMiracleRingRsp = exports.UseMiracleRingReq = exports.MiracleRingDestroyNotify_CmdId = exports.MiracleRingDeliverItemRsp_CmdId = exports.MiracleRingDeliverItemReq_CmdId = exports.MiracleRingDropResultNotify_CmdId = exports.MiracleRingTakeRewardRsp_CmdId = exports.MiracleRingTakeRewardReq_CmdId = exports.MiracleRingDataNotify_CmdId = exports.UseMiracleRingRsp_CmdId = exports.UseMiracleRingReq_MiracleRingOpType = exports.UseMiracleRingReq_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const cmd_gadget_1 = require("./cmd_gadget");
const define_1 = require("./define");
const cmd_gadget_2 = require("./cmd_gadget");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.UseMiracleRingReq.CmdId
 */
var UseMiracleRingReq_CmdId;
(function (UseMiracleRingReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseMiracleRingReq_CmdId[UseMiracleRingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5226;
     */
    UseMiracleRingReq_CmdId[UseMiracleRingReq_CmdId["CMD_ID"] = 5226] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseMiracleRingReq_CmdId[UseMiracleRingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseMiracleRingReq_CmdId[UseMiracleRingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseMiracleRingReq_CmdId[UseMiracleRingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(UseMiracleRingReq_CmdId = exports.UseMiracleRingReq_CmdId || (exports.UseMiracleRingReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseMiracleRingReq.MiracleRingOpType
 */
var UseMiracleRingReq_MiracleRingOpType;
(function (UseMiracleRingReq_MiracleRingOpType) {
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_NONE = 0;
     */
    UseMiracleRingReq_MiracleRingOpType[UseMiracleRingReq_MiracleRingOpType["MIRACLE_RING_OP_NONE"] = 0] = "MIRACLE_RING_OP_NONE";
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_PLACE = 1;
     */
    UseMiracleRingReq_MiracleRingOpType[UseMiracleRingReq_MiracleRingOpType["MIRACLE_RING_OP_PLACE"] = 1] = "MIRACLE_RING_OP_PLACE";
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_RETRACT = 2;
     */
    UseMiracleRingReq_MiracleRingOpType[UseMiracleRingReq_MiracleRingOpType["MIRACLE_RING_OP_RETRACT"] = 2] = "MIRACLE_RING_OP_RETRACT";
})(UseMiracleRingReq_MiracleRingOpType = exports.UseMiracleRingReq_MiracleRingOpType || (exports.UseMiracleRingReq_MiracleRingOpType = {}));
/**
 * @generated from protobuf enum com.midnights.game.UseMiracleRingRsp.CmdId
 */
var UseMiracleRingRsp_CmdId;
(function (UseMiracleRingRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseMiracleRingRsp_CmdId[UseMiracleRingRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5218;
     */
    UseMiracleRingRsp_CmdId[UseMiracleRingRsp_CmdId["CMD_ID"] = 5218] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    UseMiracleRingRsp_CmdId[UseMiracleRingRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    UseMiracleRingRsp_CmdId[UseMiracleRingRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(UseMiracleRingRsp_CmdId = exports.UseMiracleRingRsp_CmdId || (exports.UseMiracleRingRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingDataNotify.CmdId
 */
var MiracleRingDataNotify_CmdId;
(function (MiracleRingDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDataNotify_CmdId[MiracleRingDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5225;
     */
    MiracleRingDataNotify_CmdId[MiracleRingDataNotify_CmdId["CMD_ID"] = 5225] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDataNotify_CmdId[MiracleRingDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingDataNotify_CmdId[MiracleRingDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MiracleRingDataNotify_CmdId = exports.MiracleRingDataNotify_CmdId || (exports.MiracleRingDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingTakeRewardReq.CmdId
 */
var MiracleRingTakeRewardReq_CmdId;
(function (MiracleRingTakeRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingTakeRewardReq_CmdId[MiracleRingTakeRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5207;
     */
    MiracleRingTakeRewardReq_CmdId[MiracleRingTakeRewardReq_CmdId["CMD_ID"] = 5207] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingTakeRewardReq_CmdId[MiracleRingTakeRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingTakeRewardReq_CmdId[MiracleRingTakeRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingTakeRewardReq_CmdId[MiracleRingTakeRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MiracleRingTakeRewardReq_CmdId = exports.MiracleRingTakeRewardReq_CmdId || (exports.MiracleRingTakeRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingTakeRewardRsp.CmdId
 */
var MiracleRingTakeRewardRsp_CmdId;
(function (MiracleRingTakeRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingTakeRewardRsp_CmdId[MiracleRingTakeRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5202;
     */
    MiracleRingTakeRewardRsp_CmdId[MiracleRingTakeRewardRsp_CmdId["CMD_ID"] = 5202] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingTakeRewardRsp_CmdId[MiracleRingTakeRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingTakeRewardRsp_CmdId[MiracleRingTakeRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MiracleRingTakeRewardRsp_CmdId = exports.MiracleRingTakeRewardRsp_CmdId || (exports.MiracleRingTakeRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingDropResultNotify.CmdId
 */
var MiracleRingDropResultNotify_CmdId;
(function (MiracleRingDropResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDropResultNotify_CmdId[MiracleRingDropResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5231;
     */
    MiracleRingDropResultNotify_CmdId[MiracleRingDropResultNotify_CmdId["CMD_ID"] = 5231] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDropResultNotify_CmdId[MiracleRingDropResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingDropResultNotify_CmdId[MiracleRingDropResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MiracleRingDropResultNotify_CmdId = exports.MiracleRingDropResultNotify_CmdId || (exports.MiracleRingDropResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingDeliverItemReq.CmdId
 */
var MiracleRingDeliverItemReq_CmdId;
(function (MiracleRingDeliverItemReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDeliverItemReq_CmdId[MiracleRingDeliverItemReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5229;
     */
    MiracleRingDeliverItemReq_CmdId[MiracleRingDeliverItemReq_CmdId["CMD_ID"] = 5229] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDeliverItemReq_CmdId[MiracleRingDeliverItemReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingDeliverItemReq_CmdId[MiracleRingDeliverItemReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingDeliverItemReq_CmdId[MiracleRingDeliverItemReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(MiracleRingDeliverItemReq_CmdId = exports.MiracleRingDeliverItemReq_CmdId || (exports.MiracleRingDeliverItemReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingDeliverItemRsp.CmdId
 */
var MiracleRingDeliverItemRsp_CmdId;
(function (MiracleRingDeliverItemRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDeliverItemRsp_CmdId[MiracleRingDeliverItemRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5222;
     */
    MiracleRingDeliverItemRsp_CmdId[MiracleRingDeliverItemRsp_CmdId["CMD_ID"] = 5222] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDeliverItemRsp_CmdId[MiracleRingDeliverItemRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingDeliverItemRsp_CmdId[MiracleRingDeliverItemRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MiracleRingDeliverItemRsp_CmdId = exports.MiracleRingDeliverItemRsp_CmdId || (exports.MiracleRingDeliverItemRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MiracleRingDestroyNotify.CmdId
 */
var MiracleRingDestroyNotify_CmdId;
(function (MiracleRingDestroyNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDestroyNotify_CmdId[MiracleRingDestroyNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5244;
     */
    MiracleRingDestroyNotify_CmdId[MiracleRingDestroyNotify_CmdId["CMD_ID"] = 5244] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MiracleRingDestroyNotify_CmdId[MiracleRingDestroyNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MiracleRingDestroyNotify_CmdId[MiracleRingDestroyNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MiracleRingDestroyNotify_CmdId = exports.MiracleRingDestroyNotify_CmdId || (exports.MiracleRingDestroyNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class UseMiracleRingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseMiracleRingReq", [
            { no: 13, name: "miracle_ring_op_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "pos", kind: "message", T: () => define_2.Vector },
            { no: 7, name: "rot", kind: "message", T: () => define_2.Vector }
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
                case /* optional uint32 miracle_ring_op_type */ 13:
                    message.miracleRingOpType = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector pos */ 8:
                    message.pos = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* optional com.midnights.game.Vector rot */ 7:
                    message.rot = define_2.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* optional uint32 miracle_ring_op_type = 13; */
        if (message.miracleRingOpType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.miracleRingOpType);
        /* optional com.midnights.game.Vector pos = 8; */
        if (message.pos)
            define_2.Vector.internalBinaryWrite(message.pos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector rot = 7; */
        if (message.rot)
            define_2.Vector.internalBinaryWrite(message.rot, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UseMiracleRingReq
 */
exports.UseMiracleRingReq = new UseMiracleRingReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UseMiracleRingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.UseMiracleRingRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "miracle_ring_op_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 miracle_ring_op_type */ 7:
                    message.miracleRingOpType = reader.uint32();
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
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional uint32 miracle_ring_op_type = 7; */
        if (message.miracleRingOpType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.miracleRingOpType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.UseMiracleRingRsp
 */
exports.UseMiracleRingRsp = new UseMiracleRingRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingDataNotify", [
            { no: 8, name: "is_gadget_created", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "last_take_reward_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "last_deliver_item_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "miracle_ring_cd", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_gadget_created */ 8:
                    message.isGadgetCreated = reader.bool();
                    break;
                case /* optional uint32 last_take_reward_time */ 14:
                    message.lastTakeRewardTime = reader.uint32();
                    break;
                case /* optional uint32 gadget_entity_id */ 12:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* optional uint32 last_deliver_item_time */ 10:
                    message.lastDeliverItemTime = reader.uint32();
                    break;
                case /* optional uint32 miracle_ring_cd */ 7:
                    message.miracleRingCd = reader.uint32();
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
        /* optional bool is_gadget_created = 8; */
        if (message.isGadgetCreated !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isGadgetCreated);
        /* optional uint32 last_take_reward_time = 14; */
        if (message.lastTakeRewardTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.lastTakeRewardTime);
        /* optional uint32 gadget_entity_id = 12; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* optional uint32 last_deliver_item_time = 10; */
        if (message.lastDeliverItemTime !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.lastDeliverItemTime);
        /* optional uint32 miracle_ring_cd = 7; */
        if (message.miracleRingCd !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.miracleRingCd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingDataNotify
 */
exports.MiracleRingDataNotify = new MiracleRingDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingTakeRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingTakeRewardReq", [
            { no: 11, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 gadget_id */ 11:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 gadget_entity_id */ 7:
                    message.gadgetEntityId = reader.uint32();
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
        /* optional uint32 gadget_id = 11; */
        if (message.gadgetId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 gadget_entity_id = 7; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingTakeRewardReq
 */
exports.MiracleRingTakeRewardReq = new MiracleRingTakeRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingTakeRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingTakeRewardRsp", [
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
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingTakeRewardRsp
 */
exports.MiracleRingTakeRewardRsp = new MiracleRingTakeRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDropResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingDropResultNotify", [
            { no: 5, name: "last_take_reward_time", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "drop_result", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional int32 last_take_reward_time */ 5:
                    message.lastTakeRewardTime = reader.int32();
                    break;
                case /* optional int32 drop_result */ 9:
                    message.dropResult = reader.int32();
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
        /* optional int32 last_take_reward_time = 5; */
        if (message.lastTakeRewardTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.lastTakeRewardTime);
        /* optional int32 drop_result = 9; */
        if (message.dropResult !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.dropResult);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingDropResultNotify
 */
exports.MiracleRingDropResultNotify = new MiracleRingDropResultNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDeliverItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingDeliverItemReq", [
            { no: 9, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.InterOpType", cmd_gadget_2.InterOpType] },
            { no: 1, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.ItemParam },
            { no: 4, name: "food_weapon_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemParamList: [], foodWeaponGuidList: [] };
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
                case /* optional com.midnights.game.InterOpType op_type */ 9:
                    message.opType = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_param_list */ 1:
                    message.itemParamList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint64 food_weapon_guid_list */ 4:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* optional uint32 gadget_id */ 14:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 gadget_entity_id */ 5:
                    message.gadgetEntityId = reader.uint32();
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
        /* optional com.midnights.game.InterOpType op_type = 9; */
        if (message.opType !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.opType);
        /* repeated com.midnights.game.ItemParam item_param_list = 1; */
        for (let i = 0; i < message.itemParamList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint64 food_weapon_guid_list = 4; */
        if (message.foodWeaponGuidList.length) {
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.foodWeaponGuidList.length; i++)
                writer.uint64(message.foodWeaponGuidList[i]);
            writer.join();
        }
        /* optional uint32 gadget_id = 14; */
        if (message.gadgetId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 gadget_entity_id = 5; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingDeliverItemReq
 */
exports.MiracleRingDeliverItemReq = new MiracleRingDeliverItemReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDeliverItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingDeliverItemRsp", [
            { no: 15, name: "interact_type", kind: "enum", opt: true, T: () => ["com.midnights.game.InteractType", cmd_gadget_1.InteractType] },
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "op_type", kind: "enum", opt: true, T: () => ["com.midnights.game.InterOpType", cmd_gadget_2.InterOpType] },
            { no: 4, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gadget_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.InteractType interact_type */ 15:
                    message.interactType = reader.int32();
                    break;
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.InterOpType op_type */ 14:
                    message.opType = reader.int32();
                    break;
                case /* optional uint32 gadget_id */ 4:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 gadget_entity_id */ 9:
                    message.gadgetEntityId = reader.uint32();
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
        /* optional com.midnights.game.InteractType interact_type = 15; */
        if (message.interactType !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.interactType);
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.InterOpType op_type = 14; */
        if (message.opType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.opType);
        /* optional uint32 gadget_id = 4; */
        if (message.gadgetId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 gadget_entity_id = 9; */
        if (message.gadgetEntityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingDeliverItemRsp
 */
exports.MiracleRingDeliverItemRsp = new MiracleRingDeliverItemRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDestroyNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MiracleRingDestroyNotify", [
            { no: 7, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 entity_id */ 7:
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
        /* optional uint32 entity_id = 7; */
        if (message.entityId !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MiracleRingDestroyNotify
 */
exports.MiracleRingDestroyNotify = new MiracleRingDestroyNotify$Type();
