"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryFallCatchNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GalleryFallCatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GalleryFallCatchNotify", [
            { no: 1, name: "add_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "time_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_ground", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "ball_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { addScore: 0, galleryId: 0, curScore: 0, timeCost: 0, isGround: false, ballCatchCountMap: {} };
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
                case /* uint32 add_score */ 1:
                    message.addScore = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 7:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 cur_score */ 11:
                    message.curScore = reader.uint32();
                    break;
                case /* uint32 time_cost */ 15:
                    message.timeCost = reader.uint32();
                    break;
                case /* bool is_ground */ 8:
                    message.isGround = reader.bool();
                    break;
                case /* map<uint32, uint32> ball_catch_count_map */ 14:
                    this.binaryReadMap14(message.ballCatchCountMap, reader, options);
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
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GalleryFallCatchNotify.ball_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 add_score = 1; */
        if (message.addScore !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.addScore);
        /* uint32 gallery_id = 7; */
        if (message.galleryId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 cur_score = 11; */
        if (message.curScore !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curScore);
        /* uint32 time_cost = 15; */
        if (message.timeCost !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* bool is_ground = 8; */
        if (message.isGround !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isGround);
        /* map<uint32, uint32> ball_catch_count_map = 14; */
        for (let k of Object.keys(message.ballCatchCountMap))
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.ballCatchCountMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryFallCatchNotify
 */
exports.GalleryFallCatchNotify = new GalleryFallCatchNotify$Type();
