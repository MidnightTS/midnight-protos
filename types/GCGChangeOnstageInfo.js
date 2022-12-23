"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGChangeOnstageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillPreviewInfo_1 = require("./GCGSkillPreviewInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGChangeOnstageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGChangeOnstageInfo", [
            { no: 11, name: "is_quick", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "change_onstage_preview_info", kind: "message", T: () => GCGSkillPreviewInfo_1.GCGSkillPreviewInfo }
        ]);
    }
    create(value) {
        const message = { isQuick: false, cardGuid: 0 };
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
                case /* bool is_quick */ 11:
                    message.isQuick = reader.bool();
                    break;
                case /* uint32 card_guid */ 6:
                    message.cardGuid = reader.uint32();
                    break;
                case /* GCGSkillPreviewInfo change_onstage_preview_info */ 5:
                    message.changeOnstagePreviewInfo = GCGSkillPreviewInfo_1.GCGSkillPreviewInfo.internalBinaryRead(reader, reader.uint32(), options, message.changeOnstagePreviewInfo);
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
        /* bool is_quick = 11; */
        if (message.isQuick !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isQuick);
        /* uint32 card_guid = 6; */
        if (message.cardGuid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* GCGSkillPreviewInfo change_onstage_preview_info = 5; */
        if (message.changeOnstagePreviewInfo)
            GCGSkillPreviewInfo_1.GCGSkillPreviewInfo.internalBinaryWrite(message.changeOnstagePreviewInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGChangeOnstageInfo
 */
exports.GCGChangeOnstageInfo = new GCGChangeOnstageInfo$Type();
