"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindFieldGalleryChallengeInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WindFieldGalleryChallengeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WindFieldGalleryChallengeInfoNotify", [
            { no: 13, name: "Unk3300_FFODAKMKGEK", kind: "scalar", jsonName: "Unk3300FFODAKMKGEK", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_start", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "Unk3300_GLNHBJJJINK", kind: "scalar", jsonName: "Unk3300GLNHBJJJINK", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_NBIBKFKOCFK", kind: "scalar", jsonName: "Unk3300NBIBKFKOCFK", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_GNJKOCLJFNM", kind: "scalar", jsonName: "Unk3300GNJKOCLJFNM", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_MMONPDMIEBN", kind: "scalar", jsonName: "Unk3300MMONPDMIEBN", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300FFODAKMKGEK: 0, isStart: false, unk3300GLNHBJJJINK: 0, unk3300NBIBKFKOCFK: 0, isSuccess: false, unk3300GNJKOCLJFNM: 0, unk3300MMONPDMIEBN: 0 };
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
                case /* uint32 Unk3300_FFODAKMKGEK = 13 [json_name = "Unk3300FFODAKMKGEK"];*/ 13:
                    message.unk3300FFODAKMKGEK = reader.uint32();
                    break;
                case /* bool is_start */ 2:
                    message.isStart = reader.bool();
                    break;
                case /* uint32 Unk3300_GLNHBJJJINK = 5 [json_name = "Unk3300GLNHBJJJINK"];*/ 5:
                    message.unk3300GLNHBJJJINK = reader.uint32();
                    break;
                case /* uint32 Unk3300_NBIBKFKOCFK = 3 [json_name = "Unk3300NBIBKFKOCFK"];*/ 3:
                    message.unk3300NBIBKFKOCFK = reader.uint32();
                    break;
                case /* bool is_success */ 7:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_GNJKOCLJFNM = 8 [json_name = "Unk3300GNJKOCLJFNM"];*/ 8:
                    message.unk3300GNJKOCLJFNM = reader.uint32();
                    break;
                case /* uint32 Unk3300_MMONPDMIEBN = 10 [json_name = "Unk3300MMONPDMIEBN"];*/ 10:
                    message.unk3300MMONPDMIEBN = reader.uint32();
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
        /* uint32 Unk3300_FFODAKMKGEK = 13 [json_name = "Unk3300FFODAKMKGEK"]; */
        if (message.unk3300FFODAKMKGEK !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300FFODAKMKGEK);
        /* bool is_start = 2; */
        if (message.isStart !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isStart);
        /* uint32 Unk3300_GLNHBJJJINK = 5 [json_name = "Unk3300GLNHBJJJINK"]; */
        if (message.unk3300GLNHBJJJINK !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300GLNHBJJJINK);
        /* uint32 Unk3300_NBIBKFKOCFK = 3 [json_name = "Unk3300NBIBKFKOCFK"]; */
        if (message.unk3300NBIBKFKOCFK !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300NBIBKFKOCFK);
        /* bool is_success = 7; */
        if (message.isSuccess !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_GNJKOCLJFNM = 8 [json_name = "Unk3300GNJKOCLJFNM"]; */
        if (message.unk3300GNJKOCLJFNM !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300GNJKOCLJFNM);
        /* uint32 Unk3300_MMONPDMIEBN = 10 [json_name = "Unk3300MMONPDMIEBN"]; */
        if (message.unk3300MMONPDMIEBN !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300MMONPDMIEBN);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindFieldGalleryChallengeInfoNotify
 */
exports.WindFieldGalleryChallengeInfoNotify = new WindFieldGalleryChallengeInfoNotify$Type();
