"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryWillStartCountdownNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStartSource_1 = require("./GalleryStartSource");
// @generated message type with reflection information, may provide speed optimized methods
class GalleryWillStartCountdownNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GalleryWillStartCountdownNotify", [
            { no: 13, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "start_source", kind: "enum", T: () => ["GalleryStartSource", GalleryStartSource_1.GalleryStartSource, "GALLERY_START_SOURCE_"] },
            { no: 15, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_end", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { galleryId: 0, startSource: 0, endTime: 0, isEnd: false };
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
                case /* uint32 gallery_id */ 13:
                    message.galleryId = reader.uint32();
                    break;
                case /* GalleryStartSource start_source */ 14:
                    message.startSource = reader.int32();
                    break;
                case /* uint32 end_time */ 15:
                    message.endTime = reader.uint32();
                    break;
                case /* bool is_end */ 6:
                    message.isEnd = reader.bool();
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
        /* uint32 gallery_id = 13; */
        if (message.galleryId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* GalleryStartSource start_source = 14; */
        if (message.startSource !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.startSource);
        /* uint32 end_time = 15; */
        if (message.endTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.endTime);
        /* bool is_end = 6; */
        if (message.isEnd !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isEnd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryWillStartCountdownNotify
 */
exports.GalleryWillStartCountdownNotify = new GalleryWillStartCountdownNotify$Type();
