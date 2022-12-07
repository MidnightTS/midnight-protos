"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSeekFurnitureGalleryScoreNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeSeekFurnitureOneRecord_1 = require("./HomeSeekFurnitureOneRecord");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class HomeSeekFurnitureGalleryScoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeSeekFurnitureGalleryScoreNotify", [
            { no: 7, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 13, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "record", kind: "message", T: () => HomeSeekFurnitureOneRecord_1.HomeSeekFurnitureOneRecord }
        ]);
    }
    create(value) {
        const message = { reason: 0, galleryId: 0 };
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
                case /* GalleryStopReason reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
                    break;
                case /* HomeSeekFurnitureOneRecord record */ 2:
                    message.record = HomeSeekFurnitureOneRecord_1.HomeSeekFurnitureOneRecord.internalBinaryRead(reader, reader.uint32(), options, message.record);
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
        /* GalleryStopReason reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 gallery_id = 13; */
        if (message.galleryId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* HomeSeekFurnitureOneRecord record = 2; */
        if (message.record)
            HomeSeekFurnitureOneRecord_1.HomeSeekFurnitureOneRecord.internalBinaryWrite(message.record, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeSeekFurnitureGalleryScoreNotify
 */
exports.HomeSeekFurnitureGalleryScoreNotify = new HomeSeekFurnitureGalleryScoreNotify$Type();
