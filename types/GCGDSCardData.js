"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDSCardData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSCardData$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDSCardData", [
            { no: 11, name: "num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "face_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_CIGGHHIHJFM", kind: "scalar", jsonName: "Unk3300CIGGHHIHJFM", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_OAFMDJCPCJH", kind: "scalar", jsonName: "Unk3300OAFMDJCPCJH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "proficiency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { num: 0, faceType: 0, cardId: 0, unk3300CIGGHHIHJFM: [], unk3300OAFMDJCPCJH: [], proficiency: 0 };
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
                case /* uint32 num */ 11:
                    message.num = reader.uint32();
                    break;
                case /* uint32 face_type */ 5:
                    message.faceType = reader.uint32();
                    break;
                case /* uint32 card_id */ 4:
                    message.cardId = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_CIGGHHIHJFM = 14 [json_name = "Unk3300CIGGHHIHJFM"];*/ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CIGGHHIHJFM.push(reader.uint32());
                    else
                        message.unk3300CIGGHHIHJFM.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_OAFMDJCPCJH = 6 [json_name = "Unk3300OAFMDJCPCJH"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300OAFMDJCPCJH.push(reader.uint32());
                    else
                        message.unk3300OAFMDJCPCJH.push(reader.uint32());
                    break;
                case /* uint32 proficiency */ 10:
                    message.proficiency = reader.uint32();
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
        /* uint32 num = 11; */
        if (message.num !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.num);
        /* uint32 face_type = 5; */
        if (message.faceType !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.faceType);
        /* uint32 card_id = 4; */
        if (message.cardId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.cardId);
        /* repeated uint32 Unk3300_CIGGHHIHJFM = 14 [json_name = "Unk3300CIGGHHIHJFM"]; */
        if (message.unk3300CIGGHHIHJFM.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CIGGHHIHJFM.length; i++)
                writer.uint32(message.unk3300CIGGHHIHJFM[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_OAFMDJCPCJH = 6 [json_name = "Unk3300OAFMDJCPCJH"]; */
        if (message.unk3300OAFMDJCPCJH.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300OAFMDJCPCJH.length; i++)
                writer.uint32(message.unk3300OAFMDJCPCJH[i]);
            writer.join();
        }
        /* uint32 proficiency = 10; */
        if (message.proficiency !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.proficiency);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSCardData
 */
exports.GCGDSCardData = new GCGDSCardData$Type();
