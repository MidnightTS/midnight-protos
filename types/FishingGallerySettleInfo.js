"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishingGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FishInfo_1 = require("./FishInfo");
const FishingScore_1 = require("./FishingScore");
// @generated message type with reflection information, may provide speed optimized methods
class FishingGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FishingGallerySettleInfo", [
            { no: 15, name: "fishing_score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FishingScore_1.FishingScore },
            { no: 10, name: "fish_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FishInfo_1.FishInfo } }
        ]);
    }
    create(value) {
        const message = { fishingScoreList: [], fishMap: {} };
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
                case /* repeated FishingScore fishing_score_list */ 15:
                    message.fishingScoreList.push(FishingScore_1.FishingScore.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, FishInfo> fish_map */ 10:
                    this.binaryReadMap10(message.fishMap, reader, options);
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
                    val = FishInfo_1.FishInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FishingGallerySettleInfo.fish_map");
            }
        }
        map[key ?? 0] = val ?? FishInfo_1.FishInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated FishingScore fishing_score_list = 15; */
        for (let i = 0; i < message.fishingScoreList.length; i++)
            FishingScore_1.FishingScore.internalBinaryWrite(message.fishingScoreList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, FishInfo> fish_map = 10; */
        for (let k of Object.keys(message.fishMap)) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            FishInfo_1.FishInfo.internalBinaryWrite(message.fishMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishingGallerySettleInfo
 */
exports.FishingGallerySettleInfo = new FishingGallerySettleInfo$Type();
