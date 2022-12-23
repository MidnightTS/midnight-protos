"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAvatarSitDownNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarSitDownNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAvatarSitDownNotify", [
            { no: 15, name: "chair_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "position", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { chairId: 0n, entityId: 0 };
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
                case /* uint64 chair_id */ 15:
                    message.chairId = reader.uint64().toBigInt();
                    break;
                case /* Vector position */ 14:
                    message.position = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* uint32 entity_id */ 4:
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
        /* uint64 chair_id = 15; */
        if (message.chairId !== 0n)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.chairId);
        /* Vector position = 14; */
        if (message.position)
            Vector_1.Vector.internalBinaryWrite(message.position, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAvatarSitDownNotify
 */
exports.EvtAvatarSitDownNotify = new EvtAvatarSitDownNotify$Type();
