"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewPlayCardInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillPreviewInfo_1 = require("./GCGSkillPreviewInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewPlayCardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewPlayCardInfo", [
            { no: 15, name: "hand_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "play_card_info", kind: "message", T: () => GCGSkillPreviewInfo_1.GCGSkillPreviewInfo },
            { no: 8, name: "target_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { handCardGuid: 0, targetCardGuid: 0 };
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
                case /* uint32 hand_card_guid */ 15:
                    message.handCardGuid = reader.uint32();
                    break;
                case /* GCGSkillPreviewInfo play_card_info */ 10:
                    message.playCardInfo = GCGSkillPreviewInfo_1.GCGSkillPreviewInfo.internalBinaryRead(reader, reader.uint32(), options, message.playCardInfo);
                    break;
                case /* uint32 target_card_guid */ 8:
                    message.targetCardGuid = reader.uint32();
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
        /* uint32 hand_card_guid = 15; */
        if (message.handCardGuid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.handCardGuid);
        /* GCGSkillPreviewInfo play_card_info = 10; */
        if (message.playCardInfo)
            GCGSkillPreviewInfo_1.GCGSkillPreviewInfo.internalBinaryWrite(message.playCardInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 target_card_guid = 8; */
        if (message.targetCardGuid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.targetCardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewPlayCardInfo
 */
exports.GCGSkillPreviewPlayCardInfo = new GCGSkillPreviewPlayCardInfo$Type();
