"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryMuqadasPotionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryMuqadasPotionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryMuqadasPotionInfo", [
            { no: 1, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_NHOLGGAFMPH", kind: "scalar", jsonName: "Unk3300NHOLGGAFMPH", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_LKEICOLMPII", kind: "scalar", jsonName: "Unk3300LKEICOLMPII", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "capture_weakness_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { score: 0, unk3300NHOLGGAFMPH: 0, unk3300LKEICOLMPII: 0, captureWeaknessCount: 0 };
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
                case /* uint32 score */ 1:
                    message.score = reader.uint32();
                    break;
                case /* uint32 Unk3300_NHOLGGAFMPH = 5 [json_name = "Unk3300NHOLGGAFMPH"];*/ 5:
                    message.unk3300NHOLGGAFMPH = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKEICOLMPII = 10 [json_name = "Unk3300LKEICOLMPII"];*/ 10:
                    message.unk3300LKEICOLMPII = reader.uint32();
                    break;
                case /* uint32 capture_weakness_count */ 12:
                    message.captureWeaknessCount = reader.uint32();
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
        /* uint32 score = 1; */
        if (message.score !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 Unk3300_NHOLGGAFMPH = 5 [json_name = "Unk3300NHOLGGAFMPH"]; */
        if (message.unk3300NHOLGGAFMPH !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300NHOLGGAFMPH);
        /* uint32 Unk3300_LKEICOLMPII = 10 [json_name = "Unk3300LKEICOLMPII"]; */
        if (message.unk3300LKEICOLMPII !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300LKEICOLMPII);
        /* uint32 capture_weakness_count = 12; */
        if (message.captureWeaknessCount !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.captureWeaknessCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryMuqadasPotionInfo
 */
exports.SceneGalleryMuqadasPotionInfo = new SceneGalleryMuqadasPotionInfo$Type();
