"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeExchangeWoodRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeExchangeWoodRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeExchangeWoodRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "exchanged_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "wood_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "wood_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, exchangedCount: 0, woodCount: 0, woodId: 0 };
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
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 exchanged_count */ 8:
                    message.exchangedCount = reader.uint32();
                    break;
                case /* uint32 wood_count */ 5:
                    message.woodCount = reader.uint32();
                    break;
                case /* uint32 wood_id */ 9:
                    message.woodId = reader.uint32();
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
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 exchanged_count = 8; */
        if (message.exchangedCount !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.exchangedCount);
        /* uint32 wood_count = 5; */
        if (message.woodCount !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.woodCount);
        /* uint32 wood_id = 9; */
        if (message.woodId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.woodId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeExchangeWoodRsp
 */
exports.HomeExchangeWoodRsp = new HomeExchangeWoodRsp$Type();
