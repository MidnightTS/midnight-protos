"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteFireworksChallengeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteFireworksChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteFireworksChallengeInfo", [
            { no: 2, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_full_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { bestScore: 0, isFullScore: false, challengeId: 0 };
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
                case /* uint32 best_score */ 2:
                    message.bestScore = reader.uint32();
                    break;
                case /* bool is_full_score */ 3:
                    message.isFullScore = reader.bool();
                    break;
                case /* uint32 challenge_id */ 12:
                    message.challengeId = reader.uint32();
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
        /* uint32 best_score = 2; */
        if (message.bestScore !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.bestScore);
        /* bool is_full_score = 3; */
        if (message.isFullScore !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isFullScore);
        /* uint32 challenge_id = 12; */
        if (message.challengeId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteFireworksChallengeInfo
 */
exports.LanternRiteFireworksChallengeInfo = new LanternRiteFireworksChallengeInfo$Type();
