"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVerifyFurnitureData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifyFurnitureData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeVerifyFurnitureData", [
            { no: 12, name: "type", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: [], num: 0, id: 0 };
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
                case /* repeated uint32 type */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.type.push(reader.uint32());
                    else
                        message.type.push(reader.uint32());
                    break;
                case /* uint32 num */ 7:
                    message.num = reader.uint32();
                    break;
                case /* uint32 id */ 13:
                    message.id = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 type = 12; */
        if (message.type.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.type.length; i++)
                writer.uint32(message.type[i]);
            writer.join();
        }
        /* uint32 num = 7; */
        if (message.num !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.num);
        /* uint32 id = 13; */
        if (message.id !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeVerifyFurnitureData
 */
exports.HomeVerifyFurnitureData = new HomeVerifyFurnitureData$Type();
