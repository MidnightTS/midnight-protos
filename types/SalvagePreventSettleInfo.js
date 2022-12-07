"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalvagePreventSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SalvagePreventGallerySettleInfo_1 = require("./SalvagePreventGallerySettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SalvagePreventSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SalvagePreventSettleInfo", [
            { no: 4, name: "settle_info", kind: "message", T: () => SalvagePreventGallerySettleInfo_1.SalvagePreventGallerySettleInfo },
            { no: 12, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false };
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
                case /* SalvagePreventGallerySettleInfo settle_info */ 4:
                    message.settleInfo = SalvagePreventGallerySettleInfo_1.SalvagePreventGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* bool is_new_record */ 12:
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
        /* SalvagePreventGallerySettleInfo settle_info = 4; */
        if (message.settleInfo)
            SalvagePreventGallerySettleInfo_1.SalvagePreventGallerySettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_new_record = 12; */
        if (message.isNewRecord !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalvagePreventSettleInfo
 */
exports.SalvagePreventSettleInfo = new SalvagePreventSettleInfo$Type();
