"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSpineChapterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DragonSpineChapterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DragonSpineChapterInfo", [
            { no: 1, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "chapter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "finished_mission_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { openTime: 0, progress: 0, chapterId: 0, finishedMissionNum: 0, isOpen: false };
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
                case /* uint32 open_time */ 1:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 progress */ 12:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 chapter_id */ 6:
                    message.chapterId = reader.uint32();
                    break;
                case /* uint32 finished_mission_num */ 5:
                    message.finishedMissionNum = reader.uint32();
                    break;
                case /* bool is_open */ 2:
                    message.isOpen = reader.bool();
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
        /* uint32 open_time = 1; */
        if (message.openTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 progress = 12; */
        if (message.progress !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.progress);
        /* uint32 chapter_id = 6; */
        if (message.chapterId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.chapterId);
        /* uint32 finished_mission_num = 5; */
        if (message.finishedMissionNum !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.finishedMissionNum);
        /* bool is_open = 2; */
        if (message.isOpen !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DragonSpineChapterInfo
 */
exports.DragonSpineChapterInfo = new DragonSpineChapterInfo$Type();
