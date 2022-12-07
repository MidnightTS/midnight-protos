"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryPromoteRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryPromoteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ReliquaryPromoteRsp", [
            { no: 8, name: "Unk3300_IALPGNADFKA", kind: "scalar", jsonName: "Unk3300IALPGNADFKA", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_GGFCIPAKKDP", kind: "scalar", jsonName: "Unk3300GGFCIPAKKDP", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_MGELABLMFOE", kind: "scalar", jsonName: "Unk3300MGELABLMFOE", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "target_reliquary_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "Unk3300_MBEBIACJNBB", kind: "scalar", jsonName: "Unk3300MBEBIACJNBB", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IALPGNADFKA: [], unk3300GGFCIPAKKDP: 0, unk3300MGELABLMFOE: [], retcode: 0, targetReliquaryGuid: 0n, unk3300MBEBIACJNBB: 0 };
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
                case /* repeated uint32 Unk3300_IALPGNADFKA = 8 [json_name = "Unk3300IALPGNADFKA"];*/ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IALPGNADFKA.push(reader.uint32());
                    else
                        message.unk3300IALPGNADFKA.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_GGFCIPAKKDP = 9 [json_name = "Unk3300GGFCIPAKKDP"];*/ 9:
                    message.unk3300GGFCIPAKKDP = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_MGELABLMFOE = 13 [json_name = "Unk3300MGELABLMFOE"];*/ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MGELABLMFOE.push(reader.uint32());
                    else
                        message.unk3300MGELABLMFOE.push(reader.uint32());
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 target_reliquary_guid */ 6:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_MBEBIACJNBB = 4 [json_name = "Unk3300MBEBIACJNBB"];*/ 4:
                    message.unk3300MBEBIACJNBB = reader.uint32();
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
        /* repeated uint32 Unk3300_IALPGNADFKA = 8 [json_name = "Unk3300IALPGNADFKA"]; */
        if (message.unk3300IALPGNADFKA.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IALPGNADFKA.length; i++)
                writer.uint32(message.unk3300IALPGNADFKA[i]);
            writer.join();
        }
        /* uint32 Unk3300_GGFCIPAKKDP = 9 [json_name = "Unk3300GGFCIPAKKDP"]; */
        if (message.unk3300GGFCIPAKKDP !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.unk3300GGFCIPAKKDP);
        /* repeated uint32 Unk3300_MGELABLMFOE = 13 [json_name = "Unk3300MGELABLMFOE"]; */
        if (message.unk3300MGELABLMFOE.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MGELABLMFOE.length; i++)
                writer.uint32(message.unk3300MGELABLMFOE[i]);
            writer.join();
        }
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint64 target_reliquary_guid = 6; */
        if (message.targetReliquaryGuid !== 0n)
            writer.tag(6, runtime_2.WireType.Varint).uint64(message.targetReliquaryGuid);
        /* uint32 Unk3300_MBEBIACJNBB = 4 [json_name = "Unk3300MBEBIACJNBB"]; */
        if (message.unk3300MBEBIACJNBB !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300MBEBIACJNBB);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReliquaryPromoteRsp
 */
exports.ReliquaryPromoteRsp = new ReliquaryPromoteRsp$Type();
