"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntingStartNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HuntingPair_1 = require("./HuntingPair");
// @generated message type with reflection information, may provide speed optimized methods
class HuntingStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HuntingStartNotify", [
            { no: 3, name: "hunting_pair", kind: "message", T: () => HuntingPair_1.HuntingPair },
            { no: 5, name: "fail_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "clue_position", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "is_final", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { failTime: 0, isFinal: false };
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
                case /* HuntingPair hunting_pair */ 3:
                    message.huntingPair = HuntingPair_1.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* uint32 fail_time */ 5:
                    message.failTime = reader.uint32();
                    break;
                case /* Vector clue_position */ 6:
                    message.cluePosition = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.cluePosition);
                    break;
                case /* bool is_final */ 8:
                    message.isFinal = reader.bool();
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
        /* HuntingPair hunting_pair = 3; */
        if (message.huntingPair)
            HuntingPair_1.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 fail_time = 5; */
        if (message.failTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.failTime);
        /* Vector clue_position = 6; */
        if (message.cluePosition)
            Vector_1.Vector.internalBinaryWrite(message.cluePosition, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_final = 8; */
        if (message.isFinal !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isFinal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HuntingStartNotify
 */
exports.HuntingStartNotify = new HuntingStartNotify$Type();
