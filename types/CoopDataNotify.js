"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CoopChapter_1 = require("./CoopChapter");
// @generated message type with reflection information, may provide speed optimized methods
class CoopDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CoopDataNotify", [
            { no: 11, name: "is_have_progress", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "cur_coop_point", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "viewed_chapter_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "chapter_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoopChapter_1.CoopChapter }
        ]);
    }
    create(value) {
        const message = { isHaveProgress: false, curCoopPoint: 0, viewedChapterList: [], chapterList: [] };
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
                case /* bool is_have_progress */ 11:
                    message.isHaveProgress = reader.bool();
                    break;
                case /* uint32 cur_coop_point */ 1:
                    message.curCoopPoint = reader.uint32();
                    break;
                case /* repeated uint32 viewed_chapter_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.viewedChapterList.push(reader.uint32());
                    else
                        message.viewedChapterList.push(reader.uint32());
                    break;
                case /* repeated CoopChapter chapter_list */ 3:
                    message.chapterList.push(CoopChapter_1.CoopChapter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_have_progress = 11; */
        if (message.isHaveProgress !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isHaveProgress);
        /* uint32 cur_coop_point = 1; */
        if (message.curCoopPoint !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.curCoopPoint);
        /* repeated uint32 viewed_chapter_list = 6; */
        if (message.viewedChapterList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.viewedChapterList.length; i++)
                writer.uint32(message.viewedChapterList[i]);
            writer.join();
        }
        /* repeated CoopChapter chapter_list = 3; */
        for (let i = 0; i < message.chapterList.length; i++)
            CoopChapter_1.CoopChapter.internalBinaryWrite(message.chapterList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoopDataNotify
 */
exports.CoopDataNotify = new CoopDataNotify$Type();
