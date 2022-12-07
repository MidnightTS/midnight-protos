"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGTavernNpcInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGTavernNpcInfo_1 = require("./GCGTavernNpcInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGTavernNpcInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGTavernNpcInfoNotify", [
            { no: 12, name: "Unk3300_FKAKHMMIEBC", kind: "message", jsonName: "Unk3300FKAKHMMIEBC", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGTavernNpcInfo_1.GCGTavernNpcInfo },
            { no: 2, name: "Unk3300_BAMLNENDLCM", kind: "message", jsonName: "Unk3300BAMLNENDLCM", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGTavernNpcInfo_1.GCGTavernNpcInfo },
            { no: 11, name: "character_npc", kind: "message", T: () => GCGTavernNpcInfo_1.GCGTavernNpcInfo }
        ]);
    }
    create(value) {
        const message = { unk3300FKAKHMMIEBC: [], unk3300BAMLNENDLCM: [] };
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
                case /* repeated GCGTavernNpcInfo Unk3300_FKAKHMMIEBC = 12 [json_name = "Unk3300FKAKHMMIEBC"];*/ 12:
                    message.unk3300FKAKHMMIEBC.push(GCGTavernNpcInfo_1.GCGTavernNpcInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGTavernNpcInfo Unk3300_BAMLNENDLCM = 2 [json_name = "Unk3300BAMLNENDLCM"];*/ 2:
                    message.unk3300BAMLNENDLCM.push(GCGTavernNpcInfo_1.GCGTavernNpcInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* GCGTavernNpcInfo character_npc */ 11:
                    message.characterNpc = GCGTavernNpcInfo_1.GCGTavernNpcInfo.internalBinaryRead(reader, reader.uint32(), options, message.characterNpc);
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
        /* repeated GCGTavernNpcInfo Unk3300_FKAKHMMIEBC = 12 [json_name = "Unk3300FKAKHMMIEBC"]; */
        for (let i = 0; i < message.unk3300FKAKHMMIEBC.length; i++)
            GCGTavernNpcInfo_1.GCGTavernNpcInfo.internalBinaryWrite(message.unk3300FKAKHMMIEBC[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGTavernNpcInfo Unk3300_BAMLNENDLCM = 2 [json_name = "Unk3300BAMLNENDLCM"]; */
        for (let i = 0; i < message.unk3300BAMLNENDLCM.length; i++)
            GCGTavernNpcInfo_1.GCGTavernNpcInfo.internalBinaryWrite(message.unk3300BAMLNENDLCM[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGTavernNpcInfo character_npc = 11; */
        if (message.characterNpc)
            GCGTavernNpcInfo_1.GCGTavernNpcInfo.internalBinaryWrite(message.characterNpc, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGTavernNpcInfoNotify
 */
exports.GCGTavernNpcInfoNotify = new GCGTavernNpcInfoNotify$Type();
