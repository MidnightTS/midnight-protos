"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChallengeDataNotify", [
            { no: 4, name: "param_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramIndex: 0, challengeIndex: 0, value: 0 };
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
                case /* uint32 param_index */ 4:
                    message.paramIndex = reader.uint32();
                    break;
                case /* uint32 challenge_index */ 2:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 value */ 3:
                    message.value = reader.uint32();
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
        /* uint32 param_index = 4; */
        if (message.paramIndex !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.paramIndex);
        /* uint32 challenge_index = 2; */
        if (message.challengeIndex !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* uint32 value = 3; */
        if (message.value !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChallengeDataNotify
 */
exports.ChallengeDataNotify = new ChallengeDataNotify$Type();
