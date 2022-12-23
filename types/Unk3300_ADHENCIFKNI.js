"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3300_ADHENCIFKNI = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_ADHENCIFKNI$Type extends runtime_5.MessageType {
    constructor() {
        super("Unk3300_ADHENCIFKNI", [
            { no: 6, name: "begin_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "time_stamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { beginTime: 0n, timeStamp: 0n, controllerId: 0 };
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
                case /* uint64 begin_time */ 6:
                    message.beginTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 time_stamp */ 13:
                    message.timeStamp = reader.uint64().toBigInt();
                    break;
                case /* uint32 controller_id */ 10:
                    message.controllerId = reader.uint32();
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
        /* uint64 begin_time = 6; */
        if (message.beginTime !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.beginTime);
        /* uint64 time_stamp = 13; */
        if (message.timeStamp !== 0n)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.timeStamp);
        /* uint32 controller_id = 10; */
        if (message.controllerId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_ADHENCIFKNI
 */
exports.Unk3300_ADHENCIFKNI = new Unk3300_ADHENCIFKNI$Type();
