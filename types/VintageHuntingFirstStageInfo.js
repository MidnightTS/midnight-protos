"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageHuntingFirstStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingFirstStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageHuntingFirstStageInfo", [
            { no: 10, name: "Unk3300_HIKADHBLPEB", kind: "scalar", jsonName: "Unk3300HIKADHBLPEB", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_IPAJLKOBDKC", kind: "scalar", jsonName: "Unk3300IPAJLKOBDKC", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_NILGNHOPGLD", kind: "scalar", jsonName: "Unk3300NILGNHOPGLD", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300HIKADHBLPEB: 0, score: 0, unk3300IPAJLKOBDKC: 0, unk3300NILGNHOPGLD: 0 };
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
                case /* uint32 Unk3300_HIKADHBLPEB = 10 [json_name = "Unk3300HIKADHBLPEB"];*/ 10:
                    message.unk3300HIKADHBLPEB = reader.uint32();
                    break;
                case /* uint32 score */ 7:
                    message.score = reader.uint32();
                    break;
                case /* uint32 Unk3300_IPAJLKOBDKC = 3 [json_name = "Unk3300IPAJLKOBDKC"];*/ 3:
                    message.unk3300IPAJLKOBDKC = reader.uint32();
                    break;
                case /* uint32 Unk3300_NILGNHOPGLD = 15 [json_name = "Unk3300NILGNHOPGLD"];*/ 15:
                    message.unk3300NILGNHOPGLD = reader.uint32();
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
        /* uint32 Unk3300_HIKADHBLPEB = 10 [json_name = "Unk3300HIKADHBLPEB"]; */
        if (message.unk3300HIKADHBLPEB !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300HIKADHBLPEB);
        /* uint32 score = 7; */
        if (message.score !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 Unk3300_IPAJLKOBDKC = 3 [json_name = "Unk3300IPAJLKOBDKC"]; */
        if (message.unk3300IPAJLKOBDKC !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300IPAJLKOBDKC);
        /* uint32 Unk3300_NILGNHOPGLD = 15 [json_name = "Unk3300NILGNHOPGLD"]; */
        if (message.unk3300NILGNHOPGLD !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300NILGNHOPGLD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageHuntingFirstStageInfo
 */
exports.VintageHuntingFirstStageInfo = new VintageHuntingFirstStageInfo$Type();
