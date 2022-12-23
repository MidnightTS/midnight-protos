"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryProgress_1 = require("./RogueDiaryProgress");
const RogueDiaryStageInfo_1 = require("./RogueDiaryStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryActivityDetailInfo", [
            { no: 3, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryStageInfo_1.RogueDiaryStageInfo },
            { no: 5, name: "is_have_progress", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "cur_progress", kind: "message", T: () => RogueDiaryProgress_1.RogueDiaryProgress }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false, stageList: [], isHaveProgress: false };
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
                case /* bool is_content_closed */ 3:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated RogueDiaryStageInfo stage_list */ 11:
                    message.stageList.push(RogueDiaryStageInfo_1.RogueDiaryStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_have_progress */ 5:
                    message.isHaveProgress = reader.bool();
                    break;
                case /* RogueDiaryProgress cur_progress */ 10:
                    message.curProgress = RogueDiaryProgress_1.RogueDiaryProgress.internalBinaryRead(reader, reader.uint32(), options, message.curProgress);
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
        /* bool is_content_closed = 3; */
        if (message.isContentClosed !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* repeated RogueDiaryStageInfo stage_list = 11; */
        for (let i = 0; i < message.stageList.length; i++)
            RogueDiaryStageInfo_1.RogueDiaryStageInfo.internalBinaryWrite(message.stageList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_have_progress = 5; */
        if (message.isHaveProgress !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isHaveProgress);
        /* RogueDiaryProgress cur_progress = 10; */
        if (message.curProgress)
            RogueDiaryProgress_1.RogueDiaryProgress.internalBinaryWrite(message.curProgress, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryActivityDetailInfo
 */
exports.RogueDiaryActivityDetailInfo = new RogueDiaryActivityDetailInfo$Type();
