"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterAIConfigHashNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MonsterAIConfigHashNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MonsterAIConfigHashNotify", [
            { no: 7, name: "hash_value", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "job_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hashValue: 0, entityId: 0, jobId: 0 };
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
                case /* int32 hash_value */ 7:
                    message.hashValue = reader.int32();
                    break;
                case /* uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 job_id */ 11:
                    message.jobId = reader.uint32();
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
        /* int32 hash_value = 7; */
        if (message.hashValue !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.hashValue);
        /* uint32 entity_id = 14; */
        if (message.entityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 job_id = 11; */
        if (message.jobId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.jobId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MonsterAIConfigHashNotify
 */
exports.MonsterAIConfigHashNotify = new MonsterAIConfigHashNotify$Type();
