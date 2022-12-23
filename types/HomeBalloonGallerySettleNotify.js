"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBalloonGallerySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BalloonGallerySettleInfo_1 = require("./BalloonGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBalloonGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBalloonGallerySettleNotify", [
            { no: 8, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "rank", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "settle_info", kind: "message", T: () => BalloonGallerySettleInfo_1.BalloonGallerySettleInfo },
            { no: 9, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { galleryId: 0, rank: 0, isNewRecord: false };
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
                case /* uint32 gallery_id */ 8:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 rank */ 13:
                    message.rank = reader.uint32();
                    break;
                case /* BalloonGallerySettleInfo settle_info */ 5:
                    message.settleInfo = BalloonGallerySettleInfo_1.BalloonGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* bool is_new_record */ 9:
                    message.isNewRecord = reader.bool();
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
        /* uint32 gallery_id = 8; */
        if (message.galleryId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 rank = 13; */
        if (message.rank !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.rank);
        /* BalloonGallerySettleInfo settle_info = 5; */
        if (message.settleInfo)
            BalloonGallerySettleInfo_1.BalloonGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_new_record = 9; */
        if (message.isNewRecord !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBalloonGallerySettleNotify
 */
exports.HomeBalloonGallerySettleNotify = new HomeBalloonGallerySettleNotify$Type();
