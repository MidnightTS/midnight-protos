"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAnimalData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAnimalData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAnimalData", [
            { no: 6, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "spawn_rot", kind: "message", T: () => Vector_1.Vector },
            { no: 11, name: "spawn_pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { furnitureId: 0 };
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
                case /* uint32 furniture_id */ 6:
                    message.furnitureId = reader.uint32();
                    break;
                case /* Vector spawn_rot */ 14:
                    message.spawnRot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
                    break;
                case /* Vector spawn_pos */ 11:
                    message.spawnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
        /* uint32 furniture_id = 6; */
        if (message.furnitureId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.furnitureId);
        /* Vector spawn_rot = 14; */
        if (message.spawnRot)
            Vector_1.Vector.internalBinaryWrite(message.spawnRot, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector spawn_pos = 11; */
        if (message.spawnPos)
            Vector_1.Vector.internalBinaryWrite(message.spawnPos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAnimalData
 */
exports.HomeAnimalData = new HomeAnimalData$Type();
