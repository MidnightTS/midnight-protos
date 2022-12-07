"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewCardInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGZoneType_1 = require("./GCGZoneType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewCardInfo", [
            { no: 10, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "face_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "zone_type", kind: "enum", T: () => ["GCGZoneType", GCGZoneType_1.GCGZoneType] },
            { no: 3, name: "owner_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardGuid: 0, faceType: 0, controllerId: 0, cardId: 0, zoneType: 0, ownerCardGuid: 0 };
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
                case /* uint32 card_guid */ 10:
                    message.cardGuid = reader.uint32();
                    break;
                case /* uint32 face_type */ 2:
                    message.faceType = reader.uint32();
                    break;
                case /* uint32 controller_id */ 11:
                    message.controllerId = reader.uint32();
                    break;
                case /* uint32 card_id */ 8:
                    message.cardId = reader.uint32();
                    break;
                case /* GCGZoneType zone_type */ 14:
                    message.zoneType = reader.int32();
                    break;
                case /* uint32 owner_card_guid */ 3:
                    message.ownerCardGuid = reader.uint32();
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
        /* uint32 card_guid = 10; */
        if (message.cardGuid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* uint32 face_type = 2; */
        if (message.faceType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.faceType);
        /* uint32 controller_id = 11; */
        if (message.controllerId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* uint32 card_id = 8; */
        if (message.cardId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cardId);
        /* GCGZoneType zone_type = 14; */
        if (message.zoneType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.zoneType);
        /* uint32 owner_card_guid = 3; */
        if (message.ownerCardGuid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.ownerCardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewCardInfo
 */
exports.GCGSkillPreviewCardInfo = new GCGSkillPreviewCardInfo$Type();
