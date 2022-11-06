"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferingInteractRsp = exports.OfferingInteractReq = exports.TakeOfferingLevelRewardRsp = exports.TakeOfferingLevelRewardReq = exports.PlayerOfferingRsp = exports.PlayerOfferingReq = exports.PlayerOfferingDataNotify = exports.PlayerOfferingData = exports.OfferingInteractRsp_CmdId = exports.OfferingInteractReq_CmdId = exports.TakeOfferingLevelRewardRsp_CmdId = exports.TakeOfferingLevelRewardReq_CmdId = exports.PlayerOfferingRsp_CmdId = exports.PlayerOfferingReq_CmdId = exports.PlayerOfferingDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.PlayerOfferingDataNotify.CmdId
 */
var PlayerOfferingDataNotify_CmdId;
(function (PlayerOfferingDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerOfferingDataNotify_CmdId[PlayerOfferingDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2923;
     */
    PlayerOfferingDataNotify_CmdId[PlayerOfferingDataNotify_CmdId["CMD_ID"] = 2923] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerOfferingDataNotify_CmdId[PlayerOfferingDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerOfferingDataNotify_CmdId[PlayerOfferingDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerOfferingDataNotify_CmdId = exports.PlayerOfferingDataNotify_CmdId || (exports.PlayerOfferingDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerOfferingReq.CmdId
 */
var PlayerOfferingReq_CmdId;
(function (PlayerOfferingReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerOfferingReq_CmdId[PlayerOfferingReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2907;
     */
    PlayerOfferingReq_CmdId[PlayerOfferingReq_CmdId["CMD_ID"] = 2907] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerOfferingReq_CmdId[PlayerOfferingReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerOfferingReq_CmdId[PlayerOfferingReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerOfferingReq_CmdId[PlayerOfferingReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(PlayerOfferingReq_CmdId = exports.PlayerOfferingReq_CmdId || (exports.PlayerOfferingReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerOfferingRsp.CmdId
 */
var PlayerOfferingRsp_CmdId;
(function (PlayerOfferingRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerOfferingRsp_CmdId[PlayerOfferingRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2917;
     */
    PlayerOfferingRsp_CmdId[PlayerOfferingRsp_CmdId["CMD_ID"] = 2917] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerOfferingRsp_CmdId[PlayerOfferingRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerOfferingRsp_CmdId[PlayerOfferingRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerOfferingRsp_CmdId = exports.PlayerOfferingRsp_CmdId || (exports.PlayerOfferingRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeOfferingLevelRewardReq.CmdId
 */
var TakeOfferingLevelRewardReq_CmdId;
(function (TakeOfferingLevelRewardReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeOfferingLevelRewardReq_CmdId[TakeOfferingLevelRewardReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2919;
     */
    TakeOfferingLevelRewardReq_CmdId[TakeOfferingLevelRewardReq_CmdId["CMD_ID"] = 2919] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeOfferingLevelRewardReq_CmdId[TakeOfferingLevelRewardReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeOfferingLevelRewardReq_CmdId[TakeOfferingLevelRewardReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeOfferingLevelRewardReq_CmdId[TakeOfferingLevelRewardReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(TakeOfferingLevelRewardReq_CmdId = exports.TakeOfferingLevelRewardReq_CmdId || (exports.TakeOfferingLevelRewardReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.TakeOfferingLevelRewardRsp.CmdId
 */
var TakeOfferingLevelRewardRsp_CmdId;
(function (TakeOfferingLevelRewardRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeOfferingLevelRewardRsp_CmdId[TakeOfferingLevelRewardRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2911;
     */
    TakeOfferingLevelRewardRsp_CmdId[TakeOfferingLevelRewardRsp_CmdId["CMD_ID"] = 2911] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    TakeOfferingLevelRewardRsp_CmdId[TakeOfferingLevelRewardRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    TakeOfferingLevelRewardRsp_CmdId[TakeOfferingLevelRewardRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(TakeOfferingLevelRewardRsp_CmdId = exports.TakeOfferingLevelRewardRsp_CmdId || (exports.TakeOfferingLevelRewardRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OfferingInteractReq.CmdId
 */
var OfferingInteractReq_CmdId;
(function (OfferingInteractReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OfferingInteractReq_CmdId[OfferingInteractReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2918;
     */
    OfferingInteractReq_CmdId[OfferingInteractReq_CmdId["CMD_ID"] = 2918] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OfferingInteractReq_CmdId[OfferingInteractReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OfferingInteractReq_CmdId[OfferingInteractReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OfferingInteractReq_CmdId[OfferingInteractReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(OfferingInteractReq_CmdId = exports.OfferingInteractReq_CmdId || (exports.OfferingInteractReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.OfferingInteractRsp.CmdId
 */
var OfferingInteractRsp_CmdId;
(function (OfferingInteractRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OfferingInteractRsp_CmdId[OfferingInteractRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 2908;
     */
    OfferingInteractRsp_CmdId[OfferingInteractRsp_CmdId["CMD_ID"] = 2908] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    OfferingInteractRsp_CmdId[OfferingInteractRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    OfferingInteractRsp_CmdId[OfferingInteractRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(OfferingInteractRsp_CmdId = exports.OfferingInteractRsp_CmdId || (exports.OfferingInteractRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerOfferingData", [
            { no: 1, name: "offering_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_first_interact", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "taken_level_reward_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_new_max_level", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { takenLevelRewardList: [] };
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
                case /* optional uint32 offering_id */ 1:
                    message.offeringId = reader.uint32();
                    break;
                case /* optional bool is_first_interact */ 15:
                    message.isFirstInteract = reader.bool();
                    break;
                case /* optional uint32 level */ 12:
                    message.level = reader.uint32();
                    break;
                case /* repeated uint32 taken_level_reward_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenLevelRewardList.push(reader.uint32());
                    else
                        message.takenLevelRewardList.push(reader.uint32());
                    break;
                case /* optional bool is_new_max_level */ 6:
                    message.isNewMaxLevel = reader.bool();
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
        /* optional uint32 offering_id = 1; */
        if (message.offeringId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.offeringId);
        /* optional bool is_first_interact = 15; */
        if (message.isFirstInteract !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isFirstInteract);
        /* optional uint32 level = 12; */
        if (message.level !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.level);
        /* repeated uint32 taken_level_reward_list = 8; */
        for (let i = 0; i < message.takenLevelRewardList.length; i++)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.takenLevelRewardList[i]);
        /* optional bool is_new_max_level = 6; */
        if (message.isNewMaxLevel !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isNewMaxLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerOfferingData
 */
exports.PlayerOfferingData = new PlayerOfferingData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerOfferingDataNotify", [
            { no: 2, name: "offering_data_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.PlayerOfferingData }
        ]);
    }
    create(value) {
        const message = { offeringDataList: [] };
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
                case /* repeated com.midnights.game.PlayerOfferingData offering_data_list */ 2:
                    message.offeringDataList.push(exports.PlayerOfferingData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.PlayerOfferingData offering_data_list = 2; */
        for (let i = 0; i < message.offeringDataList.length; i++)
            exports.PlayerOfferingData.internalBinaryWrite(message.offeringDataList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerOfferingDataNotify
 */
exports.PlayerOfferingDataNotify = new PlayerOfferingDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerOfferingReq", [
            { no: 6, name: "offering_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 offering_id */ 6:
                    message.offeringId = reader.uint32();
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
        /* optional uint32 offering_id = 6; */
        if (message.offeringId !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.offeringId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerOfferingReq
 */
exports.PlayerOfferingReq = new PlayerOfferingReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerOfferingRsp", [
            { no: 7, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam },
            { no: 4, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "offering_data", kind: "message", T: () => exports.PlayerOfferingData }
        ]);
    }
    create(value) {
        const message = { itemList: [] };
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
                case /* repeated com.midnights.game.ItemParam item_list */ 7:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* optional com.midnights.game.PlayerOfferingData offering_data */ 10:
                    message.offeringData = exports.PlayerOfferingData.internalBinaryRead(reader, reader.uint32(), options, message.offeringData);
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
        /* repeated com.midnights.game.ItemParam item_list = 7; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 4; */
        if (message.retcode !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional com.midnights.game.PlayerOfferingData offering_data = 10; */
        if (message.offeringData)
            exports.PlayerOfferingData.internalBinaryWrite(message.offeringData, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerOfferingRsp
 */
exports.PlayerOfferingRsp = new PlayerOfferingRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeOfferingLevelRewardReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeOfferingLevelRewardReq", [
            { no: 6, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "offering_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 level */ 6:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 offering_id */ 11:
                    message.offeringId = reader.uint32();
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
        /* optional uint32 level = 6; */
        if (message.level !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.level);
        /* optional uint32 offering_id = 11; */
        if (message.offeringId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.offeringId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeOfferingLevelRewardReq
 */
exports.TakeOfferingLevelRewardReq = new TakeOfferingLevelRewardReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TakeOfferingLevelRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.TakeOfferingLevelRewardRsp", [
            { no: 3, name: "offering_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "take_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "item_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => define_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { itemList: [] };
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
                case /* optional uint32 offering_id */ 3:
                    message.offeringId = reader.uint32();
                    break;
                case /* optional uint32 take_level */ 4:
                    message.takeLevel = reader.uint32();
                    break;
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.ItemParam item_list */ 2:
                    message.itemList.push(define_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 offering_id = 3; */
        if (message.offeringId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.offeringId);
        /* optional uint32 take_level = 4; */
        if (message.takeLevel !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.takeLevel);
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.ItemParam item_list = 2; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.TakeOfferingLevelRewardRsp
 */
exports.TakeOfferingLevelRewardRsp = new TakeOfferingLevelRewardRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OfferingInteractReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OfferingInteractReq", [
            { no: 9, name: "offering_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 offering_id */ 9:
                    message.offeringId = reader.uint32();
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
        /* optional uint32 offering_id = 9; */
        if (message.offeringId !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.offeringId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OfferingInteractReq
 */
exports.OfferingInteractReq = new OfferingInteractReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OfferingInteractRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.OfferingInteractRsp", [
            { no: 11, name: "offering_data", kind: "message", T: () => exports.PlayerOfferingData },
            { no: 12, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
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
                case /* optional com.midnights.game.PlayerOfferingData offering_data */ 11:
                    message.offeringData = exports.PlayerOfferingData.internalBinaryRead(reader, reader.uint32(), options, message.offeringData);
                    break;
                case /* optional int32 retcode */ 12:
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
        /* optional com.midnights.game.PlayerOfferingData offering_data = 11; */
        if (message.offeringData)
            exports.PlayerOfferingData.internalBinaryWrite(message.offeringData, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional int32 retcode = 12; */
        if (message.retcode !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.OfferingInteractRsp
 */
exports.OfferingInteractRsp = new OfferingInteractRsp$Type();
