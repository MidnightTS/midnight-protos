"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoguelikeDungeonActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RoguelikeShikigamiRecord_1 = require("./RoguelikeShikigamiRecord");
const RogueStageInfo_1 = require("./RogueStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeDungeonActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RoguelikeDungeonActivityDetailInfo", [
            { no: 14, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueStageInfo_1.RogueStageInfo },
            { no: 9, name: "equipped_rune_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "rune_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "shikigami_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RoguelikeShikigamiRecord_1.RoguelikeShikigamiRecord },
            { no: 5, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageList: [], equippedRuneList: [], contentCloseTime: 0, runeList: [], shikigamiList: [], isContentClosed: false };
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
                case /* repeated RogueStageInfo stage_list */ 14:
                    message.stageList.push(RogueStageInfo_1.RogueStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 equipped_rune_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.equippedRuneList.push(reader.uint32());
                    else
                        message.equippedRuneList.push(reader.uint32());
                    break;
                case /* uint32 content_close_time */ 11:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* repeated uint32 rune_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.runeList.push(reader.uint32());
                    else
                        message.runeList.push(reader.uint32());
                    break;
                case /* repeated RoguelikeShikigamiRecord shikigami_list */ 4:
                    message.shikigamiList.push(RoguelikeShikigamiRecord_1.RoguelikeShikigamiRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_content_closed */ 5:
                    message.isContentClosed = reader.bool();
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
        /* repeated RogueStageInfo stage_list = 14; */
        for (let i = 0; i < message.stageList.length; i++)
            RogueStageInfo_1.RogueStageInfo.internalBinaryWrite(message.stageList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 equipped_rune_list = 9; */
        if (message.equippedRuneList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.equippedRuneList.length; i++)
                writer.uint32(message.equippedRuneList[i]);
            writer.join();
        }
        /* uint32 content_close_time = 11; */
        if (message.contentCloseTime !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.contentCloseTime);
        /* repeated uint32 rune_list = 3; */
        if (message.runeList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.runeList.length; i++)
                writer.uint32(message.runeList[i]);
            writer.join();
        }
        /* repeated RoguelikeShikigamiRecord shikigami_list = 4; */
        for (let i = 0; i < message.shikigamiList.length; i++)
            RoguelikeShikigamiRecord_1.RoguelikeShikigamiRecord.internalBinaryWrite(message.shikigamiList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 5; */
        if (message.isContentClosed !== false)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isContentClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeDungeonActivityDetailInfo
 */
exports.RoguelikeDungeonActivityDetailInfo = new RoguelikeDungeonActivityDetailInfo$Type();
