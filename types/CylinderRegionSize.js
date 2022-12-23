"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CylinderRegionSize = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CylinderRegionSize$Type extends runtime_5.MessageType {
    constructor() {
        super("CylinderRegionSize", [
            { no: 7, name: "radius", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "height", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { radius: 0, height: 0 };
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
                case /* float radius */ 7:
                    message.radius = reader.float();
                    break;
                case /* float height */ 15:
                    message.height = reader.float();
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
        /* float radius = 7; */
        if (message.radius !== 0)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.radius);
        /* float height = 15; */
        if (message.height !== 0)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.height);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CylinderRegionSize
 */
exports.CylinderRegionSize = new CylinderRegionSize$Type();
