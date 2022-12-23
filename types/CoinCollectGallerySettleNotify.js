"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinCollectGallerySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CoinCollectGallerySettleNotify", [
            { no: 2, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_DKBJMLJGLIB", kind: "scalar", jsonName: "Unk3300DKBJMLJGLIB", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_KDHDMOGJDNL", kind: "scalar", jsonName: "Unk3300KDHDMOGJDNL", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "multistage_play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_CPLDPCMBHOE", kind: "scalar", jsonName: "Unk3300CPLDPCMBHOE", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { levelId: 0, unk3300DKBJMLJGLIB: 0, unk3300KDHDMOGJDNL: 0, multistagePlayIndex: 0, unk3300CPLDPCMBHOE: 0, isNewRecord: false };
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
                case /* uint32 level_id */ 2:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 Unk3300_DKBJMLJGLIB = 13 [json_name = "Unk3300DKBJMLJGLIB"];*/ 13:
                    message.unk3300DKBJMLJGLIB = reader.uint32();
                    break;
                case /* uint32 Unk3300_KDHDMOGJDNL = 14 [json_name = "Unk3300KDHDMOGJDNL"];*/ 14:
                    message.unk3300KDHDMOGJDNL = reader.uint32();
                    break;
                case /* uint32 multistage_play_index */ 8:
                    message.multistagePlayIndex = reader.uint32();
                    break;
                case /* uint32 Unk3300_CPLDPCMBHOE = 6 [json_name = "Unk3300CPLDPCMBHOE"];*/ 6:
                    message.unk3300CPLDPCMBHOE = reader.uint32();
                    break;
                case /* bool is_new_record */ 15:
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
        /* uint32 level_id = 2; */
        if (message.levelId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 Unk3300_DKBJMLJGLIB = 13 [json_name = "Unk3300DKBJMLJGLIB"]; */
        if (message.unk3300DKBJMLJGLIB !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300DKBJMLJGLIB);
        /* uint32 Unk3300_KDHDMOGJDNL = 14 [json_name = "Unk3300KDHDMOGJDNL"]; */
        if (message.unk3300KDHDMOGJDNL !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300KDHDMOGJDNL);
        /* uint32 multistage_play_index = 8; */
        if (message.multistagePlayIndex !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.multistagePlayIndex);
        /* uint32 Unk3300_CPLDPCMBHOE = 6 [json_name = "Unk3300CPLDPCMBHOE"]; */
        if (message.unk3300CPLDPCMBHOE !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300CPLDPCMBHOE);
        /* bool is_new_record = 15; */
        if (message.isNewRecord !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectGallerySettleNotify
 */
exports.CoinCollectGallerySettleNotify = new CoinCollectGallerySettleNotify$Type();
