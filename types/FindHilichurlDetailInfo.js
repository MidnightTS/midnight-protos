"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindHilichurlDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FindHilichurlDayContentInfo_1 = require("./FindHilichurlDayContentInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FindHilichurlDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FindHilichurlDetailInfo", [
            { no: 8, name: "day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "min_open_player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "day_content_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FindHilichurlDayContentInfo_1.FindHilichurlDayContentInfo },
            { no: 7, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_end_quest_accept", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "player_day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dayIndex: 0, isContentClosed: false, minOpenPlayerLevel: 0, dayContentInfoList: [], contentCloseTime: 0, isEndQuestAccept: false, playerDayIndex: 0 };
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
                case /* uint32 day_index */ 8:
                    message.dayIndex = reader.uint32();
                    break;
                case /* bool is_content_closed */ 12:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 min_open_player_level */ 2:
                    message.minOpenPlayerLevel = reader.uint32();
                    break;
                case /* repeated FindHilichurlDayContentInfo day_content_info_list */ 4:
                    message.dayContentInfoList.push(FindHilichurlDayContentInfo_1.FindHilichurlDayContentInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 content_close_time */ 7:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* bool is_end_quest_accept */ 5:
                    message.isEndQuestAccept = reader.bool();
                    break;
                case /* uint32 player_day_index */ 14:
                    message.playerDayIndex = reader.uint32();
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
        /* uint32 day_index = 8; */
        if (message.dayIndex !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.dayIndex);
        /* bool is_content_closed = 12; */
        if (message.isContentClosed !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 min_open_player_level = 2; */
        if (message.minOpenPlayerLevel !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.minOpenPlayerLevel);
        /* repeated FindHilichurlDayContentInfo day_content_info_list = 4; */
        for (let i = 0; i < message.dayContentInfoList.length; i++)
            FindHilichurlDayContentInfo_1.FindHilichurlDayContentInfo.internalBinaryWrite(message.dayContentInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 content_close_time = 7; */
        if (message.contentCloseTime !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        /* bool is_end_quest_accept = 5; */
        if (message.isEndQuestAccept !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isEndQuestAccept);
        /* uint32 player_day_index = 14; */
        if (message.playerDayIndex !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playerDayIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FindHilichurlDetailInfo
 */
exports.FindHilichurlDetailInfo = new FindHilichurlDetailInfo$Type();
