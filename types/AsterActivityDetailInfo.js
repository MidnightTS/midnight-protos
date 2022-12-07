"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AsterLargeDetailInfo_1 = require("./AsterLargeDetailInfo");
const AsterProgressDetailInfo_1 = require("./AsterProgressDetailInfo");
const AsterMidDetailInfo_1 = require("./AsterMidDetailInfo");
const AsterLittleDetailInfo_1 = require("./AsterLittleDetailInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AsterActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AsterActivityDetailInfo", [
            { no: 1, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "aster_little", kind: "message", T: () => AsterLittleDetailInfo_1.AsterLittleDetailInfo },
            { no: 13, name: "Unk3300_DCHBFEJNBHP", kind: "scalar", jsonName: "Unk3300DCHBFEJNBHP", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "aster_mid", kind: "message", T: () => AsterMidDetailInfo_1.AsterMidDetailInfo },
            { no: 3, name: "is_special_reward_taken", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_KFDGFFPJGJC", kind: "scalar", jsonName: "Unk3300KFDGFFPJGJC", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "aster_progress", kind: "message", T: () => AsterProgressDetailInfo_1.AsterProgressDetailInfo },
            { no: 10, name: "aster_large", kind: "message", T: () => AsterLargeDetailInfo_1.AsterLargeDetailInfo },
            { no: 6, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { contentCloseTime: 0, unk3300DCHBFEJNBHP: 0, isSpecialRewardTaken: false, unk3300KFDGFFPJGJC: 0, isContentClosed: false };
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
                case /* uint32 content_close_time */ 1:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* AsterLittleDetailInfo aster_little */ 5:
                    message.asterLittle = AsterLittleDetailInfo_1.AsterLittleDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterLittle);
                    break;
                case /* uint32 Unk3300_DCHBFEJNBHP = 13 [json_name = "Unk3300DCHBFEJNBHP"];*/ 13:
                    message.unk3300DCHBFEJNBHP = reader.uint32();
                    break;
                case /* AsterMidDetailInfo aster_mid */ 12:
                    message.asterMid = AsterMidDetailInfo_1.AsterMidDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterMid);
                    break;
                case /* bool is_special_reward_taken */ 3:
                    message.isSpecialRewardTaken = reader.bool();
                    break;
                case /* uint32 Unk3300_KFDGFFPJGJC = 4 [json_name = "Unk3300KFDGFFPJGJC"];*/ 4:
                    message.unk3300KFDGFFPJGJC = reader.uint32();
                    break;
                case /* AsterProgressDetailInfo aster_progress */ 8:
                    message.asterProgress = AsterProgressDetailInfo_1.AsterProgressDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterProgress);
                    break;
                case /* AsterLargeDetailInfo aster_large */ 10:
                    message.asterLarge = AsterLargeDetailInfo_1.AsterLargeDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.asterLarge);
                    break;
                case /* bool is_content_closed */ 6:
                    message.isContentClosed = reader.bool();
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
        /* uint32 content_close_time = 1; */
        if (message.contentCloseTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        /* AsterLittleDetailInfo aster_little = 5; */
        if (message.asterLittle)
            AsterLittleDetailInfo_1.AsterLittleDetailInfo.internalBinaryWrite(message.asterLittle, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_DCHBFEJNBHP = 13 [json_name = "Unk3300DCHBFEJNBHP"]; */
        if (message.unk3300DCHBFEJNBHP !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300DCHBFEJNBHP);
        /* AsterMidDetailInfo aster_mid = 12; */
        if (message.asterMid)
            AsterMidDetailInfo_1.AsterMidDetailInfo.internalBinaryWrite(message.asterMid, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_special_reward_taken = 3; */
        if (message.isSpecialRewardTaken !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isSpecialRewardTaken);
        /* uint32 Unk3300_KFDGFFPJGJC = 4 [json_name = "Unk3300KFDGFFPJGJC"]; */
        if (message.unk3300KFDGFFPJGJC !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300KFDGFFPJGJC);
        /* AsterProgressDetailInfo aster_progress = 8; */
        if (message.asterProgress)
            AsterProgressDetailInfo_1.AsterProgressDetailInfo.internalBinaryWrite(message.asterProgress, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AsterLargeDetailInfo aster_large = 10; */
        if (message.asterLarge)
            AsterLargeDetailInfo_1.AsterLargeDetailInfo.internalBinaryWrite(message.asterLarge, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 6; */
        if (message.isContentClosed !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isContentClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AsterActivityDetailInfo
 */
exports.AsterActivityDetailInfo = new AsterActivityDetailInfo$Type();
