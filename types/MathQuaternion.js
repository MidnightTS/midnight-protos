"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathQuaternion = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MathQuaternion$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MathQuaternion", [
            { no: 1, name: "x", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "z", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "w", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
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
                case /* optional float x */ 1:
                    message.x = reader.float();
                    break;
                case /* optional float y */ 2:
                    message.y = reader.float();
                    break;
                case /* optional float z */ 3:
                    message.z = reader.float();
                    break;
                case /* optional float w */ 4:
                    message.w = reader.float();
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
        /* optional float x = 1; */
        if (message.x !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.x);
        /* optional float y = 2; */
        if (message.y !== undefined)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.y);
        /* optional float z = 3; */
        if (message.z !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.z);
        /* optional float w = 4; */
        if (message.w !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.w);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MathQuaternion
 */
exports.MathQuaternion = new MathQuaternion$Type();
