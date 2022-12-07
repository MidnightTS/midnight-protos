"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FleurFairMinigameInfo_1 = require("./FleurFairMinigameInfo");
const FleurFairDungeonSectionInfo_1 = require("./FleurFairDungeonSectionInfo");
const FleurFairChapterInfo_1 = require("./FleurFairChapterInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairActivityDetailInfo", [
            { no: 3, name: "Unk3300_KONOCAMIIIE", kind: "scalar", jsonName: "Unk3300KONOCAMIIIE", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "chapter_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FleurFairChapterInfo_1.FleurFairChapterInfo },
            { no: 6, name: "is_dungeon_unlocked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_HNFNMCKHAJK", kind: "map", jsonName: "Unk3300HNFNMCKHAJK", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FleurFairDungeonSectionInfo_1.FleurFairDungeonSectionInfo } },
            { no: 13, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_FICFGHJNCOA", kind: "map", jsonName: "Unk3300FICFGHJNCOA", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FleurFairMinigameInfo_1.FleurFairMinigameInfo } },
            { no: 10, name: "Unk3300_LOFLGOOIMNH", kind: "scalar", jsonName: "Unk3300LOFLGOOIMNH", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300KONOCAMIIIE: 0, chapterInfoList: [], isDungeonUnlocked: false, unk3300HNFNMCKHAJK: {}, isContentClosed: false, unk3300FICFGHJNCOA: {}, unk3300LOFLGOOIMNH: 0, contentCloseTime: 0 };
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
                case /* uint32 Unk3300_KONOCAMIIIE = 3 [json_name = "Unk3300KONOCAMIIIE"];*/ 3:
                    message.unk3300KONOCAMIIIE = reader.uint32();
                    break;
                case /* repeated FleurFairChapterInfo chapter_info_list */ 5:
                    message.chapterInfoList.push(FleurFairChapterInfo_1.FleurFairChapterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_dungeon_unlocked */ 6:
                    message.isDungeonUnlocked = reader.bool();
                    break;
                case /* map<uint32, FleurFairDungeonSectionInfo> Unk3300_HNFNMCKHAJK = 8 [json_name = "Unk3300HNFNMCKHAJK"];*/ 8:
                    this.binaryReadMap8(message.unk3300HNFNMCKHAJK, reader, options);
                    break;
                case /* bool is_content_closed */ 13:
                    message.isContentClosed = reader.bool();
                    break;
                case /* map<uint32, FleurFairMinigameInfo> Unk3300_FICFGHJNCOA = 9 [json_name = "Unk3300FICFGHJNCOA"];*/ 9:
                    this.binaryReadMap9(message.unk3300FICFGHJNCOA, reader, options);
                    break;
                case /* uint32 Unk3300_LOFLGOOIMNH = 10 [json_name = "Unk3300LOFLGOOIMNH"];*/ 10:
                    message.unk3300LOFLGOOIMNH = reader.uint32();
                    break;
                case /* uint32 content_close_time */ 4:
                    message.contentCloseTime = reader.uint32();
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
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = FleurFairDungeonSectionInfo_1.FleurFairDungeonSectionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairActivityDetailInfo.Unk3300_HNFNMCKHAJK");
            }
        }
        map[key ?? 0] = val ?? FleurFairDungeonSectionInfo_1.FleurFairDungeonSectionInfo.create();
    }
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = FleurFairMinigameInfo_1.FleurFairMinigameInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairActivityDetailInfo.Unk3300_FICFGHJNCOA");
            }
        }
        map[key ?? 0] = val ?? FleurFairMinigameInfo_1.FleurFairMinigameInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_KONOCAMIIIE = 3 [json_name = "Unk3300KONOCAMIIIE"]; */
        if (message.unk3300KONOCAMIIIE !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300KONOCAMIIIE);
        /* repeated FleurFairChapterInfo chapter_info_list = 5; */
        for (let i = 0; i < message.chapterInfoList.length; i++)
            FleurFairChapterInfo_1.FleurFairChapterInfo.internalBinaryWrite(message.chapterInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_dungeon_unlocked = 6; */
        if (message.isDungeonUnlocked !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isDungeonUnlocked);
        /* map<uint32, FleurFairDungeonSectionInfo> Unk3300_HNFNMCKHAJK = 8 [json_name = "Unk3300HNFNMCKHAJK"]; */
        for (let k of Object.keys(message.unk3300HNFNMCKHAJK)) {
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            FleurFairDungeonSectionInfo_1.FleurFairDungeonSectionInfo.internalBinaryWrite(message.unk3300HNFNMCKHAJK[k], writer, options);
            writer.join().join();
        }
        /* bool is_content_closed = 13; */
        if (message.isContentClosed !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* map<uint32, FleurFairMinigameInfo> Unk3300_FICFGHJNCOA = 9 [json_name = "Unk3300FICFGHJNCOA"]; */
        for (let k of Object.keys(message.unk3300FICFGHJNCOA)) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            FleurFairMinigameInfo_1.FleurFairMinigameInfo.internalBinaryWrite(message.unk3300FICFGHJNCOA[k], writer, options);
            writer.join().join();
        }
        /* uint32 Unk3300_LOFLGOOIMNH = 10 [json_name = "Unk3300LOFLGOOIMNH"]; */
        if (message.unk3300LOFLGOOIMNH !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300LOFLGOOIMNH);
        /* uint32 content_close_time = 4; */
        if (message.contentCloseTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairActivityDetailInfo
 */
exports.FleurFairActivityDetailInfo = new FleurFairActivityDetailInfo$Type();
