"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BartenderLevelProgressNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BartenderLevelProgressNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BartenderLevelProgressNotify", [
            { no: 8, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFinish: false, isNewRecord: false, levelId: 0, score: 0 };
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
                case /* bool is_finish */ 8:
                    message.isFinish = reader.bool();
                    break;
                case /* bool is_new_record */ 6:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 level_id */ 12:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 score */ 3:
                    message.score = reader.uint32();
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
        /* bool is_finish = 8; */
        if (message.isFinish !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isFinish);
        /* bool is_new_record = 6; */
        if (message.isNewRecord !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 level_id = 12; */
        if (message.levelId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 score = 3; */
        if (message.score !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BartenderLevelProgressNotify
 */
exports.BartenderLevelProgressNotify = new BartenderLevelProgressNotify$Type();
