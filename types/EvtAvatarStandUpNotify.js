"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAvatarStandUpNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarStandUpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAvatarStandUpNotify", [
            { no: 13, name: "direction", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "chair_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "perform_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { direction: 0, chairId: 0n, entityId: 0, performId: 0 };
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
                case /* int32 direction */ 13:
                    message.direction = reader.int32();
                    break;
                case /* uint64 chair_id */ 3:
                    message.chairId = reader.uint64().toBigInt();
                    break;
                case /* uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
                    break;
                case /* int32 perform_id */ 11:
                    message.performId = reader.int32();
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
        /* int32 direction = 13; */
        if (message.direction !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.direction);
        /* uint64 chair_id = 3; */
        if (message.chairId !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.chairId);
        /* uint32 entity_id = 5; */
        if (message.entityId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.entityId);
        /* int32 perform_id = 11; */
        if (message.performId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.performId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAvatarStandUpNotify
 */
exports.EvtAvatarStandUpNotify = new EvtAvatarStandUpNotify$Type();
