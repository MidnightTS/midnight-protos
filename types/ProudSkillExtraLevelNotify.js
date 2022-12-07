"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProudSkillExtraLevelNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillExtraLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ProudSkillExtraLevelNotify", [
            { no: 13, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "Unk3300_ODIOPLHJHAE", kind: "scalar", jsonName: "Unk3300ODIOPLHJHAE", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_LKNFMODMEIA", kind: "scalar", jsonName: "Unk3300LKNFMODMEIA", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_IPDBADAAHBA", kind: "scalar", jsonName: "Unk3300IPDBADAAHBA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, unk3300ODIOPLHJHAE: 0, unk3300LKNFMODMEIA: 0, unk3300IPDBADAAHBA: 0 };
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
                case /* uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_ODIOPLHJHAE = 4 [json_name = "Unk3300ODIOPLHJHAE"];*/ 4:
                    message.unk3300ODIOPLHJHAE = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKNFMODMEIA = 8 [json_name = "Unk3300LKNFMODMEIA"];*/ 8:
                    message.unk3300LKNFMODMEIA = reader.uint32();
                    break;
                case /* uint32 Unk3300_IPDBADAAHBA = 2 [json_name = "Unk3300IPDBADAAHBA"];*/ 2:
                    message.unk3300IPDBADAAHBA = reader.uint32();
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
        /* uint64 avatar_guid = 13; */
        if (message.avatarGuid !== 0n)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 Unk3300_ODIOPLHJHAE = 4 [json_name = "Unk3300ODIOPLHJHAE"]; */
        if (message.unk3300ODIOPLHJHAE !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300ODIOPLHJHAE);
        /* uint32 Unk3300_LKNFMODMEIA = 8 [json_name = "Unk3300LKNFMODMEIA"]; */
        if (message.unk3300LKNFMODMEIA !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300LKNFMODMEIA);
        /* uint32 Unk3300_IPDBADAAHBA = 2 [json_name = "Unk3300IPDBADAAHBA"]; */
        if (message.unk3300IPDBADAAHBA !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300IPDBADAAHBA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProudSkillExtraLevelNotify
 */
exports.ProudSkillExtraLevelNotify = new ProudSkillExtraLevelNotify$Type();
