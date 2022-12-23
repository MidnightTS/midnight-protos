"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewElementReactionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillPreviewReactionInfo_1 = require("./GCGSkillPreviewReactionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewElementReactionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewElementReactionInfo", [
            { no: 12, name: "Unk3300_JOBNBDJHAPJ", kind: "scalar", jsonName: "Unk3300JOBNBDJHAPJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_BELBNDNDGAO", kind: "scalar", jsonName: "Unk3300BELBNDNDGAO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "reaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewReactionInfo_1.GCGSkillPreviewReactionInfo }
        ]);
    }
    create(value) {
        const message = { unk3300JOBNBDJHAPJ: [], unk3300BELBNDNDGAO: [], reactionList: [] };
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
                case /* repeated uint32 Unk3300_JOBNBDJHAPJ = 12 [json_name = "Unk3300JOBNBDJHAPJ"];*/ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300JOBNBDJHAPJ.push(reader.uint32());
                    else
                        message.unk3300JOBNBDJHAPJ.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_BELBNDNDGAO = 14 [json_name = "Unk3300BELBNDNDGAO"];*/ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BELBNDNDGAO.push(reader.uint32());
                    else
                        message.unk3300BELBNDNDGAO.push(reader.uint32());
                    break;
                case /* repeated GCGSkillPreviewReactionInfo reaction_list */ 1:
                    message.reactionList.push(GCGSkillPreviewReactionInfo_1.GCGSkillPreviewReactionInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 Unk3300_JOBNBDJHAPJ = 12 [json_name = "Unk3300JOBNBDJHAPJ"]; */
        if (message.unk3300JOBNBDJHAPJ.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300JOBNBDJHAPJ.length; i++)
                writer.uint32(message.unk3300JOBNBDJHAPJ[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_BELBNDNDGAO = 14 [json_name = "Unk3300BELBNDNDGAO"]; */
        if (message.unk3300BELBNDNDGAO.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BELBNDNDGAO.length; i++)
                writer.uint32(message.unk3300BELBNDNDGAO[i]);
            writer.join();
        }
        /* repeated GCGSkillPreviewReactionInfo reaction_list = 1; */
        for (let i = 0; i < message.reactionList.length; i++)
            GCGSkillPreviewReactionInfo_1.GCGSkillPreviewReactionInfo.internalBinaryWrite(message.reactionList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewElementReactionInfo
 */
exports.GCGSkillPreviewElementReactionInfo = new GCGSkillPreviewElementReactionInfo$Type();
