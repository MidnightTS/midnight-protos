"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillPreviewPlayCardInfo_1 = require("./GCGSkillPreviewPlayCardInfo");
const GCGChangeOnstageInfo_1 = require("./GCGChangeOnstageInfo");
const GCGSkillPreviewInfo_1 = require("./GCGSkillPreviewInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewNotify", [
            { no: 13, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "skill_preview_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewInfo_1.GCGSkillPreviewInfo },
            { no: 3, name: "change_onstage_preview_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGChangeOnstageInfo_1.GCGChangeOnstageInfo },
            { no: 11, name: "play_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewPlayCardInfo_1.GCGSkillPreviewPlayCardInfo },
            { no: 6, name: "onstage_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { controllerId: 0, skillPreviewList: [], changeOnstagePreviewList: [], playCardList: [], onstageCardGuid: 0 };
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
                case /* uint32 controller_id */ 13:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated GCGSkillPreviewInfo skill_preview_list */ 15:
                    message.skillPreviewList.push(GCGSkillPreviewInfo_1.GCGSkillPreviewInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGChangeOnstageInfo change_onstage_preview_list */ 3:
                    message.changeOnstagePreviewList.push(GCGChangeOnstageInfo_1.GCGChangeOnstageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGSkillPreviewPlayCardInfo play_card_list */ 11:
                    message.playCardList.push(GCGSkillPreviewPlayCardInfo_1.GCGSkillPreviewPlayCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 onstage_card_guid */ 6:
                    message.onstageCardGuid = reader.uint32();
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
        /* uint32 controller_id = 13; */
        if (message.controllerId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* repeated GCGSkillPreviewInfo skill_preview_list = 15; */
        for (let i = 0; i < message.skillPreviewList.length; i++)
            GCGSkillPreviewInfo_1.GCGSkillPreviewInfo.internalBinaryWrite(message.skillPreviewList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGChangeOnstageInfo change_onstage_preview_list = 3; */
        for (let i = 0; i < message.changeOnstagePreviewList.length; i++)
            GCGChangeOnstageInfo_1.GCGChangeOnstageInfo.internalBinaryWrite(message.changeOnstagePreviewList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGSkillPreviewPlayCardInfo play_card_list = 11; */
        for (let i = 0; i < message.playCardList.length; i++)
            GCGSkillPreviewPlayCardInfo_1.GCGSkillPreviewPlayCardInfo.internalBinaryWrite(message.playCardList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 onstage_card_guid = 6; */
        if (message.onstageCardGuid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.onstageCardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewNotify
 */
exports.GCGSkillPreviewNotify = new GCGSkillPreviewNotify$Type();
