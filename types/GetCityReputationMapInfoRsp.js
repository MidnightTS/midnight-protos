"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCityReputationMapInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetCityReputationMapInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetCityReputationMapInfoRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "Unk3300_DAIGHHPJHOO", kind: "scalar", jsonName: "Unk3300DAIGHHPJHOO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_GJFNOPNMFNG", kind: "scalar", jsonName: "Unk3300GJFNOPNMFNG", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "Unk3300_NCMHMODIIKM", kind: "scalar", jsonName: "Unk3300NCMHMODIIKM", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "Unk3300_PAPBOHKOMFK", kind: "scalar", jsonName: "Unk3300PAPBOHKOMFK", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, unk3300DAIGHHPJHOO: [], unk3300GJFNOPNMFNG: false, unk3300NCMHMODIIKM: false, unk3300PAPBOHKOMFK: [] };
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
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 Unk3300_DAIGHHPJHOO = 4 [json_name = "Unk3300DAIGHHPJHOO"];*/ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300DAIGHHPJHOO.push(reader.uint32());
                    else
                        message.unk3300DAIGHHPJHOO.push(reader.uint32());
                    break;
                case /* bool Unk3300_GJFNOPNMFNG = 12 [json_name = "Unk3300GJFNOPNMFNG"];*/ 12:
                    message.unk3300GJFNOPNMFNG = reader.bool();
                    break;
                case /* bool Unk3300_NCMHMODIIKM = 5 [json_name = "Unk3300NCMHMODIIKM"];*/ 5:
                    message.unk3300NCMHMODIIKM = reader.bool();
                    break;
                case /* repeated uint32 Unk3300_PAPBOHKOMFK = 15 [json_name = "Unk3300PAPBOHKOMFK"];*/ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300PAPBOHKOMFK.push(reader.uint32());
                    else
                        message.unk3300PAPBOHKOMFK.push(reader.uint32());
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
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 Unk3300_DAIGHHPJHOO = 4 [json_name = "Unk3300DAIGHHPJHOO"]; */
        if (message.unk3300DAIGHHPJHOO.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300DAIGHHPJHOO.length; i++)
                writer.uint32(message.unk3300DAIGHHPJHOO[i]);
            writer.join();
        }
        /* bool Unk3300_GJFNOPNMFNG = 12 [json_name = "Unk3300GJFNOPNMFNG"]; */
        if (message.unk3300GJFNOPNMFNG !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.unk3300GJFNOPNMFNG);
        /* bool Unk3300_NCMHMODIIKM = 5 [json_name = "Unk3300NCMHMODIIKM"]; */
        if (message.unk3300NCMHMODIIKM !== false)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.unk3300NCMHMODIIKM);
        /* repeated uint32 Unk3300_PAPBOHKOMFK = 15 [json_name = "Unk3300PAPBOHKOMFK"]; */
        if (message.unk3300PAPBOHKOMFK.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300PAPBOHKOMFK.length; i++)
                writer.uint32(message.unk3300PAPBOHKOMFK[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetCityReputationMapInfoRsp
 */
exports.GetCityReputationMapInfoRsp = new GetCityReputationMapInfoRsp$Type();
