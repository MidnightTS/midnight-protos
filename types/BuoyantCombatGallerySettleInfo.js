"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuoyantCombatGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BuoyantCombatGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BuoyantCombatGallerySettleInfo", [
            { no: 11, name: "gallery_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "kill_special_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_HLFHLPEKOML", kind: "scalar", jsonName: "Unk3300HLFHLPEKOML", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_KPCJBOOGEMG", kind: "scalar", jsonName: "Unk3300KPCJBOOGEMG", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryLevel: 0, killMonsterCount: 0, killSpecialMonsterCount: 0, unk3300HLFHLPEKOML: 0, galleryId: 0, unk3300KPCJBOOGEMG: 0, finalScore: 0 };
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
                case /* uint32 gallery_level */ 11:
                    message.galleryLevel = reader.uint32();
                    break;
                case /* uint32 kill_monster_count */ 1:
                    message.killMonsterCount = reader.uint32();
                    break;
                case /* uint32 kill_special_monster_count */ 9:
                    message.killSpecialMonsterCount = reader.uint32();
                    break;
                case /* uint32 Unk3300_HLFHLPEKOML = 7 [json_name = "Unk3300HLFHLPEKOML"];*/ 7:
                    message.unk3300HLFHLPEKOML = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 2:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 Unk3300_KPCJBOOGEMG = 10 [json_name = "Unk3300KPCJBOOGEMG"];*/ 10:
                    message.unk3300KPCJBOOGEMG = reader.uint32();
                    break;
                case /* uint32 final_score */ 12:
                    message.finalScore = reader.uint32();
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
        /* uint32 gallery_level = 11; */
        if (message.galleryLevel !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryLevel);
        /* uint32 kill_monster_count = 1; */
        if (message.killMonsterCount !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        /* uint32 kill_special_monster_count = 9; */
        if (message.killSpecialMonsterCount !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        /* uint32 Unk3300_HLFHLPEKOML = 7 [json_name = "Unk3300HLFHLPEKOML"]; */
        if (message.unk3300HLFHLPEKOML !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300HLFHLPEKOML);
        /* uint32 gallery_id = 2; */
        if (message.galleryId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 Unk3300_KPCJBOOGEMG = 10 [json_name = "Unk3300KPCJBOOGEMG"]; */
        if (message.unk3300KPCJBOOGEMG !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300KPCJBOOGEMG);
        /* uint32 final_score = 12; */
        if (message.finalScore !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.finalScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BuoyantCombatGallerySettleInfo
 */
exports.BuoyantCombatGallerySettleInfo = new BuoyantCombatGallerySettleInfo$Type();
