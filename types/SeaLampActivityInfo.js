"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLampActivityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SeaLampSectionInfo_1 = require("./SeaLampSectionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SeaLampActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SeaLampActivityInfo", [
            { no: 14, name: "day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "section_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SeaLampSectionInfo_1.SeaLampSectionInfo },
            { no: 7, name: "mechanicus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "first_day_start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "sea_lamp_coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "popularity", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_JMPCJGJHPIH", kind: "scalar", jsonName: "Unk3300JMPCJGJHPIH", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_BAJIGNGJALG", kind: "scalar", jsonName: "Unk3300BAJIGNGJALG", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { dayIndex: 0, isContentClosed: false, sectionInfoList: [], mechanicusId: 0, firstDayStartTime: 0, seaLampCoin: 0, popularity: 0, unk3300JMPCJGJHPIH: false, unk3300BAJIGNGJALG: false };
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
                case /* uint32 day_index */ 14:
                    message.dayIndex = reader.uint32();
                    break;
                case /* bool is_content_closed */ 15:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated SeaLampSectionInfo section_info_list */ 1:
                    message.sectionInfoList.push(SeaLampSectionInfo_1.SeaLampSectionInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 mechanicus_id */ 7:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* uint32 first_day_start_time */ 6:
                    message.firstDayStartTime = reader.uint32();
                    break;
                case /* uint32 sea_lamp_coin */ 11:
                    message.seaLampCoin = reader.uint32();
                    break;
                case /* uint32 popularity */ 2:
                    message.popularity = reader.uint32();
                    break;
                case /* bool Unk3300_JMPCJGJHPIH = 13 [json_name = "Unk3300JMPCJGJHPIH"];*/ 13:
                    message.unk3300JMPCJGJHPIH = reader.bool();
                    break;
                case /* bool Unk3300_BAJIGNGJALG = 9 [json_name = "Unk3300BAJIGNGJALG"];*/ 9:
                    message.unk3300BAJIGNGJALG = reader.bool();
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
        /* uint32 day_index = 14; */
        if (message.dayIndex !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.dayIndex);
        /* bool is_content_closed = 15; */
        if (message.isContentClosed !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* repeated SeaLampSectionInfo section_info_list = 1; */
        for (let i = 0; i < message.sectionInfoList.length; i++)
            SeaLampSectionInfo_1.SeaLampSectionInfo.internalBinaryWrite(message.sectionInfoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 mechanicus_id = 7; */
        if (message.mechanicusId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.mechanicusId);
        /* uint32 first_day_start_time = 6; */
        if (message.firstDayStartTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.firstDayStartTime);
        /* uint32 sea_lamp_coin = 11; */
        if (message.seaLampCoin !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.seaLampCoin);
        /* uint32 popularity = 2; */
        if (message.popularity !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.popularity);
        /* bool Unk3300_JMPCJGJHPIH = 13 [json_name = "Unk3300JMPCJGJHPIH"]; */
        if (message.unk3300JMPCJGJHPIH !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.unk3300JMPCJGJHPIH);
        /* bool Unk3300_BAJIGNGJALG = 9 [json_name = "Unk3300BAJIGNGJALG"]; */
        if (message.unk3300BAJIGNGJALG !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300BAJIGNGJALG);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SeaLampActivityInfo
 */
exports.SeaLampActivityInfo = new SeaLampActivityInfo$Type();
