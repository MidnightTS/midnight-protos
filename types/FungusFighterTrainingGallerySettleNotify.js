"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusFighterTrainingGallerySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterTrainingGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusFighterTrainingGallerySettleNotify", [
            { no: 3, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 2, name: "is_final_settle", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "total_used_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "Unk3300_KKFBMHLOLFC", kind: "scalar", jsonName: "Unk3300KKFBMHLOLFC", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_BHOMHPHLOHL", kind: "scalar", jsonName: "Unk3300BHOMHPHLOHL", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_POCDEGBHJEA", kind: "scalar", jsonName: "Unk3300POCDEGBHJEA", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, isFinalSettle: false, totalUsedTime: 0, isNewRecord: false, unk3300KKFBMHLOLFC: 0, unk3300BHOMHPHLOHL: 0, unk3300POCDEGBHJEA: 0, finalScore: 0 };
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
                case /* GalleryStopReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* bool is_final_settle */ 2:
                    message.isFinalSettle = reader.bool();
                    break;
                case /* uint32 total_used_time */ 14:
                    message.totalUsedTime = reader.uint32();
                    break;
                case /* bool is_new_record */ 11:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 Unk3300_KKFBMHLOLFC = 10 [json_name = "Unk3300KKFBMHLOLFC"];*/ 10:
                    message.unk3300KKFBMHLOLFC = reader.uint32();
                    break;
                case /* uint32 Unk3300_BHOMHPHLOHL = 13 [json_name = "Unk3300BHOMHPHLOHL"];*/ 13:
                    message.unk3300BHOMHPHLOHL = reader.uint32();
                    break;
                case /* uint32 Unk3300_POCDEGBHJEA = 15 [json_name = "Unk3300POCDEGBHJEA"];*/ 15:
                    message.unk3300POCDEGBHJEA = reader.uint32();
                    break;
                case /* uint32 final_score */ 5:
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
        /* GalleryStopReason reason = 3; */
        if (message.reason !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        /* bool is_final_settle = 2; */
        if (message.isFinalSettle !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isFinalSettle);
        /* uint32 total_used_time = 14; */
        if (message.totalUsedTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.totalUsedTime);
        /* bool is_new_record = 11; */
        if (message.isNewRecord !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 Unk3300_KKFBMHLOLFC = 10 [json_name = "Unk3300KKFBMHLOLFC"]; */
        if (message.unk3300KKFBMHLOLFC !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300KKFBMHLOLFC);
        /* uint32 Unk3300_BHOMHPHLOHL = 13 [json_name = "Unk3300BHOMHPHLOHL"]; */
        if (message.unk3300BHOMHPHLOHL !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300BHOMHPHLOHL);
        /* uint32 Unk3300_POCDEGBHJEA = 15 [json_name = "Unk3300POCDEGBHJEA"]; */
        if (message.unk3300POCDEGBHJEA !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300POCDEGBHJEA);
        /* uint32 final_score = 5; */
        if (message.finalScore !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.finalScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterTrainingGallerySettleNotify
 */
exports.FungusFighterTrainingGallerySettleNotify = new FungusFighterTrainingGallerySettleNotify$Type();
