"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceConjuringSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BounceConjuringGallerySettleInfo_1 = require("./BounceConjuringGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BounceConjuringSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BounceConjuringSettleNotify", [
            { no: 4, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "total_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "settle_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => BounceConjuringGallerySettleInfo_1.BounceConjuringGallerySettleInfo } },
            { no: 7, name: "chapter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false, totalScore: 0, settleInfoMap: {}, chapterId: 0 };
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
                case /* bool is_new_record */ 4:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 total_score */ 11:
                    message.totalScore = reader.uint32();
                    break;
                case /* map<uint32, BounceConjuringGallerySettleInfo> settle_info_map */ 10:
                    this.binaryReadMap10(message.settleInfoMap, reader, options);
                    break;
                case /* uint32 chapter_id */ 7:
                    message.chapterId = reader.uint32();
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
                    val = BounceConjuringGallerySettleInfo_1.BounceConjuringGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field BounceConjuringSettleNotify.settle_info_map");
            }
        }
        map[key ?? 0] = val ?? BounceConjuringGallerySettleInfo_1.BounceConjuringGallerySettleInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_new_record = 4; */
        if (message.isNewRecord !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 total_score = 11; */
        if (message.totalScore !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.totalScore);
        /* map<uint32, BounceConjuringGallerySettleInfo> settle_info_map = 10; */
        for (let k of Object.keys(message.settleInfoMap)) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            BounceConjuringGallerySettleInfo_1.BounceConjuringGallerySettleInfo.internalBinaryWrite(message.settleInfoMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 chapter_id = 7; */
        if (message.chapterId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.chapterId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BounceConjuringSettleNotify
 */
exports.BounceConjuringSettleNotify = new BounceConjuringSettleNotify$Type();
