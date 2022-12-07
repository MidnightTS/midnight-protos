"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneCreateEntityReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CreateEntityInfo_1 = require("./CreateEntityInfo");
const CreateReason_1 = require("./CreateReason");
// @generated message type with reflection information, may provide speed optimized methods
class SceneCreateEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneCreateEntityReq", [
            { no: 4, name: "reason", kind: "enum", T: () => ["CreateReason", CreateReason_1.CreateReason, "CREATE_REASON_"] },
            { no: 8, name: "entity", kind: "message", T: () => CreateEntityInfo_1.CreateEntityInfo },
            { no: 15, name: "is_destroy_when_disconnect", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, isDestroyWhenDisconnect: false };
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
                case /* CreateReason reason */ 4:
                    message.reason = reader.int32();
                    break;
                case /* CreateEntityInfo entity */ 8:
                    message.entity = CreateEntityInfo_1.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                case /* bool is_destroy_when_disconnect */ 15:
                    message.isDestroyWhenDisconnect = reader.bool();
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
        /* CreateReason reason = 4; */
        if (message.reason !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reason);
        /* CreateEntityInfo entity = 8; */
        if (message.entity)
            CreateEntityInfo_1.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_destroy_when_disconnect = 15; */
        if (message.isDestroyWhenDisconnect !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isDestroyWhenDisconnect);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneCreateEntityReq
 */
exports.SceneCreateEntityReq = new SceneCreateEntityReq$Type();
