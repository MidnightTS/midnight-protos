"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillPreviewTokenChangeInfo_1 = require("./GCGSkillPreviewTokenChangeInfo");
const GCGSkillPreviewElementReactionInfo_1 = require("./GCGSkillPreviewElementReactionInfo");
const GCGSkillPreviewExtraInfo_1 = require("./GCGSkillPreviewExtraInfo");
const GCGSkillPreviewHpInfo_1 = require("./GCGSkillPreviewHpInfo");
const GCGSkillPreviewCardInfo_1 = require("./GCGSkillPreviewCardInfo");
const GCGSkillPreviewOnstageChangeInfo_1 = require("./GCGSkillPreviewOnstageChangeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewInfo", [
            { no: 6, name: "change_onstage_character_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewOnstageChangeInfo_1.GCGSkillPreviewOnstageChangeInfo },
            { no: 15, name: "Unk3300_DAJFJEDNLKK", kind: "message", jsonName: "Unk3300DAJFJEDNLKK", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo },
            { no: 12, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "hp_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => GCGSkillPreviewHpInfo_1.GCGSkillPreviewHpInfo } },
            { no: 2, name: "Unk3300_AGNONGELFGC", kind: "message", jsonName: "Unk3300AGNONGELFGC", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo },
            { no: 11, name: "extra_info", kind: "message", T: () => GCGSkillPreviewExtraInfo_1.GCGSkillPreviewExtraInfo },
            { no: 14, name: "reaction_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => GCGSkillPreviewElementReactionInfo_1.GCGSkillPreviewElementReactionInfo } },
            { no: 8, name: "card_token_change_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => GCGSkillPreviewTokenChangeInfo_1.GCGSkillPreviewTokenChangeInfo } }
        ]);
    }
    create(value) {
        const message = { changeOnstageCharacterList: [], unk3300DAJFJEDNLKK: [], skillId: 0, hpInfoMap: {}, unk3300AGNONGELFGC: [], reactionInfoMap: {}, cardTokenChangeMap: {} };
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
                case /* repeated GCGSkillPreviewOnstageChangeInfo change_onstage_character_list */ 6:
                    message.changeOnstageCharacterList.push(GCGSkillPreviewOnstageChangeInfo_1.GCGSkillPreviewOnstageChangeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGSkillPreviewCardInfo Unk3300_DAJFJEDNLKK = 15 [json_name = "Unk3300DAJFJEDNLKK"];*/ 15:
                    message.unk3300DAJFJEDNLKK.push(GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 skill_id */ 12:
                    message.skillId = reader.uint32();
                    break;
                case /* map<uint32, GCGSkillPreviewHpInfo> hp_info_map */ 3:
                    this.binaryReadMap3(message.hpInfoMap, reader, options);
                    break;
                case /* repeated GCGSkillPreviewCardInfo Unk3300_AGNONGELFGC = 2 [json_name = "Unk3300AGNONGELFGC"];*/ 2:
                    message.unk3300AGNONGELFGC.push(GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* GCGSkillPreviewExtraInfo extra_info */ 11:
                    message.extraInfo = GCGSkillPreviewExtraInfo_1.GCGSkillPreviewExtraInfo.internalBinaryRead(reader, reader.uint32(), options, message.extraInfo);
                    break;
                case /* map<uint32, GCGSkillPreviewElementReactionInfo> reaction_info_map */ 14:
                    this.binaryReadMap14(message.reactionInfoMap, reader, options);
                    break;
                case /* map<uint32, GCGSkillPreviewTokenChangeInfo> card_token_change_map */ 8:
                    this.binaryReadMap8(message.cardTokenChangeMap, reader, options);
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
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = GCGSkillPreviewHpInfo_1.GCGSkillPreviewHpInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGSkillPreviewInfo.hp_info_map");
            }
        }
        map[key ?? 0] = val ?? GCGSkillPreviewHpInfo_1.GCGSkillPreviewHpInfo.create();
    }
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = GCGSkillPreviewElementReactionInfo_1.GCGSkillPreviewElementReactionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGSkillPreviewInfo.reaction_info_map");
            }
        }
        map[key ?? 0] = val ?? GCGSkillPreviewElementReactionInfo_1.GCGSkillPreviewElementReactionInfo.create();
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = GCGSkillPreviewTokenChangeInfo_1.GCGSkillPreviewTokenChangeInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGSkillPreviewInfo.card_token_change_map");
            }
        }
        map[key ?? 0] = val ?? GCGSkillPreviewTokenChangeInfo_1.GCGSkillPreviewTokenChangeInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated GCGSkillPreviewOnstageChangeInfo change_onstage_character_list = 6; */
        for (let i = 0; i < message.changeOnstageCharacterList.length; i++)
            GCGSkillPreviewOnstageChangeInfo_1.GCGSkillPreviewOnstageChangeInfo.internalBinaryWrite(message.changeOnstageCharacterList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGSkillPreviewCardInfo Unk3300_DAJFJEDNLKK = 15 [json_name = "Unk3300DAJFJEDNLKK"]; */
        for (let i = 0; i < message.unk3300DAJFJEDNLKK.length; i++)
            GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryWrite(message.unk3300DAJFJEDNLKK[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 skill_id = 12; */
        if (message.skillId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.skillId);
        /* map<uint32, GCGSkillPreviewHpInfo> hp_info_map = 3; */
        for (let k of Object.keys(message.hpInfoMap)) {
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            GCGSkillPreviewHpInfo_1.GCGSkillPreviewHpInfo.internalBinaryWrite(message.hpInfoMap[k], writer, options);
            writer.join().join();
        }
        /* repeated GCGSkillPreviewCardInfo Unk3300_AGNONGELFGC = 2 [json_name = "Unk3300AGNONGELFGC"]; */
        for (let i = 0; i < message.unk3300AGNONGELFGC.length; i++)
            GCGSkillPreviewCardInfo_1.GCGSkillPreviewCardInfo.internalBinaryWrite(message.unk3300AGNONGELFGC[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGSkillPreviewExtraInfo extra_info = 11; */
        if (message.extraInfo)
            GCGSkillPreviewExtraInfo_1.GCGSkillPreviewExtraInfo.internalBinaryWrite(message.extraInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, GCGSkillPreviewElementReactionInfo> reaction_info_map = 14; */
        for (let k of Object.keys(message.reactionInfoMap)) {
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            GCGSkillPreviewElementReactionInfo_1.GCGSkillPreviewElementReactionInfo.internalBinaryWrite(message.reactionInfoMap[k], writer, options);
            writer.join().join();
        }
        /* map<uint32, GCGSkillPreviewTokenChangeInfo> card_token_change_map = 8; */
        for (let k of Object.keys(message.cardTokenChangeMap)) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            GCGSkillPreviewTokenChangeInfo_1.GCGSkillPreviewTokenChangeInfo.internalBinaryWrite(message.cardTokenChangeMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewInfo
 */
exports.GCGSkillPreviewInfo = new GCGSkillPreviewInfo$Type();
