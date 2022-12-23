"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriMasterGallerySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriMasterGallerySettleInfo_1 = require("./IrodoriMasterGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriMasterGallerySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriMasterGallerySettleNotify", [
            { no: 9, name: "settle_info", kind: "message", T: () => IrodoriMasterGallerySettleInfo_1.IrodoriMasterGallerySettleInfo },
            { no: 11, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { galleryId: 0 };
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
                case /* IrodoriMasterGallerySettleInfo settle_info */ 9:
                    message.settleInfo = IrodoriMasterGallerySettleInfo_1.IrodoriMasterGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* uint32 gallery_id */ 11:
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
    internalBinaryWrite(message, writer, options) {
        /* IrodoriMasterGallerySettleInfo settle_info = 9; */
        if (message.settleInfo)
            IrodoriMasterGallerySettleInfo_1.IrodoriMasterGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gallery_id = 11; */
        if (message.galleryId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriMasterGallerySettleNotify
 */
exports.IrodoriMasterGallerySettleNotify = new IrodoriMasterGallerySettleNotify$Type();
