"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabStageActiveChallengeIndexNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabStageActiveChallengeIndexNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabStageActiveChallengeIndexNotify", [
            { no: 1, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "active_camp_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeIndex: 0, activeCampIndex: 0, stageId: 0 };
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
                case /* uint32 challenge_index */ 1:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 active_camp_index */ 14:
                    message.activeCampIndex = reader.uint32();
                    break;
                case /* uint32 stage_id */ 10:
                    message.stageId = reader.uint32();
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
        /* uint32 challenge_index = 1; */
        if (message.challengeIndex !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* uint32 active_camp_index = 14; */
        if (message.activeCampIndex !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.activeCampIndex);
        /* uint32 stage_id = 10; */
        if (message.stageId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabStageActiveChallengeIndexNotify
 */
exports.ChannelerSlabStageActiveChallengeIndexNotify = new ChannelerSlabStageActiveChallengeIndexNotify$Type();
