"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabBuffInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChannelerSlabBuffSchemeInfo_1 = require("./ChannelerSlabBuffSchemeInfo");
const ChannelerSlabAssistInfo_1 = require("./ChannelerSlabAssistInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabBuffInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabBuffInfo", [
            { no: 11, name: "assist_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabAssistInfo_1.ChannelerSlabAssistInfo },
            { no: 8, name: "Unk3300_CDFLIONGKCH", kind: "message", jsonName: "Unk3300CDFLIONGKCH", T: () => ChannelerSlabBuffSchemeInfo_1.ChannelerSlabBuffSchemeInfo },
            { no: 14, name: "Unk3300_ANENHMAADLN", kind: "message", jsonName: "Unk3300ANENHMAADLN", T: () => ChannelerSlabBuffSchemeInfo_1.ChannelerSlabBuffSchemeInfo },
            { no: 6, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { assistInfoList: [], buffIdList: [] };
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
                case /* repeated ChannelerSlabAssistInfo assist_info_list */ 11:
                    message.assistInfoList.push(ChannelerSlabAssistInfo_1.ChannelerSlabAssistInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ChannelerSlabBuffSchemeInfo Unk3300_CDFLIONGKCH = 8 [json_name = "Unk3300CDFLIONGKCH"];*/ 8:
                    message.unk3300CDFLIONGKCH = ChannelerSlabBuffSchemeInfo_1.ChannelerSlabBuffSchemeInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300CDFLIONGKCH);
                    break;
                case /* ChannelerSlabBuffSchemeInfo Unk3300_ANENHMAADLN = 14 [json_name = "Unk3300ANENHMAADLN"];*/ 14:
                    message.unk3300ANENHMAADLN = ChannelerSlabBuffSchemeInfo_1.ChannelerSlabBuffSchemeInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300ANENHMAADLN);
                    break;
                case /* repeated uint32 buff_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
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
        /* repeated ChannelerSlabAssistInfo assist_info_list = 11; */
        for (let i = 0; i < message.assistInfoList.length; i++)
            ChannelerSlabAssistInfo_1.ChannelerSlabAssistInfo.internalBinaryWrite(message.assistInfoList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabBuffSchemeInfo Unk3300_CDFLIONGKCH = 8 [json_name = "Unk3300CDFLIONGKCH"]; */
        if (message.unk3300CDFLIONGKCH)
            ChannelerSlabBuffSchemeInfo_1.ChannelerSlabBuffSchemeInfo.internalBinaryWrite(message.unk3300CDFLIONGKCH, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabBuffSchemeInfo Unk3300_ANENHMAADLN = 14 [json_name = "Unk3300ANENHMAADLN"]; */
        if (message.unk3300ANENHMAADLN)
            ChannelerSlabBuffSchemeInfo_1.ChannelerSlabBuffSchemeInfo.internalBinaryWrite(message.unk3300ANENHMAADLN, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 buff_id_list = 6; */
        if (message.buffIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabBuffInfo
 */
exports.ChannelerSlabBuffInfo = new ChannelerSlabBuffInfo$Type();
