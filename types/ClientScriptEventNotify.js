"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientScriptEventNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientScriptEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientScriptEventNotify", [
            { no: 1, name: "source_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "event_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "target_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { sourceEntityId: 0, eventType: 0, targetEntityId: 0, paramList: [] };
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
                case /* uint32 source_entity_id */ 1:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* uint32 event_type */ 8:
                    message.eventType = reader.uint32();
                    break;
                case /* uint32 target_entity_id */ 4:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* repeated int32 param_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.int32());
                    else
                        message.paramList.push(reader.int32());
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
        /* uint32 source_entity_id = 1; */
        if (message.sourceEntityId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.sourceEntityId);
        /* uint32 event_type = 8; */
        if (message.eventType !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.eventType);
        /* uint32 target_entity_id = 4; */
        if (message.targetEntityId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        /* repeated int32 param_list = 6; */
        if (message.paramList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.int32(message.paramList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientScriptEventNotify
 */
exports.ClientScriptEventNotify = new ClientScriptEventNotify$Type();
