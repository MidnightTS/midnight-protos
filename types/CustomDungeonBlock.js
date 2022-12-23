"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonBlock = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBlock$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonBlock", [
            { no: 6, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 13, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { blockId: 0, guid: 0 };
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
                case /* uint32 block_id */ 6:
                    message.blockId = reader.uint32();
                    break;
                case /* Vector rot */ 12:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 13:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 guid */ 15:
                    message.guid = reader.uint32();
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
        /* uint32 block_id = 6; */
        if (message.blockId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.blockId);
        /* Vector rot = 12; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 13; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 guid = 15; */
        if (message.guid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonBlock
 */
exports.CustomDungeonBlock = new CustomDungeonBlock$Type();
