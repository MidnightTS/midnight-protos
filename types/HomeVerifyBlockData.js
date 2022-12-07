"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVerifyBlockData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeVerifyBlockData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeVerifyBlockData", [
            { no: 11, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "furniture_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { blockId: 0, furnitureCount: 0 };
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
                case /* uint32 block_id */ 11:
                    message.blockId = reader.uint32();
                    break;
                case /* uint32 furniture_count */ 13:
                    message.furnitureCount = reader.uint32();
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
        /* uint32 block_id = 11; */
        if (message.blockId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.blockId);
        /* uint32 furniture_count = 13; */
        if (message.furnitureCount !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.furnitureCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeVerifyBlockData
 */
exports.HomeVerifyBlockData = new HomeVerifyBlockData$Type();
