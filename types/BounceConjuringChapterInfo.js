"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceConjuringChapterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BounceConjuringChapterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BounceConjuringChapterInfo", [
            { no: 3, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "chapter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { bestScore: 0, openTime: 0, chapterId: 0 };
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
                case /* uint32 best_score */ 3:
                    message.bestScore = reader.uint32();
                    break;
                case /* uint32 open_time */ 2:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 chapter_id */ 11:
                    message.chapterId = reader.uint32();
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
        /* uint32 best_score = 3; */
        if (message.bestScore !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.bestScore);
        /* uint32 open_time = 2; */
        if (message.openTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 chapter_id = 11; */
        if (message.chapterId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BounceConjuringChapterInfo
 */
exports.BounceConjuringChapterInfo = new BounceConjuringChapterInfo$Type();
