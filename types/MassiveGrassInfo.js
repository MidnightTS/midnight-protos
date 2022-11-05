"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassiveGrassInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class MassiveGrassInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveGrassInfo", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "size", kind: "message", T: () => Vector_1.Vector }
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
                case /* optional uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector center */ 2:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional com.midnights.game.Vector size */ 3:
                    message.size = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.size);
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
        /* optional uint32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.id);
        /* optional com.midnights.game.Vector center = 2; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.Vector size = 3; */
        if (message.size)
            Vector_1.Vector.internalBinaryWrite(message.size, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveGrassInfo
 */
exports.MassiveGrassInfo = new MassiveGrassInfo$Type();
