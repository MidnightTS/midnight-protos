"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGTCTavernInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGTCTavernInfoNotify", [
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_IMFJBNFMCHM", kind: "scalar", jsonName: "Unk3300IMFJBNFMCHM", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_MBGMHBNBKBK", kind: "scalar", jsonName: "Unk3300MBGMHBNBKBK", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "character_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, unk3300IMFJBNFMCHM: false, unk3300MBGMHBNBKBK: false, pointId: 0, elementType: 0, avatarId: 0, characterId: 0 };
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
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* bool Unk3300_IMFJBNFMCHM = 11 [json_name = "Unk3300IMFJBNFMCHM"];*/ 11:
                    message.unk3300IMFJBNFMCHM = reader.bool();
                    break;
                case /* bool Unk3300_MBGMHBNBKBK = 8 [json_name = "Unk3300MBGMHBNBKBK"];*/ 8:
                    message.unk3300MBGMHBNBKBK = reader.bool();
                    break;
                case /* uint32 point_id */ 4:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 element_type */ 6:
                    message.elementType = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 9:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 character_id */ 12:
                    message.characterId = reader.uint32();
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
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool Unk3300_IMFJBNFMCHM = 11 [json_name = "Unk3300IMFJBNFMCHM"]; */
        if (message.unk3300IMFJBNFMCHM !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.unk3300IMFJBNFMCHM);
        /* bool Unk3300_MBGMHBNBKBK = 8 [json_name = "Unk3300MBGMHBNBKBK"]; */
        if (message.unk3300MBGMHBNBKBK !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300MBGMHBNBKBK);
        /* uint32 point_id = 4; */
        if (message.pointId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.pointId);
        /* uint32 element_type = 6; */
        if (message.elementType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.elementType);
        /* uint32 avatar_id = 9; */
        if (message.avatarId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 character_id = 12; */
        if (message.characterId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.characterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGTCTavernInfoNotify
 */
exports.GCGTCTavernInfoNotify = new GCGTCTavernInfoNotify$Type();
