"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryFallScoreNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FallPlayerBrief_1 = require("./FallPlayerBrief");
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFallScoreNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GalleryFallScoreNotify", [
            { no: 10, name: "uid_brief_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FallPlayerBrief_1.FallPlayerBrief } },
            { no: 15, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidBriefMap: {}, galleryId: 0 };
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
                case /* map<uint32, FallPlayerBrief> uid_brief_map */ 10:
                    this.binaryReadMap10(message.uidBriefMap, reader, options);
                    break;
                case /* uint32 gallery_id */ 15:
                    message.galleryId = reader.uint32();
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
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = FallPlayerBrief_1.FallPlayerBrief.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GalleryFallScoreNotify.uid_brief_map");
            }
        }
        map[key ?? 0] = val ?? FallPlayerBrief_1.FallPlayerBrief.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, FallPlayerBrief> uid_brief_map = 10; */
        for (let k of Object.keys(message.uidBriefMap)) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            FallPlayerBrief_1.FallPlayerBrief.internalBinaryWrite(message.uidBriefMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 gallery_id = 15; */
        if (message.galleryId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryFallScoreNotify
 */
exports.GalleryFallScoreNotify = new GalleryFallScoreNotify$Type();
