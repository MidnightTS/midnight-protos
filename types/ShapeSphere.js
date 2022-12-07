"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeSphere = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class ShapeSphere$Type extends runtime_5.MessageType {
    constructor() {
        super("ShapeSphere", [
            { no: 1, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "radius", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { radius: 0 };
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
                case /* Vector center */ 1:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* float radius */ 2:
                    message.radius = reader.float();
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
        /* Vector center = 1; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float radius = 2; */
        if (message.radius !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.radius);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShapeSphere
 */
exports.ShapeSphere = new ShapeSphere$Type();
