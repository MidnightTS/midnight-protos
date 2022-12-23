"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeData$Type extends runtime_5.MessageType {
    constructor() {
        super("FurnitureMakeData", [
            { no: 1, name: "begin_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 5, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "make_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "dur_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "accelerate_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ }
        ]);
    }
    create(value) {
        const message = { beginTime: 0, avatarId: 0, makeId: 0, index: 0, durTime: 0, accelerateTime: 0 };
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
                case /* fixed32 begin_time */ 1:
                    message.beginTime = reader.fixed32();
                    break;
                case /* uint32 avatar_id */ 5:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 make_id */ 10:
                    message.makeId = reader.uint32();
                    break;
                case /* uint32 index */ 6:
                    message.index = reader.uint32();
                    break;
                case /* uint32 dur_time */ 8:
                    message.durTime = reader.uint32();
                    break;
                case /* fixed32 accelerate_time */ 7:
                    message.accelerateTime = reader.fixed32();
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
        /* fixed32 begin_time = 1; */
        if (message.beginTime !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).fixed32(message.beginTime);
        /* uint32 avatar_id = 5; */
        if (message.avatarId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 make_id = 10; */
        if (message.makeId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.makeId);
        /* uint32 index = 6; */
        if (message.index !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.index);
        /* uint32 dur_time = 8; */
        if (message.durTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.durTime);
        /* fixed32 accelerate_time = 7; */
        if (message.accelerateTime !== 0)
            writer.tag(7, runtime_1.WireType.Bit32).fixed32(message.accelerateTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FurnitureMakeData
 */
exports.FurnitureMakeData = new FurnitureMakeData$Type();
