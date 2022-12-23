"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLocationInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLocationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLocationInfo", [
            { no: 7, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { uid: 0 };
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
                case /* uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* Vector rot */ 13:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 3:
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
        /* uint32 uid = 7; */
        if (message.uid !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.uid);
        /* Vector rot = 13; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 3; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLocationInfo
 */
exports.PlayerLocationInfo = new PlayerLocationInfo$Type();
