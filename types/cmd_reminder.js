"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMessageNotify = exports.NormalUidOpNotify = exports.ServerMessageNotify_CmdId = exports.NormalUidOpNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.NormalUidOpNotify.CmdId
 */
var NormalUidOpNotify_CmdId;
(function (NormalUidOpNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NormalUidOpNotify_CmdId[NormalUidOpNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5726;
     */
    NormalUidOpNotify_CmdId[NormalUidOpNotify_CmdId["CMD_ID"] = 5726] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NormalUidOpNotify_CmdId[NormalUidOpNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    NormalUidOpNotify_CmdId[NormalUidOpNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(NormalUidOpNotify_CmdId = exports.NormalUidOpNotify_CmdId || (exports.NormalUidOpNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ServerMessageNotify.CmdId
 */
var ServerMessageNotify_CmdId;
(function (ServerMessageNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerMessageNotify_CmdId[ServerMessageNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5718;
     */
    ServerMessageNotify_CmdId[ServerMessageNotify_CmdId["CMD_ID"] = 5718] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ServerMessageNotify_CmdId[ServerMessageNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ServerMessageNotify_CmdId[ServerMessageNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ServerMessageNotify_CmdId = exports.ServerMessageNotify_CmdId || (exports.ServerMessageNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class NormalUidOpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NormalUidOpNotify", [
            { no: 6, name: "duration", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "param_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "param_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [], paramUidList: [] };
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
                case /* optional uint32 duration */ 6:
                    message.duration = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* repeated uint32 param_uid_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramUidList.push(reader.uint32());
                    else
                        message.paramUidList.push(reader.uint32());
                    break;
                case /* optional uint32 param_index */ 8:
                    message.paramIndex = reader.uint32();
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
        /* optional uint32 duration = 6; */
        if (message.duration !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.duration);
        /* repeated uint32 param_list = 4; */
        if (message.paramList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* repeated uint32 param_uid_list = 5; */
        if (message.paramUidList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramUidList.length; i++)
                writer.uint32(message.paramUidList[i]);
            writer.join();
        }
        /* optional uint32 param_index = 8; */
        if (message.paramIndex !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.paramIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NormalUidOpNotify
 */
exports.NormalUidOpNotify = new NormalUidOpNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServerMessageNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerMessageNotify", [
            { no: 1, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 index */ 1:
                    message.index = reader.uint32();
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
        /* optional uint32 index = 1; */
        if (message.index !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerMessageNotify
 */
exports.ServerMessageNotify = new ServerMessageNotify$Type();
