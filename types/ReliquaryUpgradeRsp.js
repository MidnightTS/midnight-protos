"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryUpgradeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ReliquaryUpgradeRsp", [
            { no: 13, name: "Unk3300_MGELABLMFOE", kind: "scalar", jsonName: "Unk3300MGELABLMFOE", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "target_reliquary_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_IALPGNADFKA", kind: "scalar", jsonName: "Unk3300IALPGNADFKA", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "power_up_rate", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MGELABLMFOE: [], retcode: 0, targetReliquaryGuid: 0n, curLevel: 0, oldLevel: 0, unk3300IALPGNADFKA: [], powerUpRate: 0 };
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
                case /* repeated uint32 Unk3300_MGELABLMFOE = 13 [json_name = "Unk3300MGELABLMFOE"];*/ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MGELABLMFOE.push(reader.uint32());
                    else
                        message.unk3300MGELABLMFOE.push(reader.uint32());
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 target_reliquary_guid */ 14:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 cur_level */ 2:
                    message.curLevel = reader.uint32();
                    break;
                case /* uint32 old_level */ 6:
                    message.oldLevel = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_IALPGNADFKA = 10 [json_name = "Unk3300IALPGNADFKA"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IALPGNADFKA.push(reader.uint32());
                    else
                        message.unk3300IALPGNADFKA.push(reader.uint32());
                    break;
                case /* uint32 power_up_rate */ 1:
                    message.powerUpRate = reader.uint32();
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
        /* repeated uint32 Unk3300_MGELABLMFOE = 13 [json_name = "Unk3300MGELABLMFOE"]; */
        if (message.unk3300MGELABLMFOE.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MGELABLMFOE.length; i++)
                writer.uint32(message.unk3300MGELABLMFOE[i]);
            writer.join();
        }
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint64 target_reliquary_guid = 14; */
        if (message.targetReliquaryGuid !== 0n)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.targetReliquaryGuid);
        /* uint32 cur_level = 2; */
        if (message.curLevel !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.curLevel);
        /* uint32 old_level = 6; */
        if (message.oldLevel !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.oldLevel);
        /* repeated uint32 Unk3300_IALPGNADFKA = 10 [json_name = "Unk3300IALPGNADFKA"]; */
        if (message.unk3300IALPGNADFKA.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IALPGNADFKA.length; i++)
                writer.uint32(message.unk3300IALPGNADFKA[i]);
            writer.join();
        }
        /* uint32 power_up_rate = 1; */
        if (message.powerUpRate !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.powerUpRate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReliquaryUpgradeRsp
 */
exports.ReliquaryUpgradeRsp = new ReliquaryUpgradeRsp$Type();
