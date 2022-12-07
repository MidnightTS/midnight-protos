"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneGalleryInfo_1 = require("./SceneGalleryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryInfoNotify", [
            { no: 11, name: "gallery_info", kind: "message", T: () => SceneGalleryInfo_1.SceneGalleryInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* SceneGalleryInfo gallery_info */ 11:
                    message.galleryInfo = SceneGalleryInfo_1.SceneGalleryInfo.internalBinaryRead(reader, reader.uint32(), options, message.galleryInfo);
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
        /* SceneGalleryInfo gallery_info = 11; */
        if (message.galleryInfo)
            SceneGalleryInfo_1.SceneGalleryInfo.internalBinaryWrite(message.galleryInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryInfoNotify
 */
exports.SceneGalleryInfoNotify = new SceneGalleryInfoNotify$Type();
