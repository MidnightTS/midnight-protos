"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntingOngoingNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HuntingPair_1 = require("./HuntingPair");
// @generated message type with reflection information, may provide speed optimized methods
class HuntingOngoingNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HuntingOngoingNotify", [
            { no: 11, name: "hunting_pair", kind: "message", T: () => HuntingPair_1.HuntingPair },
            { no: 7, name: "finish_clue_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "next_position", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "is_final", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "is_started", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "fail_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishClueCount: 0, isFinal: false, isStarted: false, failTime: 0 };
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
                case /* HuntingPair hunting_pair */ 11:
                    message.huntingPair = HuntingPair_1.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* uint32 finish_clue_count */ 7:
                    message.finishClueCount = reader.uint32();
                    break;
                case /* Vector next_position */ 2:
                    message.nextPosition = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.nextPosition);
                    break;
                case /* bool is_final */ 5:
                    message.isFinal = reader.bool();
                    break;
                case /* bool is_started */ 13:
                    message.isStarted = reader.bool();
                    break;
                case /* uint32 fail_time */ 4:
                    message.failTime = reader.uint32();
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
        /* HuntingPair hunting_pair = 11; */
        if (message.huntingPair)
            HuntingPair_1.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 finish_clue_count = 7; */
        if (message.finishClueCount !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.finishClueCount);
        /* Vector next_position = 2; */
        if (message.nextPosition)
            Vector_1.Vector.internalBinaryWrite(message.nextPosition, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_final = 5; */
        if (message.isFinal !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isFinal);
        /* bool is_started = 13; */
        if (message.isStarted !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isStarted);
        /* uint32 fail_time = 4; */
        if (message.failTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.failTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HuntingOngoingNotify
 */
exports.HuntingOngoingNotify = new HuntingOngoingNotify$Type();
