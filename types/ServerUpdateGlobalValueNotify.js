"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerUpdateGlobalValueNotify = exports.ServerUpdateGlobalValueNotify_UpdateType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum ServerUpdateGlobalValueNotify.UpdateType
 */
var ServerUpdateGlobalValueNotify_UpdateType;
(function (ServerUpdateGlobalValueNotify_UpdateType) {
    /**
     * @generated from protobuf enum value: UPDATE_TYPE_INVALID = 0;
     */
    ServerUpdateGlobalValueNotify_UpdateType[ServerUpdateGlobalValueNotify_UpdateType["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: UPDATE_TYPE_ADD = 1;
     */
    ServerUpdateGlobalValueNotify_UpdateType[ServerUpdateGlobalValueNotify_UpdateType["ADD"] = 1] = "ADD";
    /**
     * @generated from protobuf enum value: UPDATE_TYPE_SET = 2;
     */
    ServerUpdateGlobalValueNotify_UpdateType[ServerUpdateGlobalValueNotify_UpdateType["SET"] = 2] = "SET";
})(ServerUpdateGlobalValueNotify_UpdateType = exports.ServerUpdateGlobalValueNotify_UpdateType || (exports.ServerUpdateGlobalValueNotify_UpdateType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ServerUpdateGlobalValueNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ServerUpdateGlobalValueNotify", [
            { no: 8, name: "key_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "update_type", kind: "enum", T: () => ["ServerUpdateGlobalValueNotify.UpdateType", ServerUpdateGlobalValueNotify_UpdateType, "UPDATE_TYPE_"] },
            { no: 6, name: "delta", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { keyHash: 0, updateType: 0, delta: 0, value: 0, entityId: 0 };
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
                case /* uint32 key_hash */ 8:
                    message.keyHash = reader.uint32();
                    break;
                case /* ServerUpdateGlobalValueNotify.UpdateType update_type */ 9:
                    message.updateType = reader.int32();
                    break;
                case /* float delta */ 6:
                    message.delta = reader.float();
                    break;
                case /* float value */ 3:
                    message.value = reader.float();
                    break;
                case /* uint32 entity_id */ 15:
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
        /* uint32 key_hash = 8; */
        if (message.keyHash !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.keyHash);
        /* ServerUpdateGlobalValueNotify.UpdateType update_type = 9; */
        if (message.updateType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.updateType);
        /* float delta = 6; */
        if (message.delta !== 0)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.delta);
        /* float value = 3; */
        if (message.value !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.value);
        /* uint32 entity_id = 15; */
        if (message.entityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ServerUpdateGlobalValueNotify
 */
exports.ServerUpdateGlobalValueNotify = new ServerUpdateGlobalValueNotify$Type();
