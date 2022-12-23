"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryTiredAvatarNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryAvatar_1 = require("./RogueDiaryAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryTiredAvatarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryTiredAvatarNotify", [
            { no: 1, name: "Unk3300_DMEMBBPEIGK", kind: "scalar", jsonName: "Unk3300DMEMBBPEIGK", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_BGEJGLBMFII", kind: "scalar", jsonName: "Unk3300BGEJGLBMFII", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_need_show", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "optional_tired_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryAvatar_1.RogueDiaryAvatar }
        ]);
    }
    create(value) {
        const message = { unk3300DMEMBBPEIGK: 0, unk3300BGEJGLBMFII: 0, isNeedShow: false, optionalTiredAvatarList: [] };
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
                case /* uint32 Unk3300_DMEMBBPEIGK = 1 [json_name = "Unk3300DMEMBBPEIGK"];*/ 1:
                    message.unk3300DMEMBBPEIGK = reader.uint32();
                    break;
                case /* uint32 Unk3300_BGEJGLBMFII = 14 [json_name = "Unk3300BGEJGLBMFII"];*/ 14:
                    message.unk3300BGEJGLBMFII = reader.uint32();
                    break;
                case /* bool is_need_show */ 11:
                    message.isNeedShow = reader.bool();
                    break;
                case /* repeated RogueDiaryAvatar optional_tired_avatar_list */ 5:
                    message.optionalTiredAvatarList.push(RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 Unk3300_DMEMBBPEIGK = 1 [json_name = "Unk3300DMEMBBPEIGK"]; */
        if (message.unk3300DMEMBBPEIGK !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300DMEMBBPEIGK);
        /* uint32 Unk3300_BGEJGLBMFII = 14 [json_name = "Unk3300BGEJGLBMFII"]; */
        if (message.unk3300BGEJGLBMFII !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300BGEJGLBMFII);
        /* bool is_need_show = 11; */
        if (message.isNeedShow !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isNeedShow);
        /* repeated RogueDiaryAvatar optional_tired_avatar_list = 5; */
        for (let i = 0; i < message.optionalTiredAvatarList.length; i++)
            RogueDiaryAvatar_1.RogueDiaryAvatar.internalBinaryWrite(message.optionalTiredAvatarList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryTiredAvatarNotify
 */
exports.RogueDiaryTiredAvatarNotify = new RogueDiaryTiredAvatarNotify$Type();
