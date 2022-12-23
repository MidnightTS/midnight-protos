"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSpineActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DragonSpineChapterInfo_1 = require("./DragonSpineChapterInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DragonSpineActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DragonSpineActivityDetailInfo", [
            { no: 9, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "Unk3300_FOHJDGCAKEK", kind: "scalar", jsonName: "Unk3300FOHJDGCAKEK", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_PPABOFMIGNM", kind: "scalar", jsonName: "Unk3300PPABOFMIGNM", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "chapter_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DragonSpineChapterInfo_1.DragonSpineChapterInfo },
            { no: 4, name: "Unk3300_NEOCMGJCEOJ", kind: "scalar", jsonName: "Unk3300NEOCMGJCEOJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_IMLKIJAOADF", kind: "scalar", jsonName: "Unk3300IMLKIJAOADF", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "weapon_enhance_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false, unk3300FOHJDGCAKEK: 0, unk3300PPABOFMIGNM: 0, chapterInfoList: [], unk3300NEOCMGJCEOJ: 0, unk3300IMLKIJAOADF: 0, weaponEnhanceLevel: 0 };
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
                case /* bool is_content_closed */ 9:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 Unk3300_FOHJDGCAKEK = 3 [json_name = "Unk3300FOHJDGCAKEK"];*/ 3:
                    message.unk3300FOHJDGCAKEK = reader.uint32();
                    break;
                case /* uint32 Unk3300_PPABOFMIGNM = 10 [json_name = "Unk3300PPABOFMIGNM"];*/ 10:
                    message.unk3300PPABOFMIGNM = reader.uint32();
                    break;
                case /* repeated DragonSpineChapterInfo chapter_info_list */ 7:
                    message.chapterInfoList.push(DragonSpineChapterInfo_1.DragonSpineChapterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_NEOCMGJCEOJ = 4 [json_name = "Unk3300NEOCMGJCEOJ"];*/ 4:
                    message.unk3300NEOCMGJCEOJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_IMLKIJAOADF = 12 [json_name = "Unk3300IMLKIJAOADF"];*/ 12:
                    message.unk3300IMLKIJAOADF = reader.uint32();
                    break;
                case /* uint32 weapon_enhance_level */ 8:
                    message.weaponEnhanceLevel = reader.uint32();
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
        /* bool is_content_closed = 9; */
        if (message.isContentClosed !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 Unk3300_FOHJDGCAKEK = 3 [json_name = "Unk3300FOHJDGCAKEK"]; */
        if (message.unk3300FOHJDGCAKEK !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300FOHJDGCAKEK);
        /* uint32 Unk3300_PPABOFMIGNM = 10 [json_name = "Unk3300PPABOFMIGNM"]; */
        if (message.unk3300PPABOFMIGNM !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300PPABOFMIGNM);
        /* repeated DragonSpineChapterInfo chapter_info_list = 7; */
        for (let i = 0; i < message.chapterInfoList.length; i++)
            DragonSpineChapterInfo_1.DragonSpineChapterInfo.internalBinaryWrite(message.chapterInfoList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_NEOCMGJCEOJ = 4 [json_name = "Unk3300NEOCMGJCEOJ"]; */
        if (message.unk3300NEOCMGJCEOJ !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300NEOCMGJCEOJ);
        /* uint32 Unk3300_IMLKIJAOADF = 12 [json_name = "Unk3300IMLKIJAOADF"]; */
        if (message.unk3300IMLKIJAOADF !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300IMLKIJAOADF);
        /* uint32 weapon_enhance_level = 8; */
        if (message.weaponEnhanceLevel !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.weaponEnhanceLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DragonSpineActivityDetailInfo
 */
exports.DragonSpineActivityDetailInfo = new DragonSpineActivityDetailInfo$Type();
