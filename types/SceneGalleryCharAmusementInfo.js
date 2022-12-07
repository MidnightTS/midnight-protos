"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryCharAmusementInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryCharAmusementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryCharAmusementInfo", [
            { no: 13, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_last_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isSuccess: false, maxScore: 0, curScore: 0, isLastLevel: false, isFinish: false };
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
                case /* bool is_success */ 13:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 max_score */ 11:
                    message.maxScore = reader.uint32();
                    break;
                case /* uint32 cur_score */ 9:
                    message.curScore = reader.uint32();
                    break;
                case /* bool is_last_level */ 10:
                    message.isLastLevel = reader.bool();
                    break;
                case /* bool is_finish */ 14:
                    message.isFinish = reader.bool();
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
        /* bool is_success = 13; */
        if (message.isSuccess !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 max_score = 11; */
        if (message.maxScore !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.maxScore);
        /* uint32 cur_score = 9; */
        if (message.curScore !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curScore);
        /* bool is_last_level = 10; */
        if (message.isLastLevel !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isLastLevel);
        /* bool is_finish = 14; */
        if (message.isFinish !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isFinish);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryCharAmusementInfo
 */
exports.SceneGalleryCharAmusementInfo = new SceneGalleryCharAmusementInfo$Type();
