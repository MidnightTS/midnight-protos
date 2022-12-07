"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("ChallengeRecord", [
            { no: 2, name: "challenge_record_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "best_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeRecordType: 0, challengeIndex: 0, challengeId: 0, bestValue: 0 };
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
                case /* uint32 challenge_record_type */ 2:
                    message.challengeRecordType = reader.uint32();
                    break;
                case /* uint32 challenge_index */ 3:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 9:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 best_value */ 4:
                    message.bestValue = reader.uint32();
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
        /* uint32 challenge_record_type = 2; */
        if (message.challengeRecordType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.challengeRecordType);
        /* uint32 challenge_index = 3; */
        if (message.challengeIndex !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* uint32 challenge_id = 9; */
        if (message.challengeId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* uint32 best_value = 4; */
        if (message.bestValue !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.bestValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChallengeRecord
 */
exports.ChallengeRecord = new ChallengeRecord$Type();
