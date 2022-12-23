"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Vector$Type extends runtime_5.MessageType {
    constructor() {
        super("Vector", [
            { no: 1, name: "x", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "y", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "z", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { x: 0, y: 0, z: 0 };
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
                case /* float x */ 1:
                    message.x = reader.float();
                    break;
                case /* float y */ 2:
                    message.y = reader.float();
                    break;
                case /* float z */ 3:
                    message.z = reader.float();
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
        /* float x = 1; */
        if (message.x !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.x);
        /* float y = 2; */
        if (message.y !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.y);
        /* float z = 3; */
        if (message.z !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.z);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Vector
 */
exports.Vector = new Vector$Type();
