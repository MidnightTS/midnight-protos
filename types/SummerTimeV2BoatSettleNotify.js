"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeV2BoatSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SummerTimeV2BoatGallerySettleInfo_1 = require("./SummerTimeV2BoatGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2BoatSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeV2BoatSettleNotify", [
            { no: 15, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "settle_info", kind: "message", T: () => SummerTimeV2BoatGallerySettleInfo_1.SummerTimeV2BoatGallerySettleInfo },
            { no: 4, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false, galleryId: 0, stageId: 0 };
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
                case /* bool is_new_record */ 15:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 gallery_id */ 2:
                    message.galleryId = reader.uint32();
                    break;
                case /* SummerTimeV2BoatGallerySettleInfo settle_info */ 13:
                    message.settleInfo = SummerTimeV2BoatGallerySettleInfo_1.SummerTimeV2BoatGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* uint32 stage_id */ 4:
                    message.stageId = reader.uint32();
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
        /* bool is_new_record = 15; */
        if (message.isNewRecord !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 gallery_id = 2; */
        if (message.galleryId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* SummerTimeV2BoatGallerySettleInfo settle_info = 13; */
        if (message.settleInfo)
            SummerTimeV2BoatGallerySettleInfo_1.SummerTimeV2BoatGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 stage_id = 4; */
        if (message.stageId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2BoatSettleNotify
 */
exports.SummerTimeV2BoatSettleNotify = new SummerTimeV2BoatSettleNotify$Type();
