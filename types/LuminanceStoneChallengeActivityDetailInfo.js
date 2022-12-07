"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuminanceStoneChallengeActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LuminanceStoneChallengeActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LuminanceStoneChallengeActivityDetailInfo", [
            { no: 1, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "current_stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_final_gallery_complete", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false, currentStageId: 0, isFinalGalleryComplete: false, bestScore: 0 };
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
                case /* bool is_content_closed */ 1:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 current_stage_id */ 2:
                    message.currentStageId = reader.uint32();
                    break;
                case /* bool is_final_gallery_complete */ 7:
                    message.isFinalGalleryComplete = reader.bool();
                    break;
                case /* uint32 best_score */ 6:
                    message.bestScore = reader.uint32();
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
        /* bool is_content_closed = 1; */
        if (message.isContentClosed !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 current_stage_id = 2; */
        if (message.currentStageId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.currentStageId);
        /* bool is_final_gallery_complete = 7; */
        if (message.isFinalGalleryComplete !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFinalGalleryComplete);
        /* uint32 best_score = 6; */
        if (message.bestScore !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.bestScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LuminanceStoneChallengeActivityDetailInfo
 */
exports.LuminanceStoneChallengeActivityDetailInfo = new LuminanceStoneChallengeActivityDetailInfo$Type();
