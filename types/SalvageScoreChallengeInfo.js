"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalvageScoreChallengeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SalvageScoreChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SalvageScoreChallengeInfo", [
            { no: 8, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "salvage_challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { maxScore: 0, salvageChallengeId: 0 };
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
                case /* uint32 max_score */ 8:
                    message.maxScore = reader.uint32();
                    break;
                case /* uint32 salvage_challenge_id */ 10:
                    message.salvageChallengeId = reader.uint32();
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
        /* uint32 max_score = 8; */
        if (message.maxScore !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.maxScore);
        /* uint32 salvage_challenge_id = 10; */
        if (message.salvageChallengeId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.salvageChallengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvageScoreChallengeInfo
 */
exports.SalvageScoreChallengeInfo = new SalvageScoreChallengeInfo$Type();