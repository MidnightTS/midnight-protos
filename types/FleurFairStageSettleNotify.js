"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairStageSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FleurFairBossSettleInfo_1 = require("./FleurFairBossSettleInfo");
const FleurFairGallerySettleInfo_1 = require("./FleurFairGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairStageSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairStageSettleNotify", [
            { no: 7, name: "stage_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "gallery_settle_info", kind: "message", oneof: "detail", T: () => FleurFairGallerySettleInfo_1.FleurFairGallerySettleInfo },
            { no: 12, name: "boss_settle_info", kind: "message", oneof: "detail", T: () => FleurFairBossSettleInfo_1.FleurFairBossSettleInfo }
        ]);
    }
    create(value) {
        const message = { stageType: 0, detail: { oneofKind: undefined } };
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
                case /* uint32 stage_type */ 7:
                    message.stageType = reader.uint32();
                    break;
                case /* FleurFairGallerySettleInfo gallery_settle_info */ 1:
                    message.detail = {
                        oneofKind: "gallerySettleInfo",
                        gallerySettleInfo: FleurFairGallerySettleInfo_1.FleurFairGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.gallerySettleInfo)
                    };
                    break;
                case /* FleurFairBossSettleInfo boss_settle_info */ 12:
                    message.detail = {
                        oneofKind: "bossSettleInfo",
                        bossSettleInfo: FleurFairBossSettleInfo_1.FleurFairBossSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.bossSettleInfo)
                    };
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
        /* uint32 stage_type = 7; */
        if (message.stageType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.stageType);
        /* FleurFairGallerySettleInfo gallery_settle_info = 1; */
        if (message.detail.oneofKind === "gallerySettleInfo")
            FleurFairGallerySettleInfo_1.FleurFairGallerySettleInfo.internalBinaryWrite(message.detail.gallerySettleInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* FleurFairBossSettleInfo boss_settle_info = 12; */
        if (message.detail.oneofKind === "bossSettleInfo")
            FleurFairBossSettleInfo_1.FleurFairBossSettleInfo.internalBinaryWrite(message.detail.bossSettleInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairStageSettleNotify
 */
exports.FleurFairStageSettleNotify = new FleurFairStageSettleNotify$Type();
