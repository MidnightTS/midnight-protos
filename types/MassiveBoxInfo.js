"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassiveBoxInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class MassiveBoxInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MassiveBoxInfo", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "extents", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "up", kind: "message", T: () => Vector_1.Vector },
            { no: 6, name: "forward", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "right", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { id: 0, configId: 0 };
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
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* Vector center */ 3:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* Vector extents */ 4:
                    message.extents = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                case /* Vector up */ 5:
                    message.up = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.up);
                    break;
                case /* Vector forward */ 6:
                    message.forward = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
                    break;
                case /* Vector right */ 7:
                    message.right = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.id);
        /* uint32 config_id = 2; */
        if (message.configId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* Vector center = 3; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector extents = 4; */
        if (message.extents)
            Vector_1.Vector.internalBinaryWrite(message.extents, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector up = 5; */
        if (message.up)
            Vector_1.Vector.internalBinaryWrite(message.up, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector forward = 6; */
        if (message.forward)
            Vector_1.Vector.internalBinaryWrite(message.forward, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector right = 7; */
        if (message.right)
            Vector_1.Vector.internalBinaryWrite(message.right, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassiveBoxInfo
 */
exports.MassiveBoxInfo = new MassiveBoxInfo$Type();
