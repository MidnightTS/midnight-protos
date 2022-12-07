"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravenInnocenceRaceSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocenceRaceSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GravenInnocenceRaceSettleNotify", [
            { no: 9, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_BOIPHOPMHJM", kind: "scalar", jsonName: "Unk3300BOIPHOPMHJM", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 6, name: "Unk3300_IPGJKKFDPJJ", kind: "scalar", jsonName: "Unk3300IPGJKKFDPJJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "remain_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_OHAHHKNAJKL", kind: "scalar", jsonName: "Unk3300OHAHHKNAJKL", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryId: 0, isNewRecord: false, levelId: 0, unk3300BOIPHOPMHJM: 0, score: 0, isSuccess: false, reason: 0, unk3300IPGJKKFDPJJ: 0, remainTime: 0, unk3300OHAHHKNAJKL: 0 };
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
                case /* uint32 gallery_id */ 9:
                    message.galleryId = reader.uint32();
                    break;
                case /* bool is_new_record */ 3:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 level_id */ 11:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 Unk3300_BOIPHOPMHJM = 8 [json_name = "Unk3300BOIPHOPMHJM"];*/ 8:
                    message.unk3300BOIPHOPMHJM = reader.uint32();
                    break;
                case /* uint32 score */ 4:
                    message.score = reader.uint32();
                    break;
                case /* bool is_success */ 10:
                    message.isSuccess = reader.bool();
                    break;
                case /* GalleryStopReason reason */ 12:
                    message.reason = reader.int32();
                    break;
                case /* uint32 Unk3300_IPGJKKFDPJJ = 6 [json_name = "Unk3300IPGJKKFDPJJ"];*/ 6:
                    message.unk3300IPGJKKFDPJJ = reader.uint32();
                    break;
                case /* uint32 remain_time */ 2:
                    message.remainTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_OHAHHKNAJKL = 7 [json_name = "Unk3300OHAHHKNAJKL"];*/ 7:
                    message.unk3300OHAHHKNAJKL = reader.uint32();
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
        /* uint32 gallery_id = 9; */
        if (message.galleryId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* bool is_new_record = 3; */
        if (message.isNewRecord !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 level_id = 11; */
        if (message.levelId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 Unk3300_BOIPHOPMHJM = 8 [json_name = "Unk3300BOIPHOPMHJM"]; */
        if (message.unk3300BOIPHOPMHJM !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300BOIPHOPMHJM);
        /* uint32 score = 4; */
        if (message.score !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.score);
        /* bool is_success = 10; */
        if (message.isSuccess !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* GalleryStopReason reason = 12; */
        if (message.reason !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 Unk3300_IPGJKKFDPJJ = 6 [json_name = "Unk3300IPGJKKFDPJJ"]; */
        if (message.unk3300IPGJKKFDPJJ !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300IPGJKKFDPJJ);
        /* uint32 remain_time = 2; */
        if (message.remainTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.remainTime);
        /* uint32 Unk3300_OHAHHKNAJKL = 7 [json_name = "Unk3300OHAHHKNAJKL"]; */
        if (message.unk3300OHAHHKNAJKL !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300OHAHHKNAJKL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocenceRaceSettleNotify
 */
exports.GravenInnocenceRaceSettleNotify = new GravenInnocenceRaceSettleNotify$Type();
