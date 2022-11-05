"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeBox = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class ShapeBox$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShapeBox", [
            { no: 1, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "axis0", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "axis1", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "axis2", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "extents", kind: "message", T: () => Vector_1.Vector }
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
                case /* optional com.midnights.game.Vector center */ 1:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector axis0 */ 2:
                    message.axis0 = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis0);
                    break;
                case /* optional com.midnights.game.Vector axis1 */ 3:
                    message.axis1 = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis1);
                    break;
                case /* optional com.midnights.game.Vector axis2 */ 4:
                    message.axis2 = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis2);
                    break;
                case /* optional com.midnights.game.Vector extents */ 5:
                    message.extents = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.extents);
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
        /* optional com.midnights.game.Vector center = 1; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector axis0 = 2; */
        if (message.axis0)
            Vector_1.Vector.internalBinaryWrite(message.axis0, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector axis1 = 3; */
        if (message.axis1)
            Vector_1.Vector.internalBinaryWrite(message.axis1, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector axis2 = 4; */
        if (message.axis2)
            Vector_1.Vector.internalBinaryWrite(message.axis2, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector extents = 5; */
        if (message.extents)
            Vector_1.Vector.internalBinaryWrite(message.extents, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShapeBox
 */
exports.ShapeBox = new ShapeBox$Type();
