"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishingGallerySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FishingGallerySettleInfo_1 = require("./FishingGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FishingGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FishingGallerySettleNotify", [
            { no: 5, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "settle_info", kind: "message", T: () => FishingGallerySettleInfo_1.FishingGallerySettleInfo },
            { no: 12, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryId: 0, levelId: 0 };
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
                case /* uint32 gallery_id */ 5:
                    message.galleryId = reader.uint32();
                    break;
                case /* FishingGallerySettleInfo settle_info */ 4:
                    message.settleInfo = FishingGallerySettleInfo_1.FishingGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* uint32 level_id */ 12:
                    message.levelId = reader.uint32();
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
        /* uint32 gallery_id = 5; */
        if (message.galleryId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* FishingGallerySettleInfo settle_info = 4; */
        if (message.settleInfo)
            FishingGallerySettleInfo_1.FishingGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 12; */
        if (message.levelId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishingGallerySettleNotify
 */
exports.FishingGallerySettleNotify = new FishingGallerySettleNotify$Type();
