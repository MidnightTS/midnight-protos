"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindFieldGalleryInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WindFieldGalleryInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WindFieldGalleryInfoNotify", [
            { no: 6, name: "Unk3300_GNJKOCLJFNM", kind: "scalar", jsonName: "Unk3300GNJKOCLJFNM", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_NBIBKFKOCFK", kind: "scalar", jsonName: "Unk3300NBIBKFKOCFK", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_OJHJPBCAONA", kind: "scalar", jsonName: "Unk3300OJHJPBCAONA", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_EKMHMHJDHIL", kind: "scalar", jsonName: "Unk3300EKMHMHJDHIL", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_MMONPDMIEBN", kind: "scalar", jsonName: "Unk3300MMONPDMIEBN", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_FFODAKMKGEK", kind: "scalar", jsonName: "Unk3300FFODAKMKGEK", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_GNKCFHMDOHJ", kind: "scalar", jsonName: "Unk3300GNKCFHMDOHJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_GLNHBJJJINK", kind: "scalar", jsonName: "Unk3300GLNHBJJJINK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GNJKOCLJFNM: 0, unk3300NBIBKFKOCFK: 0, unk3300OJHJPBCAONA: 0, unk3300EKMHMHJDHIL: 0, unk3300MMONPDMIEBN: 0, unk3300FFODAKMKGEK: 0, unk3300GNKCFHMDOHJ: 0, unk3300GLNHBJJJINK: 0 };
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
                case /* uint32 Unk3300_GNJKOCLJFNM = 6 [json_name = "Unk3300GNJKOCLJFNM"];*/ 6:
                    message.unk3300GNJKOCLJFNM = reader.uint32();
                    break;
                case /* uint32 Unk3300_NBIBKFKOCFK = 15 [json_name = "Unk3300NBIBKFKOCFK"];*/ 15:
                    message.unk3300NBIBKFKOCFK = reader.uint32();
                    break;
                case /* uint32 Unk3300_OJHJPBCAONA = 7 [json_name = "Unk3300OJHJPBCAONA"];*/ 7:
                    message.unk3300OJHJPBCAONA = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKMHMHJDHIL = 14 [json_name = "Unk3300EKMHMHJDHIL"];*/ 14:
                    message.unk3300EKMHMHJDHIL = reader.uint32();
                    break;
                case /* uint32 Unk3300_MMONPDMIEBN = 13 [json_name = "Unk3300MMONPDMIEBN"];*/ 13:
                    message.unk3300MMONPDMIEBN = reader.uint32();
                    break;
                case /* uint32 Unk3300_FFODAKMKGEK = 9 [json_name = "Unk3300FFODAKMKGEK"];*/ 9:
                    message.unk3300FFODAKMKGEK = reader.uint32();
                    break;
                case /* uint32 Unk3300_GNKCFHMDOHJ = 4 [json_name = "Unk3300GNKCFHMDOHJ"];*/ 4:
                    message.unk3300GNKCFHMDOHJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_GLNHBJJJINK = 2 [json_name = "Unk3300GLNHBJJJINK"];*/ 2:
                    message.unk3300GLNHBJJJINK = reader.uint32();
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
        /* uint32 Unk3300_GNJKOCLJFNM = 6 [json_name = "Unk3300GNJKOCLJFNM"]; */
        if (message.unk3300GNJKOCLJFNM !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300GNJKOCLJFNM);
        /* uint32 Unk3300_NBIBKFKOCFK = 15 [json_name = "Unk3300NBIBKFKOCFK"]; */
        if (message.unk3300NBIBKFKOCFK !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300NBIBKFKOCFK);
        /* uint32 Unk3300_OJHJPBCAONA = 7 [json_name = "Unk3300OJHJPBCAONA"]; */
        if (message.unk3300OJHJPBCAONA !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300OJHJPBCAONA);
        /* uint32 Unk3300_EKMHMHJDHIL = 14 [json_name = "Unk3300EKMHMHJDHIL"]; */
        if (message.unk3300EKMHMHJDHIL !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300EKMHMHJDHIL);
        /* uint32 Unk3300_MMONPDMIEBN = 13 [json_name = "Unk3300MMONPDMIEBN"]; */
        if (message.unk3300MMONPDMIEBN !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300MMONPDMIEBN);
        /* uint32 Unk3300_FFODAKMKGEK = 9 [json_name = "Unk3300FFODAKMKGEK"]; */
        if (message.unk3300FFODAKMKGEK !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300FFODAKMKGEK);
        /* uint32 Unk3300_GNKCFHMDOHJ = 4 [json_name = "Unk3300GNKCFHMDOHJ"]; */
        if (message.unk3300GNKCFHMDOHJ !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300GNKCFHMDOHJ);
        /* uint32 Unk3300_GLNHBJJJINK = 2 [json_name = "Unk3300GLNHBJJJINK"]; */
        if (message.unk3300GLNHBJJJINK !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300GLNHBJJJINK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindFieldGalleryInfoNotify
 */
exports.WindFieldGalleryInfoNotify = new WindFieldGalleryInfoNotify$Type();
