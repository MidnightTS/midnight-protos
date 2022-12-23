"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryDecomposeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryDecomposeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ReliquaryDecomposeReq", [
            { no: 4, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "target_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { configId: 0, targetCount: 0, guidList: [] };
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
                case /* uint32 config_id */ 4:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 target_count */ 15:
                    message.targetCount = reader.uint32();
                    break;
                case /* repeated uint64 guid_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.guidList.push(reader.uint64().toBigInt());
                    else
                        message.guidList.push(reader.uint64().toBigInt());
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
        /* uint32 config_id = 4; */
        if (message.configId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.configId);
        /* uint32 target_count = 15; */
        if (message.targetCount !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.targetCount);
        /* repeated uint64 guid_list = 13; */
        if (message.guidList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.guidList.length; i++)
                writer.uint64(message.guidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReliquaryDecomposeReq
 */
exports.ReliquaryDecomposeReq = new ReliquaryDecomposeReq$Type();
