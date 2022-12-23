"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryEffigyChallengeV2Info = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryEffigyChallengeV2Info$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryEffigyChallengeV2Info", [
            { no: 1, name: "Unk3300_MICPCKIOEJA", kind: "scalar", jsonName: "Unk3300MICPCKIOEJA", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_BMPCKGJAGPE", kind: "scalar", jsonName: "Unk3300BMPCKGJAGPE", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EOGAPBOFHOP", kind: "scalar", jsonName: "Unk3300EOGAPBOFHOP", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_MBHBNIPEPNJ", kind: "scalar", jsonName: "Unk3300MBHBNIPEPNJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_AIEEGIBMOFH", kind: "scalar", jsonName: "Unk3300AIEEGIBMOFH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MICPCKIOEJA: 0, unk3300BMPCKGJAGPE: 0, unk3300EOGAPBOFHOP: 0, unk3300MBHBNIPEPNJ: 0, unk3300AIEEGIBMOFH: 0 };
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
                case /* uint32 Unk3300_MICPCKIOEJA = 1 [json_name = "Unk3300MICPCKIOEJA"];*/ 1:
                    message.unk3300MICPCKIOEJA = reader.uint32();
                    break;
                case /* uint32 Unk3300_BMPCKGJAGPE = 8 [json_name = "Unk3300BMPCKGJAGPE"];*/ 8:
                    message.unk3300BMPCKGJAGPE = reader.uint32();
                    break;
                case /* uint32 Unk3300_EOGAPBOFHOP = 2 [json_name = "Unk3300EOGAPBOFHOP"];*/ 2:
                    message.unk3300EOGAPBOFHOP = reader.uint32();
                    break;
                case /* uint32 Unk3300_MBHBNIPEPNJ = 7 [json_name = "Unk3300MBHBNIPEPNJ"];*/ 7:
                    message.unk3300MBHBNIPEPNJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_AIEEGIBMOFH = 11 [json_name = "Unk3300AIEEGIBMOFH"];*/ 11:
                    message.unk3300AIEEGIBMOFH = reader.uint32();
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
        /* uint32 Unk3300_MICPCKIOEJA = 1 [json_name = "Unk3300MICPCKIOEJA"]; */
        if (message.unk3300MICPCKIOEJA !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300MICPCKIOEJA);
        /* uint32 Unk3300_BMPCKGJAGPE = 8 [json_name = "Unk3300BMPCKGJAGPE"]; */
        if (message.unk3300BMPCKGJAGPE !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300BMPCKGJAGPE);
        /* uint32 Unk3300_EOGAPBOFHOP = 2 [json_name = "Unk3300EOGAPBOFHOP"]; */
        if (message.unk3300EOGAPBOFHOP !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300EOGAPBOFHOP);
        /* uint32 Unk3300_MBHBNIPEPNJ = 7 [json_name = "Unk3300MBHBNIPEPNJ"]; */
        if (message.unk3300MBHBNIPEPNJ !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300MBHBNIPEPNJ);
        /* uint32 Unk3300_AIEEGIBMOFH = 11 [json_name = "Unk3300AIEEGIBMOFH"]; */
        if (message.unk3300AIEEGIBMOFH !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300AIEEGIBMOFH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryEffigyChallengeV2Info
 */
exports.SceneGalleryEffigyChallengeV2Info = new SceneGalleryEffigyChallengeV2Info$Type();
