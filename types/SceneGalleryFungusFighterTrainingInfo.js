"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryFungusFighterTrainingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryFungusFighterTrainingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryFungusFighterTrainingInfo", [
            { no: 15, name: "Unk3300_GMLIPFDMDOG", kind: "scalar", jsonName: "Unk3300GMLIPFDMDOG", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_IOEELCAMDCK", kind: "scalar", jsonName: "Unk3300IOEELCAMDCK", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EDHANEGNMJM", kind: "scalar", jsonName: "Unk3300EDHANEGNMJM", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_HGPGNCMNDJN", kind: "scalar", jsonName: "Unk3300HGPGNCMNDJN", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_EKAMCPNGCGH", kind: "scalar", jsonName: "Unk3300EKAMCPNGCGH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GMLIPFDMDOG: 0, unk3300IOEELCAMDCK: 0, maxMonsterCount: 0, unk3300EDHANEGNMJM: 0, buffId: 0, unk3300HGPGNCMNDJN: 0, unk3300EKAMCPNGCGH: 0 };
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
                case /* uint32 Unk3300_GMLIPFDMDOG = 15 [json_name = "Unk3300GMLIPFDMDOG"];*/ 15:
                    message.unk3300GMLIPFDMDOG = reader.uint32();
                    break;
                case /* uint32 Unk3300_IOEELCAMDCK = 8 [json_name = "Unk3300IOEELCAMDCK"];*/ 8:
                    message.unk3300IOEELCAMDCK = reader.uint32();
                    break;
                case /* uint32 max_monster_count */ 10:
                    message.maxMonsterCount = reader.uint32();
                    break;
                case /* uint32 Unk3300_EDHANEGNMJM = 2 [json_name = "Unk3300EDHANEGNMJM"];*/ 2:
                    message.unk3300EDHANEGNMJM = reader.uint32();
                    break;
                case /* uint32 buff_id */ 13:
                    message.buffId = reader.uint32();
                    break;
                case /* uint32 Unk3300_HGPGNCMNDJN = 14 [json_name = "Unk3300HGPGNCMNDJN"];*/ 14:
                    message.unk3300HGPGNCMNDJN = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKAMCPNGCGH = 5 [json_name = "Unk3300EKAMCPNGCGH"];*/ 5:
                    message.unk3300EKAMCPNGCGH = reader.uint32();
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
        /* uint32 Unk3300_GMLIPFDMDOG = 15 [json_name = "Unk3300GMLIPFDMDOG"]; */
        if (message.unk3300GMLIPFDMDOG !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300GMLIPFDMDOG);
        /* uint32 Unk3300_IOEELCAMDCK = 8 [json_name = "Unk3300IOEELCAMDCK"]; */
        if (message.unk3300IOEELCAMDCK !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300IOEELCAMDCK);
        /* uint32 max_monster_count = 10; */
        if (message.maxMonsterCount !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.maxMonsterCount);
        /* uint32 Unk3300_EDHANEGNMJM = 2 [json_name = "Unk3300EDHANEGNMJM"]; */
        if (message.unk3300EDHANEGNMJM !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300EDHANEGNMJM);
        /* uint32 buff_id = 13; */
        if (message.buffId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.buffId);
        /* uint32 Unk3300_HGPGNCMNDJN = 14 [json_name = "Unk3300HGPGNCMNDJN"]; */
        if (message.unk3300HGPGNCMNDJN !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300HGPGNCMNDJN);
        /* uint32 Unk3300_EKAMCPNGCGH = 5 [json_name = "Unk3300EKAMCPNGCGH"]; */
        if (message.unk3300EKAMCPNGCGH !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300EKAMCPNGCGH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryFungusFighterTrainingInfo
 */
exports.SceneGalleryFungusFighterTrainingInfo = new SceneGalleryFungusFighterTrainingInfo$Type();
