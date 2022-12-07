"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewExtraInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillPreviewCardInfo_1 = require("./GCGSkillPreviewCardInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewExtraInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewExtraInfo", [
            { no: 6, name: "Unk3300_KIFFJGFDNKA", kind: "message", jsonName: "Unk3300KIFFJGFDNKA", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo },
            { no: 8, name: "Unk3300_GMEMMDJKCGN", kind: "message", jsonName: "Unk3300GMEMMDJKCGN", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo }
        ]);
    }
    create(value) {
        const message = { unk3300KIFFJGFDNKA: [], unk3300GMEMMDJKCGN: [] };
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
                case /* repeated GCGSkillPreviewCardInfo Unk3300_KIFFJGFDNKA = 6 [json_name = "Unk3300KIFFJGFDNKA"];*/ 6:
                    message.unk3300KIFFJGFDNKA.push(GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGSkillPreviewCardInfo Unk3300_GMEMMDJKCGN = 8 [json_name = "Unk3300GMEMMDJKCGN"];*/ 8:
                    message.unk3300GMEMMDJKCGN.push(GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated GCGSkillPreviewCardInfo Unk3300_KIFFJGFDNKA = 6 [json_name = "Unk3300KIFFJGFDNKA"]; */
        for (let i = 0; i < message.unk3300KIFFJGFDNKA.length; i++)
            GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryWrite(message.unk3300KIFFJGFDNKA[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGSkillPreviewCardInfo Unk3300_GMEMMDJKCGN = 8 [json_name = "Unk3300GMEMMDJKCGN"]; */
        for (let i = 0; i < message.unk3300GMEMMDJKCGN.length; i++)
            GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryWrite(message.unk3300GMEMMDJKCGN[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewExtraInfo
 */
exports.GCGSkillPreviewExtraInfo = new GCGSkillPreviewExtraInfo$Type();
