"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairGallerySettleInfo", [
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "energy_stat_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 3, name: "energy", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "gallery_stage_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "gallery_stage_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSuccess: false, energyStatMap: {}, energy: 0, galleryStageIndex: 0, galleryStageCount: 0 };
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
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* map<uint32, int32> energy_stat_map */ 2:
                    this.binaryReadMap2(message.energyStatMap, reader, options);
                    break;
                case /* uint32 energy */ 3:
                    message.energy = reader.uint32();
                    break;
                case /* uint32 gallery_stage_index */ 6:
                    message.galleryStageIndex = reader.uint32();
                    break;
                case /* uint32 gallery_stage_count */ 15:
                    message.galleryStageCount = reader.uint32();
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
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairGallerySettleInfo.energy_stat_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* map<uint32, int32> energy_stat_map = 2; */
        for (let k of Object.keys(message.energyStatMap))
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.energyStatMap[k]).join();
        /* uint32 energy = 3; */
        if (message.energy !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.energy);
        /* uint32 gallery_stage_index = 6; */
        if (message.galleryStageIndex !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.galleryStageIndex);
        /* uint32 gallery_stage_count = 15; */
        if (message.galleryStageCount !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.galleryStageCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairGallerySettleInfo
 */
exports.FleurFairGallerySettleInfo = new FleurFairGallerySettleInfo$Type();
