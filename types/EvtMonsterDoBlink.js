"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtMonsterDoBlink = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtMonsterDoBlink$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtMonsterDoBlink", [
            { no: 14, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "target_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "target_rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { entityId: 0 };
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
                case /* uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector target_pos */ 9:
                    message.targetPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* Vector target_rot */ 5:
                    message.targetRot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetRot);
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
        /* uint32 entity_id = 14; */
        if (message.entityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector target_pos = 9; */
        if (message.targetPos)
            Vector_1.Vector.internalBinaryWrite(message.targetPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector target_rot = 5; */
        if (message.targetRot)
            Vector_1.Vector.internalBinaryWrite(message.targetRot, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtMonsterDoBlink
 */
exports.EvtMonsterDoBlink = new EvtMonsterDoBlink$Type();
