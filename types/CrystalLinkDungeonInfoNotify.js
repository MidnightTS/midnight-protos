"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalLinkDungeonInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CrystalLinkDungeonAvatarInfo_1 = require("./CrystalLinkDungeonAvatarInfo");
const CrystalLinkBuffInfo_1 = require("./CrystalLinkBuffInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkDungeonInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CrystalLinkDungeonInfoNotify", [
            { no: 11, name: "buff_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkBuffInfo_1.CrystalLinkBuffInfo },
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_upper_part", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkDungeonAvatarInfo_1.CrystalLinkDungeonAvatarInfo },
            { no: 4, name: "init_gallery_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { buffInfoList: [], levelId: 0, isUpperPart: false, difficultyId: 0, dungeonAvatarInfoList: [], initGalleryProgress: 0 };
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
                case /* repeated CrystalLinkBuffInfo buff_info_list */ 11:
                    message.buffInfoList.push(CrystalLinkBuffInfo_1.CrystalLinkBuffInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_upper_part */ 13:
                    message.isUpperPart = reader.bool();
                    break;
                case /* uint32 difficulty_id */ 14:
                    message.difficultyId = reader.uint32();
                    break;
                case /* repeated CrystalLinkDungeonAvatarInfo dungeon_avatar_info_list */ 12:
                    message.dungeonAvatarInfoList.push(CrystalLinkDungeonAvatarInfo_1.CrystalLinkDungeonAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 init_gallery_progress */ 4:
                    message.initGalleryProgress = reader.uint32();
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
        /* repeated CrystalLinkBuffInfo buff_info_list = 11; */
        for (let i = 0; i < message.buffInfoList.length; i++)
            CrystalLinkBuffInfo_1.CrystalLinkBuffInfo.internalBinaryWrite(message.buffInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool is_upper_part = 13; */
        if (message.isUpperPart !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isUpperPart);
        /* uint32 difficulty_id = 14; */
        if (message.difficultyId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* repeated CrystalLinkDungeonAvatarInfo dungeon_avatar_info_list = 12; */
        for (let i = 0; i < message.dungeonAvatarInfoList.length; i++)
            CrystalLinkDungeonAvatarInfo_1.CrystalLinkDungeonAvatarInfo.internalBinaryWrite(message.dungeonAvatarInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 init_gallery_progress = 4; */
        if (message.initGalleryProgress !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.initGalleryProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkDungeonInfoNotify
 */
exports.CrystalLinkDungeonInfoNotify = new CrystalLinkDungeonInfoNotify$Type();
