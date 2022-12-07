"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalvageEscortSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SalvageEscortSettleInfo_1 = require("./SalvageEscortSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SalvageEscortSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SalvageEscortSettleNotify", [
            { no: 1, name: "settle_info", kind: "message", T: () => SalvageEscortSettleInfo_1.SalvageEscortSettleInfo },
            { no: 6, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
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
                case /* SalvageEscortSettleInfo settle_info */ 1:
                    message.settleInfo = SalvageEscortSettleInfo_1.SalvageEscortSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* uint32 gallery_id */ 6:
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
        /* SalvageEscortSettleInfo settle_info = 1; */
        if (message.settleInfo)
            SalvageEscortSettleInfo_1.SalvageEscortSettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gallery_id = 6; */
        if (message.galleryId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.galleryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvageEscortSettleNotify
 */
exports.SalvageEscortSettleNotify = new SalvageEscortSettleNotify$Type();
