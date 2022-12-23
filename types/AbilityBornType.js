"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityBornType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityBornType$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityBornType", [
            { no: 3, name: "move_dir", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "pos", kind: "message", T: () => Vector_1.Vector }
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
                case /* Vector move_dir */ 3:
                    message.moveDir = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.moveDir);
                    break;
                case /* Vector rot */ 15:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 12:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* Vector move_dir = 3; */
        if (message.moveDir)
            Vector_1.Vector.internalBinaryWrite(message.moveDir, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector rot = 15; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 12; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityBornType
 */
exports.AbilityBornType = new AbilityBornType$Type();
