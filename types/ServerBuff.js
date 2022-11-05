"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerBuff = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ServerBuff$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerBuff", [
            { no: 1, name: "server_buff_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "server_buff_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "server_buff_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_modifier_added", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional uint32 server_buff_uid */ 1:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* optional uint32 server_buff_id */ 2:
                    message.serverBuffId = reader.uint32();
                    break;
                case /* optional uint32 server_buff_type */ 3:
                    message.serverBuffType = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 4:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional bool is_modifier_added */ 5:
                    message.isModifierAdded = reader.bool();
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
        /* optional uint32 server_buff_uid = 1; */
        if (message.serverBuffUid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.serverBuffUid);
        /* optional uint32 server_buff_id = 2; */
        if (message.serverBuffId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.serverBuffId);
        /* optional uint32 server_buff_type = 3; */
        if (message.serverBuffType !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.serverBuffType);
        /* optional uint32 instanced_modifier_id = 4; */
        if (message.instancedModifierId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        /* optional bool is_modifier_added = 5; */
        if (message.isModifierAdded !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isModifierAdded);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerBuff
 */
exports.ServerBuff = new ServerBuff$Type();
