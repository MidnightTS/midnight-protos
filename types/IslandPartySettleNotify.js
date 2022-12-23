"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IslandPartySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IslandPartyGallerySettleInfo_1 = require("./IslandPartyGallerySettleInfo");
const GalleryStopReason_1 = require("./GalleryStopReason");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("IslandPartySettleNotify", [
            { no: 9, name: "time_remain", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo },
            { no: 12, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 13, name: "settle_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IslandPartyGallerySettleInfo_1.IslandPartyGallerySettleInfo }
        ]);
    }
    create(value) {
        const message = { timeRemain: 0, isNewRecord: false, scoreList: [], reason: 0, settleInfoList: [] };
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
                case /* uint32 time_remain */ 9:
                    message.timeRemain = reader.uint32();
                    break;
                case /* bool is_new_record */ 3:
                    message.isNewRecord = reader.bool();
                    break;
                case /* repeated ExhibitionDisplayInfo score_list */ 5:
                    message.scoreList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* GalleryStopReason reason */ 12:
                    message.reason = reader.int32();
                    break;
                case /* repeated IslandPartyGallerySettleInfo settle_info_list */ 13:
                    message.settleInfoList.push(IslandPartyGallerySettleInfo_1.IslandPartyGallerySettleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 time_remain = 9; */
        if (message.timeRemain !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.timeRemain);
        /* bool is_new_record = 3; */
        if (message.isNewRecord !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* repeated ExhibitionDisplayInfo score_list = 5; */
        for (let i = 0; i < message.scoreList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GalleryStopReason reason = 12; */
        if (message.reason !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.reason);
        /* repeated IslandPartyGallerySettleInfo settle_info_list = 13; */
        for (let i = 0; i < message.settleInfoList.length; i++)
            IslandPartyGallerySettleInfo_1.IslandPartyGallerySettleInfo.internalBinaryWrite(message.settleInfoList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IslandPartySettleNotify
 */
exports.IslandPartySettleNotify = new IslandPartySettleNotify$Type();
